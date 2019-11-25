import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
var XtuijianCss = require('./xtuijian.css')


export default class Xtuijian extends React.Component {
    render() {
        console.log(this.props.product)
        return (
            <div className={XtuijianCss.kuang}>
                <Link to={{
                    pathname: "/homepage/xiaoshuo", state: {
                        tm: this.props.product.tm,
                        img: this.props.product.img,
                        zz: this.props.product.zz,
                        js: this.props.product.js,
                        fl: this.props.product.fl,
                    }
                }}>
                    <img src={this.props.product.img} className={XtuijianCss.tu}></img>
                </Link>
                <div className={XtuijianCss.st}>

                    <h4>
                        <Link to={{
                            pathname: "/homepage/xiaoshuo", state: {
                                tm: this.props.product.tm,
                                img: this.props.product.img,
                                zz: this.props.product.zz,
                                js: this.props.product.js,
                                fl: this.props.product.fl,
                            }
                        }}>
                            {this.props.product.tm}
                        </Link>
                    </h4>
                    <p>
                        <span>{this.props.product.zz}</span>

                    </p>
                    <p>{this.props.product.js}</p>
                </div>

            </div>
        )
    }
}