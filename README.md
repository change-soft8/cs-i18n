[TOC]

<a name="cs-i18n"></a>
# cs-i18n

react国际化组件

* [cs-i18n](#cs-i18n)
  * [1. 国际化初始化](#cs-i18n-1)
  * [2. 语言切换](#cs-i18n-2)
  * [3. 内容显示](#cs-i18n-3)
  * [4. API](#cs-i18n-API)
  * [附：常用语言key值对照](#cs-i18n-lang)

<a name="cs-i18n-1"></a>
### 1. 国际化初始化
```
import Intern from 'CsI18n';
const zh = { "i18nDemo-demo-panelcontent": "面板内容" };
//初始化 
const intern = new Intern('zh', zh);
```

<a name="cs-i18n-2"></a>
### 2. 语言切换
```
intern.changeLang('zh', zh).then(() => {
    this.setState();
    // do something you want to
});
```

<a name="cs-i18n-3"></a>
### 3. 内容显示
```
<div>{i18n.message('i18nDemo-demo-panelcontent')}</div>
```

<a name="cs-i18n-API"></a>
### 4. API
方法                    | 参数说明 					| 返回值 		| 事例
---                     | ---      					| ---    		| ---
i18n.percent(number)	| number：需要格式化的数字	| 格式化后的值	| i18n.percent(30) -> 3,000%
i18n.currency(number)	| number：格式化钱币	    | 格式化后的值	| i18n.currency(300) -> ￥300.00（中）
i18n.decimal(number)	| number：数字	            | 格式化后的值	| i18n.decimal(28.3955) -> 28.396
i18n.message(id,values)	| id(string,required):翻译key；<br> values(object)：参数 | 翻译文件对应的value | i18n.message('welcome',{someone:"侬"}) -> 欢迎侬
i18n.short(date)	    | date：时间戳	            | 日期	        | 16/8/9 
i18n.medium(date)	    | date：时间戳	            | 日期	        | 2016/8/11
i18n.long(date)	        | date：时间戳	            | 日期			| 2016年8月11日
i18n.full(date)			| date：时间戳				| 日期			| 2016年8月11日星期四
i18n.month(date)		| date：时间戳				| 几个月前（中）| 	 
i18n.day(date)			| date：时间戳				| 几天前（中）	|
i18n.hour(date)			| date：时间戳				| 几小时前（中）| 	 
i18n.minute(date)		| date：时间戳				| 几分钟前（中）| 	 
i18n.seconds(date)		| date：时间戳				| 几秒前（中）	| 
i18n.shortime(date）	| date：时间戳				| 时间			| 13:58
i18n.shortime(date)		| date：时间戳		 		| 时间			| 13:58:29
i18n.shortime(date)		| date：时间戳				| 时间			| 下午1:58:29

<a name="cs-i18n-lang"></a>
### 附：常用语言key值对照
语言  | key 
---   | --- 
中文  | zh
英语  | en
日语  | ja