(function(t){function e(e){for(var r,o,s=e[0],u=e[1],c=e[2],d=0,v=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&v.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(v.length)v.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,s=1;s<n.length;s++){var u=n[s];0!==a[u]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={index:0},i=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var l=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0190":function(t,e){},"1be4":function(t,e,n){"use strict";var r=n("6c93"),a=n.n(r);a.a},2674:function(t,e,n){"use strict";var r=n("99af"),a=n.n(r);a.a},"37d6":function(t,e,n){"use strict";var r=n("7f1d"),a=n("9d85"),i=(n("dcc2"),n("2877")),o=Object(i["a"])(a["default"],r["a"],r["b"],!1,null,"0d5e496c",null);e["default"]=o.exports},4091:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("app-nav"),n("router-view"),n("app-footer")],1)},i=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"nav"}},[n("router-link",{staticClass:"nav-item active",attrs:{to:"/"}},[t._v("关于我")]),n("span",{staticClass:"nav-item-divider"},[t._v(" | ")]),n("router-link",{staticClass:"nav-item",attrs:{to:"/khex"}},[t._v("KHex")])],1)},s=[],u=(n("2674"),n("2877")),c={},l=Object(u["a"])(c,o,s,!1,null,"c6d63800",null),d=l.exports,v=n("37d6"),f={name:"app",components:{"app-nav":d,"app-footer":v["default"]}},p=f,m=Object(u["a"])(p,a,i,!1,null,null,null),h=m.exports,b=n("8c4f"),_=n("caf9"),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("home-body"),n("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:"./background.webp",expression:"'./background.webp'",arg:"background-image"}],class:{avatarMouseoverBackground:t.state.avatarMouseover},attrs:{id:"background"}})],1)},x=[],k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home-body"}},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"https://assets.fwdl.ink/universal/avatars/Kinetix/Kinetix.svg",expression:"'https://assets.fwdl.ink/universal/avatars/Kinetix/Kinetix.svg'"}],attrs:{id:"avatar",alt:"Kinetix",draggable:"false"},on:{mouseover:function(e){return t.setAvatarMouseover(!0)},mouseleave:function(e){return t.setAvatarMouseover(!1)}}}),n("div",{attrs:{id:"introduction"}},[t._m(0),n("div",{attrs:{id:"summary"},domProps:{innerHTML:t._s(t.generateIntroductionAuto())}})]),n("div",{attrs:{id:"social-link-group"}},t._l(this.linkList,(function(e){return n("router-link",{key:e.name,staticClass:"social-link-item",attrs:{to:"/"+e.index.toLowerCase()}},[t._v(" "+t._s(e.name)+" ")])})),1)])},y=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",{attrs:{id:"name"}},[t._v("Kinetix "),n("small",[t._v("(A.k.a. Kx)")])])}],w={state:{avatarMouseover:!1,introduction:""},setAvatarMouseover(t){this.state.avatarMouseover=t},generateIntroductionAuto(){return this.introductionToDisplay=Math.round(4*Math.random()),this.introduction=this.introductionList[this.introductionToDisplay],this.introduction},linkList:[{index:"QQ",name:"QQ",target:"https://wpa.qq.com/msgrd?v=3&uin=202938099&site=qq&menu=yes"},{index:"NCM",name:"网易云音乐",target:"https://music.163.com/#/user/home?id=341431918"},{index:"BiliBili",name:"哔哩哔哩",target:"https://space.bilibili.com/182888860"},{index:"GitHub",name:"GitHub",target:"https://github.com/Kinetix-Lee"},{index:"KHex",name:"KHex",target:"https://x86.app/"}],introductionList:["四肢不发达，头脑很简单。","console.log('Hello world!');","学生，不入流业余 Coder。","Trouble making. <b>Redefined. </b>","Hi there! Here's Kinetix. "]},M={data(){return{state:w.state,linkList:w.linkList,generateIntroductionAuto:()=>w.generateIntroductionAuto()}},methods:{setAvatarMouseover:t=>w.setAvatarMouseover(t)}},O=M,j=(n("cd1b"),Object(u["a"])(O,k,y,!1,null,null,null)),A=j.exports,C={components:{"home-body":A},data(){return{state:w.state}},methods:{setAvatarMouseover:t=>{w.setAvatarMouseover(t)}}},K=C,L=(n("8fc1"),Object(u["a"])(K,g,x,!1,null,null,null)),H=L.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{attrs:{id:"redirectorIndicator"}},[t._v(" Redirecting... ")])},T=[];const{linkList:$}=w;var E={props:["params"],created(){const t=this.$route;setTimeout(()=>{switch(t.params.target.toLowerCase()){case"qq":case"ncm":case"bilibili":case"twitter":case"github":case"khex":$.forEach(e=>{t.params.target.toLowerCase()===e.index.toLowerCase()&&window.open(e.target,"_blank")});break;default:break}},500),setTimeout(()=>{window.location.href="/"},1e3)}},S=E,q=(n("1be4"),Object(u["a"])(S,P,T,!1,null,null,null)),z=q.exports;r["a"].use(b["a"]),r["a"].use(_["a"],{error:"https://assets.fwdl.ink/universal/static/lazyload/error.png"});const B=[{path:"/",name:"Home",component:H},{path:"/:target",name:"Redirector",component:z}],I=new b["a"]({routes:B});var Q=I;r["a"].config.productionTip=!1,new r["a"]({router:Q,render(t){return t(h)}}).$mount("#app")},"6c93":function(t,e,n){},"7f1d":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a}));var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"footer"}},[n("p",[t._v(" Copyright © 2020 Kinetix. All rights reserved. "),n("br"),n("small",[t._v("Background image by "),n("a",{attrs:{href:"https://commons.wikimedia.org/wiki/File:Huazhong_University_of_Science_and_Technology_-_a_lake_and_a_pavilion_on_a_snow_day_-_P1050013.JPG",title:"via Wikimedia Commons"}},[t._v("User:Vmenkov")]),t._v(" / "),n("a",{attrs:{href:"https://creativecommons.org/licenses/by-sa/3.0"}},[t._v("CC BY-SA")])])])])}]},"8fc1":function(t,e,n){"use strict";var r=n("9272"),a=n.n(r);a.a},"8fde":function(t,e,n){},9272:function(t,e,n){},"99af":function(t,e,n){},"9d85":function(t,e,n){"use strict";var r=n("0190"),a=n.n(r);e["default"]=a.a},cd1b:function(t,e,n){"use strict";var r=n("4091"),a=n.n(r);a.a},dcc2:function(t,e,n){"use strict";var r=n("8fde"),a=n.n(r);a.a}});
//# sourceMappingURL=index.3c0e54a0.js.map