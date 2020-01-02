import React from 'react';
import { Link, Route } from 'react-router-dom';
import Tuijian from './tuijian/tuijian';
import Xiangxi from './xiangxi/xiangxi'
var Body2Css = require('./body2.css')

export default class Body2 extends React.Component {
    getProductList() {
        let dateList = [{
            tm: "大主宰",
            img: "/img/no1/1.jfif",
            zz:"天蚕土豆",
            fl: "玄幻",
            pm: "NO.1",
            pm1: 1,
            js:"大千世界，位面交汇，万族林立，群雄荟萃，一位位来自下位面的天之至尊，在这无尽世界，演绎着令人向往的传奇，追求着那主宰之路。"
        },{
            tm: "一世剑宗",
            img: "/img/no1/2.jfif",
            zz:"xxxx",
            fl: "仙侠",
            pm: "NO.2",
            pm1: 2,
            js:"不论从样貌还是实力或者背景来说，这都是一个在北灵院中随时能够引来一些少女发花痴的名字。"
        },{
            tm: "地球超能",
            img: "/img/no1/3.jfif",
            zz:"xxxx",
            fl: "都市",
            pm: "NO.3",
            pm1: 3,
            js:"不论从样貌还是实力或者背景来说，这都是一个在北灵院中随时能够引来一些少女发花痴的名字。"
        },{
            tm: "斗罗大陆",
            img: "/img/no1/4.jfif",
            zz:"唐家三少",
            fl: "玄幻",
            pm: "NO.4",
            pm1: 4,
            js:"不论从样貌还是实力或者背景来说，这都是一个在北灵院中随时能够引来一些少女发花痴的名字。"
        },{
            tm: "将夜",
            img: "/img/no1/5.jfif",
            zz:"xxxx",
            fl: "玄幻",
            pm: "NO.5",
            pm1: 5,
            js:"不论从样貌还是实力或者背景来说，这都是一个在北灵院中随时能够引来一些少女发花痴的名字。"
        }, {
            img: "/img/no/6.jpg",
            pm: "NO.6",
            tm: "愿我们终会与幸福相见",
            js: "不论从样貌还是实力或者背景来说，这都是一个在北灵院中随时能够引来一些少女发花痴的名字。",
            pm1: 6,
            fl: "言情",
            zz:"xxx"
        }, {
            img: "/img/no/7.jpg",
            pm: "NO.7",
            tm: "情来缘浅",
            js: "不论从样貌还是实力或者背景来说，这都是一个在北灵院中随时能够引来一些少女发花痴的名字。",
            pm1: 7,
            fl: "言情",
            zz:"xxx"
        }, {
            img: "/img/no/8.jpg",
            pm: "NO.8",
            tm: "白夜行",
            js: "不论从样貌还是实力或者背景来说，这都是一个在北灵院中随时能够引来一些少女发花痴的名字。",
            pm1: 8,
            fl: "言情",
            zz:"xxx"
        }, {
            img: "/img/no/9.jpg",
            pm: "NO.9",
            tm: "那些年被我们搁浅的伤",
            js: "不论从样貌还是实力或者背景来说，这都是一个在北灵院中随时能够引来一些少女发花痴的名字。",
            pm1: 9,
            fl: "悬疑灵异",
            zz:"xxx"
        }, {
            img: "/img/no/10.jpg",
            pm: "NO.10",
            tm: "那年风吹柳絮",
            js: "不论从样貌还是实力或者背景来说，这都是一个在北灵院中随时能够引来一些少女发花痴的名字。",
            pm1: 10,
            fl: "言情",
            zz:"xxx"
        }, {
            img: "/img/no/11.jpg",
            pm: "NO.11",
            tm: "恋花",
            js: "不论从样貌还是实力或者背景来说，这都是一个在北灵院中随时能够引来一些少女发花痴的名字。",
            pm1: 11,
            fl: "言情",
            zz:"xxx"
        }, {
            img: "/img/no/12.jpg",
            pm: "NO.12",
            tm: "青谷子",
            js: "不论从样貌还是实力或者背景来说，这都是一个在北灵院中随时能够引来一些少女发花痴的名字。",
            pm1: 12,
            fl: "言情",
            zz:"xxx"
        }]
        return dateList
    }
    getxiangxiList() {
        let xiangxiList = [{
            tm: "大主宰",
            img: "/img/no1/1.jfif",
            zz:"天蚕土豆",
            fl: "玄幻",
            pm: "NO.1",
            pm1: 1,
            js:"大千世界，位面交汇，万族林立，群雄荟萃，一位位来自下位面的天之至尊，在这无尽世界，演绎着令人向往的传奇，追求着那主宰之路。"
        },{
            tm: "一世剑宗",
            img: "/img/no1/2.jfif",
            zz:"xxxx",
            fl: "仙侠",
            pm: "NO.2",
            pm1: 2,
            js:"在这群人当中，有着一名红衣女孩，她身段修长，肌肤如雪，一张美丽的瓜子脸颊看上去显得有些妩媚，她慵懒的斜靠着栏杆，狭长的美目望向空地上的对恃，然后目光停留在那名为牧尘的少年身上，似是饶有兴致。"
        },{
            tm: "地球超能",
            img: "/img/no1/3.jfif",
            zz:"xxxx",
            fl: "都市",
            pm: "NO.3",
            pm1: 3,
            js:"在这群人当中，有着一名红衣女孩，她身段修长，肌肤如雪，一张美丽的瓜子脸颊看上去显得有些妩媚，她慵懒的斜靠着栏杆，狭长的美目望向空地上的对恃，然后目光停留在那名为牧尘的少年身上，似是饶有兴致。"
        },{
            tm: "斗罗大陆",
            img: "/img/no1/4.jfif",
            zz:"唐家三少",
            fl: "玄幻",
            pm: "NO.4",
            pm1: 4,
            js:"在这群人当中，有着一名红衣女孩，她身段修长，肌肤如雪，一张美丽的瓜子脸颊看上去显得有些妩媚，她慵懒的斜靠着栏杆，狭长的美目望向空地上的对恃，然后目光停留在那名为牧尘的少年身上，似是饶有兴致。"
        },{
            tm: "将夜",
            img: "/img/no1/5.jfif",
            zz:"xxxx",
            fl: "玄幻",
            pm: "NO.5",
            pm1: 5,
            js:"在这群人当中，有着一名红衣女孩，她身段修长，肌肤如雪，一张美丽的瓜子脸颊看上去显得有些妩媚，她慵懒的斜靠着栏杆，狭长的美目望向空地上的对恃，然后目光停留在那名为牧尘的少年身上，似是饶有兴致。"
        }, {
            img: "/img/no/6.jpg",
            pm: "NO.6",
            tm: "愿我们终会与幸福相见",
            js: "而在苏凌他们面色因此变化时，那高台上的天届学长们也是居高临下的笑望着他们，彼此交谈。",
            pm1: 6,
            fl: "言情",
            zz:"xxx"
        }, {
            img: "/img/no/7.jpg",
            pm: "NO.7",
            tm: "情来缘浅",
            js: "而在苏凌他们面色因此变化时，那高台上的天届学长们也是居高临下的笑望着他们，彼此交谈。",
            pm1: 7,
            fl: "言情",
            zz:"xxx"
        }, {
            img: "/img/no/8.jpg",
            pm: "NO.8",
            tm: "白夜行",
            js: "而在苏凌他们面色因此变化时，那高台上的天届学长们也是居高临下的笑望着他们，彼此交谈。",
            pm1: 8,
            fl: "言情",
            zz:"xxx"
        }, {
            img: "/img/no/9.jpg",
            pm: "NO.9",
            tm: "那些年被我们搁浅的伤",
            js: "而在苏凌他们面色因此变化时，那高台上的天届学长们也是居高临下的笑望着他们，彼此交谈。",
            pm1: 9,
            fl: "悬疑灵异",
            zz:"xxx"
        }, {
            img: "/img/no/10.jpg",
            pm: "NO.10",
            tm: "那年风吹柳絮",
            js: "而在苏凌他们面色因此变化时，那高台上的天届学长们也是居高临下的笑望着他们，彼此交谈。",
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
                            <div className={Body2Css.tuijian1}>精品no人气榜</div>
                            {ProductList}

                        </div>
                    </div>

                </div>
            </div>
        )
    }
}