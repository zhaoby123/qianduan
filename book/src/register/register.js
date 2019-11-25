import React from 'react';
import { Link } from 'react-router-dom';
var RegisterCss = require('./register.css');

// import Register from '../register/register';

export default class Register extends React.Component {
    render() {
        return (
            <div className={RegisterCss.background}>
                <div className={RegisterCss.header}>
                    <div className={RegisterCss.header1}>
                        <span>阅读</span>
                        <span>·</span>
                        <span>小书库</span>
                    </div>
                </div>
                <div className={RegisterCss.body}>
                    <div className={RegisterCss.body1}>
                        <Link to="/landing">后退</Link>
                        <div>注册</div>
                        <div className={RegisterCss.body2}>
                            <input type="tel" placeholder="手机号"></input>
                            <br></br>
                            <input type="number" placeholder="验证码"></input>
                            <input type="button" value="获取验证码"></input>
                            <br></br>
                            <input type="password" placeholder="6-18位大小写字母、符号或数字"></input>
                            <br></br>
                            <input type="password" placeholder="确认密码"></input>
                        </div>

                        <div className={RegisterCss.body3}>
                            <Link to="/landing">
                                <button>
                                    <span>立即注册</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}