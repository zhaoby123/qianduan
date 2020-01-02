import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Body from '../zhuye/Body/body';
import Xiaoshuo from '../xiaoshuo/xiaoshuo';
import Fenlei from '../fenlei/fenlei';
import Sousuo1 from '../sousuo/sousuo1/sousuo1';
import Fenlei1 from '../fenlei/fenlei1';
import Fenlei2 from '../fenlei/fenlei2';
import Fenlei3 from '../fenlei/fenlei3';
var JHeaderCss = require('./j-header.css')

export default class JHeader extends React.Component {
    constructor(props){
        super(props)
        this.state={
            news:[
                {

                }
            ]
        }
    }

    wb = ()=>{
        let t = this;
        fetch("/Sieve/Wb", {method: 'post'}).then(
            function (res) {
                console.log(res);
                res.json().then(function (data) {
                    console.log(data);
   
                        t.setState({
                            news:data
                        });
                        
                    }
                )
            });
    };
    qbzp = ()=>{
        let t = this;
        fetch("/Sieve/Qbzp", {method: 'post'}).then(
            function (res) {
                console.log(res);
                res.json().then(function (data) {
                    console.log(data);
   
                        t.setState({
                            news:data
                        });
                        
                    }
                )
            });
    };
    ph = ()=>{
        let t = this;
        fetch("/Sieve/Ph", {method: 'post'}).then(
            function (res) {
                console.log(res);
                res.json().then(function (data) {
                    console.log(data);
   
                        t.setState({
                            news:data
                        });
                        
                    }
                )
            });
    };
    render() {
        
        return (
            <div>
                <div className={JHeaderCss.header}>
                    <div className={JHeaderCss.clearfix}>
                        <div className={JHeaderCss.zhongjian}>
                            <span className={JHeaderCss.fix}>作品分类</span>
                            <span className={JHeaderCss.fix}></span>
                            <div className={JHeaderCss.zuopin}>
                                <Link to="/homepage/fenlei">
                                    <div className={JHeaderCss.fix}></div>
                                    <div><div className={JHeaderCss.juzhong1} onClick={this.qbzp}>全部作品</div></div>
                                </Link>
                            </div>


                            <div className={JHeaderCss.zuopin}>
                                <Link to="/homepage/fenlei">
                                    <div className={JHeaderCss.fix}></div>
                                    <div><div className={JHeaderCss.juzhong2} onClick={this.ph}>排行</div></div>
                                </Link>
                            </div>

                            <div className={JHeaderCss.zuopin}>

                                <Link to="/homepage/fenlei3">
                                    <div className={JHeaderCss.fix}></div>
                                    <div><div className={JHeaderCss.juzhong2} onClick={this.wb}>完本</div></div>
                                </Link>
                            </div>
                        </div>
                        <div className={JHeaderCss.fix1}>
                        </div>
                    </div>
                    
                </div>
                <Switch>
                    <Route path="/homepage" exact component={Body}></Route>
                    <Route path="/homepage/xiaoshuo" exact component={Xiaoshuo}></Route>
                    <Route path="/homepage/fenlei" exact component={Fenlei}></Route>
                    <Route path="/homepage/fenlei1" exact component={Fenlei1}></Route>
                    <Route path="/homepage/fenlei2" exact component={Fenlei2}></Route>
                    <Route path="/homepage/fenlei3" exact component={Fenlei3}></Route>
                </Switch>

            </div>
        )
    }
}