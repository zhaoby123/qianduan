import React from 'react';
import { Link, Route } from 'react-router-dom';
import Tuijian from './tuijian/tuijian';
import Xiangxi from './xiangxi/xiangxi'
var Body2Css = require('./body2.css')

export default class Body2 extends React.Component {
    getProductList() {
        let dateList = [{
            tm: "大主宰",
            img: "/img/小说1/1.jfif",
            zz:"天蚕土豆",
            fl: "玄幻",
            pm: "NO.1",
            pm1: 1,
            js:"大千世界，位面交汇，万族林立，群雄荟萃，一位位来自下位面的天之至尊，在这无尽世界，演绎着令人向往的传奇，追求着那主宰之路。"
        },{
            tm: "一世剑宗",
            img: "/img/小说1/2.jfif",
            zz:"xxxx",
            fl: "仙侠",
            pm: "NO.2",
            pm1: 2,
            js:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
        },{
            tm: "地球超能",
            img: "/img/小说1/3.jfif",
            zz:"xxxx",
            fl: "都市",
            pm: "NO.3",
            pm1: 3,
            js:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
        },{
            tm: "斗罗大陆",
            img: "/img/小说1/4.jfif",
            zz:"唐家三少",
            fl: "玄幻",
            pm: "NO.4",
            pm1: 4,
            js:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
        },{
            tm: "将夜",
            img: "/img/小说1/5.jfif",
            zz:"xxxx",
            fl: "玄幻",
            pm: "NO.5",
            pm1: 5,
            js:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
        }, {
            img: "/img/小说/6.jpg",
            pm: "NO.6",
            tm: "愿我们终会与幸福相见",
            js: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
            pm1: 6,
            fl: "言情",
            zz:"xxx"
        }, {
            img: "/img/小说/7.jpg",
            pm: "NO.7",
            tm: "情来缘浅",
            js: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
            pm1: 7,
            fl: "言情",
            zz:"xxx"
        }, {
            img: "/img/小说/8.jpg",
            pm: "NO.8",
            tm: "白夜行",
            js: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
            pm1: 8,
            fl: "言情",
            zz:"xxx"
        }, {
            img: "/img/小说/9.jpg",
            pm: "NO.9",
            tm: "那些年被我们搁浅的伤",
            js: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
            pm1: 9,
            fl: "悬疑灵异",
            zz:"xxx"
        }, {
            img: "/img/小说/10.jpg",
            pm: "NO.10",
            tm: "那年风吹柳絮",
            js: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
            pm1: 10,
            fl: "言情",
            zz:"xxx"
        }, {
            img: "/img/小说/11.jpg",
            pm: "NO.11",
            tm: "恋花",
            js: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
            pm1: 11,
            fl: "言情",
            zz:"xxx"
        }, {
            img: "/img/小说/12.jpg",
            pm: "NO.12",
            tm: "青谷子",
            js: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
            pm1: 12,
            fl: "言情",
            zz:"xxx"
        }]
        return dateList
    }
    getxiangxiList() {
        let xiangxiList = [{
            tm: "大主宰",
            img: "/img/小说1/1.jfif",
            zz:"天蚕土豆",
            fl: "玄幻",
            pm: "NO.1",
            pm1: 1,
            js:"大千世界，位面交汇，万族林立，群雄荟萃，一位位来自下位面的天之至尊，在这无尽世界，演绎着令人向往的传奇，追求着那主宰之路。"
        },{
            tm: "一世剑宗",
            img: "/img/小说1/2.jfif",
            zz:"xxxx",
            fl: "仙侠",
            pm: "NO.2",
            pm1: 2,
            js:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
        },{
            tm: "地球超能",
            img: "/img/小说1/3.jfif",
            zz:"xxxx",
            fl: "都市",
            pm: "NO.3",
            pm1: 3,
            js:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
        },{
            tm: "斗罗大陆",
            img: "/img/小说1/4.jfif",
            zz:"唐家三少",
            fl: "玄幻",
            pm: "NO.4",
            pm1: 4,
            js:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
        },{
            tm: "将夜",
            img: "/img/小说1/5.jfif",
            zz:"xxxx",
            fl: "玄幻",
            pm: "NO.5",
            pm1: 5,
            js:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
        }, {
            img: "/img/小说/6.jpg",
            pm: "NO.6",
            tm: "愿我们终会与幸福相见",
            js: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
            pm1: 6,
            fl: "言情",
            zz:"xxx"
        }, {
            img: "/img/小说/7.jpg",
            pm: "NO.7",
            tm: "情来缘浅",
            js: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
            pm1: 7,
            fl: "言情",
            zz:"xxx"
        }, {
            img: "/img/小说/8.jpg",
            pm: "NO.8",
            tm: "白夜行",
            js: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
            pm1: 8,
            fl: "言情",
            zz:"xxx"
        }, {
            img: "/img/小说/9.jpg",
            pm: "NO.9",
            tm: "那些年被我们搁浅的伤",
            js: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
            pm1: 9,
            fl: "悬疑灵异",
            zz:"xxx"
        }, {
            img: "/img/小说/10.jpg",
            pm: "NO.10",
            tm: "那年风吹柳絮",
            js: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
            pm1: 10,
            fl: "言情",
            zz:"xxx"
        }]
        return xiangxiList
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

        return (
            <div>
                <div className={Body2Css.kuang}>
                    <div className={Body2Css.biaoti}>
                        <div></div>
                        <div>大神专区</div>
                    </div>
                    <div className={Body2Css.tj}>
                        <ul className={Body2Css.xiangxi}>
                            {chuanList}
                        </ul>
                        <div className={Body2Css.tuijian}>
                            <div className={Body2Css.tuijian1}>精品小说人气榜</div>
                            {ProductList}

                        </div>
                    </div>

                </div>
            </div>
        )
    }
}