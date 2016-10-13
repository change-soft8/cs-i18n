(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"));
	else if(typeof define === 'function' && define.amd)
		define(["React"], factory);
	else if(typeof exports === 'object')
		exports["CsI18n"] = factory(require("React"));
	else
		root["CsI18n"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_22__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _intlProvider = __webpack_require__(1);

	var _intlProvider2 = _interopRequireDefault(_intlProvider);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Intern = function () {
	    function Intern(language, translate) {
	        _classCallCheck(this, Intern);

	        this.intlProvider = new _intlProvider2.default(language, translate);
	    }

	    /**
	     * 根据id查找翻译文件中对应的值
	     * @param  {[string]}   id    [翻译文件的key]
	     * @param  {[object]}   param [翻译文件key对应的value里动态参数]
	     * @return {[type]}         [description]
	     */


	    _createClass(Intern, [{
	        key: 'message',
	        value: function message(id, param) {
	            return this.intl.formatMessage({ id: id }, param);
	        }

	        /**
	         * 格式化数字
	         * @param  {[number]}   num [description]
	         * @return {[type]}       [description]
	         */

	    }, {
	        key: 'numberIntl',
	        value: function numberIntl(num) {
	            var format = this.format;
	            return this.intl.formatNumber(num, { format: format });
	        }

	        /**
	         * 格式化日期
	         * @param  {[type]}   date [description]
	         * @return {[type]}        [description]
	         */

	    }, {
	        key: 'dateIntl',
	        value: function dateIntl(date) {
	            return this.intl.formatDate(date, this.foramt);
	        }

	        /**
	         * 格式化时间
	         * @param  {[type]}   time [description]
	         * @return {[type]}        [description]
	         */

	    }, {
	        key: 'timeIntl',
	        value: function timeIntl(time) {
	            return this.intl.formatTime(time, this.format);
	        }

	        /**
	         * 与传入时间比较，返回多久之前
	         * @param  {[type]}   time [description]
	         * @return {[type]}        [description]
	         */

	    }, {
	        key: 'timeRelative',
	        value: function timeRelative(time) {
	            return this.intl.formatRelative(time, this.format);
	        }

	        /**
	         * 切换语言环境
	         * @param  {[type]}   param [传入语言]
	         * @return {[type]}         [description]
	         */

	    }, {
	        key: 'changeLang',
	        value: function () {
	            var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(param, translate) {
	                var map, key, intlProvider, _this, _key, val, func, p;

	                return regeneratorRuntime.wrap(function _callee$(_context) {
	                    while (1) {
	                        switch (_context.prev = _context.next) {
	                            case 0:
	                                map = {
	                                    //格式化数字之百分比
	                                    percent: [this.numberIntl, 'percent'],
	                                    //格式化数字之货币
	                                    currency: [this.numberIntl, 'currency'],
	                                    //格式化数字之小数点保留位数
	                                    decimal: [this.numberIntl, 'decimal'],

	                                    //格式化日期，如：16/8/12
	                                    short: [this.dateIntl, 'short'],
	                                    //格式化日期，如：2016/8/12
	                                    medium: [this.dateIntl, 'medium'],
	                                    //格式化日期，如：2016年8月12日
	                                    long: [this.dateIntl, 'long'],
	                                    //格式化日期，如：2016年8月12日星期五
	                                    full: [this.dateIntl, 'full'],

	                                    //格式化日期，几个月前
	                                    month: [this.timeRelative, 'month'],
	                                    //格式化日期，几天前
	                                    day: [this.timeRelative, 'day'],
	                                    //格式化日期，几个小时前
	                                    hour: [this.timeRelative, 'hour'],
	                                    //格式化日期，几分钟前
	                                    minute: [this.timeRelative, 'minute'],
	                                    //格式化日期，几秒前
	                                    seconds: [this.timeRelative, 'seconds'],

	                                    //格式化时间，如：14:31
	                                    shortime: [this.timeIntl, 'short'],
	                                    //格式化时间，如：14:31:34
	                                    mediumtime: [this.timeIntl, 'medium'],
	                                    //格式化时间，如：下午2:31:34
	                                    longtime: [this.timeIntl, 'long']
	                                };

	                                //全局i18n对象

	                                window.i18n = {};
	                                //资源加载前初始化i18n里所有方法
	                                for (key in map) {
	                                    window.i18n[key] = function () {};
	                                }
	                                window.i18n.message = function () {};
	                                //等待获取当前语言环境下的IntlProvider实例，成功获取继续执行下面代码
	                                _context.next = 6;
	                                return this.intlProvider.changeLang(param, translate);

	                            case 6:
	                                intlProvider = _context.sent;

	                                //获取实例intlProvider里面的配置内容
	                                this.intl = intlProvider.getChildContext().intl;
	                                //将lang语言放入i18n对象
	                                window.i18n.lang = this.intlProvider.getLang();
	                                //将message方法放入i18n对象
	                                window.i18n.message = this.message.bind(this);
	                                _this = this;
	                                //遍历map

	                                for (_key in map) {
	                                    //获取map里的value
	                                    val = map[_key];
	                                    //获取value数组里函数

	                                    func = val[0];
	                                    //获取value数组里参数

	                                    p = val[1];
	                                    //遍历出的值放入i18n对象中（bind里的参数对应func的return里需要的参数）

	                                    window.i18n[_key] = func.bind({ intl: _this.intl, format: p });
	                                }

	                            case 12:
	                            case 'end':
	                                return _context.stop();
	                        }
	                    }
	                }, _callee, this);
	            }));

	            function changeLang(_x, _x2) {
	                return _ref.apply(this, arguments);
	            }

	            return changeLang;
	        }()
	    }]);

	    return Intern;
	}();

	exports.default = Intern;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactIntl = __webpack_require__(2);

	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var IntlFactory = function () {
	    function IntlFactory(language, translate) {
	        _classCallCheck(this, IntlFactory);

	        this.languages = {};
	        if (language) {
	            // 将语言及其翻译缓存
	            this.languages[language] = translate;

	            //添加格式化数字、钱币等需要的配置文件
	            (0, _reactIntl.addLocaleData)(__webpack_require__(27)("./" + language));
	        }

	        //获取localStorage里语言
	        this.lang = window.localStorage.getItem('i18n_lang');
	        //判断获取的lang值是否为空，为空则设置默认值'zh'
	        if (this.lang == null && language) {
	            this.lang = language;
	            window.localStorage.setItem('i18n_lang', this.lang);
	            window.localStorage.setItem('i18n_trans', JSON.stringify(translate));
	        }
	    }

	    /**
	     * 在localStorage存储语言环境,并返回相应的翻译文件
	     * @param  {[type]}   param [语言]
	     * @return {[type]}         [翻译文件]
	     */


	    _createClass(IntlFactory, [{
	        key: 'judgeLang',
	        value: function judgeLang(param, translate) {
	            //根据传入的param覆盖lang语言
	            this.lang = param;
	            if (window.localStorage) {
	                window.localStorage.setItem('i18n_lang', param);
	                window.localStorage.setItem('i18n_trans', JSON.stringify(translate));
	            }
	            if (Object.keys(this.languages).includes(param)) {
	                return this.languages[param];
	            } else if (!Object.keys(this.languages).includes(param)) {
	                var temp = {};
	                temp[param] = translate;
	                Object.assign(this.languages, temp);
	                (0, _reactIntl.addLocaleData)(__webpack_require__(27)("./" + param));
	                return translate;
	            }

	            // return this.languages[param];
	        }

	        /**
	         * 获取语言
	         * @return {[type]}   [description]
	         */

	    }, {
	        key: 'getLang',
	        value: function getLang() {
	            return this.lang;
	        }

	        /**
	         * 切换语言环境，返回对应语言环境IntlProvider实例
	         * @param  {[type]}   param [语言]
	         * @return {[type]}         [description]
	         */

	    }, {
	        key: 'changeLang',
	        value: function () {
	            var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(param, translate) {
	                var _this;

	                return regeneratorRuntime.wrap(function _callee$(_context) {
	                    while (1) {
	                        switch (_context.prev = _context.next) {
	                            case 0:
	                                if (!param) {
	                                    // param = window.localStorage.getItem('language') || 'zh';
	                                    param = window.localStorage.getItem('i18n_lang');
	                                    translate = JSON.parse(window.localStorage.getItem('i18n_trans'));
	                                }
	                                //等待翻译文件加载完成
	                                _context.next = 3;
	                                return this.judgeLang(param, translate);

	                            case 3:
	                                this.langMsg = _context.sent;
	                                _this = this;
	                                //IntlProvider配置内容，格式化数字、货币、日期等，翻译文件

	                                return _context.abrupt('return', new _reactIntl.IntlProvider({
	                                    locale: param,
	                                    formats: {
	                                        number: {
	                                            //%格式
	                                            'percent': {
	                                                style: 'percent',
	                                                // 0.505->50.50%
	                                                // minimumFractionDigits: 2
	                                                // 0.505->50.5%
	                                                // maximumFractionDigits: 2
	                                                // 0.505->50.5%
	                                                // minimumSignificantDigits: 2
	                                                // 0.5046->50%,0.505->51%
	                                                // maximumSignificantDigits: 2
	                                                // 0.5046->50%,0.505->51%
	                                                minimumIntegerDigits: 2
	                                            },
	                                            'currency': {
	                                                style: 'currency',
	                                                //钱币格式，人民币CNY,日元JPY,美元USD......
	                                                currency: function () {
	                                                    return _this.lang === 'en' ? 'USD' : 'CNY';
	                                                }()
	                                            },
	                                            'decimal': {
	                                                style: 'decimal',
	                                                minimumIntegerDigits: 2
	                                            }
	                                        },
	                                        date: {
	                                            // new Date();->8/7/16
	                                            'short': {
	                                                month: 'numeric',
	                                                day: 'numeric',
	                                                year: '2-digit'
	                                            },
	                                            // new Date();->2016
	                                            'year-only': { year: 'numeric' },
	                                            // new Date();->Aug 7, 2016
	                                            'medium': {
	                                                month: 'numeric',
	                                                // month: 'narrow',//A 10,2016
	                                                day: 'numeric',
	                                                year: 'numeric'
	                                            },
	                                            // new Date();->August 7, 2016
	                                            'long': {
	                                                month: 'long',
	                                                day: 'numeric',
	                                                year: 'numeric'
	                                            },
	                                            // new Date();->Tuesday, August 9, 2016
	                                            'full': {
	                                                // era:'short',//公元2016年8月10日星期三
	                                                weekday: 'long',
	                                                month: 'long',
	                                                day: 'numeric',
	                                                year: 'numeric'
	                                            },
	                                            missing: undefined
	                                        },
	                                        time: {
	                                            'hour-only': {
	                                                // new Date();->11 AM
	                                                hour: '2-digit',
	                                                hour12: false
	                                            },
	                                            // new Date();->11:32 AM
	                                            'short': {
	                                                hour: 'numeric',
	                                                minute: 'numeric',
	                                                hour12: false
	                                            },

	                                            'medium': {
	                                                hour: 'numeric',
	                                                minute: 'numeric',
	                                                second: 'numeric',
	                                                hour12: false
	                                            },

	                                            'long': {
	                                                hour: 'numeric',
	                                                minute: 'numeric',
	                                                second: 'numeric'
	                                            },

	                                            'full': {
	                                                hour: 'numeric',
	                                                minute: 'numeric',
	                                                second: 'numeric',
	                                                timeZoneName: 'short'
	                                            }
	                                        },
	                                        relative: {
	                                            'seconds': {
	                                                units: 'second'
	                                            },
	                                            'minute': {
	                                                units: 'minute'
	                                            },
	                                            'hour': {
	                                                units: 'hour'
	                                            },
	                                            'day': {
	                                                units: 'day'
	                                            },
	                                            'year': {
	                                                units: 'year'
	                                            }
	                                        }
	                                    },
	                                    messages: this.langMsg
	                                }, {}));

	                            case 6:
	                            case 'end':
	                                return _context.stop();
	                        }
	                    }
	                }, _callee, this);
	            }));

	            function changeLang(_x, _x2) {
	                return _ref.apply(this, arguments);
	            }

	            return changeLang;
	        }()
	    }]);

	    return IntlFactory;
	}();

	exports.default = IntlFactory;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/*
	 * Copyright 2016, Yahoo Inc.
	 * Copyrights licensed under the New BSD License.
	 * See the accompanying LICENSE file for terms.
	 */

	'use strict';

	Object.defineProperty(exports, '__esModule', { value: true });

	function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

	var allLocaleData = _interopDefault(__webpack_require__(4));
	var IntlMessageFormat = _interopDefault(__webpack_require__(5));
	var IntlRelativeFormat = _interopDefault(__webpack_require__(15));
	var React = __webpack_require__(22);
	var React__default = _interopDefault(React);
	var invariant = _interopDefault(__webpack_require__(23));
	var memoizeIntlConstructor = _interopDefault(__webpack_require__(24));

	// GENERATED FILE
	var defaultLocaleData = { "locale": "en", "pluralRuleFunction": function pluralRuleFunction(n, ord) {
	    var s = String(n).split("."),
	        v0 = !s[1],
	        t0 = Number(s[0]) == n,
	        n10 = t0 && s[0].slice(-1),
	        n100 = t0 && s[0].slice(-2);if (ord) return n10 == 1 && n100 != 11 ? "one" : n10 == 2 && n100 != 12 ? "two" : n10 == 3 && n100 != 13 ? "few" : "other";return n == 1 && v0 ? "one" : "other";
	  }, "fields": { "year": { "displayName": "year", "relative": { "0": "this year", "1": "next year", "-1": "last year" }, "relativeTime": { "future": { "one": "in {0} year", "other": "in {0} years" }, "past": { "one": "{0} year ago", "other": "{0} years ago" } } }, "month": { "displayName": "month", "relative": { "0": "this month", "1": "next month", "-1": "last month" }, "relativeTime": { "future": { "one": "in {0} month", "other": "in {0} months" }, "past": { "one": "{0} month ago", "other": "{0} months ago" } } }, "day": { "displayName": "day", "relative": { "0": "today", "1": "tomorrow", "-1": "yesterday" }, "relativeTime": { "future": { "one": "in {0} day", "other": "in {0} days" }, "past": { "one": "{0} day ago", "other": "{0} days ago" } } }, "hour": { "displayName": "hour", "relativeTime": { "future": { "one": "in {0} hour", "other": "in {0} hours" }, "past": { "one": "{0} hour ago", "other": "{0} hours ago" } } }, "minute": { "displayName": "minute", "relativeTime": { "future": { "one": "in {0} minute", "other": "in {0} minutes" }, "past": { "one": "{0} minute ago", "other": "{0} minutes ago" } } }, "second": { "displayName": "second", "relative": { "0": "now" }, "relativeTime": { "future": { "one": "in {0} second", "other": "in {0} seconds" }, "past": { "one": "{0} second ago", "other": "{0} seconds ago" } } } } };

	/*
	 * Copyright 2015, Yahoo Inc.
	 * Copyrights licensed under the New BSD License.
	 * See the accompanying LICENSE file for terms.
	 */

	function addLocaleData() {
	    var data = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

	    var locales = Array.isArray(data) ? data : [data];

	    locales.forEach(function (localeData) {
	        if (localeData && localeData.locale) {
	            IntlMessageFormat.__addLocaleData(localeData);
	            IntlRelativeFormat.__addLocaleData(localeData);
	        }
	    });
	}

	function hasLocaleData(locale) {
	    var localeParts = (locale || '').split('-');

	    while (localeParts.length > 0) {
	        if (hasIMFAndIRFLocaleData(localeParts.join('-'))) {
	            return true;
	        }

	        localeParts.pop();
	    }

	    return false;
	}

	function hasIMFAndIRFLocaleData(locale) {
	    var normalizedLocale = locale && locale.toLowerCase();

	    return !!(IntlMessageFormat.__localeData__[normalizedLocale] && IntlRelativeFormat.__localeData__[normalizedLocale]);
	}

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
	  return typeof obj;
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
	};

	var jsx = function () {
	  var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7;
	  return function createRawReactElement(type, props, key, children) {
	    var defaultProps = type && type.defaultProps;
	    var childrenLength = arguments.length - 3;

	    if (!props && childrenLength !== 0) {
	      props = {};
	    }

	    if (props && defaultProps) {
	      for (var propName in defaultProps) {
	        if (props[propName] === void 0) {
	          props[propName] = defaultProps[propName];
	        }
	      }
	    } else if (!props) {
	      props = defaultProps || {};
	    }

	    if (childrenLength === 1) {
	      props.children = children;
	    } else if (childrenLength > 1) {
	      var childArray = Array(childrenLength);

	      for (var i = 0; i < childrenLength; i++) {
	        childArray[i] = arguments[i + 3];
	      }

	      props.children = childArray;
	    }

	    return {
	      $$typeof: REACT_ELEMENT_TYPE,
	      type: type,
	      key: key === undefined ? null : '' + key,
	      ref: null,
	      props: props,
	      _owner: null
	    };
	  };
	}();

	var asyncToGenerator = function (fn) {
	  return function () {
	    var gen = fn.apply(this, arguments);
	    return new Promise(function (resolve, reject) {
	      function step(key, arg) {
	        try {
	          var info = gen[key](arg);
	          var value = info.value;
	        } catch (error) {
	          reject(error);
	          return;
	        }

	        if (info.done) {
	          resolve(value);
	        } else {
	          return Promise.resolve(value).then(function (value) {
	            return step("next", value);
	          }, function (err) {
	            return step("throw", err);
	          });
	        }
	      }

	      return step("next");
	    });
	  };
	};

	var classCallCheck = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

	var createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

	var defineEnumerableProperties = function (obj, descs) {
	  for (var key in descs) {
	    var desc = descs[key];
	    desc.configurable = desc.enumerable = true;
	    if ("value" in desc) desc.writable = true;
	    Object.defineProperty(obj, key, desc);
	  }

	  return obj;
	};

	var defaults = function (obj, defaults) {
	  var keys = Object.getOwnPropertyNames(defaults);

	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    var value = Object.getOwnPropertyDescriptor(defaults, key);

	    if (value && value.configurable && obj[key] === undefined) {
	      Object.defineProperty(obj, key, value);
	    }
	  }

	  return obj;
	};

	var defineProperty = function (obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	};

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];

	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }

	  return target;
	};

	var get = function get(object, property, receiver) {
	  if (object === null) object = Function.prototype;
	  var desc = Object.getOwnPropertyDescriptor(object, property);

	  if (desc === undefined) {
	    var parent = Object.getPrototypeOf(object);

	    if (parent === null) {
	      return undefined;
	    } else {
	      return get(parent, property, receiver);
	    }
	  } else if ("value" in desc) {
	    return desc.value;
	  } else {
	    var getter = desc.get;

	    if (getter === undefined) {
	      return undefined;
	    }

	    return getter.call(receiver);
	  }
	};

	var inherits = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }

	  subClass.prototype = Object.create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};

	var _instanceof = function (left, right) {
	  if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
	    return right[Symbol.hasInstance](left);
	  } else {
	    return left instanceof right;
	  }
	};

	var interopRequireDefault = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    default: obj
	  };
	};

	var interopRequireWildcard = function (obj) {
	  if (obj && obj.__esModule) {
	    return obj;
	  } else {
	    var newObj = {};

	    if (obj != null) {
	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	      }
	    }

	    newObj.default = obj;
	    return newObj;
	  }
	};

	var newArrowCheck = function (innerThis, boundThis) {
	  if (innerThis !== boundThis) {
	    throw new TypeError("Cannot instantiate an arrow function");
	  }
	};

	var objectDestructuringEmpty = function (obj) {
	  if (obj == null) throw new TypeError("Cannot destructure undefined");
	};

	var objectWithoutProperties = function (obj, keys) {
	  var target = {};

	  for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;
	    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
	    target[i] = obj[i];
	  }

	  return target;
	};

	var possibleConstructorReturn = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && (typeof call === "object" || typeof call === "function") ? call : self;
	};

	var selfGlobal = typeof global === "undefined" ? self : global;

	var set = function set(object, property, value, receiver) {
	  var desc = Object.getOwnPropertyDescriptor(object, property);

	  if (desc === undefined) {
	    var parent = Object.getPrototypeOf(object);

	    if (parent !== null) {
	      set(parent, property, value, receiver);
	    }
	  } else if ("value" in desc && desc.writable) {
	    desc.value = value;
	  } else {
	    var setter = desc.set;

	    if (setter !== undefined) {
	      setter.call(receiver, value);
	    }
	  }

	  return value;
	};

	var slicedToArray = function () {
	  function sliceIterator(arr, i) {
	    var _arr = [];
	    var _n = true;
	    var _d = false;
	    var _e = undefined;

	    try {
	      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
	        _arr.push(_s.value);

	        if (i && _arr.length === i) break;
	      }
	    } catch (err) {
	      _d = true;
	      _e = err;
	    } finally {
	      try {
	        if (!_n && _i["return"]) _i["return"]();
	      } finally {
	        if (_d) throw _e;
	      }
	    }

	    return _arr;
	  }

	  return function (arr, i) {
	    if (Array.isArray(arr)) {
	      return arr;
	    } else if (Symbol.iterator in Object(arr)) {
	      return sliceIterator(arr, i);
	    } else {
	      throw new TypeError("Invalid attempt to destructure non-iterable instance");
	    }
	  };
	}();

	var slicedToArrayLoose = function (arr, i) {
	  if (Array.isArray(arr)) {
	    return arr;
	  } else if (Symbol.iterator in Object(arr)) {
	    var _arr = [];

	    for (var _iterator = arr[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
	      _arr.push(_step.value);

	      if (i && _arr.length === i) break;
	    }

	    return _arr;
	  } else {
	    throw new TypeError("Invalid attempt to destructure non-iterable instance");
	  }
	};

	var taggedTemplateLiteral = function (strings, raw) {
	  return Object.freeze(Object.defineProperties(strings, {
	    raw: {
	      value: Object.freeze(raw)
	    }
	  }));
	};

	var taggedTemplateLiteralLoose = function (strings, raw) {
	  strings.raw = raw;
	  return strings;
	};

	var temporalRef = function (val, name, undef) {
	  if (val === undef) {
	    throw new ReferenceError(name + " is not defined - temporal dead zone");
	  } else {
	    return val;
	  }
	};

	var temporalUndefined = {};

	var toArray = function (arr) {
	  return Array.isArray(arr) ? arr : Array.from(arr);
	};

	var toConsumableArray = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

	    return arr2;
	  } else {
	    return Array.from(arr);
	  }
	};



	var babelHelpers$1 = Object.freeze({
	  jsx: jsx,
	  asyncToGenerator: asyncToGenerator,
	  classCallCheck: classCallCheck,
	  createClass: createClass,
	  defineEnumerableProperties: defineEnumerableProperties,
	  defaults: defaults,
	  defineProperty: defineProperty,
	  get: get,
	  inherits: inherits,
	  interopRequireDefault: interopRequireDefault,
	  interopRequireWildcard: interopRequireWildcard,
	  newArrowCheck: newArrowCheck,
	  objectDestructuringEmpty: objectDestructuringEmpty,
	  objectWithoutProperties: objectWithoutProperties,
	  possibleConstructorReturn: possibleConstructorReturn,
	  selfGlobal: selfGlobal,
	  set: set,
	  slicedToArray: slicedToArray,
	  slicedToArrayLoose: slicedToArrayLoose,
	  taggedTemplateLiteral: taggedTemplateLiteral,
	  taggedTemplateLiteralLoose: taggedTemplateLiteralLoose,
	  temporalRef: temporalRef,
	  temporalUndefined: temporalUndefined,
	  toArray: toArray,
	  toConsumableArray: toConsumableArray,
	  typeof: _typeof,
	  extends: _extends,
	  instanceof: _instanceof
	});

	/*
	 * Copyright 2015, Yahoo Inc.
	 * Copyrights licensed under the New BSD License.
	 * See the accompanying LICENSE file for terms.
	 */

	var bool = React.PropTypes.bool;
	var number = React.PropTypes.number;
	var string = React.PropTypes.string;
	var func = React.PropTypes.func;
	var object = React.PropTypes.object;
	var oneOf = React.PropTypes.oneOf;
	var shape = React.PropTypes.shape;


	var intlConfigPropTypes = {
	    locale: string,
	    formats: object,
	    messages: object,

	    defaultLocale: string,
	    defaultFormats: object
	};

	var intlFormatPropTypes = {
	    formatDate: func.isRequired,
	    formatTime: func.isRequired,
	    formatRelative: func.isRequired,
	    formatNumber: func.isRequired,
	    formatPlural: func.isRequired,
	    formatMessage: func.isRequired,
	    formatHTMLMessage: func.isRequired
	};

	var intlShape = shape(babelHelpers$1['extends']({}, intlConfigPropTypes, intlFormatPropTypes, {
	    formatters: object,
	    now: func.isRequired
	}));

	var messageDescriptorPropTypes = {
	    id: string.isRequired,
	    description: string,
	    defaultMessage: string
	};

	var dateTimeFormatPropTypes = {
	    localeMatcher: oneOf(['best fit', 'lookup']),
	    formatMatcher: oneOf(['basic', 'best fit']),

	    timeZone: string,
	    hour12: bool,

	    weekday: oneOf(['narrow', 'short', 'long']),
	    era: oneOf(['narrow', 'short', 'long']),
	    year: oneOf(['numeric', '2-digit']),
	    month: oneOf(['numeric', '2-digit', 'narrow', 'short', 'long']),
	    day: oneOf(['numeric', '2-digit']),
	    hour: oneOf(['numeric', '2-digit']),
	    minute: oneOf(['numeric', '2-digit']),
	    second: oneOf(['numeric', '2-digit']),
	    timeZoneName: oneOf(['short', 'long'])
	};

	var numberFormatPropTypes = {
	    localeMatcher: oneOf(['best fit', 'lookup']),

	    style: oneOf(['decimal', 'currency', 'percent']),
	    currency: string,
	    currencyDisplay: oneOf(['symbol', 'code', 'name']),
	    useGrouping: bool,

	    minimumIntegerDigits: number,
	    minimumFractionDigits: number,
	    maximumFractionDigits: number,
	    minimumSignificantDigits: number,
	    maximumSignificantDigits: number
	};

	var relativeFormatPropTypes = {
	    style: oneOf(['best fit', 'numeric']),
	    units: oneOf(['second', 'minute', 'hour', 'day', 'month', 'year'])
	};

	var pluralFormatPropTypes = {
	    style: oneOf(['cardinal', 'ordinal'])
	};

	/*
	HTML escaping and shallow-equals implementations are the same as React's
	(on purpose.) Therefore, it has the following Copyright and Licensing:

	Copyright 2013-2014, Facebook, Inc.
	All rights reserved.

	This source code is licensed under the BSD-style license found in the LICENSE
	file in the root directory of React's source tree.
	*/

	var intlConfigPropNames = Object.keys(intlConfigPropTypes);

	var ESCAPED_CHARS = {
	    '&': '&amp;',
	    '>': '&gt;',
	    '<': '&lt;',
	    '"': '&quot;',
	    '\'': '&#x27;'
	};

	var UNSAFE_CHARS_REGEX = /[&><"']/g;

	function escape(str) {
	    return ('' + str).replace(UNSAFE_CHARS_REGEX, function (match) {
	        return ESCAPED_CHARS[match];
	    });
	}

	function filterProps(props, whitelist) {
	    var defaults = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

	    return whitelist.reduce(function (filtered, name) {
	        if (props.hasOwnProperty(name)) {
	            filtered[name] = props[name];
	        } else if (defaults.hasOwnProperty(name)) {
	            filtered[name] = defaults[name];
	        }

	        return filtered;
	    }, {});
	}

	function invariantIntlContext() {
	    var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var intl = _ref.intl;

	    invariant(intl, '[React Intl] Could not find required `intl` object. ' + '<IntlProvider> needs to exist in the component ancestry.');
	}

	function shallowEquals(objA, objB) {
	    if (objA === objB) {
	        return true;
	    }

	    if ((typeof objA === 'undefined' ? 'undefined' : babelHelpers$1['typeof'](objA)) !== 'object' || objA === null || (typeof objB === 'undefined' ? 'undefined' : babelHelpers$1['typeof'](objB)) !== 'object' || objB === null) {
	        return false;
	    }

	    var keysA = Object.keys(objA);
	    var keysB = Object.keys(objB);

	    if (keysA.length !== keysB.length) {
	        return false;
	    }

	    // Test for A's keys different from B.
	    var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
	    for (var i = 0; i < keysA.length; i++) {
	        if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	            return false;
	        }
	    }

	    return true;
	}

	function shouldIntlComponentUpdate(_ref2, nextProps, nextState) {
	    var props = _ref2.props;
	    var state = _ref2.state;
	    var _ref2$context = _ref2.context;
	    var context = _ref2$context === undefined ? {} : _ref2$context;
	    var nextContext = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];
	    var _context$intl = context.intl;
	    var intl = _context$intl === undefined ? {} : _context$intl;
	    var _nextContext$intl = nextContext.intl;
	    var nextIntl = _nextContext$intl === undefined ? {} : _nextContext$intl;


	    return !shallowEquals(nextProps, props) || !shallowEquals(nextState, state) || !(nextIntl === intl || shallowEquals(filterProps(nextIntl, intlConfigPropNames), filterProps(intl, intlConfigPropNames)));
	}

	/*
	 * Copyright 2015, Yahoo Inc.
	 * Copyrights licensed under the New BSD License.
	 * See the accompanying LICENSE file for terms.
	 */

	// Inspired by react-redux's `connect()` HOC factory function implementation:
	// https://github.com/rackt/react-redux

	function getDisplayName(Component) {
	    return Component.displayName || Component.name || 'Component';
	}

	function injectIntl(WrappedComponent) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	    var _options$intlPropName = options.intlPropName;
	    var intlPropName = _options$intlPropName === undefined ? 'intl' : _options$intlPropName;
	    var _options$withRef = options.withRef;
	    var withRef = _options$withRef === undefined ? false : _options$withRef;

	    var InjectIntl = function (_Component) {
	        inherits(InjectIntl, _Component);

	        function InjectIntl(props, context) {
	            classCallCheck(this, InjectIntl);

	            var _this = possibleConstructorReturn(this, (InjectIntl.__proto__ || Object.getPrototypeOf(InjectIntl)).call(this, props, context));

	            invariantIntlContext(context);
	            return _this;
	        }

	        createClass(InjectIntl, [{
	            key: 'getWrappedInstance',
	            value: function getWrappedInstance() {
	                invariant(withRef, '[React Intl] To access the wrapped instance, ' + 'the `{withRef: true}` option must be set when calling: ' + '`injectIntl()`');

	                return this.refs.wrappedInstance;
	            }
	        }, {
	            key: 'render',
	            value: function render() {
	                return React__default.createElement(WrappedComponent, babelHelpers$1['extends']({}, this.props, defineProperty({}, intlPropName, this.context.intl), {
	                    ref: withRef ? 'wrappedInstance' : null
	                }));
	            }
	        }]);
	        return InjectIntl;
	    }(React.Component);

	    InjectIntl.displayName = 'InjectIntl(' + getDisplayName(WrappedComponent) + ')';

	    InjectIntl.contextTypes = {
	        intl: intlShape
	    };

	    InjectIntl.WrappedComponent = WrappedComponent;

	    return InjectIntl;
	}

	/*
	 * Copyright 2015, Yahoo Inc.
	 * Copyrights licensed under the New BSD License.
	 * See the accompanying LICENSE file for terms.
	 */

	function defineMessages(messageDescriptors) {
	  // This simply returns what's passed-in because it's meant to be a hook for
	  // babel-plugin-react-intl.
	  return messageDescriptors;
	}

	/*
	 * Copyright 2015, Yahoo Inc.
	 * Copyrights licensed under the New BSD License.
	 * See the accompanying LICENSE file for terms.
	 */

	// This is a "hack" until a proper `intl-pluralformat` package is created.

	function resolveLocale(locales) {
	    // IntlMessageFormat#_resolveLocale() does not depend on `this`.
	    return IntlMessageFormat.prototype._resolveLocale(locales);
	}

	function findPluralFunction(locale) {
	    // IntlMessageFormat#_findPluralFunction() does not depend on `this`.
	    return IntlMessageFormat.prototype._findPluralRuleFunction(locale);
	}

	var IntlPluralFormat = function IntlPluralFormat(locales) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	    classCallCheck(this, IntlPluralFormat);

	    var useOrdinal = options.style === 'ordinal';
	    var pluralFn = findPluralFunction(resolveLocale(locales));

	    this.format = function (value) {
	        return pluralFn(value, useOrdinal);
	    };
	};

	/*
	 * Copyright 2015, Yahoo Inc.
	 * Copyrights licensed under the New BSD License.
	 * See the accompanying LICENSE file for terms.
	 */

	var DATE_TIME_FORMAT_OPTIONS = Object.keys(dateTimeFormatPropTypes);
	var NUMBER_FORMAT_OPTIONS = Object.keys(numberFormatPropTypes);
	var RELATIVE_FORMAT_OPTIONS = Object.keys(relativeFormatPropTypes);
	var PLURAL_FORMAT_OPTIONS = Object.keys(pluralFormatPropTypes);

	var RELATIVE_FORMAT_THRESHOLDS = {
	    second: 60, // seconds to minute
	    minute: 60, // minutes to hour
	    hour: 24, // hours to day
	    day: 30, // days to month
	    month: 12 };

	function updateRelativeFormatThresholds(newThresholds) {
	    var thresholds = IntlRelativeFormat.thresholds;
	    thresholds.second = newThresholds.second;
	    thresholds.minute = newThresholds.minute;
	    thresholds.hour = newThresholds.hour;
	    thresholds.day = newThresholds.day;
	    thresholds.month = newThresholds.month;
	}

	function getNamedFormat(formats, type, name) {
	    var format = formats && formats[type] && formats[type][name];
	    if (format) {
	        return format;
	    }

	    if (process.env.NODE_ENV !== 'production') {
	        console.error('[React Intl] No ' + type + ' format named: ' + name);
	    }
	}

	function formatDate(config, state, value) {
	    var options = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];
	    var locale = config.locale;
	    var formats = config.formats;
	    var format = options.format;


	    var date = new Date(value);
	    var defaults = format && getNamedFormat(formats, 'date', format);
	    var filteredOptions = filterProps(options, DATE_TIME_FORMAT_OPTIONS, defaults);

	    try {
	        return state.getDateTimeFormat(locale, filteredOptions).format(date);
	    } catch (e) {
	        if (process.env.NODE_ENV !== 'production') {
	            console.error('[React Intl] Error formatting date.\n' + e);
	        }
	    }

	    return String(date);
	}

	function formatTime(config, state, value) {
	    var options = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];
	    var locale = config.locale;
	    var formats = config.formats;
	    var format = options.format;


	    var date = new Date(value);
	    var defaults = format && getNamedFormat(formats, 'time', format);
	    var filteredOptions = filterProps(options, DATE_TIME_FORMAT_OPTIONS, defaults);

	    if (!filteredOptions.hour && !filteredOptions.minute && !filteredOptions.second) {
	        // Add default formatting options if hour, minute, or second isn't defined.
	        filteredOptions = babelHelpers$1['extends']({}, filteredOptions, { hour: 'numeric', minute: 'numeric' });
	    }

	    try {
	        return state.getDateTimeFormat(locale, filteredOptions).format(date);
	    } catch (e) {
	        if (process.env.NODE_ENV !== 'production') {
	            console.error('[React Intl] Error formatting time.\n' + e);
	        }
	    }

	    return String(date);
	}

	function formatRelative(config, state, value) {
	    var options = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];
	    var locale = config.locale;
	    var formats = config.formats;
	    var format = options.format;


	    var date = new Date(value);
	    var now = new Date(options.now);
	    var defaults = format && getNamedFormat(formats, 'relative', format);
	    var filteredOptions = filterProps(options, RELATIVE_FORMAT_OPTIONS, defaults);

	    // Capture the current threshold values, then temporarily override them with
	    // specific values just for this render.
	    var oldThresholds = babelHelpers$1['extends']({}, IntlRelativeFormat.thresholds);
	    updateRelativeFormatThresholds(RELATIVE_FORMAT_THRESHOLDS);

	    try {
	        return state.getRelativeFormat(locale, filteredOptions).format(date, {
	            now: isFinite(now) ? now : state.now()
	        });
	    } catch (e) {
	        if (process.env.NODE_ENV !== 'production') {
	            console.error('[React Intl] Error formatting relative time.\n' + e);
	        }
	    } finally {
	        updateRelativeFormatThresholds(oldThresholds);
	    }

	    return String(date);
	}

	function formatNumber(config, state, value) {
	    var options = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];
	    var locale = config.locale;
	    var formats = config.formats;
	    var format = options.format;


	    var defaults = format && getNamedFormat(formats, 'number', format);
	    var filteredOptions = filterProps(options, NUMBER_FORMAT_OPTIONS, defaults);

	    try {
	        return state.getNumberFormat(locale, filteredOptions).format(value);
	    } catch (e) {
	        if (process.env.NODE_ENV !== 'production') {
	            console.error('[React Intl] Error formatting number.\n' + e);
	        }
	    }

	    return String(value);
	}

	function formatPlural(config, state, value) {
	    var options = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];
	    var locale = config.locale;


	    var filteredOptions = filterProps(options, PLURAL_FORMAT_OPTIONS);

	    try {
	        return state.getPluralFormat(locale, filteredOptions).format(value);
	    } catch (e) {
	        if (process.env.NODE_ENV !== 'production') {
	            console.error('[React Intl] Error formatting plural.\n' + e);
	        }
	    }

	    return 'other';
	}

	function formatMessage(config, state) {
	    var messageDescriptor = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
	    var values = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];
	    var locale = config.locale;
	    var formats = config.formats;
	    var messages = config.messages;
	    var defaultLocale = config.defaultLocale;
	    var defaultFormats = config.defaultFormats;
	    var id = messageDescriptor.id;
	    var defaultMessage = messageDescriptor.defaultMessage;

	    // `id` is a required field of a Message Descriptor.

	    invariant(id, '[React Intl] An `id` must be provided to format a message.');

	    var message = messages && messages[id];
	    var hasValues = Object.keys(values).length > 0;

	    // Avoid expensive message formatting for simple messages without values. In
	    // development messages will always be formatted in case of missing values.
	    if (!hasValues && process.env.NODE_ENV === 'production') {
	        return message || defaultMessage || id;
	    }

	    var formattedMessage = void 0;

	    if (message) {
	        try {
	            var formatter = state.getMessageFormat(message, locale, formats);

	            formattedMessage = formatter.format(values);
	        } catch (e) {
	            if (process.env.NODE_ENV !== 'production') {
	                console.error('[React Intl] Error formatting message: "' + id + '" for locale: "' + locale + '"' + (defaultMessage ? ', using default message as fallback.' : '') + ('\n' + e));
	            }
	        }
	    } else {
	        if (process.env.NODE_ENV !== 'production') {
	            // This prevents warnings from littering the console in development
	            // when no `messages` are passed into the <IntlProvider> for the
	            // default locale, and a default message is in the source.
	            if (!defaultMessage || locale && locale.toLowerCase() !== defaultLocale.toLowerCase()) {

	                console.error('[React Intl] Missing message: "' + id + '" for locale: "' + locale + '"' + (defaultMessage ? ', using default message as fallback.' : ''));
	            }
	        }
	    }

	    if (!formattedMessage && defaultMessage) {
	        try {
	            var _formatter = state.getMessageFormat(defaultMessage, defaultLocale, defaultFormats);

	            formattedMessage = _formatter.format(values);
	        } catch (e) {
	            if (process.env.NODE_ENV !== 'production') {
	                console.error('[React Intl] Error formatting the default message for: "' + id + '"' + ('\n' + e));
	            }
	        }
	    }

	    if (!formattedMessage) {
	        if (process.env.NODE_ENV !== 'production') {
	            console.error('[React Intl] Cannot format message: "' + id + '", ' + ('using message ' + (message || defaultMessage ? 'source' : 'id') + ' as fallback.'));
	        }
	    }

	    return formattedMessage || message || defaultMessage || id;
	}

	function formatHTMLMessage(config, state, messageDescriptor) {
	    var rawValues = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

	    // Process all the values before they are used when formatting the ICU
	    // Message string. Since the formatted message might be injected via
	    // `innerHTML`, all String-based values need to be HTML-escaped.
	    var escapedValues = Object.keys(rawValues).reduce(function (escaped, name) {
	        var value = rawValues[name];
	        escaped[name] = typeof value === 'string' ? escape(value) : value;
	        return escaped;
	    }, {});

	    return formatMessage(config, state, messageDescriptor, escapedValues);
	}



	var format = Object.freeze({
	    formatDate: formatDate,
	    formatTime: formatTime,
	    formatRelative: formatRelative,
	    formatNumber: formatNumber,
	    formatPlural: formatPlural,
	    formatMessage: formatMessage,
	    formatHTMLMessage: formatHTMLMessage
	});

	/*
	 * Copyright 2015, Yahoo Inc.
	 * Copyrights licensed under the New BSD License.
	 * See the accompanying LICENSE file for terms.
	 */

	var intlConfigPropNames$1 = Object.keys(intlConfigPropTypes);
	var intlFormatPropNames = Object.keys(intlFormatPropTypes);

	// These are not a static property on the `IntlProvider` class so the intl
	// config values can be inherited from an <IntlProvider> ancestor.
	var defaultProps = {
	    formats: {},
	    messages: {},

	    defaultLocale: 'en',
	    defaultFormats: {}
	};

	var IntlProvider = function (_Component) {
	    inherits(IntlProvider, _Component);

	    function IntlProvider(props, context) {
	        classCallCheck(this, IntlProvider);

	        var _this = possibleConstructorReturn(this, (IntlProvider.__proto__ || Object.getPrototypeOf(IntlProvider)).call(this, props, context));

	        invariant(typeof Intl !== 'undefined', '[React Intl] The `Intl` APIs must be available in the runtime, ' + 'and do not appear to be built-in. An `Intl` polyfill should be loaded.\n' + 'See: http://formatjs.io/guides/runtime-environments/');

	        var intlContext = context.intl;

	        // Used to stabilize time when performing an initial rendering so that
	        // all relative times use the same reference "now" time.

	        var initialNow = void 0;
	        if (isFinite(props.initialNow)) {
	            initialNow = Number(props.initialNow);
	        } else {
	            // When an `initialNow` isn't provided via `props`, look to see an
	            // <IntlProvider> exists in the ancestry and call its `now()`
	            // function to propagate its value for "now".
	            initialNow = intlContext ? intlContext.now() : Date.now();
	        }

	        // Creating `Intl*` formatters is expensive. If there's a parent
	        // `<IntlProvider>`, then its formatters will be used. Otherwise, this
	        // memoize the `Intl*` constructors and cache them for the lifecycle of
	        // this IntlProvider instance.

	        var _ref = intlContext || {};

	        var _ref$formatters = _ref.formatters;
	        var formatters = _ref$formatters === undefined ? {
	            getDateTimeFormat: memoizeIntlConstructor(Intl.DateTimeFormat),
	            getNumberFormat: memoizeIntlConstructor(Intl.NumberFormat),
	            getMessageFormat: memoizeIntlConstructor(IntlMessageFormat),
	            getRelativeFormat: memoizeIntlConstructor(IntlRelativeFormat),
	            getPluralFormat: memoizeIntlConstructor(IntlPluralFormat)
	        } : _ref$formatters;


	        _this.state = babelHelpers$1['extends']({}, formatters, {

	            // Wrapper to provide stable "now" time for initial render.
	            now: function now() {
	                return _this._didDisplay ? Date.now() : initialNow;
	            }
	        });
	        return _this;
	    }

	    createClass(IntlProvider, [{
	        key: 'getConfig',
	        value: function getConfig() {
	            var intlContext = this.context.intl;

	            // Build a whitelisted config object from `props`, defaults, and
	            // `context.intl`, if an <IntlProvider> exists in the ancestry.

	            var config = filterProps(this.props, intlConfigPropNames$1, intlContext);

	            // Apply default props. This must be applied last after the props have
	            // been resolved and inherited from any <IntlProvider> in the ancestry.
	            // This matches how React resolves `defaultProps`.
	            for (var propName in defaultProps) {
	                if (config[propName] === undefined) {
	                    config[propName] = defaultProps[propName];
	                }
	            }

	            if (!hasLocaleData(config.locale)) {
	                var _config = config;
	                var locale = _config.locale;
	                var defaultLocale = _config.defaultLocale;
	                var defaultFormats = _config.defaultFormats;


	                if (process.env.NODE_ENV !== 'production') {
	                    console.error('[React Intl] Missing locale data for locale: "' + locale + '". ' + ('Using default locale: "' + defaultLocale + '" as fallback.'));
	                }

	                // Since there's no registered locale data for `locale`, this will
	                // fallback to the `defaultLocale` to make sure things can render.
	                // The `messages` are overridden to the `defaultProps` empty object
	                // to maintain referential equality across re-renders. It's assumed
	                // each <FormattedMessage> contains a `defaultMessage` prop.
	                config = babelHelpers$1['extends']({}, config, {
	                    locale: defaultLocale,
	                    formats: defaultFormats,
	                    messages: defaultProps.messages
	                });
	            }

	            return config;
	        }
	    }, {
	        key: 'getBoundFormatFns',
	        value: function getBoundFormatFns(config, state) {
	            return intlFormatPropNames.reduce(function (boundFormatFns, name) {
	                boundFormatFns[name] = format[name].bind(null, config, state);
	                return boundFormatFns;
	            }, {});
	        }
	    }, {
	        key: 'getChildContext',
	        value: function getChildContext() {
	            var config = this.getConfig();

	            // Bind intl factories and current config to the format functions.
	            var boundFormatFns = this.getBoundFormatFns(config, this.state);

	            var _state = this.state;
	            var now = _state.now;
	            var formatters = objectWithoutProperties(_state, ['now']);


	            return {
	                intl: babelHelpers$1['extends']({}, config, boundFormatFns, {
	                    formatters: formatters,
	                    now: now
	                })
	            };
	        }
	    }, {
	        key: 'shouldComponentUpdate',
	        value: function shouldComponentUpdate() {
	            for (var _len = arguments.length, next = Array(_len), _key = 0; _key < _len; _key++) {
	                next[_key] = arguments[_key];
	            }

	            return shouldIntlComponentUpdate.apply(undefined, [this].concat(next));
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this._didDisplay = true;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return React.Children.only(this.props.children);
	        }
	    }]);
	    return IntlProvider;
	}(React.Component);

	IntlProvider.displayName = 'IntlProvider';

	IntlProvider.contextTypes = {
	    intl: intlShape
	};

	IntlProvider.childContextTypes = {
	    intl: intlShape.isRequired
	};

	IntlProvider.propTypes = babelHelpers$1['extends']({}, intlConfigPropTypes, {
	    children: React.PropTypes.element.isRequired,
	    initialNow: React.PropTypes.any
	});

	/*
	 * Copyright 2015, Yahoo Inc.
	 * Copyrights licensed under the New BSD License.
	 * See the accompanying LICENSE file for terms.
	 */

	var FormattedDate = function (_Component) {
	    inherits(FormattedDate, _Component);

	    function FormattedDate(props, context) {
	        classCallCheck(this, FormattedDate);

	        var _this = possibleConstructorReturn(this, (FormattedDate.__proto__ || Object.getPrototypeOf(FormattedDate)).call(this, props, context));

	        invariantIntlContext(context);
	        return _this;
	    }

	    createClass(FormattedDate, [{
	        key: 'shouldComponentUpdate',
	        value: function shouldComponentUpdate() {
	            for (var _len = arguments.length, next = Array(_len), _key = 0; _key < _len; _key++) {
	                next[_key] = arguments[_key];
	            }

	            return shouldIntlComponentUpdate.apply(undefined, [this].concat(next));
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var formatDate = this.context.intl.formatDate;
	            var _props = this.props;
	            var value = _props.value;
	            var children = _props.children;


	            var formattedDate = formatDate(value, this.props);

	            if (typeof children === 'function') {
	                return children(formattedDate);
	            }

	            return React__default.createElement(
	                'span',
	                null,
	                formattedDate
	            );
	        }
	    }]);
	    return FormattedDate;
	}(React.Component);

	FormattedDate.displayName = 'FormattedDate';

	FormattedDate.contextTypes = {
	    intl: intlShape
	};

	FormattedDate.propTypes = babelHelpers$1['extends']({}, dateTimeFormatPropTypes, {
	    value: React.PropTypes.any.isRequired,
	    format: React.PropTypes.string,
	    children: React.PropTypes.func
	});

	/*
	 * Copyright 2015, Yahoo Inc.
	 * Copyrights licensed under the New BSD License.
	 * See the accompanying LICENSE file for terms.
	 */

	var FormattedTime = function (_Component) {
	    inherits(FormattedTime, _Component);

	    function FormattedTime(props, context) {
	        classCallCheck(this, FormattedTime);

	        var _this = possibleConstructorReturn(this, (FormattedTime.__proto__ || Object.getPrototypeOf(FormattedTime)).call(this, props, context));

	        invariantIntlContext(context);
	        return _this;
	    }

	    createClass(FormattedTime, [{
	        key: 'shouldComponentUpdate',
	        value: function shouldComponentUpdate() {
	            for (var _len = arguments.length, next = Array(_len), _key = 0; _key < _len; _key++) {
	                next[_key] = arguments[_key];
	            }

	            return shouldIntlComponentUpdate.apply(undefined, [this].concat(next));
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var formatTime = this.context.intl.formatTime;
	            var _props = this.props;
	            var value = _props.value;
	            var children = _props.children;


	            var formattedTime = formatTime(value, this.props);

	            if (typeof children === 'function') {
	                return children(formattedTime);
	            }

	            return React__default.createElement(
	                'span',
	                null,
	                formattedTime
	            );
	        }
	    }]);
	    return FormattedTime;
	}(React.Component);

	FormattedTime.displayName = 'FormattedTime';

	FormattedTime.contextTypes = {
	    intl: intlShape
	};

	FormattedTime.propTypes = babelHelpers$1['extends']({}, dateTimeFormatPropTypes, {
	    value: React.PropTypes.any.isRequired,
	    format: React.PropTypes.string,
	    children: React.PropTypes.func
	});

	/*
	 * Copyright 2015, Yahoo Inc.
	 * Copyrights licensed under the New BSD License.
	 * See the accompanying LICENSE file for terms.
	 */

	var SECOND = 1000;
	var MINUTE = 1000 * 60;
	var HOUR = 1000 * 60 * 60;
	var DAY = 1000 * 60 * 60 * 24;

	// The maximum timer delay value is a 32-bit signed integer.
	// See: https://mdn.io/setTimeout
	var MAX_TIMER_DELAY = 2147483647;

	function selectUnits(delta) {
	    var absDelta = Math.abs(delta);

	    if (absDelta < MINUTE) {
	        return 'second';
	    }

	    if (absDelta < HOUR) {
	        return 'minute';
	    }

	    if (absDelta < DAY) {
	        return 'hour';
	    }

	    // The maximum scheduled delay will be measured in days since the maximum
	    // timer delay is less than the number of milliseconds in 25 days.
	    return 'day';
	}

	function getUnitDelay(units) {
	    switch (units) {
	        case 'second':
	            return SECOND;
	        case 'minute':
	            return MINUTE;
	        case 'hour':
	            return HOUR;
	        case 'day':
	            return DAY;
	        default:
	            return MAX_TIMER_DELAY;
	    }
	}

	function isSameDate(a, b) {
	    if (a === b) {
	        return true;
	    }

	    var aTime = new Date(a).getTime();
	    var bTime = new Date(b).getTime();

	    return isFinite(aTime) && isFinite(bTime) && aTime === bTime;
	}

	var FormattedRelative = function (_Component) {
	    inherits(FormattedRelative, _Component);

	    function FormattedRelative(props, context) {
	        classCallCheck(this, FormattedRelative);

	        var _this = possibleConstructorReturn(this, (FormattedRelative.__proto__ || Object.getPrototypeOf(FormattedRelative)).call(this, props, context));

	        invariantIntlContext(context);

	        var now = isFinite(props.initialNow) ? Number(props.initialNow) : context.intl.now();

	        // `now` is stored as state so that `render()` remains a function of
	        // props + state, instead of accessing `Date.now()` inside `render()`.
	        _this.state = { now: now };
	        return _this;
	    }

	    createClass(FormattedRelative, [{
	        key: 'scheduleNextUpdate',
	        value: function scheduleNextUpdate(props, state) {
	            var _this2 = this;

	            var updateInterval = props.updateInterval;

	            // If the `updateInterval` is falsy, including `0`, then auto updates
	            // have been turned off, so we bail and skip scheduling an update.

	            if (!updateInterval) {
	                return;
	            }

	            var time = new Date(props.value).getTime();
	            var delta = time - state.now;
	            var units = props.units || selectUnits(delta);

	            var unitDelay = getUnitDelay(units);
	            var unitRemainder = Math.abs(delta % unitDelay);

	            // We want the largest possible timer delay which will still display
	            // accurate information while reducing unnecessary re-renders. The delay
	            // should be until the next "interesting" moment, like a tick from
	            // "1 minute ago" to "2 minutes ago" when the delta is 120,000ms.
	            var delay = delta < 0 ? Math.max(updateInterval, unitDelay - unitRemainder) : Math.max(updateInterval, unitRemainder);

	            clearTimeout(this._timer);

	            this._timer = setTimeout(function () {
	                _this2.setState({ now: _this2.context.intl.now() });
	            }, delay);
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.scheduleNextUpdate(this.props, this.state);
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(_ref) {
	            var nextValue = _ref.value;

	            // When the `props.value` date changes, `state.now` needs to be updated,
	            // and the next update can be rescheduled.
	            if (!isSameDate(nextValue, this.props.value)) {
	                this.setState({ now: this.context.intl.now() });
	            }
	        }
	    }, {
	        key: 'shouldComponentUpdate',
	        value: function shouldComponentUpdate() {
	            for (var _len = arguments.length, next = Array(_len), _key = 0; _key < _len; _key++) {
	                next[_key] = arguments[_key];
	            }

	            return shouldIntlComponentUpdate.apply(undefined, [this].concat(next));
	        }
	    }, {
	        key: 'componentWillUpdate',
	        value: function componentWillUpdate(nextProps, nextState) {
	            this.scheduleNextUpdate(nextProps, nextState);
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            clearTimeout(this._timer);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var formatRelative = this.context.intl.formatRelative;
	            var _props = this.props;
	            var value = _props.value;
	            var children = _props.children;


	            var formattedRelative = formatRelative(value, babelHelpers$1['extends']({}, this.props, this.state));

	            if (typeof children === 'function') {
	                return children(formattedRelative);
	            }

	            return React__default.createElement(
	                'span',
	                null,
	                formattedRelative
	            );
	        }
	    }]);
	    return FormattedRelative;
	}(React.Component);

	FormattedRelative.displayName = 'FormattedRelative';

	FormattedRelative.contextTypes = {
	    intl: intlShape
	};

	FormattedRelative.propTypes = babelHelpers$1['extends']({}, relativeFormatPropTypes, {
	    value: React.PropTypes.any.isRequired,
	    format: React.PropTypes.string,
	    updateInterval: React.PropTypes.number,
	    initialNow: React.PropTypes.any,
	    children: React.PropTypes.func
	});

	FormattedRelative.defaultProps = {
	    updateInterval: 1000 * 10
	};

	/*
	 * Copyright 2015, Yahoo Inc.
	 * Copyrights licensed under the New BSD License.
	 * See the accompanying LICENSE file for terms.
	 */

	var FormattedNumber = function (_Component) {
	    inherits(FormattedNumber, _Component);

	    function FormattedNumber(props, context) {
	        classCallCheck(this, FormattedNumber);

	        var _this = possibleConstructorReturn(this, (FormattedNumber.__proto__ || Object.getPrototypeOf(FormattedNumber)).call(this, props, context));

	        invariantIntlContext(context);
	        return _this;
	    }

	    createClass(FormattedNumber, [{
	        key: 'shouldComponentUpdate',
	        value: function shouldComponentUpdate() {
	            for (var _len = arguments.length, next = Array(_len), _key = 0; _key < _len; _key++) {
	                next[_key] = arguments[_key];
	            }

	            return shouldIntlComponentUpdate.apply(undefined, [this].concat(next));
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var formatNumber = this.context.intl.formatNumber;
	            var _props = this.props;
	            var value = _props.value;
	            var children = _props.children;


	            var formattedNumber = formatNumber(value, this.props);

	            if (typeof children === 'function') {
	                return children(formattedNumber);
	            }

	            return React__default.createElement(
	                'span',
	                null,
	                formattedNumber
	            );
	        }
	    }]);
	    return FormattedNumber;
	}(React.Component);

	FormattedNumber.displayName = 'FormattedNumber';

	FormattedNumber.contextTypes = {
	    intl: intlShape
	};

	FormattedNumber.propTypes = babelHelpers$1['extends']({}, numberFormatPropTypes, {
	    value: React.PropTypes.any.isRequired,
	    format: React.PropTypes.string,
	    children: React.PropTypes.func
	});

	/*
	 * Copyright 2015, Yahoo Inc.
	 * Copyrights licensed under the New BSD License.
	 * See the accompanying LICENSE file for terms.
	 */

	var FormattedPlural = function (_Component) {
	    inherits(FormattedPlural, _Component);

	    function FormattedPlural(props, context) {
	        classCallCheck(this, FormattedPlural);

	        var _this = possibleConstructorReturn(this, (FormattedPlural.__proto__ || Object.getPrototypeOf(FormattedPlural)).call(this, props, context));

	        invariantIntlContext(context);
	        return _this;
	    }

	    createClass(FormattedPlural, [{
	        key: 'shouldComponentUpdate',
	        value: function shouldComponentUpdate() {
	            for (var _len = arguments.length, next = Array(_len), _key = 0; _key < _len; _key++) {
	                next[_key] = arguments[_key];
	            }

	            return shouldIntlComponentUpdate.apply(undefined, [this].concat(next));
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var formatPlural = this.context.intl.formatPlural;
	            var _props = this.props;
	            var value = _props.value;
	            var other = _props.other;
	            var children = _props.children;


	            var pluralCategory = formatPlural(value, this.props);
	            var formattedPlural = this.props[pluralCategory] || other;

	            if (typeof children === 'function') {
	                return children(formattedPlural);
	            }

	            return React__default.createElement(
	                'span',
	                null,
	                formattedPlural
	            );
	        }
	    }]);
	    return FormattedPlural;
	}(React.Component);

	FormattedPlural.displayName = 'FormattedPlural';

	FormattedPlural.contextTypes = {
	    intl: intlShape
	};

	FormattedPlural.propTypes = babelHelpers$1['extends']({}, pluralFormatPropTypes, {
	    value: React.PropTypes.any.isRequired,

	    other: React.PropTypes.node.isRequired,
	    zero: React.PropTypes.node,
	    one: React.PropTypes.node,
	    two: React.PropTypes.node,
	    few: React.PropTypes.node,
	    many: React.PropTypes.node,

	    children: React.PropTypes.func
	});

	FormattedPlural.defaultProps = {
	    style: 'cardinal'
	};

	/*
	 * Copyright 2015, Yahoo Inc.
	 * Copyrights licensed under the New BSD License.
	 * See the accompanying LICENSE file for terms.
	 */

	var FormattedMessage = function (_Component) {
	    inherits(FormattedMessage, _Component);

	    function FormattedMessage(props, context) {
	        classCallCheck(this, FormattedMessage);

	        var _this = possibleConstructorReturn(this, (FormattedMessage.__proto__ || Object.getPrototypeOf(FormattedMessage)).call(this, props, context));

	        invariantIntlContext(context);
	        return _this;
	    }

	    createClass(FormattedMessage, [{
	        key: 'shouldComponentUpdate',
	        value: function shouldComponentUpdate(nextProps) {
	            var values = this.props.values;
	            var nextValues = nextProps.values;


	            if (!shallowEquals(nextValues, values)) {
	                return true;
	            }

	            // Since `values` has already been checked, we know they're not
	            // different, so the current `values` are carried over so the shallow
	            // equals comparison on the other props isn't affected by the `values`.
	            var nextPropsToCheck = babelHelpers$1['extends']({}, nextProps, {
	                values: values
	            });

	            for (var _len = arguments.length, next = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	                next[_key - 1] = arguments[_key];
	            }

	            return shouldIntlComponentUpdate.apply(undefined, [this, nextPropsToCheck].concat(next));
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var formatMessage = this.context.intl.formatMessage;
	            var _props = this.props;
	            var id = _props.id;
	            var description = _props.description;
	            var defaultMessage = _props.defaultMessage;
	            var values = _props.values;
	            var tagName = _props.tagName;
	            var children = _props.children;


	            var tokenDelimiter = void 0;
	            var tokenizedValues = void 0;
	            var elements = void 0;

	            var hasValues = values && Object.keys(values).length > 0;
	            if (hasValues) {
	                (function () {
	                    // Creates a token with a random UID that should not be guessable or
	                    // conflict with other parts of the `message` string.
	                    var uid = Math.floor(Math.random() * 0x10000000000).toString(16);

	                    var generateToken = function () {
	                        var counter = 0;
	                        return function () {
	                            return 'ELEMENT-' + uid + '-' + (counter += 1);
	                        };
	                    }();

	                    // Splitting with a delimiter to support IE8. When using a regex
	                    // with a capture group IE8 does not include the capture group in
	                    // the resulting array.
	                    tokenDelimiter = '@__' + uid + '__@';
	                    tokenizedValues = {};
	                    elements = {};

	                    // Iterates over the `props` to keep track of any React Element
	                    // values so they can be represented by the `token` as a placeholder
	                    // when the `message` is formatted. This allows the formatted
	                    // message to then be broken-up into parts with references to the
	                    // React Elements inserted back in.
	                    Object.keys(values).forEach(function (name) {
	                        var value = values[name];

	                        if (React.isValidElement(value)) {
	                            var token = generateToken();
	                            tokenizedValues[name] = tokenDelimiter + token + tokenDelimiter;
	                            elements[token] = value;
	                        } else {
	                            tokenizedValues[name] = value;
	                        }
	                    });
	                })();
	            }

	            var descriptor = { id: id, description: description, defaultMessage: defaultMessage };
	            var formattedMessage = formatMessage(descriptor, tokenizedValues || values);

	            var nodes = void 0;

	            var hasElements = elements && Object.keys(elements).length > 0;
	            if (hasElements) {
	                // Split the message into parts so the React Element values captured
	                // above can be inserted back into the rendered message. This
	                // approach allows messages to render with React Elements while
	                // keeping React's virtual diffing working properly.
	                nodes = formattedMessage.split(tokenDelimiter).filter(function (part) {
	                    return !!part;
	                }).map(function (part) {
	                    return elements[part] || part;
	                });
	            } else {
	                nodes = [formattedMessage];
	            }

	            if (typeof children === 'function') {
	                return children.apply(undefined, toConsumableArray(nodes));
	            }

	            return React.createElement.apply(undefined, [tagName, null].concat(toConsumableArray(nodes)));
	        }
	    }]);
	    return FormattedMessage;
	}(React.Component);

	FormattedMessage.displayName = 'FormattedMessage';

	FormattedMessage.contextTypes = {
	    intl: intlShape
	};

	FormattedMessage.propTypes = babelHelpers$1['extends']({}, messageDescriptorPropTypes, {
	    values: React.PropTypes.object,
	    tagName: React.PropTypes.string,
	    children: React.PropTypes.func
	});

	FormattedMessage.defaultProps = {
	    values: {},
	    tagName: 'span'
	};

	/*
	 * Copyright 2015, Yahoo Inc.
	 * Copyrights licensed under the New BSD License.
	 * See the accompanying LICENSE file for terms.
	 */

	var FormattedHTMLMessage = function (_Component) {
	    inherits(FormattedHTMLMessage, _Component);

	    function FormattedHTMLMessage(props, context) {
	        classCallCheck(this, FormattedHTMLMessage);

	        var _this = possibleConstructorReturn(this, (FormattedHTMLMessage.__proto__ || Object.getPrototypeOf(FormattedHTMLMessage)).call(this, props, context));

	        invariantIntlContext(context);
	        return _this;
	    }

	    createClass(FormattedHTMLMessage, [{
	        key: 'shouldComponentUpdate',
	        value: function shouldComponentUpdate(nextProps) {
	            var values = this.props.values;
	            var nextValues = nextProps.values;


	            if (!shallowEquals(nextValues, values)) {
	                return true;
	            }

	            // Since `values` has already been checked, we know they're not
	            // different, so the current `values` are carried over so the shallow
	            // equals comparison on the other props isn't affected by the `values`.
	            var nextPropsToCheck = babelHelpers$1['extends']({}, nextProps, {
	                values: values
	            });

	            for (var _len = arguments.length, next = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	                next[_key - 1] = arguments[_key];
	            }

	            return shouldIntlComponentUpdate.apply(undefined, [this, nextPropsToCheck].concat(next));
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var formatHTMLMessage = this.context.intl.formatHTMLMessage;
	            var _props = this.props;
	            var id = _props.id;
	            var description = _props.description;
	            var defaultMessage = _props.defaultMessage;
	            var rawValues = _props.values;
	            var tagName = _props.tagName;
	            var children = _props.children;


	            var descriptor = { id: id, description: description, defaultMessage: defaultMessage };
	            var formattedHTMLMessage = formatHTMLMessage(descriptor, rawValues);

	            if (typeof children === 'function') {
	                return children(formattedHTMLMessage);
	            }

	            // Since the message presumably has HTML in it, we need to set
	            // `innerHTML` in order for it to be rendered and not escaped by React.
	            // To be safe, all string prop values were escaped when formatting the
	            // message. It is assumed that the message is not UGC, and came from the
	            // developer making it more like a template.
	            //
	            // Note: There's a perf impact of using this component since there's no
	            // way for React to do its virtual DOM diffing.
	            return React.createElement(tagName, {
	                dangerouslySetInnerHTML: {
	                    __html: formattedHTMLMessage
	                }
	            });
	        }
	    }]);
	    return FormattedHTMLMessage;
	}(React.Component);

	FormattedHTMLMessage.displayName = 'FormattedHTMLMessage';

	FormattedHTMLMessage.contextTypes = {
	    intl: intlShape
	};

	FormattedHTMLMessage.propTypes = babelHelpers$1['extends']({}, messageDescriptorPropTypes, {
	    values: React.PropTypes.object,
	    tagName: React.PropTypes.string,
	    children: React.PropTypes.func
	});

	FormattedHTMLMessage.defaultProps = {
	    values: {},
	    tagName: 'span'
	};

	/*
	 * Copyright 2015, Yahoo Inc.
	 * Copyrights licensed under the New BSD License.
	 * See the accompanying LICENSE file for terms.
	 */

	addLocaleData(defaultLocaleData);

	/*
	 * Copyright 2015, Yahoo Inc.
	 * Copyrights licensed under the New BSD License.
	 * See the accompanying LICENSE file for terms.
	 */

	addLocaleData(allLocaleData);

	exports.addLocaleData = addLocaleData;
	exports.intlShape = intlShape;
	exports.injectIntl = injectIntl;
	exports.defineMessages = defineMessages;
	exports.IntlProvider = IntlProvider;
	exports.FormattedDate = FormattedDate;
	exports.FormattedTime = FormattedTime;
	exports.FormattedRelative = FormattedRelative;
	exports.FormattedNumber = FormattedNumber;
	exports.FormattedPlural = FormattedPlural;
	exports.FormattedMessage = FormattedMessage;
	exports.FormattedHTMLMessage = FormattedHTMLMessage;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(3)))

/***/ },
/* 3 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 4 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/* jshint node:true */

	'use strict';

	var IntlMessageFormat = __webpack_require__(6)['default'];

	// Add all locale data to `IntlMessageFormat`. This module will be ignored when
	// bundling for the browser with Browserify/Webpack.
	__webpack_require__(14);

	// Re-export `IntlMessageFormat` as the CommonJS default exports with all the
	// locale data registered, and with English set as the default locale. Define
	// the `default` prop for use with other compiled ES6 Modules.
	exports = module.exports = IntlMessageFormat;
	exports['default'] = exports;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* jslint esnext: true */

	"use strict";
	var src$core$$ = __webpack_require__(7), src$en$$ = __webpack_require__(13);

	src$core$$["default"].__addLocaleData(src$en$$["default"]);
	src$core$$["default"].defaultLocale = 'en';

	exports["default"] = src$core$$["default"];

	//# sourceMappingURL=main.js.map

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/*
	Copyright (c) 2014, Yahoo! Inc. All rights reserved.
	Copyrights licensed under the New BSD License.
	See the accompanying LICENSE file for terms.
	*/

	/* jslint esnext: true */

	"use strict";
	var src$utils$$ = __webpack_require__(8), src$es5$$ = __webpack_require__(9), src$compiler$$ = __webpack_require__(10), intl$messageformat$parser$$ = __webpack_require__(11);
	exports["default"] = MessageFormat;

	// -- MessageFormat --------------------------------------------------------

	function MessageFormat(message, locales, formats) {
	    // Parse string messages into an AST.
	    var ast = typeof message === 'string' ?
	            MessageFormat.__parse(message) : message;

	    if (!(ast && ast.type === 'messageFormatPattern')) {
	        throw new TypeError('A message must be provided as a String or AST.');
	    }

	    // Creates a new object with the specified `formats` merged with the default
	    // formats.
	    formats = this._mergeFormats(MessageFormat.formats, formats);

	    // Defined first because it's used to build the format pattern.
	    src$es5$$.defineProperty(this, '_locale',  {value: this._resolveLocale(locales)});

	    // Compile the `ast` to a pattern that is highly optimized for repeated
	    // `format()` invocations. **Note:** This passes the `locales` set provided
	    // to the constructor instead of just the resolved locale.
	    var pluralFn = this._findPluralRuleFunction(this._locale);
	    var pattern  = this._compilePattern(ast, locales, formats, pluralFn);

	    // "Bind" `format()` method to `this` so it can be passed by reference like
	    // the other `Intl` APIs.
	    var messageFormat = this;
	    this.format = function (values) {
	        return messageFormat._format(pattern, values);
	    };
	}

	// Default format options used as the prototype of the `formats` provided to the
	// constructor. These are used when constructing the internal Intl.NumberFormat
	// and Intl.DateTimeFormat instances.
	src$es5$$.defineProperty(MessageFormat, 'formats', {
	    enumerable: true,

	    value: {
	        number: {
	            'currency': {
	                style: 'currency'
	            },

	            'percent': {
	                style: 'percent'
	            }
	        },

	        date: {
	            'short': {
	                month: 'numeric',
	                day  : 'numeric',
	                year : '2-digit'
	            },

	            'medium': {
	                month: 'short',
	                day  : 'numeric',
	                year : 'numeric'
	            },

	            'long': {
	                month: 'long',
	                day  : 'numeric',
	                year : 'numeric'
	            },

	            'full': {
	                weekday: 'long',
	                month  : 'long',
	                day    : 'numeric',
	                year   : 'numeric'
	            }
	        },

	        time: {
	            'short': {
	                hour  : 'numeric',
	                minute: 'numeric'
	            },

	            'medium':  {
	                hour  : 'numeric',
	                minute: 'numeric',
	                second: 'numeric'
	            },

	            'long': {
	                hour        : 'numeric',
	                minute      : 'numeric',
	                second      : 'numeric',
	                timeZoneName: 'short'
	            },

	            'full': {
	                hour        : 'numeric',
	                minute      : 'numeric',
	                second      : 'numeric',
	                timeZoneName: 'short'
	            }
	        }
	    }
	});

	// Define internal private properties for dealing with locale data.
	src$es5$$.defineProperty(MessageFormat, '__localeData__', {value: src$es5$$.objCreate(null)});
	src$es5$$.defineProperty(MessageFormat, '__addLocaleData', {value: function (data) {
	    if (!(data && data.locale)) {
	        throw new Error(
	            'Locale data provided to IntlMessageFormat is missing a ' +
	            '`locale` property'
	        );
	    }

	    MessageFormat.__localeData__[data.locale.toLowerCase()] = data;
	}});

	// Defines `__parse()` static method as an exposed private.
	src$es5$$.defineProperty(MessageFormat, '__parse', {value: intl$messageformat$parser$$["default"].parse});

	// Define public `defaultLocale` property which defaults to English, but can be
	// set by the developer.
	src$es5$$.defineProperty(MessageFormat, 'defaultLocale', {
	    enumerable: true,
	    writable  : true,
	    value     : undefined
	});

	MessageFormat.prototype.resolvedOptions = function () {
	    // TODO: Provide anything else?
	    return {
	        locale: this._locale
	    };
	};

	MessageFormat.prototype._compilePattern = function (ast, locales, formats, pluralFn) {
	    var compiler = new src$compiler$$["default"](locales, formats, pluralFn);
	    return compiler.compile(ast);
	};

	MessageFormat.prototype._findPluralRuleFunction = function (locale) {
	    var localeData = MessageFormat.__localeData__;
	    var data       = localeData[locale.toLowerCase()];

	    // The locale data is de-duplicated, so we have to traverse the locale's
	    // hierarchy until we find a `pluralRuleFunction` to return.
	    while (data) {
	        if (data.pluralRuleFunction) {
	            return data.pluralRuleFunction;
	        }

	        data = data.parentLocale && localeData[data.parentLocale.toLowerCase()];
	    }

	    throw new Error(
	        'Locale data added to IntlMessageFormat is missing a ' +
	        '`pluralRuleFunction` for :' + locale
	    );
	};

	MessageFormat.prototype._format = function (pattern, values) {
	    var result = '',
	        i, len, part, id, value;

	    for (i = 0, len = pattern.length; i < len; i += 1) {
	        part = pattern[i];

	        // Exist early for string parts.
	        if (typeof part === 'string') {
	            result += part;
	            continue;
	        }

	        id = part.id;

	        // Enforce that all required values are provided by the caller.
	        if (!(values && src$utils$$.hop.call(values, id))) {
	            throw new Error('A value must be provided for: ' + id);
	        }

	        value = values[id];

	        // Recursively format plural and select parts' option — which can be a
	        // nested pattern structure. The choosing of the option to use is
	        // abstracted-by and delegated-to the part helper object.
	        if (part.options) {
	            result += this._format(part.getOption(value), values);
	        } else {
	            result += part.format(value);
	        }
	    }

	    return result;
	};

	MessageFormat.prototype._mergeFormats = function (defaults, formats) {
	    var mergedFormats = {},
	        type, mergedType;

	    for (type in defaults) {
	        if (!src$utils$$.hop.call(defaults, type)) { continue; }

	        mergedFormats[type] = mergedType = src$es5$$.objCreate(defaults[type]);

	        if (formats && src$utils$$.hop.call(formats, type)) {
	            src$utils$$.extend(mergedType, formats[type]);
	        }
	    }

	    return mergedFormats;
	};

	MessageFormat.prototype._resolveLocale = function (locales) {
	    if (typeof locales === 'string') {
	        locales = [locales];
	    }

	    // Create a copy of the array so we can push on the default locale.
	    locales = (locales || []).concat(MessageFormat.defaultLocale);

	    var localeData = MessageFormat.__localeData__;
	    var i, len, localeParts, data;

	    // Using the set of locales + the default locale, we look for the first one
	    // which that has been registered. When data does not exist for a locale, we
	    // traverse its ancestors to find something that's been registered within
	    // its hierarchy of locales. Since we lack the proper `parentLocale` data
	    // here, we must take a naive approach to traversal.
	    for (i = 0, len = locales.length; i < len; i += 1) {
	        localeParts = locales[i].toLowerCase().split('-');

	        while (localeParts.length) {
	            data = localeData[localeParts.join('-')];
	            if (data) {
	                // Return the normalized locale string; e.g., we return "en-US",
	                // instead of "en-us".
	                return data.locale;
	            }

	            localeParts.pop();
	        }
	    }

	    var defaultLocale = locales.pop();
	    throw new Error(
	        'No locale data has been added to IntlMessageFormat for: ' +
	        locales.join(', ') + ', or the default locale: ' + defaultLocale
	    );
	};

	//# sourceMappingURL=core.js.map

/***/ },
/* 8 */
/***/ function(module, exports) {

	/*
	Copyright (c) 2014, Yahoo! Inc. All rights reserved.
	Copyrights licensed under the New BSD License.
	See the accompanying LICENSE file for terms.
	*/

	/* jslint esnext: true */

	"use strict";
	exports.extend = extend;
	var hop = Object.prototype.hasOwnProperty;

	function extend(obj) {
	    var sources = Array.prototype.slice.call(arguments, 1),
	        i, len, source, key;

	    for (i = 0, len = sources.length; i < len; i += 1) {
	        source = sources[i];
	        if (!source) { continue; }

	        for (key in source) {
	            if (hop.call(source, key)) {
	                obj[key] = source[key];
	            }
	        }
	    }

	    return obj;
	}
	exports.hop = hop;

	//# sourceMappingURL=utils.js.map

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/*
	Copyright (c) 2014, Yahoo! Inc. All rights reserved.
	Copyrights licensed under the New BSD License.
	See the accompanying LICENSE file for terms.
	*/

	/* jslint esnext: true */

	"use strict";
	var src$utils$$ = __webpack_require__(8);

	// Purposely using the same implementation as the Intl.js `Intl` polyfill.
	// Copyright 2013 Andy Earnshaw, MIT License

	var realDefineProp = (function () {
	    try { return !!Object.defineProperty({}, 'a', {}); }
	    catch (e) { return false; }
	})();

	var es3 = !realDefineProp && !Object.prototype.__defineGetter__;

	var defineProperty = realDefineProp ? Object.defineProperty :
	        function (obj, name, desc) {

	    if ('get' in desc && obj.__defineGetter__) {
	        obj.__defineGetter__(name, desc.get);
	    } else if (!src$utils$$.hop.call(obj, name) || 'value' in desc) {
	        obj[name] = desc.value;
	    }
	};

	var objCreate = Object.create || function (proto, props) {
	    var obj, k;

	    function F() {}
	    F.prototype = proto;
	    obj = new F();

	    for (k in props) {
	        if (src$utils$$.hop.call(props, k)) {
	            defineProperty(obj, k, props[k]);
	        }
	    }

	    return obj;
	};
	exports.defineProperty = defineProperty, exports.objCreate = objCreate;

	//# sourceMappingURL=es5.js.map

/***/ },
/* 10 */
/***/ function(module, exports) {

	/*
	Copyright (c) 2014, Yahoo! Inc. All rights reserved.
	Copyrights licensed under the New BSD License.
	See the accompanying LICENSE file for terms.
	*/

	/* jslint esnext: true */

	"use strict";
	exports["default"] = Compiler;

	function Compiler(locales, formats, pluralFn) {
	    this.locales  = locales;
	    this.formats  = formats;
	    this.pluralFn = pluralFn;
	}

	Compiler.prototype.compile = function (ast) {
	    this.pluralStack        = [];
	    this.currentPlural      = null;
	    this.pluralNumberFormat = null;

	    return this.compileMessage(ast);
	};

	Compiler.prototype.compileMessage = function (ast) {
	    if (!(ast && ast.type === 'messageFormatPattern')) {
	        throw new Error('Message AST is not of type: "messageFormatPattern"');
	    }

	    var elements = ast.elements,
	        pattern  = [];

	    var i, len, element;

	    for (i = 0, len = elements.length; i < len; i += 1) {
	        element = elements[i];

	        switch (element.type) {
	            case 'messageTextElement':
	                pattern.push(this.compileMessageText(element));
	                break;

	            case 'argumentElement':
	                pattern.push(this.compileArgument(element));
	                break;

	            default:
	                throw new Error('Message element does not have a valid type');
	        }
	    }

	    return pattern;
	};

	Compiler.prototype.compileMessageText = function (element) {
	    // When this `element` is part of plural sub-pattern and its value contains
	    // an unescaped '#', use a `PluralOffsetString` helper to properly output
	    // the number with the correct offset in the string.
	    if (this.currentPlural && /(^|[^\\])#/g.test(element.value)) {
	        // Create a cache a NumberFormat instance that can be reused for any
	        // PluralOffsetString instance in this message.
	        if (!this.pluralNumberFormat) {
	            this.pluralNumberFormat = new Intl.NumberFormat(this.locales);
	        }

	        return new PluralOffsetString(
	                this.currentPlural.id,
	                this.currentPlural.format.offset,
	                this.pluralNumberFormat,
	                element.value);
	    }

	    // Unescape the escaped '#'s in the message text.
	    return element.value.replace(/\\#/g, '#');
	};

	Compiler.prototype.compileArgument = function (element) {
	    var format = element.format;

	    if (!format) {
	        return new StringFormat(element.id);
	    }

	    var formats  = this.formats,
	        locales  = this.locales,
	        pluralFn = this.pluralFn,
	        options;

	    switch (format.type) {
	        case 'numberFormat':
	            options = formats.number[format.style];
	            return {
	                id    : element.id,
	                format: new Intl.NumberFormat(locales, options).format
	            };

	        case 'dateFormat':
	            options = formats.date[format.style];
	            return {
	                id    : element.id,
	                format: new Intl.DateTimeFormat(locales, options).format
	            };

	        case 'timeFormat':
	            options = formats.time[format.style];
	            return {
	                id    : element.id,
	                format: new Intl.DateTimeFormat(locales, options).format
	            };

	        case 'pluralFormat':
	            options = this.compileOptions(element);
	            return new PluralFormat(
	                element.id, format.ordinal, format.offset, options, pluralFn
	            );

	        case 'selectFormat':
	            options = this.compileOptions(element);
	            return new SelectFormat(element.id, options);

	        default:
	            throw new Error('Message element does not have a valid format type');
	    }
	};

	Compiler.prototype.compileOptions = function (element) {
	    var format      = element.format,
	        options     = format.options,
	        optionsHash = {};

	    // Save the current plural element, if any, then set it to a new value when
	    // compiling the options sub-patterns. This conforms the spec's algorithm
	    // for handling `"#"` syntax in message text.
	    this.pluralStack.push(this.currentPlural);
	    this.currentPlural = format.type === 'pluralFormat' ? element : null;

	    var i, len, option;

	    for (i = 0, len = options.length; i < len; i += 1) {
	        option = options[i];

	        // Compile the sub-pattern and save it under the options's selector.
	        optionsHash[option.selector] = this.compileMessage(option.value);
	    }

	    // Pop the plural stack to put back the original current plural value.
	    this.currentPlural = this.pluralStack.pop();

	    return optionsHash;
	};

	// -- Compiler Helper Classes --------------------------------------------------

	function StringFormat(id) {
	    this.id = id;
	}

	StringFormat.prototype.format = function (value) {
	    if (!value) {
	        return '';
	    }

	    return typeof value === 'string' ? value : String(value);
	};

	function PluralFormat(id, useOrdinal, offset, options, pluralFn) {
	    this.id         = id;
	    this.useOrdinal = useOrdinal;
	    this.offset     = offset;
	    this.options    = options;
	    this.pluralFn   = pluralFn;
	}

	PluralFormat.prototype.getOption = function (value) {
	    var options = this.options;

	    var option = options['=' + value] ||
	            options[this.pluralFn(value - this.offset, this.useOrdinal)];

	    return option || options.other;
	};

	function PluralOffsetString(id, offset, numberFormat, string) {
	    this.id           = id;
	    this.offset       = offset;
	    this.numberFormat = numberFormat;
	    this.string       = string;
	}

	PluralOffsetString.prototype.format = function (value) {
	    var number = this.numberFormat.format(value - this.offset);

	    return this.string
	            .replace(/(^|[^\\])#/g, '$1' + number)
	            .replace(/\\#/g, '#');
	};

	function SelectFormat(id, options) {
	    this.id      = id;
	    this.options = options;
	}

	SelectFormat.prototype.getOption = function (value) {
	    var options = this.options;
	    return options[value] || options.other;
	};

	//# sourceMappingURL=compiler.js.map

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports = module.exports = __webpack_require__(12)['default'];
	exports['default'] = exports;


/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";

	exports["default"] = (function() {
	  /*
	   * Generated by PEG.js 0.8.0.
	   *
	   * http://pegjs.majda.cz/
	   */

	  function peg$subclass(child, parent) {
	    function ctor() { this.constructor = child; }
	    ctor.prototype = parent.prototype;
	    child.prototype = new ctor();
	  }

	  function SyntaxError(message, expected, found, offset, line, column) {
	    this.message  = message;
	    this.expected = expected;
	    this.found    = found;
	    this.offset   = offset;
	    this.line     = line;
	    this.column   = column;

	    this.name     = "SyntaxError";
	  }

	  peg$subclass(SyntaxError, Error);

	  function parse(input) {
	    var options = arguments.length > 1 ? arguments[1] : {},

	        peg$FAILED = {},

	        peg$startRuleFunctions = { start: peg$parsestart },
	        peg$startRuleFunction  = peg$parsestart,

	        peg$c0 = [],
	        peg$c1 = function(elements) {
	                return {
	                    type    : 'messageFormatPattern',
	                    elements: elements
	                };
	            },
	        peg$c2 = peg$FAILED,
	        peg$c3 = function(text) {
	                var string = '',
	                    i, j, outerLen, inner, innerLen;

	                for (i = 0, outerLen = text.length; i < outerLen; i += 1) {
	                    inner = text[i];

	                    for (j = 0, innerLen = inner.length; j < innerLen; j += 1) {
	                        string += inner[j];
	                    }
	                }

	                return string;
	            },
	        peg$c4 = function(messageText) {
	                return {
	                    type : 'messageTextElement',
	                    value: messageText
	                };
	            },
	        peg$c5 = /^[^ \t\n\r,.+={}#]/,
	        peg$c6 = { type: "class", value: "[^ \\t\\n\\r,.+={}#]", description: "[^ \\t\\n\\r,.+={}#]" },
	        peg$c7 = "{",
	        peg$c8 = { type: "literal", value: "{", description: "\"{\"" },
	        peg$c9 = null,
	        peg$c10 = ",",
	        peg$c11 = { type: "literal", value: ",", description: "\",\"" },
	        peg$c12 = "}",
	        peg$c13 = { type: "literal", value: "}", description: "\"}\"" },
	        peg$c14 = function(id, format) {
	                return {
	                    type  : 'argumentElement',
	                    id    : id,
	                    format: format && format[2]
	                };
	            },
	        peg$c15 = "number",
	        peg$c16 = { type: "literal", value: "number", description: "\"number\"" },
	        peg$c17 = "date",
	        peg$c18 = { type: "literal", value: "date", description: "\"date\"" },
	        peg$c19 = "time",
	        peg$c20 = { type: "literal", value: "time", description: "\"time\"" },
	        peg$c21 = function(type, style) {
	                return {
	                    type : type + 'Format',
	                    style: style && style[2]
	                };
	            },
	        peg$c22 = "plural",
	        peg$c23 = { type: "literal", value: "plural", description: "\"plural\"" },
	        peg$c24 = function(pluralStyle) {
	                return {
	                    type   : pluralStyle.type,
	                    ordinal: false,
	                    offset : pluralStyle.offset || 0,
	                    options: pluralStyle.options
	                };
	            },
	        peg$c25 = "selectordinal",
	        peg$c26 = { type: "literal", value: "selectordinal", description: "\"selectordinal\"" },
	        peg$c27 = function(pluralStyle) {
	                return {
	                    type   : pluralStyle.type,
	                    ordinal: true,
	                    offset : pluralStyle.offset || 0,
	                    options: pluralStyle.options
	                }
	            },
	        peg$c28 = "select",
	        peg$c29 = { type: "literal", value: "select", description: "\"select\"" },
	        peg$c30 = function(options) {
	                return {
	                    type   : 'selectFormat',
	                    options: options
	                };
	            },
	        peg$c31 = "=",
	        peg$c32 = { type: "literal", value: "=", description: "\"=\"" },
	        peg$c33 = function(selector, pattern) {
	                return {
	                    type    : 'optionalFormatPattern',
	                    selector: selector,
	                    value   : pattern
	                };
	            },
	        peg$c34 = "offset:",
	        peg$c35 = { type: "literal", value: "offset:", description: "\"offset:\"" },
	        peg$c36 = function(number) {
	                return number;
	            },
	        peg$c37 = function(offset, options) {
	                return {
	                    type   : 'pluralFormat',
	                    offset : offset,
	                    options: options
	                };
	            },
	        peg$c38 = { type: "other", description: "whitespace" },
	        peg$c39 = /^[ \t\n\r]/,
	        peg$c40 = { type: "class", value: "[ \\t\\n\\r]", description: "[ \\t\\n\\r]" },
	        peg$c41 = { type: "other", description: "optionalWhitespace" },
	        peg$c42 = /^[0-9]/,
	        peg$c43 = { type: "class", value: "[0-9]", description: "[0-9]" },
	        peg$c44 = /^[0-9a-f]/i,
	        peg$c45 = { type: "class", value: "[0-9a-f]i", description: "[0-9a-f]i" },
	        peg$c46 = "0",
	        peg$c47 = { type: "literal", value: "0", description: "\"0\"" },
	        peg$c48 = /^[1-9]/,
	        peg$c49 = { type: "class", value: "[1-9]", description: "[1-9]" },
	        peg$c50 = function(digits) {
	            return parseInt(digits, 10);
	        },
	        peg$c51 = /^[^{}\\\0-\x1F \t\n\r]/,
	        peg$c52 = { type: "class", value: "[^{}\\\\\\0-\\x1F \\t\\n\\r]", description: "[^{}\\\\\\0-\\x1F \\t\\n\\r]" },
	        peg$c53 = "\\\\",
	        peg$c54 = { type: "literal", value: "\\\\", description: "\"\\\\\\\\\"" },
	        peg$c55 = function() { return '\\'; },
	        peg$c56 = "\\#",
	        peg$c57 = { type: "literal", value: "\\#", description: "\"\\\\#\"" },
	        peg$c58 = function() { return '\\#'; },
	        peg$c59 = "\\{",
	        peg$c60 = { type: "literal", value: "\\{", description: "\"\\\\{\"" },
	        peg$c61 = function() { return '\u007B'; },
	        peg$c62 = "\\}",
	        peg$c63 = { type: "literal", value: "\\}", description: "\"\\\\}\"" },
	        peg$c64 = function() { return '\u007D'; },
	        peg$c65 = "\\u",
	        peg$c66 = { type: "literal", value: "\\u", description: "\"\\\\u\"" },
	        peg$c67 = function(digits) {
	                return String.fromCharCode(parseInt(digits, 16));
	            },
	        peg$c68 = function(chars) { return chars.join(''); },

	        peg$currPos          = 0,
	        peg$reportedPos      = 0,
	        peg$cachedPos        = 0,
	        peg$cachedPosDetails = { line: 1, column: 1, seenCR: false },
	        peg$maxFailPos       = 0,
	        peg$maxFailExpected  = [],
	        peg$silentFails      = 0,

	        peg$result;

	    if ("startRule" in options) {
	      if (!(options.startRule in peg$startRuleFunctions)) {
	        throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
	      }

	      peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
	    }

	    function text() {
	      return input.substring(peg$reportedPos, peg$currPos);
	    }

	    function offset() {
	      return peg$reportedPos;
	    }

	    function line() {
	      return peg$computePosDetails(peg$reportedPos).line;
	    }

	    function column() {
	      return peg$computePosDetails(peg$reportedPos).column;
	    }

	    function expected(description) {
	      throw peg$buildException(
	        null,
	        [{ type: "other", description: description }],
	        peg$reportedPos
	      );
	    }

	    function error(message) {
	      throw peg$buildException(message, null, peg$reportedPos);
	    }

	    function peg$computePosDetails(pos) {
	      function advance(details, startPos, endPos) {
	        var p, ch;

	        for (p = startPos; p < endPos; p++) {
	          ch = input.charAt(p);
	          if (ch === "\n") {
	            if (!details.seenCR) { details.line++; }
	            details.column = 1;
	            details.seenCR = false;
	          } else if (ch === "\r" || ch === "\u2028" || ch === "\u2029") {
	            details.line++;
	            details.column = 1;
	            details.seenCR = true;
	          } else {
	            details.column++;
	            details.seenCR = false;
	          }
	        }
	      }

	      if (peg$cachedPos !== pos) {
	        if (peg$cachedPos > pos) {
	          peg$cachedPos = 0;
	          peg$cachedPosDetails = { line: 1, column: 1, seenCR: false };
	        }
	        advance(peg$cachedPosDetails, peg$cachedPos, pos);
	        peg$cachedPos = pos;
	      }

	      return peg$cachedPosDetails;
	    }

	    function peg$fail(expected) {
	      if (peg$currPos < peg$maxFailPos) { return; }

	      if (peg$currPos > peg$maxFailPos) {
	        peg$maxFailPos = peg$currPos;
	        peg$maxFailExpected = [];
	      }

	      peg$maxFailExpected.push(expected);
	    }

	    function peg$buildException(message, expected, pos) {
	      function cleanupExpected(expected) {
	        var i = 1;

	        expected.sort(function(a, b) {
	          if (a.description < b.description) {
	            return -1;
	          } else if (a.description > b.description) {
	            return 1;
	          } else {
	            return 0;
	          }
	        });

	        while (i < expected.length) {
	          if (expected[i - 1] === expected[i]) {
	            expected.splice(i, 1);
	          } else {
	            i++;
	          }
	        }
	      }

	      function buildMessage(expected, found) {
	        function stringEscape(s) {
	          function hex(ch) { return ch.charCodeAt(0).toString(16).toUpperCase(); }

	          return s
	            .replace(/\\/g,   '\\\\')
	            .replace(/"/g,    '\\"')
	            .replace(/\x08/g, '\\b')
	            .replace(/\t/g,   '\\t')
	            .replace(/\n/g,   '\\n')
	            .replace(/\f/g,   '\\f')
	            .replace(/\r/g,   '\\r')
	            .replace(/[\x00-\x07\x0B\x0E\x0F]/g, function(ch) { return '\\x0' + hex(ch); })
	            .replace(/[\x10-\x1F\x80-\xFF]/g,    function(ch) { return '\\x'  + hex(ch); })
	            .replace(/[\u0180-\u0FFF]/g,         function(ch) { return '\\u0' + hex(ch); })
	            .replace(/[\u1080-\uFFFF]/g,         function(ch) { return '\\u'  + hex(ch); });
	        }

	        var expectedDescs = new Array(expected.length),
	            expectedDesc, foundDesc, i;

	        for (i = 0; i < expected.length; i++) {
	          expectedDescs[i] = expected[i].description;
	        }

	        expectedDesc = expected.length > 1
	          ? expectedDescs.slice(0, -1).join(", ")
	              + " or "
	              + expectedDescs[expected.length - 1]
	          : expectedDescs[0];

	        foundDesc = found ? "\"" + stringEscape(found) + "\"" : "end of input";

	        return "Expected " + expectedDesc + " but " + foundDesc + " found.";
	      }

	      var posDetails = peg$computePosDetails(pos),
	          found      = pos < input.length ? input.charAt(pos) : null;

	      if (expected !== null) {
	        cleanupExpected(expected);
	      }

	      return new SyntaxError(
	        message !== null ? message : buildMessage(expected, found),
	        expected,
	        found,
	        pos,
	        posDetails.line,
	        posDetails.column
	      );
	    }

	    function peg$parsestart() {
	      var s0;

	      s0 = peg$parsemessageFormatPattern();

	      return s0;
	    }

	    function peg$parsemessageFormatPattern() {
	      var s0, s1, s2;

	      s0 = peg$currPos;
	      s1 = [];
	      s2 = peg$parsemessageFormatElement();
	      while (s2 !== peg$FAILED) {
	        s1.push(s2);
	        s2 = peg$parsemessageFormatElement();
	      }
	      if (s1 !== peg$FAILED) {
	        peg$reportedPos = s0;
	        s1 = peg$c1(s1);
	      }
	      s0 = s1;

	      return s0;
	    }

	    function peg$parsemessageFormatElement() {
	      var s0;

	      s0 = peg$parsemessageTextElement();
	      if (s0 === peg$FAILED) {
	        s0 = peg$parseargumentElement();
	      }

	      return s0;
	    }

	    function peg$parsemessageText() {
	      var s0, s1, s2, s3, s4, s5;

	      s0 = peg$currPos;
	      s1 = [];
	      s2 = peg$currPos;
	      s3 = peg$parse_();
	      if (s3 !== peg$FAILED) {
	        s4 = peg$parsechars();
	        if (s4 !== peg$FAILED) {
	          s5 = peg$parse_();
	          if (s5 !== peg$FAILED) {
	            s3 = [s3, s4, s5];
	            s2 = s3;
	          } else {
	            peg$currPos = s2;
	            s2 = peg$c2;
	          }
	        } else {
	          peg$currPos = s2;
	          s2 = peg$c2;
	        }
	      } else {
	        peg$currPos = s2;
	        s2 = peg$c2;
	      }
	      if (s2 !== peg$FAILED) {
	        while (s2 !== peg$FAILED) {
	          s1.push(s2);
	          s2 = peg$currPos;
	          s3 = peg$parse_();
	          if (s3 !== peg$FAILED) {
	            s4 = peg$parsechars();
	            if (s4 !== peg$FAILED) {
	              s5 = peg$parse_();
	              if (s5 !== peg$FAILED) {
	                s3 = [s3, s4, s5];
	                s2 = s3;
	              } else {
	                peg$currPos = s2;
	                s2 = peg$c2;
	              }
	            } else {
	              peg$currPos = s2;
	              s2 = peg$c2;
	            }
	          } else {
	            peg$currPos = s2;
	            s2 = peg$c2;
	          }
	        }
	      } else {
	        s1 = peg$c2;
	      }
	      if (s1 !== peg$FAILED) {
	        peg$reportedPos = s0;
	        s1 = peg$c3(s1);
	      }
	      s0 = s1;
	      if (s0 === peg$FAILED) {
	        s0 = peg$currPos;
	        s1 = peg$parsews();
	        if (s1 !== peg$FAILED) {
	          s1 = input.substring(s0, peg$currPos);
	        }
	        s0 = s1;
	      }

	      return s0;
	    }

	    function peg$parsemessageTextElement() {
	      var s0, s1;

	      s0 = peg$currPos;
	      s1 = peg$parsemessageText();
	      if (s1 !== peg$FAILED) {
	        peg$reportedPos = s0;
	        s1 = peg$c4(s1);
	      }
	      s0 = s1;

	      return s0;
	    }

	    function peg$parseargument() {
	      var s0, s1, s2;

	      s0 = peg$parsenumber();
	      if (s0 === peg$FAILED) {
	        s0 = peg$currPos;
	        s1 = [];
	        if (peg$c5.test(input.charAt(peg$currPos))) {
	          s2 = input.charAt(peg$currPos);
	          peg$currPos++;
	        } else {
	          s2 = peg$FAILED;
	          if (peg$silentFails === 0) { peg$fail(peg$c6); }
	        }
	        if (s2 !== peg$FAILED) {
	          while (s2 !== peg$FAILED) {
	            s1.push(s2);
	            if (peg$c5.test(input.charAt(peg$currPos))) {
	              s2 = input.charAt(peg$currPos);
	              peg$currPos++;
	            } else {
	              s2 = peg$FAILED;
	              if (peg$silentFails === 0) { peg$fail(peg$c6); }
	            }
	          }
	        } else {
	          s1 = peg$c2;
	        }
	        if (s1 !== peg$FAILED) {
	          s1 = input.substring(s0, peg$currPos);
	        }
	        s0 = s1;
	      }

	      return s0;
	    }

	    function peg$parseargumentElement() {
	      var s0, s1, s2, s3, s4, s5, s6, s7, s8;

	      s0 = peg$currPos;
	      if (input.charCodeAt(peg$currPos) === 123) {
	        s1 = peg$c7;
	        peg$currPos++;
	      } else {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c8); }
	      }
	      if (s1 !== peg$FAILED) {
	        s2 = peg$parse_();
	        if (s2 !== peg$FAILED) {
	          s3 = peg$parseargument();
	          if (s3 !== peg$FAILED) {
	            s4 = peg$parse_();
	            if (s4 !== peg$FAILED) {
	              s5 = peg$currPos;
	              if (input.charCodeAt(peg$currPos) === 44) {
	                s6 = peg$c10;
	                peg$currPos++;
	              } else {
	                s6 = peg$FAILED;
	                if (peg$silentFails === 0) { peg$fail(peg$c11); }
	              }
	              if (s6 !== peg$FAILED) {
	                s7 = peg$parse_();
	                if (s7 !== peg$FAILED) {
	                  s8 = peg$parseelementFormat();
	                  if (s8 !== peg$FAILED) {
	                    s6 = [s6, s7, s8];
	                    s5 = s6;
	                  } else {
	                    peg$currPos = s5;
	                    s5 = peg$c2;
	                  }
	                } else {
	                  peg$currPos = s5;
	                  s5 = peg$c2;
	                }
	              } else {
	                peg$currPos = s5;
	                s5 = peg$c2;
	              }
	              if (s5 === peg$FAILED) {
	                s5 = peg$c9;
	              }
	              if (s5 !== peg$FAILED) {
	                s6 = peg$parse_();
	                if (s6 !== peg$FAILED) {
	                  if (input.charCodeAt(peg$currPos) === 125) {
	                    s7 = peg$c12;
	                    peg$currPos++;
	                  } else {
	                    s7 = peg$FAILED;
	                    if (peg$silentFails === 0) { peg$fail(peg$c13); }
	                  }
	                  if (s7 !== peg$FAILED) {
	                    peg$reportedPos = s0;
	                    s1 = peg$c14(s3, s5);
	                    s0 = s1;
	                  } else {
	                    peg$currPos = s0;
	                    s0 = peg$c2;
	                  }
	                } else {
	                  peg$currPos = s0;
	                  s0 = peg$c2;
	                }
	              } else {
	                peg$currPos = s0;
	                s0 = peg$c2;
	              }
	            } else {
	              peg$currPos = s0;
	              s0 = peg$c2;
	            }
	          } else {
	            peg$currPos = s0;
	            s0 = peg$c2;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$c2;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$c2;
	      }

	      return s0;
	    }

	    function peg$parseelementFormat() {
	      var s0;

	      s0 = peg$parsesimpleFormat();
	      if (s0 === peg$FAILED) {
	        s0 = peg$parsepluralFormat();
	        if (s0 === peg$FAILED) {
	          s0 = peg$parseselectOrdinalFormat();
	          if (s0 === peg$FAILED) {
	            s0 = peg$parseselectFormat();
	          }
	        }
	      }

	      return s0;
	    }

	    function peg$parsesimpleFormat() {
	      var s0, s1, s2, s3, s4, s5, s6;

	      s0 = peg$currPos;
	      if (input.substr(peg$currPos, 6) === peg$c15) {
	        s1 = peg$c15;
	        peg$currPos += 6;
	      } else {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c16); }
	      }
	      if (s1 === peg$FAILED) {
	        if (input.substr(peg$currPos, 4) === peg$c17) {
	          s1 = peg$c17;
	          peg$currPos += 4;
	        } else {
	          s1 = peg$FAILED;
	          if (peg$silentFails === 0) { peg$fail(peg$c18); }
	        }
	        if (s1 === peg$FAILED) {
	          if (input.substr(peg$currPos, 4) === peg$c19) {
	            s1 = peg$c19;
	            peg$currPos += 4;
	          } else {
	            s1 = peg$FAILED;
	            if (peg$silentFails === 0) { peg$fail(peg$c20); }
	          }
	        }
	      }
	      if (s1 !== peg$FAILED) {
	        s2 = peg$parse_();
	        if (s2 !== peg$FAILED) {
	          s3 = peg$currPos;
	          if (input.charCodeAt(peg$currPos) === 44) {
	            s4 = peg$c10;
	            peg$currPos++;
	          } else {
	            s4 = peg$FAILED;
	            if (peg$silentFails === 0) { peg$fail(peg$c11); }
	          }
	          if (s4 !== peg$FAILED) {
	            s5 = peg$parse_();
	            if (s5 !== peg$FAILED) {
	              s6 = peg$parsechars();
	              if (s6 !== peg$FAILED) {
	                s4 = [s4, s5, s6];
	                s3 = s4;
	              } else {
	                peg$currPos = s3;
	                s3 = peg$c2;
	              }
	            } else {
	              peg$currPos = s3;
	              s3 = peg$c2;
	            }
	          } else {
	            peg$currPos = s3;
	            s3 = peg$c2;
	          }
	          if (s3 === peg$FAILED) {
	            s3 = peg$c9;
	          }
	          if (s3 !== peg$FAILED) {
	            peg$reportedPos = s0;
	            s1 = peg$c21(s1, s3);
	            s0 = s1;
	          } else {
	            peg$currPos = s0;
	            s0 = peg$c2;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$c2;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$c2;
	      }

	      return s0;
	    }

	    function peg$parsepluralFormat() {
	      var s0, s1, s2, s3, s4, s5;

	      s0 = peg$currPos;
	      if (input.substr(peg$currPos, 6) === peg$c22) {
	        s1 = peg$c22;
	        peg$currPos += 6;
	      } else {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c23); }
	      }
	      if (s1 !== peg$FAILED) {
	        s2 = peg$parse_();
	        if (s2 !== peg$FAILED) {
	          if (input.charCodeAt(peg$currPos) === 44) {
	            s3 = peg$c10;
	            peg$currPos++;
	          } else {
	            s3 = peg$FAILED;
	            if (peg$silentFails === 0) { peg$fail(peg$c11); }
	          }
	          if (s3 !== peg$FAILED) {
	            s4 = peg$parse_();
	            if (s4 !== peg$FAILED) {
	              s5 = peg$parsepluralStyle();
	              if (s5 !== peg$FAILED) {
	                peg$reportedPos = s0;
	                s1 = peg$c24(s5);
	                s0 = s1;
	              } else {
	                peg$currPos = s0;
	                s0 = peg$c2;
	              }
	            } else {
	              peg$currPos = s0;
	              s0 = peg$c2;
	            }
	          } else {
	            peg$currPos = s0;
	            s0 = peg$c2;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$c2;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$c2;
	      }

	      return s0;
	    }

	    function peg$parseselectOrdinalFormat() {
	      var s0, s1, s2, s3, s4, s5;

	      s0 = peg$currPos;
	      if (input.substr(peg$currPos, 13) === peg$c25) {
	        s1 = peg$c25;
	        peg$currPos += 13;
	      } else {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c26); }
	      }
	      if (s1 !== peg$FAILED) {
	        s2 = peg$parse_();
	        if (s2 !== peg$FAILED) {
	          if (input.charCodeAt(peg$currPos) === 44) {
	            s3 = peg$c10;
	            peg$currPos++;
	          } else {
	            s3 = peg$FAILED;
	            if (peg$silentFails === 0) { peg$fail(peg$c11); }
	          }
	          if (s3 !== peg$FAILED) {
	            s4 = peg$parse_();
	            if (s4 !== peg$FAILED) {
	              s5 = peg$parsepluralStyle();
	              if (s5 !== peg$FAILED) {
	                peg$reportedPos = s0;
	                s1 = peg$c27(s5);
	                s0 = s1;
	              } else {
	                peg$currPos = s0;
	                s0 = peg$c2;
	              }
	            } else {
	              peg$currPos = s0;
	              s0 = peg$c2;
	            }
	          } else {
	            peg$currPos = s0;
	            s0 = peg$c2;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$c2;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$c2;
	      }

	      return s0;
	    }

	    function peg$parseselectFormat() {
	      var s0, s1, s2, s3, s4, s5, s6;

	      s0 = peg$currPos;
	      if (input.substr(peg$currPos, 6) === peg$c28) {
	        s1 = peg$c28;
	        peg$currPos += 6;
	      } else {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c29); }
	      }
	      if (s1 !== peg$FAILED) {
	        s2 = peg$parse_();
	        if (s2 !== peg$FAILED) {
	          if (input.charCodeAt(peg$currPos) === 44) {
	            s3 = peg$c10;
	            peg$currPos++;
	          } else {
	            s3 = peg$FAILED;
	            if (peg$silentFails === 0) { peg$fail(peg$c11); }
	          }
	          if (s3 !== peg$FAILED) {
	            s4 = peg$parse_();
	            if (s4 !== peg$FAILED) {
	              s5 = [];
	              s6 = peg$parseoptionalFormatPattern();
	              if (s6 !== peg$FAILED) {
	                while (s6 !== peg$FAILED) {
	                  s5.push(s6);
	                  s6 = peg$parseoptionalFormatPattern();
	                }
	              } else {
	                s5 = peg$c2;
	              }
	              if (s5 !== peg$FAILED) {
	                peg$reportedPos = s0;
	                s1 = peg$c30(s5);
	                s0 = s1;
	              } else {
	                peg$currPos = s0;
	                s0 = peg$c2;
	              }
	            } else {
	              peg$currPos = s0;
	              s0 = peg$c2;
	            }
	          } else {
	            peg$currPos = s0;
	            s0 = peg$c2;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$c2;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$c2;
	      }

	      return s0;
	    }

	    function peg$parseselector() {
	      var s0, s1, s2, s3;

	      s0 = peg$currPos;
	      s1 = peg$currPos;
	      if (input.charCodeAt(peg$currPos) === 61) {
	        s2 = peg$c31;
	        peg$currPos++;
	      } else {
	        s2 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c32); }
	      }
	      if (s2 !== peg$FAILED) {
	        s3 = peg$parsenumber();
	        if (s3 !== peg$FAILED) {
	          s2 = [s2, s3];
	          s1 = s2;
	        } else {
	          peg$currPos = s1;
	          s1 = peg$c2;
	        }
	      } else {
	        peg$currPos = s1;
	        s1 = peg$c2;
	      }
	      if (s1 !== peg$FAILED) {
	        s1 = input.substring(s0, peg$currPos);
	      }
	      s0 = s1;
	      if (s0 === peg$FAILED) {
	        s0 = peg$parsechars();
	      }

	      return s0;
	    }

	    function peg$parseoptionalFormatPattern() {
	      var s0, s1, s2, s3, s4, s5, s6, s7, s8;

	      s0 = peg$currPos;
	      s1 = peg$parse_();
	      if (s1 !== peg$FAILED) {
	        s2 = peg$parseselector();
	        if (s2 !== peg$FAILED) {
	          s3 = peg$parse_();
	          if (s3 !== peg$FAILED) {
	            if (input.charCodeAt(peg$currPos) === 123) {
	              s4 = peg$c7;
	              peg$currPos++;
	            } else {
	              s4 = peg$FAILED;
	              if (peg$silentFails === 0) { peg$fail(peg$c8); }
	            }
	            if (s4 !== peg$FAILED) {
	              s5 = peg$parse_();
	              if (s5 !== peg$FAILED) {
	                s6 = peg$parsemessageFormatPattern();
	                if (s6 !== peg$FAILED) {
	                  s7 = peg$parse_();
	                  if (s7 !== peg$FAILED) {
	                    if (input.charCodeAt(peg$currPos) === 125) {
	                      s8 = peg$c12;
	                      peg$currPos++;
	                    } else {
	                      s8 = peg$FAILED;
	                      if (peg$silentFails === 0) { peg$fail(peg$c13); }
	                    }
	                    if (s8 !== peg$FAILED) {
	                      peg$reportedPos = s0;
	                      s1 = peg$c33(s2, s6);
	                      s0 = s1;
	                    } else {
	                      peg$currPos = s0;
	                      s0 = peg$c2;
	                    }
	                  } else {
	                    peg$currPos = s0;
	                    s0 = peg$c2;
	                  }
	                } else {
	                  peg$currPos = s0;
	                  s0 = peg$c2;
	                }
	              } else {
	                peg$currPos = s0;
	                s0 = peg$c2;
	              }
	            } else {
	              peg$currPos = s0;
	              s0 = peg$c2;
	            }
	          } else {
	            peg$currPos = s0;
	            s0 = peg$c2;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$c2;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$c2;
	      }

	      return s0;
	    }

	    function peg$parseoffset() {
	      var s0, s1, s2, s3;

	      s0 = peg$currPos;
	      if (input.substr(peg$currPos, 7) === peg$c34) {
	        s1 = peg$c34;
	        peg$currPos += 7;
	      } else {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c35); }
	      }
	      if (s1 !== peg$FAILED) {
	        s2 = peg$parse_();
	        if (s2 !== peg$FAILED) {
	          s3 = peg$parsenumber();
	          if (s3 !== peg$FAILED) {
	            peg$reportedPos = s0;
	            s1 = peg$c36(s3);
	            s0 = s1;
	          } else {
	            peg$currPos = s0;
	            s0 = peg$c2;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$c2;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$c2;
	      }

	      return s0;
	    }

	    function peg$parsepluralStyle() {
	      var s0, s1, s2, s3, s4;

	      s0 = peg$currPos;
	      s1 = peg$parseoffset();
	      if (s1 === peg$FAILED) {
	        s1 = peg$c9;
	      }
	      if (s1 !== peg$FAILED) {
	        s2 = peg$parse_();
	        if (s2 !== peg$FAILED) {
	          s3 = [];
	          s4 = peg$parseoptionalFormatPattern();
	          if (s4 !== peg$FAILED) {
	            while (s4 !== peg$FAILED) {
	              s3.push(s4);
	              s4 = peg$parseoptionalFormatPattern();
	            }
	          } else {
	            s3 = peg$c2;
	          }
	          if (s3 !== peg$FAILED) {
	            peg$reportedPos = s0;
	            s1 = peg$c37(s1, s3);
	            s0 = s1;
	          } else {
	            peg$currPos = s0;
	            s0 = peg$c2;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$c2;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$c2;
	      }

	      return s0;
	    }

	    function peg$parsews() {
	      var s0, s1;

	      peg$silentFails++;
	      s0 = [];
	      if (peg$c39.test(input.charAt(peg$currPos))) {
	        s1 = input.charAt(peg$currPos);
	        peg$currPos++;
	      } else {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c40); }
	      }
	      if (s1 !== peg$FAILED) {
	        while (s1 !== peg$FAILED) {
	          s0.push(s1);
	          if (peg$c39.test(input.charAt(peg$currPos))) {
	            s1 = input.charAt(peg$currPos);
	            peg$currPos++;
	          } else {
	            s1 = peg$FAILED;
	            if (peg$silentFails === 0) { peg$fail(peg$c40); }
	          }
	        }
	      } else {
	        s0 = peg$c2;
	      }
	      peg$silentFails--;
	      if (s0 === peg$FAILED) {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c38); }
	      }

	      return s0;
	    }

	    function peg$parse_() {
	      var s0, s1, s2;

	      peg$silentFails++;
	      s0 = peg$currPos;
	      s1 = [];
	      s2 = peg$parsews();
	      while (s2 !== peg$FAILED) {
	        s1.push(s2);
	        s2 = peg$parsews();
	      }
	      if (s1 !== peg$FAILED) {
	        s1 = input.substring(s0, peg$currPos);
	      }
	      s0 = s1;
	      peg$silentFails--;
	      if (s0 === peg$FAILED) {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c41); }
	      }

	      return s0;
	    }

	    function peg$parsedigit() {
	      var s0;

	      if (peg$c42.test(input.charAt(peg$currPos))) {
	        s0 = input.charAt(peg$currPos);
	        peg$currPos++;
	      } else {
	        s0 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c43); }
	      }

	      return s0;
	    }

	    function peg$parsehexDigit() {
	      var s0;

	      if (peg$c44.test(input.charAt(peg$currPos))) {
	        s0 = input.charAt(peg$currPos);
	        peg$currPos++;
	      } else {
	        s0 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c45); }
	      }

	      return s0;
	    }

	    function peg$parsenumber() {
	      var s0, s1, s2, s3, s4, s5;

	      s0 = peg$currPos;
	      if (input.charCodeAt(peg$currPos) === 48) {
	        s1 = peg$c46;
	        peg$currPos++;
	      } else {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c47); }
	      }
	      if (s1 === peg$FAILED) {
	        s1 = peg$currPos;
	        s2 = peg$currPos;
	        if (peg$c48.test(input.charAt(peg$currPos))) {
	          s3 = input.charAt(peg$currPos);
	          peg$currPos++;
	        } else {
	          s3 = peg$FAILED;
	          if (peg$silentFails === 0) { peg$fail(peg$c49); }
	        }
	        if (s3 !== peg$FAILED) {
	          s4 = [];
	          s5 = peg$parsedigit();
	          while (s5 !== peg$FAILED) {
	            s4.push(s5);
	            s5 = peg$parsedigit();
	          }
	          if (s4 !== peg$FAILED) {
	            s3 = [s3, s4];
	            s2 = s3;
	          } else {
	            peg$currPos = s2;
	            s2 = peg$c2;
	          }
	        } else {
	          peg$currPos = s2;
	          s2 = peg$c2;
	        }
	        if (s2 !== peg$FAILED) {
	          s2 = input.substring(s1, peg$currPos);
	        }
	        s1 = s2;
	      }
	      if (s1 !== peg$FAILED) {
	        peg$reportedPos = s0;
	        s1 = peg$c50(s1);
	      }
	      s0 = s1;

	      return s0;
	    }

	    function peg$parsechar() {
	      var s0, s1, s2, s3, s4, s5, s6, s7;

	      if (peg$c51.test(input.charAt(peg$currPos))) {
	        s0 = input.charAt(peg$currPos);
	        peg$currPos++;
	      } else {
	        s0 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c52); }
	      }
	      if (s0 === peg$FAILED) {
	        s0 = peg$currPos;
	        if (input.substr(peg$currPos, 2) === peg$c53) {
	          s1 = peg$c53;
	          peg$currPos += 2;
	        } else {
	          s1 = peg$FAILED;
	          if (peg$silentFails === 0) { peg$fail(peg$c54); }
	        }
	        if (s1 !== peg$FAILED) {
	          peg$reportedPos = s0;
	          s1 = peg$c55();
	        }
	        s0 = s1;
	        if (s0 === peg$FAILED) {
	          s0 = peg$currPos;
	          if (input.substr(peg$currPos, 2) === peg$c56) {
	            s1 = peg$c56;
	            peg$currPos += 2;
	          } else {
	            s1 = peg$FAILED;
	            if (peg$silentFails === 0) { peg$fail(peg$c57); }
	          }
	          if (s1 !== peg$FAILED) {
	            peg$reportedPos = s0;
	            s1 = peg$c58();
	          }
	          s0 = s1;
	          if (s0 === peg$FAILED) {
	            s0 = peg$currPos;
	            if (input.substr(peg$currPos, 2) === peg$c59) {
	              s1 = peg$c59;
	              peg$currPos += 2;
	            } else {
	              s1 = peg$FAILED;
	              if (peg$silentFails === 0) { peg$fail(peg$c60); }
	            }
	            if (s1 !== peg$FAILED) {
	              peg$reportedPos = s0;
	              s1 = peg$c61();
	            }
	            s0 = s1;
	            if (s0 === peg$FAILED) {
	              s0 = peg$currPos;
	              if (input.substr(peg$currPos, 2) === peg$c62) {
	                s1 = peg$c62;
	                peg$currPos += 2;
	              } else {
	                s1 = peg$FAILED;
	                if (peg$silentFails === 0) { peg$fail(peg$c63); }
	              }
	              if (s1 !== peg$FAILED) {
	                peg$reportedPos = s0;
	                s1 = peg$c64();
	              }
	              s0 = s1;
	              if (s0 === peg$FAILED) {
	                s0 = peg$currPos;
	                if (input.substr(peg$currPos, 2) === peg$c65) {
	                  s1 = peg$c65;
	                  peg$currPos += 2;
	                } else {
	                  s1 = peg$FAILED;
	                  if (peg$silentFails === 0) { peg$fail(peg$c66); }
	                }
	                if (s1 !== peg$FAILED) {
	                  s2 = peg$currPos;
	                  s3 = peg$currPos;
	                  s4 = peg$parsehexDigit();
	                  if (s4 !== peg$FAILED) {
	                    s5 = peg$parsehexDigit();
	                    if (s5 !== peg$FAILED) {
	                      s6 = peg$parsehexDigit();
	                      if (s6 !== peg$FAILED) {
	                        s7 = peg$parsehexDigit();
	                        if (s7 !== peg$FAILED) {
	                          s4 = [s4, s5, s6, s7];
	                          s3 = s4;
	                        } else {
	                          peg$currPos = s3;
	                          s3 = peg$c2;
	                        }
	                      } else {
	                        peg$currPos = s3;
	                        s3 = peg$c2;
	                      }
	                    } else {
	                      peg$currPos = s3;
	                      s3 = peg$c2;
	                    }
	                  } else {
	                    peg$currPos = s3;
	                    s3 = peg$c2;
	                  }
	                  if (s3 !== peg$FAILED) {
	                    s3 = input.substring(s2, peg$currPos);
	                  }
	                  s2 = s3;
	                  if (s2 !== peg$FAILED) {
	                    peg$reportedPos = s0;
	                    s1 = peg$c67(s2);
	                    s0 = s1;
	                  } else {
	                    peg$currPos = s0;
	                    s0 = peg$c2;
	                  }
	                } else {
	                  peg$currPos = s0;
	                  s0 = peg$c2;
	                }
	              }
	            }
	          }
	        }
	      }

	      return s0;
	    }

	    function peg$parsechars() {
	      var s0, s1, s2;

	      s0 = peg$currPos;
	      s1 = [];
	      s2 = peg$parsechar();
	      if (s2 !== peg$FAILED) {
	        while (s2 !== peg$FAILED) {
	          s1.push(s2);
	          s2 = peg$parsechar();
	        }
	      } else {
	        s1 = peg$c2;
	      }
	      if (s1 !== peg$FAILED) {
	        peg$reportedPos = s0;
	        s1 = peg$c68(s1);
	      }
	      s0 = s1;

	      return s0;
	    }

	    peg$result = peg$startRuleFunction();

	    if (peg$result !== peg$FAILED && peg$currPos === input.length) {
	      return peg$result;
	    } else {
	      if (peg$result !== peg$FAILED && peg$currPos < input.length) {
	        peg$fail({ type: "end", description: "end of input" });
	      }

	      throw peg$buildException(null, peg$maxFailExpected, peg$maxFailPos);
	    }
	  }

	  return {
	    SyntaxError: SyntaxError,
	    parse:       parse
	  };
	})();

	//# sourceMappingURL=parser.js.map

/***/ },
/* 13 */
/***/ function(module, exports) {

	// GENERATED FILE
	"use strict";
	exports["default"] = {"locale":"en","pluralRuleFunction":function (n,ord){var s=String(n).split("."),v0=!s[1],t0=Number(s[0])==n,n10=t0&&s[0].slice(-1),n100=t0&&s[0].slice(-2);if(ord)return n10==1&&n100!=11?"one":n10==2&&n100!=12?"two":n10==3&&n100!=13?"few":"other";return n==1&&v0?"one":"other"}};

	//# sourceMappingURL=en.js.map

/***/ },
/* 14 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/* jshint node:true */

	'use strict';

	var IntlRelativeFormat = __webpack_require__(16)['default'];

	// Add all locale data to `IntlRelativeFormat`. This module will be ignored when
	// bundling for the browser with Browserify/Webpack.
	__webpack_require__(21);

	// Re-export `IntlRelativeFormat` as the CommonJS default exports with all the
	// locale data registered, and with English set as the default locale. Define
	// the `default` prop for use with other compiled ES6 Modules.
	exports = module.exports = IntlRelativeFormat;
	exports['default'] = exports;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/* jslint esnext: true */

	"use strict";
	var src$core$$ = __webpack_require__(17), src$en$$ = __webpack_require__(20);

	src$core$$["default"].__addLocaleData(src$en$$["default"]);
	src$core$$["default"].defaultLocale = 'en';

	exports["default"] = src$core$$["default"];

	//# sourceMappingURL=main.js.map

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/*
	Copyright (c) 2014, Yahoo! Inc. All rights reserved.
	Copyrights licensed under the New BSD License.
	See the accompanying LICENSE file for terms.
	*/

	/* jslint esnext: true */

	"use strict";
	var intl$messageformat$$ = __webpack_require__(5), src$diff$$ = __webpack_require__(18), src$es5$$ = __webpack_require__(19);
	exports["default"] = RelativeFormat;

	// -----------------------------------------------------------------------------

	var FIELDS = ['second', 'minute', 'hour', 'day', 'month', 'year'];
	var STYLES = ['best fit', 'numeric'];

	// -- RelativeFormat -----------------------------------------------------------

	function RelativeFormat(locales, options) {
	    options = options || {};

	    // Make a copy of `locales` if it's an array, so that it doesn't change
	    // since it's used lazily.
	    if (src$es5$$.isArray(locales)) {
	        locales = locales.concat();
	    }

	    src$es5$$.defineProperty(this, '_locale', {value: this._resolveLocale(locales)});
	    src$es5$$.defineProperty(this, '_options', {value: {
	        style: this._resolveStyle(options.style),
	        units: this._isValidUnits(options.units) && options.units
	    }});

	    src$es5$$.defineProperty(this, '_locales', {value: locales});
	    src$es5$$.defineProperty(this, '_fields', {value: this._findFields(this._locale)});
	    src$es5$$.defineProperty(this, '_messages', {value: src$es5$$.objCreate(null)});

	    // "Bind" `format()` method to `this` so it can be passed by reference like
	    // the other `Intl` APIs.
	    var relativeFormat = this;
	    this.format = function format(date, options) {
	        return relativeFormat._format(date, options);
	    };
	}

	// Define internal private properties for dealing with locale data.
	src$es5$$.defineProperty(RelativeFormat, '__localeData__', {value: src$es5$$.objCreate(null)});
	src$es5$$.defineProperty(RelativeFormat, '__addLocaleData', {value: function (data) {
	    if (!(data && data.locale)) {
	        throw new Error(
	            'Locale data provided to IntlRelativeFormat is missing a ' +
	            '`locale` property value'
	        );
	    }

	    RelativeFormat.__localeData__[data.locale.toLowerCase()] = data;

	    // Add data to IntlMessageFormat.
	    intl$messageformat$$["default"].__addLocaleData(data);
	}});

	// Define public `defaultLocale` property which can be set by the developer, or
	// it will be set when the first RelativeFormat instance is created by
	// leveraging the resolved locale from `Intl`.
	src$es5$$.defineProperty(RelativeFormat, 'defaultLocale', {
	    enumerable: true,
	    writable  : true,
	    value     : undefined
	});

	// Define public `thresholds` property which can be set by the developer, and
	// defaults to relative time thresholds from moment.js.
	src$es5$$.defineProperty(RelativeFormat, 'thresholds', {
	    enumerable: true,

	    value: {
	        second: 45,  // seconds to minute
	        minute: 45,  // minutes to hour
	        hour  : 22,  // hours to day
	        day   : 26,  // days to month
	        month : 11   // months to year
	    }
	});

	RelativeFormat.prototype.resolvedOptions = function () {
	    return {
	        locale: this._locale,
	        style : this._options.style,
	        units : this._options.units
	    };
	};

	RelativeFormat.prototype._compileMessage = function (units) {
	    // `this._locales` is the original set of locales the user specified to the
	    // constructor, while `this._locale` is the resolved root locale.
	    var locales        = this._locales;
	    var resolvedLocale = this._locale;

	    var field        = this._fields[units];
	    var relativeTime = field.relativeTime;
	    var future       = '';
	    var past         = '';
	    var i;

	    for (i in relativeTime.future) {
	        if (relativeTime.future.hasOwnProperty(i)) {
	            future += ' ' + i + ' {' +
	                relativeTime.future[i].replace('{0}', '#') + '}';
	        }
	    }

	    for (i in relativeTime.past) {
	        if (relativeTime.past.hasOwnProperty(i)) {
	            past += ' ' + i + ' {' +
	                relativeTime.past[i].replace('{0}', '#') + '}';
	        }
	    }

	    var message = '{when, select, future {{0, plural, ' + future + '}}' +
	                                 'past {{0, plural, ' + past + '}}}';

	    // Create the synthetic IntlMessageFormat instance using the original
	    // locales value specified by the user when constructing the the parent
	    // IntlRelativeFormat instance.
	    return new intl$messageformat$$["default"](message, locales);
	};

	RelativeFormat.prototype._getMessage = function (units) {
	    var messages = this._messages;

	    // Create a new synthetic message based on the locale data from CLDR.
	    if (!messages[units]) {
	        messages[units] = this._compileMessage(units);
	    }

	    return messages[units];
	};

	RelativeFormat.prototype._getRelativeUnits = function (diff, units) {
	    var field = this._fields[units];

	    if (field.relative) {
	        return field.relative[diff];
	    }
	};

	RelativeFormat.prototype._findFields = function (locale) {
	    var localeData = RelativeFormat.__localeData__;
	    var data       = localeData[locale.toLowerCase()];

	    // The locale data is de-duplicated, so we have to traverse the locale's
	    // hierarchy until we find `fields` to return.
	    while (data) {
	        if (data.fields) {
	            return data.fields;
	        }

	        data = data.parentLocale && localeData[data.parentLocale.toLowerCase()];
	    }

	    throw new Error(
	        'Locale data added to IntlRelativeFormat is missing `fields` for :' +
	        locale
	    );
	};

	RelativeFormat.prototype._format = function (date, options) {
	    var now = options && options.now !== undefined ? options.now : src$es5$$.dateNow();

	    if (date === undefined) {
	        date = now;
	    }

	    // Determine if the `date` and optional `now` values are valid, and throw a
	    // similar error to what `Intl.DateTimeFormat#format()` would throw.
	    if (!isFinite(now)) {
	        throw new RangeError(
	            'The `now` option provided to IntlRelativeFormat#format() is not ' +
	            'in valid range.'
	        );
	    }

	    if (!isFinite(date)) {
	        throw new RangeError(
	            'The date value provided to IntlRelativeFormat#format() is not ' +
	            'in valid range.'
	        );
	    }

	    var diffReport  = src$diff$$["default"](now, date);
	    var units       = this._options.units || this._selectUnits(diffReport);
	    var diffInUnits = diffReport[units];

	    if (this._options.style !== 'numeric') {
	        var relativeUnits = this._getRelativeUnits(diffInUnits, units);
	        if (relativeUnits) {
	            return relativeUnits;
	        }
	    }

	    return this._getMessage(units).format({
	        '0' : Math.abs(diffInUnits),
	        when: diffInUnits < 0 ? 'past' : 'future'
	    });
	};

	RelativeFormat.prototype._isValidUnits = function (units) {
	    if (!units || src$es5$$.arrIndexOf.call(FIELDS, units) >= 0) {
	        return true;
	    }

	    if (typeof units === 'string') {
	        var suggestion = /s$/.test(units) && units.substr(0, units.length - 1);
	        if (suggestion && src$es5$$.arrIndexOf.call(FIELDS, suggestion) >= 0) {
	            throw new Error(
	                '"' + units + '" is not a valid IntlRelativeFormat `units` ' +
	                'value, did you mean: ' + suggestion
	            );
	        }
	    }

	    throw new Error(
	        '"' + units + '" is not a valid IntlRelativeFormat `units` value, it ' +
	        'must be one of: "' + FIELDS.join('", "') + '"'
	    );
	};

	RelativeFormat.prototype._resolveLocale = function (locales) {
	    if (typeof locales === 'string') {
	        locales = [locales];
	    }

	    // Create a copy of the array so we can push on the default locale.
	    locales = (locales || []).concat(RelativeFormat.defaultLocale);

	    var localeData = RelativeFormat.__localeData__;
	    var i, len, localeParts, data;

	    // Using the set of locales + the default locale, we look for the first one
	    // which that has been registered. When data does not exist for a locale, we
	    // traverse its ancestors to find something that's been registered within
	    // its hierarchy of locales. Since we lack the proper `parentLocale` data
	    // here, we must take a naive approach to traversal.
	    for (i = 0, len = locales.length; i < len; i += 1) {
	        localeParts = locales[i].toLowerCase().split('-');

	        while (localeParts.length) {
	            data = localeData[localeParts.join('-')];
	            if (data) {
	                // Return the normalized locale string; e.g., we return "en-US",
	                // instead of "en-us".
	                return data.locale;
	            }

	            localeParts.pop();
	        }
	    }

	    var defaultLocale = locales.pop();
	    throw new Error(
	        'No locale data has been added to IntlRelativeFormat for: ' +
	        locales.join(', ') + ', or the default locale: ' + defaultLocale
	    );
	};

	RelativeFormat.prototype._resolveStyle = function (style) {
	    // Default to "best fit" style.
	    if (!style) {
	        return STYLES[0];
	    }

	    if (src$es5$$.arrIndexOf.call(STYLES, style) >= 0) {
	        return style;
	    }

	    throw new Error(
	        '"' + style + '" is not a valid IntlRelativeFormat `style` value, it ' +
	        'must be one of: "' + STYLES.join('", "') + '"'
	    );
	};

	RelativeFormat.prototype._selectUnits = function (diffReport) {
	    var i, l, units;

	    for (i = 0, l = FIELDS.length; i < l; i += 1) {
	        units = FIELDS[i];

	        if (Math.abs(diffReport[units]) < RelativeFormat.thresholds[units]) {
	            break;
	        }
	    }

	    return units;
	};

	//# sourceMappingURL=core.js.map

/***/ },
/* 18 */
/***/ function(module, exports) {

	/*
	Copyright (c) 2014, Yahoo! Inc. All rights reserved.
	Copyrights licensed under the New BSD License.
	See the accompanying LICENSE file for terms.
	*/

	/* jslint esnext: true */

	"use strict";

	var round = Math.round;

	function daysToYears(days) {
	    // 400 years have 146097 days (taking into account leap year rules)
	    return days * 400 / 146097;
	}

	exports["default"] = function (from, to) {
	    // Convert to ms timestamps.
	    from = +from;
	    to   = +to;

	    var millisecond = round(to - from),
	        second      = round(millisecond / 1000),
	        minute      = round(second / 60),
	        hour        = round(minute / 60),
	        day         = round(hour / 24),
	        week        = round(day / 7);

	    var rawYears = daysToYears(day),
	        month    = round(rawYears * 12),
	        year     = round(rawYears);

	    return {
	        millisecond: millisecond,
	        second     : second,
	        minute     : minute,
	        hour       : hour,
	        day        : day,
	        week       : week,
	        month      : month,
	        year       : year
	    };
	};

	//# sourceMappingURL=diff.js.map

/***/ },
/* 19 */
/***/ function(module, exports) {

	/*
	Copyright (c) 2014, Yahoo! Inc. All rights reserved.
	Copyrights licensed under the New BSD License.
	See the accompanying LICENSE file for terms.
	*/

	/* jslint esnext: true */

	"use strict";

	// Purposely using the same implementation as the Intl.js `Intl` polyfill.
	// Copyright 2013 Andy Earnshaw, MIT License

	var hop = Object.prototype.hasOwnProperty;
	var toString = Object.prototype.toString;

	var realDefineProp = (function () {
	    try { return !!Object.defineProperty({}, 'a', {}); }
	    catch (e) { return false; }
	})();

	var es3 = !realDefineProp && !Object.prototype.__defineGetter__;

	var defineProperty = realDefineProp ? Object.defineProperty :
	        function (obj, name, desc) {

	    if ('get' in desc && obj.__defineGetter__) {
	        obj.__defineGetter__(name, desc.get);
	    } else if (!hop.call(obj, name) || 'value' in desc) {
	        obj[name] = desc.value;
	    }
	};

	var objCreate = Object.create || function (proto, props) {
	    var obj, k;

	    function F() {}
	    F.prototype = proto;
	    obj = new F();

	    for (k in props) {
	        if (hop.call(props, k)) {
	            defineProperty(obj, k, props[k]);
	        }
	    }

	    return obj;
	};

	var arrIndexOf = Array.prototype.indexOf || function (search, fromIndex) {
	    /*jshint validthis:true */
	    var arr = this;
	    if (!arr.length) {
	        return -1;
	    }

	    for (var i = fromIndex || 0, max = arr.length; i < max; i++) {
	        if (arr[i] === search) {
	            return i;
	        }
	    }

	    return -1;
	};

	var isArray = Array.isArray || function (obj) {
	    return toString.call(obj) === '[object Array]';
	};

	var dateNow = Date.now || function () {
	    return new Date().getTime();
	};
	exports.defineProperty = defineProperty, exports.objCreate = objCreate, exports.arrIndexOf = arrIndexOf, exports.isArray = isArray, exports.dateNow = dateNow;

	//# sourceMappingURL=es5.js.map

/***/ },
/* 20 */
/***/ function(module, exports) {

	// GENERATED FILE
	"use strict";
	exports["default"] = {"locale":"en","pluralRuleFunction":function (n,ord){var s=String(n).split("."),v0=!s[1],t0=Number(s[0])==n,n10=t0&&s[0].slice(-1),n100=t0&&s[0].slice(-2);if(ord)return n10==1&&n100!=11?"one":n10==2&&n100!=12?"two":n10==3&&n100!=13?"few":"other";return n==1&&v0?"one":"other"},"fields":{"year":{"displayName":"year","relative":{"0":"this year","1":"next year","-1":"last year"},"relativeTime":{"future":{"one":"in {0} year","other":"in {0} years"},"past":{"one":"{0} year ago","other":"{0} years ago"}}},"month":{"displayName":"month","relative":{"0":"this month","1":"next month","-1":"last month"},"relativeTime":{"future":{"one":"in {0} month","other":"in {0} months"},"past":{"one":"{0} month ago","other":"{0} months ago"}}},"day":{"displayName":"day","relative":{"0":"today","1":"tomorrow","-1":"yesterday"},"relativeTime":{"future":{"one":"in {0} day","other":"in {0} days"},"past":{"one":"{0} day ago","other":"{0} days ago"}}},"hour":{"displayName":"hour","relativeTime":{"future":{"one":"in {0} hour","other":"in {0} hours"},"past":{"one":"{0} hour ago","other":"{0} hours ago"}}},"minute":{"displayName":"minute","relativeTime":{"future":{"one":"in {0} minute","other":"in {0} minutes"},"past":{"one":"{0} minute ago","other":"{0} minutes ago"}}},"second":{"displayName":"second","relative":{"0":"now"},"relativeTime":{"future":{"one":"in {0} second","other":"in {0} seconds"},"past":{"one":"{0} second ago","other":"{0} seconds ago"}}}}};

	//# sourceMappingURL=en.js.map

/***/ },
/* 21 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_22__;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports = module.exports = __webpack_require__(25)['default'];
	exports['default'] = exports;


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var src$es5$$ = __webpack_require__(26);
	exports["default"] = createFormatCache;

	// -----------------------------------------------------------------------------

	function createFormatCache(FormatConstructor) {
	    var cache = src$es5$$.objCreate(null);

	    return function () {
	        var args    = Array.prototype.slice.call(arguments);
	        var cacheId = getCacheId(args);
	        var format  = cacheId && cache[cacheId];

	        if (!format) {
	            format = new (src$es5$$.bind.apply(FormatConstructor, [null].concat(args)))();

	            if (cacheId) {
	                cache[cacheId] = format;
	            }
	        }

	        return format;
	    };
	}

	// -- Utilities ----------------------------------------------------------------

	function getCacheId(inputs) {
	    // When JSON is not available in the runtime, we will not create a cache id.
	    if (typeof JSON === 'undefined') { return; }

	    var cacheId = [];

	    var i, len, input;

	    for (i = 0, len = inputs.length; i < len; i += 1) {
	        input = inputs[i];

	        if (input && typeof input === 'object') {
	            cacheId.push(orderedProps(input));
	        } else {
	            cacheId.push(input);
	        }
	    }

	    return JSON.stringify(cacheId);
	}

	function orderedProps(obj) {
	    var props = [],
	        keys  = [];

	    var key, i, len, prop;

	    for (key in obj) {
	        if (obj.hasOwnProperty(key)) {
	            keys.push(key);
	        }
	    }

	    var orderedKeys = keys.sort();

	    for (i = 0, len = orderedKeys.length; i < len; i += 1) {
	        key  = orderedKeys[i];
	        prop = {};

	        prop[key] = obj[key];
	        props[i]  = prop;
	    }

	    return props;
	}

	//# sourceMappingURL=memoizer.js.map

/***/ },
/* 26 */
/***/ function(module, exports) {

	"use strict";
	/*
	Copyright (c) 2014, Yahoo! Inc. All rights reserved.
	Copyrights licensed under the New BSD License.
	See the accompanying LICENSE file for terms.
	*/

	/* jslint esnext: true */

	// Function.prototype.bind implementation from Mozilla Developer Network:
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind#Polyfill

	var bind = Function.prototype.bind || function (oThis) {
	    if (typeof this !== 'function') {
	      // closest thing possible to the ECMAScript 5
	      // internal IsCallable function
	      throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
	    }

	    var aArgs   = Array.prototype.slice.call(arguments, 1),
	        fToBind = this,
	        fNOP    = function() {},
	        fBound  = function() {
	          return fToBind.apply(this instanceof fNOP
	                 ? this
	                 : oThis,
	                 aArgs.concat(Array.prototype.slice.call(arguments)));
	        };

	    if (this.prototype) {
	      // native functions don't have a prototype
	      fNOP.prototype = this.prototype;
	    }
	    fBound.prototype = new fNOP();

	    return fBound;
	};

	// Purposely using the same implementation as the Intl.js `Intl` polyfill.
	// Copyright 2013 Andy Earnshaw, MIT License

	var hop = Object.prototype.hasOwnProperty;

	var realDefineProp = (function () {
	    try { return !!Object.defineProperty({}, 'a', {}); }
	    catch (e) { return false; }
	})();

	var es3 = !realDefineProp && !Object.prototype.__defineGetter__;

	var defineProperty = realDefineProp ? Object.defineProperty :
	        function (obj, name, desc) {

	    if ('get' in desc && obj.__defineGetter__) {
	        obj.__defineGetter__(name, desc.get);
	    } else if (!hop.call(obj, name) || 'value' in desc) {
	        obj[name] = desc.value;
	    }
	};

	var objCreate = Object.create || function (proto, props) {
	    var obj, k;

	    function F() {}
	    F.prototype = proto;
	    obj = new F();

	    for (k in props) {
	        if (hop.call(props, k)) {
	            defineProperty(obj, k, props[k]);
	        }
	    }

	    return obj;
	};

	exports.bind = bind, exports.defineProperty = defineProperty, exports.objCreate = objCreate;

	//# sourceMappingURL=es5.js.map

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./af": 28,
		"./af.js": 28,
		"./agq": 29,
		"./agq.js": 29,
		"./ak": 30,
		"./ak.js": 30,
		"./am": 31,
		"./am.js": 31,
		"./ar": 32,
		"./ar.js": 32,
		"./as": 33,
		"./as.js": 33,
		"./asa": 34,
		"./asa.js": 34,
		"./ast": 35,
		"./ast.js": 35,
		"./az": 36,
		"./az.js": 36,
		"./bas": 37,
		"./bas.js": 37,
		"./be": 38,
		"./be.js": 38,
		"./bem": 39,
		"./bem.js": 39,
		"./bez": 40,
		"./bez.js": 40,
		"./bg": 41,
		"./bg.js": 41,
		"./bh": 42,
		"./bh.js": 42,
		"./bm": 43,
		"./bm.js": 43,
		"./bn": 44,
		"./bn.js": 44,
		"./bo": 45,
		"./bo.js": 45,
		"./br": 46,
		"./br.js": 46,
		"./brx": 47,
		"./brx.js": 47,
		"./bs": 48,
		"./bs.js": 48,
		"./ca": 49,
		"./ca.js": 49,
		"./ce": 50,
		"./ce.js": 50,
		"./cgg": 51,
		"./cgg.js": 51,
		"./chr": 52,
		"./chr.js": 52,
		"./ckb": 53,
		"./ckb.js": 53,
		"./cs": 54,
		"./cs.js": 54,
		"./cu": 55,
		"./cu.js": 55,
		"./cy": 56,
		"./cy.js": 56,
		"./da": 57,
		"./da.js": 57,
		"./dav": 58,
		"./dav.js": 58,
		"./de": 59,
		"./de.js": 59,
		"./dje": 60,
		"./dje.js": 60,
		"./dsb": 61,
		"./dsb.js": 61,
		"./dua": 62,
		"./dua.js": 62,
		"./dv": 63,
		"./dv.js": 63,
		"./dyo": 64,
		"./dyo.js": 64,
		"./dz": 65,
		"./dz.js": 65,
		"./ebu": 66,
		"./ebu.js": 66,
		"./ee": 67,
		"./ee.js": 67,
		"./el": 68,
		"./el.js": 68,
		"./en": 69,
		"./en.js": 69,
		"./eo": 70,
		"./eo.js": 70,
		"./es": 71,
		"./es.js": 71,
		"./et": 72,
		"./et.js": 72,
		"./eu": 73,
		"./eu.js": 73,
		"./ewo": 74,
		"./ewo.js": 74,
		"./fa": 75,
		"./fa.js": 75,
		"./ff": 76,
		"./ff.js": 76,
		"./fi": 77,
		"./fi.js": 77,
		"./fil": 78,
		"./fil.js": 78,
		"./fo": 79,
		"./fo.js": 79,
		"./fr": 80,
		"./fr.js": 80,
		"./fur": 81,
		"./fur.js": 81,
		"./fy": 82,
		"./fy.js": 82,
		"./ga": 83,
		"./ga.js": 83,
		"./gd": 84,
		"./gd.js": 84,
		"./gl": 85,
		"./gl.js": 85,
		"./gsw": 86,
		"./gsw.js": 86,
		"./gu": 87,
		"./gu.js": 87,
		"./guw": 88,
		"./guw.js": 88,
		"./guz": 89,
		"./guz.js": 89,
		"./gv": 90,
		"./gv.js": 90,
		"./ha": 91,
		"./ha.js": 91,
		"./haw": 92,
		"./haw.js": 92,
		"./he": 93,
		"./he.js": 93,
		"./hi": 94,
		"./hi.js": 94,
		"./hr": 95,
		"./hr.js": 95,
		"./hsb": 96,
		"./hsb.js": 96,
		"./hu": 97,
		"./hu.js": 97,
		"./hy": 98,
		"./hy.js": 98,
		"./id": 99,
		"./id.js": 99,
		"./ig": 100,
		"./ig.js": 100,
		"./ii": 101,
		"./ii.js": 101,
		"./in": 102,
		"./in.js": 102,
		"./index": 103,
		"./index.js": 104,
		"./is": 105,
		"./is.js": 105,
		"./it": 106,
		"./it.js": 106,
		"./iu": 107,
		"./iu.js": 107,
		"./iw": 108,
		"./iw.js": 108,
		"./ja": 109,
		"./ja.js": 109,
		"./jbo": 110,
		"./jbo.js": 110,
		"./jgo": 111,
		"./jgo.js": 111,
		"./ji": 112,
		"./ji.js": 112,
		"./jmc": 113,
		"./jmc.js": 113,
		"./jv": 114,
		"./jv.js": 114,
		"./jw": 115,
		"./jw.js": 115,
		"./ka": 116,
		"./ka.js": 116,
		"./kab": 117,
		"./kab.js": 117,
		"./kaj": 118,
		"./kaj.js": 118,
		"./kam": 119,
		"./kam.js": 119,
		"./kcg": 120,
		"./kcg.js": 120,
		"./kde": 121,
		"./kde.js": 121,
		"./kea": 122,
		"./kea.js": 122,
		"./khq": 123,
		"./khq.js": 123,
		"./ki": 124,
		"./ki.js": 124,
		"./kk": 125,
		"./kk.js": 125,
		"./kkj": 126,
		"./kkj.js": 126,
		"./kl": 127,
		"./kl.js": 127,
		"./kln": 128,
		"./kln.js": 128,
		"./km": 129,
		"./km.js": 129,
		"./kn": 130,
		"./kn.js": 130,
		"./ko": 131,
		"./ko.js": 131,
		"./kok": 132,
		"./kok.js": 132,
		"./ks": 133,
		"./ks.js": 133,
		"./ksb": 134,
		"./ksb.js": 134,
		"./ksf": 135,
		"./ksf.js": 135,
		"./ksh": 136,
		"./ksh.js": 136,
		"./ku": 137,
		"./ku.js": 137,
		"./kw": 138,
		"./kw.js": 138,
		"./ky": 139,
		"./ky.js": 139,
		"./lag": 140,
		"./lag.js": 140,
		"./lb": 141,
		"./lb.js": 141,
		"./lg": 142,
		"./lg.js": 142,
		"./lkt": 143,
		"./lkt.js": 143,
		"./ln": 144,
		"./ln.js": 144,
		"./lo": 145,
		"./lo.js": 145,
		"./lrc": 146,
		"./lrc.js": 146,
		"./lt": 147,
		"./lt.js": 147,
		"./lu": 148,
		"./lu.js": 148,
		"./luo": 149,
		"./luo.js": 149,
		"./luy": 150,
		"./luy.js": 150,
		"./lv": 151,
		"./lv.js": 151,
		"./mas": 152,
		"./mas.js": 152,
		"./mer": 153,
		"./mer.js": 153,
		"./mfe": 154,
		"./mfe.js": 154,
		"./mg": 155,
		"./mg.js": 155,
		"./mgh": 156,
		"./mgh.js": 156,
		"./mgo": 157,
		"./mgo.js": 157,
		"./mk": 158,
		"./mk.js": 158,
		"./ml": 159,
		"./ml.js": 159,
		"./mn": 160,
		"./mn.js": 160,
		"./mo": 161,
		"./mo.js": 161,
		"./mr": 162,
		"./mr.js": 162,
		"./ms": 163,
		"./ms.js": 163,
		"./mt": 164,
		"./mt.js": 164,
		"./mua": 165,
		"./mua.js": 165,
		"./my": 166,
		"./my.js": 166,
		"./mzn": 167,
		"./mzn.js": 167,
		"./nah": 168,
		"./nah.js": 168,
		"./naq": 169,
		"./naq.js": 169,
		"./nb": 170,
		"./nb.js": 170,
		"./nd": 171,
		"./nd.js": 171,
		"./ne": 172,
		"./ne.js": 172,
		"./nl": 173,
		"./nl.js": 173,
		"./nmg": 174,
		"./nmg.js": 174,
		"./nn": 175,
		"./nn.js": 175,
		"./nnh": 176,
		"./nnh.js": 176,
		"./no": 177,
		"./no.js": 177,
		"./nqo": 178,
		"./nqo.js": 178,
		"./nr": 179,
		"./nr.js": 179,
		"./nso": 180,
		"./nso.js": 180,
		"./nus": 181,
		"./nus.js": 181,
		"./ny": 182,
		"./ny.js": 182,
		"./nyn": 183,
		"./nyn.js": 183,
		"./om": 184,
		"./om.js": 184,
		"./or": 185,
		"./or.js": 185,
		"./os": 186,
		"./os.js": 186,
		"./pa": 187,
		"./pa.js": 187,
		"./pap": 188,
		"./pap.js": 188,
		"./pl": 189,
		"./pl.js": 189,
		"./prg": 190,
		"./prg.js": 190,
		"./ps": 191,
		"./ps.js": 191,
		"./pt": 192,
		"./pt.js": 192,
		"./qu": 193,
		"./qu.js": 193,
		"./rm": 194,
		"./rm.js": 194,
		"./rn": 195,
		"./rn.js": 195,
		"./ro": 196,
		"./ro.js": 196,
		"./rof": 197,
		"./rof.js": 197,
		"./ru": 198,
		"./ru.js": 198,
		"./rw": 199,
		"./rw.js": 199,
		"./rwk": 200,
		"./rwk.js": 200,
		"./sah": 201,
		"./sah.js": 201,
		"./saq": 202,
		"./saq.js": 202,
		"./sbp": 203,
		"./sbp.js": 203,
		"./sdh": 204,
		"./sdh.js": 204,
		"./se": 205,
		"./se.js": 205,
		"./seh": 206,
		"./seh.js": 206,
		"./ses": 207,
		"./ses.js": 207,
		"./sg": 208,
		"./sg.js": 208,
		"./sh": 209,
		"./sh.js": 209,
		"./shi": 210,
		"./shi.js": 210,
		"./si": 211,
		"./si.js": 211,
		"./sk": 212,
		"./sk.js": 212,
		"./sl": 213,
		"./sl.js": 213,
		"./sma": 214,
		"./sma.js": 214,
		"./smi": 215,
		"./smi.js": 215,
		"./smj": 216,
		"./smj.js": 216,
		"./smn": 217,
		"./smn.js": 217,
		"./sms": 218,
		"./sms.js": 218,
		"./sn": 219,
		"./sn.js": 219,
		"./so": 220,
		"./so.js": 220,
		"./sq": 221,
		"./sq.js": 221,
		"./sr": 222,
		"./sr.js": 222,
		"./ss": 223,
		"./ss.js": 223,
		"./ssy": 224,
		"./ssy.js": 224,
		"./st": 225,
		"./st.js": 225,
		"./sv": 226,
		"./sv.js": 226,
		"./sw": 227,
		"./sw.js": 227,
		"./syr": 228,
		"./syr.js": 228,
		"./ta": 229,
		"./ta.js": 229,
		"./te": 230,
		"./te.js": 230,
		"./teo": 231,
		"./teo.js": 231,
		"./th": 232,
		"./th.js": 232,
		"./ti": 233,
		"./ti.js": 233,
		"./tig": 234,
		"./tig.js": 234,
		"./tk": 235,
		"./tk.js": 235,
		"./tl": 236,
		"./tl.js": 236,
		"./tn": 237,
		"./tn.js": 237,
		"./to": 238,
		"./to.js": 238,
		"./tr": 239,
		"./tr.js": 239,
		"./ts": 240,
		"./ts.js": 240,
		"./twq": 241,
		"./twq.js": 241,
		"./tzm": 242,
		"./tzm.js": 242,
		"./ug": 243,
		"./ug.js": 243,
		"./uk": 244,
		"./uk.js": 244,
		"./ur": 245,
		"./ur.js": 245,
		"./uz": 246,
		"./uz.js": 246,
		"./vai": 247,
		"./vai.js": 247,
		"./ve": 248,
		"./ve.js": 248,
		"./vi": 249,
		"./vi.js": 249,
		"./vo": 250,
		"./vo.js": 250,
		"./vun": 251,
		"./vun.js": 251,
		"./wa": 252,
		"./wa.js": 252,
		"./wae": 253,
		"./wae.js": 253,
		"./wo": 254,
		"./wo.js": 254,
		"./xh": 255,
		"./xh.js": 255,
		"./xog": 256,
		"./xog.js": 256,
		"./yav": 257,
		"./yav.js": 257,
		"./yi": 258,
		"./yi.js": 258,
		"./yo": 259,
		"./yo.js": 259,
		"./zgh": 260,
		"./zgh.js": 260,
		"./zh": 261,
		"./zh.js": 261,
		"./zu": 262,
		"./zu.js": 262
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 27;


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,a){ true?module.exports=a():"function"==typeof define&&define.amd?define(a):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.af=a())}(this,function(){"use strict";var e=[{locale:"af",pluralRuleFunction:function(e,a){return a?"other":1==e?"one":"other"},fields:{year:{displayName:"jaar",relative:{0:"hierdie jaar",1:"volgende jaar","-1":"verlede jaar"},relativeTime:{future:{one:"oor {0} jaar",other:"oor {0} jaar"},past:{one:"{0} jaar gelede",other:"{0} jaar gelede"}}},month:{displayName:"Maand",relative:{0:"vandeesmaand",1:"volgende maand","-1":"verlede maand"},relativeTime:{future:{one:"oor {0} minuut",other:"oor {0} minuut"},past:{one:"{0} maand gelede",other:"{0} maande gelede"}}},day:{displayName:"Dag",relative:{0:"vandag",1:"môre",2:"oormôre","-2":"eergister","-1":"gister"},relativeTime:{future:{one:"oor {0} minuut",other:"oor {0} minuut"},past:{one:"{0} dag gelede",other:"{0} dae gelede"}}},hour:{displayName:"uur",relativeTime:{future:{one:"oor {0} uur",other:"oor {0} uur"},past:{one:"{0} uur gelede",other:"{0} uur gelede"}}},minute:{displayName:"minuut",relativeTime:{future:{one:"oor {0} minuut",other:"oor {0} minuut"},past:{one:"{0} minuut gelede",other:"{0} minute gelede"}}},second:{displayName:"sekonde",relative:{0:"nou"},relativeTime:{future:{one:"oor {0} sekonde",other:"oor {0} sekondes"},past:{one:"{0} sekonde gelede",other:"{0} sekondes gelede"}}}}},{locale:"af-NA",parentLocale:"af"}];return e});

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.agq=t())}(this,function(){"use strict";var e=[{locale:"agq",pluralRuleFunction:function(e,t){return"other"},fields:{year:{displayName:"kɨnûm",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"ndzɔŋ",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"utsuʔ",relative:{0:"nɛ",1:"tsʉtsʉ","-1":"ā zūɛɛ"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"tàm",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"menè",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"sɛkɔ̀n",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.ak=t())}(this,function(){"use strict";var e=[{locale:"ak",pluralRuleFunction:function(e,t){return t?"other":0==e||1==e?"one":"other"},fields:{year:{displayName:"Afe",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Bosome",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Da",relative:{0:"Ndɛ",1:"Ɔkyena","-1":"Ndeda"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Dɔnhwer",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Sema",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Sɛkɛnd",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.am=t())}(this,function(){"use strict";var e=[{locale:"am",pluralRuleFunction:function(e,t){return t?"other":e>=0&&e<=1?"one":"other"},fields:{year:{displayName:"ዓመት",relative:{0:"በዚህ ዓመት",1:"የሚቀጥለው ዓመት","-1":"ያለፈው ዓመት"},relativeTime:{future:{one:"በ{0} ዓመታት ውስጥ",other:"በ{0} ዓመታት ውስጥ"},past:{one:"ከ{0} ዓመት በፊት",other:"ከ{0} ዓመታት በፊት"}}},month:{displayName:"ወር",relative:{0:"በዚህ ወር",1:"የሚቀጥለው ወር","-1":"ያለፈው ወር"},relativeTime:{future:{one:"በ{0} ወር ውስጥ",other:"በ{0} ወራት ውስጥ"},past:{one:"ከ{0} ወር በፊት",other:"ከ{0} ወራት በፊት"}}},day:{displayName:"ቀን",relative:{0:"ዛሬ",1:"ነገ",2:"ከነገ ወዲያ","-2":"ከትናንት ወዲያ","-1":"ትናንት"},relativeTime:{future:{one:"በ{0} ቀን ውስጥ",other:"በ{0} ቀናት ውስጥ"},past:{one:"ከ{0} ቀን በፊት",other:"ከ{0} ቀናት በፊት"}}},hour:{displayName:"ሰዓት",relativeTime:{future:{one:"በ{0} ሰዓት ውስጥ",other:"በ{0} ሰዓቶች ውስጥ"},past:{one:"ከ{0} ሰዓት በፊት",other:"ከ{0} ሰዓቶች በፊት"}}},minute:{displayName:"ደቂቃ",relativeTime:{future:{one:"በ{0} ደቂቃ ውስጥ",other:"በ{0} ደቂቃዎች ውስጥ"},past:{one:"ከ{0} ደቂቃ በፊት",other:"ከ{0} ደቂቃዎች በፊት"}}},second:{displayName:"ሰከንድ",relative:{0:"አሁን"},relativeTime:{future:{one:"በ{0} ሰከንድ ውስጥ",other:"በ{0} ሰከንዶች ውስጥ"},past:{one:"ከ{0} ሰከንድ በፊት",other:"ከ{0} ሰከንዶች በፊት"}}}}}];return e});

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,a){ true?module.exports=a():"function"==typeof define&&define.amd?define(a):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.ar=a())}(this,function(){"use strict";var e=[{locale:"ar",pluralRuleFunction:function(e,a){var r=String(e).split("."),o=Number(r[0])==e,t=o&&r[0].slice(-2);return a?"other":0==e?"zero":1==e?"one":2==e?"two":t>=3&&t<=10?"few":t>=11&&t<=99?"many":"other"},fields:{year:{displayName:"السنة",relative:{0:"السنة الحالية",1:"السنة التالية","-1":"السنة الماضية"},relativeTime:{future:{zero:"خلال {0} سنة",one:"خلال سنة واحدة",two:"خلال سنتين",few:"خلال {0} سنوات",many:"خلال {0} سنة",other:"خلال {0} سنة"},past:{zero:"قبل {0} سنة",one:"قبل سنة واحدة",two:"قبل سنتين",few:"قبل {0} سنوات",many:"قبل {0} سنة",other:"قبل {0} سنة"}}},month:{displayName:"الشهر",relative:{0:"هذا الشهر",1:"الشهر التالي","-1":"الشهر الماضي"},relativeTime:{future:{zero:"خلال {0} شهر",one:"خلال شهر واحد",two:"خلال شهرين",few:"خلال {0} أشهر",many:"خلال {0} شهرًا",other:"خلال {0} شهر"},past:{zero:"قبل {0} شهر",one:"قبل شهر واحد",two:"قبل شهرين",few:"قبل {0} أشهر",many:"قبل {0} شهرًا",other:"قبل {0} شهر"}}},day:{displayName:"يوم",relative:{0:"اليوم",1:"غدًا",2:"بعد الغد","-2":"أول أمس","-1":"أمس"},relativeTime:{future:{zero:"خلال {0} يوم",one:"خلال يوم واحد",two:"خلال يومين",few:"خلال {0} أيام",many:"خلال {0} يومًا",other:"خلال {0} يوم"},past:{zero:"قبل {0} يوم",one:"قبل يوم واحد",two:"قبل يومين",few:"قبل {0} أيام",many:"قبل {0} يومًا",other:"قبل {0} يوم"}}},hour:{displayName:"الساعات",relativeTime:{future:{zero:"خلال {0} ساعة",one:"خلال ساعة واحدة",two:"خلال ساعتين",few:"خلال {0} ساعات",many:"خلال {0} ساعة",other:"خلال {0} ساعة"},past:{zero:"قبل {0} ساعة",one:"قبل ساعة واحدة",two:"قبل ساعتين",few:"قبل {0} ساعات",many:"قبل {0} ساعة",other:"قبل {0} ساعة"}}},minute:{displayName:"الدقائق",relativeTime:{future:{zero:"خلال {0} دقيقة",one:"خلال دقيقة واحدة",two:"خلال دقيقتين",few:"خلال {0} دقائق",many:"خلال {0} دقيقة",other:"خلال {0} دقيقة"},past:{zero:"قبل {0} دقيقة",one:"قبل دقيقة واحدة",two:"قبل دقيقتين",few:"قبل {0} دقائق",many:"قبل {0} دقيقة",other:"قبل {0} دقيقة"}}},second:{displayName:"الثواني",relative:{0:"الآن"},relativeTime:{future:{zero:"خلال {0} ثانية",one:"خلال ثانية واحدة",two:"خلال ثانيتين",few:"خلال {0} ثوانِ",many:"خلال {0} ثانية",other:"خلال {0} ثانية"},past:{zero:"قبل {0} ثانية",one:"قبل ثانية واحدة",two:"قبل ثانيتين",few:"قبل {0} ثوانِ",many:"قبل {0} ثانية",other:"قبل {0} ثانية"}}}}},{locale:"ar-AE",parentLocale:"ar",fields:{year:{displayName:"السنة",relative:{0:"هذه السنة",1:"السنة التالية","-1":"السنة الماضية"},relativeTime:{future:{zero:"خلال {0} سنة",one:"خلال سنة واحدة",two:"خلال سنتين",few:"خلال {0} سنوات",many:"خلال {0} سنة",other:"خلال {0} سنة"},past:{zero:"قبل {0} سنة",one:"قبل سنة واحدة",two:"قبل سنتين",few:"قبل {0} سنوات",many:"قبل {0} سنة",other:"قبل {0} سنة"}}},month:{displayName:"الشهر",relative:{0:"هذا الشهر",1:"الشهر التالي","-1":"الشهر الماضي"},relativeTime:{future:{zero:"خلال {0} شهر",one:"خلال شهر واحد",two:"خلال شهرين",few:"خلال {0} أشهر",many:"خلال {0} شهرًا",other:"خلال {0} شهر"},past:{zero:"قبل {0} شهر",one:"قبل شهر واحد",two:"قبل شهرين",few:"قبل {0} أشهر",many:"قبل {0} شهرًا",other:"قبل {0} شهر"}}},day:{displayName:"يوم",relative:{0:"اليوم",1:"غدًا",2:"بعد الغد","-2":"أول أمس","-1":"أمس"},relativeTime:{future:{zero:"خلال {0} يوم",one:"خلال يوم واحد",two:"خلال يومين",few:"خلال {0} أيام",many:"خلال {0} يومًا",other:"خلال {0} يوم"},past:{zero:"قبل {0} يوم",one:"قبل يوم واحد",two:"قبل يومين",few:"قبل {0} أيام",many:"قبل {0} يومًا",other:"قبل {0} يوم"}}},hour:{displayName:"الساعات",relativeTime:{future:{zero:"خلال {0} ساعة",one:"خلال ساعة واحدة",two:"خلال ساعتين",few:"خلال {0} ساعات",many:"خلال {0} ساعة",other:"خلال {0} ساعة"},past:{zero:"قبل {0} ساعة",one:"قبل ساعة واحدة",two:"قبل ساعتين",few:"قبل {0} ساعات",many:"قبل {0} ساعة",other:"قبل {0} ساعة"}}},minute:{displayName:"الدقائق",relativeTime:{future:{zero:"خلال {0} دقيقة",one:"خلال دقيقة واحدة",two:"خلال دقيقتين",few:"خلال {0} دقائق",many:"خلال {0} دقيقة",other:"خلال {0} دقيقة"},past:{zero:"قبل {0} دقيقة",one:"قبل دقيقة واحدة",two:"قبل دقيقتين",few:"قبل {0} دقائق",many:"قبل {0} دقيقة",other:"قبل {0} دقيقة"}}},second:{displayName:"الثواني",relative:{0:"الآن"},relativeTime:{future:{zero:"خلال {0} ثانية",one:"خلال ثانية واحدة",two:"خلال ثانيتين",few:"خلال {0} ثوانِ",many:"خلال {0} ثانية",other:"خلال {0} ثانية"},past:{zero:"قبل {0} ثانية",one:"قبل ثانية واحدة",two:"قبل ثانيتين",few:"قبل {0} ثوانِ",many:"قبل {0} ثانية",other:"قبل {0} ثانية"}}}}},{locale:"ar-BH",parentLocale:"ar"},{locale:"ar-DJ",parentLocale:"ar"},{locale:"ar-DZ",parentLocale:"ar"},{locale:"ar-EG",parentLocale:"ar"},{locale:"ar-EH",parentLocale:"ar"},{locale:"ar-ER",parentLocale:"ar"},{locale:"ar-IL",parentLocale:"ar"},{locale:"ar-IQ",parentLocale:"ar"},{locale:"ar-JO",parentLocale:"ar"},{locale:"ar-KM",parentLocale:"ar"},{locale:"ar-KW",parentLocale:"ar"},{locale:"ar-LB",parentLocale:"ar"},{locale:"ar-LY",parentLocale:"ar"},{locale:"ar-MA",parentLocale:"ar"},{locale:"ar-MR",parentLocale:"ar"},{locale:"ar-OM",parentLocale:"ar"},{locale:"ar-PS",parentLocale:"ar"},{locale:"ar-QA",parentLocale:"ar"},{locale:"ar-SA",parentLocale:"ar"},{locale:"ar-SD",parentLocale:"ar"},{locale:"ar-SO",parentLocale:"ar"},{locale:"ar-SS",parentLocale:"ar"},{locale:"ar-SY",parentLocale:"ar"},{locale:"ar-TD",parentLocale:"ar"},{locale:"ar-TN",parentLocale:"ar"},{locale:"ar-YE",parentLocale:"ar"}];return e});

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.as=t())}(this,function(){"use strict";var e=[{locale:"as",pluralRuleFunction:function(e,t){return t?1==e||5==e||7==e||8==e||9==e||10==e?"one":2==e||3==e?"two":4==e?"few":6==e?"many":"other":e>=0&&e<=1?"one":"other"},fields:{year:{displayName:"বছৰ",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"মাহ",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"দিন",relative:{0:"আজি",1:"কাইলৈ",2:"পৰহিলৈ","-2":"পৰহি","-1":"কালি"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"ঘণ্টা",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"মিনিট",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"ছেকেণ্ড",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.asa=t())}(this,function(){"use strict";var e=[{locale:"asa",pluralRuleFunction:function(e,t){return t?"other":1==e?"one":"other"},fields:{year:{displayName:"Mwaka",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Mweji",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Thiku",relative:{0:"Iyoo",1:"Yavo","-1":"Ighuo"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Thaa",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Dakika",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Thekunde",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,a){ true?module.exports=a():"function"==typeof define&&define.amd?define(a):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.ast=a())}(this,function(){"use strict";var e=[{locale:"ast",pluralRuleFunction:function(e,a){var t=String(e).split("."),n=!t[1];return a?"other":1==e&&n?"one":"other"},fields:{year:{displayName:"añu",relative:{0:"esti añu",1:"l’añu viniente","-1":"l’añu pasáu"},relativeTime:{future:{one:"en {0} añu",other:"en {0} años"},past:{one:"hai {0} añu",other:"hai {0} años"}}},month:{displayName:"mes",relative:{0:"esti mes",1:"el mes viniente","-1":"el mes pasáu"},relativeTime:{future:{one:"en {0} mes",other:"en {0} meses"},past:{one:"hai {0} mes",other:"hai {0} meses"}}},day:{displayName:"día",relative:{0:"güei",1:"mañana",2:"pasao mañana","-2":"antayeri","-1":"ayeri"},relativeTime:{future:{one:"en {0} día",other:"en {0} díes"},past:{one:"hai {0} día",other:"hai {0} díes"}}},hour:{displayName:"hora",relativeTime:{future:{one:"en {0} hora",other:"en {0} hores"},past:{one:"hai {0} hora",other:"hai {0} hores"}}},minute:{displayName:"minutu",relativeTime:{future:{one:"en {0} minutu",other:"en {0} minutos"},past:{one:"hai {0} minutu",other:"hai {0} minutos"}}},second:{displayName:"segundu",relative:{0:"agora"},relativeTime:{future:{one:"en {0} segundu",other:"en {0} segundos"},past:{one:"hai {0} segundu",other:"hai {0} segundos"}}}}}];return e});

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.az=t())}(this,function(){"use strict";var e=[{locale:"az",pluralRuleFunction:function(e,t){var a=String(e).split("."),r=a[0],i=r.slice(-1),n=r.slice(-2),o=r.slice(-3);return t?1==i||2==i||5==i||7==i||8==i||20==n||50==n||70==n||80==n?"one":3==i||4==i||100==o||200==o||300==o||400==o||500==o||600==o||700==o||800==o||900==o?"few":0==r||6==i||40==n||60==n||90==n?"many":"other":1==e?"one":"other"},fields:{year:{displayName:"İl",relative:{0:"bu il",1:"gələn il","-1":"keçən il"},relativeTime:{future:{one:"{0} il ərzində",other:"{0} il ərzində"},past:{one:"{0} il öncə",other:"{0} il öncə"}}},month:{displayName:"Ay",relative:{0:"bu ay",1:"gələn ay","-1":"keçən ay"},relativeTime:{future:{one:"{0} ay ərzində",other:"{0} ay ərzində"},past:{one:"{0} ay öncə",other:"{0} ay öncə"}}},day:{displayName:"Gün",relative:{0:"bu gün",1:"sabah","-1":"dünən"},relativeTime:{future:{one:"{0} gün ərzində",other:"{0} gün ərzində"},past:{one:"{0} gün öncə",other:"{0} gün öncə"}}},hour:{displayName:"Saat",relativeTime:{future:{one:"{0} saat ərzində",other:"{0} saat ərzində"},past:{one:"{0} saat öncə",other:"{0} saat öncə"}}},minute:{displayName:"Dəqiqə",relativeTime:{future:{one:"{0} dəqiqə ərzində",other:"{0} dəqiqə ərzində"},past:{one:"{0} dəqiqə öncə",other:"{0} dəqiqə öncə"}}},second:{displayName:"Saniyə",relative:{0:"indi"},relativeTime:{future:{one:"{0} saniyə ərzində",other:"{0} saniyə ərzində"},past:{one:"{0} saniyə öncə",other:"{0} saniyə öncə"}}}}},{locale:"az-Arab",pluralRuleFunction:function(e,t){return"other"},fields:{year:{displayName:"Year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Hour",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minute",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}},{locale:"az-Cyrl",pluralRuleFunction:function(e,t){return"other"},fields:{year:{displayName:"Year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Hour",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minute",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}},{locale:"az-Latn",parentLocale:"az"}];return e});

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.bas=t())}(this,function(){"use strict";var e=[{locale:"bas",pluralRuleFunction:function(e,t){return"other"},fields:{year:{displayName:"ŋwìi",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"soŋ",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"kɛl",relative:{0:"lɛ̀n",1:"yàni","-1":"yààni"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"ŋgɛŋ",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"ŋget",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"hìŋgeŋget",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.be=t())}(this,function(){"use strict";var e=[{locale:"be",pluralRuleFunction:function(e,t){var a=String(e).split("."),n=Number(a[0])==e,o=n&&a[0].slice(-1),r=n&&a[0].slice(-2);return t?2!=o&&3!=o||12==r||13==r?"other":"few":1==o&&11!=r?"one":o>=2&&o<=4&&(r<12||r>14)?"few":n&&0==o||o>=5&&o<=9||r>=11&&r<=14?"many":"other"},fields:{year:{displayName:"год",relative:{0:"у гэтым годзе",1:"у наступным годзе","-1":"у мінулым годзе"},relativeTime:{future:{one:"праз {0} год",few:"праз {0} гады",many:"праз {0} гадоў",other:"праз {0} года"},past:{one:"{0} год таму",few:"{0} гады таму",many:"{0} гадоў таму",other:"{0} года таму"}}},month:{displayName:"месяц",relative:{0:"у гэтым месяцы",1:"у наступным месяцы","-1":"у мінулым месяцы"},relativeTime:{future:{one:"праз {0} месяц",few:"праз {0} месяцы",many:"праз {0} месяцаў",other:"праз {0} месяца"},past:{one:"{0} месяц таму",few:"{0} месяцы таму",many:"{0} месяцаў таму",other:"{0} месяца таму"}}},day:{displayName:"дзень",relative:{0:"сёння",1:"заўтра",2:"паслязаўтра","-2":"пазаўчора","-1":"учора"},relativeTime:{future:{one:"праз {0} дзень",few:"праз {0} дні",many:"праз {0} дзён",other:"праз {0} дня"},past:{one:"{0} дзень таму",few:"{0} дні таму",many:"{0} дзён таму",other:"{0} дня таму"}}},hour:{displayName:"гадзіна",relativeTime:{future:{one:"праз {0} гадзіну",few:"праз {0} гадзіны",many:"праз {0} гадзін",other:"праз {0} гадзіны"},past:{one:"{0} гадзіна таму",few:"{0} гадзіны таму",many:"{0} гадзін таму",other:"{0} гадзіны таму"}}},minute:{displayName:"хвіліна",relativeTime:{future:{one:"праз {0} хвіліну",few:"праз {0} хвіліны",many:"праз {0} хвілін",other:"праз {0} хвіліны"},past:{one:"{0} хвіліна таму",few:"{0} хвіліны таму",many:"{0} хвілін таму",other:"{0} хвіліны таму"}}},second:{displayName:"секунда",relative:{0:"now"},relativeTime:{future:{one:"праз {0} секунду",few:"праз {0} секунды",many:"праз {0} секунд",other:"праз {0} секунды"},past:{one:"{0} секунда таму",few:"{0} секунды таму",many:"{0} секунд таму",other:"{0} секунды таму"}}}}}];return e});

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.bem=t())}(this,function(){"use strict";var e=[{locale:"bem",pluralRuleFunction:function(e,t){return t?"other":1==e?"one":"other"},fields:{year:{displayName:"Umwaka",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Umweshi",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Ubushiku",relative:{0:"Lelo",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Insa",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Mineti",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Sekondi",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.bez=t())}(this,function(){"use strict";var e=[{locale:"bez",pluralRuleFunction:function(e,t){return t?"other":1==e?"one":"other"},fields:{year:{displayName:"Mwaha",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Mwedzi",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Sihu",relative:{0:"Neng’u ni",1:"Hilawu","-1":"Igolo"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Saa",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Dakika",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Sekunde",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.bg=t())}(this,function(){"use strict";var e=[{locale:"bg",pluralRuleFunction:function(e,t){return t?"other":1==e?"one":"other"},fields:{year:{displayName:"година",relative:{0:"тази година",1:"следващата година","-1":"миналата година"},relativeTime:{future:{one:"след {0} година",other:"след {0} години"},past:{one:"преди {0} година",other:"преди {0} години"}}},month:{displayName:"месец",relative:{0:"този месец",1:"следващият месец","-1":"миналият месец"},relativeTime:{future:{one:"след {0} месец",other:"след {0} месеца"},past:{one:"преди {0} месец",other:"преди {0} месеца"}}},day:{displayName:"ден",relative:{0:"днес",1:"утре",2:"вдругиден","-2":"онзи ден","-1":"вчера"},relativeTime:{future:{one:"след {0} ден",other:"след {0} дни"},past:{one:"преди {0} ден",other:"преди {0} дни"}}},hour:{displayName:"час",relativeTime:{future:{one:"след {0} час",other:"след {0} часа"},past:{one:"преди {0} час",other:"преди {0} часа"}}},minute:{displayName:"минута",relativeTime:{future:{one:"след {0} минута",other:"след {0} минути"},past:{one:"преди {0} минута",other:"преди {0} минути"}}},second:{displayName:"секунда",relative:{0:"сега"},relativeTime:{future:{one:"след {0} секунда",other:"след {0} секунди"},past:{one:"преди {0} секунда",other:"преди {0} секунди"}}}}}];return e});

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.bh=t())}(this,function(){"use strict";var e=[{locale:"bh",pluralRuleFunction:function(e,t){return t?"other":0==e||1==e?"one":"other"},fields:{year:{displayName:"Year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Hour",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minute",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.bm=t())}(this,function(){"use strict";var e=[{locale:"bm",pluralRuleFunction:function(e,t){return"other"},fields:{year:{displayName:"san",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"kalo",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"don",relative:{0:"bi",1:"sini","-1":"kunu"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"lɛrɛ",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"miniti",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"sekondi",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}},{locale:"bm-Nkoo",pluralRuleFunction:function(e,t){return"other"},fields:{year:{displayName:"Year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Hour",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minute",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.bn=t())}(this,function(){"use strict";var e=[{locale:"bn",pluralRuleFunction:function(e,t){return t?1==e||5==e||7==e||8==e||9==e||10==e?"one":2==e||3==e?"two":4==e?"few":6==e?"many":"other":e>=0&&e<=1?"one":"other"},fields:{year:{displayName:"বছর",relative:{0:"এই বছর",1:"পরের বছর","-1":"গত বছর"},relativeTime:{future:{one:"{0} বছরে",other:"{0} বছরে"},past:{one:"{0} বছর পূর্বে",other:"{0} বছর পূর্বে"}}},month:{displayName:"মাস",relative:{0:"এই মাস",1:"পরের মাস","-1":"গত মাস"},relativeTime:{future:{one:"{0} মাসে",other:"{0} মাসে"},past:{one:"{0} মাস পূর্বে",other:"{0} মাস পূর্বে"}}},day:{displayName:"দিন",relative:{0:"আজ",1:"আগামীকাল",2:"আগামী পরশু","-2":"গত পরশু","-1":"গতকাল"},relativeTime:{future:{one:"{0} দিনের মধ্যে",other:"{0} দিনের মধ্যে"},past:{one:"{0} দিন পূর্বে",other:"{0} দিন পূর্বে"}}},hour:{displayName:"ঘন্টা",relativeTime:{future:{one:"{0} ঘন্টায়",other:"{0} ঘন্টায়"},past:{one:"{0} ঘন্টা আগে",other:"{0} ঘন্টা আগে"}}},minute:{displayName:"মিনিট",relativeTime:{future:{one:"{0} মিনিটে",other:"{0} মিনিটে"},past:{one:"{0} মিনিট পূর্বে",other:"{0} মিনিট পূর্বে"}}},second:{displayName:"সেকেন্ড",relative:{0:"এখন"},relativeTime:{future:{one:"{0} সেকেন্ডে",other:"{0} সেকেন্ডে"},past:{one:"{0} সেকেন্ড পূর্বে",other:"{0} সেকেন্ড পূর্বে"}}}}},{locale:"bn-IN",parentLocale:"bn"}];return e});

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.bo=t())}(this,function(){"use strict";var e=[{locale:"bo",pluralRuleFunction:function(e,t){return"other"},fields:{year:{displayName:"ལོ།",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"ཟླ་བ་",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"ཉིན།",relative:{0:"དེ་རིང་",1:"སང་ཉིན་",2:"གནངས་ཉིན་","-2":"ཁས་ཉིན་","-1":"ཁས་ས་"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"ཆུ་ཚོད་",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"སྐར་མ།",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"སྐར་ཆ།",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}},{locale:"bo-IN",parentLocale:"bo"}];return e});

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,n){ true?module.exports=n():"function"==typeof define&&define.amd?define(n):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.br=n())}(this,function(){"use strict";var e=[{locale:"br",pluralRuleFunction:function(e,n){var a=String(e).split("."),o=Number(a[0])==e,t=o&&a[0].slice(-1),i=o&&a[0].slice(-2),z=o&&a[0].slice(-6);return n?"other":1==t&&11!=i&&71!=i&&91!=i?"one":2==t&&12!=i&&72!=i&&92!=i?"two":(3==t||4==t||9==t)&&(i<10||i>19)&&(i<70||i>79)&&(i<90||i>99)?"few":0!=e&&o&&0==z?"many":"other"},fields:{year:{displayName:"bloaz",relative:{0:"hevlene",1:"ar bloaz a zeu","-1":"warlene"},relativeTime:{future:{one:"a-benn {0} bloaz",two:"a-benn {0} vloaz",few:"a-benn {0} bloaz",many:"a-benn {0} a vloazioù",other:"a-benn {0} vloaz"},past:{one:"{0} bloaz zo",two:"{0} vloaz zo",few:"{0} bloaz zo",many:"{0} a vloazioù zo",other:"{0} vloaz zo"}}},month:{displayName:"miz",relative:{0:"ar miz-mañ",1:"ar miz a zeu","-1":"ar miz diaraok"},relativeTime:{future:{one:"a-benn {0} miz",two:"a-benn {0} viz",few:"a-benn {0} miz",many:"a-benn {0} a vizioù",other:"a-benn {0} miz"},past:{one:"{0} miz zo",two:"{0} viz zo",few:"{0} miz zo",many:"{0} a vizioù zo",other:"{0} miz zo"}}},day:{displayName:"deiz",relative:{0:"hiziv",1:"warcʼhoazh","-2":"dercʼhent-decʼh","-1":"decʼh"},relativeTime:{future:{one:"a-benn {0} deiz",two:"a-benn {0} zeiz",few:"a-benn {0} deiz",many:"a-benn {0} a zeizioù",other:"a-benn {0} deiz"},past:{one:"{0} deiz zo",two:"{0} zeiz zo",few:"{0} deiz zo",many:"{0} a zeizioù zo",other:"{0} deiz zo"}}},hour:{displayName:"eur",relativeTime:{future:{one:"a-benn {0} eur",two:"a-benn {0} eur",few:"a-benn {0} eur",many:"a-benn {0} a eurioù",other:"a-benn {0} eur"},past:{one:"{0} eur zo",two:"{0} eur zo",few:"{0} eur zo",many:"{0} a eurioù zo",other:"{0} eur zo"}}},minute:{displayName:"munut",relativeTime:{future:{one:"a-benn {0} munut",two:"a-benn {0} vunut",few:"a-benn {0} munut",many:"a-benn {0} a vunutoù",other:"a-benn {0} munut"},past:{one:"{0} munut zo",two:"{0} vunut zo",few:"{0} munut zo",many:"{0} a vunutoù zo",other:"{0} munut zo"}}},second:{displayName:"eilenn",relative:{0:"bremañ"},relativeTime:{future:{one:"a-benn {0} eilenn",two:"a-benn {0} eilenn",few:"a-benn {0} eilenn",many:"a-benn {0} a eilennoù",other:"a-benn {0} eilenn"},past:{one:"{0} eilenn zo",two:"{0} eilenn zo",few:"{0} eilenn zo",many:"{0} eilenn zo",other:"{0} eilenn zo"}}}}}];return e});

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.brx=t())}(this,function(){"use strict";var e=[{locale:"brx",pluralRuleFunction:function(e,t){return t?"other":1==e?"one":"other"},fields:{year:{displayName:"बोसोर",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"दान",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"सान",relative:{0:"दिनै",1:"गाबोन","-1":"मैया"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"रिंगा",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"मिनिथ",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"सेखेन्द",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,a){ true?module.exports=a():"function"==typeof define&&define.amd?define(a):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.bs=a())}(this,function(){"use strict";var e=[{locale:"bs",pluralRuleFunction:function(e,a){var t=String(e).split("."),i=t[0],r=t[1]||"",o=!t[1],n=i.slice(-1),s=i.slice(-2),u=r.slice(-1),l=r.slice(-2);return a?"other":o&&1==n&&11!=s||1==u&&11!=l?"one":o&&n>=2&&n<=4&&(s<12||s>14)||u>=2&&u<=4&&(l<12||l>14)?"few":"other"},fields:{year:{displayName:"godina",relative:{0:"ove godine",1:"sljedeće godine","-1":"prošle godine"},relativeTime:{future:{one:"za {0} godinu",few:"za {0} godine",other:"za {0} godina"},past:{one:"prije {0} godinu",few:"prije {0} godine",other:"prije {0} godina"}}},month:{displayName:"mjesec",relative:{0:"ovaj mjesec",1:"sljedeći mjesec","-1":"prošli mjesec"},relativeTime:{future:{one:"za {0} mjesec",few:"za {0} mjeseca",other:"za {0} mjeseci"},past:{one:"prije {0} mjesec",few:"prije {0} mjeseca",other:"prije {0} mjeseci"}}},day:{displayName:"dan",relative:{0:"danas",1:"sutra",2:"prekosutra","-2":"prekjuče","-1":"jučer"},relativeTime:{future:{one:"za {0} dan",few:"za {0} dana",other:"za {0} dana"},past:{one:"prije {0} dan",few:"prije {0} dana",other:"prije {0} dana"}}},hour:{displayName:"sat",relativeTime:{future:{one:"za {0} sat",few:"za {0} sata",other:"za {0} sati"},past:{one:"prije {0} sat",few:"prije {0} sata",other:"prije {0} sati"}}},minute:{displayName:"minut",relativeTime:{future:{one:"za {0} minutu",few:"za {0} minute",other:"za {0} minuta"},past:{one:"prije {0} minutu",few:"prije {0} minute",other:"prije {0} minuta"}}},second:{displayName:"sekund",relative:{0:"now"},relativeTime:{future:{one:"za {0} sekundu",few:"za {0} sekunde",other:"za {0} sekundi"},past:{one:"prije {0} sekundu",few:"prije {0} sekunde",other:"prije {0} sekundi"}}}}},{locale:"bs-Cyrl",pluralRuleFunction:function(e,a){return"other"},fields:{year:{displayName:"година",relative:{0:"Ове године",1:"Следеће године","-1":"Прошле године"},relativeTime:{future:{one:"за {0} годину",few:"за {0} године",other:"за {0} година"},past:{one:"пре {0} годину",few:"пре {0} године",other:"пре {0} година"}}},month:{displayName:"месец",relative:{0:"Овог месеца",1:"Следећег месеца","-1":"Прошлог месеца"},relativeTime:{future:{one:"за {0} месец",few:"за {0} месеца",other:"за {0} месеци"},past:{one:"пре {0} месец",few:"пре {0} месеца",other:"пре {0} месеци"}}},day:{displayName:"дан",relative:{0:"данас",1:"сутра",2:"прекосутра","-2":"прекјуче","-1":"јуче"},relativeTime:{future:{one:"за {0} дан",few:"за {0} дана",other:"за {0} дана"},past:{one:"пре {0} дан",few:"пре {0} дана",other:"пре {0} дана"}}},hour:{displayName:"час",relativeTime:{future:{one:"за {0} сат",few:"за {0} сата",other:"за {0} сати"},past:{one:"пре {0} сат",few:"пре {0} сата",other:"пре {0} сати"}}},minute:{displayName:"минут",relativeTime:{future:{one:"за {0} минут",few:"за {0} минута",other:"за {0} минута"},past:{one:"пре {0} минут",few:"пре {0} минута",other:"пре {0} минута"}}},second:{displayName:"секунд",relative:{0:"now"},relativeTime:{future:{one:"за {0} секунд",few:"за {0} секунде",other:"за {0} секунди"},past:{one:"пре {0} секунд",few:"пре {0} секунде",other:"пре {0} секунди"}}}}},{locale:"bs-Latn",parentLocale:"bs"}];return e});

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,a){ true?module.exports=a():"function"==typeof define&&define.amd?define(a):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.ca=a())}(this,function(){"use strict";var e=[{locale:"ca",pluralRuleFunction:function(e,a){var t=String(e).split("."),o=!t[1];return a?1==e||3==e?"one":2==e?"two":4==e?"few":"other":1==e&&o?"one":"other"},fields:{year:{displayName:"any",relative:{0:"enguany",1:"l’any que ve","-1":"l’any passat"},relativeTime:{future:{one:"d’aquí a {0} any",other:"d’aquí a {0} anys"},past:{one:"fa {0} any",other:"fa {0} anys"}}},month:{displayName:"mes",relative:{0:"aquest mes",1:"el mes que ve","-1":"el mes passat"},relativeTime:{future:{one:"d’aquí a {0} mes",other:"d’aquí a {0} mesos"},past:{one:"fa {0} mes",other:"fa {0} mesos"}}},day:{displayName:"dia",relative:{0:"avui",1:"demà",2:"demà passat","-2":"abans-d’ahir","-1":"ahir"},relativeTime:{future:{one:"d’aquí a {0} dia",other:"d’aquí a {0} dies"},past:{one:"fa {0} dia",other:"fa {0} dies"}}},hour:{displayName:"hora",relativeTime:{future:{one:"d’aquí a {0} hora",other:"d’aquí a {0} hores"},past:{one:"fa {0} hora",other:"fa {0} hores"}}},minute:{displayName:"minut",relativeTime:{future:{one:"d’aquí a {0} minut",other:"d’aquí a {0} minuts"},past:{one:"fa {0} minut",other:"fa {0} minuts"}}},second:{displayName:"segon",relative:{0:"ara"},relativeTime:{future:{one:"d’aquí a {0} segon",other:"d’aquí a {0} segons"},past:{one:"fa {0} segon",other:"fa {0} segons"}}}}},{locale:"ca-AD",parentLocale:"ca"},{locale:"ca-ES-VALENCIA",parentLocale:"ca-ES",fields:{year:{displayName:"any",relative:{0:"enguany",1:"l’any que ve","-1":"l’any passat"},relativeTime:{future:{one:"d’aquí a {0} any",other:"d’aquí a {0} anys"},past:{one:"fa {0} any",other:"fa {0} anys"}}},month:{displayName:"mes",relative:{0:"aquest mes",1:"el mes que ve","-1":"el mes passat"},relativeTime:{future:{one:"d’aquí a {0} mes",other:"d’aquí a {0} mesos"},past:{one:"fa {0} mes",other:"fa {0} mesos"}}},day:{displayName:"dia",relative:{0:"avui",1:"demà",2:"demà passat","-2":"abans-d’ahir","-1":"ahir"},relativeTime:{future:{one:"d’aquí a {0} dia",other:"d’aquí a {0} dies"},past:{one:"fa {0} dia",other:"fa {0} dies"}}},hour:{displayName:"hora",relativeTime:{future:{one:"d’aquí a {0} hora",other:"d’aquí a {0} hores"},past:{one:"fa {0} hora",other:"fa {0} hores"}}},minute:{displayName:"minut",relativeTime:{future:{one:"d’aquí a {0} minut",other:"d’aquí a {0} minuts"},past:{one:"fa {0} minut",other:"fa {0} minuts"}}},second:{displayName:"segon",relative:{0:"ara"},relativeTime:{future:{one:"d’aquí a {0} segon",other:"d’aquí a {0} segons"},past:{one:"fa {0} segon",other:"fa {0} segons"}}}}},{locale:"ca-ES",parentLocale:"ca"},{locale:"ca-FR",parentLocale:"ca"},{locale:"ca-IT",parentLocale:"ca"}];return e});

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.ce=t())}(this,function(){"use strict";var e=[{locale:"ce",pluralRuleFunction:function(e,t){return t?"other":1==e?"one":"other"},fields:{year:{displayName:"шо",relative:{0:"карарчу шарахь",1:"рогӀерчу шарахь","-1":"даханчу шарахь"},relativeTime:{future:{one:"{0} шо даьлча",other:"{0} шо даьлча"},past:{one:"{0} шо хьалха",other:"{0} шо хьалха"}}},month:{displayName:"бутт",relative:{0:"карарчу баттахь",1:"рогӀерчу баттахь","-1":"баханчу баттахь"},relativeTime:{future:{one:"{0} бутт баьлча",other:"{0} бутт баьлча"},past:{one:"{0} бутт хьалха",other:"{0} бутт хьалха"}}},day:{displayName:"де",relative:{0:"тахана",1:"кхана","-1":"селхана"},relativeTime:{future:{one:"{0} де даьлча",other:"{0} де даьлча"},past:{one:"{0} де хьалха",other:"{0} де хьалха"}}},hour:{displayName:"сахьт",relativeTime:{future:{one:"{0} сахьт даьлча",other:"{0} сахьт даьлча"},past:{one:"{0} сахьт хьалха",other:"{0} сахьт хьалха"}}},minute:{displayName:"минот",relativeTime:{future:{one:"{0} минот яьлча",other:"{0} минот яьлча"},past:{one:"{0} минот хьалха",other:"{0} минот хьалха"}}},second:{displayName:"секунд",relative:{0:"now"},relativeTime:{future:{one:"{0} секунд яьлча",other:"{0} секунд яьлча"},past:{one:"{0} секунд хьалха",other:"{0} секунд хьалха"}}}}}];return e});

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.cgg=t())}(this,function(){"use strict";var e=[{locale:"cgg",pluralRuleFunction:function(e,t){return t?"other":1==e?"one":"other"},fields:{year:{displayName:"Omwaka",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Omwezi",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Eizooba",relative:{0:"Erizooba",1:"Nyenkyakare","-1":"Nyomwabazyo"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Shaaha",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Edakiika",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Obucweka/Esekendi",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.chr=t())}(this,function(){"use strict";var e=[{locale:"chr",pluralRuleFunction:function(e,t){return t?"other":1==e?"one":"other"},fields:{year:{displayName:"ᏑᏕᏘᏴᏓ",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"ᏏᏅᏓ",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"ᏏᎦ",relative:{0:"ᎪᎯ ᎢᎦ",1:"ᏌᎾᎴᎢ","-1":"ᏒᎯ"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"ᏑᏣᎶᏓ",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"ᎢᏯᏔᏬᏍᏔᏅ",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"ᎠᏎᏢ",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.ckb=t())}(this,function(){"use strict";var e=[{locale:"ckb",pluralRuleFunction:function(e,t){return t?"other":1==e?"one":"other"},fields:{year:{displayName:"Year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Hour",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minute",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}},{locale:"ckb-IR",parentLocale:"ckb"}];return e});

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,a){ true?module.exports=a():"function"==typeof define&&define.amd?define(a):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.cs=a())}(this,function(){"use strict";var e=[{locale:"cs",pluralRuleFunction:function(e,a){var n=String(e).split("."),t=n[0],o=!n[1];return a?"other":1==e&&o?"one":t>=2&&t<=4&&o?"few":o?"other":"many"},fields:{year:{displayName:"rok",relative:{0:"tento rok",1:"příští rok","-1":"minulý rok"},relativeTime:{future:{one:"za {0} rok",few:"za {0} roky",many:"za {0} roku",other:"za {0} let"},past:{one:"před {0} rokem",few:"před {0} lety",many:"před {0} rokem",other:"před {0} lety"}}},month:{displayName:"měsíc",relative:{0:"tento měsíc",1:"příští měsíc","-1":"minulý měsíc"},relativeTime:{future:{one:"za {0} měsíc",few:"za {0} měsíce",many:"za {0} měsíce",other:"za {0} měsíců"},past:{one:"před {0} měsícem",few:"před {0} měsíci",many:"před {0} měsícem",other:"před {0} měsíci"}}},day:{displayName:"den",relative:{0:"dnes",1:"zítra",2:"pozítří","-2":"předevčírem","-1":"včera"},relativeTime:{future:{one:"za {0} den",few:"za {0} dny",many:"za {0} dne",other:"za {0} dní"},past:{one:"před {0} dnem",few:"před {0} dny",many:"před {0} dnem",other:"před {0} dny"}}},hour:{displayName:"hodina",relativeTime:{future:{one:"za {0} hodinu",few:"za {0} hodiny",many:"za {0} hodiny",other:"za {0} hodin"},past:{one:"před {0} hodinou",few:"před {0} hodinami",many:"před {0} hodinou",other:"před {0} hodinami"}}},minute:{displayName:"minuta",relativeTime:{future:{one:"za {0} minutu",few:"za {0} minuty",many:"za {0} minuty",other:"za {0} minut"},past:{one:"před {0} minutou",few:"před {0} minutami",many:"před {0} minutou",other:"před {0} minutami"}}},second:{displayName:"sekunda",relative:{0:"nyní"},relativeTime:{future:{one:"za {0} sekundu",few:"za {0} sekundy",many:"za {0} sekundy",other:"za {0} sekund"},past:{one:"před {0} sekundou",few:"před {0} sekundami",many:"před {0} sekundou",other:"před {0} sekundami"}}}}}];return e});

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.cu=t())}(this,function(){"use strict";var e=[{locale:"cu",pluralRuleFunction:function(e,t){return"other"},fields:{year:{displayName:"Year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Hour",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minute",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,n){ true?module.exports=n():"function"==typeof define&&define.amd?define(n):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.cy=n())}(this,function(){"use strict";var e=[{locale:"cy",pluralRuleFunction:function(e,n){return n?0==e||7==e||8==e||9==e?"zero":1==e?"one":2==e?"two":3==e||4==e?"few":5==e||6==e?"many":"other":0==e?"zero":1==e?"one":2==e?"two":3==e?"few":6==e?"many":"other"},fields:{year:{displayName:"blwyddyn",relative:{0:"eleni",1:"blwyddyn nesaf","-1":"llynedd"},relativeTime:{future:{zero:"ymhen {0} mlynedd",one:"ymhen blwyddyn",two:"ymhen {0} flynedd",few:"ymhen {0} blynedd",many:"ymhen {0} blynedd",other:"ymhen {0} mlynedd"},past:{zero:"{0} o flynyddoedd yn ôl",one:"blwyddyn yn ôl",two:"{0} flynedd yn ôl",few:"{0} blynedd yn ôl",many:"{0} blynedd yn ôl",other:"{0} o flynyddoedd yn ôl"}}},month:{displayName:"mis",relative:{0:"y mis hwn",1:"mis nesaf","-1":"mis diwethaf"},relativeTime:{future:{zero:"ymhen {0} mis",one:"ymhen mis",two:"ymhen deufis",few:"ymhen {0} mis",many:"ymhen {0} mis",other:"ymhen {0} mis"},past:{zero:"{0} mis yn ôl",one:"{0} mis yn ôl",two:"{0} fis yn ôl",few:"{0} mis yn ôl",many:"{0} mis yn ôl",other:"{0} mis yn ôl"}}},day:{displayName:"dydd",relative:{0:"heddiw",1:"yfory",2:"drennydd","-2":"echdoe","-1":"ddoe"},relativeTime:{future:{zero:"ymhen {0} diwrnod",one:"ymhen diwrnod",two:"ymhen deuddydd",few:"ymhen tridiau",many:"ymhen {0} diwrnod",other:"ymhen {0} diwrnod"},past:{zero:"{0} diwrnod yn ôl",one:"{0} diwrnod yn ôl",two:"{0} ddiwrnod yn ôl",few:"{0} diwrnod yn ôl",many:"{0} diwrnod yn ôl",other:"{0} diwrnod yn ôl"}}},hour:{displayName:"awr",relativeTime:{future:{zero:"ymhen {0} awr",one:"ymhen awr",two:"ymhen {0} awr",few:"ymhen {0} awr",many:"ymhen {0} awr",other:"ymhen {0} awr"},past:{zero:"{0} awr yn ôl",one:"awr yn ôl",two:"{0} awr yn ôl",few:"{0} awr yn ôl",many:"{0} awr yn ôl",other:"{0} awr yn ôl"}}},minute:{displayName:"munud",relativeTime:{future:{zero:"ymhen {0} munud",one:"ymhen munud",two:"ymhen {0} funud",few:"ymhen {0} munud",many:"ymhen {0} munud",other:"ymhen {0} munud"},past:{zero:"{0} munud yn ôl",one:"{0} munud yn ôl",two:"{0} funud yn ôl",few:"{0} munud yn ôl",many:"{0} munud yn ôl",other:"{0} munud yn ôl"}}},second:{displayName:"eiliad",relative:{0:"nawr"},relativeTime:{future:{zero:"ymhen {0} eiliad",one:"ymhen eiliad",two:"ymhen {0} eiliad",few:"ymhen {0} eiliad",many:"ymhen {0} eiliad",other:"ymhen {0} eiliad"},past:{zero:"{0} eiliad yn ôl",one:"eiliad yn ôl",two:"{0} eiliad yn ôl",few:"{0} eiliad yn ôl",many:"{0} eiliad yn ôl",other:"{0} eiliad yn ôl"}}}}}];return e});

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.da=t())}(this,function(){"use strict";var e=[{locale:"da",pluralRuleFunction:function(e,t){var r=String(e).split("."),o=r[0],n=Number(r[0])==e;return t?"other":1!=e&&(n||0!=o&&1!=o)?"other":"one"},fields:{year:{displayName:"år",relative:{0:"i år",1:"næste år","-1":"sidste år"},relativeTime:{future:{one:"om {0} år",other:"om {0} år"},past:{one:"for {0} år siden",other:"for {0} år siden"}}},month:{displayName:"måned",relative:{0:"denne måned",1:"næste måned","-1":"sidste måned"},relativeTime:{future:{one:"om {0} måned",other:"om {0} måneder"},past:{one:"for {0} måned siden",other:"for {0} måneder siden"}}},day:{displayName:"dag",relative:{0:"i dag",1:"i morgen",2:"i overmorgen","-2":"i forgårs","-1":"i går"},relativeTime:{future:{one:"om {0} dag",other:"om {0} dage"},past:{one:"for {0} dag siden",other:"for {0} dage siden"}}},hour:{displayName:"time",relativeTime:{future:{one:"om {0} time",other:"om {0} timer"},past:{one:"for {0} time siden",other:"for {0} timer siden"}}},minute:{displayName:"minut",relativeTime:{future:{one:"om {0} minut",other:"om {0} minutter"},past:{one:"for {0} minut siden",other:"for {0} minutter siden"}}},second:{displayName:"sekund",relative:{0:"nu"},relativeTime:{future:{one:"om {0} sekund",other:"om {0} sekunder"},past:{one:"for {0} sekund siden",other:"for {0} sekunder siden"}}}}},{locale:"da-GL",parentLocale:"da"}];return e});

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.dav=t())}(this,function(){"use strict";var e=[{locale:"dav",pluralRuleFunction:function(e,t){return"other"},fields:{year:{displayName:"Mwaka",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Mori",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Ituku",relative:{0:"Idime",1:"Kesho","-1":"Iguo"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Saa",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Dakika",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Sekunde",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.de=t())}(this,function(){"use strict";var e=[{locale:"de",pluralRuleFunction:function(e,t){var n=String(e).split("."),a=!n[1];return t?"other":1==e&&a?"one":"other"},fields:{year:{displayName:"Jahr",relative:{0:"dieses Jahr",1:"nächstes Jahr","-1":"letztes Jahr"},relativeTime:{future:{one:"in {0} Jahr",other:"in {0} Jahren"},past:{one:"vor {0} Jahr",other:"vor {0} Jahren"}}},month:{displayName:"Monat",relative:{0:"diesen Monat",1:"nächsten Monat","-1":"letzten Monat"},relativeTime:{future:{one:"in {0} Monat",other:"in {0} Monaten"},past:{one:"vor {0} Monat",other:"vor {0} Monaten"}}},day:{displayName:"Tag",relative:{0:"heute",1:"morgen",2:"übermorgen","-2":"vorgestern","-1":"gestern"},relativeTime:{future:{one:"in {0} Tag",other:"in {0} Tagen"},past:{one:"vor {0} Tag",other:"vor {0} Tagen"}}},hour:{displayName:"Stunde",relativeTime:{future:{one:"in {0} Stunde",other:"in {0} Stunden"},past:{one:"vor {0} Stunde",other:"vor {0} Stunden"}}},minute:{displayName:"Minute",relativeTime:{future:{one:"in {0} Minute",other:"in {0} Minuten"},past:{one:"vor {0} Minute",other:"vor {0} Minuten"}}},second:{displayName:"Sekunde",relative:{0:"jetzt"},relativeTime:{future:{one:"in {0} Sekunde",other:"in {0} Sekunden"},past:{one:"vor {0} Sekunde",other:"vor {0} Sekunden"}}}}},{locale:"de-AT",parentLocale:"de"},{locale:"de-BE",parentLocale:"de"},{locale:"de-CH",parentLocale:"de"},{locale:"de-LI",parentLocale:"de"},{locale:"de-LU",parentLocale:"de"}];return e});

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.dje=t())}(this,function(){"use strict";var e=[{locale:"dje",pluralRuleFunction:function(e,t){return"other"},fields:{year:{displayName:"Jiiri",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Handu",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Zaari",relative:{0:"Hõo",1:"Suba","-1":"Bi"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Guuru",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Miniti",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Miti",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,a){ true?module.exports=a():"function"==typeof define&&define.amd?define(a):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.dsb=a())}(this,function(){"use strict";var e=[{locale:"dsb",pluralRuleFunction:function(e,a){var t=String(e).split("."),o=t[0],n=t[1]||"",i=!t[1],d=o.slice(-2),m=n.slice(-2);return a?"other":i&&1==d||1==m?"one":i&&2==d||2==m?"two":i&&(3==d||4==d)||3==m||4==m?"few":"other"},fields:{year:{displayName:"lěto",relative:{0:"lětosa",1:"znowa","-1":"łoni"},relativeTime:{future:{one:"za {0} lěto",two:"za {0} lěśe",few:"za {0} lěta",other:"za {0} lět"},past:{one:"pśed {0} lětom",two:"pśed {0} lětoma",few:"pśed {0} lětami",other:"pśed {0} lětami"}}},month:{displayName:"mjasec",relative:{0:"ten mjasec",1:"pśiducy mjasec","-1":"slědny mjasec"},relativeTime:{future:{one:"za {0} mjasec",two:"za {0} mjaseca",few:"za {0} mjasecy",other:"za {0} mjasecow"},past:{one:"pśed {0} mjasecom",two:"pśed {0} mjasecoma",few:"pśed {0} mjasecami",other:"pśed {0} mjasecami"}}},day:{displayName:"źeń",relative:{0:"źinsa",1:"witśe","-1":"cora"},relativeTime:{future:{one:"za {0} źeń",two:"za {0} dnja",few:"za {0} dny",other:"za {0} dnjow"},past:{one:"pśed {0} dnjom",two:"pśed {0} dnjoma",few:"pśed {0} dnjami",other:"pśed {0} dnjami"}}},hour:{displayName:"góźina",relativeTime:{future:{one:"za {0} góźinu",two:"za {0} góźinje",few:"za {0} góźiny",other:"za {0} góźin"},past:{one:"pśed {0} góźinu",two:"pśed {0} góźinoma",few:"pśed {0} góźinami",other:"pśed {0} góźinami"}}},minute:{displayName:"minuta",relativeTime:{future:{one:"za {0} minutu",two:"za {0} minuśe",few:"za {0} minuty",other:"za {0} minutow"},past:{one:"pśed {0} minutu",two:"pśed {0} minutoma",few:"pśed {0} minutami",other:"pśed {0} minutami"}}},second:{displayName:"sekunda",relative:{0:"now"},relativeTime:{future:{one:"za {0} sekundu",two:"za {0} sekunźe",few:"za {0} sekundy",other:"za {0} sekundow"},past:{one:"pśed {0} sekundu",two:"pśed {0} sekundoma",few:"pśed {0} sekundami",other:"pśed {0} sekundami"}}}}}];return e});

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.dua=t())}(this,function(){"use strict";var e=[{locale:"dua",pluralRuleFunction:function(e,t){return"other"},fields:{year:{displayName:"mbú",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"mɔ́di",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"búnyá",relative:{0:"wɛ́ŋgɛ̄",1:"kíɛlɛ","-1":"kíɛlɛ nítómb́í"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"ŋgandɛ",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"ndɔkɔ",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"píndí",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.dv=t())}(this,function(){"use strict";var e=[{locale:"dv",pluralRuleFunction:function(e,t){return t?"other":1==e?"one":"other"},fields:{year:{displayName:"Year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Hour",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minute",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.dyo=t())}(this,function(){"use strict";var e=[{locale:"dyo",pluralRuleFunction:function(e,t){return"other"},fields:{year:{displayName:"Emit",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Fuleeŋ",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Funak",relative:{0:"Jaat",1:"Kajom","-1":"Fucen"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Hour",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minute",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.dz=t())}(this,function(){"use strict";var e=[{locale:"dz",pluralRuleFunction:function(e,t){return"other"},fields:{year:{displayName:"ལོ",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"ལོ་འཁོར་ {0} ནང་"},past:{other:"ལོ་འཁོར་ {0} ཧེ་མ་"}}},month:{displayName:"ཟླ་ཝ་",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"ཟླཝ་ {0} ནང་"},past:{other:"ཟླཝ་ {0} ཧེ་མ་"}}},day:{displayName:"ཚེས་",relative:{0:"ད་རིས་",1:"ནངས་པ་",2:"གནངས་ཚེ","-2":"ཁ་ཉིམ","-1":"ཁ་ཙ་"},relativeTime:{future:{other:"ཉིནམ་ {0} ནང་"},past:{other:"ཉིནམ་ {0} ཧེ་མ་"}}},hour:{displayName:"ཆུ་ཚོད",relativeTime:{future:{other:"ཆུ་ཚོད་ {0} ནང་"},past:{other:"ཆུ་ཚོད་ {0} ཧེ་མ་"}}},minute:{displayName:"སྐར་མ",relativeTime:{future:{other:"སྐར་མ་ {0} ནང་"},past:{other:"སྐར་མ་ {0} ཧེ་མ་"}}},second:{displayName:"སྐར་ཆཱ་",relative:{0:"now"},relativeTime:{future:{other:"སྐར་ཆ་ {0} ནང་"},past:{other:"སྐར་ཆ་ {0} ཧེ་མ་"}}}}}];return e});

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.ebu=t())}(this,function(){"use strict";var e=[{locale:"ebu",pluralRuleFunction:function(e,t){return"other"},fields:{year:{displayName:"Mwaka",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Mweri",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Mũthenya",relative:{0:"Ũmũnthĩ",1:"Rũciũ","-1":"Ĩgoro"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Ithaa",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Ndagĩka",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Sekondi",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,a){ true?module.exports=a():"function"==typeof define&&define.amd?define(a):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.ee=a())}(this,function(){"use strict";var e=[{locale:"ee",pluralRuleFunction:function(e,a){return a?"other":1==e?"one":"other"},fields:{year:{displayName:"ƒe",relative:{0:"ƒe sia",1:"ƒe si gbɔ na","-1":"ƒe si va yi"},relativeTime:{future:{one:"le ƒe {0} me",other:"le ƒe {0} me"},past:{one:"ƒe {0} si va yi",other:"ƒe {0} si wo va yi"}}},month:{displayName:"ɣleti",relative:{0:"ɣleti sia",1:"ɣleti si gbɔ na","-1":"ɣleti si va yi"},relativeTime:{future:{one:"le ɣleti {0} me",other:"le ɣleti {0} wo me"},past:{one:"ɣleti {0} si va yi",other:"ɣleti {0} si wo va yi"}}},day:{displayName:"ŋkeke",relative:{0:"egbe",1:"etsɔ si gbɔna",2:"nyitsɔ si gbɔna","-2":"nyitsɔ si va yi","-1":"etsɔ si va yi"},relativeTime:{future:{one:"le ŋkeke {0} me",other:"le ŋkeke {0} wo me"},past:{one:"ŋkeke {0} si va yi",other:"ŋkeke {0} si wo va yi"}}},hour:{displayName:"gaƒoƒo",relativeTime:{future:{one:"le gaƒoƒo {0} me",other:"le gaƒoƒo {0} wo me"},past:{one:"gaƒoƒo {0} si va yi",other:"gaƒoƒo {0} si wo va yi"}}},minute:{displayName:"aɖabaƒoƒo",relativeTime:{future:{one:"le aɖabaƒoƒo {0} me",other:"le aɖabaƒoƒo {0} wo me"},past:{one:"aɖabaƒoƒo {0} si va yi",other:"aɖabaƒoƒo {0} si wo va yi"}}},second:{displayName:"sekend",relative:{0:"fifi"},relativeTime:{future:{one:"le sekend {0} me",other:"le sekend {0} wo me"},past:{one:"sekend {0} si va yi",other:"sekend {0} si wo va yi"}}}}},{locale:"ee-TG",parentLocale:"ee"}];return e});

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.el=t())}(this,function(){"use strict";var e=[{locale:"el",pluralRuleFunction:function(e,t){return t?"other":1==e?"one":"other"},fields:{year:{displayName:"έτος",relative:{0:"φέτος",1:"επόμενο έτος","-1":"πέρσι"},relativeTime:{future:{one:"σε {0} έτος",other:"σε {0} έτη"},past:{one:"πριν από {0} έτος",other:"πριν από {0} έτη"}}},month:{displayName:"μήνας",relative:{0:"τρέχων μήνας",1:"επόμενος μήνας","-1":"προηγούμενος μήνας"},relativeTime:{future:{one:"σε {0} μήνα",other:"σε {0} μήνες"},past:{one:"πριν από {0} μήνα",other:"πριν από {0} μήνες"}}},day:{displayName:"ημέρα",relative:{0:"σήμερα",1:"αύριο",2:"μεθαύριο","-2":"προχθές","-1":"χθες"},relativeTime:{future:{one:"σε {0} ημέρα",other:"σε {0} ημέρες"},past:{one:"πριν από {0} ημέρα",other:"πριν από {0} ημέρες"}}},hour:{displayName:"ώρα",relativeTime:{future:{one:"σε {0} ώρα",other:"σε {0} ώρες"},past:{one:"πριν από {0} ώρα",other:"πριν από {0} ώρες"}}},minute:{displayName:"λεπτό",relativeTime:{future:{one:"σε {0} λεπτό",other:"σε {0} λεπτά"},past:{one:"πριν από {0} λεπτό",other:"πριν από {0} λεπτά"}}},second:{displayName:"δευτερόλεπτο",relative:{0:"τώρα"},relativeTime:{future:{one:"σε {0} δευτερόλεπτο",other:"σε {0} δευτερόλεπτα"},past:{one:"πριν από {0} δευτερόλεπτο",other:"πριν από {0} δευτερόλεπτα"}}}}},{locale:"el-CY",parentLocale:"el"}];return e});

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,a){ true?module.exports=a():"function"==typeof define&&define.amd?define(a):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.en=a())}(this,function(){"use strict";var e=[{locale:"en",pluralRuleFunction:function(e,a){var n=String(e).split("."),l=!n[1],o=Number(n[0])==e,t=o&&n[0].slice(-1),r=o&&n[0].slice(-2);return a?1==t&&11!=r?"one":2==t&&12!=r?"two":3==t&&13!=r?"few":"other":1==e&&l?"one":"other"},fields:{year:{displayName:"year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{one:"in {0} year",other:"in {0} years"},past:{one:"{0} year ago",other:"{0} years ago"}}},month:{displayName:"month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{one:"in {0} month",other:"in {0} months"},past:{one:"{0} month ago",other:"{0} months ago"}}},day:{displayName:"day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{one:"in {0} day",other:"in {0} days"},past:{one:"{0} day ago",other:"{0} days ago"}}},hour:{displayName:"hour",relativeTime:{future:{one:"in {0} hour",other:"in {0} hours"},past:{one:"{0} hour ago",other:"{0} hours ago"}}},minute:{displayName:"minute",relativeTime:{future:{one:"in {0} minute",other:"in {0} minutes"},past:{one:"{0} minute ago",other:"{0} minutes ago"}}},second:{displayName:"second",relative:{0:"now"},relativeTime:{future:{one:"in {0} second",other:"in {0} seconds"},past:{one:"{0} second ago",other:"{0} seconds ago"}}}}},{locale:"en-001",parentLocale:"en"},{locale:"en-150",parentLocale:"en-001"},{locale:"en-AG",parentLocale:"en-001"},{locale:"en-AI",parentLocale:"en-001"},{locale:"en-AS",parentLocale:"en"},{locale:"en-AT",parentLocale:"en-150"},{locale:"en-AU",parentLocale:"en-001"},{locale:"en-BB",parentLocale:"en-001"},{locale:"en-BE",parentLocale:"en-001"},{locale:"en-BI",parentLocale:"en"},{locale:"en-BM",parentLocale:"en-001"},{locale:"en-BS",parentLocale:"en-001"},{locale:"en-BW",parentLocale:"en-001"},{locale:"en-BZ",parentLocale:"en-001"},{locale:"en-CA",parentLocale:"en-001"},{locale:"en-CC",parentLocale:"en-001"},{locale:"en-CH",parentLocale:"en-150"},{locale:"en-CK",parentLocale:"en-001"},{locale:"en-CM",parentLocale:"en-001"},{locale:"en-CX",parentLocale:"en-001"},{locale:"en-CY",parentLocale:"en-001"},{locale:"en-DE",parentLocale:"en-150"},{locale:"en-DG",parentLocale:"en-001"},{locale:"en-DK",parentLocale:"en-150"},{locale:"en-DM",parentLocale:"en-001"},{locale:"en-Dsrt",pluralRuleFunction:function(e,a){return"other"},fields:{year:{displayName:"Year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Hour",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minute",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}},{locale:"en-ER",parentLocale:"en-001"},{locale:"en-FI",parentLocale:"en-150"},{locale:"en-FJ",parentLocale:"en-001"},{locale:"en-FK",parentLocale:"en-001"},{locale:"en-FM",parentLocale:"en-001"},{locale:"en-GB",parentLocale:"en-001"},{locale:"en-GD",parentLocale:"en-001"},{locale:"en-GG",parentLocale:"en-001"},{locale:"en-GH",parentLocale:"en-001"},{locale:"en-GI",parentLocale:"en-001"},{locale:"en-GM",parentLocale:"en-001"},{locale:"en-GU",parentLocale:"en"},{locale:"en-GY",parentLocale:"en-001"},{locale:"en-HK",parentLocale:"en-001"},{locale:"en-IE",parentLocale:"en-001"},{locale:"en-IL",parentLocale:"en-001"},{locale:"en-IM",parentLocale:"en-001"},{locale:"en-IN",parentLocale:"en-001"},{locale:"en-IO",parentLocale:"en-001"},{locale:"en-JE",parentLocale:"en-001"},{locale:"en-JM",parentLocale:"en-001"},{locale:"en-KE",parentLocale:"en-001"},{locale:"en-KI",parentLocale:"en-001"},{locale:"en-KN",parentLocale:"en-001"},{locale:"en-KY",parentLocale:"en-001"},{locale:"en-LC",parentLocale:"en-001"},{locale:"en-LR",parentLocale:"en-001"},{locale:"en-LS",parentLocale:"en-001"},{locale:"en-MG",parentLocale:"en-001"},{locale:"en-MH",parentLocale:"en"},{locale:"en-MO",parentLocale:"en-001"},{locale:"en-MP",parentLocale:"en"},{locale:"en-MS",parentLocale:"en-001"},{locale:"en-MT",parentLocale:"en-001"},{locale:"en-MU",parentLocale:"en-001"},{locale:"en-MW",parentLocale:"en-001"},{locale:"en-MY",parentLocale:"en-001"},{locale:"en-NA",parentLocale:"en-001"},{locale:"en-NF",parentLocale:"en-001"},{locale:"en-NG",parentLocale:"en-001"},{locale:"en-NL",parentLocale:"en-150"},{locale:"en-NR",parentLocale:"en-001"},{locale:"en-NU",parentLocale:"en-001"},{locale:"en-NZ",parentLocale:"en-001"},{locale:"en-PG",parentLocale:"en-001"},{locale:"en-PH",parentLocale:"en-001"},{locale:"en-PK",parentLocale:"en-001"},{locale:"en-PN",parentLocale:"en-001"},{locale:"en-PR",parentLocale:"en"},{locale:"en-PW",parentLocale:"en-001"},{locale:"en-RW",parentLocale:"en-001"},{locale:"en-SB",parentLocale:"en-001"},{locale:"en-SC",parentLocale:"en-001"},{locale:"en-SD",parentLocale:"en-001"},{locale:"en-SE",parentLocale:"en-150"},{locale:"en-SG",parentLocale:"en-001"},{locale:"en-SH",parentLocale:"en-001"},{locale:"en-SI",parentLocale:"en-150"},{locale:"en-SL",parentLocale:"en-001"},{locale:"en-SS",parentLocale:"en-001"},{locale:"en-SX",parentLocale:"en-001"},{locale:"en-SZ",parentLocale:"en-001"},{locale:"en-Shaw",pluralRuleFunction:function(e,a){return"other"},fields:{year:{displayName:"Year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Hour",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minute",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}},{locale:"en-TC",parentLocale:"en-001"},{locale:"en-TK",parentLocale:"en-001"},{locale:"en-TO",parentLocale:"en-001"},{locale:"en-TT",parentLocale:"en-001"},{locale:"en-TV",parentLocale:"en-001"},{locale:"en-TZ",parentLocale:"en-001"},{locale:"en-UG",parentLocale:"en-001"},{locale:"en-UM",parentLocale:"en"},{locale:"en-US",parentLocale:"en"},{locale:"en-VC",parentLocale:"en-001"},{locale:"en-VG",parentLocale:"en-001"},{locale:"en-VI",parentLocale:"en"},{locale:"en-VU",parentLocale:"en-001"},{locale:"en-WS",parentLocale:"en-001"},{locale:"en-ZA",parentLocale:"en-001"},{locale:"en-ZM",parentLocale:"en-001"},{locale:"en-ZW",parentLocale:"en-001"}];return e});

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.eo=t())}(this,function(){"use strict";var e=[{locale:"eo",pluralRuleFunction:function(e,t){return t?"other":1==e?"one":"other"},fields:{year:{displayName:"Year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Hour",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minute",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,a){ true?module.exports=a():"function"==typeof define&&define.amd?define(a):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.es=a())}(this,function(){"use strict";var e=[{locale:"es",pluralRuleFunction:function(e,a){return a?"other":1==e?"one":"other"},fields:{year:{displayName:"año",relative:{0:"este año",1:"el próximo año","-1":"el año pasado"},relativeTime:{future:{one:"dentro de {0} año",other:"dentro de {0} años"},past:{one:"hace {0} año",other:"hace {0} años"}}},month:{displayName:"mes",relative:{0:"este mes",1:"el próximo mes","-1":"el mes pasado"},relativeTime:{future:{one:"dentro de {0} mes",other:"dentro de {0} meses"},past:{one:"hace {0} mes",other:"hace {0} meses"}}},day:{displayName:"día",relative:{0:"hoy",1:"mañana",2:"pasado mañana","-2":"anteayer","-1":"ayer"},relativeTime:{future:{one:"dentro de {0} día",other:"dentro de {0} días"},past:{one:"hace {0} día",other:"hace {0} días"}}},hour:{displayName:"hora",relativeTime:{future:{one:"dentro de {0} hora",other:"dentro de {0} horas"},past:{one:"hace {0} hora",other:"hace {0} horas"}}},minute:{displayName:"minuto",relativeTime:{future:{one:"dentro de {0} minuto",other:"dentro de {0} minutos"},past:{one:"hace {0} minuto",other:"hace {0} minutos"}}},second:{displayName:"segundo",relative:{0:"ahora"},relativeTime:{future:{one:"dentro de {0} segundo",other:"dentro de {0} segundos"},past:{one:"hace {0} segundo",other:"hace {0} segundos"}}}}},{locale:"es-419",parentLocale:"es"},{locale:"es-AR",parentLocale:"es-419"},{locale:"es-BO",parentLocale:"es-419"},{locale:"es-CL",parentLocale:"es-419"},{locale:"es-CO",parentLocale:"es-419"},{locale:"es-CR",parentLocale:"es-419",fields:{year:{displayName:"año",relative:{0:"este año",1:"el próximo año","-1":"el año pasado"},relativeTime:{future:{one:"dentro de {0} año",other:"dentro de {0} años"},past:{one:"hace {0} año",other:"hace {0} años"}}},month:{displayName:"mes",relative:{0:"este mes",1:"el próximo mes","-1":"el mes pasado"},relativeTime:{future:{one:"dentro de {0} mes",other:"dentro de {0} meses"},past:{one:"hace {0} mes",other:"hace {0} meses"}}},day:{displayName:"día",relative:{0:"hoy",1:"mañana",2:"pasado mañana","-2":"antier","-1":"ayer"},relativeTime:{future:{one:"dentro de {0} día",other:"dentro de {0} días"},past:{one:"hace {0} día",other:"hace {0} días"}}},hour:{displayName:"hora",relativeTime:{future:{one:"dentro de {0} hora",other:"dentro de {0} horas"},past:{one:"hace {0} hora",other:"hace {0} horas"}}},minute:{displayName:"minuto",relativeTime:{future:{one:"dentro de {0} minuto",other:"dentro de {0} minutos"},past:{one:"hace {0} minuto",other:"hace {0} minutos"}}},second:{displayName:"segundo",relative:{0:"ahora"},relativeTime:{future:{one:"dentro de {0} segundo",other:"dentro de {0} segundos"},past:{one:"hace {0} segundo",other:"hace {0} segundos"}}}}},{locale:"es-CU",parentLocale:"es-419"},{locale:"es-DO",parentLocale:"es-419",fields:{year:{displayName:"Año",relative:{0:"este año",1:"el próximo año","-1":"el año pasado"},relativeTime:{future:{one:"dentro de {0} año",other:"dentro de {0} años"},past:{one:"hace {0} año",other:"hace {0} años"}}},month:{displayName:"Mes",relative:{0:"este mes",1:"el próximo mes","-1":"el mes pasado"},relativeTime:{future:{one:"dentro de {0} mes",other:"dentro de {0} meses"},past:{one:"hace {0} mes",other:"hace {0} meses"}}},day:{displayName:"Día",relative:{0:"hoy",1:"mañana",2:"pasado mañana","-2":"anteayer","-1":"ayer"},relativeTime:{future:{one:"dentro de {0} día",other:"dentro de {0} días"},past:{one:"hace {0} día",other:"hace {0} días"}}},hour:{displayName:"hora",relativeTime:{future:{one:"dentro de {0} hora",other:"dentro de {0} horas"},past:{one:"hace {0} hora",other:"hace {0} horas"}}},minute:{displayName:"Minuto",relativeTime:{future:{one:"dentro de {0} minuto",other:"dentro de {0} minutos"},past:{one:"hace {0} minuto",other:"hace {0} minutos"}}},second:{displayName:"Segundo",relative:{0:"ahora"},relativeTime:{future:{one:"dentro de {0} segundo",other:"dentro de {0} segundos"},past:{one:"hace {0} segundo",other:"hace {0} segundos"}}}}},{locale:"es-EA",parentLocale:"es"},{locale:"es-EC",parentLocale:"es-419"},{locale:"es-GQ",parentLocale:"es"},{locale:"es-GT",parentLocale:"es-419",fields:{year:{displayName:"año",relative:{0:"este año",1:"el próximo año","-1":"el año pasado"},relativeTime:{future:{one:"dentro de {0} año",other:"dentro de {0} años"},past:{one:"hace {0} año",other:"hace {0} años"}}},month:{displayName:"mes",relative:{0:"este mes",1:"el próximo mes","-1":"el mes pasado"},relativeTime:{future:{one:"dentro de {0} mes",other:"dentro de {0} meses"},past:{one:"hace {0} mes",other:"hace {0} meses"}}},day:{displayName:"día",relative:{0:"hoy",1:"mañana",2:"pasado mañana","-2":"antier","-1":"ayer"},relativeTime:{future:{one:"dentro de {0} día",other:"dentro de {0} días"},past:{one:"hace {0} día",other:"hace {0} días"}}},hour:{displayName:"hora",relativeTime:{future:{one:"dentro de {0} hora",other:"dentro de {0} horas"},past:{one:"hace {0} hora",other:"hace {0} horas"}}},minute:{displayName:"minuto",relativeTime:{future:{one:"dentro de {0} minuto",other:"dentro de {0} minutos"},past:{one:"hace {0} minuto",other:"hace {0} minutos"}}},second:{displayName:"segundo",relative:{0:"ahora"},relativeTime:{future:{one:"dentro de {0} segundo",other:"dentro de {0} segundos"},past:{one:"hace {0} segundo",other:"hace {0} segundos"}}}}},{locale:"es-HN",parentLocale:"es-419",fields:{year:{displayName:"año",relative:{0:"este año",1:"el próximo año","-1":"el año pasado"},relativeTime:{future:{one:"dentro de {0} año",other:"dentro de {0} años"},past:{one:"hace {0} año",other:"hace {0} años"}}},month:{displayName:"mes",relative:{0:"este mes",1:"el próximo mes","-1":"el mes pasado"},relativeTime:{future:{one:"dentro de {0} mes",other:"dentro de {0} meses"},past:{one:"hace {0} mes",other:"hace {0} meses"}}},day:{displayName:"día",relative:{0:"hoy",1:"mañana",2:"pasado mañana","-2":"antier","-1":"ayer"},relativeTime:{future:{one:"dentro de {0} día",other:"dentro de {0} días"},past:{one:"hace {0} día",other:"hace {0} días"}}},hour:{displayName:"hora",relativeTime:{future:{one:"dentro de {0} hora",other:"dentro de {0} horas"},past:{one:"hace {0} hora",other:"hace {0} horas"}}},minute:{displayName:"minuto",relativeTime:{future:{one:"dentro de {0} minuto",other:"dentro de {0} minutos"},past:{one:"hace {0} minuto",other:"hace {0} minutos"}}},second:{displayName:"segundo",relative:{0:"ahora"},relativeTime:{future:{one:"dentro de {0} segundo",other:"dentro de {0} segundos"},past:{one:"hace {0} segundo",other:"hace {0} segundos"}}}}},{locale:"es-IC",parentLocale:"es"},{locale:"es-MX",parentLocale:"es-419",fields:{year:{displayName:"año",relative:{0:"este año",1:"el año próximo","-1":"el año pasado"},relativeTime:{future:{one:"dentro de {0} año",other:"dentro de {0} años"},past:{one:"hace {0} año",other:"hace {0} años"}}},month:{displayName:"mes",relative:{0:"este mes",1:"el mes próximo","-1":"el mes pasado"},relativeTime:{future:{one:"en {0} mes",other:"en {0} meses"},past:{one:"hace {0} mes",other:"hace {0} meses"}}},day:{displayName:"día",relative:{0:"hoy",1:"mañana",2:"pasado mañana","-2":"antier","-1":"ayer"},relativeTime:{future:{one:"dentro de {0} día",other:"dentro de {0} días"},past:{one:"hace {0} día",other:"hace {0} días"}}},hour:{displayName:"hora",relativeTime:{future:{one:"dentro de {0} hora",other:"dentro de {0} horas"},past:{one:"hace {0} hora",other:"hace {0} horas"}}},minute:{displayName:"minuto",relativeTime:{future:{one:"dentro de {0} minuto",other:"dentro de {0} minutos"},past:{one:"hace {0} minuto",other:"hace {0} minutos"}}},second:{displayName:"segundo",relative:{0:"ahora"},relativeTime:{future:{one:"dentro de {0} segundo",other:"dentro de {0} segundos"},past:{one:"hace {0} segundo",other:"hace {0} segundos"}}}}},{locale:"es-NI",parentLocale:"es-419",fields:{year:{displayName:"año",relative:{0:"este año",1:"el próximo año","-1":"el año pasado"},relativeTime:{future:{one:"dentro de {0} año",other:"dentro de {0} años"},past:{one:"hace {0} año",other:"hace {0} años"}}},month:{displayName:"mes",relative:{0:"este mes",1:"el próximo mes","-1":"el mes pasado"},relativeTime:{future:{one:"dentro de {0} mes",other:"dentro de {0} meses"},past:{one:"hace {0} mes",other:"hace {0} meses"}}},day:{displayName:"día",relative:{0:"hoy",1:"mañana",2:"pasado mañana","-2":"antier","-1":"ayer"},relativeTime:{future:{one:"dentro de {0} día",other:"dentro de {0} días"},past:{one:"hace {0} día",other:"hace {0} días"}}},hour:{displayName:"hora",relativeTime:{future:{one:"dentro de {0} hora",other:"dentro de {0} horas"},past:{one:"hace {0} hora",other:"hace {0} horas"}}},minute:{displayName:"minuto",relativeTime:{future:{one:"dentro de {0} minuto",other:"dentro de {0} minutos"},past:{one:"hace {0} minuto",other:"hace {0} minutos"}}},second:{displayName:"segundo",relative:{0:"ahora"},relativeTime:{future:{one:"dentro de {0} segundo",other:"dentro de {0} segundos"},past:{one:"hace {0} segundo",other:"hace {0} segundos"}}}}},{locale:"es-PA",parentLocale:"es-419",fields:{year:{displayName:"año",relative:{0:"este año",1:"el próximo año","-1":"el año pasado"},relativeTime:{future:{one:"dentro de {0} año",other:"dentro de {0} años"},past:{one:"hace {0} año",other:"hace {0} años"}}},month:{displayName:"mes",relative:{0:"este mes",1:"el próximo mes","-1":"el mes pasado"},relativeTime:{future:{one:"dentro de {0} mes",other:"dentro de {0} meses"},past:{one:"hace {0} mes",other:"hace {0} meses"}}},day:{displayName:"día",relative:{0:"hoy",1:"mañana",2:"pasado mañana","-2":"antier","-1":"ayer"},relativeTime:{future:{one:"dentro de {0} día",other:"dentro de {0} días"},past:{one:"hace {0} día",other:"hace {0} días"}}},hour:{displayName:"hora",relativeTime:{future:{one:"dentro de {0} hora",other:"dentro de {0} horas"},past:{one:"hace {0} hora",other:"hace {0} horas"}}},minute:{displayName:"minuto",relativeTime:{future:{one:"dentro de {0} minuto",other:"dentro de {0} minutos"},past:{one:"hace {0} minuto",other:"hace {0} minutos"}}},second:{displayName:"segundo",relative:{0:"ahora"},relativeTime:{future:{one:"dentro de {0} segundo",other:"dentro de {0} segundos"},past:{one:"hace {0} segundo",other:"hace {0} segundos"}}}}},{locale:"es-PE",parentLocale:"es-419"},{locale:"es-PH",parentLocale:"es"},{locale:"es-PR",parentLocale:"es-419"},{locale:"es-PY",parentLocale:"es-419",fields:{year:{displayName:"año",relative:{0:"este año",1:"el próximo año","-1":"el año pasado"},relativeTime:{future:{one:"dentro de {0} año",other:"dentro de {0} años"},past:{one:"hace {0} año",other:"hace {0} años"}}},month:{displayName:"mes",relative:{0:"este mes",1:"el próximo mes","-1":"el mes pasado"},relativeTime:{future:{one:"dentro de {0} mes",other:"dentro de {0} meses"},past:{one:"hace {0} mes",other:"hace {0} meses"}}},day:{displayName:"día",relative:{0:"hoy",1:"mañana",2:"pasado mañana","-2":"antes de ayer","-1":"ayer"},relativeTime:{future:{one:"dentro de {0} día",other:"dentro de {0} días"},past:{one:"hace {0} día",other:"hace {0} días"}}},hour:{displayName:"hora",relativeTime:{future:{one:"dentro de {0} hora",other:"dentro de {0} horas"},past:{one:"hace {0} hora",other:"hace {0} horas"}}},minute:{displayName:"minuto",relativeTime:{future:{one:"dentro de {0} minuto",other:"dentro de {0} minutos"},past:{one:"hace {0} minuto",other:"hace {0} minutos"}}},second:{displayName:"segundo",relative:{0:"ahora"},relativeTime:{future:{one:"dentro de {0} segundo",other:"dentro de {0} segundos"},past:{one:"hace {0} segundo",other:"hace {0} segundos"}}}}},{locale:"es-SV",parentLocale:"es-419",fields:{year:{displayName:"año",relative:{0:"este año",1:"el próximo año","-1":"el año pasado"},relativeTime:{future:{one:"dentro de {0} año",other:"dentro de {0} años"},past:{one:"hace {0} año",other:"hace {0} años"}}},month:{displayName:"mes",relative:{0:"este mes",1:"el próximo mes","-1":"el mes pasado"},relativeTime:{future:{one:"dentro de {0} mes",other:"dentro de {0} meses"},past:{one:"hace {0} mes",other:"hace {0} meses"}}},day:{displayName:"día",relative:{0:"hoy",1:"mañana",2:"pasado mañana","-2":"antier","-1":"ayer"},relativeTime:{future:{one:"dentro de {0} día",other:"dentro de {0} días"},past:{one:"hace {0} día",other:"hace {0} días"}}},hour:{displayName:"hora",relativeTime:{future:{one:"dentro de {0} hora",other:"dentro de {0} horas"},past:{one:"hace {0} hora",other:"hace {0} horas"}}},minute:{displayName:"minuto",relativeTime:{future:{one:"dentro de {0} minuto",other:"dentro de {0} minutos"},past:{one:"hace {0} minuto",other:"hace {0} minutos"}}},second:{displayName:"segundo",relative:{0:"ahora"},relativeTime:{future:{one:"dentro de {0} segundo",other:"dentro de {0} segundos"},past:{one:"hace {0} segundo",other:"hace {0} segundos"}}}}},{locale:"es-US",parentLocale:"es-419"},{locale:"es-UY",parentLocale:"es-419"},{locale:"es-VE",parentLocale:"es-419"}];return e});

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.et=t())}(this,function(){"use strict";var e=[{locale:"et",pluralRuleFunction:function(e,t){var a=String(e).split("."),n=!a[1];return t?"other":1==e&&n?"one":"other"},fields:{year:{displayName:"aasta",relative:{0:"käesolev aasta",1:"järgmine aasta","-1":"eelmine aasta"},relativeTime:{future:{one:"{0} aasta pärast",other:"{0} aasta pärast"},past:{one:"{0} aasta eest",other:"{0} aasta eest"}}},month:{displayName:"kuu",relative:{0:"käesolev kuu",1:"järgmine kuu","-1":"eelmine kuu"},relativeTime:{future:{one:"{0} kuu pärast",other:"{0} kuu pärast"},past:{one:"{0} kuu eest",other:"{0} kuu eest"}}},day:{displayName:"päev",relative:{0:"täna",1:"homme",2:"ülehomme","-2":"üleeile","-1":"eile"},relativeTime:{future:{one:"{0} päeva pärast",other:"{0} päeva pärast"},past:{one:"{0} päeva eest",other:"{0} päeva eest"}}},hour:{displayName:"tund",relativeTime:{future:{one:"{0} tunni pärast",other:"{0} tunni pärast"},past:{one:"{0} tunni eest",other:"{0} tunni eest"}}},minute:{displayName:"minut",relativeTime:{future:{one:"{0} minuti pärast",other:"{0} minuti pärast"},past:{one:"{0} minuti eest",other:"{0} minuti eest"}}},second:{displayName:"sekund",relative:{0:"nüüd"},relativeTime:{future:{one:"{0} sekundi pärast",other:"{0} sekundi pärast"},past:{one:"{0} sekundi eest",other:"{0} sekundi eest"}}}}}];return e});

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,a){ true?module.exports=a():"function"==typeof define&&define.amd?define(a):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.eu=a())}(this,function(){"use strict";var e=[{locale:"eu",pluralRuleFunction:function(e,a){return a?"other":1==e?"one":"other"},fields:{year:{displayName:"Urtea",relative:{0:"aurten",1:"hurrengo urtea","-1":"aurreko urtea"},relativeTime:{future:{one:"{0} urte barru",other:"{0} urte barru"},past:{one:"Duela {0} urte",other:"Duela {0} urte"}}},month:{displayName:"Hilabetea",relative:{0:"hilabete hau",1:"hurrengo hilabetea","-1":"aurreko hilabetea"},relativeTime:{future:{one:"{0} hilabete barru",other:"{0} hilabete barru"},past:{one:"Duela {0} hilabete",other:"Duela {0} hilabete"}}},day:{displayName:"Eguna",relative:{0:"gaur",1:"bihar",2:"etzi","-2":"herenegun","-1":"atzo"},relativeTime:{future:{one:"{0} egun barru",other:"{0} egun barru"},past:{one:"Duela {0} egun",other:"Duela {0} egun"}}},hour:{displayName:"Ordua",relativeTime:{future:{one:"{0} ordu barru",other:"{0} ordu barru"},past:{one:"Duela {0} ordu",other:"Duela {0} ordu"}}},minute:{displayName:"Minutua",relativeTime:{future:{one:"{0} minutu barru",other:"{0} minutu barru"},past:{one:"Duela {0} minutu",other:"Duela {0} minutu"}}},second:{displayName:"Segundoa",relative:{0:"orain"},relativeTime:{future:{one:"{0} segundo barru",other:"{0} segundo barru"},past:{one:"Duela {0} segundo",other:"Duela {0} segundo"}}}}}];return e});

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.ewo=t())}(this,function(){"use strict";var e=[{locale:"ewo",pluralRuleFunction:function(e,t){return"other"},fields:{year:{displayName:"M̀bú",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Ngɔn",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Amǒs",relative:{0:"Aná",1:"Okírí","-1":"Angogé"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Awola",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Enútɛn",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Akábəga",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.fa=t())}(this,function(){"use strict";var e=[{locale:"fa",pluralRuleFunction:function(e,t){return t?"other":e>=0&&e<=1?"one":"other"},fields:{year:{displayName:"سال",relative:{0:"امسال",1:"سال آینده","-1":"سال گذشته"},relativeTime:{future:{one:"{0} سال بعد",other:"{0} سال بعد"},past:{one:"{0} سال پیش",other:"{0} سال پیش"}}},month:{displayName:"ماه",relative:{0:"این ماه",1:"ماه آینده","-1":"ماه گذشته"},relativeTime:{future:{one:"{0} ماه بعد",other:"{0} ماه بعد"},past:{one:"{0} ماه پیش",other:"{0} ماه پیش"}}},day:{displayName:"روز",relative:{0:"امروز",1:"فردا",2:"پس‌فردا","-2":"پریروز","-1":"دیروز"},relativeTime:{future:{one:"{0} روز بعد",other:"{0} روز بعد"},past:{one:"{0} روز پیش",other:"{0} روز پیش"}}},hour:{displayName:"ساعت",relativeTime:{future:{one:"{0} ساعت بعد",other:"{0} ساعت بعد"},past:{one:"{0} ساعت پیش",other:"{0} ساعت پیش"}}},minute:{displayName:"دقیقه",relativeTime:{future:{one:"{0} دقیقه بعد",other:"{0} دقیقه بعد"},past:{one:"{0} دقیقه پیش",other:"{0} دقیقه پیش"}}},second:{displayName:"ثانیه",relative:{0:"اکنون"},relativeTime:{future:{one:"{0} ثانیه بعد",other:"{0} ثانیه بعد"},past:{one:"{0} ثانیه پیش",other:"{0} ثانیه پیش"}}}}},{locale:"fa-AF",parentLocale:"fa"}];return e});

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.ff=t())}(this,function(){"use strict";var e=[{locale:"ff",pluralRuleFunction:function(e,t){return t?"other":e>=0&&e<2?"one":"other"},fields:{year:{displayName:"Hitaande",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Lewru",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Ñalnde",relative:{0:"Hannde",1:"Jaŋngo","-1":"Haŋki"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Waktu",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Hoƴom",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Majaango",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}},{locale:"ff-CM",parentLocale:"ff"},{locale:"ff-GN",parentLocale:"ff"},{locale:"ff-MR",parentLocale:"ff"}];return e});

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define(e):(t.ReactIntlLocaleData=t.ReactIntlLocaleData||{},t.ReactIntlLocaleData.fi=e())}(this,function(){"use strict";var t=[{locale:"fi",pluralRuleFunction:function(t,e){var n=String(t).split("."),i=!n[1];return e?"other":1==t&&i?"one":"other"},fields:{year:{displayName:"vuosi",relative:{0:"tänä vuonna",1:"ensi vuonna","-1":"viime vuonna"},relativeTime:{future:{one:"{0} vuoden päästä",other:"{0} vuoden päästä"},past:{one:"{0} vuosi sitten",other:"{0} vuotta sitten"}}},month:{displayName:"kuukausi",relative:{0:"tässä kuussa",1:"ensi kuussa","-1":"viime kuussa"},relativeTime:{future:{one:"{0} kuukauden päästä",other:"{0} kuukauden päästä"},past:{one:"{0} kuukausi sitten",other:"{0} kuukautta sitten"}}},day:{displayName:"päivä",relative:{0:"tänään",1:"huomenna",2:"ylihuomenna","-2":"toissa päivänä","-1":"eilen"},relativeTime:{future:{one:"{0} päivän päästä",other:"{0} päivän päästä"},past:{one:"{0} päivä sitten",other:"{0} päivää sitten"}}},hour:{displayName:"tunti",relativeTime:{future:{one:"{0} tunnin päästä",other:"{0} tunnin päästä"},past:{one:"{0} tunti sitten",other:"{0} tuntia sitten"}}},minute:{displayName:"minuutti",relativeTime:{future:{one:"{0} minuutin päästä",other:"{0} minuutin päästä"},past:{one:"{0} minuutti sitten",other:"{0} minuuttia sitten"}}},second:{displayName:"sekunti",relative:{0:"nyt"},relativeTime:{future:{one:"{0} sekunnin päästä",other:"{0} sekunnin päästä"},past:{one:"{0} sekunti sitten",other:"{0} sekuntia sitten"}}}}}];return t});

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	!function(a,n){ true?module.exports=n():"function"==typeof define&&define.amd?define(n):(a.ReactIntlLocaleData=a.ReactIntlLocaleData||{},a.ReactIntlLocaleData.fil=n())}(this,function(){"use strict";var a=[{locale:"fil",pluralRuleFunction:function(a,n){var e=String(a).split("."),o=e[0],t=e[1]||"",s=!e[1],i=o.slice(-1),r=t.slice(-1);return n?1==a?"one":"other":s&&(1==o||2==o||3==o)||s&&4!=i&&6!=i&&9!=i||!s&&4!=r&&6!=r&&9!=r?"one":"other"},fields:{year:{displayName:"taon",relative:{0:"ngayong taon",1:"susunod na taon","-1":"nakaraang taon"},relativeTime:{future:{one:"sa {0} taon",other:"sa {0} (na) taon"},past:{one:"{0} taon ang nakalipas",other:"{0} (na) taon ang nakalipas"}}},month:{displayName:"buwan",relative:{0:"ngayong buwan",1:"susunod na buwan","-1":"nakaraang buwan"},relativeTime:{future:{one:"sa {0} buwan",other:"sa {0} (na) buwan"},past:{one:"{0} buwan ang nakalipas",other:"{0} (na) buwan ang nakalipas"}}},day:{displayName:"araw",relative:{0:"ngayong araw",1:"bukas",2:"Samakalawa","-2":"Araw bago ang kahapon","-1":"kahapon"},relativeTime:{future:{one:"sa {0} araw",other:"sa {0} (na) araw"},past:{one:"{0} araw ang nakalipas",other:"{0} (na) araw ang nakalipas"}}},hour:{displayName:"oras",relativeTime:{future:{one:"sa {0} oras",other:"sa {0} (na) oras"},past:{one:"{0} oras ang nakalipas",other:"{0} (na) oras ang nakalipas"}}},minute:{displayName:"minuto",relativeTime:{future:{one:"sa {0} minuto",other:"sa {0} (na) minuto"},past:{one:"{0} minuto ang nakalipas",other:"{0} (na) minuto ang nakalipas"}}},second:{displayName:"segundo",relative:{0:"ngayon"},relativeTime:{future:{one:"sa {0} segundo",other:"sa {0} (na) segundo"},past:{one:"{0} segundo ang nakalipas",other:"{0} (na) segundo ang nakalipas"}}}}}];return a});

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,a){ true?module.exports=a():"function"==typeof define&&define.amd?define(a):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.fo=a())}(this,function(){"use strict";var e=[{locale:"fo",pluralRuleFunction:function(e,a){return a?"other":1==e?"one":"other"},fields:{year:{displayName:"ár",relative:{0:"í ár",1:"næsta ár","-1":"í fjør"},relativeTime:{future:{one:"um {0} ár",other:"um {0} ár"},past:{one:"{0} ár síðan",other:"{0} ár síðan"}}},month:{displayName:"mánaður",relative:{0:"henda mánaðin",1:"næsta mánað","-1":"seinasta mánað"},relativeTime:{future:{one:"um {0} mánað",other:"um {0} mánaðir"},past:{one:"{0} mánað síðan",other:"{0} mánaðir síðan"}}},day:{displayName:"dagur",relative:{0:"í dag",1:"í morgin",2:"í ovurmorgin","-2":"fyrradagin","-1":"í gjár"},relativeTime:{future:{one:"um {0} dag",other:"um {0} dagar"},past:{one:"{0} dagur síðan",other:"{0} dagar síðan"}}},hour:{displayName:"tími",relativeTime:{future:{one:"um {0} tíma",other:"um {0} tímar"},past:{one:"{0} tími síðan",other:"{0} tímar síðan"}}},minute:{displayName:"minuttur",relativeTime:{future:{one:"um {0} minutt",other:"um {0} minuttir"},past:{one:"{0} minutt síðan",other:"{0} minuttir síðan"}}},second:{displayName:"sekund",relative:{0:"now"},relativeTime:{future:{one:"um {0} sekund",other:"um {0} sekund"},past:{one:"{0} sekund síðan",other:"{0} sekund síðan"}}}}},{locale:"fo-DK",parentLocale:"fo"}];return e});

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,a){ true?module.exports=a():"function"==typeof define&&define.amd?define(a):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.fr=a())}(this,function(){"use strict";var e=[{locale:"fr",pluralRuleFunction:function(e,a){return a?1==e?"one":"other":e>=0&&e<2?"one":"other"},fields:{year:{displayName:"année",relative:{0:"cette année",1:"l’année prochaine","-1":"l’année dernière"},relativeTime:{future:{one:"dans {0} an",other:"dans {0} ans"},past:{one:"il y a {0} an",other:"il y a {0} ans"}}},month:{displayName:"mois",relative:{0:"ce mois-ci",1:"le mois prochain","-1":"le mois dernier"},relativeTime:{future:{one:"dans {0} mois",other:"dans {0} mois"},past:{one:"il y a {0} mois",other:"il y a {0} mois"}}},day:{displayName:"jour",relative:{0:"aujourd’hui",1:"demain",2:"après-demain","-2":"avant-hier","-1":"hier"},relativeTime:{future:{one:"dans {0} jour",other:"dans {0} jours"},past:{one:"il y a {0} jour",other:"il y a {0} jours"}}},hour:{displayName:"heure",relativeTime:{future:{one:"dans {0} heure",other:"dans {0} heures"},past:{one:"il y a {0} heure",other:"il y a {0} heures"}}},minute:{displayName:"minute",relativeTime:{future:{one:"dans {0} minute",other:"dans {0} minutes"},past:{one:"il y a {0} minute",other:"il y a {0} minutes"}}},second:{displayName:"seconde",relative:{0:"maintenant"},relativeTime:{future:{one:"dans {0} seconde",other:"dans {0} secondes"},past:{one:"il y a {0} seconde",other:"il y a {0} secondes"}}}}},{locale:"fr-BE",parentLocale:"fr"},{locale:"fr-BF",parentLocale:"fr"},{locale:"fr-BI",parentLocale:"fr"},{locale:"fr-BJ",parentLocale:"fr"},{locale:"fr-BL",parentLocale:"fr"},{locale:"fr-CA",parentLocale:"fr",fields:{year:{displayName:"année",relative:{0:"cette année",1:"l’année prochaine","-1":"l’année dernière"},relativeTime:{future:{one:"Dans {0} an",other:"Dans {0} ans"},past:{one:"Il y a {0} an",other:"Il y a {0} ans"}}},month:{displayName:"mois",relative:{0:"ce mois-ci",1:"le mois prochain","-1":"le mois dernier"},relativeTime:{future:{one:"dans {0} mois",other:"dans {0} mois"},past:{one:"il y a {0} mois",other:"il y a {0} mois"}}},day:{displayName:"jour",relative:{0:"aujourd’hui",1:"demain",2:"après-demain","-2":"avant-hier","-1":"hier"},relativeTime:{future:{one:"dans {0} jour",other:"dans {0} jours"},past:{one:"il y a {0} jour",other:"il y a {0} jours"}}},hour:{displayName:"heure",relativeTime:{future:{one:"dans {0} heure",other:"dans {0} heures"},past:{one:"il y a {0} heure",other:"il y a {0} heures"}}},minute:{displayName:"minute",relativeTime:{future:{one:"Dans {0} minute",other:"Dans {0} minutes"},past:{one:"Il y a {0} minute",other:"Il y a {0} minutes"}}},second:{displayName:"seconde",relative:{0:"maintenant"},relativeTime:{future:{one:"dans {0} seconde",other:"dans {0} secondes"},past:{one:"il y a {0} seconde",other:"il y a {0} secondes"}}}}},{locale:"fr-CD",parentLocale:"fr"},{locale:"fr-CF",parentLocale:"fr"},{locale:"fr-CG",parentLocale:"fr"},{locale:"fr-CH",parentLocale:"fr"},{locale:"fr-CI",parentLocale:"fr"},{locale:"fr-CM",parentLocale:"fr"},{locale:"fr-DJ",parentLocale:"fr"},{locale:"fr-DZ",parentLocale:"fr"},{locale:"fr-GA",parentLocale:"fr"},{locale:"fr-GF",parentLocale:"fr"},{locale:"fr-GN",parentLocale:"fr"},{locale:"fr-GP",parentLocale:"fr"},{locale:"fr-GQ",parentLocale:"fr"},{locale:"fr-HT",parentLocale:"fr"},{locale:"fr-KM",parentLocale:"fr"},{locale:"fr-LU",parentLocale:"fr"},{locale:"fr-MA",parentLocale:"fr"},{locale:"fr-MC",parentLocale:"fr"},{locale:"fr-MF",parentLocale:"fr"},{locale:"fr-MG",parentLocale:"fr"},{locale:"fr-ML",parentLocale:"fr"},{locale:"fr-MQ",parentLocale:"fr"},{locale:"fr-MR",parentLocale:"fr"},{locale:"fr-MU",parentLocale:"fr"},{locale:"fr-NC",parentLocale:"fr"},{locale:"fr-NE",parentLocale:"fr"},{locale:"fr-PF",parentLocale:"fr"},{locale:"fr-PM",parentLocale:"fr"},{locale:"fr-RE",parentLocale:"fr"},{locale:"fr-RW",parentLocale:"fr"},{locale:"fr-SC",parentLocale:"fr"},{locale:"fr-SN",parentLocale:"fr"},{locale:"fr-SY",parentLocale:"fr"},{locale:"fr-TD",parentLocale:"fr"},{locale:"fr-TG",parentLocale:"fr"},{locale:"fr-TN",parentLocale:"fr"},{locale:"fr-VU",parentLocale:"fr"},{locale:"fr-WF",parentLocale:"fr"},{locale:"fr-YT",parentLocale:"fr"}];return e});

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,a){ true?module.exports=a():"function"==typeof define&&define.amd?define(a):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.fur=a())}(this,function(){"use strict";var e=[{locale:"fur",pluralRuleFunction:function(e,a){return a?"other":1==e?"one":"other"},fields:{year:{displayName:"an",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{one:"ca di {0} an",other:"ca di {0} agns"},past:{one:"{0} an indaûr",other:"{0} agns indaûr"}}},month:{displayName:"mês",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{one:"ca di {0} mês",other:"ca di {0} mês"},past:{one:"{0} mês indaûr",other:"{0} mês indaûr"}}},day:{displayName:"dì",relative:{0:"vuê",1:"doman",2:"passantdoman","-2":"îr l’altri","-1":"îr"},relativeTime:{future:{one:"ca di {0} zornade",other:"ca di {0} zornadis"},past:{one:"{0} zornade indaûr",other:"{0} zornadis indaûr"}}},hour:{displayName:"ore",relativeTime:{future:{one:"ca di {0} ore",other:"ca di {0} oris"},past:{one:"{0} ore indaûr",other:"{0} oris indaûr"}}},minute:{displayName:"minût",relativeTime:{future:{one:"ca di {0} minût",other:"ca di {0} minûts"},past:{one:"{0} minût indaûr",other:"{0} minûts indaûr"}}},second:{displayName:"secont",relative:{0:"now"},relativeTime:{future:{one:"ca di {0} secont",other:"ca di {0} seconts"},past:{one:"{0} secont indaûr",other:"{0} seconts indaûr"}}}}}];return e});

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,n){ true?module.exports=n():"function"==typeof define&&define.amd?define(n):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.fy=n())}(this,function(){"use strict";var e=[{locale:"fy",pluralRuleFunction:function(e,n){var r=String(e).split("."),t=!r[1];return n?"other":1==e&&t?"one":"other"},fields:{year:{displayName:"Jier",relative:{0:"dit jier",1:"folgjend jier","-1":"foarich jier"},relativeTime:{future:{one:"Oer {0} jier",other:"Oer {0} jier"},past:{one:"{0} jier lyn",other:"{0} jier lyn"}}},month:{displayName:"Moanne",relative:{0:"dizze moanne",1:"folgjende moanne","-1":"foarige moanne"},relativeTime:{future:{one:"Oer {0} moanne",other:"Oer {0} moannen"},past:{one:"{0} moanne lyn",other:"{0} moannen lyn"}}},day:{displayName:"dei",relative:{0:"vandaag",1:"morgen",2:"Oermorgen","-2":"eergisteren","-1":"gisteren"},relativeTime:{future:{one:"Oer {0} dei",other:"Oer {0} deien"},past:{one:"{0} dei lyn",other:"{0} deien lyn"}}},hour:{displayName:"oere",relativeTime:{future:{one:"Oer {0} oere",other:"Oer {0} oere"},past:{one:"{0} oere lyn",other:"{0} oere lyn"}}},minute:{displayName:"Minút",relativeTime:{future:{one:"Oer {0} minút",other:"Oer {0} minuten"},past:{one:"{0} minút lyn",other:"{0} minuten lyn"}}},second:{displayName:"Sekonde",relative:{0:"nu"},relativeTime:{future:{one:"Oer {0} sekonde",other:"Oer {0} sekonden"},past:{one:"{0} sekonde lyn",other:"{0} sekonden lyn"}}}}}];return e});

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	!function(n,i){ true?module.exports=i():"function"==typeof define&&define.amd?define(i):(n.ReactIntlLocaleData=n.ReactIntlLocaleData||{},n.ReactIntlLocaleData.ga=i())}(this,function(){"use strict";var n=[{locale:"ga",pluralRuleFunction:function(n,i){var a=String(n).split("."),e=Number(a[0])==n;return i?1==n?"one":"other":1==n?"one":2==n?"two":e&&n>=3&&n<=6?"few":e&&n>=7&&n<=10?"many":"other"},fields:{year:{displayName:"Bliain",relative:{0:"an bhliain seo",1:"an bhliain seo chugainn","-1":"anuraidh"},relativeTime:{future:{one:"i gceann {0} bhliain",two:"i gceann {0} bhliain",few:"i gceann {0} bliana",many:"i gceann {0} mbliana",other:"i gceann {0} bliain"},past:{one:"{0} bhliain ó shin",two:"{0} bhliain ó shin",few:"{0} bliana ó shin",many:"{0} mbliana ó shin",other:"{0} bliain ó shin"}}},month:{displayName:"Mí",relative:{0:"an mhí seo",1:"an mhí seo chugainn","-1":"an mhí seo caite"},relativeTime:{future:{one:"i gceann {0} mhí",two:"i gceann {0} mhí",few:"i gceann {0} mhí",many:"i gceann {0} mí",other:"i gceann {0} mí"},past:{one:"{0} mhí ó shin",two:"{0} mhí ó shin",few:"{0} mhí ó shin",many:"{0} mí ó shin",other:"{0} mí ó shin"}}},day:{displayName:"Lá",relative:{0:"inniu",1:"amárach",2:"arú amárach","-2":"arú inné","-1":"inné"},relativeTime:{future:{one:"i gceann {0} lá",two:"i gceann {0} lá",few:"i gceann {0} lá",many:"i gceann {0} lá",other:"i gceann {0} lá"},past:{one:"{0} lá ó shin",two:"{0} lá ó shin",few:"{0} lá ó shin",many:"{0} lá ó shin",other:"{0} lá ó shin"}}},hour:{displayName:"Uair",relativeTime:{future:{one:"i gceann {0} uair an chloig",two:"i gceann {0} uair an chloig",few:"i gceann {0} huaire an chloig",many:"i gceann {0} n-uaire an chloig",other:"i gceann {0} uair an chloig"},past:{one:"{0} uair an chloig ó shin",two:"{0} uair an chloig ó shin",few:"{0} huaire an chloig ó shin",many:"{0} n-uaire an chloig ó shin",other:"{0} uair an chloig ó shin"}}},minute:{displayName:"Nóiméad",relativeTime:{future:{one:"i gceann {0} nóiméad",two:"i gceann {0} nóiméad",few:"i gceann {0} nóiméad",many:"i gceann {0} nóiméad",other:"i gceann {0} nóiméad"},past:{one:"{0} nóiméad ó shin",two:"{0} nóiméad ó shin",few:"{0} nóiméad ó shin",many:"{0} nóiméad ó shin",other:"{0} nóiméad ó shin"}}},second:{displayName:"Soicind",relative:{0:"anois"},relativeTime:{future:{one:"i gceann {0} soicind",two:"i gceann {0} shoicind",few:"i gceann {0} shoicind",many:"i gceann {0} soicind",other:"i gceann {0} soicind"},past:{one:"{0} soicind ó shin",two:"{0} shoicind ó shin",few:"{0} shoicind ó shin",many:"{0} soicind ó shin",other:"{0} soicind ó shin"}}}}}];return n});

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	!function(a,e){ true?module.exports=e():"function"==typeof define&&define.amd?define(e):(a.ReactIntlLocaleData=a.ReactIntlLocaleData||{},a.ReactIntlLocaleData.gd=e())}(this,function(){"use strict";var a=[{locale:"gd",pluralRuleFunction:function(a,e){var n=String(a).split("."),i=Number(n[0])==a;return e?"other":1==a||11==a?"one":2==a||12==a?"two":i&&a>=3&&a<=10||i&&a>=13&&a<=19?"few":"other"},fields:{year:{displayName:"bliadhna",relative:{0:"am bliadhna",1:"an ath-bhliadhna","-2":"a-bhòn-uiridh","-1":"an-uiridh"},relativeTime:{future:{one:"an ceann {0} bhliadhna",two:"an ceann {0} bhliadhna",few:"an ceann {0} bliadhnaichean",other:"an ceann {0} bliadhna"},past:{one:"{0} bhliadhna air ais",two:"{0} bhliadhna air ais",few:"{0} bhliadhnaichean air ais",other:"{0} bliadhna air ais"}}},month:{displayName:"mìos",relative:{0:"am mìos seo",1:"an ath-mhìos","-1":"am mìos seo chaidh"},relativeTime:{future:{one:"an ceann {0} mhìosa",two:"an ceann {0} mhìosa",few:"an ceann {0} mìosan",other:"an ceann {0} mìosa"},past:{one:"{0} mhìos air ais",two:"{0} mhìos air ais",few:"{0} mìosan air ais",other:"{0} mìos air ais"}}},day:{displayName:"latha",relative:{0:"an-diugh",1:"a-màireach",2:"an-earar",3:"an-eararais","-2":"a-bhòin-dè","-1":"an-dè"},relativeTime:{future:{one:"an ceann {0} latha",two:"an ceann {0} latha",few:"an ceann {0} làithean",other:"an ceann {0} latha"},past:{one:"{0} latha air ais",two:"{0} latha air ais",few:"{0} làithean air ais",other:"{0} latha air ais"}}},hour:{displayName:"uair a thìde",relativeTime:{future:{one:"an ceann {0} uair a thìde",two:"an ceann {0} uair a thìde",few:"an ceann {0} uairean a thìde",other:"an ceann {0} uair a thìde"},past:{one:"{0} uair a thìde air ais",two:"{0} uair a thìde air ais",few:"{0} uairean a thìde air ais",other:"{0} uair a thìde air ais"}}},minute:{displayName:"mionaid",relativeTime:{future:{one:"an ceann {0} mhionaid",two:"an ceann {0} mhionaid",few:"an ceann {0} mionaidean",other:"an ceann {0} mionaid"},past:{one:"{0} mhionaid air ais",two:"{0} mhionaid air ais",few:"{0} mionaidean air ais",other:"{0} mionaid air ais"}}},second:{displayName:"diog",relative:{0:"an-dràsta"},relativeTime:{future:{one:"an ceann {0} diog",two:"an ceann {0} dhiog",few:"an ceann {0} diogan",other:"an ceann {0} diog"},past:{one:"{0} diog air ais",two:"{0} dhiog air ais",few:"{0} diogan air ais",other:"{0} diog air ais"}}}}}];return a});

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,a){ true?module.exports=a():"function"==typeof define&&define.amd?define(a):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.gl=a())}(this,function(){"use strict";var e=[{locale:"gl",pluralRuleFunction:function(e,a){var o=String(e).split("."),t=!o[1];return a?"other":1==e&&t?"one":"other"},fields:{year:{displayName:"Ano",relative:{0:"este ano",1:"seguinte ano","-1":"ano pasado"},relativeTime:{future:{one:"En {0} ano",other:"En {0} anos"},past:{one:"Hai {0} ano",other:"Hai {0} anos"}}},month:{displayName:"Mes",relative:{0:"este mes",1:"mes seguinte","-1":"mes pasado"},relativeTime:{future:{one:"En {0} mes",other:"En {0} meses"},past:{one:"Hai {0} mes",other:"Hai {0} meses"}}},day:{displayName:"Día",relative:{0:"hoxe",1:"mañá",2:"pasadomañá","-2":"antonte","-1":"onte"},relativeTime:{future:{one:"En {0} día",other:"En {0} días"},past:{one:"Hai {0} día",other:"Hai {0} días"}}},hour:{displayName:"Hora",relativeTime:{future:{one:"En {0} hora",other:"En {0} horas"},past:{one:"Hai {0} hora",other:"Hai {0} horas"}}},minute:{displayName:"Minuto",relativeTime:{future:{one:"En {0} minuto",other:"En {0} minutos"},past:{one:"Hai {0} minuto",other:"Hai {0} minutos"}}},second:{displayName:"Segundo",relative:{0:"agora"},relativeTime:{future:{one:"En {0} segundo",other:"En {0} segundos"},past:{one:"Hai {0} segundo",other:"Hai {0} segundos"}}}}}];return e});

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.gsw=t())}(this,function(){"use strict";var e=[{locale:"gsw",pluralRuleFunction:function(e,t){return t?"other":1==e?"one":"other"},fields:{year:{displayName:"Jaar",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Monet",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Tag",relative:{0:"hüt",1:"moorn",2:"übermoorn","-2":"vorgeschter","-1":"geschter"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Schtund",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minuute",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Sekunde",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}},{locale:"gsw-FR",parentLocale:"gsw"},{locale:"gsw-LI",parentLocale:"gsw"}];return e});

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.gu=t())}(this,function(){"use strict";var e=[{locale:"gu",pluralRuleFunction:function(e,t){return t?1==e?"one":2==e||3==e?"two":4==e?"few":6==e?"many":"other":e>=0&&e<=1?"one":"other"},fields:{year:{displayName:"વર્ષ",relative:{0:"આ વર્ષે",1:"આવતા વર્ષે","-1":"ગયા વર્ષે"},relativeTime:{future:{one:"{0} વર્ષમાં",other:"{0} વર્ષમાં"},past:{one:"{0} વર્ષ પહેલા",other:"{0} વર્ષ પહેલા"}}},month:{displayName:"મહિનો",relative:{0:"આ મહિને",1:"આવતા મહિને","-1":"ગયા મહિને"},relativeTime:{future:{one:"{0} મહિનામાં",other:"{0} મહિનામાં"},past:{one:"{0} મહિના પહેલા",other:"{0} મહિના પહેલા"}}},day:{displayName:"દિવસ",relative:{0:"આજે",1:"આવતીકાલે",2:"પરમદિવસે","-2":"ગયા પરમદિવસે","-1":"ગઈકાલે"},relativeTime:{future:{one:"{0} દિવસમાં",other:"{0} દિવસમાં"},past:{one:"{0} દિવસ પહેલાં",other:"{0} દિવસ પહેલા"}}},hour:{displayName:"કલાક",relativeTime:{future:{one:"{0} કલાકમાં",other:"{0} કલાકમાં"},past:{one:"{0} કલાક પહેલા",other:"{0} કલાક પહેલા"}}},minute:{displayName:"મિનિટ",relativeTime:{future:{one:"{0} મિનિટમાં",other:"{0} મિનિટમાં"},past:{one:"{0} મિનિટ પહેલા",other:"{0} મિનિટ પહેલા"}}},second:{displayName:"સેકન્ડ",relative:{0:"હમણાં"},relativeTime:{future:{one:"{0} સેકંડમાં",other:"{0} સેકંડમાં"},past:{one:"{0} સેકંડ પહેલા",other:"{0} સેકંડ પહેલા"}}}}}];return e});

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.guw=t())}(this,function(){"use strict";var e=[{locale:"guw",pluralRuleFunction:function(e,t){return t?"other":0==e||1==e?"one":"other"},fields:{year:{displayName:"Year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Hour",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minute",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.guz=t())}(this,function(){"use strict";var e=[{locale:"guz",pluralRuleFunction:function(e,t){return"other"},fields:{year:{displayName:"Omwaka",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Omotienyi",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Rituko",relative:{0:"Rero",1:"Mambia","-1":"Igoro"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Ensa",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Edakika",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Esekendi",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.gv=t())}(this,function(){"use strict";var e=[{locale:"gv",pluralRuleFunction:function(e,t){var a=String(e).split("."),r=a[0],o=!a[1],i=r.slice(-1),n=r.slice(-2);return t?"other":o&&1==i?"one":o&&2==i?"two":!o||0!=n&&20!=n&&40!=n&&60!=n&&80!=n?o?"other":"many":"few"},fields:{year:{displayName:"Year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Hour",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minute",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.ha=t())}(this,function(){"use strict";var e=[{locale:"ha",pluralRuleFunction:function(e,t){return t?"other":1==e?"one":"other"},fields:{year:{displayName:"Shekara",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Wata",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Kwana",relative:{0:"Yau",1:"Gobe","-1":"Jiya"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Awa",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minti",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Daƙiƙa",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}},{locale:"ha-Arab",pluralRuleFunction:function(e,t){return"other"},fields:{year:{displayName:"Year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Hour",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minute",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}},{locale:"ha-GH",parentLocale:"ha"},{locale:"ha-NE",parentLocale:"ha"}];return e});

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.haw=t())}(this,function(){"use strict";var e=[{locale:"haw",pluralRuleFunction:function(e,t){return t?"other":1==e?"one":"other"},fields:{year:{displayName:"Year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Hour",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minute",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.he=t())}(this,function(){"use strict";var e=[{locale:"he",pluralRuleFunction:function(e,t){var a=String(e).split("."),o=a[0],n=!a[1],r=Number(a[0])==e,i=r&&a[0].slice(-1);return t?"other":1==e&&n?"one":2==o&&n?"two":n&&(e<0||e>10)&&r&&0==i?"many":"other"},fields:{year:{displayName:"שנה",relative:{0:"השנה",1:"השנה הבאה","-1":"השנה שעברה"},relativeTime:{future:{one:"בעוד שנה",two:"בעוד שנתיים",many:"בעוד {0} שנה",other:"בעוד {0} שנים"},past:{one:"לפני שנה",two:"לפני שנתיים",many:"לפני {0} שנה",other:"לפני {0} שנים"}}},month:{displayName:"חודש",relative:{0:"החודש",1:"החודש הבא","-1":"החודש שעבר"},relativeTime:{future:{one:"בעוד חודש",two:"בעוד חודשיים",many:"בעוד {0} חודשים",other:"בעוד {0} חודשים"},past:{one:"לפני חודש",two:"לפני חודשיים",many:"לפני {0} חודשים",other:"לפני {0} חודשים"}}},day:{displayName:"יום",relative:{0:"היום",1:"מחר",2:"מחרתיים","-2":"שלשום","-1":"אתמול"},relativeTime:{future:{one:"בעוד יום {0}",two:"בעוד יומיים",many:"בעוד {0} ימים",other:"בעוד {0} ימים"},past:{one:"לפני יום {0}",two:"לפני יומיים",many:"לפני {0} ימים",other:"לפני {0} ימים"}}},hour:{displayName:"שעה",relativeTime:{future:{one:"בעוד שעה",two:"בעוד שעתיים",many:"בעוד {0} שעות",other:"בעוד {0} שעות"},past:{one:"לפני שעה",two:"לפני שעתיים",many:"לפני {0} שעות",other:"לפני {0} שעות"}}},minute:{displayName:"דקה",relativeTime:{future:{one:"בעוד דקה",two:"בעוד שתי דקות",many:"בעוד {0} דקות",other:"בעוד {0} דקות"},past:{one:"לפני דקה",two:"לפני שתי דקות",many:"לפני {0} דקות",other:"לפני {0} דקות"}}},second:{displayName:"שנייה",relative:{0:"עכשיו"},relativeTime:{future:{one:"בעוד שנייה",two:"בעוד שתי שניות",many:"בעוד {0} שניות",other:"בעוד {0} שניות"},past:{one:"לפני שנייה",two:"לפני שתי שניות",many:"לפני {0} שניות",other:"לפני {0} שניות"}}}}}];return e});

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.hi=t())}(this,function(){"use strict";var e=[{locale:"hi",pluralRuleFunction:function(e,t){return t?1==e?"one":2==e||3==e?"two":4==e?"few":6==e?"many":"other":e>=0&&e<=1?"one":"other"},fields:{year:{displayName:"वर्ष",relative:{0:"इस वर्ष",1:"अगला वर्ष","-1":"पिछला वर्ष"},relativeTime:{future:{one:"{0} वर्ष में",other:"{0} वर्ष में"},past:{one:"{0} वर्ष पहले",other:"{0} वर्ष पहले"}}},month:{displayName:"माह",relative:{0:"इस माह",1:"अगला माह","-1":"पिछला माह"},relativeTime:{future:{one:"{0} माह में",other:"{0} माह में"},past:{one:"{0} माह पहले",other:"{0} माह पहले"}}},day:{displayName:"दिन",relative:{0:"आज",1:"कल",2:"परसों","-2":"बीता परसों","-1":"कल"},relativeTime:{future:{one:"{0} दिन में",other:"{0} दिन में"},past:{one:"{0} दिन पहले",other:"{0} दिन पहले"}}},hour:{displayName:"घंटा",relativeTime:{future:{one:"{0} घंटे में",other:"{0} घंटे में"},past:{one:"{0} घंटे पहले",other:"{0} घंटे पहले"}}},minute:{displayName:"मिनट",relativeTime:{future:{one:"{0} मिनट में",other:"{0} मिनट में"},past:{one:"{0} मिनट पहले",other:"{0} मिनट पहले"}}},second:{displayName:"सेकंड",relative:{0:"अब"},relativeTime:{future:{one:"{0} सेकंड में",other:"{0} सेकंड में"},past:{one:"{0} सेकंड पहले",other:"{0} सेकंड पहले"}}}}}];return e});

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,a){ true?module.exports=a():"function"==typeof define&&define.amd?define(a):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.hr=a())}(this,function(){"use strict";var e=[{locale:"hr",pluralRuleFunction:function(e,a){var i=String(e).split("."),t=i[0],r=i[1]||"",n=!i[1],o=t.slice(-1),s=t.slice(-2),u=r.slice(-1),d=r.slice(-2);return a?"other":n&&1==o&&11!=s||1==u&&11!=d?"one":n&&o>=2&&o<=4&&(s<12||s>14)||u>=2&&u<=4&&(d<12||d>14)?"few":"other"},fields:{year:{displayName:"godina",relative:{0:"ove godine",1:"sljedeće godine","-1":"prošle godine"},relativeTime:{future:{one:"za {0} godinu",few:"za {0} godine",other:"za {0} godina"},past:{one:"prije {0} godinu",few:"prije {0} godine",other:"prije {0} godina"}}},month:{displayName:"mjesec",relative:{0:"ovaj mjesec",1:"sljedeći mjesec","-1":"prošli mjesec"},relativeTime:{future:{one:"za {0} mjesec",few:"za {0} mjeseca",other:"za {0} mjeseci"},past:{one:"prije {0} mjesec",few:"prije {0} mjeseca",other:"prije {0} mjeseci"}}},day:{displayName:"dan",relative:{0:"danas",1:"sutra",2:"prekosutra","-2":"prekjučer","-1":"jučer"},relativeTime:{future:{one:"za {0} dan",few:"za {0} dana",other:"za {0} dana"},past:{one:"prije {0} dan",few:"prije {0} dana",other:"prije {0} dana"}}},hour:{displayName:"sat",relativeTime:{future:{one:"za {0} sat",few:"za {0} sata",other:"za {0} sati"},past:{one:"prije {0} sat",few:"prije {0} sata",other:"prije {0} sati"}}},minute:{displayName:"minuta",relativeTime:{future:{one:"za {0} minutu",few:"za {0} minute",other:"za {0} minuta"},past:{one:"prije {0} minutu",few:"prije {0} minute",other:"prije {0} minuta"}}},second:{displayName:"sekunda",relative:{0:"sada"},relativeTime:{future:{one:"za {0} sekundu",few:"za {0} sekunde",other:"za {0} sekundi"},past:{one:"prije {0} sekundu",few:"prije {0} sekunde",other:"prije {0} sekundi"}}}}},{locale:"hr-BA",parentLocale:"hr"}];return e});

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,a){ true?module.exports=a():"function"==typeof define&&define.amd?define(a):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.hsb=a())}(this,function(){"use strict";var e=[{locale:"hsb",pluralRuleFunction:function(e,a){var t=String(e).split("."),o=t[0],n=t[1]||"",i=!t[1],d=o.slice(-2),m=n.slice(-2);return a?"other":i&&1==d||1==m?"one":i&&2==d||2==m?"two":i&&(3==d||4==d)||3==m||4==m?"few":"other"},fields:{year:{displayName:"lěto",relative:{0:"lětsa",1:"klětu","-1":"loni"},relativeTime:{future:{one:"za {0} lěto",two:"za {0} lěće",few:"za {0} lěta",other:"za {0} lět"},past:{one:"před {0} lětom",two:"před {0} lětomaj",few:"před {0} lětami",other:"před {0} lětami"}}},month:{displayName:"měsac",relative:{0:"tutón měsac",1:"přichodny měsac","-1":"zašły měsac"},relativeTime:{future:{one:"za {0} měsac",two:"za {0} měsacaj",few:"za {0} měsacy",other:"za {0} měsacow"},past:{one:"před {0} měsacom",two:"před {0} měsacomaj",few:"před {0} měsacami",other:"před {0} měsacami"}}},day:{displayName:"dźeń",relative:{0:"dźensa",1:"jutře","-1":"wčera"},relativeTime:{future:{one:"za {0} dźeń",two:"za {0} dnjej",few:"za {0} dny",other:"za {0} dnjow"},past:{one:"před {0} dnjom",two:"před {0} dnjomaj",few:"před {0} dnjemi",other:"před {0} dnjemi"}}},hour:{displayName:"hodźina",relativeTime:{future:{one:"za {0} hodźinu",two:"za {0} hodźinje",few:"za {0} hodźiny",other:"za {0} hodźin"},past:{one:"před {0} hodźinu",two:"před {0} hodźinomaj",few:"před {0} hodźinami",other:"před {0} hodźinami"}}},minute:{displayName:"minuta",relativeTime:{future:{one:"za {0} minutu",two:"za {0} minuće",few:"za {0} minuty",other:"za {0} minutow"},past:{one:"před {0} minutu",two:"před {0} minutomaj",few:"před {0} minutami",other:"před {0} minutami"}}},second:{displayName:"sekunda",relative:{0:"now"},relativeTime:{future:{one:"za {0} sekundu",two:"za {0} sekundźe",few:"za {0} sekundy",other:"za {0} sekundow"},past:{one:"před {0} sekundu",two:"před {0} sekundomaj",few:"před {0} sekundami",other:"před {0} sekundami"}}}}}];return e});

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.hu=t())}(this,function(){"use strict";var e=[{locale:"hu",pluralRuleFunction:function(e,t){return t?1==e||5==e?"one":"other":1==e?"one":"other"},fields:{year:{displayName:"év",relative:{0:"ez az év",1:"következő év","-1":"előző év"},relativeTime:{future:{one:"{0} év múlva",other:"{0} év múlva"},past:{one:"{0} évvel ezelőtt",other:"{0} évvel ezelőtt"}}},month:{displayName:"hónap",relative:{0:"ez a hónap",1:"következő hónap","-1":"előző hónap"},relativeTime:{future:{one:"{0} hónap múlva",other:"{0} hónap múlva"},past:{one:"{0} hónappal ezelőtt",other:"{0} hónappal ezelőtt"}}},day:{displayName:"nap",relative:{0:"ma",1:"holnap",2:"holnapután","-2":"tegnapelőtt","-1":"tegnap"},relativeTime:{future:{one:"{0} nap múlva",other:"{0} nap múlva"},past:{one:"{0} nappal ezelőtt",other:"{0} nappal ezelőtt"}}},hour:{displayName:"óra",relativeTime:{future:{one:"{0} óra múlva",other:"{0} óra múlva"},past:{one:"{0} órával ezelőtt",other:"{0} órával ezelőtt"}}},minute:{displayName:"perc",relativeTime:{future:{one:"{0} perc múlva",other:"{0} perc múlva"},past:{one:"{0} perccel ezelőtt",other:"{0} perccel ezelőtt"}}},second:{displayName:"másodperc",relative:{0:"most"},relativeTime:{future:{one:"{0} másodperc múlva",other:"{0} másodperc múlva"},past:{one:"{0} másodperccel ezelőtt",other:"{0} másodperccel ezelőtt"}}}}}];return e});

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.hy=t())}(this,function(){"use strict";var e=[{locale:"hy",pluralRuleFunction:function(e,t){return t?1==e?"one":"other":e>=0&&e<2?"one":"other"},fields:{year:{displayName:"Տարի",relative:{0:"այս տարի",1:"հաջորդ տարի","-1":"անցյալ տարի"},relativeTime:{future:{one:"{0} տարի անց",other:"{0} տարի անց"},past:{one:"{0} տարի առաջ",other:"{0} տարի առաջ"}}},month:{displayName:"Ամիս",relative:{0:"այս ամիս",1:"հաջորդ ամիս","-1":"անցյալ ամիս"},relativeTime:{future:{one:"{0} ամիս անց",other:"{0} ամիս անց"},past:{one:"{0} ամիս առաջ",other:"{0} ամիս առաջ"}}},day:{displayName:"Օր",relative:{0:"այսօր",1:"վաղը",2:"վաղը չէ մյուս օրը","-2":"երեկ չէ առաջի օրը","-1":"երեկ"},relativeTime:{future:{one:"{0} օր անց",other:"{0} օր անց"},past:{one:"{0} օր առաջ",other:"{0} օր առաջ"}}},hour:{displayName:"Ժամ",relativeTime:{future:{one:"{0} ժամ անց",other:"{0} ժամ անց"},past:{one:"{0} ժամ առաջ",other:"{0} ժամ առաջ"}}},minute:{displayName:"Րոպե",relativeTime:{future:{one:"{0} րոպե անց",other:"{0} րոպե անց"},past:{one:"{0} րոպե առաջ",other:"{0} րոպե առաջ"}}},second:{displayName:"Վայրկյան",relative:{0:"այժմ"},relativeTime:{future:{one:"{0} վայրկյան անց",other:"{0} վայրկյան անց"},past:{one:"{0} վայրկյան առաջ",other:"{0} վայրկյան առաջ"}}}}}];return e});

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	!function(a,e){ true?module.exports=e():"function"==typeof define&&define.amd?define(e):(a.ReactIntlLocaleData=a.ReactIntlLocaleData||{},a.ReactIntlLocaleData.id=e())}(this,function(){"use strict";var a=[{locale:"id",pluralRuleFunction:function(a,e){return"other"},fields:{year:{displayName:"Tahun",relative:{0:"tahun ini",1:"tahun depan","-1":"tahun lalu"},relativeTime:{future:{other:"Dalam {0} tahun"},past:{other:"{0} tahun yang lalu"}}},month:{displayName:"Bulan",relative:{0:"bulan ini",1:"Bulan berikutnya","-1":"bulan lalu"},relativeTime:{future:{other:"Dalam {0} bulan"},past:{other:"{0} bulan yang lalu"}}},day:{displayName:"Hari",relative:{0:"hari ini",1:"besok",2:"lusa","-2":"kemarin lusa","-1":"kemarin"},relativeTime:{future:{other:"Dalam {0} hari"},past:{other:"{0} hari yang lalu"}}},hour:{displayName:"Jam",relativeTime:{future:{other:"Dalam {0} jam"},past:{other:"{0} jam yang lalu"}}},minute:{displayName:"Menit",relativeTime:{future:{other:"Dalam {0} menit"},past:{other:"{0} menit yang lalu"}}},second:{displayName:"Detik",relative:{0:"sekarang"},relativeTime:{future:{other:"Dalam {0} detik"},past:{other:"{0} detik yang lalu"}}}}}];return a});

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.ig=t())}(this,function(){"use strict";var e=[{locale:"ig",pluralRuleFunction:function(e,t){return"other"},fields:{year:{displayName:"Afọ",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Ọnwa",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Ụbọchị",relative:{0:"Taata",1:"Echi","-1":"Nnyaafụ"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Elekere",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Nkeji",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Nkejinta",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.ii=t())}(this,function(){"use strict";var e=[{locale:"ii",pluralRuleFunction:function(e,t){return"other"},fields:{year:{displayName:"ꈎ",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"ꆪ",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"ꑍ",relative:{0:"ꀃꑍ",1:"ꃆꏂꑍ",2:"ꌕꀿꑍ","-2":"ꎴꂿꋍꑍ","-1":"ꀋꅔꉈ"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"ꄮꈉ",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"ꃏ",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"ꇙ",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.in=t())}(this,function(){"use strict";var e=[{locale:"in",pluralRuleFunction:function(e,t){return"other"},fields:{year:{displayName:"Year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Hour",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minute",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 103 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 104 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,r){ true?module.exports=r():"function"==typeof define&&define.amd?define(r):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.is=r())}(this,function(){"use strict";var e=[{locale:"is",pluralRuleFunction:function(e,r){var t=String(e).split("."),i=t[0],u=Number(t[0])==e,a=i.slice(-1),n=i.slice(-2);return r?"other":u&&1==a&&11!=n||!u?"one":"other"},fields:{year:{displayName:"ár",relative:{0:"á þessu ári",1:"á næsta ári","-1":"á síðasta ári"},relativeTime:{future:{one:"eftir {0} ár",other:"eftir {0} ár"},past:{one:"fyrir {0} ári",other:"fyrir {0} árum"}}},month:{displayName:"mánuður",relative:{0:"í þessum mánuði",1:"í næsta mánuði","-1":"í síðasta mánuði"},relativeTime:{future:{one:"eftir {0} mánuð",other:"eftir {0} mánuði"},past:{one:"fyrir {0} mánuði",other:"fyrir {0} mánuðum"}}},day:{displayName:"dagur",relative:{0:"í dag",1:"á morgun",2:"eftir tvo daga","-2":"í fyrradag","-1":"í gær"},relativeTime:{future:{one:"eftir {0} dag",other:"eftir {0} daga"},past:{one:"fyrir {0} degi",other:"fyrir {0} dögum"}}},hour:{displayName:"klukkustund",relativeTime:{future:{one:"eftir {0} klukkustund",other:"eftir {0} klukkustundir"},past:{one:"fyrir {0} klukkustund",other:"fyrir {0} klukkustundum"}}},minute:{displayName:"mínúta",relativeTime:{future:{one:"eftir {0} mínútu",other:"eftir {0} mínútur"},past:{one:"fyrir {0} mínútu",other:"fyrir {0} mínútum"}}},second:{displayName:"sekúnda",relative:{0:"núna"},relativeTime:{future:{one:"eftir {0} sekúndu",other:"eftir {0} sekúndur"},past:{one:"fyrir {0} sekúndu",other:"fyrir {0} sekúndum"}}}}}];return e});

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,o){ true?module.exports=o():"function"==typeof define&&define.amd?define(o):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.it=o())}(this,function(){"use strict";var e=[{locale:"it",pluralRuleFunction:function(e,o){var a=String(e).split("."),t=!a[1];return o?11==e||8==e||80==e||800==e?"many":"other":1==e&&t?"one":"other"},fields:{year:{displayName:"anno",relative:{0:"quest’anno",1:"anno prossimo","-1":"anno scorso"},relativeTime:{future:{one:"tra {0} anno",other:"tra {0} anni"},past:{one:"{0} anno fa",other:"{0} anni fa"}}},month:{displayName:"mese",relative:{0:"questo mese",1:"mese prossimo","-1":"mese scorso"},relativeTime:{future:{one:"tra {0} mese",other:"tra {0} mesi"},past:{one:"{0} mese fa",other:"{0} mesi fa"}}},day:{displayName:"giorno",relative:{0:"oggi",1:"domani",2:"dopodomani","-2":"l’altro ieri","-1":"ieri"},relativeTime:{future:{one:"tra {0} giorno",other:"tra {0} giorni"},past:{one:"{0} giorno fa",other:"{0} giorni fa"}}},hour:{displayName:"ora",relativeTime:{future:{one:"tra {0} ora",other:"tra {0} ore"},past:{one:"{0} ora fa",other:"{0} ore fa"}}},minute:{displayName:"minuto",relativeTime:{future:{one:"tra {0} minuto",other:"tra {0} minuti"},past:{one:"{0} minuto fa",other:"{0} minuti fa"}}},second:{displayName:"Secondo",relative:{0:"ora"},relativeTime:{future:{one:"tra {0} secondo",other:"tra {0} secondi"},past:{one:"{0} secondo fa",other:"{0} secondi fa"}}}}},{locale:"it-CH",parentLocale:"it"},{locale:"it-SM",parentLocale:"it"}];return e});

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.iu=t())}(this,function(){"use strict";var e=[{locale:"iu",pluralRuleFunction:function(e,t){return t?"other":1==e?"one":2==e?"two":"other"},fields:{year:{displayName:"Year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Hour",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minute",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}},{locale:"iu-Latn",pluralRuleFunction:function(e,t){return"other"},fields:{year:{displayName:"Year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Hour",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minute",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.iw=t())}(this,function(){"use strict";var e=[{locale:"iw",pluralRuleFunction:function(e,t){var a=String(e).split("."),r=a[0],o=!a[1],i=Number(a[0])==e,n=i&&a[0].slice(-1);return t?"other":1==e&&o?"one":2==r&&o?"two":o&&(e<0||e>10)&&i&&0==n?"many":"other"},fields:{year:{displayName:"Year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Hour",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minute",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.ja=t())}(this,function(){"use strict";var e=[{locale:"ja",pluralRuleFunction:function(e,t){return"other"},fields:{year:{displayName:"年",relative:{0:"今年",1:"翌年","-1":"昨年"},relativeTime:{future:{other:"{0} 年後"},past:{other:"{0} 年前"}}},month:{displayName:"月",relative:{0:"今月",1:"翌月","-1":"先月"},relativeTime:{future:{other:"{0} か月後"},past:{other:"{0} か月前"}}},day:{displayName:"日",relative:{0:"今日",1:"明日",2:"明後日","-2":"一昨日","-1":"昨日"},relativeTime:{future:{other:"{0} 日後"},past:{other:"{0} 日前"}}},hour:{displayName:"時",relativeTime:{future:{other:"{0} 時間後"},past:{other:"{0} 時間前"}}},minute:{displayName:"分",relativeTime:{future:{other:"{0} 分後"},past:{other:"{0} 分前"}}},second:{displayName:"秒",relative:{0:"今すぐ"},relativeTime:{future:{other:"{0} 秒後"},past:{other:"{0} 秒前"}}}}}];return e});

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.jbo=t())}(this,function(){"use strict";var e=[{locale:"jbo",pluralRuleFunction:function(e,t){return"other"},fields:{year:{displayName:"Year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Hour",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minute",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.jgo=t())}(this,function(){"use strict";var e=[{locale:"jgo",pluralRuleFunction:function(e,t){return t?"other":1==e?"one":"other"},fields:{year:{displayName:"Year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{one:"Nǔu ŋguꞋ {0}",other:"Nǔu ŋguꞋ {0}"},past:{one:"Ɛ́gɛ́ mɔ́ ŋguꞋ {0}",other:"Ɛ́gɛ́ mɔ́ ŋguꞋ {0}"}}},month:{displayName:"Month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{one:"Nǔu {0} saŋ",other:"Nǔu {0} saŋ"},past:{one:"ɛ́ gɛ́ mɔ́ pɛsaŋ {0}",other:"ɛ́ gɛ́ mɔ́ pɛsaŋ {0}"}}},day:{displayName:"Day",relative:{0:"lɔꞋɔ",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{one:"Nǔu lɛ́Ꞌ {0}",other:"Nǔu lɛ́Ꞌ {0}"},past:{one:"Ɛ́ gɛ́ mɔ́ lɛ́Ꞌ {0}",other:"Ɛ́ gɛ́ mɔ́ lɛ́Ꞌ {0}"}}},hour:{displayName:"Hour",relativeTime:{future:{one:"nǔu háwa {0}",other:"nǔu háwa {0}"},past:{one:"ɛ́ gɛ mɔ́ {0} háwa",other:"ɛ́ gɛ mɔ́ {0} háwa"}}},minute:{displayName:"Minute",relativeTime:{future:{one:"nǔu {0} minút",other:"nǔu {0} minút"},past:{one:"ɛ́ gɛ́ mɔ́ minút {0}",other:"ɛ́ gɛ́ mɔ́ minút {0}"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.ji=t())}(this,function(){"use strict";var e=[{locale:"ji",pluralRuleFunction:function(e,t){var a=String(e).split("."),r=!a[1];return t?"other":1==e&&r?"one":"other"},fields:{year:{displayName:"Year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Hour",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minute",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.jmc=t())}(this,function(){"use strict";var e=[{locale:"jmc",pluralRuleFunction:function(e,t){return t?"other":1==e?"one":"other"},fields:{year:{displayName:"Maka",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Mori",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Mfiri",relative:{0:"Inu",1:"Ngama","-1":"Ukou"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Saa",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Dakyika",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Sekunde",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.jv=t())}(this,function(){"use strict";var e=[{locale:"jv",pluralRuleFunction:function(e,t){return"other"},fields:{year:{displayName:"Year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Hour",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minute",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.jw=t())}(this,function(){"use strict";var e=[{locale:"jw",pluralRuleFunction:function(e,t){return"other"},fields:{year:{displayName:"Year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Hour",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minute",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.ka=t())}(this,function(){"use strict";var e=[{locale:"ka",pluralRuleFunction:function(e,t){var a=String(e).split("."),o=a[0],r=o.slice(-2);return t?1==o?"one":0==o||r>=2&&r<=20||40==r||60==r||80==r?"many":"other":1==e?"one":"other"},fields:{year:{displayName:"წელი",relative:{0:"ამ წელს",1:"მომავალ წელს","-1":"გასულ წელს"},relativeTime:{future:{one:"{0} წელიწადში",other:"{0} წელიწადში"},past:{one:"{0} წლის წინ",other:"{0} წლის წინ"}}},month:{displayName:"თვე",relative:{0:"ამ თვეში",1:"მომავალ თვეს","-1":"გასულ თვეს"},relativeTime:{future:{one:"{0} თვეში",other:"{0} თვეში"},past:{one:"{0} თვის წინ",other:"{0} თვის წინ"}}},day:{displayName:"დღე",relative:{0:"დღეს",1:"ხვალ",2:"ზეგ","-2":"გუშინწინ","-1":"გუშინ"},relativeTime:{future:{one:"{0} დღეში",other:"{0} დღეში"},past:{one:"{0} დღის წინ",other:"{0} დღის წინ"}}},hour:{displayName:"საათი",relativeTime:{future:{one:"{0} საათში",other:"{0} საათში"},past:{one:"{0} საათის წინ",other:"{0} საათის წინ"}}},minute:{displayName:"წუთი",relativeTime:{future:{one:"{0} წუთში",other:"{0} წუთში"},past:{one:"{0} წუთის წინ",other:"{0} წუთის წინ"}}},second:{displayName:"წამი",relative:{0:"ახლა"},relativeTime:{future:{one:"{0} წამში",other:"{0} წამში"},past:{one:"{0} წამის წინ",other:"{0} წამის წინ"}}}}}];return e});

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.kab=t())}(this,function(){"use strict";var e=[{locale:"kab",pluralRuleFunction:function(e,t){return t?"other":e>=0&&e<2?"one":"other"},fields:{year:{displayName:"Aseggas",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Aggur",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Ass",relative:{0:"Ass-a",1:"Azekka","-1":"Iḍelli"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Tamert",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Tamrect",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Tasint",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.kaj=t())}(this,function(){"use strict";var e=[{locale:"kaj",pluralRuleFunction:function(e,t){return t?"other":1==e?"one":"other"},fields:{year:{displayName:"Year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Hour",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minute",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.kam=t())}(this,function(){"use strict";var e=[{locale:"kam",pluralRuleFunction:function(e,t){return"other"},fields:{year:{displayName:"Mwaka",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Mwai",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Mũthenya",relative:{0:"Ũmũnthĩ",1:"Ũnĩ","-1":"Ĩyoo"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Saa",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Ndatĩka",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"sekondi",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.kcg=t())}(this,function(){"use strict";var e=[{locale:"kcg",pluralRuleFunction:function(e,t){return t?"other":1==e?"one":"other"},fields:{year:{displayName:"Year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Hour",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minute",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.kde=t())}(this,function(){"use strict";var e=[{locale:"kde",pluralRuleFunction:function(e,t){return"other"},fields:{year:{displayName:"Mwaka",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Mwedi",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Lihiku",relative:{0:"Nelo",1:"Nundu","-1":"Lido"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Saa",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Dakika",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Sekunde",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.kea=t())}(this,function(){"use strict";var e=[{locale:"kea",pluralRuleFunction:function(e,t){return"other"},fields:{year:{displayName:"Anu",relative:{0:"es anu li",1:"prósimu anu","-1":"anu pasadu"},relativeTime:{future:{other:"di li {0} anu"},past:{other:"a ten {0} anu"}}},month:{displayName:"Mes",relative:{0:"es mes li",1:"prósimu mes","-1":"mes pasadu"},relativeTime:{future:{other:"di li {0} mes"},past:{other:"a ten {0} mes"}}},day:{displayName:"Dia",relative:{0:"oji",1:"manha","-1":"onti"},relativeTime:{future:{other:"di li {0} dia"},past:{other:"a ten {0} dia"}}},hour:{displayName:"Ora",relativeTime:{future:{other:"di li {0} ora"},past:{other:"a ten {0} ora"}}},minute:{displayName:"Minutu",relativeTime:{future:{other:"di li {0} minutu"},past:{other:"a ten {0} minutu"}}},second:{displayName:"Sigundu",relative:{0:"now"},relativeTime:{future:{other:"di li {0} sigundu"},past:{other:"a ten {0} sigundu"}}}}}];return e});

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.khq=t())}(this,function(){"use strict";var e=[{locale:"khq",pluralRuleFunction:function(e,t){return"other"},fields:{year:{displayName:"Jiiri",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Handu",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Jaari",relative:{0:"Hõo",1:"Suba","-1":"Bi"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Guuru",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Miniti",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Miti",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.ki=t())}(this,function(){"use strict";var e=[{locale:"ki",pluralRuleFunction:function(e,t){return"other"},fields:{year:{displayName:"Mwaka",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Mweri",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Mũthenya",relative:{0:"Ũmũthĩ",1:"Rũciũ","-1":"Ira"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Ithaa",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Ndagĩka",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Sekunde",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.kk=t())}(this,function(){"use strict";var e=[{locale:"kk",pluralRuleFunction:function(e,t){var a=String(e).split("."),o=Number(a[0])==e,r=o&&a[0].slice(-1);return t?6==r||9==r||o&&0==r&&0!=e?"many":"other":1==e?"one":"other"},fields:{year:{displayName:"жыл",relative:{0:"биылғы жыл",1:"келесі жыл","-1":"былтырғы жыл"},relativeTime:{future:{one:"{0} жылдан кейін",other:"{0} жылдан кейін"},past:{one:"{0} жыл бұрын",other:"{0} жыл бұрын"}}},month:{displayName:"ай",relative:{0:"осы ай",1:"келесі ай","-1":"өткен ай"},relativeTime:{future:{one:"{0} айдан кейін",other:"{0} айдан кейін"},past:{one:"{0} ай бұрын",other:"{0} ай бұрын"}}},day:{displayName:"күн",relative:{0:"бүгін",1:"ертең",2:"бүрсігүні","-2":"алдыңғы күні","-1":"кеше"},relativeTime:{future:{one:"{0} күннен кейін",other:"{0} күннен кейін"},past:{one:"{0} күн бұрын",other:"{0} күн бұрын"}}},hour:{displayName:"сағат",relativeTime:{future:{one:"{0} сағаттан кейін",other:"{0} сағаттан кейін"},past:{one:"{0} сағат бұрын",other:"{0} сағат бұрын"}}},minute:{displayName:"минут",relativeTime:{future:{one:"{0} минуттан кейін",other:"{0} минуттан кейін"},past:{one:"{0} минут бұрын",other:"{0} минут бұрын"}}},second:{displayName:"секунд",relative:{0:"қазір"},relativeTime:{future:{one:"{0} секундтан кейін",other:"{0} секундтан кейін"},past:{one:"{0} секунд бұрын",other:"{0} секунд бұрын"}}}}}];return e});

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.kkj=t())}(this,function(){"use strict";var e=[{locale:"kkj",pluralRuleFunction:function(e,t){return t?"other":1==e?"one":"other"},fields:{year:{displayName:"Year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Day",relative:{0:"muka",1:"nɛmɛnɔ","-1":"kwey"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Hour",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minute",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,a){ true?module.exports=a():"function"==typeof define&&define.amd?define(a):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.kl=a())}(this,function(){"use strict";var e=[{locale:"kl",pluralRuleFunction:function(e,a){return a?"other":1==e?"one":"other"},fields:{year:{displayName:"Year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{one:"om {0} ukioq",other:"om {0} ukioq"},past:{one:"for {0} ukioq siden",other:"for {0} ukioq siden"}}},month:{displayName:"Month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{one:"om {0} qaammat",other:"om {0} qaammat"},past:{one:"for {0} qaammat siden",other:"for {0} qaammat siden"}}},day:{displayName:"Day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{one:"om {0} ulloq unnuarlu",other:"om {0} ulloq unnuarlu"},past:{one:"for {0} ulloq unnuarlu siden",other:"for {0} ulloq unnuarlu siden"}}},hour:{displayName:"Hour",relativeTime:{future:{one:"om {0} nalunaaquttap-akunnera",other:"om {0} nalunaaquttap-akunnera"},past:{one:"for {0} nalunaaquttap-akunnera siden",other:"for {0} nalunaaquttap-akunnera siden"}}},minute:{displayName:"Minute",relativeTime:{future:{one:"om {0} minutsi",other:"om {0} minutsi"},past:{one:"for {0} minutsi siden",other:"for {0} minutsi siden"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{one:"om {0} sekundi",other:"om {0} sekundi"},past:{one:"for {0} sekundi siden",other:"for {0} sekundi siden"}}}}}];return e});

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.kln=t())}(this,function(){"use strict";var e=[{locale:"kln",pluralRuleFunction:function(e,t){return"other"},fields:{year:{displayName:"Kenyit",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Arawet",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Betut",relative:{0:"Raini",1:"Mutai","-1":"Amut"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Sait",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minitit",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Sekondit",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.km=t())}(this,function(){"use strict";var e=[{locale:"km",pluralRuleFunction:function(e,t){return"other"},fields:{year:{displayName:"ឆ្នាំ",relative:{0:"ឆ្នាំ​នេះ",1:"ឆ្នាំ​ក្រោយ","-1":"ឆ្នាំ​មុន"},relativeTime:{future:{other:"ក្នុង​រយៈ​ពេល {0} ឆ្នាំ"},past:{other:"{0} ឆ្នាំ​មុន"}}},month:{displayName:"ខែ",relative:{0:"ខែ​នេះ",1:"ខែ​ក្រោយ","-1":"ខែ​មុន"},relativeTime:{future:{other:"ក្នុង​រយៈ​ពេល {0} ខែ"},past:{other:"{0} ខែមុន"}}},day:{displayName:"ថ្ងៃ",relative:{0:"ថ្ងៃ​នេះ",1:"ថ្ងៃ​ស្អែក",2:"​ខាន​ស្អែក","-2":"ម្សិល​ម៉្ងៃ","-1":"ម្សិលមិញ"},relativeTime:{future:{other:"ក្នុង​រយៈ​ពេល {0} ថ្ងៃ"},past:{other:"{0} ថ្ងៃ​មុន"}}},hour:{displayName:"ម៉ោង",relativeTime:{future:{other:"ក្នុង​រយៈ​ពេល {0} ម៉ោង"},past:{other:"{0} ម៉ោង​មុន"}}},minute:{displayName:"នាទី",relativeTime:{future:{other:"ក្នុង​រយៈពេល {0} នាទី"},past:{other:"{0} នាទី​មុន"}}},second:{displayName:"វិនាទី",relative:{0:"ឥឡូវ"},relativeTime:{future:{other:"ក្នុង​រយៈពេល {0} វិនាទី"},past:{other:"{0} វិនាទី​មុន"}}}}}];return e});

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.kn=t())}(this,function(){"use strict";var e=[{locale:"kn",pluralRuleFunction:function(e,t){return t?"other":e>=0&&e<=1?"one":"other"},fields:{year:{displayName:"ವರ್ಷ",relative:{0:"ಈ ವರ್ಷ",1:"ಮುಂದಿನ ವರ್ಷ","-1":"ಕಳೆದ ವರ್ಷ"},relativeTime:{future:{one:"{0} ವರ್ಷದಲ್ಲಿ",other:"{0} ವರ್ಷಗಳಲ್ಲಿ"},past:{one:"{0} ವರ್ಷದ ಹಿಂದೆ",other:"{0} ವರ್ಷಗಳ ಹಿಂದೆ"}}},month:{displayName:"ತಿಂಗಳು",relative:{0:"ಈ ತಿಂಗಳು",1:"ಮುಂದಿನ ತಿಂಗಳು","-1":"ಕಳೆದ ತಿಂಗಳು"},relativeTime:{future:{one:"{0} ತಿಂಗಳಲ್ಲಿ",other:"{0} ತಿಂಗಳುಗಳಲ್ಲಿ"},past:{one:"{0} ತಿಂಗಳುಗಳ ಹಿಂದೆ",other:"{0} ತಿಂಗಳುಗಳ ಹಿಂದೆ"}}},day:{displayName:"ದಿನ",relative:{0:"ಇಂದು",1:"ನಾಳೆ",2:"ನಾಡಿದ್ದು","-2":"ಮೊನ್ನೆ","-1":"ನಿನ್ನೆ"},relativeTime:{future:{one:"{0} ದಿನದಲ್ಲಿ",other:"{0} ದಿನಗಳಲ್ಲಿ"},past:{one:"{0} ದಿನದ ಹಿಂದೆ",other:"{0} ದಿನಗಳ ಹಿಂದೆ"}}},hour:{displayName:"ಗಂಟೆ",relativeTime:{future:{one:"{0} ಗಂಟೆಯಲ್ಲಿ",other:"{0} ಗಂಟೆಗಳಲ್ಲಿ"},past:{one:"{0} ಗಂಟೆ ಹಿಂದೆ",other:"{0} ಗಂಟೆಗಳ ಹಿಂದೆ"}}},minute:{displayName:"ನಿಮಿಷ",relativeTime:{future:{one:"{0} ನಿಮಿಷದಲ್ಲಿ",other:"{0} ನಿಮಿಷಗಳಲ್ಲಿ"},past:{one:"{0} ನಿಮಿಷಗಳ ಹಿಂದೆ",other:"{0} ನಿಮಿಷಗಳ ಹಿಂದೆ"}}},second:{displayName:"ಸೆಕೆಂಡ್",relative:{0:"ಇದೀಗ"},relativeTime:{future:{one:"{0} ಸೆಕೆಂಡ್‌ನಲ್ಲಿ",other:"{0} ಸೆಕೆಂಡ್‌ಗಳಲ್ಲಿ"},past:{one:"{0} ಸೆಕೆಂಡ್ ಹಿಂದೆ",other:"{0} ಸೆಕೆಂಡುಗಳ ಹಿಂದೆ"}}}}}];return e});

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.ko=t())}(this,function(){"use strict";var e=[{locale:"ko",pluralRuleFunction:function(e,t){return"other"},fields:{year:{displayName:"년",relative:{0:"올해",1:"내년","-1":"작년"},relativeTime:{future:{other:"{0}년 후"},past:{other:"{0}년 전"}}},month:{displayName:"월",relative:{0:"이번 달",1:"다음 달","-1":"지난달"},relativeTime:{future:{other:"{0}개월 후"},past:{other:"{0}개월 전"}}},day:{displayName:"일",relative:{0:"오늘",1:"내일",2:"모레","-2":"그저께","-1":"어제"},relativeTime:{future:{other:"{0}일 후"},past:{other:"{0}일 전"}}},hour:{displayName:"시",relativeTime:{future:{other:"{0}시간 후"},past:{other:"{0}시간 전"}}},minute:{displayName:"분",relativeTime:{future:{other:"{0}분 후"},past:{other:"{0}분 전"}}},second:{displayName:"초",relative:{0:"지금"},relativeTime:{future:{other:"{0}초 후"},past:{other:"{0}초 전"}}}}},{locale:"ko-KP",parentLocale:"ko"}];return e});

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.kok=t())}(this,function(){"use strict";var e=[{locale:"kok",pluralRuleFunction:function(e,t){return"other"},fields:{year:{displayName:"Year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Hour",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minute",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.ks=t())}(this,function(){"use strict";var e=[{locale:"ks",pluralRuleFunction:function(e,t){return t?"other":1==e?"one":"other"},fields:{year:{displayName:"ؤری",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"رٮ۪تھ",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"دۄہ",relative:{0:"اَز",1:"پگاہ","-1":"راتھ"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"گٲنٛٹہٕ",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"مِنَٹ",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"سٮ۪کَنڑ",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.ksb=t())}(this,function(){"use strict";var e=[{locale:"ksb",pluralRuleFunction:function(e,t){return t?"other":1==e?"one":"other"},fields:{year:{displayName:"Ng’waka",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Ng’ezi",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Siku",relative:{0:"Evi eo",1:"Keloi","-1":"Ghuo"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Saa",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Dakika",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Sekunde",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.ksf=t())}(this,function(){"use strict";var e=[{locale:"ksf",pluralRuleFunction:function(e,t){return"other"},fields:{year:{displayName:"Bǝk",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Ŋwíí",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Ŋwós",relative:{0:"Gɛ́ɛnǝ",1:"Ridúrǝ́","-1":"Rinkɔɔ́"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Cámɛɛn",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Mǝnít",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Háu",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.ksh=t())}(this,function(){"use strict";var e=[{locale:"ksh",pluralRuleFunction:function(e,t){return t?"other":0==e?"zero":1==e?"one":"other"},fields:{year:{displayName:"Johr",relative:{0:"diese Johr",1:"nächste Johr","-1":"läz Johr"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Mohnd",relative:{0:"diese Mohnd",1:"nächste Mohnd","-1":"lätzde Mohnd"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Daach",relative:{0:"hück",1:"morje",2:"övvermorje","-2":"vörjestere","-1":"jestere"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Schtund",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Menutt",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Sekond",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.ku=t())}(this,function(){"use strict";var e=[{locale:"ku",pluralRuleFunction:function(e,t){return t?"other":1==e?"one":"other"},fields:{year:{displayName:"Year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Hour",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minute",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.kw=t())}(this,function(){"use strict";var e=[{locale:"kw",pluralRuleFunction:function(e,t){return t?"other":1==e?"one":2==e?"two":"other"},fields:{year:{displayName:"Year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Hour",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minute",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.ky=t())}(this,function(){"use strict";var e=[{locale:"ky",pluralRuleFunction:function(e,t){return t?"other":1==e?"one":"other"},fields:{year:{displayName:"жыл",relative:{0:"быйыл",1:"эмдиги жылы","-1":"былтыр"},relativeTime:{future:{one:"{0} жылдан кийин",other:"{0} жылдан кийин"},past:{one:"{0} жыл мурун",other:"{0} жыл мурун"}}},month:{displayName:"ай",relative:{0:"бул айда",1:"эмдиги айда","-1":"өткөн айда"},relativeTime:{future:{one:"{0} айдан кийин",other:"{0} айдан кийин"},past:{one:"{0} ай мурун",other:"{0} ай мурун"}}},day:{displayName:"күн",relative:{0:"бүгүн",1:"эртеӊ",2:"бүрсүгүнү","-2":"мурдагы күнү","-1":"кечээ"},relativeTime:{future:{one:"{0} күндөн кийин",other:"{0} күндөн кийин"},past:{one:"{0} күн мурун",other:"{0} күн мурун"}}},hour:{displayName:"саат",relativeTime:{future:{one:"{0} сааттан кийин",other:"{0} сааттан кийин"},past:{one:"{0} саат мурун",other:"{0} саат мурун"}}},minute:{displayName:"мүнөт",relativeTime:{future:{one:"{0} мүнөттөн кийин",other:"{0} мүнөттөн кийин"},past:{one:"{0} мүнөт мурун",other:"{0} мүнөт мурун"}}},second:{displayName:"секунд",relative:{0:"азыр"},relativeTime:{future:{one:"{0} секунддан кийин",other:"{0} секунддан кийин"},past:{one:"{0} секунд мурун",other:"{0} секунд мурун"}}}}}];return e});

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.lag=t())}(this,function(){"use strict";var e=[{locale:"lag",pluralRuleFunction:function(e,t){var a=String(e).split("."),r=a[0];return t?"other":0==e?"zero":0!=r&&1!=r||0==e?"other":"one"},fields:{year:{displayName:"Mwaáka",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Mweéri",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Sikʉ",relative:{0:"Isikʉ",1:"Lamʉtoondo","-1":"Niijo"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Sáa",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Dakíka",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Sekúunde",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,n){ true?module.exports=n():"function"==typeof define&&define.amd?define(n):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.lb=n())}(this,function(){"use strict";var e=[{locale:"lb",pluralRuleFunction:function(e,n){return n?"other":1==e?"one":"other"},fields:{year:{displayName:"Joer",relative:{0:"dëst Joer",1:"nächst Joer","-1":"lescht Joer"},relativeTime:{future:{one:"an {0} Joer",other:"a(n) {0} Joer"},past:{one:"virun {0} Joer",other:"viru(n) {0} Joer"}}},month:{displayName:"Mount",relative:{0:"dëse Mount",1:"nächste Mount","-1":"leschte Mount"},relativeTime:{future:{one:"an {0} Mount",other:"a(n) {0} Méint"},past:{one:"virun {0} Mount",other:"viru(n) {0} Méint"}}},day:{displayName:"Dag",relative:{0:"haut",1:"muer","-1":"gëschter"},relativeTime:{future:{one:"an {0} Dag",other:"a(n) {0} Deeg"},past:{one:"virun {0} Dag",other:"viru(n) {0} Deeg"}}},hour:{displayName:"Stonn",relativeTime:{future:{one:"an {0} Stonn",other:"a(n) {0} Stonnen"},past:{one:"virun {0} Stonn",other:"viru(n) {0} Stonnen"}}},minute:{displayName:"Minutt",relativeTime:{future:{one:"an {0} Minutt",other:"a(n) {0} Minutten"},past:{one:"virun {0} Minutt",other:"viru(n) {0} Minutten"}}},second:{displayName:"Sekonn",relative:{0:"now"},relativeTime:{future:{one:"an {0} Sekonn",other:"a(n) {0} Sekonnen"},past:{one:"virun {0} Sekonn",other:"viru(n) {0} Sekonnen"}}}}}];return e});

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.lg=t())}(this,function(){"use strict";var e=[{locale:"lg",pluralRuleFunction:function(e,t){return t?"other":1==e?"one":"other"},fields:{year:{displayName:"Mwaka",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Mwezi",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Lunaku",relative:{0:"Lwaleero",1:"Nkya","-1":"Ggulo"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Saawa",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Dakiika",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Kasikonda",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,a){ true?module.exports=a():"function"==typeof define&&define.amd?define(a):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.lkt=a())}(this,function(){"use strict";var e=[{locale:"lkt",pluralRuleFunction:function(e,a){return"other"},fields:{year:{displayName:"Ómakȟa",relative:{0:"Lé ómakȟa kiŋ",1:"Tȟokáta ómakȟa kiŋháŋ","-1":"Ómakȟa kʼuŋ héhaŋ"},relativeTime:{future:{other:"Letáŋhaŋ ómakȟa {0} kiŋháŋ"},past:{other:"Hékta ómakȟa {0} kʼuŋ héhaŋ"}}},month:{displayName:"Wí",relative:{0:"Lé wí kiŋ",1:"Wí kiŋháŋ","-1":"Wí kʼuŋ héhaŋ"},relativeTime:{future:{other:"Letáŋhaŋ wíyawapi {0} kiŋháŋ"},past:{other:"Hékta wíyawapi {0} kʼuŋ héhaŋ"}}},day:{displayName:"Aŋpétu",relative:{0:"Lé aŋpétu kiŋ",1:"Híŋhaŋni kiŋháŋ","-1":"Lé aŋpétu kiŋ"},relativeTime:{future:{other:"Letáŋhaŋ {0}-čháŋ kiŋháŋ"},past:{other:"Hékta {0}-čháŋ k’uŋ héhaŋ"}}},hour:{displayName:"Owápȟe",relativeTime:{future:{other:"Letáŋhaŋ owápȟe {0} kiŋháŋ"},past:{other:"Hékta owápȟe {0} kʼuŋ héhaŋ"}}},minute:{displayName:"Owápȟe oȟʼáŋkȟo",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Okpí",relative:{0:"now"},relativeTime:{future:{other:"Letáŋhaŋ okpí {0} kiŋháŋ"},past:{other:"Hékta okpí {0} k’uŋ héhaŋ"}}}}}];return e});

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.ln=t())}(this,function(){"use strict";var e=[{locale:"ln",pluralRuleFunction:function(e,t){return t?"other":0==e||1==e?"one":"other"},fields:{year:{displayName:"Mobú",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Sánzá",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Mokɔlɔ",relative:{0:"Lɛlɔ́",1:"Lóbi ekoyâ","-1":"Lóbi elékí"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Ngonga",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Monúti",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Sɛkɔ́ndɛ",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}},{locale:"ln-AO",parentLocale:"ln"},{locale:"ln-CF",parentLocale:"ln"},{locale:"ln-CG",parentLocale:"ln"}];return e});

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.lo=t())}(this,function(){"use strict";var e=[{locale:"lo",pluralRuleFunction:function(e,t){return t&&1==e?"one":"other"},fields:{year:{displayName:"ປີ",relative:{0:"ປີນີ້",1:"ປີໜ້າ","-1":"ປີກາຍ"},relativeTime:{future:{other:"ໃນອີກ {0} ປີ"},past:{other:"{0} ປີກ່ອນ"}}},month:{displayName:"ເດືອນ",relative:{0:"ເດືອນນີ້",1:"ເດືອນໜ້າ","-1":"ເດືອນແລ້ວ"},relativeTime:{future:{other:"ໃນອີກ {0} ເດືອນ"},past:{other:"{0} ເດືອນກ່ອນ"}}},day:{displayName:"ມື້",relative:{0:"ມື້ນີ້",1:"ມື້ອື່ນ",2:"ມື້ຮື","-2":"ມື້ກ່ອນ","-1":"ມື້ວານ"},relativeTime:{future:{other:"ໃນອີກ {0} ມື້"},past:{other:"{0} ມື້ກ່ອນ"}}},hour:{displayName:"ຊົ່ວໂມງ",relativeTime:{future:{other:"ໃນອີກ {0} ຊົ່ວໂມງ"},past:{other:"{0} ຊົ່ວໂມງກ່ອນ"}}},minute:{displayName:"ນາທີ",relativeTime:{future:{other:"{0} ໃນອີກ 0 ນາທີ"},past:{other:"{0} ນາທີກ່ອນ"}}},second:{displayName:"ວິນາທີ",relative:{0:"ຕອນນີ້"},relativeTime:{future:{other:"ໃນອີກ {0} ວິນາທີ"},past:{other:"{0} ວິນາທີກ່ອນ"}}}}}];return e});

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.lrc=t())}(this,function(){"use strict";var e=[{locale:"lrc",pluralRuleFunction:function(e,t){return"other"},fields:{year:{displayName:"سال",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"ما",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"روٙز",relative:{0:"أمروٙ",1:"شوٙصوٙ","-1":"دیروٙز"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"ساأت",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"دئیقە",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"ثانیە",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}},{locale:"lrc-IQ",parentLocale:"lrc"}];return e});

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,i){ true?module.exports=i():"function"==typeof define&&define.amd?define(i):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.lt=i())}(this,function(){"use strict";var e=[{locale:"lt",pluralRuleFunction:function(e,i){var n=String(e).split("."),a=n[1]||"",t=Number(n[0])==e,o=t&&n[0].slice(-1),r=t&&n[0].slice(-2);return i?"other":1==o&&(r<11||r>19)?"one":o>=2&&o<=9&&(r<11||r>19)?"few":0!=a?"many":"other"},fields:{year:{displayName:"metai",relative:{0:"šiais metais",1:"kitais metais","-1":"praėjusiais metais"},relativeTime:{future:{one:"po {0} metų",few:"po {0} metų",many:"po {0} metų",other:"po {0} metų"},past:{one:"prieš {0} metus",few:"prieš {0} metus",many:"prieš {0} metų",other:"prieš {0} metų"}}},month:{displayName:"mėnuo",relative:{0:"šį mėnesį",1:"kitą mėnesį","-1":"praėjusį mėnesį"},relativeTime:{future:{one:"po {0} mėnesio",few:"po {0} mėnesių",many:"po {0} mėnesio",other:"po {0} mėnesių"},past:{one:"prieš {0} mėnesį",few:"prieš {0} mėnesius",many:"prieš {0} mėnesio",other:"prieš {0} mėnesių"}}},day:{displayName:"diena",relative:{0:"šiandien",1:"rytoj",2:"poryt","-2":"užvakar","-1":"vakar"},relativeTime:{future:{one:"po {0} dienos",few:"po {0} dienų",many:"po {0} dienos",other:"po {0} dienų"},past:{one:"prieš {0} dieną",few:"prieš {0} dienas",many:"prieš {0} dienos",other:"prieš {0} dienų"}}},hour:{displayName:"valanda",relativeTime:{future:{one:"po {0} valandos",few:"po {0} valandų",many:"po {0} valandos",other:"po {0} valandų"},past:{one:"prieš {0} valandą",few:"prieš {0} valandas",many:"prieš {0} valandos",other:"prieš {0} valandų"}}},minute:{displayName:"minutė",relativeTime:{future:{one:"po {0} minutės",few:"po {0} minučių",many:"po {0} minutės",other:"po {0} minučių"},past:{one:"prieš {0} minutę",few:"prieš {0} minutes",many:"prieš {0} minutės",other:"prieš {0} minučių"}}},second:{displayName:"sekundė",relative:{0:"dabar"},relativeTime:{future:{one:"po {0} sekundės",few:"po {0} sekundžių",many:"po {0} sekundės",other:"po {0} sekundžių"},past:{one:"prieš {0} sekundę",few:"prieš {0} sekundes",many:"prieš {0} sekundės",other:"prieš {0} sekundžių"}}}}}];return e});

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.lu=t())}(this,function(){"use strict";var e=[{locale:"lu",pluralRuleFunction:function(e,t){return"other"},fields:{year:{displayName:"Tshidimu",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Ngondo",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Dituku",relative:{0:"Lelu",1:"Malaba","-1":"Makelela"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Diba",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Kasunsu",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Kasunsukusu",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.luo=t())}(this,function(){"use strict";var e=[{locale:"luo",pluralRuleFunction:function(e,t){return"other"},fields:{year:{displayName:"higa",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"dwe",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"chieng’",relative:{0:"kawuono",1:"kiny","-1":"nyoro"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"saa",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"dakika",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"nyiriri mar saa",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.luy=t())}(this,function(){"use strict";var e=[{locale:"luy",pluralRuleFunction:function(e,t){return"other"},fields:{year:{displayName:"Muhiga",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Mweri",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Ridiku",relative:{0:"Lero",1:"Mgamba","-1":"Mgorova"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Isaa",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Idagika",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Sekunde",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,a){ true?module.exports=a():"function"==typeof define&&define.amd?define(a):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.lv=a())}(this,function(){"use strict";var e=[{locale:"lv",pluralRuleFunction:function(e,a){var i=String(e).split("."),t=i[1]||"",m=t.length,n=Number(i[0])==e,r=n&&i[0].slice(-1),s=n&&i[0].slice(-2),o=t.slice(-2),p=t.slice(-1);return a?"other":n&&0==r||s>=11&&s<=19||2==m&&o>=11&&o<=19?"zero":1==r&&11!=s||2==m&&1==p&&11!=o||2!=m&&1==p?"one":"other"},fields:{year:{displayName:"gads",relative:{0:"šajā gadā",1:"nākamajā gadā","-1":"pagājušajā gadā"},relativeTime:{future:{zero:"pēc {0} gadiem",one:"pēc {0} gada",other:"pēc {0} gadiem"},past:{zero:"pirms {0} gadiem",one:"pirms {0} gada",other:"pirms {0} gadiem"}}},month:{displayName:"mēnesis",relative:{0:"šajā mēnesī",1:"nākamajā mēnesī","-1":"pagājušajā mēnesī"},relativeTime:{future:{zero:"pēc {0} mēnešiem",one:"pēc {0} mēneša",other:"pēc {0} mēnešiem"},past:{zero:"pirms {0} mēnešiem",one:"pirms {0} mēneša",other:"pirms {0} mēnešiem"}}},day:{displayName:"diena",relative:{0:"šodien",1:"rīt",2:"parīt","-2":"aizvakar","-1":"vakar"},relativeTime:{future:{zero:"pēc {0} dienām",one:"pēc {0} dienas",other:"pēc {0} dienām"},past:{zero:"pirms {0} dienām",one:"pirms {0} dienas",other:"pirms {0} dienām"}}},hour:{displayName:"stundas",relativeTime:{future:{zero:"pēc {0} stundām",one:"pēc {0} stundas",other:"pēc {0} stundām"},past:{zero:"pirms {0} stundām",one:"pirms {0} stundas",other:"pirms {0} stundām"}}},minute:{displayName:"minūtes",relativeTime:{future:{zero:"pēc {0} minūtēm",one:"pēc {0} minūtes",other:"pēc {0} minūtēm"},past:{zero:"pirms {0} minūtēm",one:"pirms {0} minūtes",other:"pirms {0} minūtēm"}}},second:{displayName:"sekundes",relative:{0:"tagad"},relativeTime:{future:{zero:"pēc {0} sekundēm",one:"pēc {0} sekundes",other:"pēc {0} sekundēm"},past:{zero:"pirms {0} sekundēm",one:"pirms {0} sekundes",other:"pirms {0} sekundēm"}}}}}];return e});

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.mas=t())}(this,function(){"use strict";var e=[{locale:"mas",pluralRuleFunction:function(e,t){return t?"other":1==e?"one":"other"},fields:{year:{displayName:"Ɔlárì",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Ɔlápà",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Ɛnkɔlɔ́ŋ",relative:{0:"Táatá",1:"Tááisérè","-1":"Ŋolé"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Ɛ́sáâ",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Oldákikaè",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Sekunde",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}},{locale:"mas-TZ",parentLocale:"mas"}];return e});

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.mer=t())}(this,function(){"use strict";var e=[{locale:"mer",pluralRuleFunction:function(e,t){return"other"},fields:{year:{displayName:"Mwaka",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Mweri",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Ntukũ",relative:{0:"Narua",1:"Rũjũ","-1":"Ĩgoro"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Ĩthaa",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Ndagika",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Sekondi",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.mfe=t())}(this,function(){"use strict";var e=[{locale:"mfe",pluralRuleFunction:function(e,t){return"other"},fields:{year:{displayName:"Lane",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Mwa",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Zour",relative:{0:"Zordi",1:"Demin","-1":"Yer"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Ler",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minit",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Segonn",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.mg=t())}(this,function(){"use strict";var e=[{locale:"mg",pluralRuleFunction:function(e,t){return t?"other":0==e||1==e?"one":"other"},fields:{year:{displayName:"Taona",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Volana",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Andro",relative:{0:"Anio",1:"Rahampitso","-1":"Omaly"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Ora",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minitra",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Segondra",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.mgh=t())}(this,function(){"use strict";var e=[{locale:"mgh",pluralRuleFunction:function(e,t){return"other"},fields:{year:{displayName:"yaka",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"mweri",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"nihuku",relative:{0:"lel’lo",1:"me’llo","-1":"n’chana"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"isaa",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"idakika",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"isekunde",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.mgo=t())}(this,function(){"use strict";var e=[{locale:"mgo",pluralRuleFunction:function(e,t){return t?"other":1==e?"one":"other"},fields:{year:{displayName:"fituʼ",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"iməg",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{one:"+{0} m",other:"+{0} m"},past:{one:"-{0} m",other:"-{0} m"}}},day:{displayName:"anəg",relative:{0:"tèchɔ̀ŋ",1:"isu",2:"isu ywi","-1":"ikwiri"},relativeTime:{future:{one:"+{0} d",other:"+{0} d"},past:{one:"-{0} d",other:"-{0} d"}}},hour:{displayName:"Hour",relativeTime:{future:{one:"+{0} h",other:"+{0} h"},past:{one:"-{0} h",other:"-{0} h"}}},minute:{displayName:"Minute",relativeTime:{future:{one:"+{0} min",other:"+{0} min"},past:{one:"-{0} min",other:"-{0} min"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{one:"+{0} s",other:"+{0} s"},past:{one:"-{0} s",other:"-{0} s"}}}}}];return e});

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.mk=t())}(this,function(){"use strict";var e=[{locale:"mk",pluralRuleFunction:function(e,t){var o=String(e).split("."),a=o[0],r=o[1]||"",i=!o[1],n=a.slice(-1),l=a.slice(-2),u=r.slice(-1);return t?1==n&&11!=l?"one":2==n&&12!=l?"two":7!=n&&8!=n||17==l||18==l?"other":"many":i&&1==n||1==u?"one":"other"},fields:{year:{displayName:"година",relative:{0:"оваа година",1:"следната година","-1":"минатата година"},relativeTime:{future:{one:"за {0} година",other:"за {0} години"},past:{one:"пред {0} година",other:"пред {0} години"}}},month:{displayName:"месец",relative:{0:"овој месец",1:"следниот месец","-1":"минатиот месец"},relativeTime:{future:{one:"за {0} месец",other:"за {0} месеци"},past:{one:"пред {0} месец",other:"пред {0} месеци"}}},day:{displayName:"ден",relative:{0:"денес",1:"утре",2:"задутре","-2":"завчера","-1":"вчера"},relativeTime:{future:{one:"за {0} ден",other:"за {0} дена"},past:{one:"пред {0} ден",other:"пред {0} дена"}}},hour:{displayName:"час",relativeTime:{future:{one:"за {0} час",other:"за {0} часа"},past:{one:"пред {0} час",other:"пред {0} часа"}}},minute:{displayName:"минута",relativeTime:{future:{one:"за {0} минута",other:"за {0} минути"},past:{one:"пред {0} минута",other:"пред {0} минути"}}},second:{displayName:"секунда",relative:{0:"сега"},relativeTime:{future:{one:"за {0} секунда",other:"за {0} секунди"},past:{one:"пред {0} секунда",other:"пред {0} секунди"}}}}}];return e});

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.ml=t())}(this,function(){"use strict";var e=[{locale:"ml",pluralRuleFunction:function(e,t){return t?"other":1==e?"one":"other"},fields:{year:{displayName:"വർഷം",relative:{0:"ഈ വർ‌ഷം",1:"അടുത്തവർഷം","-1":"കഴിഞ്ഞ വർഷം"},relativeTime:{future:{one:"{0} വർഷത്തിൽ",other:"{0} വർഷത്തിൽ"},past:{one:"{0} വർഷം മുമ്പ്",other:"{0} വർഷം മുമ്പ്"}}},month:{displayName:"മാസം",relative:{0:"ഈ മാസം",1:"അടുത്ത മാസം","-1":"കഴിഞ്ഞ മാസം"},relativeTime:{future:{one:"{0} മാസത്തിൽ",other:"{0} മാസത്തിൽ"},past:{one:"{0} മാസം മുമ്പ്",other:"{0} മാസം മുമ്പ്"}}},day:{displayName:"ദിവസം",relative:{0:"ഇന്ന്",1:"നാളെ",2:"മറ്റന്നാൾ","-2":"മിനിഞ്ഞാന്ന്","-1":"ഇന്നലെ"},relativeTime:{future:{one:"{0} ദിവസത്തിൽ",other:"{0} ദിവസത്തിൽ"},past:{one:"{0} ദിവസം മുമ്പ്",other:"{0} ദിവസം മുമ്പ്"}}},hour:{displayName:"മണിക്കൂർ",relativeTime:{future:{one:"{0} മണിക്കൂറിൽ",other:"{0} മണിക്കൂറിൽ"},past:{one:"{0} മണിക്കൂർ മുമ്പ്",other:"{0} മണിക്കൂർ മുമ്പ്"}}},minute:{displayName:"മിനിറ്റ്",relativeTime:{future:{one:"{0} മിനിറ്റിൽ",other:"{0} മിനിറ്റിൽ"},past:{one:"{0} മിനിറ്റ് മുമ്പ്",other:"{0} മിനിറ്റ് മുമ്പ്"}}},second:{displayName:"സെക്കൻഡ്",relative:{0:"ഇപ്പോൾ"},relativeTime:{future:{one:"{0} സെക്കൻഡിൽ",other:"{0} സെക്കൻഡിൽ"},past:{one:"{0} സെക്കൻഡ് മുമ്പ്",other:"{0} സെക്കൻഡ് മുമ്പ്"}}}}}];return e});

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.mn=t())}(this,function(){"use strict";var e=[{locale:"mn",pluralRuleFunction:function(e,t){return t?"other":1==e?"one":"other"},fields:{year:{displayName:"Жил",relative:{0:"энэ жил",1:"ирэх жил","-1":"өнгөрсөн жил"},relativeTime:{future:{one:"{0} жилийн дараа",other:"{0} жилийн дараа"},past:{one:"{0} жилийн өмнө",other:"{0} жилийн өмнө"}}},month:{displayName:"Сар",relative:{0:"энэ сар",1:"ирэх сар","-1":"өнгөрсөн сар"},relativeTime:{future:{one:"{0} сарын дараа",other:"{0} сарын дараа"},past:{one:"{0} сарын өмнө",other:"{0} сарын өмнө"}}},day:{displayName:"Өдөр",relative:{0:"өнөөдөр",1:"маргааш",2:"нөгөөдөр","-2":"уржигдар","-1":"өчигдөр"},relativeTime:{future:{one:"{0} өдрийн дараа",other:"{0} өдрийн дараа"},past:{one:"{0} өдрийн өмнө",other:"{0} өдрийн өмнө"}}},hour:{displayName:"Цаг",relativeTime:{future:{one:"{0} цагийн дараа",other:"{0} цагийн дараа"},past:{one:"{0} цагийн өмнө",other:"{0} цагийн өмнө"}}},minute:{displayName:"Минут",relativeTime:{future:{one:"{0} минутын дараа",other:"{0} минутын дараа"},past:{one:"{0} минутын өмнө",other:"{0} минутын өмнө"}}},second:{displayName:"Секунд",relative:{0:"Одоо"},relativeTime:{future:{one:"{0} секундын дараа",other:"{0} секундын дараа"},past:{one:"{0} секундын өмнө",other:"{0} секундын өмнө"}}}}},{locale:"mn-Mong",pluralRuleFunction:function(e,t){return"other"},fields:{year:{displayName:"Year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Hour",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minute",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.mo=t())}(this,function(){"use strict";var e=[{locale:"mo",pluralRuleFunction:function(e,t){var a=String(e).split("."),r=!a[1],o=Number(a[0])==e,i=o&&a[0].slice(-2);return t?1==e?"one":"other":1==e&&r?"one":!r||0==e||1!=e&&i>=1&&i<=19?"few":"other"},fields:{year:{displayName:"Year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Hour",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minute",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.mr=t())}(this,function(){"use strict";var e=[{locale:"mr",pluralRuleFunction:function(e,t){return t?1==e?"one":2==e||3==e?"two":4==e?"few":"other":e>=0&&e<=1?"one":"other"},fields:{year:{displayName:"वर्ष",relative:{0:"हे वर्ष",1:"पुढील वर्ष","-1":"मागील वर्ष"},relativeTime:{future:{one:"{0} वर्षामध्ये",other:"{0} वर्षांमध्ये"},past:{one:"{0} वर्षापूर्वी",other:"{0} वर्षांपूर्वी"}}},month:{displayName:"महिना",relative:{0:"हा महिना",1:"पुढील महिना","-1":"मागील महिना"},relativeTime:{future:{one:"{0} महिन्यामध्ये",other:"{0} महिन्यांमध्ये"},past:{one:"{0} महिन्यापूर्वी",other:"{0} महिन्यांपूर्वी"}}},day:{displayName:"दिवस",relative:{0:"आज",1:"उद्या","-1":"काल"},relativeTime:{future:{one:"{0} दिवसामध्ये",other:"{0} दिवसांमध्ये"},past:{one:"{0} दिवसापूर्वी",other:"{0} दिवसांपूर्वी"}}},hour:{displayName:"तास",relativeTime:{future:{one:"{0} तासामध्ये",other:"{0} तासांमध्ये"},past:{one:"{0} तासापूर्वी",other:"{0} तासांपूर्वी"}}},minute:{displayName:"मिनिट",relativeTime:{future:{one:"{0} मिनिटामध्ये",other:"{0} मिनिटांमध्ये"},past:{one:"{0} मिनिटापूर्वी",other:"{0} मिनिटांपूर्वी"}}},second:{displayName:"सेकंद",relative:{0:"आत्ता"},relativeTime:{future:{one:"{0} सेकंदामध्ये",other:"{0} सेकंदांमध्ये"},past:{one:"{0} सेकंदापूर्वी",other:"{0} सेकंदांपूर्वी"}}}}}];return e});

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,a){ true?module.exports=a():"function"==typeof define&&define.amd?define(a):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.ms=a())}(this,function(){"use strict";var e=[{locale:"ms",pluralRuleFunction:function(e,a){return a&&1==e?"one":"other"},fields:{year:{displayName:"Tahun",relative:{0:"tahun ini",1:"tahun depan","-1":"tahun lepas"},relativeTime:{future:{other:"dalam {0} saat"},past:{other:"{0} tahun lalu"}}},month:{displayName:"Bulan",relative:{0:"bulan ini",1:"bulan depan","-1":"bulan lalu"},relativeTime:{future:{other:"dalam {0} bulan"},past:{other:"{0} bulan lalu"}}},day:{displayName:"Hari",relative:{0:"hari ini",1:"esok",2:"lusa","-2":"kelmarin","-1":"semalam"},relativeTime:{future:{other:"dalam {0} hari"},past:{other:"{0} hari lalu"}}},hour:{displayName:"Jam",relativeTime:{future:{other:"dalam {0} jam"},past:{other:"{0} jam yang lalu"}}},minute:{displayName:"Minit",relativeTime:{future:{other:"dalam {0} minit"},past:{other:"{0} minit yang lalu"}}},second:{displayName:"Saat",relative:{0:"sekarang"},relativeTime:{future:{other:"dalam {0} saat"},past:{other:"{0} saat lalu"}}}}},{locale:"ms-Arab",pluralRuleFunction:function(e,a){return"other"},fields:{year:{displayName:"Year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Hour",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minute",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}},{locale:"ms-BN",parentLocale:"ms"},{locale:"ms-SG",parentLocale:"ms"}];return e});

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,a){ true?module.exports=a():"function"==typeof define&&define.amd?define(a):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.mt=a())}(this,function(){"use strict";var e=[{locale:"mt",pluralRuleFunction:function(e,a){var t=String(e).split("."),i=Number(t[0])==e,r=i&&t[0].slice(-2);return a?"other":1==e?"one":0==e||r>=2&&r<=10?"few":r>=11&&r<=19?"many":"other"},fields:{year:{displayName:"Sena",relative:{0:"din is-sena",1:"Is-sena d-dieħla","-1":"Is-sena li għaddiet"},relativeTime:{future:{other:"+{0} y"},past:{one:"{0} sena ilu",few:"{0} snin ilu",many:"{0} snin ilu",other:"{0} snin ilu"}}},month:{displayName:"Xahar",relative:{0:"Dan ix-xahar",1:"Ix-xahar id-dieħel","-1":"Ix-xahar li għadda"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Jum",relative:{0:"Illum",1:"Għada","-1":"Ilbieraħ"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Siegħa",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minuta",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Sekonda",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.mua=t())}(this,function(){"use strict";var e=[{locale:"mua",pluralRuleFunction:function(e,t){return"other"},fields:{year:{displayName:"Syii",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Fĩi",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Zah’nane/ Comme",relative:{0:"Tǝ’nahko",1:"Tǝ’nane","-1":"Tǝsoo"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Cok comme",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Cok comme ma laŋne",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Cok comme ma laŋ tǝ biŋ",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.my=t())}(this,function(){"use strict";var e=[{locale:"my",pluralRuleFunction:function(e,t){return"other"},fields:{year:{displayName:"နှစ်",relative:{0:"ယခုနှစ်",1:"နောက်နှစ်","-1":"ယမန်နှစ်"},relativeTime:{future:{other:"{0}နှစ်အတွင်း"},past:{other:"လွန်ခဲ့သော{0}နှစ်"}}},month:{displayName:"လ",relative:{0:"ယခုလ",1:"နောက်လ","-1":"ယမန်လ"},relativeTime:{future:{other:"{0}လအတွင်း"},past:{other:"လွန်ခဲ့သော{0}လ"}}},day:{displayName:"ရက်",relative:{0:"ယနေ့",1:"မနက်ဖြန်",2:"သဘက်ခါ","-2":"တနေ့က","-1":"မနေ့က"},relativeTime:{future:{other:"{0}ရက်အတွင်း"},past:{other:"လွန်ခဲ့သော{0}ရက်"}}},hour:{displayName:"နာရီ",relativeTime:{future:{other:"{0}နာရီအတွင်း"},past:{other:"လွန်ခဲ့သော{0}နာရီ"}}},minute:{displayName:"မိနစ်",relativeTime:{future:{other:"{0}မိနစ်အတွင်း"},past:{other:"လွန်ခဲ့သော{0}မိနစ်"}}},second:{displayName:"စက္ကန့်",relative:{0:"ယခု"},relativeTime:{future:{other:"{0}စက္ကန့်အတွင်း"},past:{other:"လွန်ခဲ့သော{0}စက္ကန့်"}}}}}];return e});

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.mzn=t())}(this,function(){"use strict";var e=[{locale:"mzn",pluralRuleFunction:function(e,t){return"other"},fields:{year:{displayName:"سال",relative:{0:"امسال",1:"سال دیگه","-1":"پارسال"},relativeTime:{future:{other:"{0} سال دله"},past:{other:"{0} سال پیش"}}},month:{displayName:"ماه",relative:{0:"این ماه",1:"ماه ِبعد","-1":"ماه قبل"},relativeTime:{future:{other:"{0} ماه دله"},past:{other:"{0} ماه پیش"}}},day:{displayName:"روز",relative:{0:"اَمروز",1:"فِردا","-1":"دیروز"},relativeTime:{future:{other:"{0} روز دله"},past:{other:"{0} روز پیش"}}},hour:{displayName:"ساعِت",relativeTime:{future:{other:"{0} ساعِت دله"},past:{other:"{0} ساعِت پیش"}}},minute:{displayName:"دقیقه",relativeTime:{future:{other:"{0} دقیقه دله"},past:{other:"{0} دَقه پیش"}}},second:{displayName:"ثانیه",relative:{0:"now"},relativeTime:{future:{other:"{0} ثانیه دله"},past:{other:"{0} ثانیه پیش"}}}}}];return e});

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.nah=t())}(this,function(){"use strict";var e=[{locale:"nah",pluralRuleFunction:function(e,t){return t?"other":1==e?"one":"other"},fields:{year:{displayName:"Year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Hour",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minute",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.naq=t())}(this,function(){"use strict";var e=[{locale:"naq",pluralRuleFunction:function(e,t){return t?"other":1==e?"one":2==e?"two":"other"},fields:{year:{displayName:"Kurib",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"ǁKhâb",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Tsees",relative:{0:"Neetsee",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Iiri",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Haib",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"ǀGâub",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,n){ true?module.exports=n():"function"==typeof define&&define.amd?define(n):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.nb=n())}(this,function(){"use strict";var e=[{locale:"nb",pluralRuleFunction:function(e,n){return n?"other":1==e?"one":"other"},fields:{year:{displayName:"år",relative:{0:"i år",1:"neste år","-1":"i fjor"},relativeTime:{future:{one:"om {0} år",other:"om {0} år"},past:{one:"for {0} år siden",other:"for {0} år siden"}}},month:{displayName:"måned",relative:{0:"denne måneden",1:"neste måned","-1":"forrige måned"},relativeTime:{future:{one:"om {0} måned",other:"om {0} måneder"},past:{one:"for {0} måned siden",other:"for {0} måneder siden"}}},day:{displayName:"dag",relative:{0:"i dag",1:"i morgen",2:"i overmorgen","-2":"i forgårs","-1":"i går"},relativeTime:{future:{one:"om {0} døgn",other:"om {0} døgn"},past:{one:"for {0} døgn siden",other:"for {0} døgn siden"}}},hour:{displayName:"time",relativeTime:{future:{one:"om {0} time",other:"om {0} timer"},past:{one:"for {0} time siden",other:"for {0} timer siden"}}},minute:{displayName:"minutt",relativeTime:{future:{one:"om {0} minutt",other:"om {0} minutter"},past:{one:"for {0} minutt siden",other:"for {0} minutter siden"}}},second:{displayName:"sekund",relative:{0:"nå"},relativeTime:{future:{one:"om {0} sekund",other:"om {0} sekunder"},past:{one:"for {0} sekund siden",other:"for {0} sekunder siden"}}}}},{locale:"nb-SJ",parentLocale:"nb"}];return e});

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.nd=t())}(this,function(){"use strict";var e=[{locale:"nd",pluralRuleFunction:function(e,t){return t?"other":1==e?"one":"other"},fields:{year:{displayName:"Umnyaka",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Inyangacale",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Ilanga",relative:{0:"Lamuhla",1:"Kusasa","-1":"Izolo"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Ihola",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Umuzuzu",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Isekendi",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.ne=t())}(this,function(){"use strict";var e=[{locale:"ne",pluralRuleFunction:function(e,t){var a=String(e).split("."),o=Number(a[0])==e;return t?o&&e>=1&&e<=4?"one":"other":1==e?"one":"other"},fields:{year:{displayName:"वर्ष",relative:{0:"यो वर्ष",1:"अर्को वर्ष","-1":"पहिलो वर्ष"},relativeTime:{future:{one:"{0} वर्षमा",other:"{0} वर्षमा"},past:{one:"{0} वर्ष अघि",other:"{0} वर्ष अघि"}}},month:{displayName:"महिना",relative:{0:"यो महिना",1:"अर्को महिना","-1":"गएको महिना"},relativeTime:{future:{one:"{0} महिनामा",other:"{0} महिनामा"},past:{one:"{0} महिना पहिले",other:"{0} महिना पहिले"}}},day:{displayName:"बार",relative:{0:"आज",1:"भोलि",2:"पर्सि","-2":"अस्ति","-1":"हिजो"},relativeTime:{future:{one:"{0} दिनमा",other:"{0} दिनमा"},past:{one:"{0} दिन पहिले",other:"{0} दिन पहिले"}}},hour:{displayName:"घण्टा",relativeTime:{future:{one:"{0} घण्टामा",other:"{0} घण्टामा"},past:{one:"{0} घण्टा पहिले",other:"{0} घण्टा पहिले"}}},minute:{displayName:"मिनेट",relativeTime:{future:{one:"{0} मिनेटमा",other:"{0} मिनेटमा"},past:{one:"{0} मिनेट पहिले",other:"{0} मिनेट पहिले"}}},second:{displayName:"सेकेन्ड",relative:{0:"अब"},relativeTime:{future:{one:"{0} सेकेण्डमा",other:"{0} सेकेण्डमा"},past:{one:"{0} सेकेण्ड पहिले",other:"{0} सेकेण्ड पहिले"}}}}},{locale:"ne-IN",parentLocale:"ne"}];return e});

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,a){ true?module.exports=a():"function"==typeof define&&define.amd?define(a):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.nl=a())}(this,function(){"use strict";var e=[{locale:"nl",pluralRuleFunction:function(e,a){var n=String(e).split("."),o=!n[1];return a?"other":1==e&&o?"one":"other"},fields:{year:{displayName:"jaar",relative:{0:"dit jaar",1:"volgend jaar","-1":"vorig jaar"},relativeTime:{future:{one:"over {0} jaar",other:"over {0} jaar"},past:{one:"{0} jaar geleden",other:"{0} jaar geleden"}}},month:{displayName:"maand",relative:{0:"deze maand",1:"volgende maand","-1":"vorige maand"},relativeTime:{future:{one:"over {0} maand",other:"over {0} maanden"},past:{one:"{0} maand geleden",other:"{0} maanden geleden"}}},day:{displayName:"dag",relative:{0:"vandaag",1:"morgen",2:"overmorgen","-2":"eergisteren","-1":"gisteren"},relativeTime:{future:{one:"over {0} dag",other:"over {0} dagen"},past:{one:"{0} dag geleden",other:"{0} dagen geleden"}}},hour:{displayName:"Uur",relativeTime:{future:{one:"over {0} uur",other:"over {0} uur"},past:{one:"{0} uur geleden",other:"{0} uur geleden"}}},minute:{displayName:"minuut",relativeTime:{future:{one:"over {0} minuut",other:"over {0} minuten"},past:{one:"{0} minuut geleden",other:"{0} minuten geleden"}}},second:{displayName:"seconde",relative:{0:"nu"},relativeTime:{future:{one:"over {0} seconde",other:"over {0} seconden"},past:{one:"{0} seconde geleden",other:"{0} seconden geleden"}}}}},{locale:"nl-AW",parentLocale:"nl"},{locale:"nl-BE",parentLocale:"nl"},{locale:"nl-BQ",parentLocale:"nl"},{locale:"nl-CW",parentLocale:"nl"},{locale:"nl-SR",parentLocale:"nl"},{locale:"nl-SX",parentLocale:"nl"}];return e});

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.nmg=t())}(this,function(){"use strict";var e=[{locale:"nmg",pluralRuleFunction:function(e,t){return"other"},fields:{year:{displayName:"Mbvu",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Ngwɛn",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Duö",relative:{0:"Dɔl",1:"Namáná","-1":"Nakugú"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Wulā",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Mpálâ",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Nyiɛl",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.nn=t())}(this,function(){"use strict";var e=[{locale:"nn",pluralRuleFunction:function(e,t){return t?"other":1==e?"one":"other"},fields:{year:{displayName:"år",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{one:"om {0} år",other:"om {0} år"},past:{one:"for {0} år siden",other:"for {0} år siden"}}},month:{displayName:"månad",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{one:"om {0} måned",other:"om {0} måneder"},past:{one:"for {0} måned siden",other:"for {0} måneder siden"}}},day:{displayName:"dag",relative:{0:"i dag",1:"i morgon",2:"i overmorgon","-2":"i forgårs","-1":"i går"},relativeTime:{future:{one:"om {0} døgn",other:"om {0} døgn"},past:{one:"for {0} døgn siden",other:"for {0} døgn siden"}}},hour:{displayName:"time",relativeTime:{future:{one:"om {0} time",other:"om {0} timer"},past:{one:"for {0} time siden",other:"for {0} timer siden"}}},minute:{displayName:"minutt",relativeTime:{future:{one:"om {0} minutt",other:"om {0} minutter"},past:{one:"for {0} minutt siden",other:"for {0} minutter siden"}}},second:{displayName:"sekund",relative:{0:"now"},relativeTime:{future:{one:"om {0} sekund",other:"om {0} sekunder"},past:{one:"for {0} sekund siden",other:"for {0} sekunder siden"}}}}}];return e});

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.nnh=t())}(this,function(){"use strict";var e=[{locale:"nnh",pluralRuleFunction:function(e,t){return t?"other":1==e?"one":"other"},fields:{year:{displayName:"ngùʼ",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"lyɛ̌ʼ",relative:{0:"lyɛ̌ʼɔɔn",1:"jǔɔ gẅie à ne ntóo","-1":"jǔɔ gẅie à ka tɔ̌g"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"fʉ̀ʼ nèm",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minute",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.no=t())}(this,function(){"use strict";var e=[{locale:"no",pluralRuleFunction:function(e,t){return t?"other":1==e?"one":"other"},fields:{year:{displayName:"Year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Hour",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minute",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.nqo=t())}(this,function(){"use strict";var e=[{locale:"nqo",pluralRuleFunction:function(e,t){return"other"},fields:{year:{displayName:"Year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Hour",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minute",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.nr=t())}(this,function(){"use strict";var e=[{locale:"nr",pluralRuleFunction:function(e,t){return t?"other":1==e?"one":"other"},fields:{year:{displayName:"Year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Hour",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minute",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.nso=t())}(this,function(){"use strict";var e=[{locale:"nso",pluralRuleFunction:function(e,t){return t?"other":0==e||1==e?"one":"other"},fields:{year:{displayName:"Year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Hour",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minute",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.nus=t())}(this,function(){"use strict";var e=[{locale:"nus",pluralRuleFunction:function(e,t){return"other"},fields:{year:{displayName:"Ruɔ̱n",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Pay",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Cäŋ",relative:{0:"Walɛ",1:"Ruun","-1":"Pan"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Thaak",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minit",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Thɛkɛni",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.ny=t())}(this,function(){"use strict";var e=[{locale:"ny",pluralRuleFunction:function(e,t){return t?"other":1==e?"one":"other"},fields:{year:{displayName:"Year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Hour",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minute",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.nyn=t())}(this,function(){"use strict";var e=[{locale:"nyn",pluralRuleFunction:function(e,t){return t?"other":1==e?"one":"other"},fields:{year:{displayName:"Omwaka",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Omwezi",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Eizooba",relative:{0:"Erizooba",1:"Nyenkyakare","-1":"Nyomwabazyo"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Shaaha",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Edakiika",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Obucweka/Esekendi",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.om=t())}(this,function(){"use strict";var e=[{locale:"om",pluralRuleFunction:function(e,t){return t?"other":1==e?"one":"other"},fields:{year:{displayName:"Year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Hour",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minute",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}},{locale:"om-KE",parentLocale:"om"}];return e});

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.or=t())}(this,function(){"use strict";var e=[{locale:"or",pluralRuleFunction:function(e,t){return t?"other":1==e?"one":"other"},fields:{year:{displayName:"Year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Hour",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minute",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.os=t())}(this,function(){"use strict";var e=[{locale:"os",pluralRuleFunction:function(e,t){return t?"other":1==e?"one":"other"},fields:{year:{displayName:"Аз",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Мӕй",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Бон",relative:{0:"Абон",1:"Сом",2:"Иннӕбон","-2":"Ӕндӕрӕбон","-1":"Знон"},relativeTime:{future:{one:"{0} боны фӕстӕ",other:"{0} боны фӕстӕ"},past:{one:"{0} бон раздӕр",other:"{0} боны размӕ"}}},hour:{displayName:"Сахат",relativeTime:{future:{one:"{0} сахаты фӕстӕ",other:"{0} сахаты фӕстӕ"},past:{one:"{0} сахаты размӕ",other:"{0} сахаты размӕ"}}},minute:{displayName:"Минут",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Секунд",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}},{locale:"os-RU",parentLocale:"os"}];return e});

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.pa=t())}(this,function(){"use strict";var e=[{locale:"pa",pluralRuleFunction:function(e,t){return t?"other":0==e||1==e?"one":"other"},fields:{year:{displayName:"ਸਾਲ",relative:{0:"ਇਹ ਸਾਲ",1:"ਅਗਲਾ ਸਾਲ","-1":"ਪਿਛਲਾ ਸਾਲ"},relativeTime:{future:{one:"{0} ਸਾਲ ਵਿੱਚ",other:"{0} ਸਾਲਾਂ ਵਿੱਚ"},past:{one:"{0} ਸਾਲ ਪਹਿਲਾਂ",other:"{0} ਸਾਲ ਪਹਿਲਾਂ"}}},month:{displayName:"ਮਹੀਨਾ",relative:{0:"ਇਹ ਮਹੀਨਾ",1:"ਅਗਲਾ ਮਹੀਨਾ","-1":"ਪਿਛਲਾ ਮਹੀਨਾ"},relativeTime:{future:{one:"{0} ਮਹੀਨੇ ਵਿੱਚ",other:"{0} ਮਹੀਨਿਆਂ ਵਿੱਚ"},past:{one:"{0} ਮਹੀਨੇ ਪਹਿਲਾਂ",other:"{0} ਮਹੀਨੇ ਪਹਿਲਾਂ"}}},day:{displayName:"ਦਿਨ",relative:{0:"ਅੱਜ",1:"ਭਲਕੇ","-1":"ਬੀਤਿਆ ਕੱਲ੍ਹ"},relativeTime:{future:{one:"{0} ਦਿਨ ਵਿੱਚ",other:"{0} ਦਿਨਾਂ ਵਿੱਚ"},past:{one:"{0} ਦਿਨ ਪਹਿਲਾਂ",other:"{0} ਦਿਨ ਪਹਿਲਾਂ"}}},hour:{displayName:"ਘੰਟਾ",relativeTime:{future:{one:"{0} ਘੰਟੇ ਵਿੱਚ",other:"{0} ਘੰਟਿਆਂ ਵਿੱਚ"},past:{one:"{0} ਘੰਟਾ ਪਹਿਲਾਂ",other:"{0} ਘੰਟੇ ਪਹਿਲਾਂ"}}},minute:{displayName:"ਮਿੰਟ",relativeTime:{future:{one:"{0} ਮਿੰਟ ਵਿੱਚ",other:"{0} ਮਿੰਟਾਂ ਵਿੱਚ"},past:{one:"{0} ਮਿੰਟ ਪਹਿਲਾਂ",other:"{0} ਮਿੰਟ ਪਹਿਲਾਂ"}}},second:{displayName:"ਸਕਿੰਟ",relative:{0:"ਹੁਣ"},relativeTime:{future:{one:"{0} ਸਕਿੰਟ ਵਿੱਚ",other:"{0} ਸਕਿੰਟਾਂ ਵਿੱਚ"},past:{one:"{0} ਸਕਿੰਟ ਪਹਿਲਾਂ",other:"{0} ਸਕਿੰਟ ਪਹਿਲਾਂ"}}}}},{locale:"pa-Arab",pluralRuleFunction:function(e,t){return"other"},fields:{year:{displayName:"ورھا",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"مہينا",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"دئن",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"گھنٹا",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"منٹ",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}},{locale:"pa-Guru",parentLocale:"pa"}];return e});

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.pap=t())}(this,function(){"use strict";var e=[{locale:"pap",pluralRuleFunction:function(e,t){return t?"other":1==e?"one":"other"},fields:{year:{displayName:"Year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Hour",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minute",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.pl=t())}(this,function(){"use strict";var e=[{locale:"pl",pluralRuleFunction:function(e,t){var a=String(e).split("."),i=a[0],n=!a[1],m=i.slice(-1),u=i.slice(-2);return t?"other":1==e&&n?"one":n&&m>=2&&m<=4&&(u<12||u>14)?"few":n&&1!=i&&(0==m||1==m)||n&&m>=5&&m<=9||n&&u>=12&&u<=14?"many":"other"},fields:{year:{displayName:"rok",relative:{0:"w tym roku",1:"w przyszłym roku","-1":"w zeszłym roku"},relativeTime:{future:{one:"za {0} rok",few:"za {0} lata",many:"za {0} lat",other:"za {0} roku"},past:{one:"{0} rok temu",few:"{0} lata temu",many:"{0} lat temu",other:"{0} roku temu"}}},month:{displayName:"miesiąc",relative:{0:"w tym miesiącu",1:"w przyszłym miesiącu","-1":"w zeszłym miesiącu"},relativeTime:{future:{one:"za {0} miesiąc",few:"za {0} miesiące",many:"za {0} miesięcy",other:"za {0} miesiąca"},past:{one:"{0} miesiąc temu",few:"{0} miesiące temu",many:"{0} miesięcy temu",other:"{0} miesiąca temu"}}},day:{displayName:"dzień",relative:{0:"dzisiaj",1:"jutro",2:"pojutrze","-2":"przedwczoraj","-1":"wczoraj"},relativeTime:{future:{one:"za {0} dzień",few:"za {0} dni",many:"za {0} dni",other:"za {0} dnia"},past:{one:"{0} dzień temu",few:"{0} dni temu",many:"{0} dni temu",other:"{0} dnia temu"}}},hour:{displayName:"godzina",relativeTime:{future:{one:"za {0} godzinę",few:"za {0} godziny",many:"za {0} godzin",other:"za {0} godziny"},past:{one:"{0} godzinę temu",few:"{0} godziny temu",many:"{0} godzin temu",other:"{0} godziny temu"}}},minute:{displayName:"minuta",relativeTime:{future:{one:"za {0} minutę",few:"za {0} minuty",many:"za {0} minut",other:"za {0} minuty"},past:{one:"{0} minutę temu",few:"{0} minuty temu",many:"{0} minut temu",other:"{0} minuty temu"}}},second:{displayName:"sekunda",relative:{0:"teraz"},relativeTime:{future:{one:"za {0} sekundę",few:"za {0} sekundy",many:"za {0} sekund",other:"za {0} sekundy"},past:{one:"{0} sekundę temu",few:"{0} sekundy temu",many:"{0} sekund temu",other:"{0} sekundy temu"}}}}}];return e});

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.prg=t())}(this,function(){"use strict";var e=[{locale:"prg",pluralRuleFunction:function(e,t){var a=String(e).split("."),r=a[1]||"",o=r.length,i=Number(a[0])==e,l=i&&a[0].slice(-1),n=i&&a[0].slice(-2),s=r.slice(-2),u=r.slice(-1);return t?"other":i&&0==l||n>=11&&n<=19||2==o&&s>=11&&s<=19?"zero":1==l&&11!=n||2==o&&1==u&&11!=s||2!=o&&1==u?"one":"other"},fields:{year:{displayName:"Year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Hour",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minute",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.ps=t())}(this,function(){"use strict";var e=[{locale:"ps",pluralRuleFunction:function(e,t){return t?"other":1==e?"one":"other"},fields:{year:{displayName:"Year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Hour",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minute",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,o){ true?module.exports=o():"function"==typeof define&&define.amd?define(o):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.pt=o())}(this,function(){"use strict";var e=[{locale:"pt",pluralRuleFunction:function(e,o){var t=String(e).split("."),a=Number(t[0])==e;return o?"other":a&&e>=0&&e<=2&&2!=e?"one":"other"},fields:{year:{displayName:"ano",relative:{0:"este ano",1:"próximo ano","-1":"ano passado"},relativeTime:{future:{one:"em {0} ano",other:"em {0} anos"},past:{one:"há {0} ano",other:"há {0} anos"}}},month:{displayName:"mês",relative:{0:"este mês",1:"próximo mês","-1":"mês passado"},relativeTime:{future:{one:"em {0} mês",other:"em {0} meses"},past:{one:"há {0} mês",other:"há {0} meses"}}},day:{displayName:"dia",relative:{0:"hoje",1:"amanhã",2:"depois de amanhã","-2":"anteontem","-1":"ontem"},relativeTime:{future:{one:"em {0} dia",other:"em {0} dias"},past:{one:"há {0} dia",other:"há {0} dias"}}},hour:{displayName:"hora",relativeTime:{future:{one:"em {0} hora",other:"em {0} horas"},past:{one:"há {0} hora",other:"há {0} horas"}}},minute:{displayName:"minuto",relativeTime:{future:{one:"em {0} minuto",other:"em {0} minutos"},past:{one:"há {0} minuto",other:"há {0} minutos"}}},second:{displayName:"segundo",relative:{0:"agora"},relativeTime:{future:{one:"em {0} segundo",other:"em {0} segundos"},past:{one:"há {0} segundo",other:"há {0} segundos"}}}}},{locale:"pt-AO",parentLocale:"pt-PT"},{locale:"pt-PT",parentLocale:"pt",pluralRuleFunction:function(e,o){var t=String(e).split("."),a=!t[1];return o?"other":1==e&&a?"one":"other"},fields:{year:{displayName:"ano",relative:{0:"este ano",1:"próximo ano","-1":"ano passado"},relativeTime:{future:{one:"dentro de {0} ano",other:"dentro de {0} anos"},past:{one:"há {0} ano",other:"há {0} anos"}}},month:{displayName:"mês",relative:{0:"este mês",1:"próximo mês","-1":"mês passado"},relativeTime:{future:{one:"dentro de {0} mês",other:"dentro de {0} meses"},past:{one:"há {0} mês",other:"há {0} meses"}}},day:{displayName:"dia",relative:{0:"hoje",1:"amanhã",2:"depois de amanhã","-2":"anteontem","-1":"ontem"},relativeTime:{future:{one:"dentro de {0} dia",other:"dentro de {0} dias"},past:{one:"há {0} dia",other:"há {0} dias"}}},hour:{displayName:"hora",relativeTime:{future:{one:"dentro de {0} hora",other:"dentro de {0} horas"},past:{one:"há {0} hora",other:"há {0} horas"}}},minute:{displayName:"minuto",relativeTime:{future:{one:"dentro de {0} minuto",other:"dentro de {0} minutos"},past:{one:"há {0} minuto",other:"há {0} minutos"}}},second:{displayName:"segundo",relative:{0:"agora"},relativeTime:{future:{one:"dentro de {0} segundo",other:"dentro de {0} segundos"},past:{one:"há {0} segundo",other:"há {0} segundos"}}}}},{locale:"pt-CV",parentLocale:"pt-PT"},{locale:"pt-GW",parentLocale:"pt-PT"},{locale:"pt-MO",parentLocale:"pt-PT"},{locale:"pt-MZ",parentLocale:"pt-PT"},{locale:"pt-ST",parentLocale:"pt-PT"},{locale:"pt-TL",parentLocale:"pt-PT"}];return e});

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.qu=t())}(this,function(){"use strict";var e=[{locale:"qu",pluralRuleFunction:function(e,t){return"other"},fields:{year:{displayName:"Year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Hour",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minute",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}},{locale:"qu-BO",parentLocale:"qu"},{locale:"qu-EC",parentLocale:"qu"}];return e});

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.rm=t())}(this,function(){"use strict";var e=[{locale:"rm",pluralRuleFunction:function(e,t){return t?"other":1==e?"one":"other"},fields:{year:{displayName:"onn",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"mais",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Tag",relative:{0:"oz",1:"damaun",2:"puschmaun","-2":"stersas","-1":"ier"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"ura",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"minuta",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"secunda",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.rn=t())}(this,function(){"use strict";var e=[{locale:"rn",pluralRuleFunction:function(e,t){return"other"},fields:{year:{displayName:"Umwaka",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Ukwezi",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Umusi",relative:{0:"Uyu musi",1:"Ejo (hazoza)","-1":"Ejo (haheze)"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Isaha",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Umunota",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Isegonda",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.ro=t())}(this,function(){"use strict";var e=[{locale:"ro",pluralRuleFunction:function(e,t){var a=String(e).split("."),u=!a[1],n=Number(a[0])==e,i=n&&a[0].slice(-2);return t?1==e?"one":"other":1==e&&u?"one":!u||0==e||1!=e&&i>=1&&i<=19?"few":"other"},fields:{year:{displayName:"An",relative:{0:"anul acesta",1:"anul viitor","-1":"anul trecut"},relativeTime:{future:{one:"peste {0} an",few:"peste {0} ani",other:"peste {0} de ani"},past:{one:"acum {0} an",few:"acum {0} ani",other:"acum {0} de ani"}}},month:{displayName:"Lună",relative:{0:"luna aceasta",1:"luna viitoare","-1":"luna trecută"},relativeTime:{future:{one:"peste {0} lună",few:"peste {0} luni",other:"peste {0} de luni"},past:{one:"acum {0} lună",few:"acum {0} luni",other:"acum {0} de luni"}}},day:{displayName:"Zi",relative:{0:"azi",1:"mâine",2:"poimâine","-2":"alaltăieri","-1":"ieri"},relativeTime:{future:{one:"peste {0} zi",few:"peste {0} zile",other:"peste {0} de zile"},past:{one:"acum {0} zi",few:"acum {0} zile",other:"acum {0} de zile"}}},hour:{displayName:"Oră",relativeTime:{future:{one:"peste {0} oră",few:"peste {0} ore",other:"peste {0} de ore"},past:{one:"acum {0} oră",few:"acum {0} ore",other:"acum {0} de ore"}}},minute:{displayName:"Minut",relativeTime:{future:{one:"peste {0} minut",few:"peste {0} minute",other:"peste {0} de minute"},past:{one:"acum {0} minut",few:"acum {0} minute",other:"acum {0} de minute"}}},second:{displayName:"Secundă",relative:{0:"acum"},relativeTime:{future:{one:"peste {0} secundă",few:"peste {0} secunde",other:"peste {0} de secunde"},past:{one:"acum {0} secundă",few:"acum {0} secunde",other:"acum {0} de secunde"}}}}},{locale:"ro-MD",parentLocale:"ro"}];return e});

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.rof=t())}(this,function(){"use strict";var e=[{locale:"rof",pluralRuleFunction:function(e,t){return t?"other":1==e?"one":"other"},fields:{year:{displayName:"Muaka",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Mweri",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Mfiri",relative:{0:"Linu",1:"Ng’ama","-1":"Hiyo"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Isaa",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Dakika",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Sekunde",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,a){ true?module.exports=a():"function"==typeof define&&define.amd?define(a):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.ru=a())}(this,function(){"use strict";var e=[{locale:"ru",pluralRuleFunction:function(e,a){var t=String(e).split("."),r=t[0],o=!t[1],n=r.slice(-1),l=r.slice(-2);return a?"other":o&&1==n&&11!=l?"one":o&&n>=2&&n<=4&&(l<12||l>14)?"few":o&&0==n||o&&n>=5&&n<=9||o&&l>=11&&l<=14?"many":"other"},fields:{year:{displayName:"год",relative:{0:"в этом году",1:"в следующем году","-1":"в прошлом году"},relativeTime:{future:{one:"через {0} год",few:"через {0} года",many:"через {0} лет",other:"через {0} года"},past:{one:"{0} год назад",few:"{0} года назад",many:"{0} лет назад",other:"{0} года назад"}}},month:{displayName:"месяц",relative:{0:"в этом месяце",1:"в следующем месяце","-1":"в прошлом месяце"},relativeTime:{future:{one:"через {0} месяц",few:"через {0} месяца",many:"через {0} месяцев",other:"через {0} месяца"},past:{one:"{0} месяц назад",few:"{0} месяца назад",many:"{0} месяцев назад",other:"{0} месяца назад"}}},day:{displayName:"день",relative:{0:"сегодня",1:"завтра",2:"послезавтра","-2":"позавчера","-1":"вчера"},relativeTime:{future:{one:"через {0} день",few:"через {0} дня",many:"через {0} дней",other:"через {0} дней"},past:{one:"{0} день назад",few:"{0} дня назад",many:"{0} дней назад",other:"{0} дня назад"}}},hour:{displayName:"час",relativeTime:{future:{one:"через {0} час",few:"через {0} часа",many:"через {0} часов",other:"через {0} часа"},past:{one:"{0} час назад",few:"{0} часа назад",many:"{0} часов назад",other:"{0} часа назад"}}},minute:{displayName:"минута",relativeTime:{future:{one:"через {0} минуту",few:"через {0} минуты",many:"через {0} минут",other:"через {0} минуты"},past:{one:"{0} минуту назад",few:"{0} минуты назад",many:"{0} минут назад",other:"{0} минуты назад"}}},second:{displayName:"секунда",relative:{0:"сейчас"},relativeTime:{future:{one:"через {0} секунду",few:"через {0} секунды",many:"через {0} секунд",other:"через {0} секунды"},past:{one:"{0} секунду назад",few:"{0} секунды назад",many:"{0} секунд назад",other:"{0} секунды назад"}}}}},{locale:"ru-BY",parentLocale:"ru"},{locale:"ru-KG",parentLocale:"ru"},{locale:"ru-KZ",parentLocale:"ru"},{locale:"ru-MD",parentLocale:"ru"},{locale:"ru-UA",parentLocale:"ru"}];return e});

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.rw=t())}(this,function(){"use strict";var e=[{locale:"rw",pluralRuleFunction:function(e,t){return"other"},fields:{year:{displayName:"Year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Hour",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minute",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.rwk=t())}(this,function(){"use strict";var e=[{locale:"rwk",pluralRuleFunction:function(e,t){return t?"other":1==e?"one":"other"},fields:{year:{displayName:"Maka",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Mori",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Mfiri",relative:{0:"Inu",1:"Ngama","-1":"Ukou"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Saa",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Dakyika",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Sekunde",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.sah=t())}(this,function(){"use strict";var e=[{locale:"sah",pluralRuleFunction:function(e,t){return"other"},fields:{year:{displayName:"Сыл",relative:{0:"бу сыл",1:"кэлэр сыл","-1":"ааспыт сыл"},relativeTime:{future:{other:"{0} сылынан"},past:{other:"{0} сыл ынараа өттүгэр"}}},month:{displayName:"Ый",relative:{0:"бу ый",1:"аныгыскы ый","-1":"ааспыт ый"},relativeTime:{future:{other:"{0} ыйынан"},past:{other:"{0} ый ынараа өттүгэр"}}},day:{displayName:"Күн",relative:{0:"Бүгүн",1:"Сарсын",2:"Өйүүн","-2":"Иллэрээ күн","-1":"Бэҕэһээ"},relativeTime:{future:{other:"{0} күнүнэн"},past:{other:"{0} күн ынараа өттүгэр"}}},hour:{displayName:"Чаас",relativeTime:{future:{other:"{0} чааһынан"},past:{other:"{0} чаас ынараа өттүгэр"}}},minute:{displayName:"Мүнүүтэ",relativeTime:{future:{other:"{0} мүнүүтэннэн"},past:{other:"{0} мүнүүтэ ынараа өттүгэр"}}},second:{displayName:"Сөкүүндэ",relative:{0:"now"},relativeTime:{future:{other:"{0} сөкүүндэннэн"},past:{other:"{0} сөкүүндэ ынараа өттүгэр"}}}}}];return e});

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.saq=t())}(this,function(){"use strict";var e=[{locale:"saq",pluralRuleFunction:function(e,t){return t?"other":1==e?"one":"other"},fields:{year:{displayName:"Lari",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Lapa",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Mpari",relative:{0:"Duo",1:"Taisere","-1":"Ng’ole"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Saai",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Idakika",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Isekondi",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.sbp=t())}(this,function(){"use strict";var e=[{locale:"sbp",pluralRuleFunction:function(e,t){return"other"},fields:{year:{displayName:"Mwakha",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Mwesi",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Lusiku",relative:{0:"Ineng’uni",1:"Pamulaawu","-1":"Imehe"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Ilisala",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Idakika",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Isekunde",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.sdh=t())}(this,function(){"use strict";var e=[{locale:"sdh",pluralRuleFunction:function(e,t){return t?"other":1==e?"one":"other"},fields:{year:{displayName:"Year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Hour",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minute",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	!function(t,a){ true?module.exports=a():"function"==typeof define&&define.amd?define(a):(t.ReactIntlLocaleData=t.ReactIntlLocaleData||{},t.ReactIntlLocaleData.se=a())}(this,function(){"use strict";var t=[{locale:"se",pluralRuleFunction:function(t,a){return a?"other":1==t?"one":2==t?"two":"other"},fields:{year:{displayName:"jáhki",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{one:"{0} jahki maŋŋilit",two:"{0} jahkki maŋŋilit",other:"{0} jahkki maŋŋilit"},past:{one:"{0} jahki árat",two:"{0} jahkki árat",other:"{0} jahkki árat"}}},month:{displayName:"mánnu",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{one:"{0} mánotbadji maŋŋilit",two:"{0} mánotbadji maŋŋilit",other:"{0} mánotbadji maŋŋilit"},past:{one:"{0} mánotbadji árat",two:"{0} mánotbadji árat",other:"{0} mánotbadji árat"}}},day:{displayName:"beaivi",relative:{0:"odne",1:"ihttin",2:"paijeelittáá","-2":"oovdebpeivvi","-1":"ikte"},relativeTime:{future:{one:"{0} jándor maŋŋilit",two:"{0} jándor amaŋŋilit",other:"{0} jándora maŋŋilit"},past:{one:"{0} jándor árat",two:"{0} jándora árat",other:"{0} jándora árat"}}},hour:{displayName:"diibmu",relativeTime:{future:{one:"{0} diibmu maŋŋilit",two:"{0} diibmur maŋŋilit",other:"{0} diibmur maŋŋilit"},past:{one:"{0} diibmu árat",two:"{0} diibmur árat",other:"{0} diibmur árat"}}},minute:{displayName:"minuhtta",relativeTime:{future:{one:"{0} minuhta maŋŋilit",two:"{0} minuhtta maŋŋilit",other:"{0} minuhtta maŋŋilit"},past:{one:"{0} minuhta árat",two:"{0} minuhtta árat",other:"{0} minuhtta árat"}}},second:{displayName:"sekunda",relative:{0:"now"},relativeTime:{future:{one:"{0} sekunda maŋŋilit",two:"{0} sekundda maŋŋilit",other:"{0} sekundda maŋŋilit"},past:{one:"{0} sekunda árat",two:"{0} sekundda árat",other:"{0} sekundda árat"}}}}},{locale:"se-FI",parentLocale:"se",fields:{year:{displayName:"jahki",relative:{0:"dán jagi",1:"boahtte jagi","-1":"mannan jagi"},relativeTime:{future:{one:"{0} jagi siste",two:"{0} jagi siste",other:"{0} jagi siste"},past:{one:"{0} jagi árat",two:"{0} jagi árat",other:"{0} jagi árat"}}},month:{displayName:"mánnu",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{one:"{0} mánotbadji maŋŋilit",two:"{0} mánotbadji maŋŋilit",other:"{0} mánotbadji maŋŋilit"},past:{one:"{0} mánotbadji árat",two:"{0} mánotbadji árat",other:"{0} mánotbadji árat"}}},day:{displayName:"beaivi",relative:{0:"odne",1:"ihttin",2:"paijeelittáá","-2":"oovdebpeivvi","-1":"ikte"},relativeTime:{future:{one:"{0} jándor maŋŋilit",two:"{0} jándor amaŋŋilit",other:"{0} jándora maŋŋilit"},past:{one:"{0} jándor árat",two:"{0} jándora árat",other:"{0} jándora árat"}}},hour:{displayName:"diibmu",relativeTime:{future:{one:"{0} diibmu maŋŋilit",two:"{0} diibmur maŋŋilit",other:"{0} diibmur maŋŋilit"},past:{one:"{0} diibmu árat",two:"{0} diibmur árat",other:"{0} diibmur árat"}}},minute:{displayName:"minuhtta",relativeTime:{future:{one:"{0} minuhta maŋŋilit",two:"{0} minuhtta maŋŋilit",other:"{0} minuhtta maŋŋilit"},past:{one:"{0} minuhta árat",two:"{0} minuhtta árat",other:"{0} minuhtta árat"}}},second:{displayName:"sekunda",relative:{0:"now"},relativeTime:{future:{one:"{0} sekunda maŋŋilit",two:"{0} sekundda maŋŋilit",other:"{0} sekundda maŋŋilit"},past:{one:"{0} sekunda árat",two:"{0} sekundda árat",other:"{0} sekundda árat"}}}}},{locale:"se-SE",parentLocale:"se"}];return t});

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.seh=t())}(this,function(){"use strict";var e=[{locale:"seh",pluralRuleFunction:function(e,t){return t?"other":1==e?"one":"other"},fields:{year:{displayName:"Chaka",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Mwezi",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Ntsiku",relative:{0:"Lero",1:"Manguana","-1":"Zuro"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Hora",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minuto",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Segundo",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.ses=t())}(this,function(){"use strict";var e=[{locale:"ses",pluralRuleFunction:function(e,t){return"other"},fields:{year:{displayName:"Jiiri",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Handu",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Zaari",relative:{0:"Hõo",1:"Suba","-1":"Bi"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Guuru",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Miniti",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Miti",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.sg=t())}(this,function(){"use strict";var e=[{locale:"sg",pluralRuleFunction:function(e,t){return"other"},fields:{year:{displayName:"Ngû",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Nze",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Lâ",relative:{0:"Lâsô",1:"Kêkerêke","-1":"Bîrï"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Ngbonga",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Ndurü ngbonga",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Nzîna ngbonga",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.sh=t())}(this,function(){"use strict";var e=[{locale:"sh",pluralRuleFunction:function(e,t){var a=String(e).split("."),r=a[0],i=a[1]||"",o=!a[1],l=r.slice(-1),n=r.slice(-2),s=i.slice(-1),u=i.slice(-2);return t?"other":o&&1==l&&11!=n||1==s&&11!=u?"one":o&&l>=2&&l<=4&&(n<12||n>14)||s>=2&&s<=4&&(u<12||u>14)?"few":"other"},fields:{year:{displayName:"Year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Hour",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minute",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.shi=t())}(this,function(){"use strict";var e=[{locale:"shi",pluralRuleFunction:function(e,t){var a=String(e).split("."),r=Number(a[0])==e;return t?"other":e>=0&&e<=1?"one":r&&e>=2&&e<=10?"few":"other"},fields:{year:{displayName:"ⴰⵙⴳⴳⵯⴰⵙ",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"ⴰⵢⵢⵓⵔ",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"ⴰⵙⵙ",relative:{0:"ⴰⵙⵙⴰ",1:"ⴰⵙⴽⴽⴰ","-1":"ⵉⴹⵍⵍⵉ"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"ⵜⴰⵙⵔⴰⴳⵜ",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"ⵜⵓⵙⴷⵉⴷⵜ",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"ⵜⴰⵙⵉⵏⵜ",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}},{locale:"shi-Latn",pluralRuleFunction:function(e,t){return"other"},fields:{year:{displayName:"asggʷas",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"ayyur",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"ass",relative:{0:"assa",1:"askka","-1":"iḍlli"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"tasragt",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"tusdidt",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"tasint",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}},{locale:"shi-Tfng",parentLocale:"shi"}];return e});

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.si=t())}(this,function(){"use strict";var e=[{locale:"si",pluralRuleFunction:function(e,t){var a=String(e).split("."),o=a[0],r=a[1]||"";return t?"other":0==e||1==e||0==o&&1==r?"one":"other"},fields:{year:{displayName:"වර්ෂය",relative:{0:"මෙම වසර",1:"ඊළඟ වසර","-1":"පසුගිය වසර"},relativeTime:{future:{one:"වසර {0} කින්",other:"වසර {0} කින්"},past:{one:"වසර {0}ට පෙර",other:"වසර {0}ට පෙර"}}},month:{displayName:"මාසය",relative:{0:"මෙම මාසය",1:"ඊළඟ මාසය","-1":"පසුගිය මාසය"},relativeTime:{future:{one:"මාස {0}කින්",other:"මාස {0}කින්"},past:{one:"මාස {0}කට පෙර",other:"මාස {0}කට පෙර"}}},day:{displayName:"දිනය",relative:{0:"අද",1:"හෙට",2:"අනිද්දා","-2":"පෙරේදා","-1":"ඊයේ"},relativeTime:{future:{one:"දින {0}න්",other:"දින {0}න්"},past:{one:"දින {0} ට පෙර",other:"දින {0} ට පෙර"}}},hour:{displayName:"පැය",relativeTime:{future:{one:"පැය {0} කින්",other:"පැය {0} කින්"},past:{one:"පැය {0}ට පෙර",other:"පැය {0}ට පෙර"}}},minute:{displayName:"මිනිත්තුව",relativeTime:{future:{one:"මිනිත්තු {0} කින්",other:"මිනිත්තු {0} කින්"},past:{one:"මිනිත්තු {0}ට පෙර",other:"මිනිත්තු {0}ට පෙර"}}},second:{displayName:"තත්පරය",relative:{0:"දැන්"},relativeTime:{future:{one:"තත්පර {0} කින්",other:"තත්පර {0} කින්"},past:{one:"තත්පර {0}කට පෙර",other:"තත්පර {0}කට පෙර"}}}}}];return e});

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,o){ true?module.exports=o():"function"==typeof define&&define.amd?define(o):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.sk=o())}(this,function(){"use strict";var e=[{locale:"sk",pluralRuleFunction:function(e,o){var a=String(e).split("."),r=a[0],n=!a[1];return o?"other":1==e&&n?"one":r>=2&&r<=4&&n?"few":n?"other":"many"},fields:{year:{displayName:"rok",relative:{0:"tento rok",1:"budúci rok","-1":"minulý rok"},relativeTime:{future:{one:"o {0} rok",few:"o {0} roky",many:"o {0} roka",other:"o {0} rokov"},past:{one:"pred {0} rokom",few:"pred {0} rokmi",many:"pred {0} roka",other:"pred {0} rokmi"}}},month:{displayName:"mesiac",relative:{0:"tento mesiac",1:"budúci mesiac","-1":"minulý mesiac"},relativeTime:{future:{one:"o {0} mesiac",few:"o {0} mesiace",many:"o {0} mesiaca",other:"o {0} mesiacov"},past:{one:"pred {0} mesiacom",few:"pred {0} mesiacmi",many:"pred {0} mesiaca",other:"pred {0} mesiacmi"}}},day:{displayName:"deň",relative:{0:"dnes",1:"zajtra",2:"pozajtra","-2":"predvčerom","-1":"včera"},relativeTime:{future:{one:"o {0} deň",few:"o {0} dni",many:"o {0} dňa",other:"o {0} dní"},past:{one:"pred {0} dňom",few:"pred {0} dňami",many:"pred {0} dňa",other:"pred {0} dňami"}}},hour:{displayName:"hodina",relativeTime:{future:{one:"o {0} hodinu",few:"o {0} hodiny",many:"o {0} hodiny",other:"o {0} hodín"},past:{one:"pred {0} hodinou",few:"pred {0} hodinami",many:"pred {0} hodinou",other:"pred {0} hodinami"}}},minute:{displayName:"minúta",relativeTime:{future:{one:"o {0} minútu",few:"o {0} minúty",many:"o {0} minúty",other:"o {0} minút"},past:{one:"pred {0} minútou",few:"pred {0} minútami",many:"pred {0} minúty",other:"pred {0} minútami"}}},second:{displayName:"sekunda",relative:{0:"teraz"},relativeTime:{future:{one:"o {0} sekundu",few:"o {0} sekundy",many:"o {0} sekundy",other:"o {0} sekúnd"},past:{one:"pred {0} sekundou",few:"pred {0} sekundami",many:"pred {0} sekundy",other:"pred {0} sekundami"}}}}}];return e});

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.sl=t())}(this,function(){"use strict";var e=[{locale:"sl",pluralRuleFunction:function(e,t){var r=String(e).split("."),a=r[0],o=!r[1],n=a.slice(-2);return t?"other":o&&1==n?"one":o&&2==n?"two":o&&(3==n||4==n)||!o?"few":"other"},fields:{year:{displayName:"leto",relative:{0:"letos",1:"naslednje leto","-1":"lani"},relativeTime:{future:{one:"čez {0} leto",two:"čez {0} leti",few:"čez {0} leta",other:"čez {0} let"},past:{one:"pred {0} letom",two:"pred {0} letoma",few:"pred {0} leti",other:"pred {0} leti"}}},month:{displayName:"mesec",relative:{0:"ta mesec",1:"naslednji mesec","-1":"prejšnji mesec"},relativeTime:{future:{one:"čez {0} mesec",two:"čez {0} meseca",few:"čez {0} mesece",other:"čez {0} mesecev"},past:{one:"pred {0} mesecem",two:"pred {0} mesecema",few:"pred {0} meseci",other:"pred {0} meseci"}}},day:{displayName:"Dan",relative:{0:"danes",1:"jutri",2:"pojutrišnjem","-2":"predvčerajšnjim","-1":"včeraj"},relativeTime:{future:{one:"čez {0} dan",two:"čez {0} dneva",few:"čez {0} dni",other:"čez {0} dni"},past:{one:"pred {0} dnevom",two:"pred {0} dnevoma",few:"pred {0} dnevi",other:"pred {0} dnevi"}}},hour:{displayName:"ura",relativeTime:{future:{one:"čez {0} uro",two:"čez {0} uri",few:"čez {0} ure",other:"čez {0} ur"},past:{one:"pred {0} uro",two:"pred {0} urama",few:"pred {0} urami",other:"pred {0} urami"}}},minute:{displayName:"minuta",relativeTime:{future:{one:"čez {0} minuto",two:"čez {0} minuti",few:"čez {0} minute",other:"čez {0} minut"},past:{one:"pred {0} minuto",two:"pred {0} minutama",few:"pred {0} minutami",other:"pred {0} minutami"}}},second:{displayName:"sekunda",relative:{0:"zdaj"},relativeTime:{future:{one:"čez {0} sekundo",two:"čez {0} sekundi",few:"čez {0} sekunde",other:"čez {0} sekund"},past:{one:"pred {0} sekundo",two:"pred {0} sekundama",few:"pred {0} sekundami",other:"pred {0} sekundami"}}}}}];return e});

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.sma=t())}(this,function(){"use strict";var e=[{locale:"sma",pluralRuleFunction:function(e,t){return t?"other":1==e?"one":2==e?"two":"other"},fields:{year:{displayName:"Year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Hour",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minute",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.smi=t())}(this,function(){"use strict";var e=[{locale:"smi",pluralRuleFunction:function(e,t){return t?"other":1==e?"one":2==e?"two":"other"},fields:{year:{displayName:"Year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Hour",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minute",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.smj=t())}(this,function(){"use strict";var e=[{locale:"smj",pluralRuleFunction:function(e,t){return t?"other":1==e?"one":2==e?"two":"other"},fields:{year:{displayName:"Year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Hour",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minute",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.smn=t())}(this,function(){"use strict";var e=[{locale:"smn",pluralRuleFunction:function(e,t){return t?"other":1==e?"one":2==e?"two":"other"},fields:{year:{displayName:"Year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Hour",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minute",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.sms=t())}(this,function(){"use strict";var e=[{locale:"sms",pluralRuleFunction:function(e,t){return t?"other":1==e?"one":2==e?"two":"other"},fields:{year:{displayName:"Year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Hour",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minute",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.sn=t())}(this,function(){"use strict";var e=[{locale:"sn",pluralRuleFunction:function(e,t){return t?"other":1==e?"one":"other"},fields:{year:{displayName:"Gore",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Mwedzi",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Zuva",relative:{0:"Nhasi",1:"Mangwana","-1":"Nezuro"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Awa",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Mineti",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Sekondi",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.so=t())}(this,function(){"use strict";var e=[{locale:"so",pluralRuleFunction:function(e,t){return t?"other":1==e?"one":"other"},fields:{year:{displayName:"Sanad",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Bil",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Maalin",relative:{0:"Maanta",1:"Berri","-1":"Shalay"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Saacad",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Daqiiqad",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Il biriqsi",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}},{locale:"so-DJ",parentLocale:"so"},{locale:"so-ET",parentLocale:"so"},{locale:"so-KE",parentLocale:"so"}];return e});

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,a){ true?module.exports=a():"function"==typeof define&&define.amd?define(a):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.sq=a())}(this,function(){"use strict";var e=[{locale:"sq",pluralRuleFunction:function(e,a){var t=String(e).split("."),r=Number(t[0])==e,o=r&&t[0].slice(-1),i=r&&t[0].slice(-2);return a?1==e?"one":4==o&&14!=i?"many":"other":1==e?"one":"other"},fields:{year:{displayName:"vit",relative:{0:"këtë vit",1:"vitin e ardhshëm","-1":"vitin e kaluar"},relativeTime:{future:{one:"pas {0} viti",other:"pas {0} vjetësh"},past:{one:"{0} vit më parë",other:"{0} vjet më parë"}}},month:{displayName:"muaj",relative:{0:"këtë muaj",1:"muajin e ardhshëm","-1":"muajin e kaluar"},relativeTime:{future:{one:"pas {0} muaji",other:"pas {0} muajsh"},past:{one:"{0} muaj më parë",other:"{0} muaj më parë"}}},day:{displayName:"ditë",relative:{0:"sot",1:"nesër","-1":"dje"},relativeTime:{future:{one:"pas {0} dite",other:"pas {0} ditësh"},past:{one:"{0} ditë më parë",other:"{0} ditë më parë"}}},hour:{displayName:"orë",relativeTime:{future:{one:"pas {0} ore",other:"pas {0} orësh"},past:{one:"{0} orë më parë",other:"{0} orë më parë"}}},minute:{displayName:"minutë",relativeTime:{future:{one:"pas {0} minute",other:"pas {0} minutash"},past:{one:"{0} minutë më parë",other:"{0} minuta më parë"}}},second:{displayName:"sekondë",relative:{0:"tani"},relativeTime:{future:{one:"pas {0} sekonde",other:"pas {0} sekondash"},past:{one:"{0} sekondë më parë",other:"{0} sekonda më parë"}}}}},{locale:"sq-MK",parentLocale:"sq"},{locale:"sq-XK",parentLocale:"sq"}];return e});

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,a){ true?module.exports=a():"function"==typeof define&&define.amd?define(a):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.sr=a())}(this,function(){"use strict";var e=[{locale:"sr",pluralRuleFunction:function(e,a){var t=String(e).split("."),r=t[0],o=t[1]||"",n=!t[1],i=r.slice(-1),l=r.slice(-2),s=o.slice(-1),u=o.slice(-2);return a?"other":n&&1==i&&11!=l||1==s&&11!=u?"one":n&&i>=2&&i<=4&&(l<12||l>14)||s>=2&&s<=4&&(u<12||u>14)?"few":"other"},fields:{year:{displayName:"година",relative:{0:"ове године",1:"следеће године","-1":"прошле године"},relativeTime:{future:{one:"за {0} годину",few:"за {0} године",other:"за {0} година"},past:{one:"пре {0} године",few:"пре {0} године",other:"пре {0} година"}}},month:{displayName:"месец",relative:{0:"овог месеца",1:"следећег месеца","-1":"прошлог месеца"},relativeTime:{future:{one:"за {0} месец",few:"за {0} месеца",other:"за {0} месеци"},past:{one:"пре {0} месеца",few:"пре {0} месеца",other:"пре {0} месеци"}}},day:{displayName:"дан",relative:{0:"данас",1:"сутра",2:"прекосутра","-2":"прекјуче","-1":"јуче"},relativeTime:{future:{one:"за {0} дан",few:"за {0} дана",other:"за {0} дана"},past:{one:"пре {0} дана",few:"пре {0} дана",other:"пре {0} дана"}}},hour:{displayName:"сат",relativeTime:{future:{one:"за {0} сат",few:"за {0} сата",other:"за {0} сати"},past:{one:"пре {0} сата",few:"пре {0} сата",other:"пре {0} сати"}}},minute:{displayName:"минут",relativeTime:{future:{one:"за {0} минут",few:"за {0} минута",other:"за {0} минута"},past:{one:"пре {0} минута",few:"пре {0} минута",other:"пре {0} минута"}}},second:{displayName:"секунд",relative:{0:"сада"},relativeTime:{future:{one:"за {0} секунду",few:"за {0} секунде",other:"за {0} секунди"},past:{one:"пре {0} секунде",few:"пре {0} секунде",other:"пре {0} секунди"}}}}},{locale:"sr-Cyrl",parentLocale:"sr"},{locale:"sr-Cyrl-BA",parentLocale:"sr-Cyrl"},{locale:"sr-Cyrl-ME",parentLocale:"sr-Cyrl"},{locale:"sr-Cyrl-XK",parentLocale:"sr-Cyrl"},{locale:"sr-Latn",pluralRuleFunction:function(e,a){return"other"},fields:{year:{displayName:"godina",relative:{0:"ove godine",1:"sledeće godine","-1":"prošle godine"},relativeTime:{future:{one:"za {0} godinu",few:"za {0} godine",other:"za {0} godina"},past:{one:"pre {0} godine",few:"pre {0} godine",other:"pre {0} godina"}}},month:{displayName:"mesec",relative:{0:"ovog meseca",1:"sledećeg meseca","-1":"prošlog meseca"},relativeTime:{future:{one:"za {0} mesec",few:"za {0} meseca",other:"za {0} meseci"},past:{one:"pre {0} meseca",few:"pre {0} meseca",other:"pre {0} meseci"}}},day:{displayName:"dan",relative:{0:"danas",1:"sutra",2:"prekosutra","-2":"prekjuče","-1":"juče"},relativeTime:{future:{one:"za {0} dan",few:"za {0} dana",other:"za {0} dana"},past:{one:"pre {0} dana",few:"pre {0} dana",other:"pre {0} dana"}}},hour:{displayName:"sat",relativeTime:{future:{one:"za {0} sat",few:"za {0} sata",other:"za {0} sati"},past:{one:"pre {0} sata",few:"pre {0} sata",other:"pre {0} sati"}}},minute:{displayName:"minut",relativeTime:{future:{one:"za {0} minut",few:"za {0} minuta",other:"za {0} minuta"},past:{one:"pre {0} minuta",few:"pre {0} minuta",other:"pre {0} minuta"}}},second:{displayName:"sekund",relative:{0:"sada"},relativeTime:{future:{one:"za {0} sekundu",few:"za {0} sekunde",other:"za {0} sekundi"},past:{one:"pre {0} sekunde",few:"pre {0} sekunde",other:"pre {0} sekundi"}}}}},{locale:"sr-Latn-BA",parentLocale:"sr-Latn"},{locale:"sr-Latn-ME",parentLocale:"sr-Latn"},{locale:"sr-Latn-XK",parentLocale:"sr-Latn"}];return e});

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.ss=t())}(this,function(){"use strict";var e=[{locale:"ss",pluralRuleFunction:function(e,t){return t?"other":1==e?"one":"other"},fields:{year:{displayName:"Year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Hour",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minute",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.ssy=t())}(this,function(){"use strict";var e=[{locale:"ssy",pluralRuleFunction:function(e,t){return t?"other":1==e?"one":"other"},fields:{year:{displayName:"Year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Hour",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minute",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.st=t())}(this,function(){"use strict";var e=[{locale:"st",pluralRuleFunction:function(e,t){return t?"other":1==e?"one":"other"},fields:{year:{displayName:"Year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Hour",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minute",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,a){ true?module.exports=a():"function"==typeof define&&define.amd?define(a):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.sv=a())}(this,function(){"use strict";var e=[{locale:"sv",pluralRuleFunction:function(e,a){var r=String(e).split("."),t=!r[1],n=Number(r[0])==e,o=n&&r[0].slice(-1),i=n&&r[0].slice(-2);return a?1!=o&&2!=o||11==i||12==i?"other":"one":1==e&&t?"one":"other"},fields:{year:{displayName:"år",relative:{0:"i år",1:"nästa år","-1":"i fjol"},relativeTime:{future:{one:"om {0} år",other:"om {0} år"},past:{one:"för {0} år sedan",other:"för {0} år sedan"}}},month:{displayName:"månad",relative:{0:"denna månad",1:"nästa månad","-1":"förra månaden"},relativeTime:{future:{one:"om {0} månad",other:"om {0} månader"},past:{one:"för {0} månad sedan",other:"för {0} månader sedan"}}},day:{displayName:"dag",relative:{0:"i dag",1:"i morgon",2:"i övermorgon","-2":"i förrgår","-1":"i går"},relativeTime:{future:{one:"om {0} dag",other:"om {0} dagar"},past:{one:"för {0} dag sedan",other:"för {0} dagar sedan"}}},hour:{displayName:"timme",relativeTime:{future:{one:"om {0} timme",other:"om {0} timmar"},past:{one:"för {0} timme sedan",other:"för {0} timmar sedan"}}},minute:{displayName:"minut",relativeTime:{future:{one:"om {0} minut",other:"om {0} minuter"},past:{one:"för {0} minut sedan",other:"för {0} minuter sedan"}}},second:{displayName:"sekund",relative:{0:"nu"},relativeTime:{future:{one:"om {0} sekund",other:"om {0} sekunder"},past:{one:"för {0} sekund sedan",other:"för {0} sekunder sedan"}}}}},{locale:"sv-AX",parentLocale:"sv"},{locale:"sv-FI",parentLocale:"sv"}];return e});

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	!function(a,e){ true?module.exports=e():"function"==typeof define&&define.amd?define(e):(a.ReactIntlLocaleData=a.ReactIntlLocaleData||{},a.ReactIntlLocaleData.sw=e())}(this,function(){"use strict";var a=[{locale:"sw",pluralRuleFunction:function(a,e){var i=String(a).split("."),t=!i[1];return e?"other":1==a&&t?"one":"other"},fields:{year:{displayName:"Mwaka",relative:{0:"mwaka huu",1:"mwaka ujao","-1":"mwaka uliopita"},relativeTime:{future:{one:"baada ya mwaka {0}",other:"baada ya miaka {0}"},past:{one:"mwaka {0} uliopita",other:"miaka {0} iliyopita"}}},month:{displayName:"Mwezi",relative:{0:"mwezi huu",1:"mwezi ujao","-1":"mwezi uliopita"},relativeTime:{future:{one:"baada ya mwezi {0}",other:"baada ya miezi {0}"},past:{one:"mwezi {0} uliopita",other:"miezi {0} iliyopita"}}},day:{displayName:"Siku",relative:{0:"leo",1:"kesho",2:"kesho kutwa","-2":"juzi","-1":"jana"},relativeTime:{future:{one:"baada ya siku {0}",other:"baada ya siku {0}"},past:{one:"siku {0} iliyopita",other:"siku {0} zilizopita"}}},hour:{displayName:"Saa",relativeTime:{future:{one:"baada ya saa {0}",other:"baada ya saa {0}"},past:{one:"saa {0} iliyopita",other:"saa {0} zilizopita"}}},minute:{displayName:"Dakika",relativeTime:{future:{one:"baada ya dakika {0}",other:"baada ya dakika {0}"},past:{one:"dakika {0} iliyopita",other:"dakika {0} zilizopita"}}},second:{displayName:"Sekunde",relative:{0:"sasa"},relativeTime:{future:{one:"baada ya sekunde {0}",other:"baada ya sekunde {0}"},past:{one:"Sekunde {0} iliyopita",other:"Sekunde {0} zilizopita"}}}}},{locale:"sw-CD",parentLocale:"sw"},{locale:"sw-KE",parentLocale:"sw"},{locale:"sw-UG",parentLocale:"sw"}];return a});

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.syr=t())}(this,function(){"use strict";var e=[{locale:"syr",pluralRuleFunction:function(e,t){return t?"other":1==e?"one":"other"},fields:{year:{displayName:"Year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Hour",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minute",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.ta=t())}(this,function(){"use strict";var e=[{locale:"ta",pluralRuleFunction:function(e,t){return t?"other":1==e?"one":"other"},fields:{year:{displayName:"ஆண்டு",relative:{0:"இந்த ஆண்டு",1:"அடுத்த ஆண்டு","-1":"கடந்த ஆண்டு"},relativeTime:{future:{one:"{0} ஆண்டில்",other:"{0} ஆண்டுகளில்"},past:{one:"{0} ஆண்டிற்கு முன்",other:"{0} ஆண்டுகளுக்கு முன்"}}},month:{displayName:"மாதம்",relative:{0:"இந்த மாதம்",1:"அடுத்த மாதம்","-1":"கடந்த மாதம்"},relativeTime:{future:{one:"{0} மாதத்தில்",other:"{0} மாதங்களில்"},past:{one:"{0} மாதத்துக்கு முன்",other:"{0} மாதங்களுக்கு முன்"}}},day:{displayName:"நாள்",relative:{0:"இன்று",1:"நாளை",2:"நாளை மறுநாள்","-2":"நேற்று முன் தினம்","-1":"நேற்று"},relativeTime:{future:{one:"{0} நாளில்",other:"{0} நாட்களில்"},past:{one:"{0} நாளைக்கு முன்",other:"{0} நாட்களுக்கு முன்"}}},hour:{displayName:"மணி",relativeTime:{future:{one:"{0} மணிநேரத்தில்",other:"{0} மணிநேரத்தில்"},past:{one:"{0} மணிநேரம் முன்",other:"{0} மணிநேரம் முன்"}}},minute:{displayName:"நிமிடம்",relativeTime:{future:{one:"{0} நிமிடத்தில்",other:"{0} நிமிடங்களில்"},past:{one:"{0} நிமிடத்திற்கு முன்",other:"{0} நிமிடங்களுக்கு முன்"}}},second:{displayName:"விநாடி",relative:{0:"இப்போது"},relativeTime:{future:{one:"{0} விநாடியில்",other:"{0} விநாடிகளில்"},past:{one:"{0} விநாடிக்கு முன்",other:"{0} விநாடிகளுக்கு முன்"}}}}},{locale:"ta-LK",parentLocale:"ta"},{locale:"ta-MY",parentLocale:"ta"},{locale:"ta-SG",parentLocale:"ta"}];return e});

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.te=t())}(this,function(){"use strict";var e=[{locale:"te",pluralRuleFunction:function(e,t){return t?"other":1==e?"one":"other"},fields:{year:{displayName:"సంవత్సరం",relative:{0:"ఈ సంవత్సరం",1:"తదుపరి సంవత్సరం","-1":"గత సంవత్సరం"},relativeTime:{future:{one:"{0} సంవత్సరంలో",other:"{0} సంవత్సరాల్లో"},past:{one:"{0} సంవత్సరం క్రితం",other:"{0} సంవత్సరాల క్రితం"}}},month:{displayName:"నెల",relative:{0:"ఈ నెల",1:"తదుపరి నెల","-1":"గత నెల"},relativeTime:{future:{one:"{0} నెలలో",other:"{0} నెలల్లో"},past:{one:"{0} నెల క్రితం",other:"{0} నెలల క్రితం"}}},day:{displayName:"దినం",relative:{0:"ఈ రోజు",1:"రేపు",2:"ఎల్లుండి","-2":"మొన్న","-1":"నిన్న"},relativeTime:{future:{one:"{0} రోజులో",other:"{0} రోజుల్లో"},past:{one:"{0} రోజు క్రితం",other:"{0} రోజుల క్రితం"}}},hour:{displayName:"గంట",relativeTime:{future:{one:"{0} గంటలో",other:"{0} గంటల్లో"},past:{one:"{0} గంట క్రితం",other:"{0} గంటల క్రితం"}}},minute:{displayName:"నిమిషము",relativeTime:{future:{one:"{0} నిమిషంలో",other:"{0} నిమిషాల్లో"},past:{one:"{0} నిమిషం క్రితం",other:"{0} నిమిషాల క్రితం"}}},second:{displayName:"క్షణం",relative:{0:"ప్రస్తుతం"},relativeTime:{future:{one:"{0} సెకన్‌లో",other:"{0} సెకన్లలో"},past:{one:"{0} సెకను క్రితం",other:"{0} సెకన్ల క్రితం"}}}}}];return e});

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.teo=t())}(this,function(){"use strict";var e=[{locale:"teo",pluralRuleFunction:function(e,t){return t?"other":1==e?"one":"other"},fields:{year:{displayName:"Ekan",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Elap",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Aparan",relative:{0:"Lolo",1:"Moi","-1":"Jaan"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Esaa",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Idakika",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Isekonde",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}},{locale:"teo-KE",parentLocale:"teo"}];return e});

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.th=t())}(this,function(){"use strict";var e=[{locale:"th",pluralRuleFunction:function(e,t){return"other"},fields:{year:{displayName:"ปี",relative:{0:"ปีนี้",1:"ปีหน้า","-1":"ปีที่แล้ว"},relativeTime:{future:{other:"ในอีก {0} ปี"},past:{other:"{0} ปีที่แล้ว"}}},month:{displayName:"เดือน",relative:{0:"เดือนนี้",1:"เดือนหน้า","-1":"เดือนที่แล้ว"},relativeTime:{future:{other:"ในอีก {0} เดือน"},past:{other:"{0} เดือนที่ผ่านมา"}}},day:{displayName:"วัน",relative:{0:"วันนี้",1:"พรุ่งนี้",2:"มะรืนนี้","-2":"เมื่อวานซืน","-1":"เมื่อวาน"},relativeTime:{future:{other:"ในอีก {0} วัน"},past:{other:"{0} วันที่ผ่านมา"}}},hour:{displayName:"ชั่วโมง",relativeTime:{future:{other:"ในอีก {0} ชั่วโมง"},past:{other:"{0} ชั่วโมงที่ผ่านมา"}}},minute:{displayName:"นาที",relativeTime:{future:{other:"ในอีก {0} นาที"},past:{other:"{0} นาทีที่ผ่านมา"}}},second:{displayName:"วินาที",relative:{0:"ขณะนี้"},relativeTime:{future:{other:"ในอีก {0} วินาที"},past:{other:"{0} วินาทีที่ผ่านมา"}}}}}];return e});

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.ti=t())}(this,function(){"use strict";var e=[{locale:"ti",pluralRuleFunction:function(e,t){return t?"other":0==e||1==e?"one":"other"},fields:{year:{displayName:"Year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Hour",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minute",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}},{locale:"ti-ER",parentLocale:"ti"}];return e});

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.tig=t())}(this,function(){"use strict";var e=[{locale:"tig",pluralRuleFunction:function(e,t){return t?"other":1==e?"one":"other"},fields:{year:{displayName:"Year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Hour",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minute",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.tk=t())}(this,function(){"use strict";var e=[{locale:"tk",pluralRuleFunction:function(e,t){return t?"other":1==e?"one":"other"},fields:{year:{displayName:"ýyl",relative:{0:"şu ýyl",1:"indiki ýyl","-1":"geçen ýyl"},relativeTime:{future:{one:"{0} ýyldan",other:"{0} ýyldan"},past:{one:"{0} ýyl öň",other:"{0} ýyl öň"}}},month:{displayName:"aý",relative:{0:"şu aý",1:"indiki aý","-1":"geçen aý"},relativeTime:{future:{one:"{0} aýdan",other:"{0} aýdan"},past:{one:"{0} aý öň",other:"{0} aý öň"}}},day:{displayName:"gün",relative:{0:"şu gün",1:"ertir","-1":"düýn"},relativeTime:{future:{one:"{0} günden",other:"{0} günden"},past:{one:"{0} gün öň",other:"{0} gün öň"}}},hour:{displayName:"sagat",relativeTime:{future:{one:"{0} sagatdan",other:"{0} sagatdan"},past:{one:"{0} sagat öň",other:"{0} sagat öň"}}},minute:{displayName:"minut",relativeTime:{future:{one:"{0} minutdan",other:"{0} minutdan"},past:{one:"{0} minut öň",other:"{0} minut öň"}}},second:{displayName:"sekunt",relative:{0:"now"},relativeTime:{future:{one:"{0} sekuntdan",other:"{0} sekuntdan"},past:{one:"{0} sekunt öň",other:"{0} sekunt öň"}}}}}];return e});

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.tl=t())}(this,function(){"use strict";var e=[{locale:"tl",pluralRuleFunction:function(e,t){var a=String(e).split("."),r=a[0],o=a[1]||"",i=!a[1],l=r.slice(-1),n=o.slice(-1);return t?1==e?"one":"other":i&&(1==r||2==r||3==r)||i&&4!=l&&6!=l&&9!=l||!i&&4!=n&&6!=n&&9!=n?"one":"other"},fields:{year:{displayName:"Year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Hour",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minute",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.tn=t())}(this,function(){"use strict";var e=[{locale:"tn",pluralRuleFunction:function(e,t){return t?"other":1==e?"one":"other"},fields:{year:{displayName:"Year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Hour",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minute",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,i){ true?module.exports=i():"function"==typeof define&&define.amd?define(i):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.to=i())}(this,function(){"use strict";var e=[{locale:"to",pluralRuleFunction:function(e,i){return"other"},fields:{year:{displayName:"taʻu",relative:{0:"taʻú ni",1:"taʻu kahaʻu","-1":"taʻu kuoʻosi"},relativeTime:{future:{other:"ʻi he taʻu ʻe {0}"},past:{other:"taʻu ʻe {0} kuoʻosi"}}},month:{displayName:"māhina",relative:{0:"māhiná ni",1:"māhina kahaʻu","-1":"māhina kuoʻosi"},relativeTime:{future:{other:"ʻi he māhina ʻe {0}"},past:{other:"māhina ʻe {0} kuoʻosi"}}},day:{displayName:"ʻaho",relative:{0:"ʻahó ni",1:"ʻapongipongi",2:"ʻahepongipongi","-2":"ʻaneheafi","-1":"ʻaneafi"},relativeTime:{future:{other:"ʻi he ʻaho ʻe {0}"},past:{other:"ʻaho ʻe {0} kuoʻosi"}}},hour:{displayName:"houa",relativeTime:{future:{other:"ʻi he houa ʻe {0}"},past:{other:"houa ʻe {0} kuoʻosi"}}},minute:{displayName:"miniti",relativeTime:{future:{other:"ʻi he miniti ʻe {0}"},past:{other:"miniti ʻe {0} kuoʻosi"}}},second:{displayName:"sekoni",relative:{0:"taimiʻni"},relativeTime:{future:{other:"ʻi he sekoni ʻe {0}"},past:{other:"sekoni ʻe {0} kuoʻosi"}}}}}];return e});

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,a){ true?module.exports=a():"function"==typeof define&&define.amd?define(a):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.tr=a())}(this,function(){"use strict";var e=[{locale:"tr",pluralRuleFunction:function(e,a){return a?"other":1==e?"one":"other"},fields:{year:{displayName:"Yıl",relative:{0:"bu yıl",1:"gelecek yıl","-1":"geçen yıl"},relativeTime:{future:{one:"{0} yıl sonra",other:"{0} yıl sonra"},past:{one:"{0} yıl önce",other:"{0} yıl önce"}}},month:{displayName:"Ay",relative:{0:"bu ay",1:"gelecek ay","-1":"geçen ay"},relativeTime:{future:{one:"{0} ay sonra",other:"{0} ay sonra"},past:{one:"{0} ay önce",other:"{0} ay önce"}}},day:{displayName:"Gün",relative:{0:"bugün",1:"yarın",2:"öbür gün","-2":"evvelsi gün","-1":"dün"},relativeTime:{future:{one:"{0} gün sonra",other:"{0} gün sonra"},past:{one:"{0} gün önce",other:"{0} gün önce"}}},hour:{displayName:"Saat",relativeTime:{future:{one:"{0} saat sonra",other:"{0} saat sonra"},past:{one:"{0} saat önce",other:"{0} saat önce"}}},minute:{displayName:"Dakika",relativeTime:{future:{one:"{0} dakika sonra",other:"{0} dakika sonra"},past:{one:"{0} dakika önce",other:"{0} dakika önce"}}},second:{displayName:"Saniye",relative:{0:"şimdi"},relativeTime:{future:{one:"{0} saniye sonra",other:"{0} saniye sonra"},past:{one:"{0} saniye önce",other:"{0} saniye önce"}}}}},{locale:"tr-CY",parentLocale:"tr"}];return e});

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.ts=t())}(this,function(){"use strict";var e=[{locale:"ts",pluralRuleFunction:function(e,t){return t?"other":1==e?"one":"other"},fields:{year:{displayName:"Year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Hour",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minute",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.twq=t())}(this,function(){"use strict";var e=[{locale:"twq",pluralRuleFunction:function(e,t){return"other"},fields:{year:{displayName:"Jiiri",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Handu",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Zaari",relative:{0:"Hõo",1:"Suba","-1":"Bi"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Guuru",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Miniti",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Miti",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.tzm=t())}(this,function(){"use strict";var e=[{locale:"tzm",pluralRuleFunction:function(e,t){var a=String(e).split("."),r=Number(a[0])==e;return t?"other":0==e||1==e||r&&e>=11&&e<=99?"one":"other"},fields:{year:{displayName:"Asseggas",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Ayur",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Ass",relative:{0:"Assa",1:"Asekka","-1":"Assenaṭ"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Tasragt",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Tusdat",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Tusnat",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.ug=t())}(this,function(){"use strict";var e=[{locale:"ug",pluralRuleFunction:function(e,t){return t?"other":1==e?"one":"other"},fields:{year:{displayName:"يىل",relative:{0:"بۇ يىل",1:"كېلەر يىل","-1":"ئۆتكەن يىل"},relativeTime:{future:{one:"{0} يىلدىن كېيىن",other:"{0} يىلدىن كېيىن"},past:{one:"{0} يىل ئىلگىرى",other:"{0} يىل ئىلگىرى"}}},month:{displayName:"ئاي",relative:{0:"بۇ ئاي",1:"كېلەر ئاي","-1":"ئۆتكەن ئاي"},relativeTime:{future:{one:"{0} ئايدىن كېيىن",other:"{0} ئايدىن كېيىن"},past:{one:"{0} ئاي ئىلگىرى",other:"{0} ئاي ئىلگىرى"}}},day:{displayName:"كۈن",relative:{0:"بۈگۈن",1:"ئەتە","-1":"تۈنۈگۈن"},relativeTime:{future:{one:"{0} كۈندىن كېيىن",other:"{0} كۈندىن كېيىن"},past:{one:"{0} كۈن ئىلگىرى",other:"{0} كۈن ئىلگىرى"}}},hour:{displayName:"سائەت",relativeTime:{future:{one:"{0} سائەتتىن كېيىن",other:"{0} سائەتتىن كېيىن"},past:{one:"{0} سائەت ئىلگىرى",other:"{0} سائەت ئىلگىرى"}}},minute:{displayName:"مىنۇت",relativeTime:{future:{one:"{0} مىنۇتتىن كېيىن",other:"{0} مىنۇتتىن كېيىن"},past:{one:"{0} مىنۇت ئىلگىرى",other:"{0} مىنۇت ئىلگىرى"}}},second:{displayName:"سېكۇنت",relative:{0:"now"},relativeTime:{future:{one:"{0} سېكۇنتتىن كېيىن",other:"{0} سېكۇنتتىن كېيىن"},past:{one:"{0} سېكۇنت ئىلگىرى",other:"{0} سېكۇنت ئىلگىرى"}}}}}];return e});

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.uk=t())}(this,function(){"use strict";var e=[{locale:"uk",pluralRuleFunction:function(e,t){var a=String(e).split("."),n=a[0],o=!a[1],r=Number(a[0])==e,i=r&&a[0].slice(-1),l=r&&a[0].slice(-2),f=n.slice(-1),m=n.slice(-2);return t?3==i&&13!=l?"few":"other":o&&1==f&&11!=m?"one":o&&f>=2&&f<=4&&(m<12||m>14)?"few":o&&0==f||o&&f>=5&&f<=9||o&&m>=11&&m<=14?"many":"other"},fields:{year:{displayName:"рік",relative:{0:"цього року",1:"наступного року","-1":"торік"},relativeTime:{future:{one:"через {0} рік",few:"через {0} роки",many:"через {0} років",other:"через {0} року"},past:{one:"{0} рік тому",few:"{0} роки тому",many:"{0} років тому",other:"{0} року тому"}}},month:{displayName:"місяць",relative:{0:"цього місяця",1:"наступного місяця","-1":"минулого місяця"},relativeTime:{future:{one:"через {0} місяць",few:"через {0} місяці",many:"через {0} місяців",other:"через {0} місяця"},past:{one:"{0} місяць тому",few:"{0} місяці тому",many:"{0} місяців тому",other:"{0} місяця тому"}}},day:{displayName:"день",relative:{0:"сьогодні",1:"завтра",2:"післязавтра","-2":"позавчора","-1":"учора"},relativeTime:{future:{one:"через {0} день",few:"через {0} дні",many:"через {0} днів",other:"через {0} дня"},past:{one:"{0} день тому",few:"{0} дні тому",many:"{0} днів тому",other:"{0} дня тому"}}},hour:{displayName:"година",relativeTime:{future:{one:"через {0} годину",few:"через {0} години",many:"через {0} годин",other:"через {0} години"},past:{one:"{0} годину тому",few:"{0} години тому",many:"{0} годин тому",other:"{0} години тому"}}},minute:{displayName:"хвилина",relativeTime:{future:{one:"через {0} хвилину",few:"через {0} хвилини",many:"через {0} хвилин",other:"через {0} хвилини"},past:{one:"{0} хвилину тому",few:"{0} хвилини тому",many:"{0} хвилин тому",other:"{0} хвилини тому"}}},second:{displayName:"секунда",relative:{0:"зараз"},relativeTime:{future:{one:"через {0} секунду",few:"через {0} секунди",many:"через {0} секунд",other:"через {0} секунди"},past:{one:"{0} секунду тому",few:"{0} секунди тому",many:"{0} секунд тому",other:"{0} секунди тому"}}}}}];return e});

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.ur=t())}(this,function(){"use strict";var e=[{locale:"ur",pluralRuleFunction:function(e,t){var a=String(e).split("."),r=!a[1];return t?"other":1==e&&r?"one":"other"},fields:{year:{displayName:"سال",relative:{0:"اس سال",1:"اگلے سال","-1":"گزشتہ سال"},relativeTime:{future:{one:"{0} سال میں",other:"{0} سال میں"},past:{one:"{0} سال پہلے",other:"{0} سال پہلے"}}},month:{displayName:"مہینہ",relative:{0:"اس مہینہ",1:"اگلے مہینہ","-1":"پچھلے مہینہ"},relativeTime:{future:{one:"{0} مہینہ میں",other:"{0} مہینے میں"},past:{one:"{0} مہینہ پہلے",other:"{0} مہینے پہلے"}}},day:{displayName:"دن",relative:{0:"آج",1:"آئندہ کل",2:"آنے والا پرسوں","-2":"گزشتہ پرسوں","-1":"گزشتہ کل"},relativeTime:{future:{one:"{0} دن میں",other:"{0} دنوں میں"},past:{one:"{0} دن پہلے",other:"{0} دنوں پہلے"}}},hour:{displayName:"گھنٹہ",relativeTime:{future:{one:"{0} گھنٹہ میں",other:"{0} گھنٹے میں"},past:{one:"{0} گھنٹہ پہلے",other:"{0} گھنٹے پہلے"}}},minute:{displayName:"منٹ",relativeTime:{future:{one:"{0} منٹ میں",other:"{0} منٹ میں"},past:{one:"{0} منٹ پہلے",other:"{0} منٹ پہلے"}}},second:{displayName:"سیکنڈ",relative:{0:"اب"},relativeTime:{future:{one:"{0} سیکنڈ میں",other:"{0} سیکنڈ میں"},past:{one:"{0} سیکنڈ پہلے",other:"{0} سیکنڈ پہلے"}}}}},{locale:"ur-IN",parentLocale:"ur",fields:{year:{displayName:"سال",relative:{0:"اس سال",1:"اگلے سال","-1":"گزشتہ سال"},relativeTime:{future:{one:"{0} سال میں",other:"{0} سالوں میں"},past:{one:"{0} سال پہلے",other:"{0} سال پہلے"}}},month:{displayName:"مہینہ",relative:{0:"اس ماہ",1:"اگلے ماہ","-1":"گزشتہ ماہ"},relativeTime:{future:{one:"{0} ماہ میں",other:"{0} ماہ میں"},past:{one:"{0} ماہ قبل",other:"{0} ماہ قبل"}}},day:{displayName:"دن",relative:{0:"آج",1:"آئندہ کل",2:"آنے والا پرسوں","-2":"گزشتہ پرسوں","-1":"گزشتہ کل"},relativeTime:{future:{one:"{0} دن میں",other:"{0} دنوں میں"},past:{one:"{0} دن پہلے",other:"{0} دنوں پہلے"}}},hour:{displayName:"گھنٹہ",relativeTime:{future:{one:"{0} گھنٹہ میں",other:"{0} گھنٹے میں"},past:{one:"{0} گھنٹہ پہلے",other:"{0} گھنٹے پہلے"}}},minute:{displayName:"منٹ",relativeTime:{future:{one:"{0} منٹ میں",other:"{0} منٹ میں"},past:{one:"{0} منٹ قبل",other:"{0} منٹ قبل"}}},second:{displayName:"سیکنڈ",relative:{0:"اب"},relativeTime:{future:{one:"{0} سیکنڈ میں",other:"{0} سیکنڈ میں"},past:{one:"{0} سیکنڈ قبل",other:"{0} سیکنڈ قبل"}}}}}];return e});

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.uz=t())}(this,function(){"use strict";var e=[{locale:"uz",pluralRuleFunction:function(e,t){return t?"other":1==e?"one":"other"},fields:{year:{displayName:"yil",relative:{0:"bu yil",1:"keyingi yil","-1":"oʻtgan yil"},relativeTime:{future:{one:"{0} yildan soʻng",other:"{0} yildan so‘ng"},past:{one:"{0} yil oldin",other:"{0} yil oldin"}}},month:{displayName:"oy",relative:{0:"shu oy",1:"keyingi oy","-1":"o‘tgan oy"},relativeTime:{future:{one:"{0} oydan so‘ng",other:"{0} oydan so‘ng"},past:{one:"{0} oy oldin",other:"{0} oy oldin"}}},day:{displayName:"kun",relative:{0:"bugun",1:"ertaga","-1":"kecha"},relativeTime:{future:{one:"{0} kundan so‘ng",other:"{0} kundan so‘ng"},past:{one:"{0} kun oldin",other:"{0} kun oldin"}}},hour:{displayName:"soat",relativeTime:{future:{one:"{0} soatdan so‘ng",other:"{0} soatdan so‘ng"},past:{one:"{0} soat oldin",other:"{0} soat oldin"}}},minute:{displayName:"daqiqa",relativeTime:{future:{one:"{0} daqiqadan so‘ng",other:"{0} daqiqadan so‘ng"},past:{one:"{0} daqiqa oldin",other:"{0} daqiqa oldin"}}},second:{displayName:"soniya",relative:{0:"hozir"},relativeTime:{future:{one:"{0} soniyadan so‘ng",other:"{0} soniyadan so‘ng"},past:{one:"{0} soniya oldin",other:"{0} soniya oldin"}}}}},{locale:"uz-Arab",pluralRuleFunction:function(e,t){return"other"},fields:{year:{displayName:"Year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Hour",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minute",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}},{locale:"uz-Cyrl",pluralRuleFunction:function(e,t){return"other"},fields:{year:{displayName:"Йил",relative:{0:"бу йил",1:"кейинги йил","-1":"ўтган йил"},relativeTime:{future:{one:"{0} йилдан сўнг",other:"{0} йилдан сўнг"},past:{one:"{0} йил аввал",other:"{0} йил аввал"}}},month:{displayName:"Ой",relative:{0:"бу ой",1:"кейинги ой","-1":"ўтган ой"},relativeTime:{future:{one:"{0} ойдан сўнг",other:"{0} ойдан сўнг"},past:{one:"{0} ой аввал",other:"{0} ой аввал"}}},day:{displayName:"Кун",relative:{0:"бугун",1:"эртага","-1":"кеча"},relativeTime:{future:{one:"{0} кундан сўнг",other:"{0} кундан сўнг"},past:{one:"{0} кун олдин",other:"{0} кун олдин"}}},hour:{displayName:"Соат",relativeTime:{future:{one:"{0} соатдан сўнг",other:"{0} соатдан сўнг"},past:{one:"{0} соат олдин",other:"{0} соат олдин"}}},minute:{displayName:"Дақиқа",relativeTime:{future:{one:"{0} дақиқадан сўнг",other:"{0} дақиқадан сўнг"},past:{one:"{0} дақиқа олдин",other:"{0} дақиқа олдин"}}},second:{displayName:"Сония",relative:{0:"ҳозир"},relativeTime:{future:{one:"{0} сониядан сўнг",other:"{0} сониядан сўнг"},past:{one:"{0} сония олдин",other:"{0} сония олдин"}}}}},{locale:"uz-Latn",parentLocale:"uz"}];return e});

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.vai=t())}(this,function(){"use strict";var e=[{locale:"vai",pluralRuleFunction:function(e,t){return"other"},fields:{year:{displayName:"ꕢꘋ",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"ꕪꖃ",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"ꔎꔒ",relative:{0:"ꗦꗷ",1:"ꔻꕯ","-1":"ꖴꖸ"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"ꕌꕎ",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"ꕆꕇ",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"ꕧꕃꕧꕪ",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}},{locale:"vai-Latn",pluralRuleFunction:function(e,t){return"other"},fields:{year:{displayName:"saŋ",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"kalo",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"tele",relative:{0:"wɛlɛ",1:"sina","-1":"kunu"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"hawa",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"mini",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"jaki-jaka",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}},{locale:"vai-Vaii",parentLocale:"vai"}];return e});

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.ve=t())}(this,function(){"use strict";var e=[{locale:"ve",pluralRuleFunction:function(e,t){return t?"other":1==e?"one":"other"},fields:{year:{displayName:"Year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Hour",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minute",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.vi=t())}(this,function(){"use strict";var e=[{locale:"vi",pluralRuleFunction:function(e,t){return t&&1==e?"one":"other"},fields:{year:{displayName:"Năm",relative:{0:"năm nay",1:"năm sau","-1":"năm ngoái"},relativeTime:{future:{other:"sau {0} năm nữa"},past:{other:"{0} năm trước"}}},month:{displayName:"Tháng",relative:{0:"tháng này",1:"tháng sau","-1":"tháng trước"},relativeTime:{future:{other:"sau {0} tháng nữa"},past:{other:"{0} tháng trước"}}},day:{displayName:"Ngày",relative:{0:"Hôm nay",1:"Ngày mai",2:"Ngày kia","-2":"Hôm kia","-1":"Hôm qua"},relativeTime:{future:{other:"sau {0} ngày nữa"},past:{other:"{0} ngày trước"}}},hour:{displayName:"Giờ",relativeTime:{future:{other:"sau {0} giờ nữa"},past:{other:"{0} giờ trước"}}},minute:{displayName:"Phút",relativeTime:{future:{other:"sau {0} phút nữa"},past:{other:"{0} phút trước"}}},second:{displayName:"Giây",relative:{0:"bây giờ"},relativeTime:{future:{other:"sau {0} giây nữa"},past:{other:"{0} giây trước"}}}}}];return e});

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.vo=t())}(this,function(){"use strict";var e=[{locale:"vo",pluralRuleFunction:function(e,t){return t?"other":1==e?"one":"other"},fields:{year:{displayName:"Year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Hour",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minute",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.vun=t())}(this,function(){"use strict";var e=[{locale:"vun",pluralRuleFunction:function(e,t){return t?"other":1==e?"one":"other"},fields:{year:{displayName:"Maka",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Mori",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Mfiri",relative:{0:"Inu",1:"Ngama","-1":"Ukou"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Saa",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Dakyika",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Sekunde",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.wa=t())}(this,function(){"use strict";var e=[{locale:"wa",pluralRuleFunction:function(e,t){return t?"other":0==e||1==e?"one":"other"},fields:{year:{displayName:"Year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Hour",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minute",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.wae=t())}(this,function(){"use strict";var e=[{locale:"wae",pluralRuleFunction:function(e,t){return t?"other":1==e?"one":"other"},fields:{year:{displayName:"Jár",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{one:"I {0} jár",other:"I {0} jár"},past:{one:"vor {0} jár",other:"cor {0} jár"}}},month:{displayName:"Mánet",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{one:"I {0} mánet",other:"I {0} mánet"},past:{one:"vor {0} mánet",other:"vor {0} mánet"}}},day:{displayName:"Tag",relative:{0:"Hitte",1:"Móre",2:"Ubermóre","-2":"Vorgešter","-1":"Gešter"},relativeTime:{future:{one:"i {0} tag",other:"i {0} täg"},past:{one:"vor {0} tag",other:"vor {0} täg"}}},hour:{displayName:"Schtund",relativeTime:{future:{one:"i {0} stund",other:"i {0} stunde"},past:{one:"vor {0} stund",other:"vor {0} stunde"}}},minute:{displayName:"Mínütta",relativeTime:{future:{one:"i {0} minüta",other:"i {0} minüte"},past:{one:"vor {0} minüta",other:"vor {0} minüte"}}},second:{displayName:"Sekunda",relative:{0:"now"},relativeTime:{future:{one:"i {0} sekund",other:"i {0} sekunde"},past:{one:"vor {0} sekund",other:"vor {0} sekunde"}}}}}];return e});

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.wo=t())}(this,function(){"use strict";var e=[{locale:"wo",pluralRuleFunction:function(e,t){return"other"},fields:{year:{displayName:"Year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Hour",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minute",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.xh=t())}(this,function(){"use strict";var e=[{locale:"xh",pluralRuleFunction:function(e,t){return t?"other":1==e?"one":"other"},fields:{year:{displayName:"Year",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Month",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Day",relative:{0:"today",1:"tomorrow","-1":"yesterday"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Hour",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Minute",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.xog=t())}(this,function(){"use strict";var e=[{locale:"xog",pluralRuleFunction:function(e,t){return t?"other":1==e?"one":"other"},fields:{year:{displayName:"Omwaka",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Omwezi",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Olunaku",relative:{0:"Olwaleelo (leelo)",1:"Enkyo","-1":"Edho"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"Essawa",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Edakiika",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Obutikitiki",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.yav=t())}(this,function(){"use strict";var e=[{locale:"yav",pluralRuleFunction:function(e,t){return"other"},fields:{year:{displayName:"yɔɔŋ",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"oóli",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"puɔ́sɛ́",relative:{0:"ínaan",1:"nakinyám","-1":"púyoó"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"kisikɛl,",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"minít",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"síkɛn",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.yi=t())}(this,function(){"use strict";var e=[{locale:"yi",pluralRuleFunction:function(e,t){var a=String(e).split("."),r=!a[1];return t?"other":1==e&&r?"one":"other"},fields:{year:{displayName:"יאָר",relative:{0:"הײַ יאָר",1:"איבער א יאָר","-1":"פֿאַראַיאָר"},relativeTime:{future:{one:"איבער {0} יאָר",other:"איבער {0} יאָר"},past:{one:"פֿאַר {0} יאָר",other:"פֿאַר {0} יאָר"}}},month:{displayName:"מאנאַט",relative:{0:"דעם חודש",1:"קומענדיקן חודש","-1":"פֿאַרגאנגענעם חודש"},relativeTime:{future:{one:"איבער {0} חודש",other:"איבער {0} חדשים"},past:{one:"פֿאַר {0} חודש",other:"פֿאַר {0} חדשים"}}},day:{displayName:"טאָג",relative:{0:"היינט",1:"מארגן","-1":"נעכטן"},relativeTime:{future:{one:"אין {0} טאָג אַרום",other:"אין {0} טעג אַרום"},past:{other:"-{0} d"}}},hour:{displayName:"שעה",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"מינוט",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"סעקונדע",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.yo=t())}(this,function(){"use strict";var e=[{locale:"yo",pluralRuleFunction:function(e,t){return"other"},fields:{year:{displayName:"Ọdún",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Osù",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Ọjọ́",relative:{0:"Òní",1:"Ọ̀la",2:"òtúùnla","-2":"íjẹta","-1":"Àná"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"wákàtí",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Ìsẹ́jú",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Ìsẹ́jú Ààyá",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}},{locale:"yo-BJ",parentLocale:"yo",fields:{year:{displayName:"Ɔdún",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"Osù",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"Ɔjɔ́",relative:{0:"Òní",1:"Ɔ̀la",2:"òtúùnla","-2":"íjɛta","-1":"Àná"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"wákàtí",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"Ìsɛ́jú",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"Ìsɛ́jú Ààyá",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.zgh=t())}(this,function(){"use strict";var e=[{locale:"zgh",pluralRuleFunction:function(e,t){return"other"},fields:{year:{displayName:"ⴰⵙⴳⴳⵯⴰⵙ",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"ⴰⵢⵢⵓⵔ",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{other:"+{0} m"},past:{other:"-{0} m"}}},day:{displayName:"ⴰⵙⵙ",relative:{0:"ⴰⵙⵙⴰ",1:"ⴰⵙⴽⴽⴰ","-1":"ⵉⴹⵍⵍⵉ"},relativeTime:{future:{other:"+{0} d"},past:{other:"-{0} d"}}},hour:{displayName:"ⵜⴰⵙⵔⴰⴳⵜ",relativeTime:{future:{other:"+{0} h"},past:{other:"-{0} h"}}},minute:{displayName:"ⵜⵓⵙⴷⵉⴷⵜ",relativeTime:{future:{other:"+{0} min"},past:{other:"-{0} min"}}},second:{displayName:"ⵜⴰⵙⵉⵏⵜ",relative:{0:"now"},relativeTime:{future:{other:"+{0} s"},past:{other:"-{0} s"}}}}}];return e});

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.zh=t())}(this,function(){"use strict";var e=[{locale:"zh",pluralRuleFunction:function(e,t){return"other"},fields:{year:{displayName:"年",relative:{0:"今年",1:"明年","-1":"去年"},relativeTime:{future:{other:"{0}年后"},past:{other:"{0}年前"}}},month:{displayName:"月",relative:{0:"本月",1:"下个月","-1":"上个月"},relativeTime:{future:{other:"{0}个月后"},past:{other:"{0}个月前"}}},day:{displayName:"日",relative:{0:"今天",1:"明天",2:"后天","-2":"前天","-1":"昨天"},relativeTime:{future:{other:"{0}天后"},past:{other:"{0}天前"}}},hour:{displayName:"小时",relativeTime:{future:{other:"{0}小时后"},past:{other:"{0}小时前"}}},minute:{displayName:"分钟",relativeTime:{future:{other:"{0}分钟后"},past:{other:"{0}分钟前"}}},second:{displayName:"秒钟",relative:{0:"现在"},relativeTime:{future:{other:"{0}秒钟后"},past:{other:"{0}秒钟前"}}}}},{locale:"zh-Hans",parentLocale:"zh"},{locale:"zh-Hans-HK",parentLocale:"zh-Hans",fields:{year:{displayName:"年",relative:{0:"今年",1:"明年","-1":"去年"},relativeTime:{future:{other:"{0}年后"},past:{other:"{0}年前"}}},month:{displayName:"月",relative:{0:"本月",1:"下个月","-1":"上个月"},relativeTime:{future:{other:"{0}个月后"},past:{other:"{0}个月前"}}},day:{displayName:"日",relative:{0:"今天",1:"明天",2:"后天","-2":"前天","-1":"昨天"},relativeTime:{future:{other:"{0}天后"},past:{other:"{0}天前"}}},hour:{displayName:"小时",relativeTime:{future:{other:"{0}小时后"},past:{other:"{0}小时前"}}},minute:{displayName:"分钟",relativeTime:{future:{other:"{0}分钟后"},past:{other:"{0}分钟前"}}},second:{displayName:"秒钟",relative:{0:"现在"},relativeTime:{future:{other:"{0}秒后"},past:{other:"{0}秒前"}}}}},{locale:"zh-Hans-MO",parentLocale:"zh-Hans",fields:{year:{displayName:"年",relative:{0:"今年",1:"明年","-1":"去年"},relativeTime:{future:{other:"{0}年后"},past:{other:"{0}年前"}}},month:{displayName:"月",relative:{0:"本月",1:"下个月","-1":"上个月"},relativeTime:{future:{other:"{0}个月后"},past:{other:"{0}个月前"}}},day:{displayName:"日",relative:{0:"今天",1:"明天",2:"后天","-2":"前天","-1":"昨天"},relativeTime:{future:{other:"{0}天后"},past:{other:"{0}天前"}}},hour:{displayName:"小时",relativeTime:{future:{other:"{0}小时后"},past:{other:"{0}小时前"}}},minute:{displayName:"分钟",relativeTime:{future:{other:"{0}分钟后"},past:{other:"{0}分钟前"}}},second:{displayName:"秒钟",relative:{0:"现在"},relativeTime:{future:{other:"{0}秒后"},past:{other:"{0}秒前"}}}}},{locale:"zh-Hans-SG",parentLocale:"zh-Hans",fields:{year:{displayName:"年",relative:{0:"今年",1:"明年","-1":"去年"},relativeTime:{future:{other:"{0}年后"},past:{other:"{0}年前"}}},month:{displayName:"月",relative:{0:"本月",1:"下个月","-1":"上个月"},relativeTime:{future:{other:"{0}个月后"},past:{other:"{0}个月前"}}},day:{displayName:"日",relative:{0:"今天",1:"明天",2:"后天","-2":"前天","-1":"昨天"},relativeTime:{future:{other:"{0}天后"},past:{other:"{0}天前"}}},hour:{displayName:"小时",relativeTime:{future:{other:"{0}小时后"},past:{other:"{0}小时前"}}},minute:{displayName:"分钟",relativeTime:{future:{other:"{0}分钟后"},past:{other:"{0}分钟前"}}},second:{displayName:"秒钟",relative:{0:"现在"},relativeTime:{future:{other:"{0}秒后"},past:{other:"{0}秒前"}}}}},{locale:"zh-Hant",pluralRuleFunction:function(e,t){return"other"},fields:{year:{displayName:"年",relative:{0:"今年",1:"明年","-1":"去年"},relativeTime:{future:{other:"{0} 年後"},past:{other:"{0} 年前"}}},month:{displayName:"月",relative:{0:"本月",1:"下個月","-1":"上個月"},relativeTime:{future:{other:"{0} 個月後"},past:{other:"{0} 個月前"}}},day:{displayName:"日",relative:{0:"今天",1:"明天",2:"後天","-2":"前天","-1":"昨天"},relativeTime:{future:{other:"{0} 天後"},past:{other:"{0} 天前"}}},hour:{displayName:"小時",relativeTime:{future:{other:"{0} 小時後"},past:{other:"{0} 小時前"}}},minute:{displayName:"分鐘",relativeTime:{future:{other:"{0} 分鐘後"},past:{other:"{0} 分鐘前"}}},second:{displayName:"秒",relative:{0:"現在"},relativeTime:{future:{other:"{0} 秒後"},past:{other:"{0} 秒前"}}}}},{locale:"zh-Hant-HK",parentLocale:"zh-Hant",fields:{year:{displayName:"年",relative:{0:"今年",1:"下年","-1":"上年"},relativeTime:{future:{other:"{0} 年後"},past:{other:"{0} 年前"}}},month:{displayName:"月",relative:{0:"本月",1:"下個月","-1":"上個月"},relativeTime:{future:{other:"{0} 個月後"},past:{other:"{0} 個月前"}}},day:{displayName:"日",relative:{0:"今日",1:"明日",2:"後日","-2":"前日","-1":"昨日"},relativeTime:{future:{other:"{0} 日後"},past:{other:"{0} 日前"}}},hour:{displayName:"小時",relativeTime:{future:{other:"{0} 小時後"},past:{other:"{0} 小時前"}}},minute:{displayName:"分鐘",relativeTime:{future:{other:"{0} 分鐘後"},past:{other:"{0} 分鐘前"}}},second:{displayName:"秒",relative:{0:"現在"},relativeTime:{future:{other:"{0} 秒後"},past:{other:"{0} 秒前"}}}}},{locale:"zh-Hant-MO",parentLocale:"zh-Hant-HK"}];return e});

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,a){ true?module.exports=a():"function"==typeof define&&define.amd?define(a):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.zu=a())}(this,function(){"use strict";var e=[{locale:"zu",pluralRuleFunction:function(e,a){return a?"other":e>=0&&e<=1?"one":"other"},fields:{year:{displayName:"Unyaka",relative:{0:"kulo nyaka",1:"unyaka ozayo","-1":"onyakeni odlule"},relativeTime:{future:{one:"onyakeni ongu-{0} ozayo",other:"eminyakeni engu-{0} ezayo"},past:{one:"{0} unyaka odlule",other:"{0} iminyaka edlule"}}},month:{displayName:"Inyanga",relative:{0:"le nyanga",1:"inyanga ezayo","-1":"inyanga edlule"},relativeTime:{future:{one:"enyangeni engu-{0}",other:"ezinyangeni ezingu-{0} ezizayo"},past:{one:"{0} inyanga edlule",other:"{0} izinyanga ezedlule"}}},day:{displayName:"Usuku",relative:{0:"namhlanje",1:"kusasa",2:"usuku olulandela olwakusasa","-2":"usuku olwandulela olwayizolo","-1":"izolo"},relativeTime:{future:{one:"osukwini olungu-{0} oluzayo",other:"ezinsukwini ezingu-{0} ezizayo"},past:{one:"osukwini olungu-{0} olwedlule",other:"ezinsukwini ezingu-{0} ezedlule."}}},hour:{displayName:"Ihora",relativeTime:{future:{one:"ehoreni elingu-{0} elizayo",other:"emahoreni angu-{0} ezayo"},past:{one:"{0} ihora eledlule",other:"emahoreni angu-{0} edlule"}}},minute:{displayName:"Iminithi",relativeTime:{future:{one:"kuminithi elingu-{0} elizayo",other:"kumaminithi angu-{0} ezayo"},past:{one:"{0} iminithi eledlule",other:"{0} amaminithi edlule"}}},second:{displayName:"Isekhondi",relative:{0:"manje"},relativeTime:{future:{one:"kusekhondi elingu-{0} elizayo",other:"kumasekhondi angu-{0} ezayo"},past:{one:"{0} isekhondi eledlule",other:"{0} amasekhondi edlule"}}}}}];return e});

/***/ }
/******/ ])
});
;