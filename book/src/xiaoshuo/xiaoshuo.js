import React from 'react';
import { Link, Route } from 'react-router-dom';
import { Button } from 'antd';

var XiaoshuoCss = require('./xiaoshuo.css')

export default class Xiaoshuo extends React.Component {
    constructor(props) {
        super(props);}
    render() {
        console.log(this.props.location.state)
        return (
            <div>
                <div className={XiaoshuoCss.tu1}>
                </div>
                <div className={XiaoshuoCss.kuang}>
                    <div className={XiaoshuoCss.tk}>
                        <div>
                            <img src={this.props.location.state.img}></img>
                        </div>

                        <div className={XiaoshuoCss.tk1}>
                            <h1>
                                <em>{this.props.location.state.tm}</em>
                                <span>{this.props.location.state.zz}</span>
                                <span>著</span>
                            </h1>
                            <p>
                                <span>完本</span>
                                <span>
                                    <Link to={{
                                        pathname: "/homepage/fenlei"
                                    }}>
                                        {this.props.location.state.fl}
                                        </Link>
                                </span>

                            </p>
                            <p>
                                <p>作品简介：</p>
                                {this.props.location.state.js}
                            </p>

                        </div>
                        <div className={XiaoshuoCss.tk2}>
                            <p>
                                <em>492.92</em>
                                <span>万字</span>
                                <i>|</i>
                                <em>811.63</em>
                                <span>万总推荐</span>
                            </p>
                            <Link to="/kan">
                                <Button type="primary">开始阅读</Button>
                            </Link>
                            <p>
                                {/* <Link> */}
                                    <Button>加入书架</Button>
                                {/* </Link> */}
                                <Button>力推此书</Button>
                            </p>
                        </div>
                    </div>
                    <div className={XiaoshuoCss.mulu}>
                        <div>
                            <h2>
                                目录·
                                <i>1597章</i>
                            </h2>
                        </div>
                        <ul>
                            <li>
                                <Link to="/kan">第一章&nbsp;&nbsp;北灵院</Link>
                            </li>
                            <li>
                                <Link to="/kan">第二章&nbsp;&nbsp;被踢出灵路的少年</Link>
                            </li>
                            <li>
                                <Link to="/kan">第三章&nbsp;&nbsp;牧域</Link>
                            </li>
                            <li>
                                <Link to="/kan">第四章&nbsp;&nbsp;大浮屠诀</Link>
                            </li>
                            <li>
                                <Link to="/kan">第五章&nbsp;&nbsp;大千世界</Link>
                            </li>
                            <li>
                                <Link to="/kan">第六章&nbsp;&nbsp;灵力增幅</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}