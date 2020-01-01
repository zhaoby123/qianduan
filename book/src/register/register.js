import React from 'react'
import { Link } from 'react-router-dom'
import { Button, message, Input } from 'antd'
var RegisterCss = require('./register.css')
export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  changeValue = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })

  }
  upload = () => {
    var data = {
      "id": this.state.id,
      "Name": this.state.Name,
      "Nicheng": this.state.Nicheng,
      "Usernumber": this.state.Usernumber,
      "sex": this.state.sex,
      "Password": this.state.CertainPassword,
      "email": this.state.email
    }
    fetch("/user/register", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(response => response.json())
    .then(result=>{
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
              <Input type="text" name="id" placeholder="请填写您的用户名" value={this.state.id} onChange={e => this.changeValue(e)}></Input>
              <Input type="text" name="Name" placeholder="请填写您的真实姓名" value={this.state.Name} onChange={e => this.changeValue(e)}></Input>
              <Input type="text" name="Nicheng" placeholder="请填写您的昵称" value={this.state.Nicheng} onChange={e => this.changeValue(e)}></Input>
              <Input type="text" name="Usernumber" placeholder="请填写您的手机号" value={this.state.Usernumber} onChange={e => this.changeValue(e)}></Input>
              <Input type="text" name="sex" placeholder="请填写您的性别" value={this.state.sex} onChange={e => this.changeValue(e)}></Input>
              <Input type="Password" name="Password" placeholder="请输入密码" value={this.state.Password} onChange={e => this.changeValue(e)}></Input>
              <Input type="Password" name="CertainPassword" placeholder="请再次输入您的密码" value={this.state.CertainPassword} onChange={e => this.changeValue(e)}></Input>
              <Input type="text" name="email" placeholder="请输入您的邮箱" value={this.state.email} onChange={e => this.changeValue(e)}></Input>
              <Button className={RegisterCss.author}>成为签约作家</Button>
            </div>

            <div className={RegisterCss.body3}>
              {/* <Link to="/landing"> */}
              <button onClick={this.upload()}>
                立即注册
                                </button>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
    )
  }

}
<<<<<<< HEAD
Register.propTypes = {
    onRef: PropTypes.func
};
=======
>>>>>>> upload_admin549frontend
