'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _intlProvider = require('./intlProvider');

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