(this["webpackJsonpbiosgrp.github.io"]=this["webpackJsonpbiosgrp.github.io"]||[]).push([[0],{44:function(e,n,t){},56:function(e,n,t){"use strict";t.r(n);var i=t(1),c=t.n(i),r=t(25),o=t.n(r),s=(t(44),t(22)),a=t(37),j=t(4),l=t(26),d=t(27),b=t(39),h=t(38),x=t(11),m=t(2);function u(e){var n=e.num1,t=e.num2;return Object(m.jsxs)("div",{style:{display:"flex",textAlign:"center"},children:["number"===typeof n&&Object(m.jsx)("div",{style:{flexGrow:1},children:n}),"number"===typeof t&&Object(m.jsx)("div",{style:{flexGrow:1},children:t})]})}function O(e){var n=e.num1,t=e.num2,i="10vmin",c={height:"".concat(40,"vmin"),width:"".concat(80,"vmin"),color:"#BABABA",overflow:"hidden",fontSize:"70vmin",fontWeight:"bold",lineHeight:1,textAlign:"center",backgroundColor:"#121212",border:"solid 5px #151515"},r=Object(x.a)(Object(x.a)({},c),{},{borderTopLeftRadius:i,borderTopRightRadius:i}),o=Object(x.a)(Object(x.a)({},c),{},{borderBottomLeftRadius:i,borderBottomRightRadius:i,marginTop:"1vmin"});return Object(m.jsxs)("div",{style:{fontFamily:"Helvetica"},children:[Object(m.jsx)("div",{style:r,children:Object(m.jsx)("div",{style:{position:"relative",top:"7vmin"},children:Object(m.jsx)(u,{num1:n,num2:t})})}),Object(m.jsx)("div",{style:o,children:Object(m.jsx)("div",{style:{position:"relative",top:"-34vmin"},children:Object(m.jsx)(u,{num1:n,num2:t})})})]})}var f=t(16),g=t.n(f);function p(e){Object(i.useEffect)((function(){return document.body.style.backgroundColor=e,function(){document.body.style.backgroundColor=""}}))}var v,y,w,k,A,B,C,R,z,E,I,G,S,F,Q,_=function(){return p("black"),Object(m.jsx)(H,{})},H=function(e){Object(b.a)(t,e);var n=Object(h.a)(t);function t(){var e;Object(l.a)(this,t),e=n.call(this);var i=g()();return e.state={time:i},setInterval((function(){var n=g()();e.setState({time:n})}),1e3),e}return Object(d.a)(t,[{key:"render",value:function(){var e=this.state.time,n=e.hours()>12?e.hours()%12:e.hours(),t=e.minutes();return Object(m.jsxs)("div",{style:{display:"flex",justifyContent:"center",height:"100vh",width:"100vw",alignItems:"center"},children:[n<10?Object(m.jsx)(O,{num1:n}):Object(m.jsx)(O,{num1:Math.floor(n/10),num2:n%10}),Object(m.jsx)("div",{style:{width:"10vmin"}}),t<10?Object(m.jsx)(O,{num1:0,num2:t}):Object(m.jsx)(O,{num1:Math.floor(t/10),num2:t%10})]})}}]),t}(c.a.Component),T={"/clock":{component:Object(m.jsx)(_,{}),title:"Clock"}},L={"/how-it-works":"https://docs.google.com/document/d/1QGgCjgyL10sENRjS8uEywqrc7sY7Qs306ny_ZID4Ixw/edit?usp=sharing"},M=function(e){var n=e.href;return Object(i.useEffect)((function(){window.location.href=n})),null},W=t(6),D=t(7),J=t(33),K=t(32),U=t(31),Y="#002366",Z="#FFFAFA",q=t(17),N=D.a.div(v||(v=Object(W.a)(['\n    font-family: "Raleway", sans-serif;\n']))),P=D.a.div(y||(y=Object(W.a)(["\n    height: 100%;\n    width: 100%;\n    box-sizing: border-box;\n\n    border: solid 20px ",";\n    color: ",";\n    background-color: ",";\n\n    padding: 3em;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n"])),Y,Y,Z),X=(D.a.div(w||(w=Object(W.a)(["\n    height: 100%;\n    width: 100%;\n    box-sizing: border-box;\n\n    color: ",";\n    background-color: ",";\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n"])),Y,Z),function(e){return Object(m.jsx)(N,{children:Object(m.jsx)(q.a,{style:{width:"100vw"},children:Object(m.jsx)(P,Object(x.a)({},e))})})}),V=D.a.div(k||(k=Object(W.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    @media (min-width: 768px) {\n        flex-direction: row;\n    }\n"]))),$=D.a.div(A||(A=Object(W.a)([""]))),ee=D.a.div(B||(B=Object(W.a)(["\n    font-weight: 700;\n    font-size: 2.5em;\n\n    @media (max-width: 470px) {\n        font-size: 2em;\n    }\n"]))),ne=D.a.div(C||(C=Object(W.a)(["\n    border-top: solid 1px ",";\n    width: 100%;\n    height: 0;\n    margin: 1.2em 0;\n\n    @media (min-width: 768px) {\n        border-top: none;\n        border-left: solid 1px ",";\n        width: 0;\n        height: unset;\n        align-self: stretch;\n        margin: 0 2em;\n    }\n"])),Y,Y),te=D.a.div(R||(R=Object(W.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n\n    @media (min-width: 768px) {\n        align-items: flex-start;\n    }\n"]))),ie=D.a.div(z||(z=Object(W.a)(["\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    &:not(:first-child) {\n        margin-top: 0.3em;\n    }\n"]))),ce=D.a.div(E||(E=Object(W.a)(["\n    margin-right: 0.5em;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n"]))),re=D.a.a(I||(I=Object(W.a)(["\n    text-decoration: none;\n    color: ",";\n"])),Y),oe=function(){return p(Y),Object(m.jsx)(X,{children:Object(m.jsxs)(V,{children:[Object(m.jsx)($,{children:Object(m.jsx)(ee,{children:"Biosphere Investment Group"})}),Object(m.jsx)(ne,{}),Object(m.jsxs)(te,{children:[Object(m.jsxs)(ie,{children:[Object(m.jsx)(ce,{children:Object(m.jsx)(U.a,{})}),Object(m.jsx)(re,{target:"_blank",href:"https://www.google.com/maps/place/Seattle,+WA/data=!4m2!3m1!1s0x5490102c93e83355:0x102565466944d59a?sa=X&ved=2ahUKEwjhu_nA2ffcAhUD3Z8KHdR1BQYQ8gEwGHoECAsQCw",children:"Seattle, WA"})]}),Object(m.jsxs)(ie,{children:[Object(m.jsx)(ce,{children:Object(m.jsx)(K.a,{})}),Object(m.jsx)(re,{target:"_blank",href:"mailto:info@biosgrp.com",children:"info@biosgrp.com"})]}),Object(m.jsxs)(ie,{children:[Object(m.jsx)(ce,{children:Object(m.jsx)(J.a,{})}),Object(m.jsx)(re,{target:"_blank",href:"//biosgrp.com",children:"biosgrp.com"})]})]})]})})},se=t(19),ae=t(36),je=D.a.div(G||(G=Object(W.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n"]))),le=Object(D.a)(ae.a)(S||(S=Object(W.a)(["\n    font-size: 3em;\n"]))),de=D.a.div(F||(F=Object(W.a)(["\n    padding-top: 0.5em;\n    font-size: 1em;\n"]))),be=D.a.a(Q||(Q=Object(W.a)(["\n    margin-top: 1em;\n    padding: 0.5em 1em;\n    border-radius: 10px;\n    font-size: 0.75em;\n    text-decoration: none;\n    color: ",";\n    background-color: ",";\n    &:hover {\n        opacity: 0.9;\n    }\n"])),Z,Y),he=function(){return Object(m.jsx)(X,{children:Object(m.jsxs)(je,{children:[Object(m.jsx)(le,{}),Object(m.jsx)(de,{children:"Page not found."}),Object(m.jsx)(be,{href:"/",children:"Try here instead."})]})})};var xe=function(){return Object(m.jsx)(a.a,{basename:"/",children:Object(m.jsxs)(j.c,{children:[Object.entries(L).map((function(e){var n=Object(s.a)(e,2),t=n[0],i=n[1];return Object(m.jsx)(j.a,{path:t,children:Object(m.jsx)(M,{href:i})},t)})),Object.entries(T).map((function(e){var n=Object(s.a)(e,2),t=n[0],i=n[1];return Object(m.jsxs)(j.a,{path:t,children:[Object(m.jsx)(se.a,{children:Object(m.jsx)("title",{children:i.title})}),i.component]},t)})),Object(m.jsxs)(j.a,{exact:!0,path:"/",children:[Object(m.jsx)(se.a,{children:Object(m.jsx)("title",{children:"Biosphere Investment Group"})}),Object(m.jsx)(oe,{})]}),Object(m.jsx)(j.a,{children:Object(m.jsx)(he,{})})]})})};o.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(xe,{})}),document.getElementById("root"))}},[[56,1,2]]]);