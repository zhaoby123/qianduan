import React from 'react';
import { Link, Route } from 'react-router-dom';
var XiangxiCss = require('./xiangxi.css')

export default class Xiangxi extends React.Component {
    render() {
        console.log(this.props.product)
        return (
            <div className={XiangxiCss.tj}>
                <Link to={{
                    pathname: "/homepage/xiaoshuo", state: {
                        tm: this.props.product.tm,
                        img: this.props.product.img,
                        zz: this.props.product.zz,
                        js: this.props.product.js,
                        fl:this.props.product.fl,
                    }
                }}>
                    <img src={this.props.product.img} className={XiangxiCss.tu1}></img>
                    <div className={XiangxiCss.tm1}>
                        <div>{this.props.product.tm}</div>
                        
                        <div className={XiangxiCss.js}>{this.props.product.js}</div>
                    </div>

                </Link>
            </div>
        )
    }
}