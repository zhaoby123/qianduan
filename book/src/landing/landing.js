import React from 'react';
import { Link } from 'react-router-dom';
var LandingCss = require('./landing.css');

// import Register from '../register/register';

export default class Landing extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }

    }
    chuchun() {
        let n = [{
            un: '123',
            pw: '123',
            m: '1',
            m1: '张三'
        }, {
            un: '456',
            pw: '123',
            m: '2',
            m1: '李四'
        }, {
            un: '789',
            pw: '123',
            m: '3',
            m1: '王麻子'
        }]
        return n

    }
    changevalue = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    login = e => {
        let userList = this.chuchun();
        let s=0;
        for (let i = 0; i < userList.length; i++) {
            
            if (this.state.username === userList[i].un && this.state.password === userList[i].pw) {
                
                window.localStorage.setItem('m1',userList[i].m1);
                s=s+1;
                //跳转页面
                this.props.history.push('/homepage');
            }
            }
            if (s===0) {
                alert('登陆失败');
        }
    }
    render() {
        return (
            <div className={LandingCss.background}>
                <div className={LandingCss.header}>
                    <div className={LandingCss.header1}>
                        <span>阅读</span>
                        <span>·</span>
                        <span>小书库</span>
                    </div>
                </div>
                <div className={LandingCss.body}>
                    <div className={LandingCss.body1}>
                        <Link to="/">
                            退出登陆
                        </Link>
                        <div>登陆</div>
                        <div className={LandingCss.body2}>
                            <input type="text" name="username" value={this.state.username} onChange={this.changevalue} placeholder="账号" ></input>
                            <br></br>
                            <input type="password" name="password" value={this.state.password} onChange={this.changevalue} placeholder="密码" ></input>

                        </div>
                        <div className={LandingCss.clearfix}>
                            <input type="checkbox" className={LandingCss.fix} /><span>记住密码</span>
                            <Link to="/search" className={LandingCss.fix1}>忘记密码</Link>
                        </div>
                        <div className={LandingCss.body3}>
                            {/* <Link to="/" onClick={this.login}> */}
                            <button onClick={this.login}>
                                <span>登陆</span>
                            </button>
                            {/* </Link> */}
                            <Link to="/register">
                                <button>
                                    <span>免费注册</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}