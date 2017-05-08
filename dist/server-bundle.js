module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var this$1 = this;

		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this$1[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		var this$1 = this;

		if(typeof modules === "string")
			{ modules = [[null, modules, ""]]; }
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this$1[i][0];
			if(typeof id === "number")
				{ alreadyImportedModules[id] = true; }
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = options.computed || (options.computed = {})
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var listToStyles = __webpack_require__(14)

module.exports = function (parentId, list, isProduction) {
  if (typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    var context = __VUE_SSR_CONTEXT__
    var styles = context._styles

    if (!styles) {
      styles = context._styles = {}
      Object.defineProperty(context, 'styles', {
        enumberable: true,
        get : function() {
          return (
            context._renderedStyles ||
            (context._renderedStyles = renderStyles(styles))
          )
        }
      })
    }

    list = listToStyles(parentId, list)
    if (isProduction) {
      addStyleProd(styles, list)
    } else {
      addStyleDev(styles, list)
    }
  }
}

// In production, render as few style tags as possible.
// (mostly because IE9 has a limit on number of style tags)
function addStyleProd (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      // group style tags by media types.
      var id = part.media || 'default'
      var style = styles[id]
      if (style) {
        style.ids.push(part.id)
        style.css += '\n' + part.css
      } else {
        styles[id] = {
          ids: [part.id],
          css: part.css,
          media: part.media
        }
      }
    }
  }
}

// In dev we use individual style tag for each module for hot-reload
// and source maps.
function addStyleDev (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      styles[part.id] = {
        ids: [part.id],
        css: part.css,
        media: part.media
      }
    }
  }
}

function renderStyles (styles) {
  var css = ''
  for (var key in styles) {
    var style = styles[key]
    css += '<style data-vue-ssr-id="' + style.ids.join(' ') + '"' +
        (style.media ? ( ' media="' + style.media + '"' ) : '') + '>' +
        style.css + '</style>'
  }
  return css
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_create_api__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony export (immutable) */ __webpack_exports__["b"] = fetchIdsByType;
/* unused harmony export fetchItem */
/* harmony export (immutable) */ __webpack_exports__["c"] = fetchItems;
/* harmony export (immutable) */ __webpack_exports__["d"] = fetchUser;
/* harmony export (immutable) */ __webpack_exports__["a"] = watchList;



if (__WEBPACK_IMPORTED_MODULE_0_create_api__["a" /* default */].onServer && !__WEBPACK_IMPORTED_MODULE_0_create_api__["a" /* default */].warmCacheStarted) {
    __WEBPACK_IMPORTED_MODULE_0_create_api__["a" /* default */].warmCacheStarted = true
    warmCache()
}

function warmCache() {
    fetchItems((__WEBPACK_IMPORTED_MODULE_0_create_api__["a" /* default */].cachedIds.top || []).slice(0, 30))
    setTimeout(warmCache, 1000 * 60 * 15)
}

function fetch(child) {
    var cache = __WEBPACK_IMPORTED_MODULE_0_create_api__["a" /* default */].cachedItems
    if (cache && cache.has(child)) {
        return Promise.resolve(cache.get(child))
    } else {
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get(__WEBPACK_IMPORTED_MODULE_0_create_api__["a" /* default */].url + child + '.json').then(function (res) {
                var val = res.data
                if (val)
                    { val.__lastUpdate = Date.now() }
                cache && cache.set(child, val)
                resolve(val)
            }).catch(reject)
        })
    }
}

function fetchIdsByType(type) {
    return __WEBPACK_IMPORTED_MODULE_0_create_api__["a" /* default */].cachedIds && __WEBPACK_IMPORTED_MODULE_0_create_api__["a" /* default */].cachedIds[type]
        ? Promise.resolve(__WEBPACK_IMPORTED_MODULE_0_create_api__["a" /* default */].cachedIds[type])
        : fetch((type + "stories"))
}
function fetchItem(id) {
    return fetch(("item/" + id))
}

function fetchItems(ids) {
    return Promise.all(ids.map(function (id) { return fetchItem(id); }))
}

function fetchUser(id) {
    return fetch(("user/" + id))
}

/**
* 监听数据变动(未使用firebase先使用定时刷新)
*/
function watchList(type, cb) {
    var first = true
    var isOn = true
    var timeoutId = null
    var handler = function (res) {
        cb(res.data)
    }
    function watchTimeout() {
        if (first) {
            first = false
        } else {
            __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get(("" + (__WEBPACK_IMPORTED_MODULE_0_create_api__["a" /* default */].url) + type + "stories.json")).then(handler)
        }
        if (isOn) {
            timeoutId = setTimeout(watchTimeout, 1000 * 60 * 15)
        }
    }
    watchTimeout()
    return function () {
        isOn = false
        if (timeoutId) {
            clearTimeout(timeoutId)
        }
    }
}


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["host"] = host;
/* harmony export (immutable) */ __webpack_exports__["timeAgo"] = timeAgo;
function host (url) {
    var host = url.replace(/^https?:\/\//, '').replace(/\/.*$/, '')
    var parts = host.split('.').slice(-3)
    if (parts[0] === 'www') { parts.shift() }
    return parts.join('.')
}

function timeAgo (time) {
    var between = Date.now() / 1000 - (+time)
    if (between < 3600) {
        return pluralize(~~(between / 60), '分钟')
    } else if (between < 86400) {
        return pluralize(~~(between / 3600), '小时')
    } else {
        return pluralize(~~(between / 86400), '天')
    }
}

function pluralize (time, label) {
    return time + label
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(38)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(12),
  /* template */
  __webpack_require__(32),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App_vue__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vuex_router_sync__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vuex_router_sync___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_vuex_router_sync__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__filters__ = __webpack_require__(6);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_4__router__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__store__["a"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return app; });







__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$axios = __WEBPACK_IMPORTED_MODULE_3_axios___default.a;
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_3_axios___default.a)
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_vuex_router_sync__["sync"])(__WEBPACK_IMPORTED_MODULE_2__store__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__router__["a" /* default */])

Object.keys(__WEBPACK_IMPORTED_MODULE_6__filters__).forEach(function (key) {
    __WEBPACK_IMPORTED_MODULE_0_vue___default.a.filter(key, __WEBPACK_IMPORTED_MODULE_6__filters__[key])
})

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(Object.assign({}, {router: __WEBPACK_IMPORTED_MODULE_4__router__["a" /* default */],
    store: __WEBPACK_IMPORTED_MODULE_2__store__["a" /* default */]},
    __WEBPACK_IMPORTED_MODULE_1__App_vue___default.a))



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'comment',
    props: ['id'],
    data: function data () {
        return {
            open: true
        }
    },
    computed: {
        comment: function comment () {
            return this.$store.state.items[this.id]
        }
    },
    methods: {
        pluralize: function (n) { return n + (n === 1 ? ' reply' : ' replies'); }
    }
});


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__filters__ = __webpack_require__(6);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'news-item',
    props: ['item'],
    serverCacheKey: function (ref) {
        var ref_item = ref.item;
        var id = ref_item.id;
        var __lastUpdated = ref_item.__lastUpdated;
        var time = ref_item.time;

        return (id + "::" + __lastUpdated + "::" + (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__filters__["timeAgo"])(time)))
    }
});


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Spinner_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Spinner_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Spinner_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Item_vue__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Item_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Item_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_api__ = __webpack_require__(3);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





var isInitialRender = true

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'item-list',
    components: {
        Spinner: __WEBPACK_IMPORTED_MODULE_0__Spinner_vue___default.a,
        Item: __WEBPACK_IMPORTED_MODULE_1__Item_vue___default.a
    },
    props: {
        type: String
    },
    data: function data () {
        var data = {
            loading: false,
            transition: 'slide-up',
            displayedPage: isInitialRender ? (+this.$store.state.route.params.page) || 1: -1,
            displayedItems: isInitialRender ? this.$store.getters.activeItems: [],
            demo: ''
        }
        isInitialRender = false
        return data
    },
    computed: {
        page: function page () {
            return +this.$store.state.route.params.page || 1
        },
        maxPage: function maxPage () {
            var ref = this.$store.state;
            var itemsPerPage = ref.itemsPerPage;
            var lists = ref.lists;
            return Math.ceil(lists[this.type].length / itemsPerPage)
        },
        hasMore: function hasMore () {
            return this.page < this.maxPage
        }
    },
    beforeMount: function beforeMount () {
        var this$1 = this;

        if (this.$root._isMounted) {
            this.loadItems(this.page)
        }
        this.unwatchList = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__store_api__["a" /* watchList */])(this.type, function (ids) {
            this$1.$store.commit('SET_LIST', { type: this$1.type, ids: ids })
            this$1.$store.dispatch('ENSURE_ACTIVE_ITEMS').then(function () {
                this$1.displayedItems = this$1.$store.getters.activeItems
            })
        })
    },
    beforeDestroy: function beforeDestroy () {
        this.unwatchList()
    },
    created: function created() {
        var this$1 = this;

        this.$axios.get('http://chenggua.com/api.php?r=topic/gettopiclist&userid=100044365&communityid=10007&pagenum=1&token=196890753d7cb1cfe3eb37b324ce428a').then(function (response) {
            // success
            this$1.demo = response.data.result
        },function (error) {
            // error
            console.log(error)
        });
    },
    watch: {
        page: function page (to, from) {
            this.loadItems(to, from)
        }
    },
    methods: {
        loadItems: function loadItems (to, from) {
            var this$1 = this;
            if ( to === void 0 ) to=this.page;
            if ( from === void 0 ) from=-1;

            this.loading = true
            this.$store.dispatch('FETCH_LIST_DATA', {
                type: this.type
            }).then(function () {
                if (this$1.page < 0 || this$1.page > this$1.maxPage) {
                    this$1.$router.replace(("/" + (this$1.type) + "/1"))
                    return
                }
                this$1.transition = from === -1 ? null : to > from ? 'slide-left' : 'slide-right'
                this$1.displayedPage = to
                this$1.displayedItems = this$1.$store.getters.activeItems
                this$1.loading = false
            })
        },
        test: function test() {
            this.loading = !this.loading
        }
    }
});


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'spinner',
    props: ['show'],
    serverCacheKey: function (props) { return props.show; }
});


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_Spinner_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_Spinner_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_components_Spinner_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_Comment_vue__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_Comment_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_components_Comment_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



function fetchItem (store) {
    return store.dispatch('FETCH_ITEMS', {
        ids: [store.state.route.params.id]
    })
}
function fechComments (store, item) {
    if (item.kids) {
        return store.dispatch('FETCH_ITEMS', {
            ids: item.kids
        }).then(function () { return Promise.all(item.kids.map(function (id) {
            return fetchComments(store, store.state.items[id])
        })); })
    }
}
function fetchItemAndComments (store) {
    return fetchItem(store).then(function (){
        var ref = store.state;
        var items = ref.items;
        var route = ref.route;
        return fetchComments(store, items[route.params.id])
    })
}

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'item-view',
    components: { Spinner: __WEBPACK_IMPORTED_MODULE_0_components_Spinner_vue___default.a, Comment: __WEBPACK_IMPORTED_MODULE_1_components_Comment_vue___default.a },
    data: function data () {
        return {
            loading: true
        }
    },
    computed: {
        item: function item () {
            return this.$store.state.items[this.$route.params.id]
        }
    },
    preFetch: fetchItem,
    beforeMount: function beforeMount () {
        var this$1 = this;

        fetchItemAndComments(this.$store).then(function () {
            this$1.loading = false
        })
    }
});


/***/ }),
/* 14 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_CreateListView__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_ItemView_vue__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_ItemView_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__views_ItemView_vue__);



__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_router___default.a)




/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router___default.a({
    mode: 'history',
    scrollBehavior: function () { return ({ y: 0 }); },
    routes: [
        { path: '/top/:page(\\d+)?', component: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__views_CreateListView__["a" /* createListView */])('top')},
        { path: '/new/:page(\\d+)?', component: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__views_CreateListView__["a" /* createListView */])('new') },
        { path: '/item/:id(\\d+)', component: __WEBPACK_IMPORTED_MODULE_3__views_ItemView_vue___default.a },
        { path: '/', redirect: '/top' }
    ]
}));


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app__ = __webpack_require__(8);


var isDev = "production" !== 'prodution'

/* harmony default export */ __webpack_exports__["default"] = (function (context) {
    var s = isDev && Date.now()
    __WEBPACK_IMPORTED_MODULE_0__app__["a" /* router */].push(context.url)
    var matchedComponents = __WEBPACK_IMPORTED_MODULE_0__app__["a" /* router */].getMatchedComponents()

    if (!matchedComponents.length) {
        return Promise.reject({code: '404'})
    }

    return Promise.all(matchedComponents.map(function (component) {
        if (component.preFetch) {
            return component.preFetch(__WEBPACK_IMPORTED_MODULE_0__app__["b" /* store */])
        }
    })).then(function () {
        isDev && console.log(("data pre-fetch: " + (Date.now() - s) + "ms"))
        context.initialState = __WEBPACK_IMPORTED_MODULE_0__app__["b" /* store */].state
        return __WEBPACK_IMPORTED_MODULE_0__app__["c" /* app */]
    })
});


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lru_cache__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lru_cache___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lru_cache__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);




var api
if (process.__API__) {
    api = process.__API__
} else {
    api = {
        url: 'https://hacker-news.firebaseio.com/v0/',
        onServer: true,
        cachedItems: __WEBPACK_IMPORTED_MODULE_0_lru_cache___default()({
            max: 1000,
            maxAge: 1000 * 60 * 15
        }),
        cachedIds: {}
    }
    var arr = ['top', 'new']
    arr.forEach(function (type) {
        __WEBPACK_IMPORTED_MODULE_2_axios___default.a.get(("" + (api.url) + type + "stories.json")).then(function (res) {
            api.cachedIds[type] = res.data
        })
    })
    process.__API__ = api
}

/* harmony default export */ __webpack_exports__["a"] = (api);


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vuex__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api__ = __webpack_require__(3);




__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuex___default.a)

var store = new __WEBPACK_IMPORTED_MODULE_1_vuex___default.a.Store({
    state: {
        activeType: null,
        itemsPerPage: 20,
        items: {},
        users: {},
        lists: {
            top: [],
            new: []
        }
    },
    actions: {
        FETCH_LIST_DATA: function (ref, ref$1) {
            var commit = ref.commit;
            var dispatch = ref.dispatch;
            var state = ref.state;
            var type = ref$1.type;

            commit('SET_ACTIVE_TYPE', { type: type })
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__api__["b" /* fetchIdsByType */])(type)
                .then(function (ids) { return commit('SET_LIST', { type: type, ids: ids }); })
                .then(function () { return dispatch('ENSURE_ACTIVE_ITEMS'); })
        },
        ENSURE_ACTIVE_ITEMS: function (ref) {
            var dispatch = ref.dispatch;
            var getters = ref.getters;

            return dispatch('FETCH_ITEMS', {
                ids: getters.activeIds
            })
        },
        FETCH_ITEMS: function (ref, ref$1) {
            var commit = ref.commit;
            var state = ref.state;
            var ids = ref$1.ids;

            var now = Date.now()
            ids = ids.filter(function (id) {
                var item = state.items[id]
                if (!item) {
                    return true
                }
                if (now - item.__lastUpdated > 1000 * 180) {
                    return true
                }
                return false
            })
            if (ids.length) {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__api__["c" /* fetchItems */])(ids).then(function (items) { return commit('SET_ITEMS', { items: items }); })
            } else {
                return Promise.resolve()
            }
        },
        FETCH_USER: function (ref, ref$1) {
            var commit = ref.commit;
            var state = ref.state;
            var id = ref$1.id;

            return state.users[id]
                ? Promise.resolve(state.users[id])
                : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__api__["d" /* fetchUser */])(id).then(function (user) { return commit('SET_USER', {user: user}); })
        }
    },
    mutations: {
        SET_ACTIVE_TYPE: function (state, ref) {
            var type = ref.type;

            state.activeType = type
        },
        SET_LIST: function (state, ref) {
            var type = ref.type;
            var ids = ref.ids;

            state.lists[type] = ids
        },
        SET_ITEMS: function (state, ref) {
            var items = ref.items;

            items.forEach(function (item) {
                if (item) {
                    __WEBPACK_IMPORTED_MODULE_0_vue___default.a.set(state.items, item.id, item)
                }
            })
        },
        SET_USER: function (state, ref) {
            var user = ref.user;

            __WEBPACK_IMPORTED_MODULE_0_vue___default.a.set(state.users, user.id, user)
        }
    },
    getters: {
        activeIds: function activeIds (state) {
            var activeType = state.activeType;
            var itemsPerPage = state.itemsPerPage;
            var lists = state.lists;
            var page = +state.route.params.page || 1
            if (activeType) {
                var start = (page - 1) * itemsPerPage
                var end = page * itemsPerPage
                return lists[activeType].slice(start, end)
            } else {
                return []
            }
        },
        activeItems: function activeItems (state, getters) {
            return getters.activeIds.map(function (id) { return state.items[id]; }).filter(function (_) { return _; })
        }
    }
})

/* harmony default export */ __webpack_exports__["a"] = (store);


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_ItemList_vue__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_ItemList_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_components_ItemList_vue__);
/* harmony export (immutable) */ __webpack_exports__["a"] = createListView;


function createListView (type) {
    return {
        name: (type + "-stories-view"),
        preFetch: function preFetch (store) {
            return store.dispatch('FETCH_LIST_DATA', { type: type })
        },
        render: function render (h) {
            return h(__WEBPACK_IMPORTED_MODULE_0_components_ItemList_vue___default.a, { props: { type: type } })
        }
    }
}


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, ".spinner{position:fixed;z-index:999;right:15px;bottom:15px;transition:opacity .15s ease;animation:rotator 1.4s linear infinite}.spinner.show{animation-play-state:running}.spinner.v-enter,.spinner.v-leave-active{opacity:0}.spinner.v-enter-active,.spinner.v-leave{opacity:1}.spinner .path{stroke:#f60;stroke-dasharray:126;stroke-dashoffset:0;-ms-transform-origin:center;transform-origin:center;animation:dash 1.4s ease-in-out infinite}@keyframes rotator{0%{transform:scale(.5) rotate(0deg)}to{transform:scale(.5) rotate(270deg)}}@keyframes dash{0%{stroke-dashoffset:126}50%{stroke-dashoffset:63;transform:rotate(135deg)}to{stroke-dashoffset:126;transform:rotate(450deg)}}", ""]);

// exports


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, ".news-item{background-color:#fff;padding:20px 30px 20px 80px;border-bottom:1px solid #eee;position:relative;line-height:20px}.news-item .score{color:#f60;font-size:1.1em;font-weight:700;position:absolute;top:50%;left:0;width:80px;text-align:center;margin-top:-10px}.news-item .host,.news-item .meta{font-size:.85em;color:#999}.news-item .host a,.news-item .meta a{color:#999;text-decoration:underline}.news-item .host a:hover,.news-item .meta a:hover{color:#f60}", ""]);

// exports


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, ".news-view{padding-top:45px}.news-list,.news-list-nav{background-color:#fff;border-radius:2px}.news-list-nav{padding:15px 30px;position:fixed;text-align:center;top:55px;left:0;right:0;z-index:998;box-shadow:0 1px 2px rgba(0,0,0,.1)}.news-list-nav a{margin:0 1em}.news-list-nav .disabled{color:#ccc}.news-list{position:absolute;margin:30px 0;width:100%;transition:all .5s cubic-bezier(.55,0,.1,1)}.news-list ul{list-style-type:none;padding:0;margin:0}.slide-left-enter,.slide-right-leave-active{opacity:0;-ms-transform:translate(30px);transform:translate(30px)}.slide-left-leave-active,.slide-right-enter{opacity:0;-ms-transform:translate(-30px);transform:translate(-30px)}.item-enter-active,.item-leave-active,.item-move{transition:all .5s cubic-bezier(.55,0,.1,1)}.item-enter,.item-leave-active{opacity:0;-ms-transform:translate(30px);transform:translate(30px)}.item-leave-active{position:absolute}@media (max-width:600px){.news-list{margin:10px 0}}", ""]);

// exports


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, ".item-view-header{background-color:#fff;padding:1.8em 2em 1em;box-shadow:0 1px 2px rgba(0,0,0,.1)}.item-view-header h1{display:inline;font-size:1.5em;margin:0;margin-right:.5em}.item-view-header .host,.item-view-header .meta,.item-view-header .meta a{color:#999}.item-view-header .meta a{text-decoration:underline}.item-view-comments{background-color:#fff;margin-top:10px;padding:0 2em .5em}.item-view-comments-header{margin:0;font-size:1.1em;padding:1em 0;position:relative}.item-view-comments-header .spinner{position:absolute;top:0;right:0;bottom:auto}.comment-children{list-style-type:none;padding:0;margin:0}@media (max-width:600px){.item-view-header h1{font-size:1.25em}}", ""]);

// exports


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, ".comment-children .comment-children{margin-left:1.5em}.comment{border-top:1px solid #eee;position:relative}.comment .by,.comment .text,.comment .toggle{font-size:.9em;margin:1em 0}.comment .by{color:#999}.comment .by a{color:#999;text-decoration:underline}.comment .text{overflow-wrap:break-word}.comment .text a:hover{color:#f60}.comment .text pre{white-space:pre-wrap}.comment .toggle{background-color:#fffbf2;padding:.3em .5em;border-radius:4px}.comment .toggle a{color:#999;cursor:pointer}.comment .toggle.open{padding:0;background-color:transparent;margin-bottom:-.5em}", ""]);

// exports


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "body{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;font-size:15px;background-color:#f2f3f5;margin:0;padding-top:55px;overflow-y:scroll}a,body{color:#34495e}a{text-decoration:none}.header{background-color:#f60;position:fixed;z-index:999;height:55px;top:0;left:0;right:0}.header .inner{max-width:800px;box-sizing:border-box;margin:0 auto;padding:15px 5px}.header a{color:hsla(0,0%,100%,.8);line-height:24px;transition:color .15s ease;display:liline-block;vertical-align:middle;font-weight:300;letter-spacing:.075em;margin-right:1.8em}.header a:hover{color:#fff}.header a.router-link-active{color:#fff;font-weight:400}.header a:nth-child(6){margin-right:0}.header .github{color:#fff;font-size:.9em;margin:0;float:right}.logo{width:24px;margin-right:10px;display:inline-block;vertical-align:middle}.view{max-width:800px;margin:0 auto;position:relative}.fade-enter-active,.fade-leave-active{transition:all .2s ease}.fade-enter,.fade-leave-active{opacity:0}@media (max-width:860px){.header .inner{padding:15px 30px}}@media (max-width:600px){body{font-size:14px}.header .inner{padding:15px}.header a{margin-right:1em}.header .github{display:none}}", ""]);

// exports


/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAIAAADYYG7QAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUNDN0FFMUVFRjM3MTFFNkEwNjBGOTgyMDhEODA2ODAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUNDN0FFMUZFRjM3MTFFNkEwNjBGOTgyMDhEODA2ODAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBQ0M3QUUxQ0VGMzcxMUU2QTA2MEY5ODIwOEQ4MDY4MCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBQ0M3QUUxREVGMzcxMUU2QTA2MEY5ODIwOEQ4MDY4MCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ps0i2mQAAADlSURBVHja7NkxDsIwDAVQp7JYYYWRWzBwE2Y4AndgZyjXQeotWDuzgpCC2DJB0nxXVvkZuvbV33KUNMQYxdPSz+MQvHDa2IizRRBBBP0dSH9OKvw7v85hRja5HoLsu6de5ksQCLGBF31h40pjDEo1r2dm+jaRHTtZb4Y1onqIyTKyOg0aVK3BRbZrZbuHTC91UhhcZFBNNSjVXC+QfUadFKauQmaaQSBLTTko1dw6i0uB7B46P0RndoUpBBnHVBjZiJoMUKq59yPcJJXMocUKc0zjuYznMkZGEEEETRoUvP2eegswAHXlO9F1kQsvAAAAAElFTkSuQmCC"

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(43)

var Component = __webpack_require__(1)(
  /* script */
  null,
  /* template */
  __webpack_require__(37),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(42)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(9),
  /* template */
  __webpack_require__(36),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(39)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(10),
  /* template */
  __webpack_require__(33),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(40)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(11),
  /* template */
  __webpack_require__(34),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(41)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(13),
  /* template */
  __webpack_require__(35),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', [_c('svg', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.show),
      expression: "show"
    }],
    staticClass: "spinner",
    class: {
      show: _vm.show
    },
    attrs: {
      "width": "44px",
      "height": "44px",
      "viewBox": "0 0 44 44"
    }
  }, [_c('circle', {
    staticClass: "path",
    attrs: {
      "fill": "none",
      "stroke-width": "4",
      "stroke-linecap": "round",
      "cx": "22",
      "cy": "22",
      "r": "20"
    }
  })])])
},staticRenderFns: []}

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', {
    staticClass: "news-item"
  }, [_c('span', {
    staticClass: "score"
  }, [_vm._v(_vm._s(_vm.item.score))]), _c('span', {
    staticClass: "title"
  }, [(_vm.item.url) ? [_c('a', {
    attrs: {
      "href": _vm.item.url,
      "target": "_blank"
    }
  }, [_vm._v(_vm._s(_vm.item.title))]), _c('span', {
    staticClass: "host"
  }, [_vm._v("(" + _vm._s(_vm._f("host")(_vm.item.url)) + ")")])] : [_c('router-link', {
    attrs: {
      "to": '/item/' + _vm.item.id
    }
  }, [_vm._v(_vm._s(_vm.item.title))])]], 2), _c('br'), _c('span', {
    staticClass: "meta"
  }, [(_vm.item.type !== 'job') ? _c('span', {
    staticClass: "by"
  }, [_vm._v("\n            by "), _c('router-link', {
    attrs: {
      "to": '/user/' + _vm.item.by
    }
  }, [_vm._v(_vm._s(_vm.item.by))])], 1) : _vm._e(), _c('span', {
    staticClass: "time"
  }, [_vm._v("\n            " + _vm._s(_vm._f("timeAgo")(_vm.item.time)) + " 前\n        ")]), _c('span')]), (_vm.item.type !== 'job') ? _c('span', {
    staticClass: "comments-link"
  }, [_vm._v("\n        | "), _c('router-link', {
    attrs: {
      "to": '/item/' + _vm.item.id
    }
  }, [_vm._v(_vm._s(_vm.item.descendants))])], 1) : _vm._e(), (_vm.item.type !== 'story') ? _c('span', {
    staticClass: "label"
  }, [_vm._v(_vm._s(_vm.item.type))]) : _vm._e()])
},staticRenderFns: []}

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "news-view"
  }, [_c('p', [_vm._v("123")]), _c('spinner', {
    attrs: {
      "show": _vm.loading
    }
  }), _c('div', {
    staticClass: "news-list-nav"
  }, [(_vm.page > 1) ? _c('router-link', {
    attrs: {
      "to": '/' + _vm.type + '/' + (_vm.page - 1)
    }
  }, [_vm._v("< prev")]) : _c('a', {
    staticClass: "disabled"
  }, [_vm._v("< prev")]), _c('span', [_vm._v(_vm._s(_vm.page) + "/" + _vm._s(_vm.maxPage))]), (_vm.hasMore) ? _c('router-link', {
    attrs: {
      "to": '/' + _vm.type + '/' + (_vm.page + 1)
    }
  }, [_vm._v("more >")]) : _c('a', {
    staticClass: "disabled"
  }, [_vm._v("more >")])], 1), _c('transition', {
    attrs: {
      "name": _vm.transition
    }
  }, [(_vm.displayedPage > 0) ? _c('div', {
    key: _vm.displayedPage,
    staticClass: "news-list"
  }, [_c('transition-group', {
    attrs: {
      "tag": "ul",
      "name": "item"
    }
  }, _vm._l((_vm.displayedItems), function(item) {
    return _c('item', {
      key: item.id,
      attrs: {
        "item": item
      }
    })
  }))], 1) : _vm._e()])], 1)
},staticRenderFns: []}

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.item) ? _c('div', {
    staticClass: "item-view"
  }, [(_vm.item) ? [_c('div', {
    staticClass: "item-view-header"
  }, [_c('a', {
    attrs: {
      "href": _vm.item.url,
      "target": "_blank"
    }
  }, [_c('h1', [_vm._v(_vm._s(_vm.item.title))])]), (_vm.item.url) ? _c('span', {
    staticClass: "host"
  }, [_vm._v("\n                (" + _vm._s(_vm._f("host")(_vm.item.url)) + ")\n            ")]) : _vm._e(), _c('p', {
    staticClass: "meta"
  }, [_vm._v("\n                " + _vm._s(_vm.item.score) + " points\n                | by "), _c('router-link', {
    attrs: {
      "to": '/user' + _vm.item.by
    }
  }, [_vm._v(_vm._s(_vm.item.py))]), _vm._v("\n                " + _vm._s(_vm._f("timeAgo")(_vm.item.time)) + " 之前\n            ")], 1)]), _c('div', {
    staticClass: "item-view-comments"
  }, [_c('p', {
    staticClass: "item-view-comments-header"
  }, [_vm._v("\n                " + _vm._s(_vm.item.kids ? _vm.item.descendants + ' comments' : 'No comments yet.') + "\n                "), _c('spinner', {
    attrs: {
      "show": _vm.loading
    }
  })], 1), (!_vm.loading) ? _c('ul', {
    staticClass: "comment-children"
  }, _vm._l((_vm.item.kids), function(id) {
    return _c('comment', {
      key: id,
      attrs: {
        "id": id
      }
    })
  })) : _vm._e()])] : _vm._e()], 2) : _vm._e()
},staticRenderFns: []}

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.comment) ? _c('li', {
    staticClass: "comment"
  }, [_c('div', {
    staticClass: "by"
  }, [_c('router-link', {
    attrs: {
      "to": '/user/' + _vm.comment.by
    }
  }, [_vm._v(_vm._s(_vm.comment.by))])], 1), _c('div', {
    staticClass: "text",
    domProps: {
      "innerHTML": _vm._s(_vm.comment.text)
    }
  }), (_vm.comment.kids && _vm.comment.kids.length) ? _c('div', {
    staticClass: "toggle",
    class: {
      open: _vm.open
    }
  }, [_c('a', {
    attrs: {
      "href": ""
    },
    on: {
      "click": function($event) {
        _vm.open = !_vm.open
      }
    }
  }, [_vm._v("\n            " + _vm._s(_vm.open ? '[-]' : '[+]' + _vm.pluralize(_vm.comment.kids.length) + ' collapsed') + "\n        ")])]) : _vm._e(), _c('ul', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.open),
      expression: "open"
    }],
    staticClass: "comment-children"
  }, _vm._l((_vm.comment.kids), function(id) {
    return _c('comment', {
      key: id,
      attrs: {
        "id": id
      }
    })
  }))]) : _vm._e()
},staticRenderFns: []}

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('header', {
    staticClass: "header"
  }, [_c('nav', {
    staticClass: "inner"
  }, [_c('router-link', {
    attrs: {
      "to": "/",
      "exact": ""
    }
  }, [_c('img', {
    staticClass: "logo",
    attrs: {
      "src": __webpack_require__(26),
      "alt": "zeromake"
    }
  })]), _c('router-link', {
    attrs: {
      "to": "/top"
    }
  }, [_vm._v("Top")]), _c('router-link', {
    attrs: {
      "to": "/new"
    }
  }, [_vm._v("New")]), _c('router-link', {
    attrs: {
      "to": "/show"
    }
  }, [_vm._v("Show")]), _c('router-link', {
    attrs: {
      "to": "/ask"
    }
  }, [_vm._v("Ask")]), _c('router-link', {
    attrs: {
      "to": "/job"
    }
  }, [_vm._v("Jobs")]), _c('a', {
    staticClass: "github",
    attrs: {
      "href": "https://github.com/vuejs/vue-hackernews-2.0",
      "target": "_blank"
    }
  }, [_vm._v("\n              Built with Vue.js\n            ")])], 1)]), _c('transition', {
    attrs: {
      "name": "fade",
      "mode": "out-in"
    }
  }, [_c('router-view', {
    staticClass: "view"
  })], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(20);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
__webpack_require__(2)("e7b9f206", content, true);

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(21);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
__webpack_require__(2)("1aa2f809", content, true);

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(22);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
__webpack_require__(2)("52e03637", content, true);

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(23);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
__webpack_require__(2)("9257d232", content, true);

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(24);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
__webpack_require__(2)("a49caed2", content, true);

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(25);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
__webpack_require__(2)("0380bcd6", content, true);

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("lru-cache");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("vuex");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("vuex-router-sync");

/***/ })
/******/ ]);