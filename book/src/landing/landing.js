import React from 'react';
import { message } from 'antd'
import { Link } from 'react-router-dom';
var LandingCss = require('./landing.css');

export default class Landing extends React.Component {
    constructor(props){
        super(props);
        this.state={}
    }

    changevalue = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    upload = () => {
        var data = {
          "usernumber": this.state.username,
          "password": this.state.password
        }
        fetch("/user/landings", {
          method: "post",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        }).then(response => response.json())
          .then(result => {
            if (result.state == 0) {
              message.info("登陆成功")
              window.localStorage.setItem('usernumber',this.state.username);
              this.props.history.push('/homepage');
            } else if (result.state == 1) {
              message.info("密码错误")
            }else if (result.state == 2) {
                message.info("用户名不存在")
              }
          })
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
                        <div className={LandingCss.back}>
                        <Link to="/" >
                            返回首页
                        </Link>
                        </div>
                        <div>登录</div>
                        <div className={LandingCss.body2}>
                            <input type="text" name="username" value={this.state.username} onChange={this.changevalue} placeholder="请输入您的手机号" ></input>
                            <br></br>
                            <input type="password" name="password" value={this.state.password} onChange={this.changevalue} placeholder="请输入您的密码" ></input>
                        </div>
                        <div className={LandingCss.clearfix,LandingCss.line}>
                            <input type="checkbox" className={LandingCss.fix,LandingCss.checboxInput} id="check" /><label id="check">记住密码</label>
                            <Link to="/search" className={LandingCss.fix1}>忘记密码</Link>
                        </div>
                        <div className={LandingCss.body3}>

                            <button onClick={this.upload}>
                                <span>一键登陆</span>
                            </button>

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