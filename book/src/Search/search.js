import React from 'react';
import { Link } from 'react-router-dom';
var SearchCss = require('./search.css');

// import Register from '../register/register';

export default class Search extends React.Component {
    render() {
        return (
            <div className={SearchCss.background}>
                <div className={SearchCss.header}>
                    <div className={SearchCss.header1}>
                        <span>阅读</span>
                        <span>·</span>
                        <span>小书库</span>
                    </div>
                </div>
                <div className={SearchCss.body}>
                    <div className={SearchCss.body1}>
                        <Link to="/landing">后退</Link>
                        <div>找回密码</div>
                        <div className={SearchCss.body2}>
                            <input type="tel" placeholder="手机号"></input>
                            <br></br>
                            <input type="number" placeholder="验证码"></input>
                            <input type="button" value="获取验证码"></input>
                            <br></br>
                            <input type="password" placeholder="新密码"></input>
                            <br></br>
                            <input type="password" placeholder="确认密码"></input>
                        </div>

                        <div className={SearchCss.body3}>
                            <Link to="/landing">
                                <button>
                                    <span>确认</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}