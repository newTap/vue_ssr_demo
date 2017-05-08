webpackJsonp([0],[function(t,e,n){"use strict";function r(t){return"[object Array]"===T.call(t)}function i(t){return"[object ArrayBuffer]"===T.call(t)}function o(t){return"undefined"!=typeof FormData&&t instanceof FormData}function s(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer}function a(t){return"string"==typeof t}function u(t){return"number"==typeof t}function c(t){return void 0===t}function f(t){return null!==t&&"object"==typeof t}function l(t){return"[object Date]"===T.call(t)}function p(t){return"[object File]"===T.call(t)}function d(t){return"[object Blob]"===T.call(t)}function m(t){return"[object Function]"===T.call(t)}function h(t){return f(t)&&m(t.pipe)}function v(t){return"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams}function g(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}function y(){return"undefined"!=typeof window&&"undefined"!=typeof document&&"function"==typeof document.createElement}function w(t,e){if(null!==t&&void 0!==t)if("object"==typeof t||r(t)||(t=[t]),r(t))for(var n=0,i=t.length;n<i;n++)e.call(null,t[n],n,t);else for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.call(null,t[o],o,t)}function _(){function t(t,e){"object"==typeof n[e]&&"object"==typeof t?n[e]=_(n[e],t):n[e]=t}for(var e=arguments,n={},r=0,i=arguments.length;r<i;r++)w(e[r],t);return n}function E(t,e,n){return w(e,function(e,r){t[r]=n&&"function"==typeof e?b(e,n):e}),t}var b=n(13),T=Object.prototype.toString;t.exports={isArray:r,isArrayBuffer:i,isFormData:o,isArrayBufferView:s,isString:a,isNumber:u,isObject:f,isUndefined:c,isDate:l,isFile:p,isBlob:d,isFunction:m,isStream:h,isURLSearchParams:v,isStandardBrowserEnv:y,forEach:w,merge:_,extend:E,trim:g}},function(t,e){t.exports=function(t,e,n,r){var i,o=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(i=t,o=t.default);var a="function"==typeof o?o.options:o;if(e&&(a.render=e.render,a.staticRenderFns=e.staticRenderFns),n&&(a._scopeId=n),r){var u=a.computed||(a.computed={});Object.keys(r).forEach(function(t){var e=r[t];u[t]=function(){return e}})}return{esModule:i,exports:o,options:a}}},,function(t,e,n){"use strict";(function(e){function r(t,e){!i.isUndefined(t)&&i.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}var i=n(0),o=n(38),s={"Content-Type":"application/x-www-form-urlencoded"},a={adapter:function(){var t;return"undefined"!=typeof XMLHttpRequest?t=n(9):void 0!==e&&(t=n(9)),t}(),transformRequest:[function(t,e){return o(e,"Content-Type"),i.isFormData(t)||i.isArrayBuffer(t)||i.isStream(t)||i.isFile(t)||i.isBlob(t)?t:i.isArrayBufferView(t)?t.buffer:i.isURLSearchParams(t)?(r(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):i.isObject(t)?(r(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"==typeof t){t=t.replace(/^\)\]\}',?\n/,"");try{t=JSON.parse(t)}catch(t){}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(t){return t>=200&&t<300}};a.headers={common:{Accept:"application/json, text/plain, */*"}},i.forEach(["delete","get","head"],function(t){a.headers[t]={}}),i.forEach(["post","put","patch"],function(t){a.headers[t]=i.merge(s)}),t.exports=a}).call(e,n(41))},,,,,function(t,e,n){t.exports=n(24)},function(t,e,n){"use strict";var r=n(0),i=n(30),o=n(33),s=n(39),a=n(37),u=n(12),c="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||n(32);t.exports=function(t){return new Promise(function(e,f){var l=t.data,p=t.headers;r.isFormData(l)&&delete p["Content-Type"];var d=new XMLHttpRequest,m="onreadystatechange",h=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in d||a(t.url)||(d=new window.XDomainRequest,m="onload",h=!0,d.onprogress=function(){},d.ontimeout=function(){}),t.auth){var v=t.auth.username||"",g=t.auth.password||"";p.Authorization="Basic "+c(v+":"+g)}if(d.open(t.method.toUpperCase(),o(t.url,t.params,t.paramsSerializer),!0),d.timeout=t.timeout,d[m]=function(){if(d&&(4===d.readyState||h)&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in d?s(d.getAllResponseHeaders()):null,r=t.responseType&&"text"!==t.responseType?d.response:d.responseText,o={data:r,status:1223===d.status?204:d.status,statusText:1223===d.status?"No Content":d.statusText,headers:n,config:t,request:d};i(e,f,o),d=null}},d.onerror=function(){f(u("Network Error",t)),d=null},d.ontimeout=function(){f(u("timeout of "+t.timeout+"ms exceeded",t,"ECONNABORTED")),d=null},r.isStandardBrowserEnv()){var y=n(35),w=(t.withCredentials||a(t.url))&&t.xsrfCookieName?y.read(t.xsrfCookieName):void 0;w&&(p[t.xsrfHeaderName]=w)}if("setRequestHeader"in d&&r.forEach(p,function(t,e){void 0===l&&"content-type"===e.toLowerCase()?delete p[e]:d.setRequestHeader(e,t)}),t.withCredentials&&(d.withCredentials=!0),t.responseType)try{d.responseType=t.responseType}catch(t){if("json"!==d.responseType)throw t}"function"==typeof t.onDownloadProgress&&d.addEventListener("progress",t.onDownloadProgress),"function"==typeof t.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then(function(t){d&&(d.abort(),f(t),d=null)}),void 0===l&&(l=null),d.send(l)})}},function(t,e,n){"use strict";function r(t){this.message=t}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,t.exports=r},function(t,e,n){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},function(t,e,n){"use strict";var r=n(29);t.exports=function(t,e,n,i){var o=new Error(t);return r(o,e,n,i)}},function(t,e,n){"use strict";t.exports=function(t,e){return function(){for(var n=arguments,r=new Array(arguments.length),i=0;i<r.length;i++)r[i]=n[i];return t.apply(e,r)}}},function(t,e,n){"use strict";function r(t){var e=t.replace(/^https?:\/\//,"").replace(/\/.*$/,""),n=e.split(".").slice(-3);return"www"===n[0]&&n.shift(),n.join(".")}function i(t){var e=Date.now()/1e3-+t;return e<3600?o(~~(e/60),"分钟"):e<86400?o(~~(e/3600),"小时"):o(~~(e/86400),"天")}function o(t,e){return t+e}Object.defineProperty(e,"__esModule",{value:!0}),e.host=r,e.timeAgo=i},function(t,e,n){"use strict";function r(){a((f.a.cachedIds.top||[]).slice(0,30)),setTimeout(r,9e5)}function i(t){var e=f.a.cachedItems;return e&&e.has(t)?Promise.resolve(e.get(t)):new Promise(function(n,r){p.a.get(f.a.url+t+".json").then(function(r){var i=r.data;i&&(i.__lastUpdate=Date.now()),e&&e.set(t,i),n(i)}).catch(r)})}function o(t){return f.a.cachedIds&&f.a.cachedIds[t]?Promise.resolve(f.a.cachedIds[t]):i(t+"stories")}function s(t){return i("item/"+t)}function a(t){return Promise.all(t.map(function(t){return s(t)}))}function u(t){return i("user/"+t)}function c(t,e){function n(){r?r=!1:p.a.get(""+f.a.url+t+"stories.json").then(s),i&&(o=setTimeout(n,9e5))}var r=!0,i=!0,o=null,s=function(t){e(t.data)};return n(),function(){i=!1,o&&clearTimeout(o)}}var f=n(45),l=n(8),p=n.n(l);e.b=o,e.c=a,e.d=u,e.a=c,f.a.onServer&&!f.a.warmCacheStarted&&(f.a.warmCacheStarted=!0,r())},function(t,e,n){n(48);var r=n(1)(n(22),n(60),null,null);t.exports=r.exports},function(t,e,n){"use strict";t.exports=n(4).polyfill()},function(t,e,n){"use strict";var r=n(2),i=n(55),o=n.n(i),s=n(46),a=n(8),u=n.n(a),c=n(44),f=n(6),l=(n.n(f),n(14));n.d(e,"a",function(){return s.a}),n.d(e,"b",function(){return p}),r.default.prototype.$axios=u.a,r.default.use(u.a),n.i(f.sync)(s.a,c.a),Object.keys(l).forEach(function(t){r.default.filter(t,l[t])});var p=new r.default(Object.assign({},{router:c.a,store:s.a},o.a))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"comment",props:["id"],data:function(){return{open:!0}},computed:{comment:function(){return this.$store.state.items[this.id]}},methods:{pluralize:function(t){return t+(1===t?" reply":" replies")}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(14);e.default={name:"news-item",props:["item"],serverCacheKey:function(t){var e=t.item,i=e.id,o=e.__lastUpdated,s=e.time;return i+"::"+o+"::"+n.i(r.timeAgo)(s)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(16),i=n.n(r),o=n(57),s=n.n(o),a=n(15),u=!0;e.default={name:"item-list",components:{Spinner:i.a,Item:s.a},props:{type:String},data:function(){var t={loading:!1,transition:"slide-up",displayedPage:u?+this.$store.state.route.params.page||1:-1,displayedItems:u?this.$store.getters.activeItems:[],demo:""};return u=!1,t},computed:{page:function(){return+this.$store.state.route.params.page||1},maxPage:function(){var t=this.$store.state,e=t.itemsPerPage,n=t.lists;return Math.ceil(n[this.type].length/e)},hasMore:function(){return this.page<this.maxPage}},beforeMount:function(){var t=this;this.$root._isMounted&&this.loadItems(this.page),this.unwatchList=n.i(a.a)(this.type,function(e){t.$store.commit("SET_LIST",{type:t.type,ids:e}),t.$store.dispatch("ENSURE_ACTIVE_ITEMS").then(function(){t.displayedItems=t.$store.getters.activeItems})})},beforeDestroy:function(){this.unwatchList()},created:function(){var t=this;this.$axios.get("http://chenggua.com/api.php?r=topic/gettopiclist&userid=100044365&communityid=10007&pagenum=1&token=196890753d7cb1cfe3eb37b324ce428a").then(function(e){t.demo=e.data.result},function(t){console.log(t)})},watch:{page:function(t,e){this.loadItems(t,e)}},methods:{loadItems:function(t,e){var n=this;void 0===t&&(t=this.page),void 0===e&&(e=-1),this.loading=!0,this.$store.dispatch("FETCH_LIST_DATA",{type:this.type}).then(function(){if(n.page<0||n.page>n.maxPage)return void n.$router.replace("/"+n.type+"/1");n.transition=-1===e?null:t>e?"slide-left":"slide-right",n.displayedPage=t,n.displayedItems=n.$store.getters.activeItems,n.loading=!1})},test:function(){this.loading=!this.loading}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"spinner",props:["show"],serverCacheKey:function(t){return t.show}}},function(t,e,n){"use strict";function r(t){return t.dispatch("FETCH_ITEMS",{ids:[t.state.route.params.id]})}function i(t){return r(t).then(function(){var e=t.state,n=e.items,r=e.route;return fetchComments(t,n[r.params.id])})}Object.defineProperty(e,"__esModule",{value:!0});var o=n(16),s=n.n(o),a=n(56),u=n.n(a);e.default={name:"item-view",components:{Spinner:s.a,Comment:u.a},data:function(){return{loading:!0}},computed:{item:function(){return this.$store.state.items[this.$route.params.id]}},preFetch:r,beforeMount:function(){var t=this;i(this.$store).then(function(){t.loading=!1})}}},function(t,e,n){"use strict";function r(t){var e=new s(t),n=o(s.prototype.request,e);return i.extend(n,s.prototype,e),i.extend(n,e),n}var i=n(0),o=n(13),s=n(26),a=n(3),u=r(a);u.Axios=s,u.create=function(t){return r(i.merge(a,t))},u.Cancel=n(10),u.CancelToken=n(25),u.isCancel=n(11),u.all=function(t){return Promise.all(t)},u.spread=n(40),t.exports=u,t.exports.default=u},function(t,e,n){"use strict";function r(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(t){e=t});var n=this;t(function(t){n.reason||(n.reason=new i(t),e(n.reason))})}var i=n(10);r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var t;return{token:new r(function(e){t=e}),cancel:t}},t.exports=r},function(t,e,n){"use strict";function r(t){this.defaults=t,this.interceptors={request:new s,response:new s}}var i=n(3),o=n(0),s=n(27),a=n(28),u=n(36),c=n(34);r.prototype.request=function(t){"string"==typeof t&&(t=o.merge({url:arguments[0]},arguments[1])),t=o.merge(i,this.defaults,{method:"get"},t),t.baseURL&&!u(t.url)&&(t.url=c(t.baseURL,t.url));var e=[a,void 0],n=Promise.resolve(t);for(this.interceptors.request.forEach(function(t){e.unshift(t.fulfilled,t.rejected)}),this.interceptors.response.forEach(function(t){e.push(t.fulfilled,t.rejected)});e.length;)n=n.then(e.shift(),e.shift());return n},o.forEach(["delete","get","head"],function(t){r.prototype[t]=function(e,n){return this.request(o.merge(n||{},{method:t,url:e}))}}),o.forEach(["post","put","patch"],function(t){r.prototype[t]=function(e,n,r){return this.request(o.merge(r||{},{method:t,url:e,data:n}))}}),t.exports=r},function(t,e,n){"use strict";function r(){this.handlers=[]}var i=n(0);r.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},r.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},r.prototype.forEach=function(t){i.forEach(this.handlers,function(e){null!==e&&t(e)})},t.exports=r},function(t,e,n){"use strict";function r(t){t.cancelToken&&t.cancelToken.throwIfRequested()}var i=n(0),o=n(31),s=n(11),a=n(3);t.exports=function(t){return r(t),t.headers=t.headers||{},t.data=o(t.data,t.headers,t.transformRequest),t.headers=i.merge(t.headers.common||{},t.headers[t.method]||{},t.headers||{}),i.forEach(["delete","get","head","post","put","patch","common"],function(e){delete t.headers[e]}),(t.adapter||a.adapter)(t).then(function(e){return r(t),e.data=o(e.data,e.headers,t.transformResponse),e},function(e){return s(e)||(r(t),e&&e.response&&(e.response.data=o(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)})}},function(t,e,n){"use strict";t.exports=function(t,e,n,r){return t.config=e,n&&(t.code=n),t.response=r,t}},function(t,e,n){"use strict";var r=n(12);t.exports=function(t,e,n){var i=n.config.validateStatus;n.status&&i&&!i(n.status)?e(r("Request failed with status code "+n.status,n.config,null,n)):t(n)}},function(t,e,n){"use strict";var r=n(0);t.exports=function(t,e,n){return r.forEach(n,function(n){t=n(t,e)}),t}},function(t,e,n){"use strict";function r(){this.message="String contains an invalid character"}function i(t){for(var e,n,i=String(t),s="",a=0,u=o;i.charAt(0|a)||(u="=",a%1);s+=u.charAt(63&e>>8-a%1*8)){if((n=i.charCodeAt(a+=.75))>255)throw new r;e=e<<8|n}return s}var o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.prototype=new Error,r.prototype.code=5,r.prototype.name="InvalidCharacterError",t.exports=i},function(t,e,n){"use strict";function r(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var i=n(0);t.exports=function(t,e,n){if(!e)return t;var o;if(n)o=n(e);else if(i.isURLSearchParams(e))o=e.toString();else{var s=[];i.forEach(e,function(t,e){null!==t&&void 0!==t&&(i.isArray(t)&&(e+="[]"),i.isArray(t)||(t=[t]),i.forEach(t,function(t){i.isDate(t)?t=t.toISOString():i.isObject(t)&&(t=JSON.stringify(t)),s.push(r(e)+"="+r(t))}))}),o=s.join("&")}return o&&(t+=(-1===t.indexOf("?")?"?":"&")+o),t}},function(t,e,n){"use strict";t.exports=function(t,e){return t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,"")}},function(t,e,n){"use strict";var r=n(0);t.exports=r.isStandardBrowserEnv()?function(){return{write:function(t,e,n,i,o,s){var a=[];a.push(t+"="+encodeURIComponent(e)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(i)&&a.push("path="+i),r.isString(o)&&a.push("domain="+o),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},function(t,e,n){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},function(t,e,n){"use strict";var r=n(0);t.exports=r.isStandardBrowserEnv()?function(){function t(t){var e=t;return n&&(i.setAttribute("href",e),e=i.href),i.setAttribute("href",e),{href:i.href,protocol:i.protocol?i.protocol.replace(/:$/,""):"",host:i.host,search:i.search?i.search.replace(/^\?/,""):"",hash:i.hash?i.hash.replace(/^#/,""):"",hostname:i.hostname,port:i.port,pathname:"/"===i.pathname.charAt(0)?i.pathname:"/"+i.pathname}}var e,n=/(msie|trident)/i.test(navigator.userAgent),i=document.createElement("a");return e=t(window.location.href),function(n){var i=r.isString(n)?t(n):n;return i.protocol===e.protocol&&i.host===e.host}}():function(){return function(){return!0}}()},function(t,e,n){"use strict";var r=n(0);t.exports=function(t,e){r.forEach(t,function(n,r){r!==e&&r.toUpperCase()===e.toUpperCase()&&(t[e]=n,delete t[r])})}},function(t,e,n){"use strict";var r=n(0);t.exports=function(t){var e,n,i,o={};return t?(r.forEach(t.split("\n"),function(t){i=t.indexOf(":"),e=r.trim(t.substr(0,i)).toLowerCase(),n=r.trim(t.substr(i+1)),e&&(o[e]=o[e]?o[e]+", "+n:n)}),o):o}},function(t,e,n){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},function(t,e){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function i(t){if(f===setTimeout)return setTimeout(t,0);if((f===n||!f)&&setTimeout)return f=setTimeout,setTimeout(t,0);try{return f(t,0)}catch(e){try{return f.call(null,t,0)}catch(e){return f.call(this,t,0)}}}function o(t){if(l===clearTimeout)return clearTimeout(t);if((l===r||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(t);try{return l(t)}catch(e){try{return l.call(null,t)}catch(e){return l.call(this,t)}}}function s(){h&&d&&(h=!1,d.length?m=d.concat(m):v=-1,m.length&&a())}function a(){if(!h){var t=i(s);h=!0;for(var e=m.length;e;){for(d=m,m=[];++v<e;)d&&d[v].run();v=-1,e=m.length}d=null,h=!1,o(t)}}function u(t,e){this.fun=t,this.array=e}function c(){}var f,l,p=t.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:n}catch(t){f=n}try{l="function"==typeof clearTimeout?clearTimeout:r}catch(t){l=r}}();var d,m=[],h=!1,v=-1;p.nextTick=function(t){var e=arguments,n=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)n[r-1]=e[r];m.push(new u(t,n)),1!==m.length||h||i(a)},u.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=c,p.addListener=c,p.once=c,p.off=c,p.removeListener=c,p.removeAllListeners=c,p.emit=c,p.binding=function(t){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(t){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(17),i=(n.n(r),n(18));window.__INSTAL_STATE__&&i.a.replaceState(window.__INSTAL_STATE__),i.b.$mount("#app"),"serviceWorker"in navigator&&navigator.serviceWorker.register("/service-worker.js")},function(t,e,n){"use strict";var r=n(2),i=n(5),o=n(47),s=n(59),a=n.n(s);r.default.use(i.default),e.a=new i.default({mode:"history",scrollBehavior:function(){return{y:0}},routes:[{path:"/top/:page(\\d+)?",component:n.i(o.a)("top")},{path:"/new/:page(\\d+)?",component:n.i(o.a)("new")},{path:"/item/:id(\\d+)",component:a.a},{path:"/",redirect:"/top"}]})},function(t,e,n){"use strict";var r={url:"https://hacker-news.firebaseio.com/v0/"};e.a=r},function(t,e,n){"use strict";var r=n(2),i=n(7),o=n(15);r.default.use(i.default);var s=new i.default.Store({state:{activeType:null,itemsPerPage:20,items:{},users:{},lists:{top:[],new:[]}},actions:{FETCH_LIST_DATA:function(t,e){var r=t.commit,i=t.dispatch,s=(t.state,e.type);return r("SET_ACTIVE_TYPE",{type:s}),n.i(o.b)(s).then(function(t){return r("SET_LIST",{type:s,ids:t})}).then(function(){return i("ENSURE_ACTIVE_ITEMS")})},ENSURE_ACTIVE_ITEMS:function(t){return(0,t.dispatch)("FETCH_ITEMS",{ids:t.getters.activeIds})},FETCH_ITEMS:function(t,e){var r=t.commit,i=t.state,s=e.ids,a=Date.now();return s=s.filter(function(t){var e=i.items[t];return!e||a-e.__lastUpdated>18e4}),s.length?n.i(o.c)(s).then(function(t){return r("SET_ITEMS",{items:t})}):Promise.resolve()},FETCH_USER:function(t,e){var r=t.commit,i=t.state,s=e.id;return i.users[s]?Promise.resolve(i.users[s]):n.i(o.d)(s).then(function(t){return r("SET_USER",{user:t})})}},mutations:{SET_ACTIVE_TYPE:function(t,e){var n=e.type;t.activeType=n},SET_LIST:function(t,e){var n=e.type,r=e.ids;t.lists[n]=r},SET_ITEMS:function(t,e){e.items.forEach(function(e){e&&r.default.set(t.items,e.id,e)})},SET_USER:function(t,e){var n=e.user;r.default.set(t.users,n.id,n)}},getters:{activeIds:function(t){var e=t.activeType,n=t.itemsPerPage,r=t.lists,i=+t.route.params.page||1;if(e){var o=(i-1)*n,s=i*n;return r[e].slice(o,s)}return[]},activeItems:function(t,e){return e.activeIds.map(function(e){return t.items[e]}).filter(function(t){return t})}}});e.a=s},function(t,e,n){"use strict";function r(t){return{name:t+"-stories-view",preFetch:function(e){return e.dispatch("FETCH_LIST_DATA",{type:t})},render:function(e){return e(o.a,{props:{type:t}})}}}var i=n(58),o=n.n(i);e.a=r},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAIAAADYYG7QAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUNDN0FFMUVFRjM3MTFFNkEwNjBGOTgyMDhEODA2ODAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUNDN0FFMUZFRjM3MTFFNkEwNjBGOTgyMDhEODA2ODAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBQ0M3QUUxQ0VGMzcxMUU2QTA2MEY5ODIwOEQ4MDY4MCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBQ0M3QUUxREVGMzcxMUU2QTA2MEY5ODIwOEQ4MDY4MCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ps0i2mQAAADlSURBVHja7NkxDsIwDAVQp7JYYYWRWzBwE2Y4AndgZyjXQeotWDuzgpCC2DJB0nxXVvkZuvbV33KUNMQYxdPSz+MQvHDa2IizRRBBBP0dSH9OKvw7v85hRja5HoLsu6de5ksQCLGBF31h40pjDEo1r2dm+jaRHTtZb4Y1onqIyTKyOg0aVK3BRbZrZbuHTC91UhhcZFBNNSjVXC+QfUadFKauQmaaQSBLTTko1dw6i0uB7B46P0RndoUpBBnHVBjZiJoMUKq59yPcJJXMocUKc0zjuYznMkZGEEEETRoUvP2eegswAHXlO9F1kQsvAAAAAElFTkSuQmCC"},function(t,e,n){n(53);var r=n(1)(null,n(65),null,null);t.exports=r.exports},function(t,e,n){n(52);var r=n(1)(n(19),n(64),null,null);t.exports=r.exports},function(t,e,n){n(49);var r=n(1)(n(20),n(61),null,null);t.exports=r.exports},function(t,e,n){n(50);var r=n(1)(n(21),n(62),null,null);t.exports=r.exports},function(t,e,n){n(51);var r=n(1)(n(23),n(63),null,null);t.exports=r.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",[n("svg",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"spinner",class:{show:t.show},attrs:{width:"44px",height:"44px",viewBox:"0 0 44 44"}},[n("circle",{staticClass:"path",attrs:{fill:"none","stroke-width":"4","stroke-linecap":"round",cx:"22",cy:"22",r:"20"}})])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"news-item"},[n("span",{staticClass:"score"},[t._v(t._s(t.item.score))]),n("span",{staticClass:"title"},[t.item.url?[n("a",{attrs:{href:t.item.url,target:"_blank"}},[t._v(t._s(t.item.title))]),n("span",{staticClass:"host"},[t._v("("+t._s(t._f("host")(t.item.url))+")")])]:[n("router-link",{attrs:{to:"/item/"+t.item.id}},[t._v(t._s(t.item.title))])]],2),n("br"),n("span",{staticClass:"meta"},["job"!==t.item.type?n("span",{staticClass:"by"},[t._v("\n            by "),n("router-link",{attrs:{to:"/user/"+t.item.by}},[t._v(t._s(t.item.by))])],1):t._e(),n("span",{staticClass:"time"},[t._v("\n            "+t._s(t._f("timeAgo")(t.item.time))+" 前\n        ")]),n("span")]),"job"!==t.item.type?n("span",{staticClass:"comments-link"},[t._v("\n        | "),n("router-link",{attrs:{to:"/item/"+t.item.id}},[t._v(t._s(t.item.descendants))])],1):t._e(),"story"!==t.item.type?n("span",{staticClass:"label"},[t._v(t._s(t.item.type))]):t._e()])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"news-view"},[n("p",[t._v("123")]),n("spinner",{attrs:{show:t.loading}}),n("div",{staticClass:"news-list-nav"},[t.page>1?n("router-link",{attrs:{to:"/"+t.type+"/"+(t.page-1)}},[t._v("< prev")]):n("a",{staticClass:"disabled"},[t._v("< prev")]),n("span",[t._v(t._s(t.page)+"/"+t._s(t.maxPage))]),t.hasMore?n("router-link",{attrs:{to:"/"+t.type+"/"+(t.page+1)}},[t._v("more >")]):n("a",{staticClass:"disabled"},[t._v("more >")])],1),n("transition",{attrs:{name:t.transition}},[t.displayedPage>0?n("div",{key:t.displayedPage,staticClass:"news-list"},[n("transition-group",{attrs:{tag:"ul",name:"item"}},t._l(t.displayedItems,function(t){return n("item",{key:t.id,attrs:{item:t}})}))],1):t._e()])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.item?n("div",{staticClass:"item-view"},[t.item?[n("div",{staticClass:"item-view-header"},[n("a",{attrs:{href:t.item.url,target:"_blank"}},[n("h1",[t._v(t._s(t.item.title))])]),t.item.url?n("span",{staticClass:"host"},[t._v("\n                ("+t._s(t._f("host")(t.item.url))+")\n            ")]):t._e(),n("p",{staticClass:"meta"},[t._v("\n                "+t._s(t.item.score)+" points\n                | by "),n("router-link",{attrs:{to:"/user"+t.item.by}},[t._v(t._s(t.item.py))]),t._v("\n                "+t._s(t._f("timeAgo")(t.item.time))+" 之前\n            ")],1)]),n("div",{staticClass:"item-view-comments"},[n("p",{staticClass:"item-view-comments-header"},[t._v("\n                "+t._s(t.item.kids?t.item.descendants+" comments":"No comments yet.")+"\n                "),n("spinner",{attrs:{show:t.loading}})],1),t.loading?t._e():n("ul",{staticClass:"comment-children"},t._l(t.item.kids,function(t){return n("comment",{key:t,attrs:{id:t}})}))])]:t._e()],2):t._e()},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.comment?n("li",{staticClass:"comment"},[n("div",{staticClass:"by"},[n("router-link",{attrs:{to:"/user/"+t.comment.by}},[t._v(t._s(t.comment.by))])],1),n("div",{staticClass:"text",domProps:{innerHTML:t._s(t.comment.text)}}),t.comment.kids&&t.comment.kids.length?n("div",{staticClass:"toggle",class:{open:t.open}},[n("a",{attrs:{href:""},on:{click:function(e){t.open=!t.open}}},[t._v("\n            "+t._s(t.open?"[-]":"[+]"+t.pluralize(t.comment.kids.length)+" collapsed")+"\n        ")])]):t._e(),n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"comment-children"},t._l(t.comment.kids,function(t){return n("comment",{key:t,attrs:{id:t}})}))]):t._e()},staticRenderFns:[]}},function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("header",{staticClass:"header"},[r("nav",{staticClass:"inner"},[r("router-link",{attrs:{to:"/",exact:""}},[r("img",{staticClass:"logo",attrs:{src:n(54),alt:"zeromake"}})]),r("router-link",{attrs:{to:"/top"}},[t._v("Top")]),r("router-link",{attrs:{to:"/new"}},[t._v("New")]),r("router-link",{attrs:{to:"/show"}},[t._v("Show")]),r("router-link",{attrs:{to:"/ask"}},[t._v("Ask")]),r("router-link",{attrs:{to:"/job"}},[t._v("Jobs")]),r("a",{staticClass:"github",attrs:{href:"https://github.com/vuejs/vue-hackernews-2.0",target:"_blank"}},[t._v("\n              Built with Vue.js\n            ")])],1)]),r("transition",{attrs:{name:"fade",mode:"out-in"}},[r("router-view",{staticClass:"view"})],1)],1)},staticRenderFns:[]}}],[43]);