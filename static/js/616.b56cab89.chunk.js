"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[616],{616:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var r=n(439),a=n(791),c=n(689),i=n(87),s=n(222),u=n(390),o="MovieDetails_button_box__gMR0I",l="MovieDetails_button__JfcqV",d=n(184),p=function(){var e,t,n=(0,c.UO)().movieId,p=(0,a.useState)(null),f=(0,r.Z)(p,2),h=f[0],v=f[1],x=(0,a.useState)(!1),m=(0,r.Z)(x,2),g=m[0],j=m[1],w=(0,c.TH)();if((0,a.useEffect)((function(){j(!0),(0,u.Y5)(n).then((function(e){v(e)})).catch((function(e){console.log(e)})).finally((function(){j(!1)}))}),[n]),h){var _=h||{},k=_.title,b=_.release_date,y=_.popularity,Z=_.overview,U=_.genres,S=_.poster_path,R=_.original_title;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{className:o,children:(0,d.jsx)(i.rU,{to:null!==(e=null===(t=w.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/",children:(0,d.jsx)("button",{type:"button",className:l,children:"Go back"})})}),g&&(0,d.jsx)(s.Z,{}),h&&(0,d.jsxs)("div",{children:[(0,d.jsx)("img",{width:"300px",src:S?"https://image.tmdb.org/t/p/w500".concat(S):"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg",alt:R}),(0,d.jsxs)("div",{children:[(0,d.jsxs)("h1",{children:[k," (",b.slice(0,4),")"]}),(0,d.jsxs)("p",{children:["User score: ",y]}),(0,d.jsx)("h2",{children:"Overview"}),(0,d.jsx)("p",{children:Z}),(0,d.jsx)("h2",{children:"Genres"}),(0,d.jsx)("ul",{children:U.map((function(e){return(0,d.jsx)("li",{children:e.name},e.id)}))})]})]}),(0,d.jsx)("hr",{}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h3",{children:"Additional information"}),(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:(0,d.jsx)(i.rU,{to:"credits",children:"Cast"})}),(0,d.jsx)("li",{children:(0,d.jsx)(i.rU,{to:"reviews",children:"Reviews"})})]}),(0,d.jsx)("hr",{}),(0,d.jsx)(c.j3,{})]})]})}}},390:function(e,t,n){n.d(t,{Hx:function(){return p},RZ:function(){return o},Tg:function(){return u},Y5:function(){return l},xc:function(){return d}});var r=n(861),a=n(687),c=n.n(a),i=n(243);i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="61a74e45dda65dc7d6d2b2ec92323e86",u=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("trending/movie/day?api_key=".concat(s));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("search/movie?api_key=".concat(s,"&language=en-US&page=1&include_adult=false&query=").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(t,"?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(t,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=616.b56cab89.chunk.js.map