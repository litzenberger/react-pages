(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(18)},16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),o=n(7),r=n.n(o),c=(n(16),n(1)),i=n(2),l=n(4),u=n(3),m=n(5),g=n(8),p=n.n(g),h=(n(17),n(9)),d=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={message:""},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("form",{action:".",onSubmit:function(t){t.preventDefault(),e.props.onSubmitMessage(e.state.message),e.setState({message:""})}},s.a.createElement("input",{type:"text",placeholder:"Enter message...",value:this.state.message,onChange:function(t){return e.setState({message:t.target.value})}}),s.a.createElement("input",{type:"submit",value:"Send"}))}}]),t}(a.Component),f=function(e){var t=e.name,n=e.message;return s.a.createElement("p",null,s.a.createElement("strong",null,t)," ",s.a.createElement("em",null,n))},b="ws://localhost:3030",v=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={name:"Bob",messages:[]},n.ws=new WebSocket(b),n.addMessage=function(e){return n.setState(function(t){return{messages:[e].concat(Object(h.a)(t.messages))}})},n.submitMessage=function(e){var t={name:n.state.name,message:e};n.ws.send(JSON.stringify(t)),n.addMessage(t)},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.ws.onopen=function(){console.log("connected")},this.ws.onmessage=function(t){var n=JSON.parse(t.data);e.addMessage(n)},this.ws.onclose=function(){console.log("disconnected"),e.setState({ws:new WebSocket(b)})}}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("label",{htmlFor:"name"},"Name:\xa0",s.a.createElement("input",{type:"text",id:"name",placeholder:"Enter your name...",value:this.state.name,onChange:function(t){return e.setState({name:t.target.value})}})),s.a.createElement(d,{ws:this.ws,onSubmitMessage:function(t){return e.submitMessage(t)}}),this.state.messages.map(function(e,t){return s.a.createElement(f,{key:t,message:e.message,name:e.name})}))}}]),t}(a.Component),w=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement("header",{className:"App-header"},s.a.createElement("img",{src:p.a,className:"App-logo",alt:"logo"}),s.a.createElement("h1",{className:"App-title"},"Welcome to React")),s.a.createElement(v,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"}},[[10,1,2]]]);
//# sourceMappingURL=main.26563ba5.chunk.js.map