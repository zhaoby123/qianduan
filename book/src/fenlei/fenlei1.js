import React from 'react';
import Tubiao from '../zhuye/Body1/tubiao/tubiao'
import Wanben from './wanben/wanben'

var FenleiCss = require('./fenlei.css');




export default class Fenlei1 extends React.Component {
    constructor(props){
        super(props)
        
    }
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
    getNsList() {
        let nsList = [{
            img: "/img/no/1.jpeg",
            pm: "NO.1",
            tm: "青春有泪",
            zz: "xxx",
            fl: "轻小说",
            js: "柳慕白这个名字一出来，就连这些天届的学长们神情都是顿了顿，显然是感受到不小的压力。",
            pm1: 1
        }, {
            img: "/img/no/2.jpg",
            pm: "NO.2",
            tm: "L'ESPERIT del LLOP",
            zz: "xxx",
            fl: "轻小说",
            js: "柳慕白这个名字一出来，就连这些天届的学长们神情都是顿了顿，显然是感受到不小的压力。",
            pm1: 2
        }, {
            img: "/img/no/3.jpg",
            pm: "NO.3",
            tm: "三里湾",
            zz: "xxx",
            fl: "轻小说",
            js: "柳慕白这个名字一出来，就连这些天届的学长们神情都是顿了顿，显然是感受到不小的压力。",
            pm1: 3
        }, {
            img: "/img/no/4.jpg",
            pm: "NO.4",
            tm: "夜倾天下·帝妃太嚣张",
            zz: "xxx",
            fl: "轻小说",
            js: "柳慕白这个名字一出来，就连这些天届的学长们神情都是顿了顿，显然是感受到不小的压力。",
            pm1: 4
        }, {
            img: "/img/no/5.jpg",
            pm: "NO.5",
            tm: "蜀秀",
            zz: "xxx",
            fl: "轻小说",
            js: "柳慕白这个名字一出来，就连这些天届的学长们神情都是顿了顿，显然是感受到不小的压力。",
            pm1: 5
        }, {
            img: "/img/no/6.jpg",
            pm: "NO.6",
            tm: "愿我们终会与幸福相见",
            zz: "xxx",
            fl: "轻小说",
            js: "柳慕白这个名字一出来，就连这些天届的学长们神情都是顿了顿，显然是感受到不小的压力。",
            pm1: 6
        }, {
            img: "/img/no/7.jpg",
            pm: "NO.7",
            tm: "情来缘浅",
            zz: "xxx",
            fl: "轻小说",
            js: "柳慕白这个名字一出来，就连这些天届的学长们神情都是顿了顿，显然是感受到不小的压力。",
            pm1: 7
        }, {
            img: "/img/no/8.jpg",
            pm: "NO.8",
            tm: "白夜行",
            zz: "xxx",
            fl: "轻小说",
            js: "柳慕白这个名字一出来，就连这些天届的学长们神情都是顿了顿，显然是感受到不小的压力。",
            pm1: 8
        }, {
            img: "/img/no/9.jpg",
            pm: "NO.9",
            tm: "那些年被我们搁浅的伤",
            zz: "xxx",
            fl: "轻小说",
            js: "柳慕白这个名字一出来，就连这些天届的学长们神情都是顿了顿，显然是感受到不小的压力。",
            pm1: 9
        }, {
            img: "/img/no/10.jpg",
            pm: "NO.10",
            tm: "那年风吹柳絮",
            zz: "xxx",
            fl: "轻小说",
            js: "柳慕白这个名字一出来，就连这些天届的学长们神情都是顿了顿，显然是感受到不小的压力。",
            pm1: 10
        }, {
            img: "/img/no/11.jpg",
            pm: "NO.11",
            tm: "恋花",
            zz: "xxx",
            fl: "轻小说",
            js: "柳慕白这个名字一出来，就连这些天届的学长们神情都是顿了顿，显然是感受到不小的压力。",
            pm1: 11
        }, {
            img: "/img/no/12.jpg",
            pm: "NO.12",
            tm: "青谷子",
            zz: "xxx",
            fl: "轻小说",
            js: "柳慕白这个名字一出来，就连这些天届的学长们神情都是顿了顿，显然是感受到不小的压力。",
            pm1: 12
        },]
        return nsList
    }

    render(){
        console.log(this.props.location.state)
        let dateList = this.getProductList();
        let ProductList = dateList.map((item, i) => (
            <Tubiao product={item} onclick></Tubiao>
        ))
        let nsList = this.getNsList();
        let NsList = nsList.map((item, i) => (
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
                        {NsList}
                    </div>
                </div>
            </div>
        )
    }
}