(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"+sDd":function(e,t,n){"use strict";t.a=function(e){return console.log("Error from handleError.js: ",e),"Error: ".concat(e&&e.message?e.message:"No error message")}},"/h46":function(e,t,n){n("cHUd")("Map")},"3+E+":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/items",function(){var e=n("GL6l");return{page:e.default||e}}])},"4oJ5":function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"a",function(){return a});var r="https://online-store-yoga-prod.herokuapp.com/",a=4},"5pKv":function(e,t){e.exports="\t\n\v\f\r \xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff"},CpBc:function(e,t,n){var r=n("Y7ZC"),a=n("EP9H");r(r.G+r.F*(parseFloat!=a),{parseFloat:a})},EP9H:function(e,t,n){var r=n("5T2Y").parseFloat,a=n("oc46").trim;e.exports=1/r(n("5pKv")+"-0")!==-1/0?function(e){var t=a(String(e),3),n=r(t);return 0===n&&"-"==t.charAt(0)?-0:n}:r},GL6l:function(e,t,n){"use strict";n.r(t);var r=n("RNiq");t.default=r.default},LX0d:function(e,t,n){e.exports=n("UDep")},RNiq:function(e,t,n){"use strict";n.r(t);var r=n("Wa2I"),a=n.n(r),i=n("q1tI"),o=n.n(i),c=n("rt45"),u=n("ttZb"),l=n("LIIV"),s=n("+sDd"),p=n("vOnD"),d=n("17x9"),f=n.n(d),m=n("YFqc"),g=n.n(m),h=p.c.h3.withConfig({displayName:"Title",componentId:"sc-16nq74k-0"})(["margin:0 1rem;text-align:center;transform:skew(-5deg) rotate(-1deg);margin-top:-3rem;text-shadow:2px 2px 0 rgba(0,0,0,0.1);a{background:",";display:inline;line-height:1.3;font-size:4rem;text-align:center;color:white;padding:0 1rem;}"],function(e){return e.theme.red}),v=p.c.div.withConfig({displayName:"ItemStyles__Item",componentId:"sc-16pk14u-0"})(["background:white;border:1px solid ",";box-shadow:",";position:relative;display:flex;flex-direction:column;img{width:100%;height:400px;object-fit:cover;}p{font-size:12px;line-height:2;font-weight:300;flex-grow:1;padding:0 3rem;font-size:1.5rem;}.buttonList{display:grid;width:100%;border-top:1px solid ",";grid-template-columns:repeat(auto-fit,minmax(100px,1fr));grid-gap:1px;background:",";& > *{background:white;border:0;font-size:1rem;padding:1rem;}}"],function(e){return e.theme.offWhite},function(e){return e.theme.bs},function(e){return e.theme.lightgrey},function(e){return e.theme.lightgrey}),E=p.c.span.withConfig({displayName:"PriceTag",componentId:"nwbk6t-0"})(["background:",";transform:rotate(3deg);color:white;font-weight:600;padding:5px;line-height:1;font-size:3rem;display:inline-block;position:absolute;top:-3px;right:-3px;"],function(e){return e.theme.red}),b=n("2y/O"),y=n("doui");function x(){var e=Object(c.a)(["\n  mutation DELETE_ITEM_MUTATION($id: ID!) {\n    deleteItem(id: $id) {\n      id\n    }\n  }\n"]);return x=function(){return e},e}var w=Object(l.b)(x()),I=function(e){var t=e.children,n=e.id,r=Object(u.d)(w,{update:function(e,t){var n=e.readQuery({query:A});n.items=n.items.filter(function(e){return e.id!==t.data.deleteItem.id}),e.writeQuery({query:A,data:n})}}),a=Object(y.default)(r,2),i=a[0];a[1].error;return o.a.createElement("button",{onClick:function(){confirm("Are you sure you wanted to delete this?")&&i({variables:{id:n}}).catch(function(e){alert(e.message)})}},t)},k=n("R9qi");function T(){var e=Object(c.a)(["\n  mutation addToCart($id: ID!) {\n    addToCart(id: $id) {\n      id\n      quantity\n    }\n  }\n"]);return T=function(){return e},e}var C=Object(l.b)(T()),O=function(e){var t=e.id,n=Object(u.d)(C,{variables:{id:t},refetchQueries:[{query:k.a}]}),r=Object(y.default)(n,2),a=r[0],i=r[1],c=(i.error,i.loading);return o.a.createElement("button",{onClick:a,disabled:c},"Add",c&&"ing"," To Cart \ud83d\uded2")},q=function(e){var t=e.item;return o.a.createElement(v,null,t.image&&o.a.createElement("img",{src:t.image,alt:t.title}),o.a.createElement(h,null,o.a.createElement(g.a,{href:{pathname:"/item",query:{id:t.id}}},o.a.createElement("a",null,t.title))),o.a.createElement(E,null,Object(b.a)(t.price)),o.a.createElement("p",null,t.description),o.a.createElement("div",{className:"buttonList"},o.a.createElement(g.a,{href:{pathname:"update",query:{id:t.id}}},o.a.createElement("a",null,"Edit \u270f\ufe0f")),o.a.createElement(O,{id:t.id}),o.a.createElement(I,{id:t.id},"Delete This Item")))};q.PropsTypes={item:f.a.object.isRequired};var N=q,j=n("m/Pd"),L=n.n(j),_=p.c.div.withConfig({displayName:"PaginationStyles",componentId:"aduuar-0"})(["text-align:center;display:inline-grid;grid-template-columns:repeat(4,auto);align-items:stretch;justify-content:center;align-content:center;margin:2rem 0;border:1px solid ",";border-radius:10px;& > *{margin:0;padding:15px 30px;border-right:1px solid ",";&:last-child{border-right:0;}}a[aria-disabled='true']{color:grey;pointer-events:none;}"],function(e){return e.theme.lightgrey},function(e){return e.theme.lightgrey}),U=n("4oJ5"),P=n("VUBQ");function M(){var e=Object(c.a)(["\n  query PAGINATION_QUERY {\n    itemsConnection {\n      aggregate {\n        count\n      }\n    }\n  }\n"]);return M=function(){return e},e}var F=Object(l.b)(M()),R=function(e){var t=e.page,n=Object(u.e)(F),r=n.data,a=n.loading,i=n.error;if(a)return o.a.createElement("p",null,"Loading...");if(i)return o.a.createElement(P.a,{error:i});var c=r.itemsConnection.aggregate.count,l=Math.ceil(c/U.a);return o.a.createElement(_,{"data-test":"pagination"},o.a.createElement(L.a,null,o.a.createElement("title",null,"Great Fits! Page ",t," of ",l)),o.a.createElement(g.a,{prefetch:!0,href:{pathname:"items",query:{page:t-1}}},o.a.createElement("a",{className:"prev","aria-disabled":t<=1},"\u2190 Prev")),o.a.createElement("p",null,"Page ",t," of",o.a.createElement("span",{className:"totalPages"},l)),o.a.createElement("p",null,c," Items Total"),o.a.createElement(g.a,{prefetch:!0,href:{pathname:"items",query:{page:t+1}}},o.a.createElement("a",{className:"next","aria-disabled":t>=l},"Next \u2192")))};function D(){var e=Object(c.a)(["\n  query ALL_ITEMS_QUERY($skip: Int = 0, $first: Int = ",") {\n    items(first: $first, skip: $skip, orderBy: createAt_DESC) {\n      id\n      title\n      price\n      description\n      image\n      largeImage\n    }\n  }\n"]);return D=function(){return e},e}var A=Object(l.b)(D(),U.a),K=p.c.div.withConfig({displayName:"Items__Center",componentId:"tikday-0"})(["text-align:center;"]),S=p.c.div.withConfig({displayName:"Items__ItemsList",componentId:"tikday-1"})(["display:grid;grid-template-columns:1fr 1fr;grid-gap:60px;max-width:",";margin:0 auto;"],function(e){return e.theme.maxWidth}),W=function(e){var t=e.page,n=Object(u.e)(A,{variables:{skip:t*U.a-U.a,first:U.a}}),r=n.data,a=n.error,i=n.loading;return o.a.createElement(K,null,o.a.createElement("p",null,"Items!"),o.a.createElement(R,{page:t}),i&&o.a.createElement("p",null,"Loading..."),a&&Object(s.a)(a),!i&&!a&&o.a.createElement(S,null,r.items.map(function(e){return o.a.createElement(N,{key:e.id,item:e})})),o.a.createElement(R,{page:t}))};t.default=function(e){var t=e.query;return o.a.createElement(o.a.Fragment,null,o.a.createElement(W,{page:a()(t.page)||1}))}},UDep:function(e,t,n){n("wgeU"),n("FlQf"),n("bBy9"),n("g33z"),n("XLbu"),n("/h46"),n("dVTT"),e.exports=n("WEpk").Map},Wa2I:function(e,t,n){e.exports=n("e+cT")},XLbu:function(e,t,n){var r=n("Y7ZC");r(r.P+r.R,"Map",{toJSON:n("8iia")("Map")})},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("KI45"),a=r(n("0iUn")),i=r(n("sLSF")),o=r(n("MI3g")),c=r(n("a7VT")),u=r(n("Tit0")),l=n("5Uuq"),s=n("KI45");t.__esModule=!0,t.default=void 0;var p,d=s(n("LX0d")),f=n("CxY0"),m=l(n("q1tI")),g=(s(n("17x9")),s(n("nOHt"))),h=(n("KA3u"),n("Bu4q"));function v(e){return e&&"object"===typeof e?(0,h.formatWithValidation)(e):e}var E=new d.default,b=window.IntersectionObserver;function y(){return p||(b?p=new b(function(e){e.forEach(function(e){if(E.has(e.target)){var t=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(e.target),E.delete(e.target),t())}})},{rootMargin:"200px"}):void 0)}var x=function(e){function t(){var e;return(0,a.default)(this,t),(e=(0,o.default)(this,(0,c.default)(t).apply(this,arguments))).cleanUpListeners=function(){},e.formatUrls=function(e){var t=null,n=null,r=null;return function(a,i){if(r&&a===t&&i===n)return r;var o=e(a,i);return t=a,n=i,r=o,o}}(function(e,t){return{href:v(e),as:t?v(t):t}}),e.linkClicked=function(t){var n=t.currentTarget,r=n.nodeName,a=n.target;if("A"!==r||!(a&&"_self"!==a||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var i=e.formatUrls(e.props.href,e.props.as),o=i.href,c=i.as;if(function(e){var t=(0,f.parse)(e,!1,!0),n=(0,f.parse)((0,h.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(o)){var u=window.location.pathname;o=(0,f.resolve)(u,o),c=c?(0,f.resolve)(u,c):o,t.preventDefault();var l=e.props.scroll;null==l&&(l=c.indexOf("#")<0),g.default[e.props.replace?"replace":"push"](o,c,{shallow:e.props.shallow}).then(function(e){e&&l&&(window.scrollTo(0,0),document.body.focus())})}}},e}return(0,u.default)(t,e),(0,i.default)(t,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"handleRef",value:function(e){var t=this;this.props.prefetch&&b&&e&&e.tagName&&(this.cleanUpListeners(),this.cleanUpListeners=function(e,t){var n=y();return n?(n.observe(e),E.set(e,t),function(){n.unobserve(e),E.delete(e)}):function(){}}(e,function(){t.prefetch()}))}},{key:"prefetch",value:function(){if(this.props.prefetch){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,n=(0,f.resolve)(e,t);g.default.prefetch(n)}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,a=n.as;"string"===typeof t&&(t=m.default.createElement("a",null,t));var i=m.Children.only(t),o={ref:function(t){return e.handleRef(t)},onMouseEnter:function(t){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(t),e.prefetch()},onClick:function(t){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(o.href=a||r),m.default.cloneElement(i,o)}}]),t}(m.Component);x.propTypes=void 0,x.defaultProps={prefetch:!0};var w=x;t.default=w},dVTT:function(e,t,n){n("aPfg")("Map")},"e+cT":function(e,t,n){n("CpBc"),e.exports=n("WEpk").parseFloat},g33z:function(e,t,n){"use strict";var r=n("Wu5q"),a=n("n3ko");e.exports=n("raTm")("Map",function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},{get:function(e){var t=r.getEntry(a(this,"Map"),e);return t&&t.v},set:function(e,t){return r.def(a(this,"Map"),0===e?0:e,t)}},r,!0)},oc46:function(e,t,n){var r=n("Y7ZC"),a=n("Jes0"),i=n("KUxP"),o=n("5pKv"),c="["+o+"]",u=RegExp("^"+c+c+"*"),l=RegExp(c+c+"*$"),s=function(e,t,n){var a={},c=i(function(){return!!o[e]()||"\u200b\x85"!="\u200b\x85"[e]()}),u=a[e]=c?t(p):o[e];n&&(a[n]=u),r(r.P+r.F*c,"String",a)},p=s.trim=function(e,t){return e=String(a(e)),1&t&&(e=e.replace(u,"")),2&t&&(e=e.replace(l,"")),e};e.exports=s}},[["3+E+",1,0]]]);