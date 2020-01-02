import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Jiemian from './jiemian/jiemian';
import Xtuijian from './xtuijian/xtuijian';
var Sousuo1Css = require('./sousuo1.css')


export default class Sousuo1 extends React.Component {
    getWanbenList() {
        let wanebnList = [{
            tm: "大主宰",
            img: "/img/no1/1.jfif",
            zz:"天蚕土豆",
            fl:"玄幻",
            js:"大千世界，位面交汇，万族林立，群雄荟萃，一位位来自下位面的天之至尊，在这无尽世界，演绎着令人向往的传奇，追求着那主宰之路。"
        },{
            tm: "一世剑宗",
            img: "/img/no1/2.jfif",
            zz:"xxxx",
            fl:"玄幻",
            js:"如果牧尘是顺利的通过了那“灵路”的历练，获得进入“五大院”的资格，那名气自然是能够压过柳慕白，但可惜的是，他不知道怎么回事竟然被驱逐出来了。"
        },{
            tm: "地球超能",
            img: "/img/no1/3.jfif",
            zz:"xxxx",
            fl:"都市",
            js:"如果牧尘是顺利的通过了那“灵路”的历练，获得进入“五大院”的资格，那名气自然是能够压过柳慕白，但可惜的是，他不知道怎么回事竟然被驱逐出来了。"
        },{
            tm: "斗罗大陆",
            img: "/img/no1/4.jfif",
            zz:"唐家三少",
            fl:"玄幻",
            js:"如果牧尘是顺利的通过了那“灵路”的历练，获得进入“五大院”的资格，那名气自然是能够压过柳慕白，但可惜的是，他不知道怎么回事竟然被驱逐出来了。"
        },{
            tm: "将夜",
            img: "/img/no1/5.jfif",
            zz:"xxxx",
            fl:"玄幻",
            js:"如果牧尘是顺利的通过了那“灵路”的历练，获得进入“五大院”的资格，那名气自然是能够压过柳慕白，但可惜的是，他不知道怎么回事竟然被驱逐出来了。"
        },{
            tm: "武极天下",
            img: "/img/no1/6.jfif",
            zz:"xxxx",
            fl:"玄幻",
            js:"如果牧尘是顺利的通过了那“灵路”的历练，获得进入“五大院”的资格，那名气自然是能够压过柳慕白，但可惜的是，他不知道怎么回事竟然被驱逐出来了。"
        },{
            tm: "角临",
            img: "/img/no1/7.jfif",
            zz:"xxxx",
            fl:"玄幻",
            js:"如果牧尘是顺利的通过了那“灵路”的历练，获得进入“五大院”的资格，那名气自然是能够压过柳慕白，但可惜的是，他不知道怎么回事竟然被驱逐出来了。"
        },{
            tm: "史上最牛宗门",
            img: "/img/no1/8.jfif",
            zz:"xxxx",
            fl:"玄幻",
            js:"如果牧尘是顺利的通过了那“灵路”的历练，获得进入“五大院”的资格，那名气自然是能够压过柳慕白，但可惜的是，他不知道怎么回事竟然被驱逐出来了。"
        },{
            tm: "美漫世界当宅男",
            img: "/img/no1/9.jfif",
            zz:"xxxx",
            fl:"奇幻",
            js:"如果牧尘是顺利的通过了那“灵路”的历练，获得进入“五大院”的资格，那名气自然是能够压过柳慕白，但可惜的是，他不知道怎么回事竟然被驱逐出来了。"
        },{
            tm: "妖界",
            img: "/img/no1/10.jpg",
            zz:"木子摇",
            fl:"玄幻",
            js:"如果牧尘是顺利的通过了那“灵路”的历练，获得进入“五大院”的资格，那名气自然是能够压过柳慕白，但可惜的是，他不知道怎么回事竟然被驱逐出来了。"
        },]
        return wanebnList
    }
    render(){
        let wanbenList = this.getWanbenList();
        let WanbenList = wanbenList.map((item, i) => (
            <Jiemian product={item}></Jiemian>
        ))
        let WanList = wanbenList.map((item, i) => (
            <Xtuijian product={item}></Xtuijian>
        ))
        return(
            <div className={Sousuo1Css.kuang}>
                <div className={Sousuo1Css.jiemian}>
                    {WanbenList}
                </div>
                <div className={Sousuo1Css.tuijian}>
                    <h3>本周强推</h3>
                    {WanList}
                </div>
            </div>
        )
    }
}