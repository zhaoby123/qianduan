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
            img: "/img/图标/1.png",
            lj: "/homepage/fenlei2"
        }, {
            name: "奇幻",
            img: "/img/图标/2.png",
            lj: "/homepage/fenlei"
        }, {
            name: "武侠",
            img: "/img/图标/3.png",
            lj: "/homepage/fenlei"
        }, {
            name: "仙侠",
            img: "/img/图标/4.png",
            lj: "/homepage/fenlei"
        }, {
            name: "都市",
            img: "/img/图标/5.png",
            lj: "/homepage/fenlei"
        }, {
            name: "现实",
            img: "/img/图标/6.png",
            lj: "/homepage/fenlei"
        }, {
            name: "军事",
            img: "/img/图标/7.png",
            lj: "/homepage/fenlei"
        }, {
            name: "历史",
            img: "/img/图标/8.png",
            lj: "/homepage/fenlei"
        }, {
            name: "游戏",
            img: "/img/图标/9.png",
            lj: "/homepage/fenlei"
        }, {
            name: "体育",
            img: "/img/图标/10.png",
            lj: "/homepage/fenlei"
        }, {
            name: "科幻",
            img: "/img/图标/11.png",
            lj: "/homepage/fenlei"
        }, {
            name: "悬疑灵异",
            img: "/img/图标/12.png",
            lj: "/homepage/fenlei"
        }, {
            name: "女生网",
            img: "/img/图标/13.jpg",
            lj: "/homepage/fenlei1"
        }, {
            name: "轻小说",
            img: "/img/图标/14.png",
            lj: "/homepage/fenlei1"
        }]
        return dateList
    }
    getWanbenList() {
        let wanebnList = [{
            tm: "外挂傍身的杂草",
            img: "/img/小说1/11.jpg",
            zz:"xxx",
            fl:"玄幻",
            js:"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX。"
        },{
            tm: "我的1979",
            img: "/img/小说1/12.jpg",
            zz:"xxxx",
            fl:"玄幻",
            js:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
        },{
            tm: "武极天下",
            img: "/img/小说1/6.jfif",
            zz:"xxxx",
            fl:"玄幻",
            js:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
        },{
            tm: "史上最牛宗门",
            img: "/img/小说1/8.jfif",
            zz:"xxxx",
            fl:"玄幻",
            js:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
        },{
            tm: "美漫世界当宅男",
            img: "/img/小说1/9.jfif",
            zz:"xxxx",
            fl:"奇幻",
            js:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
        },{
            tm: "地球超能",
            img: "/img/小说1/3.jfif",
            zz:"xxxx",
            fl:"都市",
            js:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
        },{
            tm: "斗罗大陆",
            img: "/img/小说1/4.jfif",
            zz:"唐家三少",
            fl:"玄幻",
            js:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
        },{
            tm: "将夜",
            img: "/img/小说1/5.jfif",
            zz:"xxxx",
            fl:"玄幻",
            js:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
        },{
            tm: "角临",
            img: "/img/小说1/7.jfif",
            zz:"xxxx",
            fl:"玄幻",
            js:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
        },{
            tm: "妖界",
            img: "/img/小说1/10.jpg",
            zz:"木子摇",
            fl:"玄幻",
            js:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
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