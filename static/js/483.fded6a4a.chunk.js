"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[483],{483:function(e,t,n){n.r(t);var r=n(439),a=n(791),c=n(689),u=n(222),i=n(390),s=n(184);t.default=function(){var e=(0,c.UO)().movieId,t=(0,a.useState)([]),n=(0,r.Z)(t,2),o=n[0],p=n[1],f=(0,a.useState)(!1),l=(0,r.Z)(f,2),d=l[0],h=l[1];return(0,a.useEffect)((function(){h(!0),(0,i.xc)(e).then((function(e){p(e)})).catch((function(e){console.log(e)})).finally((function(){h(!1)}))}),[e]),(0,s.jsxs)("div",{children:[d&&(0,s.jsx)(u.Z,{}),(0,s.jsx)("ul",{children:o.map((function(e){var t=e.id,n=e.profile_path,r=e.original_name,a=e.name,c=e.character;return(0,s.jsxs)("li",{children:[(0,s.jsx)("img",{width:"200px",src:n?"https://image.tmdb.org/t/p/w500".concat(n):"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg",alt:r}),(0,s.jsx)("p",{children:a}),(0,s.jsxs)("p",{children:["Character: ",c]})]},t)}))})]})}},390:function(e,t,n){n.d(t,{Hx:function(){return l},RZ:function(){return o},Tg:function(){return s},Y5:function(){return p},xc:function(){return f}});var r=n(861),a=n(687),c=n.n(a),u=n(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="61a74e45dda65dc7d6d2b2ec92323e86",s=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("trending/movie/day?api_key=".concat(i));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("search/movie?api_key=".concat(i,"&language=en-US&page=1&include_adult=false&query=").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=483.fded6a4a.chunk.js.map