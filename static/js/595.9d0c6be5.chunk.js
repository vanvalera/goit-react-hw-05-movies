"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[595],{488:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(689),a=n(87),u={list:"EditorList_list__o08AI"},c=n(184),s=function(e){var t=e.films,n=(0,r.TH)();return(0,c.jsx)("ul",{className:u.list,children:t.map((function(e){return(0,c.jsx)("li",{className:u.link,children:(0,c.jsx)(a.rU,{to:"/movies/".concat(e.id),state:{from:n},children:e.title})},e.id)}))})}},595:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var r=n(439),a=n(390),u=n(791),c=n(222),s=n(488),i="Movies_main__GxnlD",o=n(184),f=function(){var e=(0,u.useState)([]),t=(0,r.Z)(e,2),n=t[0],f=t[1],l=(0,u.useState)(!1),p=(0,r.Z)(l,2),d=p[0],v=p[1],h=(0,u.useState)(!1),m=(0,r.Z)(h,2),x=m[0],g=m[1];return(0,o.jsxs)("main",{className:i,children:[(0,o.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.target.elements.searchMovie.value;v(!0),(0,a.RZ)(t).then((function(e){f(e),g(0===e.length)})).catch((function(e){console.log(e)})).finally((function(){v(!1)}))},children:[(0,o.jsx)("input",{type:"text",name:"searchMovie"}),(0,o.jsx)("button",{type:"submit",children:"Search"})]}),d&&(0,o.jsx)(c.Z,{}),x&&(0,o.jsx)("p",{children:"Sorry. There are no movies with this request. Please try again."}),n&&(0,o.jsx)(s.Z,{films:n})]})}},390:function(e,t,n){n.d(t,{Hx:function(){return p},RZ:function(){return o},Tg:function(){return i},Y5:function(){return f},xc:function(){return l}});var r=n(861),a=n(687),u=n.n(a),c=n(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="61a74e45dda65dc7d6d2b2ec92323e86",i=function(){var e=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/movie/day?api_key=".concat(s));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("search/movie?api_key=".concat(s,"&language=en-US&page=1&include_adult=false&query=").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=595.9d0c6be5.chunk.js.map