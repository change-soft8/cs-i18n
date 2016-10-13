import React from 'react';
import ReactDOM from 'react-dom';

// import Intern from '../src/intern.js';
import Intern from 'CsI18n';
// import Intern from '../build/intern.js';

const zh = { "i18nDemo-demo-panelcontent": "面板内容" };
const en = { "i18nDemo-demo-panelcontent": "Panel Content" };
const ja = { "i18nDemo-demo-panelcontent": "パネルの内容" };

const intern = new Intern('zh', zh);

export default class Index extends React.Component {
    constructor(props) {
        super(props);

        // 初始化语言
        intern.changeLang().then(() => {
            this.setState();
            // do something you want to
        });
    }

    // 点击切换语言
    changeLanguage(lang) {
        if (i18n.lang === lang) {
            return false;
        }
        let tr = lang === 'zh' ? zh : (lang === 'en' ? en : ja);
        intern.changeLang(lang, tr).then(() => {
            this.setState();
            // do something you want to
        });
    }

    render() {
        return (
            <div className="panel panel-default" style={{width:400, margin:'20px auto'}}>
	            <div className="panel-heading">
		            <div className="btn-group">
			            <button type="button" className="btn btn-default" onClick={this.changeLanguage.bind(this, 'zh')}>中文</button>
			            <button type="button" className="btn btn-default" onClick={this.changeLanguage.bind(this, 'en')}>English</button>
			            <button type="button" className="btn btn-default" onClick={this.changeLanguage.bind(this, 'ja')}>日本語</button>
		            </div> 
            	</div> 
            	<div className="panel-body">
            		<div>{i18n.message('i18nDemo-demo-panelcontent')}</div>
            		<div>{i18n.currency(1000)}</div>
            		<div>{i18n.short(111321343343)}</div>
            	</div>
            </div>
        )
    }
}

ReactDOM.render( < Index / > , document.getElementById('container'));
