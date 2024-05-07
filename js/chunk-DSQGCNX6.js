import{c as g,d as x}from"./chunk-77XAXZRM.js";g();var nt=()=>c("main > .inner").offsetHeight,c=(t,e=document)=>t[0]==="#"?e.getElementById(t.substring(1)):e.querySelector(t);c.all=(t,e=document)=>e.querySelectorAll(t);c.each=(t,e,l)=>{c.all(t,l).forEach(e)};g();var P=function(t,e){let l=t.parentNode;l.lastChild===t?l.appendChild(e):l.insertBefore(e,t.nextSibling)},it=function(t,e,l,s){let n=document.createElement(e);switch(Object.assign(n,l),s){case"after":P(t,n);break;case"replace":t.innerHTML="",t.appendChild(n);break;default:t.appendChild(n)}return n},at=function(t,e){let l=document.createElement("div");Object.assign(l,e),t.parentNode.insertBefore(l,t),t.parentNode.removeChild(t),l.appendChild(t)},lt=function(t){return t.getBoundingClientRect().height},ct=function(t,e){t.style.width=typeof e=="number"?e+"rem":e};var N=function(t){return t.getBoundingClientRect().top};var ut=function(t){return t.style.display},H=function(t,e){return t.style.display=e,t},pt=function(t,e){return c(e,t)};function w(){Object.assign(HTMLElement.prototype,{child(t){return c(t,this)},find(t){return c.all(t,this)},_class(t,e,l){(e.indexOf(" ")?e.split(" "):[e]).forEach(n=>{t==="toggle"?this.classList.toggle(n,l):this.classList[t](n)})},addClass(t){return this._class("add",t),this},removeClass(t){return this._class("remove",t),this},toggleClass(t,e){return this._class("toggle",t,e),this},hasClass(t){return this.classList.contains(t)}})}g();var O=x;w();var gt=O.statics.indexOf("//")>0?O.statics:O.root,bt={x:0,y:0},D=0,$,F,xt=document.getElementsByTagName("body")[0],yt=document.documentElement,Tt=c("#container"),Et=c("#loading"),W=c("#nav"),Ht=c("#header"),Lt=W.child(".toggle"),Mt=c("#quick"),vt=c("#sidebar"),wt=c("#brand"),q=c("#tool"),R,_,Y,Q,G=c("#search"),k,U,V,X=window.innerHeight,J=window.innerWidth,K=0,Z=window.location.href,z;function Ot(t){k=t}function kt(t){U=t}function Ct(t){V=t}function Bt(t){X=t}function jt(t){J=t}function At(t){D=t}function Nt(t){F=t}function St(t){K=t}function It(t){Z=t}function Pt(t){z=t}function Dt(t){$=t}function $t(t){R=t}function Ft(t){_=t}function Wt(t){Y=t}function qt(t){Q=t}function Rt(t){q=t}function _t(t){G=t}g();g();var j=class{constructor(){this.queue=[]}add(e){return this.queue.push(new M(e)),this}play(){this.queue.forEach(e=>e.play())}},S={targets:null,duration:1/0,easing:"linear",delay:0,begin:null,update:null,complete:null},C=()=>{let t={linear:()=>s=>s},e={Sine:()=>s=>1-Math.cos(s*Math.PI/2),Circ:()=>s=>1-Math.sqrt(1-s*s),Back:()=>s=>s*s*(3*s-2),Bounce:()=>s=>{let n,i=4;for(;s<((n=Math.pow(2,--i))-1)/11;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((n*3-2)/22-s,2)}};return["Quad","Cubic","Quart","Quint","Expo"].forEach((s,n)=>{e[s]=()=>i=>Math.pow(i,n+2)}),Object.keys(e).forEach(s=>{let n=e[s];t["easeIn"+s]=n,t["easeOut"+s]=()=>i=>1-n()(1-i),t["easeInOut"+s]=()=>i=>i<.5?n()(i*2)/2:1-n()(i*-2+2)/2,t["easeOutIn"+s]=()=>i=>i<.5?(1-n()(1-i*2))/2:(n()(i*2-1)+1)/2}),t},tt=["translateX","translateY","translateZ"],B=(t,e)=>t instanceof HTMLElement&&t.style&&"transform"in t.style&&tt.includes(e)?"transform":t instanceof HTMLElement&&t.style&&e in t.style?"style":"attribute",et=t=>{let e=Date.now()+t.delay,l=e+t.duration,s=!!t.targets,n=[],i=()=>{if(s){Array.isArray(t.targets)||(t.targets=[t.targets]);for(let o of t.targets){let u={};for(let a in t.dest){let r=t.dest[a];if(Array.isArray(r))if(r.length===2&&typeof r[0]!="object"){switch(B(o,a)){case"transform":typeof r[0]=="string"?o.style.transform=`${a}(${r[0]})`:o.style.transform=`${a}(${r[0]}px)`;break;case"style":o.style[a]=r[0];break;case"attribute":o[a]=r[0];break}u[a]=r[0],t.dest[a]=r[1]}else{let f=0;for(let d of r)d.startTimeStamp=f,f+=d.duration;u[a]=o[a]}else switch(B(o,a)){case"transform":let d=new RegExp(`${a}((w+))`,"g");u[a]=o.style.transform.match(d)[0];break;case"style":u[a]=o.style[a];break;case"attribute":u[a]=o[a]}}n.push(u)}}},h=(o,u,a,r,f,d=!1)=>{let m;if(typeof r=="string")if(r.endsWith("%"))m="%",r=parseFloat(r);else if(r.endsWith("px"))m="px",r=parseFloat(r);else throw new TypeError("string value must ends with '%' or 'px'");let p=d?r:(r-u)*a+u;switch(m&&(p+=m),B(o,f)){case"transform":m?o.style.transform=`${f}(${p})`:o.style.transform=`${f}(${p}px)`;break;case"style":o.style[f]=p;break;case"attribute":o[f]=p}},L=(o,u,a=!1)=>{t.targets.forEach((r,f)=>{Object.keys(t.dest).forEach(d=>{let m=parseFloat(n[f][d]),p=t.dest[d];if(typeof p=="object")if(Array.isArray(p)){let b=0;for(;b<p.length&&!(u-e<p[b].startTimeStamp);b++);let{value:T,duration:E,easing:A,startTimeStamp:I}=p[b-1];u<=e+E+I?(o=C()[A||t.easing]()((u-e)/E),h(r,m,o,T,d)):a&&h(r,m,o,T,d,a)}else{let{value:b,duration:T,easing:E}=p;u<=e+T?(o=C()[E||t.easing]()((u-e)/T),h(r,m,o,b,d)):a&&h(r,m,o,b,d,a)}else typeof p=="function"&&(p=p(r,f)),h(r,m,o,p,d,a)})})},y=()=>{let o=Date.now();if(o>l){L(1,o,!0),typeof t.complete=="function"&&t.complete(t.targets),t.isPlay=!1;return}if(o<e){requestAnimationFrame(y);return}let u=C()[t.easing]()((o-e)/t.duration);s&&L(u,o),typeof t.update=="function"&&t.update(t.targets),requestAnimationFrame(y)};i(),typeof t.begin=="function"&&t.begin(t.targets),y()},M=class{constructor(e=S){e=Object.assign({},S,e);let{targets:l,duration:s,easing:n,delay:i,begin:h,update:L,complete:y,...o}=e;this.targets=l,this.duration=s,this.easing=n,this.delay=i,this.begin=h,this.update=L,this.complete=y,this.dest=o||{},this.tl=null,this.isPlay=!1}timeline(){return this.tl===null&&(this.tl=new j),this.tl}play(){this.isPlay||(this.isPlay=!0,et(this))}},v=t=>new M(t);v.random=function(t,e){return Math.floor(Math.random()*(e-t+1))+t};var Kt=(t,e,l,s)=>{let n,i="none";switch(e){case 0:n={opacity:[1,0]};break;case 1:n={opacity:[0,1]},i="block";break;case"bounceUpIn":n={begin(h){H(t,"block")},translateY:[{value:-60,duration:200},{value:10,duration:200},{value:-5,duration:200},{value:0,duration:200}],opacity:[0,1]},i="block";break;case"shrinkIn":n={begin(h){H(t,"block")},scale:[{value:1.1,duration:300},{value:1,duration:200}],opacity:1},i="block";break;case"slideRightIn":n={begin(h){H(t,"block")},translateX:["100%","0%"],opacity:[0,1]},i="block";break;case"slideRightOut":n={translateX:["0%","100%"],opacity:[1,0]};break;default:n=e,i=e.display;break}v(Object.assign({targets:t,duration:200,easing:"linear",begin(){s&&s()},complete(){H(t,i),l&&l()}},n)).play()},Zt=(t,e,l)=>{v({targets:typeof e=="number"&&typeof t!="number"?t.parentNode:document.scrollingElement,duration:500,easing:"easeInOutQuad",scrollTop:e||(typeof t=="number"?t:t?N(t)+document.documentElement.scrollTop-k:0),complete(){l&&l()}}).play()};export{nt as a,c as b,P as c,it as d,at as e,lt as f,ct as g,ut as h,H as i,pt as j,w as k,O as l,gt as m,bt as n,D as o,$ as p,F as q,xt as r,yt as s,Tt as t,Et as u,W as v,Ht as w,Lt as x,Mt as y,vt as z,wt as A,q as B,_ as C,Y as D,Q as E,G as F,U as G,V as H,J as I,K as J,Z as K,z as L,Ot as M,kt as N,Ct as O,Bt as P,jt as Q,At as R,Nt as S,St as T,It as U,Pt as V,Dt as W,$t as X,Ft as Y,Wt as Z,qt as _,Rt as $,_t as aa,Kt as ba,Zt as ca};
/*! For license information please see chunk-DSQGCNX6.js.LEGAL.txt */
