import { addLocaleData, IntlProvider } from 'react-intl/dist/react-intl.min.js';

export default class IntlFactory {

    constructor(language, translate) {
        this.languages = {};
        if (language) {
            // 将语言及其翻译缓存
            this.languages[language] = translate;

            //添加格式化数字、钱币等需要的配置文件
            addLocaleData(require('react-intl/locale-data/' + language));
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
    judgeLang(param, translate) {
        //根据传入的param覆盖lang语言
        this.lang = param;
        if (window.localStorage) {
            window.localStorage.setItem('i18n_lang', param);
            window.localStorage.setItem('i18n_trans', JSON.stringify(translate));
        }
        if (Object.keys(this.languages).includes(param)) {
            return this.languages[param];
        } else if (!Object.keys(this.languages).includes(param)) {
            let temp = {};
            temp[param] = translate;
            Object.assign(this.languages, temp);
            addLocaleData(require('react-intl/locale-data/' + param));
            return translate;
        }

        // return this.languages[param];
    }

    /**
     * 获取语言
     * @return {[type]}   [description]
     */
    getLang() {
        return this.lang;
    }

    /**
     * 切换语言环境，返回对应语言环境IntlProvider实例
     * @param  {[type]}   param [语言]
     * @return {[type]}         [description]
     */
    async changeLang(param, translate) {
        if (!param) {
            // param = window.localStorage.getItem('language') || 'zh';
            param = window.localStorage.getItem('i18n_lang');
            translate = JSON.parse(window.localStorage.getItem('i18n_trans'));
        }
        //等待翻译文件加载完成
        this.langMsg = await this.judgeLang(param, translate);
        let _this = this;
        //IntlProvider配置内容，格式化数字、货币、日期等，翻译文件
        return new IntlProvider({
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
                        currency: (() => {
                            return _this.lang === 'en' ? 'USD' : 'CNY';
                        })()
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
                        year: 'numeric',
                    },
                    missing: undefined,
                },
                time: {
                    'hour-only': {
                        // new Date();->11 AM
                        hour: '2-digit',
                        hour12: false,
                        // new Date();->11
                        // hour: '2-digit',
                        // hour12: false,
                    },
                    // new Date();->11:32 AM
                    'short': {
                        hour: 'numeric',
                        minute: 'numeric',
                        hour12: false,
                    },

                    'medium': {
                        hour: 'numeric',
                        minute: 'numeric',
                        second: 'numeric',
                        hour12: false,
                    },

                    'long': {
                        hour: 'numeric',
                        minute: 'numeric',
                        second: 'numeric',
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
                        units: 'second',
                    },
                    'minute': {
                        units: 'minute',
                    },
                    'hour': {
                        units: 'hour',
                    },
                    'day': {
                        units: 'day',
                    },
                    'year': {
                        units: 'year',
                    },
                },
            },
            messages: this.langMsg,
        }, {});
    }
}
