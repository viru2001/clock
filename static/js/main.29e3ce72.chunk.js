(this.webpackJsonpstopwatch=this.webpackJsonpstopwatch||[]).push([[0],{39:function(e,c,t){},48:function(e,c,t){},52:function(e,c,t){},53:function(e,c,t){},58:function(e,c,t){"use strict";t.r(c);var n=t(0),s=t.n(n),i=t(18),a=t.n(i),l=t(32),r=t(6),j=t(70),h=(t(39),t(71)),o=t(31),d=t.n(o),b=t(20),O=t.n(b),u=t(2),x=function(){var e=Object(n.useState)(0),c=Object(r.a)(e,2),t=c[0],s=c[1],i=Object(n.useState)(!1),a=Object(r.a)(i,2),o=a[0],b=a[1],x=Object(n.useState)(!1),m=Object(r.a)(x,2),v=m[0],f=m[1],N=Object(n.useState)(!1),p=Object(r.a)(N,2),S=p[0],C=p[1],g=Object(n.useState)(0),w=Object(r.a)(g,2),k=w[0],M=w[1],I=Object(n.useState)(!1),T=Object(r.a)(I,2),y=T[0],E=T[1],L=Object(n.useState)([]),z=Object(r.a)(L,2),D=z[0],P=z[1];return Object(n.useEffect)((function(){var e=null;return o?e=setInterval((function(){s((function(e){return e+10}))}),10):clearInterval(e),function(){clearInterval(e)}}),[o]),Object(n.useEffect)((function(){var e=null;return y?e=setInterval((function(){M((function(e){return e+10}))}),10):clearInterval(e),function(){clearInterval(e)}}),[y]),Object(u.jsxs)("div",{id:"mainBody",children:[Object(u.jsx)(O.a,{amount:2}),Object(u.jsxs)("div",{id:"counter",children:[Object(u.jsx)("div",{className:"innerContainer",children:Object(u.jsx)("h1",{className:"hh",children:("0"+Math.floor(t/6e4/60)).slice(-2)})}),Object(u.jsx)("div",{children:Object(u.jsx)("h1",{className:"hh",children:" :"})}),Object(u.jsx)("div",{className:"innerContainer",children:Object(u.jsx)("h1",{className:"mm",children:("0"+Math.floor(t/6e4%60)).slice(-2)})}),Object(u.jsx)("div",{children:Object(u.jsx)("h1",{className:"hh",children:" :"})}),Object(u.jsx)("div",{className:"innerContainer",children:Object(u.jsxs)("h1",{className:"ss",children:[" ",("0"+Math.floor(t/1e3%60)).slice(-2)]})}),Object(u.jsx)("div",{children:Object(u.jsx)("h1",{className:"hh",children:" :"})}),Object(u.jsx)("div",{className:"innerContainer",children:Object(u.jsxs)("h1",{className:"ms",children:[" ",("00"+t%1e3).slice(-3)]})}),Object(u.jsx)("h1",{className:"whichTimer",children:"hours"}),Object(u.jsx)("h1",{}),Object(u.jsx)("h1",{className:"whichTimer",children:"minutes"}),Object(u.jsx)("h1",{}),Object(u.jsx)("h1",{className:"whichTimer",children:"sec"}),Object(u.jsx)("h1",{}),Object(u.jsx)("h1",{className:"whichTimer",children:"mili sec"})]}),Object(u.jsxs)("div",{id:"lapCounter",children:[Object(u.jsx)("div",{className:"innerContainer",children:Object(u.jsx)("h1",{className:"lap-hh",children:("0"+Math.floor(k/6e4/60)).slice(-2)})}),Object(u.jsx)("div",{children:Object(u.jsx)("h1",{className:"lap-hh",children:" :"})}),Object(u.jsx)("div",{className:"innerContainer",children:Object(u.jsx)("h1",{className:"lap-mm",children:("0"+Math.floor(k/6e4%60)).slice(-2)})}),Object(u.jsx)("div",{children:Object(u.jsx)("h1",{className:"lap-hh",children:" :"})}),Object(u.jsx)("div",{className:"innerContainer",children:Object(u.jsxs)("h1",{className:"lap-ss",children:[" ",("0"+Math.floor(k/1e3%60)).slice(-2)]})}),Object(u.jsx)("div",{children:Object(u.jsx)("h1",{className:"lap-hh",children:" :"})}),Object(u.jsx)("div",{className:"innerContainer",children:Object(u.jsxs)("h1",{className:"lap-ms",children:[" ",("00"+k%1e3).slice(-3)]})})]}),Object(u.jsxs)("div",{id:"controlButtons",children:[!S&&!v&&Object(u.jsx)(j.a,{variant:"success",size:"lg",onClick:function(){b(!0),f(!0),E(!0)},children:"START"}),!S&&v&&Object(u.jsx)(j.a,{variant:"danger",size:"lg",onClick:function(){b(!1),f(!1),C(!0),E(!1)},children:"PAUSE"}),S&&Object(u.jsx)(j.a,{variant:"success",size:"lg",onClick:function(){b(!0),f(!0),C(!1),E(!0)},children:"RESUME"}),S&&Object(u.jsx)(j.a,{variant:"warning",size:"lg",onClick:function(){s(0),b(!1),f(!1),C(!1),M(0),E(!1),P([])},children:"RESET"}),!S&&v&&Object(u.jsx)(j.a,{variant:"primary",size:"lg",onClick:function(){var e={sno:0===D.length?0:D[D.length-1].sno+1,lhh:("0"+Math.floor(k/6e4/60)).slice(-2),lmm:("0"+Math.floor(k/6e4%60)).slice(-2),lss:("0"+Math.floor(k/1e3%60)).slice(-2),lms:("00"+k%1e3).slice(-3),hh:("0"+Math.floor(t/6e4/60)).slice(-2),mm:("0"+Math.floor(t/6e4%60)).slice(-2),ss:("0"+Math.floor(t/1e3%60)).slice(-2),ms:("00"+t%1e3).slice(-3)};P([].concat(Object(l.a)(D),[e])),M(0)},children:"LAP"})]}),Object(u.jsx)("div",{id:"tableContainer",children:D.length>0?Object(u.jsxs)(h.a,{responsive:!0,id:"lapTable",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"Lap"}),Object(u.jsx)("th",{children:"Lap Timing"}),Object(u.jsx)("th",{children:"Overall Timing"}),Object(u.jsx)("th",{})]})}),Object(u.jsx)("tbody",{children:D.map((function(e){return e?Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:"#"+Number(e.sno+1)}),Object(u.jsx)("td",{children:e.lhh+":"+e.lmm+":"+e.lss+":"+e.lms}),Object(u.jsx)("td",{children:e.hh+":"+e.mm+":"+e.ss+":"+e.ms}),Object(u.jsx)("td",{children:Object(u.jsx)(d.a,{style:{color:"red"},onClick:function(){return function(e){var c=D.filter((function(c){return c!==e}));P(c)}(e)}})})]},e.sno):null}))})]}):null})]})},m=t(14),v=(t(48),t(15));function f(){return Object(u.jsxs)(m.a,{id:"navbar",className:"justify-content-center",activeKey:"/Digital Clock",children:[Object(u.jsx)(m.a.Item,{children:Object(u.jsx)(m.a.Link,{as:v.b,to:"/clock",children:"Clock"})}),Object(u.jsx)(m.a.Item,{children:Object(u.jsx)(m.a.Link,{as:v.b,to:"/stopwatch",eventKey:"link-1",children:"Stopwatch"})}),Object(u.jsx)(m.a.Item,{children:Object(u.jsx)(m.a.Link,{as:v.b,to:"/countdown",eventKey:"link-2",children:"Countdown"})})]})}t(52);var N=function(){var e=Object(n.useState)((new Date).toLocaleTimeString()),c=Object(r.a)(e,2),t=c[0],s=c[1],i=Object(n.useState)((new Date).toDateString()),a=Object(r.a)(i,2),l=a[0],j=a[1];return setInterval((function(){s((new Date).toLocaleTimeString()),j((new Date).toDateString())}),1e3),Object(u.jsx)("div",{className:"d-flex justify-content-center align-items-center",id:"main-div",children:Object(u.jsxs)("div",{className:"d-flex flex-column",id:"inner-div",children:[Object(u.jsx)("h1",{id:"date",children:l}),Object(u.jsx)("h1",{id:"time",children:t})]})})},p=(t(53),t(72)),S=t(23),C=t.n(S),g=t.p+"static/media/reminder.32531d2d.mp3";function w(){for(var e=[],c=0;c<=60;c++)e.push({value:c,label:("0"+c).slice(-2)});var t=Object(n.useState)(!1),s=Object(r.a)(t,2),i=s[0],a=s[1],l=Object(n.useState)(!1),h=Object(r.a)(l,2),o=h[0],d=h[1],b=Object(n.useState)(!1),x=Object(r.a)(b,2),m=x[0],v=x[1],f=Object(n.useState)(!1),N=Object(r.a)(f,2),S=N[0],w=N[1],k=Object(n.useState)(!1),M=Object(r.a)(k,2),I=M[0],T=M[1],y=Object(n.useState)(!1),E=Object(r.a)(y,2),L=E[0],z=E[1],D=Object(n.useState)(!1),P=Object(r.a)(D,2),A=P[0],R=P[1],B=Object(n.useState)(0),U=Object(r.a)(B,2),K=U[0],H=U[1],J=Object(n.useState)(0),F=Object(r.a)(J,2),G=F[0],Y=F[1],q=Object(n.useState)(0),Q=Object(r.a)(q,2),V=Q[0],W=Q[1];return Object(n.useEffect)((function(){var e,c=null;return I?c=setInterval((function(){W((function(c){return 0!==c?c-1:0===c&&G>=0?(Y((function(c){return 0!==c?c-1:0===c&&0===K?(e=1,0):void(0===c&&K>0&&H((function(e){return 0!==e?(Y(59),e-1):0===e?(Y(0),0):void 0})))})),1===e?(S&&R(!0),z(!0),0):59):(S&&R(!0),z(!0),0)}))}),1e3):clearInterval(c),function(){clearInterval(c)}}),[I,K,G,S]),Object(u.jsxs)("div",{id:"outerContainer",children:[Object(u.jsx)(O.a,{amount:2}),!1===m?Object(u.jsxs)("div",{id:"select-grid",children:[Object(u.jsx)("h1",{children:"Hours"}),Object(u.jsx)("h1",{children:"Minutes"}),Object(u.jsx)("h1",{children:"Seconds"}),Object(u.jsxs)(p.a.Control,{className:"selector",as:"select",value:K,onChange:function(e){H(Number(e.target.value))},children:[Object(u.jsx)("option",{value:"",disabled:!0,children:"Select Hours"}),e.map((function(e,c){return Object(u.jsx)("option",{value:e.value,children:e.label},c)}))]}),Object(u.jsxs)(p.a.Control,{className:"selector",as:"select",value:G,onChange:function(e){Y(Number(e.target.value))},children:[Object(u.jsx)("option",{value:"",disabled:!0,children:"Select Minutes"}),e.map((function(e,c){return Object(u.jsx)("option",{value:e.value,children:e.label},c)}))]}),Object(u.jsxs)(p.a.Control,{className:"selector",as:"select",value:V,onChange:function(e){W(Number(e.target.value))},children:[Object(u.jsx)("option",{value:"",disabled:!0,children:"Select Seconds"}),e.map((function(e,c){return Object(u.jsx)("option",{value:e.value,children:e.label},c)}))]})]}):Object(u.jsxs)("div",{id:"timer",children:[Object(u.jsx)("div",{className:"innerContainer",children:Object(u.jsx)("h1",{className:"countdown-hh",children:("0"+K).slice(-2)})}),Object(u.jsx)("div",{children:Object(u.jsx)("h1",{className:"countdown-hh",children:" :"})}),Object(u.jsx)("div",{className:"innerContainer",children:Object(u.jsx)("h1",{className:"countdown-mm",children:("0"+G).slice(-2)})}),Object(u.jsx)("div",{children:Object(u.jsx)("h1",{className:"countdown-hh",children:" :"})}),Object(u.jsx)("div",{className:"innerContainer",children:Object(u.jsxs)("h1",{className:"countdown-ss",children:[" ",("0"+V).slice(-2)]})})]}),Object(u.jsxs)("div",{id:"controlButtons",children:[!i&&Object(u.jsx)(j.a,{size:"lg",variant:"success",onClick:function(){a(!0),v(!0),T(!0)},children:"START"}),!L&&i&&!o&&Object(u.jsx)(j.a,{size:"lg",variant:"warning",onClick:function(){d(!0),T(!1)},children:"PAUSE"}),!L&&i&&o&&Object(u.jsx)(j.a,{size:"lg",variant:"warning",onClick:function(){d(!1),T(!0)},children:"RESUME"}),i&&Object(u.jsx)(j.a,{size:"lg",variant:"danger",onClick:function(){a(!1),v(!1),H(0),Y(0),W(0),T(!1),R(!1),z(!1)},children:"CANCEL"}),!i&&Object(u.jsx)(p.a.Check,{onClick:function(e){w(e.target.checked)},className:"sound-checkbox",type:"checkbox",label:"Play sound when countdown ends"})]}),Object(u.jsx)(C.a,{url:g,playStatus:A?C.a.status.PLAYING:C.a.status.STOPPED,playFromPosition:300})]})}var k=t(7);var M=function(){return Object(u.jsxs)(v.a,{children:[Object(u.jsx)(f,{}),Object(u.jsxs)(k.c,{children:[Object(u.jsx)(k.a,{exact:!0,path:"/clock",render:function(){return Object(u.jsx)(N,{})}}),Object(u.jsx)(k.a,{exact:!0,path:"/stopwatch",children:Object(u.jsx)(x,{})}),Object(u.jsx)(k.a,{exact:!0,path:"/countdown",children:Object(u.jsx)(w,{})})]})]})};t(56);a.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(M,{})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.29e3ce72.chunk.js.map