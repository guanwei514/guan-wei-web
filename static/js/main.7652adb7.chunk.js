(this["webpackJsonpguan-wei-wab"]=this["webpackJsonpguan-wei-wab"]||[]).push([[0],{134:function(e,t,c){},142:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(39),i=c.n(s),l=(c(134),c(55)),r=c(15),o=c(62),j=c(114),d=c(11),m=c.p+"static/media/logo.b04bac2b.png",b=c.p+"static/media/logo_w.64b1d83c.png",u={en:{common:c(87),banner:c(88),about:c(89),skill:c(90),project:c(91),contact:c(92)},zh_tw:{common:c(93),banner:c(94),about:c(95),skill:c(96),project:c(97),contact:c(98)}},h={en:"E\uff2e",zh_tw:"\u7e41"},x=a.a.createContext({userLanguage:"en",dictionary:u.en}),O=function(e){var t=Object(n.useContext)(x);return{t:function(c){return c.split(".").reduce((function(e,t){return e&&e[t]}),t.dictionary[e])||c}}},p=c(199),v=c(193),g=c(203),k=c(102),S=c.n(k),f=c(1),A=function(){var e=Object(n.useContext)(x),t=e.userLanguage,c=e.userLanguageChange,a=Object(n.useState)(!1),s=Object(d.a)(a,2),i=s[0],l=s[1],r=Object(f.jsx)(v.a,{open:i,defaultValue:t,onClose:function(){l(!1)},value:t,onChange:function(e){c(e.target.value)},MenuProps:{id:"lang-select"},children:Object.entries(h).map((function(e){var t=Object(d.a)(e,2),c=t[0],n=t[1];return Object(f.jsx)(p.a,{value:c,name:c,children:n},c)}))});return Object(f.jsxs)("div",{className:"langSelect",children:[Object(f.jsx)(g.a,{className:"langBtn","aria-label":"lang",onClick:function(){l(!0)},children:Object(f.jsx)(S.a,{})}),r]})},N=c(109),y=c.n(N),C=c(196),w=c(201),J=c(200),E=c(197),I=c(191),Q=c(198),U=c(104),L=c.n(U),B=c(105),R=c.n(B),D=c(106),T=c.n(D),K=c(107),M=c.n(K),q=c(108),V=c.n(q),Y=function e(t,c,n){if(!c)return document.body.scrollTop=document.documentElement.scrollTop=t,t;var a=document.documentElement.scrollTop,s=document.querySelector(n).offsetTop-56,i=c/20,l=document.body.scrollTop+document.documentElement.scrollTop,r=(s-a)/i,o=setInterval((function(){i>0?(i--,e(l+=r)):clearInterval(o)}),20)},W=function(){var e=O("common").t,t=Object(n.useState)(!1),c=Object(d.a)(t,2),a=c[0],s=c[1],i=Object(r.g)(),l=function(e){Y(0,600,".".concat(e))},o=[{title:"home",router:"#home",icon:Object(f.jsx)(L.a,{}),active:!0},{title:"about",router:"#about",icon:Object(f.jsx)(R.a,{})},{title:"skill",router:"#skill",icon:Object(f.jsx)(T.a,{})},{title:"project",router:"#project",icon:Object(f.jsx)(M.a,{})},{title:"contact",router:"#contact",icon:Object(f.jsx)(V.a,{})}];return Object(f.jsxs)("div",{className:"navbar",children:[Object(f.jsx)("div",{className:"navbar-left",children:Object(f.jsx)("img",{src:m,alt:"logo",onClick:function(){return l("home")}})}),Object(f.jsxs)("div",{className:"navbar-right",children:[Object(f.jsx)("div",{className:"navbar-items",children:o.map((function(t){return Object(f.jsx)("div",{className:"navbar-item ".concat(t.title,"-nav ").concat(t.active?"active":""),onClick:function(){return l(t.title)},children:e("".concat(t.title))},t.title)}))}),Object(f.jsx)("div",{children:Object(f.jsx)("div",{className:"navbar-rwd-button",children:Object(f.jsx)(y.a,{onClick:function(){return s(!a)}})})}),Object(f.jsx)(A,{})]}),Object(f.jsx)(C.a,{anchor:"top",open:a,onClose:function(){return s(!1)},onOpen:function(){return s(!0)},children:Object(f.jsxs)(w.a,{role:"presentation",onClick:function(){return s(!1)},onKeyDown:function(){return s(!1)},children:[Object(f.jsx)("img",{src:b,alt:"logo",onClick:function(){return i.push("/main")}}),Object(f.jsx)(J.a,{children:o.map((function(t){return Object(f.jsxs)(E.a,{button:!0,onClick:function(){return l(t.title)},children:[Object(f.jsx)(I.a,{children:t.icon}),Object(f.jsx)(Q.a,{primary:e(t.title)})]},t.title)}))})]})})]})},F=function(e){var t=e.children;return Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)(W,{}),Object(f.jsx)(f.Fragment,{children:t})]})},z=["component"],Z=function(e){var t=e.component,c=Object(j.a)(e,z);return Object(f.jsx)(r.b,Object(o.a)(Object(o.a)({},c),{},{render:function(e){return Object(f.jsx)(F,{children:Object(f.jsx)(t,Object(o.a)({},e))})}}))},H=c.p+"static/media/aboutPic.d221e2af.png",G=c.p+"static/media/GuanWei Su - CV (July 2021).0446a11f.pdf",P=function(e){var t=O("about").t;return Object(f.jsxs)("div",{className:"about",children:[Object(f.jsx)("div",{className:"title",children:Object(f.jsx)("div",{className:"title-inner",children:t("aboutMe")})}),Object(f.jsx)("div",{className:"subtitle",children:t("subtitle")}),Object(f.jsxs)("div",{className:"main-area",children:[Object(f.jsx)("div",{className:"about-left",children:Object(f.jsx)("img",{src:H,alt:"aboutPic"})}),Object(f.jsxs)("div",{className:"about-right",children:[Object(f.jsx)("div",{className:"name",children:t("name")}),Object(f.jsxs)("div",{className:"position",children:[Object(f.jsx)("div",{children:t("a")}),Object(f.jsx)("div",{className:"primary-text",children:t("position")}),Object(f.jsx)("div",{children:t("basedIn")}),Object(f.jsx)("div",{className:"primary-text",children:t("taiwan")})]}),Object(f.jsx)("div",{className:"intro",children:t("intro")}),Object(f.jsxs)("div",{className:"self-info",children:[Object(f.jsxs)("div",{className:"info",children:[Object(f.jsx)("div",{className:"info-label",children:t("birthday")}),Object(f.jsx)("div",{className:"info-value",children:"14th May 1994"})]}),Object(f.jsxs)("div",{className:"info",children:[Object(f.jsx)("div",{className:"info-label",children:t("age")}),Object(f.jsx)("div",{className:"info-value",children:"27 Yr"})]}),Object(f.jsxs)("div",{className:"info",children:[Object(f.jsx)("div",{className:"info-label",children:t("email")}),Object(f.jsx)("div",{className:"info-value",children:"guanweisu@gmail.com"})]}),Object(f.jsxs)("div",{className:"info",children:[Object(f.jsx)("div",{className:"info-label",children:t("phone")}),Object(f.jsx)("div",{className:"info-value",children:"0929961079"})]})]}),Object(f.jsx)("a",{className:"primaryBtn click-btn downloadCV",href:G,download:!0,target:"_blank",rel:"noreferrer",children:t("downloadCV")})]})]})]})},X=function(e){return Object(f.jsx)("div",{onClick:e.onClick,className:"".concat(e.type," click-btn"),style:{width:e.width,fontSize:e.fontSize||"16px"},children:e.text})},_=c.p+"static/media/self.f6507994.svg",$=c.p+"static/media/mainBall.14b8e5a6.svg",ee=c(110),te=c.n(ee),ce=function(e){var t=O("banner").t;return Object(f.jsxs)("div",{className:"banner home",children:[Object(f.jsxs)("div",{className:"banner-left",children:[Object(f.jsx)("div",{className:"hello",children:t("helloIam")}),Object(f.jsx)("div",{className:"name",children:t("selfName")}),Object(f.jsx)("div",{className:"position",children:Object(f.jsxs)("span",{children:[t("passionate"),Object(f.jsx)(te.a,{text:[t("position1"),t("position2")]})]})}),Object(f.jsx)("div",{className:"intro",children:t("intro")}),Object(f.jsxs)("div",{className:"btn-area",children:[Object(f.jsx)(X,{width:"180px",type:"primaryBtn",text:t("myWork"),fontSize:"20px",onClick:function(){return Y(0,600,".project")}}),Object(f.jsx)(X,{width:"180px",type:"secBtn",text:t("contact"),fontSize:"20px",onClick:function(){return Y(0,600,".contact")}})]})]}),Object(f.jsx)("div",{className:"banner-right",children:Object(f.jsxs)("div",{className:"banner-img",children:[Object(f.jsx)("img",{src:_,alt:"selfPhoto",className:"selfPhoto"}),Object(f.jsx)("img",{src:$,alt:"mainBall",className:"mainBall"})]})}),Object(f.jsx)("div",{className:"go-to",children:Object(f.jsx)("div",{onClick:function(){return Y(0,600,".about")},children:Object(f.jsx)("span",{})})})]})},ne=c(192),ae=c.p+"static/media/c3.5a45dfbe.png",se=c.p+"static/media/cadd.666af1b3.png",ie=c.p+"static/media/ethercat.125bb8b2.png",le=c.p+"static/media/matlab.92ebdba1.png",re=c.p+"static/media/net.1d1f05e0.png",oe=c.p+"static/media/sql.c6766021.png",je=c.p+"static/media/vue.48936141.png",de=c(47),me=c.n(de),be=function(e){var t=O("skill").t,c=[{src:se,name:"C++"},{src:ae,name:"C#"},{src:re,name:".Net Core"},{src:le,name:"Matlab"},{src:"data:image/png;base64,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",name:"Git"},{src:je,name:"Vue"}],n=[{src:oe,name:"SQL Server"},{src:ie,name:"Ethercat"}];return Object(f.jsxs)("div",{className:"skill",children:[Object(f.jsx)("div",{className:"title",children:Object(f.jsx)("div",{className:"title-inner",children:t("mySkills")})}),Object(f.jsx)("div",{className:"subtitle",children:t("subtitle")}),Object(f.jsxs)("div",{className:"main-area",children:[Object(f.jsxs)("div",{className:"skill-left",children:[Object(f.jsxs)("div",{className:"skill-area",children:[Object(f.jsx)("div",{className:"skill-name",children:"C# / WPF / .NET CORE"}),Object(f.jsx)("div",{className:"skill-bar-outer",children:Object(f.jsx)("div",{className:"skill-bar-value1"})})]}),Object(f.jsxs)("div",{className:"skill-area",children:[Object(f.jsx)("div",{className:"skill-name",children:"C / C++"}),Object(f.jsx)("div",{className:"skill-bar-outer",children:Object(f.jsx)("div",{className:"skill-bar-value2"})})]}),Object(f.jsxs)("div",{className:"skill-area",children:[Object(f.jsx)("div",{className:"skill-name",children:"System Control"}),Object(f.jsx)("div",{className:"skill-bar-outer",children:Object(f.jsx)("div",{className:"skill-bar-value3"})})]}),Object(f.jsxs)("div",{className:"skill-area",children:[Object(f.jsx)("div",{className:"skill-name",children:"English Ability"}),Object(f.jsx)("div",{className:"skill-bar-outer",children:Object(f.jsx)("div",{className:"skill-bar-value4"})})]})]}),Object(f.jsxs)("div",{className:"skill-right",children:[Object(f.jsx)("div",{className:"skill-right-title",children:t("tools")}),Object(f.jsxs)("div",{className:"skill-right-body tools",children:[Object(f.jsx)("div",{className:"tools1",children:c.length>0&&c.map((function(e){return Object(f.jsx)(ne.a,{title:e.name,placement:"top",children:Object(f.jsx)("img",{src:e.src,alt:e.name})})}))}),Object(f.jsx)("div",{className:"tools2",children:n.length>0&&n.map((function(e){return Object(f.jsx)(ne.a,{title:e.name,placement:"top",children:Object(f.jsx)("img",{src:e.src,alt:e.name})})}))})]}),Object(f.jsx)("div",{className:"skill-right-title",children:t("certificates")}),Object(f.jsxs)("div",{className:"skill-right-body certificates",children:[Object(f.jsxs)("div",{className:"skill-right-text",children:[Object(f.jsx)(me.a,{}),"System Architect, High Tech Institute, The Netherlands ( 05/11/2021 )"]}),Object(f.jsxs)("div",{className:"skill-right-text",children:[Object(f.jsx)(me.a,{}),"Passive Damping for High Tech Systems, High Tech Institute ( 29/07/2021 )"]}),Object(f.jsxs)("div",{className:"skill-right-text",children:[Object(f.jsx)(me.a,{}),"TOEIC 830 ( L : 435 / R : 395 ) ( 23/04/2017 )"]}),Object(f.jsxs)("div",{className:"skill-right-text",children:[Object(f.jsx)(me.a,{}),"Certified LabVIEW Associate Developer (CLAD) ( 03/19/2015 )"]})]}),Object(f.jsx)("div",{className:"skill-right-title",children:t("partent")}),Object(f.jsx)("div",{className:"skill-right-body patent",children:Object(f.jsxs)("div",{className:"skill-right-text",children:[Object(f.jsx)(me.a,{}),"1704434 - Drilling System And Method Thereof ( 11/09/2020 ) ( Taiwan )"]})})]})]})]})},ue=function(e){e.history,O("project").t;return Object(f.jsx)("div",{className:"project"})},he=function(){return window.addEventListener("scroll",(function(){var e=document.documentElement.scrollTop,t=document.querySelector(".home").offsetTop,c=document.querySelector(".about").offsetTop,n=document.querySelector(".skill").offsetTop,a=document.querySelector(".project").offsetTop,s=window.screen.height;e+s/2>t&&e+s/2<c?document.querySelector(".home-nav").classList.add("active"):document.querySelector(".home-nav").classList.remove("active"),e+s/2>c&&e+s/2<n?document.querySelector(".about-nav").classList.add("active"):document.querySelector(".about-nav").classList.remove("active"),e+s/2>n&&e+s/2<a?(document.querySelector(".skill-nav").classList.add("active"),document.querySelector(".skill-bar-value1").classList.add("active"),document.querySelector(".skill-bar-value2").classList.add("active"),document.querySelector(".skill-bar-value3").classList.add("active"),document.querySelector(".skill-bar-value4").classList.add("active")):document.querySelector(".skill-nav").classList.remove("active")})),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(ce,{}),Object(f.jsx)(P,{}),Object(f.jsx)(be,{}),Object(f.jsx)(ue,{})]})},xe=function(){return Object(f.jsx)(f.Fragment,{children:"NotFound"})},Oe=c(75),pe=c.n(Oe),ve=c(111),ge=c(34),ke=function(e){var t=e.children,c=Object(n.useState)("en"),a=Object(d.a)(c,2),s=a[0],i=a[1];Object(n.useEffect)((function(){l()}),[]);var l=function(){var e=Object(ve.a)(pe.a.mark((function e(){return pe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=i,e.next=3,ge.getItem("rcml-lang");case 3:if(e.t1=e.sent,e.t1){e.next=6;break}e.t1="en";case 6:e.t2=e.t1,(0,e.t0)(e.t2);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),r={userLanguage:s,dictionary:u[s],userLanguageChange:function(e){var t=h[e]?e:"en";i(t),ge.setItem("rcml-lang",t)}};return Object(f.jsx)(x.Provider,{value:r,children:t})};var Se=function(){return Object(f.jsx)(ke,{children:Object(f.jsx)(l.a,{children:Object(f.jsxs)(r.d,{children:[Object(f.jsx)(Z,{path:"/guan-wei-web",exact:!0,component:he}),Object(f.jsx)(r.a,{exact:!0,from:"/",to:"/guan-wei-web"}),Object(f.jsx)(r.b,{component:xe})]})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));window.$;i.a.render(Object(f.jsx)(Se,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),c.c[34]||console.log("Missing locaforage package, please refer https://github.com/localForage/localForage"),c.c[34]&&ge.config({driver:[ge.INDEXEDDB,ge.WEBSQL,ge.LOCALSTORAGE]})},87:function(e){e.exports=JSON.parse('{"home":"Home","about":"About","project":"Project","skill":"Skill","contact":"Contact Me"}')},88:function(e){e.exports=JSON.parse('{"helloIam":"Hello, I am","selfName":"Guan Wei","passionate":"A passionate ","position1":"System Developer","position2":"System Architect","intro":"Providing industry automation and system integration solutions with my passion and profession","myWork":"My Work","contact":"Contact Me"}')},89:function(e){e.exports=JSON.parse('{"aboutMe":"About Me","subtitle":"A Software System Engineer Based In Taiwan","name":"I\'m Guan Wei Su","a":"A","position":"Software System engineer","basedIn":"Based In","taiwan":"Taiwan","intro":"I develop software and make system integration for customers in industrial automation field, specializing in software system development, UI design, mechatronics, system control, research studies. My passion is to solve problems through my technical skills and professional knowledge. Check out my Portfolio.","birthday":"Birthday","age":"Age","email":"Email","phone":"Phone","downloadCV":"Download CV"}')},90:function(e){e.exports=JSON.parse('{"mySkills":"My Skills","subtitle":"A Software System Engineer Based In Taiwan","tools":"Tools","certificates":"Certificates","partent":"Partent"}')},91:function(e){e.exports=JSON.parse("{}")},92:function(e){e.exports=JSON.parse("{}")},93:function(e){e.exports=JSON.parse('{"home":"\u9996\u9801","about":"\u95dc\u65bc\u6211","project":"\u5c08\u6848","skill":"\u6280\u80fd","contact":"\u806f\u7e6b\u6211"}')},94:function(e){e.exports=JSON.parse('{"helloIam":"\u60a8\u597d, \u6211\u662f","selfName":"\u8607\u51a0\u744b","passionate":"A passionate ","position1":"System Developer","position2":"System Architect","intro":"\u4f7f\u7528\u6211\u7684\u71b1\u60c5\u548c\u5c08\u696d\u4f86\u63d0\u4f9b\u5de5\u696d\u81ea\u52d5\u5316\u548c\u7cfb\u7d71\u96c6\u6210\u7684\u89e3\u6c7a\u65b9\u6848","myWork":"\u6211\u7684\u5de5\u4f5c","contact":"\u806f\u7e6b\u6211"}')},95:function(e){e.exports=JSON.parse('{"aboutMe":"\u95dc\u65bc\u6211","subtitle":"\u53f0\u7063\u8edf\u9ad4\u7cfb\u7d71\u5de5\u7a0b\u5e2b","name":"\u6211\u662f\u8607\u51a0\u744b","a":"\u4e00\u4f4d","position":"\u8edf\u9ad4\u7cfb\u7d71\u5de5\u7a0b\u5e2b","basedIn":"\u51fa\u751f\u65bc","taiwan":"\u53f0\u7063","intro":"\u6211\u70ba\u5de5\u696d\u81ea\u52d5\u5316\u9818\u57df\u7684\u5ba2\u6236\u958b\u767c\u8edf\u9ad4\u548c\u9032\u884c\u7cfb\u7d71\u96c6\u6210\uff0c\u5c08\u696d\u5f9e\u4e8b\u8edf\u9ad4\u7cfb\u7d71\u958b\u767c\u3001UI\u8a2d\u8a08\u3001\u6a5f\u96fb\u4e00\u9ad4\u5316\u3001\u7cfb\u7d71\u63a7\u5236\u3001\u7814\u7a76\u3002\u6211\u7684\u71b1\u60c5\u662f\u901a\u904e\u6211\u7684\u6280\u8853\u6280\u80fd\u548c\u5c08\u696d\u77e5\u8b58\u89e3\u6c7a\u554f\u984c\u3002 \u67e5\u770b\u6211\u7684\u6295\u8cc7\u7d44\u5408\u3002","birthday":"\u751f\u65e5","age":"\u5e74\u9f61","email":"\u96fb\u5b50\u90f5\u4ef6","phone":"\u96fb\u8a71","downloadCV":"\u4e0b\u8f09\u7c21\u6b77"}')},96:function(e){e.exports=JSON.parse("{}")},97:function(e){e.exports=JSON.parse("{}")},98:function(e){e.exports=JSON.parse("{}")}},[[142,1,2]]]);
//# sourceMappingURL=main.7652adb7.chunk.js.map