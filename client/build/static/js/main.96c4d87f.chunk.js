(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{110:function(e,t,n){},113:function(e,t,n){},114:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(18),c=n.n(r),s=(n(83),n(26)),o=n(6),i=n(60),l=n.n(i),u=Object(a.createContext)(),j=Object(a.createContext)(),d=n(9),p=n(10),b=n.n(p),O=n(23),h=n(13),f=n.n(h),x=n(22),m=n(3),v="GET_NOTES",g="ADD_NOTE",y="DELETE_NOTE",E="UPDATE_NOTE",C="SET_CURRENT",k="CLEAR_CURRENT",w="CLEAR_NOTES",R="FILTER_NOTES",S="CLEAR_FILTER",N="NOTE_ERROR",A="SET_ALERT",T="REMOVE_ALERT",_="REGISTER_SUCCESS",L="REGISTER_FAIL",U="USER_LOADED",I="AUTH_ERROR",D="LOGIN_SUCCESS",F="LOGIN_FAIL",P="LOGOUT",G="CLEAR_ERRORS",q=function(e,t){switch(t.type){case v:return Object(m.a)(Object(m.a)({},e),{},{notes:t.payload});case g:return Object(m.a)(Object(m.a)({},e),{},{notes:[t.payload].concat(Object(x.a)(e.notes))});case y:return Object(m.a)(Object(m.a)({},e),{},{notes:e.notes.filter((function(e){return e._id!==t.payload}))});case E:return Object(m.a)(Object(m.a)({},e),{},{notes:e.notes.map((function(e){return e._id===t.payload._id?t.payload:e}))});case C:return Object(m.a)(Object(m.a)({},e),{},{current:t.payload});case k:return Object(m.a)(Object(m.a)({},e),{},{current:null});case R:case S:return Object(m.a)(Object(m.a)({},e),{},{filtered:null});case w:return Object(m.a)(Object(m.a)({},e),{},{notes:null,current:null,filtered:null,error:null});case N:return Object(m.a)(Object(m.a)({},e),{},{error:t.payload});default:return e}},z=n(2),H=function(){var e=Object(O.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("/api/notes");case 3:n=e.sent,t({type:v,payload:n.data}),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Get Note Error",e.t0),t({type:N,payload:e.t0.response});case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(O.a)(b.a.mark((function e(t,n){var a,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Content_Type:"application/json"}},e.prev=1,e.next=4,f.a.post("/api/notes",n,a);case 4:r=e.sent,t({type:g,payload:r.data}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log("error adding note"),t({type:N,payload:e.t0});case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n){return e.apply(this,arguments)}}(),J=function(){var e=Object(O.a)(b.a.mark((function e(t,n){var a,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{"Content-Type":"application/json"}},e.prev=1,e.next=4,f.a.put("/api/notes/".concat(n.id),n,a);case 4:r=e.sent,t({type:E,payload:r.data}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log("error updating note",e.t0),t({type:N,payload:e.t0.response});case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n){return e.apply(this,arguments)}}(),M=function(){var e=Object(O.a)(b.a.mark((function e(t,n){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.delete("/api/notes/".concat(n));case 3:t({type:y,payload:n}),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),console.log("Error Deleting messgae"),t({type:N,payload:e.t0.response.msg});case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,n){return e.apply(this,arguments)}}(),X=function(e){var t=Object(a.useReducer)(q,{notes:null,current:null,filtered:null,error:null}),n=Object(d.a)(t,2),r=n[0],c=n[1];return Object(z.jsx)(j.Provider,{value:{state:r,dispatch:c},children:e.children})};var K=function(){var e=Object(a.useContext)(u),t=e.isAuthenticated,n=e.user,r=e.logoutUser,c=Object(a.useContext)(j).dispatch;return Object(z.jsxs)("header",{children:[Object(z.jsxs)("h1",{children:[Object(z.jsx)(l.a,{}),"Keeper"," "]}),Object(z.jsx)("div",{children:n&&t?Object(z.jsxs)("div",{children:[Object(z.jsxs)("h3",{children:["Welcome ",Object(z.jsx)("span",{children:n.name})]}),Object(z.jsx)(s.b,{to:"/",onClick:function(){r(),c({type:w})},children:Object(z.jsx)("h3",{children:"Log Out"})})]}):Object(z.jsxs)("div",{children:[Object(z.jsx)(s.b,{to:"/signin",children:Object(z.jsx)("h3",{children:"Sign In"})}),Object(z.jsx)(s.b,{to:"/register",children:Object(z.jsx)("h3",{children:"Register"})})]})})]})};var V=function(){var e=(new Date).getFullYear();return Object(z.jsx)("footer",{children:Object(z.jsxs)("p",{children:["Copyright \xa9 ",e]})})},W=n(47),Y=n(11),Q=n(71),Z=n.n(Q),$=n(69),ee=n.n($),te=n(72),ne=n.n(te),ae=n(70),re=n.n(ae);var ce=function(e){var t=Object(a.useState)(!1),n=Object(d.a)(t,2),r=n[0],c=n[1],s=Object(a.useContext)(j).dispatch,o=Object(a.useState)({id:"",title:"",content:""}),i=Object(d.a)(o,2),l=i[0],u=i[1];function p(){this.style.height="auto",this.style.height=this.scrollHeight+"px"}Object(a.useEffect)((function(){var t={id:e.id,title:e.title,content:e.content};u(t),r&&function(){var e=document.querySelector("#auto-resizing1");console.log(e),e.addEventListener("input",p,!1)}()}),[r,e.content,e.id,e.title]);var b=function(e){e.preventDefault(),console.log("Delete iTem"),M(s,l.id)},O=function(e){var t=e.target,n=t.name,a=t.value;u((function(e){return Object(m.a)(Object(m.a)({},e),{},Object(Y.a)({},n,a))}))},h=function(){J(s,l),c(!1)};return r?Object(z.jsxs)("div",{className:"note",children:[Object(z.jsx)("input",{type:"text",name:"title",value:l.title,onChange:O}),Object(z.jsx)("textarea",{id:"auto-resizing1",type:"text",name:"content",value:l.content,onChange:O}),Object(z.jsx)("button",{onClick:h,children:Object(z.jsx)(ee.a,{})}),Object(z.jsx)("button",{onClick:function(){return c(!1)},children:Object(z.jsx)(re.a,{})})]}):Object(z.jsxs)("div",{className:"note",children:[Object(z.jsx)("h1",{children:l.title}),Object(z.jsx)("p",{children:l.content}),Object(z.jsx)("button",{onClick:b,children:Object(z.jsx)(Z.a,{})}),Object(z.jsx)("button",{onClick:function(){return c(!0)},children:Object(z.jsx)(ne.a,{})})]})};var se=function(e,t,n){function r(n){e.current&&!e.current.contains(n.target)&&t()}Object(a.useEffect)((function(){return n&&document.addEventListener("click",r),function(){return document.removeEventListener("click",r)}}),[n])},oe=n(38),ie=n(73),le=n.n(ie),ue=n(132),je=n(133),de=(n(110),{title:"",content:""});var pe=function(e){var t=Object(a.useState)(de),n=Object(d.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)(!1),o=Object(d.a)(s,2),i=o[0],l=o[1],u=Object(a.useRef)(null),p=Object(a.useContext)(j).dispatch,b=Object(oe.b)({opacity:i?1:0,height:i?"31px":"0px",display:i?"block":"none",from:{opacity:0,height:"0px",display:"none"}}),O=Object(oe.b)({height:i?"77px":"31px",from:{height:"31px"}}),h=function(e){var t=e.target,n=t.name,a=t.value;c((function(e){return Object(m.a)(Object(m.a)({},e),{},Object(Y.a)({},n,a))}))};function f(){this.style.height="auto",this.style.height=this.scrollHeight+"px"}return se(u,(function(){return l(!1)}),i),Object(a.useEffect)((function(){document.querySelector("#auto-resizing").addEventListener("input",f,!1)}),[]),Object(z.jsx)("div",{className:"for-form",children:Object(z.jsxs)("form",{ref:u,onSubmit:function(e){e.preventDefault(),B(p,r),c(de),l(!1)},className:"create-note",style:O,children:[Object(z.jsx)(oe.a.input,{type:"text",onChange:h,name:"title",value:r.title,placeholder:"Title",style:b}),Object(z.jsx)(oe.a.textarea,{type:"text",onChange:h,onClick:function(){return l(!0)},name:"content",value:r.content,placeholder:"Add note",style:O,id:"auto-resizing"}),Object(z.jsx)(je.a,{in:i,children:Object(z.jsx)(ue.a,{type:"submit",children:Object(z.jsx)(le.a,{})})})]})})},be=function(){var e=Object(a.useContext)(j),t=e.state,n=e.dispatch,r=Object(a.useContext)(u),c=r.loadUser,s=r.user;return Object(a.useEffect)((function(){console.log("load user"),c()}),[]),Object(a.useEffect)((function(){console.log("getting notes from user"),H(n)}),[n]),Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(pe,{}),Object(z.jsx)("div",{className:"container",children:s&&Object(z.jsx)(W.XMasonry,{center:!0,responsive:!0,smartUpdateCeil:1e3,children:t.notes&&t.notes.map((function(e,t){return Object(z.jsx)(W.XBlock,{children:Object(z.jsx)(ce,{id:e._id,title:e.title,content:e.content})},e._id)}))})})]})},Oe=Object(a.createContext)(),he=function(e){var t=Object(a.useContext)(Oe).setAlert,n=Object(a.useContext)(u),r=n.register,c=n.error,s=n.clearErrors,o=n.isAuthenticated,i=Object(a.useState)({name:"",email:"",password:"",password2:""}),l=Object(d.a)(i,2),j=l[0],p=l[1];Object(a.useEffect)((function(){o&&(console.log("isAuthenticated and redirect to User Home page"),e.history.push("/")),"user already exists"===c&&(t(c,"danger"),s())}),[c,o,e.history]);var b=j.name,O=j.email,h=j.password,f=j.password2,x=function(e){return p(Object(m.a)(Object(m.a)({},j),{},Object(Y.a)({},e.target.name,e.target.value)))};return Object(z.jsxs)("div",{className:"form-container",children:[Object(z.jsx)("h1",{children:"Acount Register"}),Object(z.jsxs)("form",{className:"register-form",onSubmit:function(e){e.preventDefault(),""===b||""===O&&""===h?t("Please enter all fields","danger"):h!==f?t("Password does not match","danger"):r({name:b,email:O,password:h})},children:[Object(z.jsxs)("div",{className:"form-group",children:[Object(z.jsx)("label",{htmlFor:"name",children:"Name"}),Object(z.jsx)("input",{type:"text",name:"name",value:b,onChange:x})]}),Object(z.jsxs)("div",{className:"form-group",children:[Object(z.jsx)("label",{htmlFor:"email",children:"Email"}),Object(z.jsx)("input",{type:"email",name:"email",value:O,onChange:x})]}),Object(z.jsxs)("div",{className:"form-group",children:[Object(z.jsx)("label",{htmlFor:"password",children:"Password"}),Object(z.jsx)("input",{type:"password",name:"password",value:h,onChange:x,required:!0,minLength:"6"})]}),Object(z.jsxs)("div",{className:"form-group",children:[Object(z.jsx)("label",{htmlFor:"password2",children:"Confirm Paswword"}),Object(z.jsx)("input",{type:"password",name:"password2",value:f,onChange:x,required:!0,minLength:"6"})]}),Object(z.jsx)("input",{type:"submit",value:"Register",className:"btn btn-primary btn-block"})]})]})},fe=function(e){var t=Object(a.useContext)(Oe),n=Object(a.useContext)(u),r=t.setAlert,c=n.loginUser,s=n.error,o=n.clearErrors,i=n.isAuthenticated,l=Object(a.useState)({email:"",password:""}),j=Object(d.a)(l,2),p=j[0],b=j[1];Object(a.useEffect)((function(){i&&e.history.push("/"),"Invalid Credentials"===s&&(r(s,"danger"),o())}),[s,i,e.history]);var O=p.email,h=p.password,f=function(e){return b(Object(m.a)(Object(m.a)({},p),{},Object(Y.a)({},e.target.name,e.target.value)))};return Object(z.jsxs)("div",{className:"form-container",children:[Object(z.jsx)("h1",{children:"Acount Login"}),Object(z.jsxs)("form",{className:"login-form",onSubmit:function(e){e.preventDefault(),""===O||""===h?r("Please fill in all fields","danger"):c({email:O,password:h})},children:[Object(z.jsxs)("div",{className:"form-group",children:[Object(z.jsx)("label",{htmlFor:"email",children:"Email"}),Object(z.jsx)("input",{type:"email",name:"email",value:O,onChange:f})]}),Object(z.jsxs)("div",{className:"form-group",children:[Object(z.jsx)("label",{htmlFor:"password",children:"Password"}),Object(z.jsx)("input",{type:"password",name:"password",value:h,onChange:f})]}),Object(z.jsx)("input",{type:"submit",value:"Login",className:"btn btn-primary btn-block"})]})]})},xe=n(75),me=function(e){var t=e.component,n=Object(xe.a)(e,["component"]),r=Object(a.useContext)(u),c=r.isAuthenticated,s=r.loading;return Object(z.jsx)(o.b,Object(m.a)(Object(m.a)({},n),{},{render:function(e){return c||s?Object(z.jsx)(t,Object(m.a)({},e)):Object(z.jsx)(o.a,{to:"/login"})}}))},ve=function(e,t){switch(t.type){case U:return Object(m.a)(Object(m.a)({},e),{},{isAuthenticated:!0,loading:!1,user:t.payload});case _:case D:return localStorage.setItem("token",t.payload.token),Object(m.a)(Object(m.a)(Object(m.a)({},e),t.payload),{},{isAuthenticated:!0,loading:!1});case L:case I:case F:case P:return localStorage.removeItem("token"),Object(m.a)(Object(m.a)({},e),{},{token:null,isAuthenticated:!1,loading:!1,user:null,error:t.payload});case G:return Object(m.a)(Object(m.a)({},e),{},{error:null});default:return e}},ge=function(e){e?(console.log("axios.defaults.headers",f.a.defaults.headers),f.a.defaults.headers.common["x-auth-token"]=e):delete f.a.defaults.headers.common["x-auth-token"]},ye=function(e){var t={token:localStorage.getItem("token"),isAuthenticated:null,loading:!0,user:null,error:null},n=Object(a.useReducer)(ve,t),r=Object(d.a)(n,2),c=r[0],s=r[1],o=function(){var e=Object(O.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.token&&ge(localStorage.token),e.prev=1,e.next=4,f.a.get("/api/auth");case 4:t=e.sent,s({type:U,payload:t.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),s({type:I});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=Object(O.a)(b.a.mark((function e(t){var n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{"Content-Type":"application/json"}},e.prev=1,console.log("start fetching",t),e.next=5,f.a.post("/api/users",t,n);case 5:a=e.sent,console.log("receive token response from /api/users",a.data),s({type:_,payload:a.data}),o(),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),console.log("errorrrrrr",e.t0,e.t0.response.data.msg),s({type:L,payload:e.t0.response.data.msg});case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(O.a)(b.a.mark((function e(t){var n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{"Content-Type":"application/json"}},e.prev=1,e.next=4,f.a.post("/api/auth",t,n);case 4:a=e.sent,s({type:D,payload:a.data}),o(),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),s({type:F,payload:e.t0.response.data.msg});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(z.jsx)(u.Provider,{value:{token:c.token,isAuthenticated:c.isAuthenticated,loading:c.loading,user:c.user,error:c.error,register:i,loadUser:o,loginUser:l,logoutUser:function(){return s({type:P})},clearErrors:function(){return s({type:G})}},children:e.children})},Ee=n(74),Ce=function(e,t){switch(t.type){case A:return[].concat(Object(x.a)(e),[t.payload]);case T:return e.filter((function(e){return e.id!==t.payload}));default:return e}},ke=function(e){var t=Object(a.useReducer)(Ce,[]),n=Object(d.a)(t,2),r=n[0],c=n[1];return Object(z.jsx)(Oe.Provider,{value:{alerts:r,setAlert:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5e3,a=Object(Ee.v4)();c({type:A,payload:{msg:e,type:t,id:a}}),setTimeout((function(){return c({type:T,payload:a})}),n)}},children:e.children})};n(113);localStorage.token&&ge(localStorage.token);var we=function(){return Object(z.jsx)(ye,{children:Object(z.jsx)(ke,{children:Object(z.jsx)(X,{children:Object(z.jsx)(s.a,{children:Object(z.jsxs)("div",{className:"App",children:[Object(z.jsx)(K,{}),Object(z.jsxs)(o.d,{children:[Object(z.jsx)(me,{exact:!0,path:"/",component:be}),Object(z.jsx)(o.b,{exact:!0,path:"/register",component:he}),Object(z.jsx)(o.b,{exact:!0,path:"/login",component:fe})]}),Object(z.jsx)(V,{})]})})})})})};c.a.render(Object(z.jsx)(we,{}),document.getElementById("root"))},83:function(e,t,n){}},[[114,1,2]]]);
//# sourceMappingURL=main.96c4d87f.chunk.js.map