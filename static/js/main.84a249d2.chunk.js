(this["webpackJsonpguan-wei-wab"]=this["webpackJsonpguan-wei-wab"]||[]).push([[0],{126:function(e,t,n){},134:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(37),s=n.n(i),o=(n(126),n(49)),r=n(15),l=n(58),j=n(111),d=n(12),u=n.p+"static/media/logo.fda38e38.svg",b=n.p+"static/media/logo_w.fd347b46.svg",m={en:{common:n(85),banner:n(86),about:n(87),skill:n(88),project:n(89),contact:n(90)},zh_tw:{common:n(91),banner:n(92),about:n(93),skill:n(94),project:n(95),contact:n(96)}},h={en:"E\uff2e",zh_tw:"\u7e41"},O=a.a.createContext({userLanguage:"en",dictionary:m.en}),x=function(e){var t=Object(c.useContext)(O);return{t:function(n){return n.split(".").reduce((function(e,t){return e&&e[t]}),t.dictionary[e])||n}}},p=n(185),f=n(178),v=n(189),g=n(100),N=n.n(g),w=n(1),y=function(){var e=Object(c.useContext)(O),t=e.userLanguage,n=e.userLanguageChange,a=Object(c.useState)(!1),i=Object(d.a)(a,2),s=i[0],o=i[1],r=Object(w.jsx)(f.a,{open:s,defaultValue:t,onClose:function(){o(!1)},value:t,onChange:function(e){n(e.target.value)},MenuProps:{id:"lang-select"},children:Object.entries(h).map((function(e){var t=Object(d.a)(e,2),n=t[0],c=t[1];return Object(w.jsx)(p.a,{value:n,name:n,children:c},n)}))});return Object(w.jsxs)("div",{className:"langSelect",children:[Object(w.jsx)(v.a,{className:"langBtn","aria-label":"lang",onClick:function(){o(!0)},children:Object(w.jsx)(N.a,{})}),r]})},S=n(107),k=n.n(S),C=n(181),I=n(187),J=n(186),B=n(182),E=n(177),L=n(184),T=n(102),A=n.n(T),M=n(103),P=n.n(M),W=n(104),q=n.n(W),z=n(105),D=n.n(z),V=n(106),F=n.n(V),G=function e(t,n,c){if(!n)return document.body.scrollTop=document.documentElement.scrollTop=t,t;var a=document.documentElement.scrollTop,i=document.querySelector(c).offsetTop-56,s=n/20,o=document.body.scrollTop+document.documentElement.scrollTop,r=(i-a)/s,l=setInterval((function(){s>0?(s--,e(o+=r)):clearInterval(l)}),20)},_=function(){var e=x("common").t,t=Object(c.useState)(!1),n=Object(d.a)(t,2),a=n[0],i=n[1],s=Object(r.g)(),o=function(e){G(0,600,".".concat(e))},l=[{title:"home",router:"#home",icon:Object(w.jsx)(A.a,{}),active:!0},{title:"about",router:"#about",icon:Object(w.jsx)(P.a,{})},{title:"skill",router:"#skill",icon:Object(w.jsx)(q.a,{})},{title:"project",router:"#project",icon:Object(w.jsx)(D.a,{})},{title:"contact",router:"#contact",icon:Object(w.jsx)(F.a,{})}];return Object(w.jsxs)("div",{className:"navbar",children:[Object(w.jsx)("div",{className:"navbar-left",children:Object(w.jsx)("img",{src:u,alt:"logo",onClick:function(){return o("home")}})}),Object(w.jsxs)("div",{className:"navbar-right",children:[Object(w.jsx)("div",{className:"navbar-items",children:l.map((function(t){return Object(w.jsx)("div",{className:"navbar-item ".concat(t.title,"-nav ").concat(t.active?"active":""),onClick:function(){return o(t.title)},children:e("".concat(t.title))},t.title)}))}),Object(w.jsx)("div",{children:Object(w.jsx)("div",{className:"navbar-rwd-button",children:Object(w.jsx)(k.a,{onClick:function(){return i(!a)}})})}),Object(w.jsx)(y,{})]}),Object(w.jsx)(C.a,{anchor:"top",open:a,onClose:function(){return i(!1)},onOpen:function(){return i(!0)},children:Object(w.jsxs)(I.a,{role:"presentation",onClick:function(){return i(!1)},onKeyDown:function(){return i(!1)},children:[Object(w.jsx)("img",{src:b,alt:"logo",onClick:function(){return s.push("/main")}}),Object(w.jsx)(J.a,{children:l.map((function(t){return Object(w.jsxs)(B.a,{button:!0,onClick:function(){return o(t.title)},children:[Object(w.jsx)(E.a,{children:t.icon}),Object(w.jsx)(L.a,{primary:e(t.title)})]},t.title)}))})]})})]})},H=function(e){var t=e.children;return Object(w.jsxs)("div",{className:"container",children:[Object(w.jsx)(_,{}),Object(w.jsx)(w.Fragment,{children:t})]})},U=["component"],$=function(e){var t=e.component,n=Object(j.a)(e,U);return Object(w.jsx)(r.b,Object(l.a)(Object(l.a)({},n),{},{render:function(e){return Object(w.jsx)(H,{children:Object(w.jsx)(t,Object(l.a)({},e))})}}))},K=n.p+"static/media/aboutPic.d221e2af.png",Q=n.p+"static/media/GuanWei Su - CV (July 2021).0446a11f.pdf",R=function(e){var t=x("about").t;return Object(w.jsxs)("div",{className:"about",children:[Object(w.jsx)("div",{className:"title",children:Object(w.jsx)("div",{className:"title-inner",children:t("aboutMe")})}),Object(w.jsx)("div",{className:"subtitle",children:t("subtitle")}),Object(w.jsxs)("div",{className:"main-area",children:[Object(w.jsx)("div",{className:"about-left",children:Object(w.jsx)("img",{src:K,alt:"aboutPic"})}),Object(w.jsxs)("div",{className:"about-right",children:[Object(w.jsx)("div",{className:"name",children:t("name")}),Object(w.jsxs)("div",{className:"position",children:[Object(w.jsx)("div",{children:t("a")}),Object(w.jsx)("div",{className:"primary-text",children:t("position")}),Object(w.jsx)("div",{children:t("basedIn")}),Object(w.jsx)("div",{className:"primary-text",children:t("taiwan")})]}),Object(w.jsx)("div",{className:"intro",children:t("intro")}),Object(w.jsxs)("div",{className:"self-info",children:[Object(w.jsxs)("div",{className:"info",children:[Object(w.jsx)("div",{className:"info-label",children:t("birthday")}),Object(w.jsx)("div",{className:"info-value",children:"14th May 1994"})]}),Object(w.jsxs)("div",{className:"info",children:[Object(w.jsx)("div",{className:"info-label",children:t("age")}),Object(w.jsx)("div",{className:"info-value",children:"27 Yr"})]}),Object(w.jsxs)("div",{className:"info",children:[Object(w.jsx)("div",{className:"info-label",children:t("email")}),Object(w.jsx)("div",{className:"info-value",children:"guanweisu@gmail.com"})]}),Object(w.jsxs)("div",{className:"info",children:[Object(w.jsx)("div",{className:"info-label",children:t("phone")}),Object(w.jsx)("div",{className:"info-value",children:"0929961079"})]})]}),Object(w.jsx)("a",{className:"primaryBtn click-btn downloadCV",href:Q,download:!0,children:t("downloadCV")})]})]})]})},X=function(e){return Object(w.jsx)("div",{onClick:e.onClick,className:"".concat(e.type," click-btn"),style:{width:e.width,fontSize:e.fontSize||"16px"},children:e.text})},Y=n.p+"static/media/self.f6507994.svg",Z=n.p+"static/media/mainBall.14b8e5a6.svg",ee=n(108),te=n.n(ee),ne=function(e){var t=x("banner").t;return Object(w.jsxs)("div",{className:"banner home",children:[Object(w.jsxs)("div",{className:"banner-left",children:[Object(w.jsx)("div",{className:"hello",children:t("helloIam")}),Object(w.jsx)("div",{className:"name",children:t("selfName")}),Object(w.jsx)("div",{className:"position",children:Object(w.jsxs)("span",{children:[t("passionate"),Object(w.jsx)(te.a,{text:[t("position1"),t("position2")]})]})}),Object(w.jsx)("div",{className:"intro",children:t("intro")}),Object(w.jsxs)("div",{className:"btn-area",children:[Object(w.jsx)(X,{width:"180px",type:"primaryBtn",text:t("myWork"),fontSize:"20px",onClick:function(){return G(0,600,".project")}}),Object(w.jsx)(X,{width:"180px",type:"secBtn",text:t("contact"),fontSize:"20px",onClick:function(){return G(0,600,".contact")}})]})]}),Object(w.jsx)("div",{className:"banner-right",children:Object(w.jsxs)("div",{className:"banner-img",children:[Object(w.jsx)("img",{src:Y,alt:"selfPhoto",className:"selfPhoto"}),Object(w.jsx)("img",{src:Z,alt:"mainBall",className:"mainBall"})]})}),Object(w.jsx)("div",{className:"go-to",children:Object(w.jsx)("div",{onClick:function(){return G(0,600,".about")},children:Object(w.jsx)("span",{})})})]})},ce=function(e){x("skill").t;return Object(w.jsx)("div",{className:"skill"})},ae=function(){return window.addEventListener("scroll",(function(){var e=document.documentElement.scrollTop,t=document.querySelector(".home").offsetTop,n=document.querySelector(".about").offsetTop,c=document.querySelector(".skill").offsetTop,a=window.screen.height;e+a/2>t&&e+a/2<n?document.querySelector(".home-nav").classList.add("active"):document.querySelector(".home-nav").classList.remove("active"),e+a/2>n&&e+a/2<c?document.querySelector(".about-nav").classList.add("active"):document.querySelector(".about-nav").classList.remove("active")})),Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(ne,{}),Object(w.jsx)(R,{}),Object(w.jsx)(ce,{})]})},ie=function(){return Object(w.jsx)(w.Fragment,{children:"NotFound"})},se=n(73),oe=n.n(se),re=n(109),le=n(34),je=function(e){var t=e.children,n=Object(c.useState)("en"),a=Object(d.a)(n,2),i=a[0],s=a[1];Object(c.useEffect)((function(){o()}),[]);var o=function(){var e=Object(re.a)(oe.a.mark((function e(){return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,le.getItem("rcml-lang");case 3:if(e.t1=e.sent,e.t1){e.next=6;break}e.t1="en";case 6:e.t2=e.t1,(0,e.t0)(e.t2);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),r={userLanguage:i,dictionary:m[i],userLanguageChange:function(e){var t=h[e]?e:"en";s(t),le.setItem("rcml-lang",t)}};return Object(w.jsx)(O.Provider,{value:r,children:t})};var de=function(){return Object(w.jsx)(je,{children:Object(w.jsx)(o.a,{children:Object(w.jsxs)(r.d,{children:[Object(w.jsx)($,{path:"/guan-wei-web",exact:!0,component:ae}),Object(w.jsx)(r.a,{exact:!0,from:"/",to:"/guan-wei-web"}),Object(w.jsx)(r.b,{component:ie})]})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));window.$;s.a.render(Object(w.jsx)(de,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),n.c[34]||console.log("Missing locaforage package, please refer https://github.com/localForage/localForage"),n.c[34]&&le.config({driver:[le.INDEXEDDB,le.WEBSQL,le.LOCALSTORAGE]})},85:function(e){e.exports=JSON.parse('{"home":"Home","about":"About","project":"Project","skill":"Skill","contact":"Contact Me"}')},86:function(e){e.exports=JSON.parse('{"helloIam":"Hello, I am","selfName":"Guan Wei","passionate":"A passionate ","position1":"System Developer","position2":"System Architect","intro":"Providing industry automation and system integration solutions with my passion and profession","myWork":"My Work","contact":"Contact Me"}')},87:function(e){e.exports=JSON.parse('{"aboutMe":"About Me","subtitle":"A Software System Engineer Based In Taiwan","name":"I\'m Guan Wei Su","a":"A","position":"Software System engineer","basedIn":"Based In","taiwan":"Taiwan","intro":"I develop software and make system integration for customers in industrial automation field, specializing in software system development, UI design, mechatronics, system control, research studies. My passion is to solve problems through my technical skills and professional knowledge. Check out my Portfolio.","birthday":"Birthday","age":"Age","email":"Email","phone":"Phone","downloadCV":"Download CV"}')},88:function(e){e.exports=JSON.parse("{}")},89:function(e){e.exports=JSON.parse("{}")},90:function(e){e.exports=JSON.parse("{}")},91:function(e){e.exports=JSON.parse('{"home":"\u9996\u9801","about":"\u95dc\u65bc\u6211","project":"\u5c08\u6848","skill":"\u6280\u80fd","contact":"\u806f\u7e6b\u6211"}')},92:function(e){e.exports=JSON.parse('{"helloIam":"\u60a8\u597d, \u6211\u662f","selfName":"\u8607\u51a0\u744b","passionate":"A passionate ","position1":"System Developer","position2":"System Architect","intro":"\u4f7f\u7528\u6211\u7684\u71b1\u60c5\u548c\u5c08\u696d\u4f86\u63d0\u4f9b\u5de5\u696d\u81ea\u52d5\u5316\u548c\u7cfb\u7d71\u96c6\u6210\u7684\u89e3\u6c7a\u65b9\u6848","myWork":"\u6211\u7684\u5de5\u4f5c","contact":"\u806f\u7e6b\u6211"}')},93:function(e){e.exports=JSON.parse('{"aboutMe":"\u95dc\u65bc\u6211","subtitle":"\u53f0\u7063\u8edf\u9ad4\u7cfb\u7d71\u5de5\u7a0b\u5e2b","name":"\u6211\u662f\u8607\u51a0\u744b","a":"\u4e00\u4f4d","position":"\u8edf\u9ad4\u7cfb\u7d71\u5de5\u7a0b\u5e2b","basedIn":"\u51fa\u751f\u65bc","taiwan":"\u53f0\u7063","intro":"\u6211\u70ba\u5de5\u696d\u81ea\u52d5\u5316\u9818\u57df\u7684\u5ba2\u6236\u958b\u767c\u8edf\u9ad4\u548c\u9032\u884c\u7cfb\u7d71\u96c6\u6210\uff0c\u5c08\u696d\u5f9e\u4e8b\u8edf\u9ad4\u7cfb\u7d71\u958b\u767c\u3001UI\u8a2d\u8a08\u3001\u6a5f\u96fb\u4e00\u9ad4\u5316\u3001\u7cfb\u7d71\u63a7\u5236\u3001\u7814\u7a76\u3002\u6211\u7684\u71b1\u60c5\u662f\u901a\u904e\u6211\u7684\u6280\u8853\u6280\u80fd\u548c\u5c08\u696d\u77e5\u8b58\u89e3\u6c7a\u554f\u984c\u3002 \u67e5\u770b\u6211\u7684\u6295\u8cc7\u7d44\u5408\u3002","birthday":"\u751f\u65e5","age":"\u5e74\u9f61","email":"\u96fb\u5b50\u90f5\u4ef6","phone":"\u96fb\u8a71","downloadCV":"\u4e0b\u8f09\u7c21\u6b77"}')},94:function(e){e.exports=JSON.parse("{}")},95:function(e){e.exports=JSON.parse("{}")},96:function(e){e.exports=JSON.parse("{}")}},[[134,1,2]]]);
//# sourceMappingURL=main.84a249d2.chunk.js.map