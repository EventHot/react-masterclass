(this["webpackJsonpreact-masterclass"]=this["webpackJsonpreact-masterclass"]||[]).push([[0],{40:function(e,n,t){"use strict";t.r(n);var o,r=t(0),c=t.n(r),i=t(14),a=t.n(i),s=t(9),l=t(18),b=t(23),d=t(4),u=t(2),j=t(24);!function(e){e.TO_DO="TO_DO",e.DOING="DOING",e.DONE="DONE"}(o||(o={}));var O=Object(s.b)({key:"category",default:o.TO_DO}),f=Object(j.recoilPersist)({key:"toDo"}).persistAtom,h=Object(s.b)({key:"toDo",default:[],effects_UNSTABLE:[f]}),m=Object(s.c)({key:"toDoSelector",get:function(e){var n=e.get,t=n(h),o=n(O);return t.filter((function(e){return e.category===o}))}}),g=t(6),p=t(25),x=t(3);var D=function(){var e=Object(s.f)(h),n=Object(s.e)(O),t=Object(p.a)(),o=t.register,r=t.handleSubmit,c=t.setValue;return Object(x.jsxs)("form",{onSubmit:r((function(t){var o=t.toDo;e((function(e){return[{text:o,id:Date.now(),category:n}].concat(Object(g.a)(e))})),c("toDo","")})),children:[Object(x.jsx)("input",Object(d.a)(Object(d.a)({},o("toDo",{required:"Please write a To Do"})),{},{placeholder:"Write a to do"})),Object(x.jsx)("button",{children:"Add"})]})};var v=function(e){var n=e.text,t=e.category,r=e.id,c=Object(s.f)(h),i=function(e){var t=e.currentTarget.name;c((function(e){var o=e.findIndex((function(e){return e.id===r})),c={text:n,id:r,category:t};return[].concat(Object(g.a)(e.slice(0,o)),[c],Object(g.a)(e.slice(o+1)))}))};return Object(x.jsxs)("li",{children:[Object(x.jsx)("span",{children:n}),t!==o.DOING&&Object(x.jsx)("button",{name:o.DOING,onClick:i,children:"Doing"}),t!==o.TO_DO&&Object(x.jsx)("button",{name:o.TO_DO,onClick:i,children:"To Do"}),t!==o.DONE&&Object(x.jsx)("button",{name:o.DONE,onClick:i,children:"Done"}),Object(x.jsx)("button",{onClick:function(e){e.currentTarget.name;c((function(e){var n=r;return e.filter((function(e){return e.id!==n}))}))},children:"remove"})]})};var y,k=function(){var e=Object(s.e)(m),n=Object(s.d)(O),t=Object(u.a)(n,2),r=t[0],c=t[1];return console.log(e),Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{children:"To Dos"}),Object(x.jsx)("hr",{}),Object(x.jsxs)("select",{value:r,onInput:function(e){c(e.currentTarget.value)},children:[Object(x.jsx)("option",{value:o.TO_DO,children:"To Do"}),Object(x.jsx)("option",{value:o.DOING,children:"Doing"}),Object(x.jsx)("option",{value:o.DONE,children:"Done"})]}),Object(x.jsx)(D,{}),null===e||void 0===e?void 0:e.map((function(e){return Object(x.jsx)(v,Object(d.a)({},e),e.id)}))]})},T=Object(l.b)(y||(y=Object(b.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n* {\n  box-sizing: border-box;\n}\nbody {\n  font-weight: 300;\n  font-family: 'Source Sans Pro', sans-serif;\n  background-color:",";\n  color:",";\n  line-height: 1.2;\n}\na {\n  text-decoration:none;\n  color:inherit;\n}\n"])),(function(e){return e.theme.bgColor}),(function(e){return e.theme.textColor}));var w=function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(T,{}),Object(x.jsx)(k,{})]})};a.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(s.a,{children:Object(x.jsx)(l.a,{theme:{bgColor:"#2f3640",textColor:"white",accentColor:"#9c88ff",cardBgColor:"transparent"},children:Object(x.jsx)(w,{})})})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.cb4fcf25.chunk.js.map