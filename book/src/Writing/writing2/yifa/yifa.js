import React from 'react';
import { Link, Route } from 'react-router-dom';
import { Button, Icon } from 'antd';
var YifaoCss = require('./yifa.css')
export default class Yifa extends React.Component {
    render() {
        return (
            <div className={YifaoCss.kuang}>
                <div className={YifaoCss.zhuan}>
                    <div className={YifaoCss.zhuan1}>
                        <span>
                        <Link to="/writing/writing2/shezhi">
                                作品设置
                            </Link>
                        </span>
                        <span>
                            <Link to="/writing/writing2">
                                草稿箱
                            </Link>
                        </span>
                        <span>
                            <Link to="/writing/writing2/yifa">
                                已发布章节
                            </Link>
                        </span>
                    </div>
                    <div className={YifaoCss.zhuan2}>
                        <Link to="/writing/writing2">
                            <Button type="primary">
                                <Icon type="plus" />
                                <span>新建章节</span>
                            </Button>
                        </Link>
                    </div>

                </div>
                <div>
                    <div className={YifaoCss.xie1}>
                        <div>
                            <p>
                                共0章
                            </p>
                        </div>
                        <div>

                        </div>
                    </div>
                    <div className={YifaoCss.xie2}>
                        <div>
                            <Button type="primary">修改</Button>
                            <Button>删除</Button>

                        </div>
                        <div>
                            <input placeholder="此处输入章节号与章节名。示例：“第十章 天降奇缘”"/>
                            <textarea placeholder="请输入正文。"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}