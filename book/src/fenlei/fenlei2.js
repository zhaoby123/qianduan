import React from 'react';
import Tubiao from '../zhuye/Body1/tubiao/tubiao'
import Wanben from './wanben/wanben'

var FenleiCss = require('./fenlei.css');




export default class Fenlei2 extends React.Component {
    constructor(props) {
        super(props);}
    getProductList() {
        let dateList = [{
            name: "玄幻",
            img: "/img/icon/1.png",
            lj: "/homepage/fenlei2"
        }, {
            name: "奇幻",
            img: "/img/icon/2.png",
            lj: "/homepage/fenlei"
        }, {
            name: "武侠",
            img: "/img/icon/3.png",
            lj: "/homepage/fenlei"
        }, {
            name: "仙侠",
            img: "/img/icon/4.png",
            lj: "/homepage/fenlei"
        }, {
            name: "都市",
            img: "/img/icon/5.png",
            lj: "/homepage/fenlei"
        }, {
            name: "现实",
            img: "/img/icon/6.png",
            lj: "/homepage/fenlei"
        }, {
            name: "军事",
            img: "/img/icon/7.png",
            lj: "/homepage/fenlei"
        }, {
            name: "历史",
            img: "/img/icon/8.png",
            lj: "/homepage/fenlei"
        }, {
            name: "游戏",
            img: "/img/icon/9.png",
            lj: "/homepage/fenlei"
        }, {
            name: "体育",
            img: "/img/icon/10.png",
            lj: "/homepage/fenlei"
        }, {
            name: "科幻",
            img: "/img/icon/11.png",
            lj: "/homepage/fenlei"
        }, {
            name: "悬疑灵异",
            img: "/img/icon/12.png",
            lj: "/homepage/fenlei"
        }, {
            name: "女生网",
            img: "/img/icon/13.jpg",
            lj: "/homepage/fenlei1"
        }, {
            name: "轻小说",
            img: "/img/icon/14.png",
            lj: "/homepage/fenlei1"
        }]
        return dateList
    }
    getWanbenList() {
        let wanebnList = [{
            tm: "外挂傍身的杂草",
            img: "/img/no1/11.jpg",
            zz:"xxx",
            fl:"玄幻",
            js:"柳慕白这个名字一出来，就连这些天届的学长们神情都是顿了顿，显然是感受到不小的压力。"
        },{
            tm: "我的1979",
            img: "/img/no1/12.jpg",
            zz:"xxxx",
            fl:"玄幻",
            js:"柳慕白这个名字一出来，就连这些天届的学长们神情都是顿了顿，显然是感受到不小的压力。"
        },{
            tm: "武极天下",
            img: "/img/no1/6.jfif",
            zz:"xxxx",
            fl:"玄幻",
            js:"北灵院总榜第一，柳慕白，其父亲更是北灵境第一大域的域主，威名显赫。"
        },{
            tm: "史上最牛宗门",
            img: "/img/no1/8.jfif",
            zz:"xxxx",
            fl:"玄幻",
            js:"北灵院总榜第一，柳慕白，其父亲更是北灵境第一大域的域主，威名显赫。"
        },{
            tm: "美漫世界当宅男",
            img: "/img/no1/9.jfif",
            zz:"xxxx",
            fl:"奇幻",
            js:"北灵院总榜第一，柳慕白，其父亲更是北灵境第一大域的域主，威名显赫。"
        },{
            tm: "地球超能",
            img: "/img/no1/3.jfif",
            zz:"xxxx",
            fl:"都市",
            js:"北灵院总榜第一，柳慕白，其父亲更是北灵境第一大域的域主，威名显赫。"
        },{
            tm: "斗罗大陆",
            img: "/img/no1/4.jfif",
            zz:"唐家三少",
            fl:"玄幻",
            js:"北灵院总榜第一，柳慕白，其父亲更是北灵境第一大域的域主，威名显赫。"
        },{
            tm: "将夜",
            img: "/img/no1/5.jfif",
            zz:"xxxx",
            fl:"玄幻",
            js:"北灵院总榜第一，柳慕白，其父亲更是北灵境第一大域的域主，威名显赫。"
        },{
            tm: "角临",
            img: "/img/no1/7.jfif",
            zz:"xxxx",
            fl:"玄幻",
            js:"北灵院总榜第一，柳慕白，其父亲更是北灵境第一大域的域主，威名显赫。"
        },{
            tm: "妖界",
            img: "/img/no1/10.jpg",
            zz:"木子摇",
            fl:"玄幻",
            js:"北灵院总榜第一，柳慕白，其父亲更是北灵境第一大域的域主，威名显赫。"
        },]
        return wanebnList
    }
    render(){
        console.log(this.props.location.state)
        let dateList = this.getProductList();
        let ProductList = dateList.map((item, i) => (
            <Tubiao product={item}></Tubiao>
        ))
        let wanbenList = this.getWanbenList();
        let WanbenList = wanbenList.map((item, i) => (
            <Wanben product={item}></Wanben>
        ))

        return(
            <div>
                 <div className={FenleiCss.kuang}>
                    <div className={FenleiCss.liebiao}>
                        <dl>
                            {ProductList}  
                        </dl>
                    </div>
                    <div className={FenleiCss.z}>
                        {WanbenList}
                    </div>
                </div>
            </div>
        )
    }
}