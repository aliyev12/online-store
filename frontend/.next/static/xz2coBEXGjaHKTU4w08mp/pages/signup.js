(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"4mXO":function(e,t,a){e.exports=a("7TPF")},"7TPF":function(e,t,a){a("AUvm"),e.exports=a("WEpk").Object.getOwnPropertySymbols},OUKs:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signup",function(){var e=a("vL9u");return{page:e.default||e}}])},km3s:function(e,t,a){"use strict";var n=a("ln6h"),r=a.n(n),l=a("O40h"),u=a("vYYK"),i=a("zrwo"),o=a("doui"),c=a("rt45"),m=a("q1tI"),s=a.n(m),p=a("ttZb"),d=a("LIIV"),f=a("mzXK"),b=a("VUBQ"),v=a("VliS");function E(){var e=Object(c.a)(["\n  mutation SIGNIN_MUTATION($email: String!, $password: String!) {\n    signin(email: $email, password: $password) {\n      id\n      email\n      name\n    }\n  }\n"]);return E=function(){return e},e}var w=Object(d.b)(E());t.a=function(){var e=Object(m.useState)({email:"",name:"",password:""}),t=Object(o.default)(e,2),a=t[0],n=t[1],c=Object(p.d)(w,{variables:a,refetchQueries:[{query:v.a}]}),d=Object(o.default)(c,2),E=d[0],h=d[1],O=h.error,g=h.loading,j=function(e){var t=e.target;n(Object(i.a)({},a,Object(u.a)({},t.name,t.value)))};return s.a.createElement(f.a,{method:"post",onSubmit:function(){var e=Object(l.default)(r.a.mark(function e(t){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,E();case 3:e.sent,n(Object(i.a)({},a,{email:"",name:"",password:""}));case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},s.a.createElement("fieldset",{disabled:g,"aria-busy":g},s.a.createElement("h2",null,"Sign Into Your Account"),s.a.createElement(b.a,{error:O}),s.a.createElement("label",{htmlFor:"email"},"Email",s.a.createElement("input",{type:"email",name:"email",placeholder:"Email",value:a.email,onChange:j})),s.a.createElement("label",{htmlFor:"password"},"Password",s.a.createElement("input",{type:"password",name:"password",value:a.password,onChange:j})),s.a.createElement("button",{type:"submit"},"Sign In!")))}},vL9u:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),l=a("vOnD"),u=a("ln6h"),i=a.n(u),o=a("O40h"),c=a("vYYK"),m=a("zrwo"),s=a("doui"),p=a("rt45"),d=a("ttZb"),f=a("LIIV"),b=a("mzXK"),v=a("VUBQ"),E=a("R9qi");function w(){var e=Object(p.a)(["\n  mutation SIGNUP_MUTATION(\n    $name: String!\n    $email: String!\n    $password: String!\n  ) {\n    signup(name: $name, email: $email, password: $password) {\n      email\n      name\n      id\n    }\n  }\n"]);return w=function(){return e},e}var h=Object(f.b)(w()),O=function(){var e=Object(n.useState)({name:"",email:"",password:""}),t=Object(s.default)(e,2),a=t[0],l=t[1],u=Object(d.d)(h,{variables:a,refetchQueries:[{query:E.a}]}),p=Object(s.default)(u,2),f=p[0],w=p[1],O=w.error,g=w.loading,j=function(e){var t=e.target;l(Object(m.a)({},a,Object(c.a)({},t.name,t.value)))};return r.a.createElement(b.a,{method:"post",onSubmit:function(){var e=Object(o.default)(i.a.mark(function e(t){var n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,f();case 3:n=e.sent,console.log(n),l(Object(m.a)({},a,{name:"",email:"",password:""}));case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},r.a.createElement("fieldset",{disabled:g,"aria-busy":g},r.a.createElement("h2",null,"Sign Up for An Account"),r.a.createElement(v.a,{error:O}),r.a.createElement("label",{htmlFor:"email"},"Email",r.a.createElement("input",{type:"email",name:"email",placeholder:"Email",value:a.email,onChange:j})),r.a.createElement("label",{htmlFor:"name"},"Name",r.a.createElement("input",{type:"text",name:"name",placeholder:"Name",value:a.name,onChange:j})),r.a.createElement("label",{htmlFor:"password"},"Password",r.a.createElement("input",{type:"password",name:"password",value:a.password,onChange:j})),r.a.createElement("button",{type:"submit"},"Sign Up!")))},g=a("km3s");function j(){var e=Object(p.a)(["\n  mutation REQUEST_RESET_MUTATION($email: String!) {\n    requestReset(email: $email) {\n      message\n    }\n  }\n"]);return j=function(){return e},e}var y=Object(f.b)(j()),S=function(){var e=Object(n.useState)(""),t=Object(s.default)(e,2),a=t[0],l=t[1],u=Object(d.d)(y,{variables:{email:a}}),c=Object(s.default)(u,2),m=c[0],p=c[1],f=p.error,E=p.loading,w=p.called;return r.a.createElement(b.a,{method:"post","data-test":"form",onSubmit:function(){var e=Object(o.default)(i.a.mark(function e(t){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,m();case 3:l("");case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},r.a.createElement("fieldset",{disabled:E,"aria-busy":E},r.a.createElement("h2",null,"Request a password reset"),r.a.createElement(v.a,{error:f}),!f&&!E&&w&&r.a.createElement("p",null,"Success! Check your email for a reset link!"),r.a.createElement("label",{htmlFor:"email"},"Email",r.a.createElement("input",{type:"email",name:"email",placeholder:"Email",value:a,onChange:function(e){return l(e.target.value)}})),r.a.createElement("button",{type:"submit"},"Request Reset!")))};l.c.div.withConfig({displayName:"signup__Columns",componentId:"jf76qp-0"})(["display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));grid-gap:20px;"]),t.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,null),r.a.createElement(g.a,null),r.a.createElement(S,null))}},vYYK:function(e,t,a){"use strict";a.d(t,"a",function(){return l});var n=a("hfKm"),r=a.n(n);function l(e,t,a){return t in e?r()(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}},zrwo:function(e,t,a){"use strict";a.d(t,"a",function(){return m});var n=a("Jo+v"),r=a.n(n),l=a("4mXO"),u=a.n(l),i=a("pLtp"),o=a.n(i),c=a("vYYK");function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=o()(a);"function"===typeof u.a&&(n=n.concat(u()(a).filter(function(e){return r()(a,e).enumerable}))),n.forEach(function(t){Object(c.a)(e,t,a[t])})}return e}}},[["OUKs",1,0]]]);