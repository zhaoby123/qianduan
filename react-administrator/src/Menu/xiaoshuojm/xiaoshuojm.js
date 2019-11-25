import React from 'react';
import { Link, Route } from 'react-router-dom';
import { Button } from 'antd';

var XiaoshuoCss = require('./xiaoshuojm.css')

export default class Xiaoshuojm extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props.location.state)
        return (
            <div>
                <div className={XiaoshuoCss.tu1}>
                </div>
                <div className={XiaoshuoCss.kuang}>
                    <Link to="/menu/xiaoshuo">
                        返回
                    </Link>
                    <div className={XiaoshuoCss.tk}>
                        <div>
                            <img src="/img/1.jfif"></img>
                        </div>

                        <div className={XiaoshuoCss.tk1}>
                            <h1>
                                <em>大主宰</em>
                                <span>天蚕土豆</span>
                                <span>著</span>
                            </h1>
                            <p>
                                <span>完本</span>
                                <span>
                                    <Link to={{
                                        pathname: "/homepage/fenlei"
                                    }}>
                                        玄幻
                                        </Link>
                                </span>

                            </p>
                            <p>
                                <p>作品简介：</p>
                                大千世界，位面交汇，万族林立，群雄荟萃，一位位来自下位面的天之至尊，在这无尽世界，演绎着令人向往的传奇，追求着那主宰之路
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
                                <Link>
                                    <Button>加入书架</Button>
                                </Link>
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