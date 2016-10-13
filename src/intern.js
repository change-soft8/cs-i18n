import IntlProvider from './intlProvider';

export default class Intern {

    constructor(language, translate) {
        this.intlProvider = new IntlProvider(language, translate);
    }

    /**
     * 根据id查找翻译文件中对应的值
     * @param  {[string]}   id    [翻译文件的key]
     * @param  {[object]}   param [翻译文件key对应的value里动态参数]
     * @return {[type]}         [description]
     */
    message(id, param) {
        return this.intl.formatMessage({ id: id }, param);
    }

    /**
     * 格式化数字
     * @param  {[number]}   num [description]
     * @return {[type]}       [description]
     */
    numberIntl(num) {
        let format = this.format
        return this.intl.formatNumber(num, { format });
    }

    /**
     * 格式化日期
     * @param  {[type]}   date [description]
     * @return {[type]}        [description]
     */
    dateIntl(date) {
        return this.intl.formatDate(date, this.foramt);
    }

    /**
     * 格式化时间
     * @param  {[type]}   time [description]
     * @return {[type]}        [description]
     */
    timeIntl(time) {
        return this.intl.formatTime(time, this.format);
    }

    /**
     * 与传入时间比较，返回多久之前
     * @param  {[type]}   time [description]
     * @return {[type]}        [description]
     */
    timeRelative(time) {
        return this.intl.formatRelative(time, this.format);
    }

    /**
     * 切换语言环境
     * @param  {[type]}   param [传入语言]
     * @return {[type]}         [description]
     */
    async changeLang(param, translate) {
        let map = {
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
            longtime: [this.timeIntl, 'long'],
        }

        //全局i18n对象
        window.i18n = {};
        //资源加载前初始化i18n里所有方法
        for(let key in map) {
            window.i18n[key] = () => {};
        }
        window.i18n.message = () => {};
        //等待获取当前语言环境下的IntlProvider实例，成功获取继续执行下面代码
        let intlProvider = await this.intlProvider.changeLang(param, translate);
        //获取实例intlProvider里面的配置内容
        this.intl = intlProvider.getChildContext().intl;
        //将lang语言放入i18n对象
        window.i18n.lang = this.intlProvider.getLang();
        //将message方法放入i18n对象
        window.i18n.message = this.message.bind(this);
        let _this = this;
        //遍历map
        for (let key in map) {
            //获取map里的value
            let val = map[key];
            //获取value数组里函数
            let func = val[0];
            //获取value数组里参数
            let p = val[1];
            //遍历出的值放入i18n对象中（bind里的参数对应func的return里需要的参数）
            window.i18n[key] = func.bind({ intl: _this.intl, format: p });
        }
    }
}