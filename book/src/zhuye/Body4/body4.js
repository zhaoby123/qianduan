import React from 'react';
import { Link, Route } from 'react-router-dom';
import Tuijian from './tuijian/tuijian';
import Xiangxi from './xiangxi/xiangxi'
var Body4Css = require('./body4.css')

export default class Body4 extends React.Component {
    getProductList() {
        let dateList = [{
            img: "/img/no/1.jpeg",
            pm: "NO.1",
            tm: "青春有泪",
            zz: "xxx",
            fl: "轻小说",
            js: "“呵呵，现在的东院真是越来越得瑟了，以为出了一个牧尘就真能跟我们西院叫板不成？”",
            pm1: 1
        }, {
            img: "/img/no/2.jpg",
            pm: "NO.2",
            tm: "L'ESPERIT del LLOP",
            zz: "xxx",
            fl: "轻小说",
            js: "“呵呵，现在的东院真是越来越得瑟了，以为出了一个牧尘就真能跟我们西院叫板不成？”",
            pm1: 2
        }, {
            img: "/img/no/3.jpg",
            pm: "NO.3",
            tm: "三里湾",
            zz: "xxx",
            fl: "轻小说",
            js: "“呵呵，现在的东院真是越来越得瑟了，以为出了一个牧尘就真能跟我们西院叫板不成？”",
            pm1: 3
        }, {
            img: "/img/no/4.jpg",
            pm: "NO.4",
            tm: "夜倾天下·帝妃太嚣张",
            zz: "xxx",
            fl: "轻小说",
            js: "“呵呵，现在的东院真是越来越得瑟了，以为出了一个牧尘就真能跟我们西院叫板不成？”",
            pm1: 4
        }, {
            img: "/img/no/5.jpg",
            pm: "NO.5",
            tm: "蜀秀",
            zz: "xxx",
            fl: "轻小说",
            js: "“呵呵，现在的东院真是越来越得瑟了，以为出了一个牧尘就真能跟我们西院叫板不成？”",
            pm1: 5
        }, {
            img: "/img/no/6.jpg",
            pm: "NO.6",
            tm: "愿我们终会与幸福相见",
            zz: "xxx",
            fl: "轻小说",
            js: "“呵呵，现在的东院真是越来越得瑟了，以为出了一个牧尘就真能跟我们西院叫板不成？”",
            pm1: 6
        }, {
            img: "/img/no/7.jpg",
            pm: "NO.7",
            tm: "情来缘浅",
            zz: "xxx",
            fl: "轻小说",
            js: "“呵呵，现在的东院真是越来越得瑟了，以为出了一个牧尘就真能跟我们西院叫板不成？”",
            pm1: 7
        }, {
            img: "/img/no/8.jpg",
            pm: "NO.8",
            tm: "白夜行",
            zz: "xxx",
            fl: "轻小说",
            js: "“呵呵，现在的东院真是越来越得瑟了，以为出了一个牧尘就真能跟我们西院叫板不成？”",
            pm1: 8
        }, {
            img: "/img/no/9.jpg",
            pm: "NO.9",
            tm: "那些年被我们搁浅的伤",
            zz: "xxx",
            fl: "轻小说",
            js: "“呵呵，现在的东院真是越来越得瑟了，以为出了一个牧尘就真能跟我们西院叫板不成？”",
            pm1: 9
        }, {
            img: "/img/no/10.jpg",
            pm: "NO.10",
            tm: "那年风吹柳絮",
            zz: "xxx",
            fl: "轻小说",
            js: "“呵呵，现在的东院真是越来越得瑟了，以为出了一个牧尘就真能跟我们西院叫板不成？”",
            pm1: 10
        }, {
            img: "/img/no/11.jpg",
            pm: "NO.11",
            tm: "恋花",
            zz: "xxx",
            fl: "轻小说",
            js: "“呵呵，现在的东院真是越来越得瑟了，以为出了一个牧尘就真能跟我们西院叫板不成？”",
            pm1: 11
        }, {
            img: "/img/no/12.jpg",
            pm: "NO.12",
            tm: "青谷子",
            zz: "xxx",
            fl: "轻小说",
            js: "“呵呵，现在的东院真是越来越得瑟了，以为出了一个牧尘就真能跟我们西院叫板不成？”",
            pm1: 12
        }]
        return dateList
    }
    getxiangxiList() {
        let xiangxiList = [{
            img: "/img/no/1.jpeg",
            tm: "青春有泪",
            zz: "xxx",
            fl: "轻小说",
            js: "“呵呵，现在的东院真是越来越得瑟了，以为出了一个牧尘就真能跟我们西院叫板不成？”"
        }, {
            img: "/img/no/2.jpg",
            tm: "L'ESPERIT del LLOP",
            zz: "xxx",
            fl: "轻小说",
            js: "“呵呵，现在的东院真是越来越得瑟了，以为出了一个牧尘就真能跟我们西院叫板不成？”"
        }, {
            img: "/img/no/3.jpg",
            tm: "三里湾",
            zz: "xxx",
            fl: "轻小说",
            js: "“呵呵，现在的东院真是越来越得瑟了，以为出了一个牧尘就真能跟我们西院叫板不成？”"
        }, {
            img: "/img/no/4.jpg",
            tm: "夜倾天下·帝妃太嚣张",
            zz: "xxx",
            fl: "轻小说",
            js: "“呵呵，现在的东院真是越来越得瑟了，以为出了一个牧尘就真能跟我们西院叫板不成？”"
        }, {
            img: "/img/no/5.jpg",
            tm: "蜀秀",
            zz: "xxx",
            fl: "轻小说",
            js: "“呵呵，现在的东院真是越来越得瑟了，以为出了一个牧尘就真能跟我们西院叫板不成？”"
        }, {
            img: "/img/no/6.jpg",
            tm: "愿我们终会与幸福相见",
            zz: "xxx",
            fl: "轻小说",
            js: "“呵呵，现在的东院真是越来越得瑟了，以为出了一个牧尘就真能跟我们西院叫板不成？”"
        }, {
            img: "/img/no/7.jpg",
            tm: "情来缘浅",
            zz: "xxx",
            fl: "轻小说",
            js: "“呵呵，现在的东院真是越来越得瑟了，以为出了一个牧尘就真能跟我们西院叫板不成？”"
        }, {
            img: "/img/no/8.jpg",
            tm: "白夜行",
            zz: "xxx",
            fl: "轻小说",
            js: "“呵呵，现在的东院真是越来越得瑟了，以为出了一个牧尘就真能跟我们西院叫板不成？”"
        }, {
            img: "/img/no/9.jpg",
            tm: "那些年被我们搁浅的伤",
            zz: "xxx",
            fl: "轻小说",
            js: "“呵呵，现在的东院真是越来越得瑟了，以为出了一个牧尘就真能跟我们西院叫板不成？”"
        }, {
            img: "/img/no/10.jpg",
            tm: "那年风吹柳絮",
            zz: "xxx",
            fl: "轻小说",
            js: "“呵呵，现在的东院真是越来越得瑟了，以为出了一个牧尘就真能跟我们西院叫板不成？”"
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
                <div className={Body4Css.kuang}>
                    <div className={Body4Css.biaoti}>
                        <div></div>
                        <div>女生专区</div>
                    </div>
                    <div className={Body4Css.tj}>
                        <ul className={Body4Css.xiangxi}>
                            {chuanList}
                        </ul>
                        <div className={Body4Css.tuijian}>
                            <div className={Body4Css.tuijian1}>女频榜</div>
                            {ProductList}

                        </div>
                    </div>

                </div>
            </div>
        )
    }
}