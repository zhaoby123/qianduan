import React from 'react';
import { Link, Route } from 'react-router-dom';
var DaCss = require('./da.css')

export default class Da extends React.Component {
    render() {
        console.log(this.props.product)
        return (
            <div className={DaCss.tj}>
                <Link to={{
                    pathname: "/homepage/xiaoshuo", state: {
                        tm: this.props.product.tm,
                        img: this.props.product.img,
                        zz: this.props.product.zz,
                        js: this.props.product.js,
                        fl:this.props.product.fl,
                    }
                }}>
                    <img src={this.props.product.img} className={DaCss.tu1}></img>
                </Link>
                <Link to={{
                    pathname: "/homepage/xiaoshuo", state: {
                        tm: this.props.product.tm,
                        img: this.props.product.img,
                        zz: this.props.product.zz,
                        js: this.props.product.js,
                        fl:this.props.product.fl,
                    }
                }}>
                    <div className={DaCss.tm1}>{this.props.product.tm}</div>
                </Link>
                <div className={DaCss.tm2}>
                    <span>
                    <Link to={{
                    pathname: "/homepage/fenlei"
                }}>
                        {this.props.product.fl}
                        </Link>
                        </span>
                    <span>|</span>
                    <span>{this.props.product.zz}</span>
                </div>
                <div className={DaCss.tm3}>
                    {this.props.product.js}
                </div>
                <div className={DaCss.tm4}>
                <Link to={{
                    pathname: "/homepage/xiaoshuo", state: {
                        tm: this.props.product.tm,
                        img: this.props.product.img,
                        zz: this.props.product.zz,
                        js: this.props.product.js,
                        fl:this.props.product.fl,
                    }
                }}>
                        开始阅读
                    </Link>
                </div>
            </div>
        )
    }
}