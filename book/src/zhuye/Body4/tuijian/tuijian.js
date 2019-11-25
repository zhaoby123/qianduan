import React from 'react';
import { Link, Route } from 'react-router-dom';
var TuijianCss = require('./tuijian.css')

export default class Tuijian extends React.Component {
    render() {
        console.log(this.props.product)
        return (
            <div className={TuijianCss.tuijian1}>
                <Link to={{
                    pathname: "/homepage/xiaoshuo", state: {
                        tm: this.props.product.tm,
                        img: this.props.product.img,
                        zz: this.props.product.zz,
                        js: this.props.product.js,
                        fl:this.props.product.fl,
                    }
                }}>
                    <div className={TuijianCss.ying}>
                        <img src={this.props.product.img} className={TuijianCss.tu1}></img>
                        <div className={TuijianCss.tuijian2}>
                            <div>{this.props.product.pm}</div>
                            <div>{this.props.product.tm}</div>
                            <div>{this.props.product.js}</div>
                        </div>
                    </div>
                    <div className={TuijianCss.xian}>
                        <span><div>{this.props.product.pm1}</div></span>
                        <div>{this.props.product.tm}</div>
                    </div>
                </Link>
            </div>
        )
    }
}