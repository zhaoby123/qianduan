import React from 'react';
import { Link, Route } from 'react-router-dom';
import { Button } from 'antd';
import Bs from './bs/bs';

var Bookshelf1Css = require('./bookshelf1.css');


export default class Bookshelf1 extends React.Component {
    getjutiList() {
        let jutiList=[{
            tm: "大主宰",
            fl: "玄幻",
            zz: "天蚕土豆"
        },{
            tm: "斗破苍穹",
            fl: "玄幻",
            zz: "天蚕土豆"
        },{
            tm: "武动乾坤",
            fl: "玄幻",
            zz: "天蚕土豆"
        },{
            tm: "魔兽剑圣异界纵横",
            fl: "玄幻",
            zz: "天蚕土豆"
        },{
            tm: "斗破苍穹前传之药老传奇",
            fl: "玄幻",
            zz: "天蚕土豆"
        },{
            tm: "大主宰之灵路",
            fl: "玄幻",
            zz: "天蚕土豆"
        },{
            tm: "元尊",
            fl: "玄幻",
            zz: "天蚕土豆"
        }]
        return jutiList
    }

    render() {
        let xiangxiList = this.getjutiList();
        let chuanList = xiangxiList.map((item, i) => (
            <Bs product={item}></Bs>
        ))

        return (
            <div className={Bookshelf1Css.da}>
                <div className={Bookshelf1Css.kuang}>
                    <div className={Bookshelf1Css.biaodan}>
                        <div>
                            <Link to="/homepage/bookshelf/zuijin">
                                <div>
                                    最近阅读
                                </div>
                            </Link>
                        </div>
                        <div>
                            <Link to="/homepage/bookshelf">
                                <div>
                                    默认分组
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className={Bookshelf1Css.biaodan2}>
                        <div>
                            <h2>默认分组</h2>
                            <span>共x本书籍</span>
                        </div>
                        <table className={Bookshelf1Css.zhengti}>
                            <thead>
                                <tr className={Bookshelf1Css.xiangjie}>
                                    <th>
                                        <input type="checkbox"></input>
                                    </th>
                                    <th>书名</th>
                                    <th>作者</th>

                                </tr>
                            </thead>
                            <tbody>
                                {chuanList}
                            </tbody>
                        </table>
                        <div className={Bookshelf1Css.dibu}>
                            <th><input type="checkbox"></input></th>
                            <th>
                                <span>全选</span>
                                <Button type="link">删除</Button>
                            </th>
                        </div>

                    </div>
                        
                </div>
            </div>

        )
    }
}