import React from 'react';
import { Link, Route } from 'react-router-dom';
import Tuijian from './tuijian/tuijian';
import Xiangxi from './xiangxi/xiangxi';
import Da from './da/da';
var Body3Css = require('./body3.css')

export default class Body2 extends React.Component {
    getProductList() {
        let dateList = [{
            tm: "大主宰",
            img: "/img/小说1/1.jfif",
            fl: "玄幻",
            zz:"天蚕土豆",
            pm:"NO.1",
            pm1: 1,
            js:"大千世界，位面交汇，万族林立，群雄荟萃，一位位来自下位面的天之至尊，在这无尽世界，演绎着令人向往的传奇，追求着那主宰之路。"
        },{
            tm: "一世剑宗",
            img: "/img/小说1/2.jfif",
            fl: "仙侠",
            zz:"xxxx",
            pm:"NO.2",
            pm1: 2,
            js:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
        },{
            tm: "地球超能",
            img: "/img/小说1/3.jfif",
            fl: "都市",
            zz:"xxxx",
            pm:"NO.3",
            pm1: 3,
            js:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
        },{
            tm: "斗罗大陆",
            img: "/img/小说1/4.jfif",
            fl: "玄幻",
            zz:"唐家三少",
            pm:"NO.4",
            pm1: 4,
            js:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
        },{
            tm: "将夜",
            img: "/img/小说1/5.jfif",
            fl: "玄幻",
            zz:"xxxx",
            pm:"NO.5",
            pm1: 5,
            js:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
        },{
            tm: "武极天下",
            img: "/img/小说1/6.jfif",
            fl: "玄幻",
            zz:"xxxx",
            pm:"NO.6",
            pm1: 6,
            js:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
        },{
            tm: "角临",
            img: "/img/小说1/7.jfif",
            fl: "玄幻",
            zz:"xxxx",
            pm:"NO.7",
            pm1: 7,
            js:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
        },{
            tm: "史上最牛宗门",
            img: "/img/小说1/8.jfif",
            fl: "玄幻",
            zz:"xxxx",
            pm:"NO.8",
            pm1: 8,
            js:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
        },{
            tm: "美漫世界当宅男",
            img: "/img/小说1/9.jfif",
            fl: "玄幻",
            zz:"xxxx",
            pm:"NO.9",
            pm1: 9,
            js:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
        },{
            tm: "妖界",
            img: "/img/小说1/10.jpg",
            fl: "玄幻",
            zz:"木子摇",
            pm:"NO.10",
            pm1: 10,
            js:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
        },{
            tm: "回到北宋当大佬",
            img: "/img/小说1/14.jpg",
            fl: "奇幻",
            zz:"祝大家郎",
            pm:"NO.11",
            pm1: 11,
            js:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
        },{
            tm: "恐怖修仙世界",
            img: "/img/小说1/15.jpg",
            fl: "仙侠",
            zz:"龙蛇枝",
            pm:"NO.12",
            pm1: 12,
            js:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
        }]
        return dateList
    }
    getxiangxiList() {
        let xiangxiList = [{
            tm: "一世剑宗",
            img: "/img/小说1/2.jfif",
            fl: "仙侠",
            zz:"xxxx",
            pm:"NO.2",
            pm1: 2,
            js:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
        },{
            tm: "地球超能",
            img: "/img/小说1/3.jfif",
            fl: "都市",
            zz:"xxxx",
            pm:"NO.3",
            pm1: 3,
            js:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
        },{
            tm: "斗罗大陆",
            img: "/img/小说1/4.jfif",
            fl: "玄幻",
            zz:"唐家三少",
            pm:"NO.4",
            pm1: 4,
            js:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
        },{
            tm: "将夜",
            img: "/img/小说1/5.jfif",
            fl: "玄幻",
            zz:"xxxx",
            pm:"NO.5",
            pm1: 5,
            js:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
        },{
            tm: "武极天下",
            img: "/img/小说1/6.jfif",
            fl: "玄幻",
            zz:"xxxx",
            pm:"NO.6",
            pm1: 6,
            js:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
        },{
            tm: "角临",
            img: "/img/小说1/7.jfif",
            fl: "玄幻",
            zz:"xxxx",
            pm:"NO.7",
            pm1: 7,
            js:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
        }]
        return xiangxiList
    }
    getjutiList() {
        let jutiList=[{
            img:"/img/小说1/1.jfif",
            tm: "大主宰",
            fl: "玄幻",
            zz: "天蚕土豆",
            js: "简介：xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
        }]
        return jutiList
    }




    render() {
        let dateList = this.getProductList();
        let ProductList = dateList.map((item, i) => (
            <Tuijian product={item}></Tuijian>
        ))
        let xiangxiList = this.getxiangxiList();
        let chuanList = xiangxiList.map((item, i) => (
            <Xiangxi product={item}></Xiangxi>
        ))
        let jutiList = this.getjutiList();
        let daList = jutiList.map((item, i) => (
            <Da product={item}></Da>
        ))
        console.log();

        return (
            <div>
                <div className={Body3Css.kuang}>
                    <div className={Body3Css.biaoti}>
                        <div></div>
                        <div>男生专区</div>
                    </div>
                    <div className={Body3Css.tj}>
                        {daList}
                        <ul className={Body3Css.xiangxi}>
                            {chuanList}
                        </ul>
                        <div className={Body3Css.tuijian}>
                            <div className={Body3Css.tuijian1}>男频榜</div>
                            {ProductList}

                        </div>
                    </div>

                </div>
            </div>
        )
    }
}