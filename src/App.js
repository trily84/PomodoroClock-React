import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    breakLength: 5,
    sessionLength: 25,
    timerState: "paused",
  }

  constructor(props) {
    super(props)
    this.handleBreakIncrement = this.handleBreakIncrement.bind(this)
    this.handleBreakDecrement = this.handleBreakDecrement.bind(this)
    this.handleSessionIncrement = this.handleSessionIncrement.bind(this)
    this.handleSessionDecrement = this.handleSessionDecrement.bind(this)
    this.startStop = this.startStop.bind(this)
    this.reset = this.reset.bind(this)
    this.appendZero = this.appendZero.bind(this)
    this.sessionRunning = true
    this.breakRunning = false
  }

  appendZero = (number) => {
    if (number <= 9)
      return "0" + number;
    else
      return number; 
  }

  handleBreakIncrement() {
    if (this.state.breakLength <= 59) {
    this.setState(prevState => ({
      breakLength: prevState.breakLength + 1
    }), function () {console.log(this.state)}
    )
    }
  }

  handleBreakDecrement() {
    if (this.state.breakLength > 1) {
    this.setState(prevState => ({
      breakLength: prevState.breakLength - 1
    })) 
    }
  }

  handleSessionIncrement() {
    if (this.state.sessionLength <= 59) {
    this.setState(prevState => ({
      sessionLength: prevState.sessionLength + 1
    })) 
    }
  }

  handleSessionDecrement() {
    if (this.state.sessionLength > 1) {
    this.setState(prevState => ({
      sessionLength: prevState.sessionLength - 1
    })) 
    }
  }

  startStop() {
    
    if (document.getElementById("start_stop").innerHTML === "Start") {
      document.getElementById("start_stop").innerHTML = "Stop"
    }  

    else if (document.getElementById("start_stop").innerHTML === "Stop") {
      document.getElementById("start_stop").innerHTML = "Start"
    }  

    var timeRemain = (parseInt(document.getElementById("minutes").innerHTML) * 60) + parseInt(document.getElementById("seconds").innerHTML) - 1
    console.log("timeRemain:", timeRemain)
    var secs = timeRemain
    console.log("secs:", secs)

    function getminutes() { 
      //minutes is seconds divided by 60, rounded down 
      return Math.floor(secs / 60)
    }

    function getseconds() { 
      //take minutes remaining (as seconds) away from total seconds remaining 
      return secs - Math.round(getminutes() * 60)
    } 

    function appendZero(number) {
      if (number <= 9)
        return "0" + number
      else
        return number
    }

    const decrement = () => {
        document.getElementById("minutes").innerHTML = appendZero(getminutes())
        document.getElementById("seconds").innerHTML = appendZero(getseconds())
        if (secs > 0) {
        secs = secs - 1
        }
        console.log(secs)
       
        if (document.getElementById("minutes").innerHTML === "00" && document.getElementById("seconds").innerHTML === "00") {
          var alarm = new Audio("http://thecyberbuddy.com/sounds/TwoBells.wav");
          alarm.play();
          // document.getElementById("beep").play();

          if (this.breakRunning === false) {
              document.getElementById("timer-label").innerHTML = "Break Countdown.."
              document.getElementById("minutes").innerHTML = this.state.breakLength
              document.getElementById("seconds").innerHTML = "0"
              secs = (parseInt(document.getElementById("minutes").innerHTML) * 60) + parseInt(document.getElementById("seconds").innerHTML)
              this.breakRunning = true
              this.sessionRunning = false
          }    
          else {
              document.getElementById("timer-label").innerHTML = "Session Countdown.."
              document.getElementById("minutes").innerHTML = this.state.sessionLength
              document.getElementById("seconds").innerHTML = "0"
              secs = (parseInt(document.getElementById("minutes").innerHTML) * 60) + parseInt(document.getElementById("seconds").innerHTML)
              this.breakRunning = false
              this.sessionRunning = true
          }
        }
    }    

    if (this.state.timerState === "paused") {
      this.setState({
        timerState: setInterval(() => decrement(), 100),
      }, function () {console.log("timerState:", this.state.timerState)})
    }
    
    else if (this.state.timerState !== "paused") {
      clearInterval(this.state.timerState)
      this.setState({
        timerState: "paused"
      }, function () {console.log("timerState:", this.state.timerState)})
    }

  }

  reset() {
    clearInterval(this.state.timerState)
    document.getElementById("minutes").innerHTML = this.state.sessionLength
    document.getElementById("seconds").innerHTML = "00"
    this.setState(prevState => ({
      timerState: "paused",
      breakLength: 5,
      sessionLength: 25,
    }))
    document.getElementById("start_stop").innerHTML = "Start"
  }

  render() {
    return (
      <div className="out">

      <div id="title">POMODORO CLOCK</div>

      <div className="container">
        <div id="session-label">Set Session</div>
        <div id="break-label">Set Break</div>
        <button id="break-increment" onClick={this.handleBreakIncrement}>+</button>
        <button id="break-decrement" onClick={this.handleBreakDecrement}>-</button>
        <button id="session-increment" onClick={this.handleSessionIncrement}>+</button>
        <button id="session-decrement" onClick={this.handleSessionDecrement}>-</button>
        <div id="break-length">{this.appendZero(this.state.breakLength)+" minutes"}</div>
        <div id="session-length">{this.appendZero(this.state.sessionLength)+" minutes"}</div>
        <div src="tomato.png" id="tomato"></div>
        <div id="timer-label">Session Countdown..</div>
        <div id="time-left"><span id="minutes">{this.appendZero(this.state.sessionLength)}</span>:<span id="seconds">00</span></div>
        <button id="start_stop" onClick={this.startStop}>Start</button>
        <button id="reset" onClick={this.reset}>Reset</button>
        {/* <audio id="beep" src="./src/Rooster.mp3"></audio> */}
      </div>

      </div>
    );
  }
}

export default App;
