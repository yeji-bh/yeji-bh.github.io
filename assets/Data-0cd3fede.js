import{g as ne,R as N,r as T,j as o,a as l}from"./index-edd6ad9d.js";import{M as ie,a as oe,C as ae}from"./react-images.es-e29e05f2.js";var z={exports:{}},se="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",ce=se,he=ce;function F(){}function G(){}G.resetWarningCache=F;var le=function(){function t(n,i,a,s,c,h){if(h!==he){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var r={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:G,resetWarningCache:F};return r.PropTypes=r,r};z.exports=le();var ue=z.exports;const f=ne(ue);var Y=function(){if(typeof Map<"u")return Map;function t(e,r){var n=-1;return e.some(function(i,a){return i[0]===r?(n=a,!0):!1}),n}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(r){var n=t(this.__entries__,r),i=this.__entries__[n];return i&&i[1]},e.prototype.set=function(r,n){var i=t(this.__entries__,r);~i?this.__entries__[i][1]=n:this.__entries__.push([r,n])},e.prototype.delete=function(r){var n=this.__entries__,i=t(n,r);~i&&n.splice(i,1)},e.prototype.has=function(r){return!!~t(this.__entries__,r)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(r,n){n===void 0&&(n=null);for(var i=0,a=this.__entries__;i<a.length;i++){var s=a[i];r.call(n,s[1],s[0])}},e}()}(),k=typeof window<"u"&&typeof document<"u"&&window.document===document,P=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),de=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(P):function(t){return setTimeout(function(){return t(Date.now())},1e3/60)}}(),fe=2;function pe(t,e){var r=!1,n=!1,i=0;function a(){r&&(r=!1,t()),n&&c()}function s(){de(a)}function c(){var h=Date.now();if(r){if(h-i<fe)return;n=!0}else r=!0,n=!1,setTimeout(s,e);i=h}return c}var me=20,ve=["top","right","bottom","left","width","height","size","weight"],ge=typeof MutationObserver<"u",ye=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=pe(this.refresh.bind(this),me)}return t.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},t.prototype.removeObserver=function(e){var r=this.observers_,n=r.indexOf(e);~n&&r.splice(n,1),!r.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){var e=this.updateObservers_();e&&this.refresh()},t.prototype.updateObservers_=function(){var e=this.observers_.filter(function(r){return r.gatherActive(),r.hasActive()});return e.forEach(function(r){return r.broadcastActive()}),e.length>0},t.prototype.connect_=function(){!k||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),ge?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){!k||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(e){var r=e.propertyName,n=r===void 0?"":r,i=ve.some(function(a){return!!~n.indexOf(a)});i&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),q=function(t,e){for(var r=0,n=Object.keys(e);r<n.length;r++){var i=n[r];Object.defineProperty(t,i,{value:e[i],enumerable:!1,writable:!1,configurable:!0})}return t},R=function(t){var e=t&&t.ownerDocument&&t.ownerDocument.defaultView;return e||P},B=H(0,0,0,0);function M(t){return parseFloat(t)||0}function I(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];return e.reduce(function(n,i){var a=t["border-"+i+"-width"];return n+M(a)},0)}function be(t){for(var e=["top","right","bottom","left"],r={},n=0,i=e;n<i.length;n++){var a=i[n],s=t["padding-"+a];r[a]=M(s)}return r}function we(t){var e=t.getBBox();return H(0,0,e.width,e.height)}function xe(t){var e=t.clientWidth,r=t.clientHeight;if(!e&&!r)return B;var n=R(t).getComputedStyle(t),i=be(n),a=i.left+i.right,s=i.top+i.bottom,c=M(n.width),h=M(n.height);if(n.boxSizing==="border-box"&&(Math.round(c+a)!==e&&(c-=I(n,"left","right")+a),Math.round(h+s)!==r&&(h-=I(n,"top","bottom")+s)),!je(t)){var u=Math.round(c+a)-e,p=Math.round(h+s)-r;Math.abs(u)!==1&&(c-=u),Math.abs(p)!==1&&(h-=p)}return H(i.left,i.top,c,h)}var _e=function(){return typeof SVGGraphicsElement<"u"?function(t){return t instanceof R(t).SVGGraphicsElement}:function(t){return t instanceof R(t).SVGElement&&typeof t.getBBox=="function"}}();function je(t){return t===R(t).document.documentElement}function Oe(t){return k?_e(t)?we(t):xe(t):B}function Te(t){var e=t.x,r=t.y,n=t.width,i=t.height,a=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,s=Object.create(a.prototype);return q(s,{x:e,y:r,width:n,height:i,top:r,right:e+n,bottom:i+r,left:e}),s}function H(t,e,r,n){return{x:t,y:e,width:r,height:n}}var Ee=function(){function t(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=H(0,0,0,0),this.target=e}return t.prototype.isActive=function(){var e=Oe(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},t}(),Re=function(){function t(e,r){var n=Te(r);q(this,{target:e,contentRect:n})}return t}(),Ae=function(){function t(e,r,n){if(this.activeObservations_=[],this.observations_=new Y,typeof e!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=r,this.callbackCtx_=n}return t.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(e instanceof R(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var r=this.observations_;r.has(e)||(r.set(e,new Ee(e)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(e instanceof R(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var r=this.observations_;r.has(e)&&(r.delete(e),r.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach(function(r){r.isActive()&&e.activeObservations_.push(r)})},t.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,r=this.activeObservations_.map(function(n){return new Re(n.target,n.broadcastRect())});this.callback_.call(e,r,e),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),J=typeof WeakMap<"u"?new WeakMap:new Y,V=function(){function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var r=ye.getInstance(),n=new Ae(e,r,this);J.set(this,n)}return t}();["observe","unobserve","disconnect"].forEach(function(t){V.prototype[t]=function(){var e;return(e=J.get(this))[t].apply(e,arguments)}});var Ce=function(){return typeof P.ResizeObserver<"u"?P.ResizeObserver:V}();function Se(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function W(){return W=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},W.apply(this,arguments)}function U(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{},n=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(i){return Object.getOwnPropertyDescriptor(r,i).enumerable}))),n.forEach(function(i){Se(t,i,r[i])})}return t}function Ne(t,e){if(t==null)return{};var r={},n=Object.keys(t),i,a;for(a=0;a<n.length;a++)i=n[a],!(e.indexOf(i)>=0)&&(r[i]=t[i]);return r}function Pe(t,e){if(t==null)return{};var r=Ne(t,e),n,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function Me(t,e){return He(t)||ke(t,e)||We()}function He(t){if(Array.isArray(t))return t}function ke(t,e){var r=[],n=!0,i=!1,a=void 0;try{for(var s=t[Symbol.iterator](),c;!(n=(c=s.next()).done)&&(r.push(c.value),!(e&&r.length===e));n=!0);}catch(h){i=!0,a=h}finally{try{!n&&s.return!=null&&s.return()}finally{if(i)throw a}}return r}function We(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}var De={cursor:"pointer"},$=function(e){var r=e.index,n=e.onClick,i=e.photo,a=e.margin,s=e.direction,c=e.top,h=e.left,u=e.key,p={margin:a,display:"block"};s==="column"&&(p.position="absolute",p.left=h,p.top=c);var m=function(v){n(v,{photo:i,index:r})};return N.createElement("img",W({key:u,style:n?U({},p,De):p},i,{onClick:n?m:null}))},K=f.shape({key:f.string,src:f.string.isRequired,width:f.number.isRequired,height:f.number.isRequired,alt:f.string,title:f.string,srcSet:f.oneOfType([f.string,f.array]),sizes:f.oneOfType([f.string,f.array])});$.propTypes={index:f.number.isRequired,onClick:f.func,photo:K.isRequired,margin:f.number,top:function(e){if(e.direction==="column"&&typeof e.top!="number")return new Error("top is a required number when direction is set to `column`")},left:function(e){if(e.direction==="column"&&typeof e.left!="number")return new Error("left is a required number when direction is set to `column`")},direction:f.string};var E=function(e,r){return r||(r=0),+(Math.round(e+"e"+r)+"e-"+r)},Ie=function(e){for(var r=e.photos,n=e.columns,i=e.containerWidth,a=e.margin,s=(i-a*2*n)/n,c=r.map(function(d){var v=d.height/d.width*s;return U({},d,{width:E(s,1),height:E(v,1)})}),h=[],u=[],p=0;p<n;p++)h[p]=E(p*(s+a*2),1),u[p]=0;var m=c.map(function(d){var v=u.reduce(function(g,x,w){return g=x<u[g]?w:g,g},0);d.top=u[v],d.left=h[v],u[v]=u[v]+d.height+a*2;var A=u.reduce(function(g,x,w){return g=x>u[g]?w:g,g},0);return d.containerHeight=u[A],d});return m},Q=function(e){var r=e.width,n=e.height;return E(r/n,2)};function X(t){this.content=[],this.scoreFunction=t}X.prototype={push:function(e){this.content.push(e),this.bubbleUp(this.content.length-1)},pop:function(){var e=this.content[0],r=this.content.pop();return this.content.length>0&&(this.content[0]=r,this.sinkDown(0)),e},remove:function(e){for(var r=this.content.length,n=0;n<r;n++)if(this.content[n]==e){var i=this.content.pop();if(n==r-1)break;this.content[n]=i,this.bubbleUp(n),this.sinkDown(n);break}},size:function(){return this.content.length},bubbleUp:function(e){for(var r=this.content[e],n=this.scoreFunction(r);e>0;){var i=Math.floor((e+1)/2)-1,a=this.content[i];if(n>=this.scoreFunction(a))break;this.content[i]=r,this.content[e]=a,e=i}},sinkDown:function(e){for(var r=this.content.length,n=this.content[e],i=this.scoreFunction(n);;){var a=(e+1)*2,s=a-1,c=null;if(s<r){var h=this.content[s],u=this.scoreFunction(h);u<i&&(c=s)}if(a<r){var p=this.content[a],m=this.scoreFunction(p);m<(c==null?i:u)&&(c=a)}if(c==null)break;this.content[e]=this.content[c],this.content[c]=n,e=c}}};var Le=function(e,r,n){var i={},a={},s={};s[r]=0;var c=new X(function(v){return v.weight});for(c.push({id:r,weight:0});c.size();){var h=c.pop(),u=h.id;if(!a[u]){var p=e(u)||{};a[u]=1;for(var m in p){var d=h.weight+p[m];(typeof s[m]>"u"||s[m]>d)&&(s[m]=d,c.push({id:m,weight:d}),i[m]=u)}}}if(typeof s[n]>"u")throw new Error("There is no path from ".concat(r," to ").concat(n));return i},ze=function(e,r){for(var n=[],i=r;i;)n.push(i),e[i],i=e[i];return n.reverse()},Fe=function(e,r,n){var i=Le(e,r,n);return ze(i,n)},Z=function(e,r,n){var i=r-e.length*(n*2),a=e.reduce(function(s,c){return s+Q(c)},0);return i/a},Ge=function(e,r,n,i,a,s){var c=e.slice(r,n),h=Z(c,i,s);return Math.pow(Math.abs(h-a),2)},Ye=function(e,r,n,i,a){return function(s){var c={};s=+s,c[+s]=0;for(var h=s+1;h<n.length+1&&!(h-s>i);++h)c[h.toString()]=Ge(n,s,h,r,e,a);return c}},qe=function(e){var r=e.containerWidth,n=e.limitNodeSearch,i=e.targetRowHeight,a=e.margin,s=e.photos,c=Ye(i,r,s,n,a),h=Fe(c,"0",s.length);h=h.map(function(v){return+v});for(var u=1;u<h.length;++u)for(var p=s.slice(h[u-1],h[u]),m=Z(p,r,a),d=h[u-1];d<h[u];++d)s[d].width=E(m*Q(s[d]),1),s[d].height=m;return s},Be=function(e){var r=e.targetRowHeight,n=e.containerWidth,i=n/r;return E(i/1.5)+8},D=N.memo(function(e){var r=e.photos,n=e.onClick,i=e.direction,a=e.margin,s=e.limitNodeSearch,c=e.targetRowHeight,h=e.columns,u=e.renderImage,p=T.useState(0),m=Me(p,2),d=m[0],v=m[1],A=T.useRef(null);T.useLayoutEffect(function(){var y=null,_=new Ce(function(S){var b=S[0].contentRect.width;d!==b&&(y=window.requestAnimationFrame(function(){v(Math.floor(b))}))});return _.observe(A.current),function(){_.disconnect(),window.cancelAnimationFrame(y)}});var g=function(_,S){var b=S.index;n(_,{index:b,photo:r[b],previous:r[b-1]||null,next:r[b+1]||null})};if(!d)return N.createElement("div",{ref:A}," ");var x=d-1,w,C;i==="row"&&(typeof s=="function"&&(s=s(d)),typeof c=="function"&&(c=c(d)),s===void 0&&(s=2,d>=450&&(s=Be({containerWidth:d,targetRowHeight:c}))),w={display:"flex",flexWrap:"wrap",flexDirection:"row"},C=qe({containerWidth:x,limitNodeSearch:s,targetRowHeight:c,margin:a,photos:r})),i==="column"&&(typeof h=="function"&&(h=h(d)),h===void 0&&(h=1,d>=500&&(h=2),d>=900&&(h=3),d>=1500&&(h=4)),w={position:"relative"},C=Ie({containerWidth:x,columns:h,margin:a,photos:r}),w.height=C[C.length-1].containerHeight);var ee=u||$;return N.createElement("div",{className:"react-photo-gallery--gallery"},N.createElement("div",{ref:A,style:w},C.map(function(y,_){var S=y.left,b=y.top,te=y.containerHeight,re=Pe(y,["left","top","containerHeight"]);return ee({left:S,top:b,key:y.key||y.src,containerHeight:te,index:_,margin:a,direction:i,onClick:n?g:null,photo:re})})))});D.propTypes={photos:f.arrayOf(K).isRequired,direction:f.string,onClick:f.func,columns:f.oneOfType([f.func,f.number]),targetRowHeight:f.oneOfType([f.func,f.number]),limitNodeSearch:f.oneOfType([f.func,f.number]),margin:f.number,renderImage:f.func};D.defaultProps={margin:2,direction:"row",targetRowHeight:300};const j=({images:t})=>{const[e,r]=T.useState(-1),[n,i]=T.useState(!1),a=T.useCallback((c,{photo:h,index:u})=>{r(u),i(!0)},[]),s=()=>{r(-1),i(!1)};return o.jsxs(o.Fragment,{children:[o.jsx(D,{direction:"column",photos:t,onClick:a}),o.jsx(ie,{children:n?o.jsx(oe,{onClose:s,children:o.jsx(ae,{currentIndex:e,views:t.map(c=>({...c,caption:c.name}))})}):null})]})},Je=[{id:1,name:"生日趋势 HWANG AND ONLY YEJI DAY",src:"/data/birthday_1-1.jpg",width:800,height:1300},{id:2,name:"生日趋势 HWANG AND ONLY YEJI DAY",src:"/data/birthday_1-2.jpg",width:800,height:1500},{id:3,name:"生日趋势 HWANG AND ONLY YEJI DAY",src:"/data/birthday_1-3.jpg",width:800,height:1200},{id:4,name:"生日趋势 #AcePrincessYEJIday",src:"/data/birthday_2-1.jpg",width:1e3,height:1e3},{id:5,name:"生日趋势 #AcePrincessYEJIday",src:"/data/birthday_2-2.jpg",width:1e3,height:1300},{id:6,name:"生日趋势 #AcePrincessYEJIday",src:"/data/birthday_2-3.jpg",width:1e3,height:800},{id:7,name:"生日趋势 韩文词条",src:"/data/birthday_3-1.jpg",width:1e3,height:1e3},{id:8,name:"生日趋势 韩文词条",src:"/data/birthday_3-2.jpg",width:1e3,height:900},{id:9,name:"生日趋势 韩文词条",src:"/data/birthday_3-3.jpg",width:1e3,height:1300},{id:10,name:"生日趋势 日文词条",src:"/data/birthday_4.jpg",width:1170,height:1170},{id:11,name:"生日趋势 Yeji",src:"/data/birthday_5.jpg",width:800,height:415}],Ve=[{id:12,name:"2023 1/1 ~ 6/4 的 Google 搜索量对比",src:"/data/2023-google-trends.png",width:2342,height:1390},{id:13,name:"2023 美国油管搜索量最多TOP20",src:"/data/2023-youtube-searches-USA.png",width:674,height:1146}],Ue=[{id:14,name:"看秀数据对比 - 官宣推文数据",src:"/data/show_1.png",width:1400,height:1400},{id:15,name:"看秀数据对比 - 世趋",src:"/data/show_2.png",width:880,height:1400},{id:16,name:"看秀数据对比 - 当日推文量",src:"/data/show_3.png",width:564,height:1470},{id:17,name:"看秀数据对比 - 看秀当日ins数据",src:"/data/show_4.png",width:1700,height:1400}],$e=[{id:18,name:"世巡數據 - 推特破萬轉萬讚合集",src:"/data/worldtour_1.jpg",width:3e3,height:4e3},{id:19,name:"世巡數據 - 抖音高播放高讚合集",src:"/data/worldtour_2.jpg",width:1e3,height:1400},{id:20,name:"世巡數據 - 其他合集",src:"/data/worldtour_3.jpg",width:4e3,height:4e3}],Ke=[{id:21,name:"River - AOTM 2023/06/04 最新數據",src:"/data/river_1.png",width:1300,height:500},{id:23,name:"River 封面",src:"/data/river_3.png",width:603,height:337},{id:24,name:"River 5000w播放量獎牌",src:"/data/river_4.png",width:272,height:364},{id:25,name:"River 5000w播放量獎牌自拍~",src:"/data/river_5.png",width:261,height:364}],Qe=[{id:26,name:"CHESHIRE 回归中输纪录",src:"/data/sales_1.jpg",width:1e3,height:1e3},{id:27,name:"CHESHIRE 一个月中输涨幅趋势图",src:"/data/sales_2.png",width:900,height:843},{id:28,name:"CHECKMATE 中输首周数据",src:"/data/sales_3.png",width:1330,height:990},{id:29,name:"CHECKMATE 官网签专库存",src:"/data/sales_4.png",width:1466,height:596}],O={birthday:Je,searches:Ve,show:Ue,worldTour:$e,river:Ke,sales:Qe},L=[{label:"生日",value:"birthday",body:o.jsxs("div",{children:[o.jsx(l.Alert,{className:"mb-3",color:"red",variant:"ghost",children:o.jsx(l.Typography,{className:"text-md font-bold",children:"2023 生日世趋队内第一"})}),o.jsxs("div",{className:"mb-3",children:[o.jsx(l.Typography,{className:"text-lg font-bold",children:"HWANG AND ONLY YEJI DAY"}),o.jsx(l.Typography,{children:"🌏世趋 8 🇵🇭菲律宾 8 🇮🇩印尼 8 🇲🇾马来西亚 8 🇹🇭泰国 9 🇧🇷巴西 18 🇵🇷波多黎各 42 🇺🇸美国 47"})]}),o.jsxs("div",{className:"mb-3",children:[o.jsx(l.Typography,{className:"text-lg font-bold",children:"#AcePrincessYEJIday"}),o.jsx(l.Typography,{children:"🇵🇭菲律宾 5 🇰🇷韩国 8 🇹🇭泰国 24 🇮🇩印尼 30"})]}),o.jsxs("div",{className:"mb-3",children:[o.jsx(l.Typography,{className:"text-lg font-bold",children:"#행복덩어리예지를만난건_행운이야"}),o.jsx(l.Typography,{children:"🇵🇭菲律宾 6 🇰🇷韩国 8 🇹🇭泰国 24 🇮🇩印尼 30"})]}),o.jsxs("div",{className:"mb-3",children:[o.jsx(l.Typography,{className:"text-lg font-bold",children:"イェジちゃん"}),o.jsx(l.Typography,{children:"🇯🇵日本 37"})]}),o.jsxs("div",{className:"mb-3",children:[o.jsx(l.Typography,{className:"text-lg font-bold",children:"Yeji"}),o.jsx(l.Typography,{children:"🇮🇩印尼 28"})]}),o.jsx(j,{images:O.birthday}),o.jsx(l.Typography,{className:"text-sm mt-3",children:"(可点击图片放大)"})]})},{label:"搜索",value:"searches",body:o.jsxs("div",{children:[o.jsx(l.Alert,{className:"mb-3",color:"red",variant:"ghost",children:o.jsx(l.Typography,{className:"text-md font-bold",children:"2023 Google 全球搜索量队内第一、美国油管搜索量队内第一"})}),o.jsx(j,{images:O.searches}),o.jsx(l.Typography,{className:"text-sm mt-3",children:"(可点击图片放大)"})]})},{label:"看秀",value:"show",body:o.jsxs("div",{children:[o.jsx(l.Alert,{className:"mb-3",color:"red",variant:"ghost",children:o.jsx(l.Typography,{className:"text-md font-bold",children:"看秀全面数据超过队友，並无队友粉口中「看秀无人在意」一说"})}),o.jsx(j,{images:O.show}),o.jsx(l.Typography,{className:"text-sm mt-3",children:"(可点击图片放大)"})]})},{label:"世巡",value:"worldtour",body:o.jsxs("div",{children:[o.jsx(l.Alert,{className:"mb-3",color:"red",variant:"ghost",children:o.jsx(l.Typography,{className:"text-md font-bold",children:"世巡各平台收获多条万赞万转推文(微博)、百万播放甚至千万播放的视频"})}),o.jsx(j,{images:O.worldTour}),o.jsx(l.Typography,{className:"text-sm mt-3",children:"(可点击图片放大)"})]})},{label:"River",value:"river",body:o.jsxs("div",{children:[o.jsxs("ul",{className:"list-disc",children:[o.jsx("li",{children:o.jsx(l.Typography,{className:"text-sm text-gray my-3",children:"五代第一位且唯一单人舞蹈视频达到5000万播放的艺人"})}),o.jsx("li",{children:o.jsx(l.Typography,{className:"text-sm text-gray my-3",children:"五代最高播放量、五代女爱豆中最高且唯一达到189万赞的单人舞蹈视频"})}),o.jsx("li",{children:o.jsx(l.Typography,{className:"text-sm text-gray my-3",children:"五代第一位且唯一在脸书上超过33万点赞的艺人"})}),o.jsx("li",{children:o.jsx(l.Typography,{className:"text-sm text-gray my-3",children:"本视频为AOTM栏目最快且唯一达到4000万 5000万播放量的视频"})}),o.jsx("li",{children:o.jsx(l.Typography,{className:"text-sm text-gray my-3",children:"本视频为AOTM栏目最快达到2300万~5000万播放量的视频"})}),o.jsx("li",{children:o.jsx(l.Typography,{className:"text-sm text-gray my-3",children:"本视频为2021年Studio Choom全频道发布的舞蹈视频(含团体)中播放量最高、点赞量最高的舞蹈视频"})}),o.jsx("li",{children:o.jsx(l.Typography,{className:"text-sm text-gray my-3",children:"本视频为Studio Choom全频道点赞量第二高、单人视频中最高、播放量第三高且为全频道前十播放视频中唯一的单人视频"})})]}),o.jsx(j,{images:O.river}),o.jsx(l.Typography,{className:"text-sm mt-3",children:"(可点击图片放大)"})]})},{label:"中输",value:"sales",body:o.jsxs("div",{children:[o.jsx(l.Alert,{className:"mb-3",color:"red",variant:"ghost",children:o.jsx(l.Typography,{className:"text-md font-bold",children:"近两次回归 CHECKMATE、CHESHIRE 中输纪录"})}),o.jsx(j,{images:O.sales}),o.jsx(l.Typography,{className:"text-sm mt-3",children:"(可点击图片放大)"})]})}],Xe=()=>o.jsxs("div",{className:"mt-5 px-5 w-full",children:[o.jsx(l.Typography,{className:"text-lg font-bold my-3",children:"2023 最新数据"}),o.jsxs(l.Tabs,{value:"birthday",children:[o.jsx(l.TabsHeader,{className:"bg-transparent",indicatorProps:{className:"bg-blue-500/10 shadow-none text-blue-500"},children:L.map(({label:t,value:e})=>o.jsx(l.Tab,{value:e,children:t},e))}),o.jsx(l.TabsBody,{children:L.map(({value:t,body:e})=>o.jsx(l.TabPanel,{value:t,children:e},t))})]})]}),tt=()=>o.jsx(Xe,{});export{tt as default};
