"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[322],{6083:function(t,e,n){n.d(e,{Hg:function(){return o},M1:function(){return v},Pg:function(){return p},Pt:function(){return f},tx:function(){return m}});var r=n(5861),a=n(4687),u=n.n(a),c=n(1243),i="a81f67cfcb4d5e6663d9f2cbb7c2c958";function o(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.Z.get("https://api.themoviedb.org/3/trending/movie/day?language=en-US",{params:{api_key:i}});case 3:return e=t.sent,t.abrupt("return",e.data.results);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function p(t){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"?language=en-US"),{params:{api_key:i}});case 3:return n=t.sent,t.abrupt("return",n);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function f(t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(e,"&include_adult=false&language=en-US&page=1"),{params:{api_key:i}});case 3:return n=t.sent,t.abrupt("return",n);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function v(t){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?language=en-US"),{params:{api_key:i}});case 3:return n=t.sent,t.abrupt("return",n);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function m(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?language=en-US&page=1"),{params:{api_key:i}});case 3:return n=t.sent,t.abrupt("return",n);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}},4322:function(t,e,n){n.r(e),n.d(e,{default:function(){return m}});var r=n(9439),a=n(1087),u=n(7689),c=n(2791),i=n(6083),o=n(9085),s=(n(5462),n(184));function p(t){var e=t.onSubmit,n=(0,c.useState)(""),a=(0,r.Z)(n,2),u=a[0],i=a[1];return(0,s.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),""===u)return o.Am.warning("You can't do a search on an empty string");e(u),i("")},children:[(0,s.jsx)("input",{type:"text",value:u,onChange:function(t){i(t.target.value)}}),(0,s.jsx)("button",{type:"submit",children:"Search"}),(0,s.jsx)(o.Ix,{})]})}var l,f=n(5067),h=n(168),v=n(5706).Z.p(l||(l=(0,h.Z)(["\n  font-size: large;\n  text-align: center;\n"])));function g(){return(0,s.jsx)(v,{children:"Search for your favorite movies!"})}var m=function(){var t,e=(0,c.useState)(null),n=(0,r.Z)(e,2),l=n[0],h=n[1],v=(0,c.useState)(!1),m=(0,r.Z)(v,2),d=m[0],x=m[1],y=(0,a.lr)(),b=(0,r.Z)(y,2),w=b[0],k=b[1],Z=(0,u.TH)(),j=null!==(t=w.get("query"))&&void 0!==t?t:"";return(0,c.useEffect)((function(){""!==j&&(x(!0),i.Pt(j).then((function(t){var e=t.data;0===e.results.length&&o.Am.warning("Unfortunately, we couldn't find anything."),h(e.results)})).finally(x(!1)))}),[j]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(p,{onSubmit:function(t){k({query:t})}}),d&&(0,s.jsx)(f.$,{}),l?(0,s.jsx)("ul",{children:l.map((function(t){return(0,s.jsx)("li",{children:(0,s.jsx)(a.rU,{to:"".concat(t.id),state:{from:Z},children:t.title})},t.id)}))}):(0,s.jsx)(g,{}),(0,s.jsx)(o.Ix,{})]})}}}]);
//# sourceMappingURL=322.d460a184.chunk.js.map