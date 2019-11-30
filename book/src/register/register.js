import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
var RegisterCss = require('./register.css');


// import Register from '../register/register';

export default class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          identifyCode: '1234',
          fontSizeMin: {
            type: Number,
            default: 24
          },
          fontSizeMax: {
            type: Number,
            default: 30
          },
          backgroundColorMin: {
            type: Number,
            default: 180
          },
          backgroundColorMax: {
            type: Number,
            default: 240
          },
          colorMin: {
            type: Number,
            default: 50
          },
          colorMax: {
            type: Number,
            default: 170
          },
          lineColorMin: {
            type: Number,
            default: 30
          },
          lineColorMax: {
            type: Number,
            default: 180
          },
          dotColorMin: {
            type: Number,
            default: 0
          },
          dotColorMax: {
            type: Number,
            default: 255
          },
          contentWidth: {
            type: Number,
            default: 160
          },
          contentHeight: {
            type: Number,
            default: 30
          }
        };
      }
      componentDidMount() {
        if (this.props.onRef) {
          this.props.onRef(this);
        }
        this.drawPic();
      }
      watchChild(num) {
        this.setState({
          identifyCode: num
        }, () => { this.drawPic(); });
      }
      // 生成一个随机数
      randomNum = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
      }
      // 生成一个随机的颜色
      randomColor(min, max) {
        const r = this.randomNum(min, max);
        const g = this.randomNum(min, max);
        const b = this.randomNum(min, max);
        return 'rgb(' + r + ',' + g + ',' + b + ')';
      }
      drawPic() {
        const canvas = document.getElementById('s-canvas');
        const ctx = canvas.getContext('2d');
        ctx.textBaseline = 'bottom';
        // 绘制背景
        ctx.fillStyle = this.randomColor(this.state.backgroundColorMin.default, this.state.backgroundColorMax.default);
        ctx.fillRect(0, 0, this.state.contentWidth.default, this.state.contentHeight.default);
        // 绘制文字
        for (let i = 0; i < this.state.identifyCode.length; i++) {
          this.drawText(ctx, this.state.identifyCode[i], i);
        }
        this.drawLine(ctx);
        this.drawDot(ctx);
      }
      drawText(ctx, txt, i) {
        ctx.fillStyle = this.randomColor(this.state.colorMin.default, this.state.colorMax.default);
        ctx.font = this.randomNum(this.state.fontSizeMin.default, this.state.fontSizeMax.default) + 'px SimHei';
        const x = (i + 1) * (160 / (this.state.identifyCode.length + 1));
        const y = this.randomNum(this.state.fontSizeMax.default, this.state.contentHeight.default - 5);
        let deg = this.randomNum(-45, 45);
        // 修改坐标原点和旋转角度
        ctx.translate(x, y);
        ctx.rotate(deg * Math.PI / 180);
        ctx.fillText(txt, 0, 0);
        // 恢复坐标原点和旋转角度
        ctx.rotate(-deg * Math.PI / 180);
        ctx.translate(-x, -y);
      }
      drawLine(ctx) {
        // 绘制干扰线
        for (let i = 0; i < 8; i++) {
          ctx.strokeStyle = this.randomColor(this.state.lineColorMin.default, this.state.lineColorMax.default);
          ctx.beginPath();
          ctx.moveTo(this.randomNum(0, this.state.contentWidth.default), this.randomNum(0, this.state.contentHeight.default));
          ctx.lineTo(this.randomNum(0, this.state.contentWidth.default), this.randomNum(0, this.state.contentHeight.default));
          ctx.stroke();
        }
      }
      drawDot(ctx) {
        // 绘制干扰点
        for (let i = 0; i < 100; i++) {
          ctx.fillStyle = this.randomColor(0, 255);
          ctx.beginPath();
          ctx.arc(this.randomNum(0, this.state.contentWidth.default), this.randomNum(0, this.state.contentHeight.default), 1, 0, 2 * Math.PI);
          ctx.fill();
        }
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
                            <input type="tel" placeholder="手机号"></input>
                            <br></br>
                            <input type="text" placeholder="验证码"></input>
                            <canvas className={RegisterCss.canvas} height={this.state.contentHeight.default} id="s-canvas" width={this.state.contentWidth.default}/>
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
Register.propTypes = {
    onRef: PropTypes.func
};
