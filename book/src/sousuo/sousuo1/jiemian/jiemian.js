import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
var JiemianCss = require('./jiemian.css')


export default class Jiemian extends React.Component {
    render() {
        console.log(this.props.product)
        return (
            <div className={JiemianCss.kuang}>
                <Link to={{
                    pathname: "/homepage/xiaoshuo", state: {
                        tm: this.props.product.tm,
                        img: this.props.product.img,
                        zz: this.props.product.zz,
                        js: this.props.product.js,
                        fl: this.props.product.fl,
                    }
                }}>
                    <img src={this.props.product.img} className={JiemianCss.tu}></img>
                </Link>
                <div className={JiemianCss.st}>

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
                        <em>|</em>
                        <Link to={{
                    pathname: "/homepage/fenlei"
                }}>
                        {this.props.product.fl}
                        </Link>
                    </p>
                    <p>{this.props.product.js}</p>
                </div>
                <div className={JiemianCss.wb}>
                    <div>
                    <Link to={{
                    pathname: "/homepage/xiaoshuo", state: {
                        tm: this.props.product.tm,
                        img: this.props.product.img,
                        zz: this.props.product.zz,
                        js: this.props.product.js,
                        fl:this.props.product.fl,
                    }
                }}>
                        <Button type="primary">书籍详情</Button>
                        </Link>
                        
                        <Button>加入书架</Button>
                    </div>
                </div>
            </div>
        )
    }
}