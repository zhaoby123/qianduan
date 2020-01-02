import React from 'react'
import { Link } from 'react-router-dom'
import { Modal, Button, message } from 'antd'
var RegisterCss = require('./register.css')
const { confirm } = Modal;
function showConfirm() {
  confirm({
    title: '您是否想成为本站的签约作家?',
    content: '点此OK就代表您已同意本站的入驻作家协议',
    onOk() {
      return new Promise((resolve, reject) => {
        setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
      }).catch(() => console.log('Oops errors!'));
    },
    onCancel() { },
  });
}
export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  changevalue = e => {
    this.setState({
        [e.target.name]: e.target.value
    })
}
  Register = () => {
    var data = {
      "name": this.state.name,
      "username": this.state.username,
      "usernumber": this.state.usernumber,
      "sex": this.state.sex,
      "password": this.state.password,
      "author":this.state.author
    }
    fetch("/user/Registration", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(response => response.json())
      .then(result => {
        if (result.state == 2) {
          message.info("用户名已存在")
        } else if (result.state == 1) {
          message.info("注册成功")
        }
      })
  }

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
            <div>
              <div className={RegisterCss.back1}><Link to="/landing">返回登录</Link></div>
              <div className={RegisterCss.back2}><Link to="/">返回首页</Link></div>
            </div>
            <div>注册</div>
            <div className={RegisterCss.body2}>

              <input type="text" name="name" placeholder="请填写您的真实姓名" value={this.state.name} onChange={this.changevalue}></input>
              <input type="text" name="usernumber" placeholder="请填写您的手机号" value={this.state.usernumber} onChange={this.changevalue}></input>
              <input type="text" name="sex" placeholder="请填写您的性别" value={this.state.sex} onChange={this.changevalue}></input>
              <input type="Password" name="password" placeholder="请输入密码" value={this.state.password} onChange={this.changevalue}></input>
              <input type="text" name="username" placeholder="请填写您的昵称" value={this.state.username} onChange={this.changevalue}></input>
              <input type="text" name="author" placeholder="是否想成为作家" value={this.state.author} onChange={this.changevalue}></input>
              
              <Button className={RegisterCss.author} onClick={showConfirm}>成为签约作家</Button>

            </div>
            <div className={RegisterCss.body3}>
              <button onClick={this.Register}>
                立即注册
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

}
