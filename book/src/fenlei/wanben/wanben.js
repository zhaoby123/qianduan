import React from 'react';
import { Link } from 'react-router-dom';
var WanbenCss = require('./wanben.css')


export default class Wanben extends React.Component {
    render() {
        console.log(this.props.product)
        return (
            <li className={WanbenCss.liebiao}>
                <Link to={{
                    pathname: "/homepage/xiaoshuo", state: {
                        tm: this.props.product.tm,
                        img: this.props.product.img,
                        zz: this.props.product.zz,
                        js: this.props.product.js,
                        fl:this.props.product.fl,
                    }
                }}>
                    <img src={this.props.product.img} className={WanbenCss.tu}></img>
                </Link>
                <div className={WanbenCss.liebiao1}>
                    <h4>
                        <Link to={{
                            pathname: "/xiaoshuo", state: {
                                tm: this.props.product.tm,
                                img: this.props.product.img,
                                zz: this.props.product.zz,
                                js: this.props.product.js
                            }
                        }}>
                            {this.props.product.tm}
                        </Link>
                    </h4>
                    <span>{this.props.product.zz}</span>
                    <span>|</span>
                    <span>{this.props.product.fl}</span>
                    <p>
                        {this.props.product.js}
                    </p>
                </div>
            </li>
        )
    }
}