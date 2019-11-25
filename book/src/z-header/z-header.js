import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Bookshelf from '../bookshelf/bookshelf';
import History from '../History/history';
import Writing from '../Writing/writing';
import News from '../News/news';
import Sousuo from '../sousuo/sousuo'
import Xiaoshuo from '../xiaoshuo/xiaoshuo';
import Sousuo1 from '../sousuo/sousuo1/sousuo1';


var ZHeaderCss = require('./z-header.css')


export default class ZHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            ming : window.localStorage.getItem("m1")
        }
    }
    logout = e=>{
        window.localStorage.removeItem("m1")
        this.setState({
            ming:null
        })
    }
    render() {
        let userProfile = null;
        let shujia = null;
        let xieshu = null;

        if (this.state.ming != null) {
            userProfile = 
            <div className={ZHeaderCss.yonghu}>
                            <Link>{this.state.ming}</Link>
                            <span>|</span>
                            <span onClick={this.logout}>注销</span>
                        </div>
            shujia = <Link to="/homepage/bookshelf">书架</Link>
            xieshu = <Link to="/writing">写书</Link>
            
        } else {
            userProfile = <div className={ZHeaderCss.fix}>
                            <Link to="/landing">登陆</Link>
                            <span>|</span>
                            <Link to="/register">注册</Link>
                        </div>
            shujia = <Link to="/landing">书架</Link>
            xieshu = <Link to="/landing">写书</Link>
        }
        return (
            <div>
                <div className={ZHeaderCss.header}>
                    <div className={ZHeaderCss.clearfix}>

                        {userProfile}
                        <div className={ZHeaderCss.fix1}>
                            <div>
                                <Link to="/homepage">主页</Link>
                                {shujia}

                                {xieshu}
                                {/* <Link to="/homepage/news">消息</Link> */}
                            </div>

                        </div>
                    </div>
                </div>
                <Route path="/homepage" component={Sousuo}></Route>
                <Route path="/homepage/bookshelf" component={Bookshelf}></Route>
                <Route path="/homepage/news" component={News}></Route>
                <Route path="/homepage/sousuo1" component={Sousuo1}></Route>


            </div>
        )
    }
}