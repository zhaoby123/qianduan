import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'antd';
import Tubiao from './tubiao/tubiao'
import Lunbo from './lunbo/lunbo';
var Body1Css = require('./body1.css')





export default class Body1 extends React.Component {
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
    getLunboList() {
        let lunboList = [{
            tm: "大主宰",
            img: "/img/no1/1.jfif",
            img1: "/img/cors/5.jpg",
            zz:"天蚕土豆",
            js:"大千世界，位面交汇，万族林立，群雄荟萃，一位位来自下位面的天之至尊，在这无尽世界，演绎着令人向往的传奇，追求着那主宰之路。",
            fl:"玄幻",
        },{
            tm: "外挂傍身的杂草",
            img:"/img/no1/11.jpg",
            img1: "/img/cors/1.jpg",
            zz:"低调青年",
            js:"大千世界，位面交汇，万族林立，群雄荟萃，一位位来自下位面的天之至尊，在这无尽世界，演绎着令人向往的传奇，追求着那主宰之路。",
            fl:"玄幻",
        },{
            tm: "我的1979",
            img:"/img/no1/12.jpg",
            img1: "/img/cors/2.jpg",
            zz:"争斤论两花花帽",
            js:"大千世界，位面交汇，万族林立，群雄荟萃，一位位来自下位面的天之至尊，在这无尽世界，演绎着令人向往的传奇，追求着那主宰之路。",
            fl:"都市",
        },{
            tm: "寻唐",
            img:"/img/no1/13.jpg",
            img1: "/img/cors/3.jpg",
            zz:"枪手一号",
            js:"大千世界，位面交汇，万族林立，群雄荟萃，一位位来自下位面的天之至尊，在这无尽世界，演绎着令人向往的传奇，追求着那主宰之路。",
            fl:"历史",
        },{
            tm: "回到北宋当大佬",
            img:"/img/no1/14.jpg",
            img1: "/img/cors/4.jpg",
            zz:"祝家大郎",
            js:"大千世界，位面交汇，万族林立，群雄荟萃，一位位来自下位面的天之至尊，在这无尽世界，演绎着令人向往的传奇，追求着那主宰之路。",
            fl:"历史",
        },{
            tm: "恐怖修仙世界",
            img:"/img/no1/15.jpg",
            img1: "/img/cors/0.jfif",
            zz:"龙蛇枝",
            js:"大千世界，位面交汇，万族林立，群雄荟萃，一位位来自下位面的天之至尊，在这无尽世界，演绎着令人向往的传奇，追求着那主宰之路。",
            fl:"恐怖",
        },]
        return lunboList
    }
    render() {
        let dateList = this.getProductList();
        let ProductList = dateList.map((item, i) => (
            <Tubiao product={item}></Tubiao>
        ))
        let lunboList = this.getLunboList();
        let LunboList = lunboList.map((item, i) => (
            <Lunbo product={item}></Lunbo>
        ))
        return (
            <div>
                <div className={Body1Css.kuang}>
                    <div className={Body1Css.liebiao}>
                        <dl>
                            {ProductList}  
                        </dl>
                    </div>

                    <div className={Body1Css.lunbo}>
                        <div className={Body1Css.lunbo1}>

                            <Carousel autoplay>
                                {LunboList}
                            </Carousel>


                        </div>
                        <div>
                            <ul>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}