(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,a,t){e.exports=t(21)},17:function(e,a,t){},19:function(e,a,t){},21:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(3),u=t.n(r),l=(t(17),t(4)),i=t(5),c=t(9),s=t(6),d=t(10),m=t(1),p=t(7),v=t.n(p);t(19);var h=function(e){return o.a.createElement("div",{id:"drum-machine"},o.a.createElement("img",{src:e.logo,className:"App-logo",alt:"logo"}),o.a.createElement("h1",null,"Steven's Drum Machine"),o.a.createElement("br",null),o.a.createElement("div",{id:"display"},e.drumPads))},y=t(8);var w=function(e){return console.log(e.sound),o.a.createElement("div",{className:"drum-pad",id:e.audioId,onClick:e.playButton},e.id,o.a.createElement("audio",{className:"clip",id:e.id,src:e.sound}))},f=function(e){function a(){var e;return Object(l.a)(this,a),(e=Object(c.a)(this,Object(s.a)(a).call(this))).state={buttonsData:y.a},e.playButton=e.playButton.bind(Object(m.a)(Object(m.a)(e))),e}return Object(d.a)(a,e),Object(i.a)(a,[{key:"playButton",value:function(e){var a=e.target.lastChild;a.volume=.5,console.log(a.src)}},{key:"render",value:function(){var e=this,a=this.state.buttonsData.map(function(a){return o.a.createElement(w,{id:a.name,key:a.name,audioId:a.sound.type,sound:a.sound.url,playButton:e.playButton})});return o.a.createElement(h,{logo:v.a,drumPads:a})}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(o.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},8:function(e){e.exports={a:[{name:"Q",sound:{url:"./1-Clap.wav",type:"clap"}},{name:"W",sound:{url:"./2-ClHat.wav",type:"clhat"}},{name:"E",sound:{url:"./3-Cymbal.wav",type:"cymbal"}},{name:"A",sound:{url:"./4-Kick.wav",type:"kick"}},{name:"S",sound:{url:"./5-Snare.wav",type:"snare"}},{name:"D",sound:{url:"./6-Tom.wav",type:"tom"}},{name:"Z",sound:{url:"./HfHat.wav",type:"hfhat"}},{name:"X",sound:{url:"./MultiCrash.wav",type:"multicrash"}},{name:"C",sound:{url:"./MultiCrashHi.wav",type:"multicrashhi"}}]}}},[[11,2,1]]]);
//# sourceMappingURL=main.3db8b8fe.chunk.js.map