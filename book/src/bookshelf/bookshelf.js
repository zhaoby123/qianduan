import React from 'react';
import Bookshelf1 from './bookshelf1/bookshelf1';
import { Switch, Route, Link } from 'react-router-dom';
import Tuijian from '../zhuye/Body2/tuijian/tuijian';
import Zuijin from './zuijin/zuijin';
var BookshelfCss = require('./bookshelf.css');
export default class Bookshelf extends React.Component {
    getProductList() {
        let dateList = [{
            img: "/img/小说/1.jpeg",
            pm: "NO.1",
            tm: "青春有泪",
            js: "柳慕白这个名字一出来，就连这些天届的学长们神情都是顿了顿，显然是感受到不小的压力。",
            pm1: 1
        }, {
            img: "/img/小说/2.jpg",
            pm: "NO.2",
            tm: "L'ESPERIT del LLOP",
            js: "柳慕白这个名字一出来，就连这些天届的学长们神情都是顿了顿，显然是感受到不小的压力。",
            pm1: 2
        }, {
            img: "/img/小说/3.jpg",
            pm: "NO.3",
            tm: "三里湾",
            js: "柳慕白这个名字一出来，就连这些天届的学长们神情都是顿了顿，显然是感受到不小的压力。",
            pm1: 3
        }, {
            img: "/img/小说/4.jpg",
            pm: "NO.4",
            tm: "夜倾天下·帝妃太嚣张",
            js: "柳慕白这个名字一出来，就连这些天届的学长们神情都是顿了顿，显然是感受到不小的压力。",
            pm1: 4
        }, {
            img: "/img/小说/5.jpg",
            pm: "NO.5",
            tm: "蜀秀",
            js: "柳慕白这个名字一出来，就连这些天届的学长们神情都是顿了顿，显然是感受到不小的压力。",
            pm1: 5
        }, {
            img: "/img/小说/6.jpg",
            pm: "NO.6",
            tm: "愿我们终会与幸福相见",
            js: "柳慕白这个名字一出来，就连这些天届的学长们神情都是顿了顿，显然是感受到不小的压力。",
            pm1: 6
        }, {
            img: "/img/小说/7.jpg",
            pm: "NO.7",
            tm: "情来缘浅",
            js: "柳慕白这个名字一出来，就连这些天届的学长们神情都是顿了顿，显然是感受到不小的压力。",
            pm1: 7
        }, {
            img: "/img/小说/8.jpg",
            pm: "NO.8",
            tm: "白夜行",
            js: "柳慕白这个名字一出来，就连这些天届的学长们神情都是顿了顿，显然是感受到不小的压力。",
            pm1: 8
        }, {
            img: "/img/小说/9.jpg",
            pm: "NO.9",
            tm: "那些年被我们搁浅的伤",
            js: "柳慕白这个名字一出来，就连这些天届的学长们神情都是顿了顿，显然是感受到不小的压力。",
            pm1: 9
        }, {
            img: "/img/小说/10.jpg",
            pm: "NO.10",
            tm: "那年风吹柳絮",
            js: "柳慕白这个名字一出来，就连这些天届的学长们神情都是顿了顿，显然是感受到不小的压力。",
            pm1: 10
        }, {
            img: "/img/小说/11.jpg",
            pm: "NO.11",
            tm: "恋花",
            js: "柳慕白这个名字一出来，就连这些天届的学长们神情都是顿了顿，显然是感受到不小的压力。",
            pm1: 11
        }, {
            img: "/img/小说/12.jpg",
            pm: "NO.12",
            tm: "青谷子",
            js: "柳慕白这个名字一出来，就连这些天届的学长们神情都是顿了顿，显然是感受到不小的压力。",
            pm1: 12
        }]
        return dateList
    }
    render() {
        let dateList = this.getProductList();
        let ProductList = dateList.map((item, i) => (
            <Tuijian product={item}></Tuijian>
        ))
        return (
                <div className={BookshelfCss.kuang}>
                    <Route path="/homepage/bookshelf" exact component={Bookshelf1}></Route>
                    <Route path="/homepage/bookshelf/zuijin" component={Zuijin}></Route>
                    <div className={BookshelfCss.tuijian}>
                        <div className={BookshelfCss.tuijian1}>编辑推荐</div>
                        {ProductList}


                    </div >
                </div>


        )
    }
}