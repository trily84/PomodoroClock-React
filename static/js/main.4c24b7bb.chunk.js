(this["webpackJsonppomodoro-clock"]=this["webpackJsonppomodoro-clock"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var s=n(0),i=n(2),r=n.n(i),o=n(4),a=n.n(o),c=(n(14),n(5)),d=n(6),l=n(1),u=n(8),m=n(7),h=(n(15),function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var s;return Object(c.a)(this,n),(s=t.call(this,e)).state={breakLength:5,sessionLength:25,timerState:"paused"},s.appendZero=function(e){return e<=9?"0"+e:e},s.handleBreakIncrement=s.handleBreakIncrement.bind(Object(l.a)(s)),s.handleBreakDecrement=s.handleBreakDecrement.bind(Object(l.a)(s)),s.handleSessionIncrement=s.handleSessionIncrement.bind(Object(l.a)(s)),s.handleSessionDecrement=s.handleSessionDecrement.bind(Object(l.a)(s)),s.startStop=s.startStop.bind(Object(l.a)(s)),s.reset=s.reset.bind(Object(l.a)(s)),s.appendZero=s.appendZero.bind(Object(l.a)(s)),s.sessionRunning=!0,s.breakRunning=!1,s}return Object(d.a)(n,[{key:"handleBreakIncrement",value:function(){this.state.breakLength<=59&&this.setState((function(e){return{breakLength:e.breakLength+1}}),(function(){console.log(this.state)}))}},{key:"handleBreakDecrement",value:function(){this.state.breakLength>1&&this.setState((function(e){return{breakLength:e.breakLength-1}}))}},{key:"handleSessionIncrement",value:function(){this.state.sessionLength<=59&&this.setState((function(e){return{sessionLength:e.sessionLength+1}}))}},{key:"handleSessionDecrement",value:function(){this.state.sessionLength>1&&this.setState((function(e){return{sessionLength:e.sessionLength-1}}))}},{key:"startStop",value:function(){var e=this;"Start"===document.getElementById("start_stop").innerHTML?document.getElementById("start_stop").innerHTML="Stop":"Stop"===document.getElementById("start_stop").innerHTML&&(document.getElementById("start_stop").innerHTML="Start");var t=60*parseInt(document.getElementById("minutes").innerHTML)+parseInt(document.getElementById("seconds").innerHTML)-1;console.log("timeRemain:",t);var n=t;function s(){return Math.floor(n/60)}function i(e){return e<=9?"0"+e:e}console.log("secs:",n);var r=function(){(document.getElementById("minutes").innerHTML=i(s()),document.getElementById("seconds").innerHTML=i(n-Math.round(60*s())),n>0&&(n-=1),console.log(n),"00"===document.getElementById("minutes").innerHTML&&"00"===document.getElementById("seconds").innerHTML)&&(new Audio("http://thecyberbuddy.com/sounds/TwoBells.wav").play(),!1===e.breakRunning?(document.getElementById("timer-label").innerHTML="Break Countdown..",document.getElementById("minutes").innerHTML=e.state.breakLength,document.getElementById("seconds").innerHTML="0",n=60*parseInt(document.getElementById("minutes").innerHTML)+parseInt(document.getElementById("seconds").innerHTML),e.breakRunning=!0,e.sessionRunning=!1):(document.getElementById("timer-label").innerHTML="Session Countdown..",document.getElementById("minutes").innerHTML=e.state.sessionLength,document.getElementById("seconds").innerHTML="0",n=60*parseInt(document.getElementById("minutes").innerHTML)+parseInt(document.getElementById("seconds").innerHTML),e.breakRunning=!1,e.sessionRunning=!0))};"paused"===this.state.timerState?this.setState({timerState:setInterval((function(){return r()}),100)},(function(){console.log("timerState:",this.state.timerState)})):"paused"!==this.state.timerState&&(clearInterval(this.state.timerState),this.setState({timerState:"paused"},(function(){console.log("timerState:",this.state.timerState)})))}},{key:"reset",value:function(){clearInterval(this.state.timerState),document.getElementById("minutes").innerHTML=this.state.sessionLength,document.getElementById("seconds").innerHTML="00",this.setState((function(e){return{timerState:"paused",breakLength:5,sessionLength:25}})),document.getElementById("start_stop").innerHTML="Start"}},{key:"render",value:function(){return Object(s.jsxs)("div",{className:"out",children:[Object(s.jsx)("div",{id:"title",children:"POMODORO CLOCK"}),Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("div",{id:"session-label",children:"Set Session"}),Object(s.jsx)("div",{id:"break-label",children:"Set Break"}),Object(s.jsx)("button",{id:"break-increment",onClick:this.handleBreakIncrement,children:"+"}),Object(s.jsx)("button",{id:"break-decrement",onClick:this.handleBreakDecrement,children:"-"}),Object(s.jsx)("button",{id:"session-increment",onClick:this.handleSessionIncrement,children:"+"}),Object(s.jsx)("button",{id:"session-decrement",onClick:this.handleSessionDecrement,children:"-"}),Object(s.jsx)("div",{id:"break-length",children:this.appendZero(this.state.breakLength)+" minutes"}),Object(s.jsx)("div",{id:"session-length",children:this.appendZero(this.state.sessionLength)+" minutes"}),Object(s.jsx)("div",{src:"tomato.png",id:"tomato"}),Object(s.jsx)("div",{id:"timer-label",children:"Session Countdown.."}),Object(s.jsxs)("div",{id:"time-left",children:[Object(s.jsx)("span",{id:"minutes",children:this.appendZero(this.state.sessionLength)}),":",Object(s.jsx)("span",{id:"seconds",children:"00"})]}),Object(s.jsx)("button",{id:"start_stop",onClick:this.startStop,children:"Start"}),Object(s.jsx)("button",{id:"reset",onClick:this.reset,children:"Reset"})]})]})}}]),n}(i.Component)),b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,s=t.getFID,i=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),s(e),i(e),r(e),o(e)}))};a.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(h,{})}),document.getElementById("root")),b()}},[[16,1,2]]]);
//# sourceMappingURL=main.4c24b7bb.chunk.js.map