import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon } from 'antd';
var Writing1Css = require('./writing1.css')
export default class Writing1 extends React.Component {
    render() {
        return (
            <div className={Writing1Css.kuang}>
                <div className={Writing1Css.tou}>
                    <span>作品管理</span>
                </div>
                <div className={Writing1Css.st}>
                    <thead className={Writing1Css.sts}>
                        <tr>
                            <th></th>
                            <th>书名</th>
                            <th>最新章节</th>
                            <th>分类</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody className={Writing1Css.stx}>
                        <tr>
                            <th>

                            </th>
                            <th>
                                <img src="/img/小说1/21.png" />
                                <span>取名要头炸</span>
                            </th>
                            <th>
                                <Link>
                                    无最新章节
                                </Link>
                            </th>
                            <th>
                                <span>科幻</span>
                            </th>
                            <th>
                                <Link to="/writing/writing2">
                                    <Button type="primary">
                                        <Icon type="edit" style={{ fontSize: '30px' }} />
                                        <p>写新章节</p>
                                    </Button>
                                </Link>
                                <Link to="/writing/writing2/yifa">
                                    <Button>
                                        <Icon type="snippets" style={{ fontSize: '30px' }} />
                                        <p>已发布章节</p>
                                    </Button>
                                </Link>
                            </th>
                        </tr>
                    </tbody>
                </div>
                <div className={Writing1Css.dibu}>
                    <Link to="/writing/xinjian">
                        <Button type="primary">
                            <Icon type="plus" />
                            <span>新建章节</span>
                        </Button>
                    </Link>
                </div>
            </div>
        )
    }
}