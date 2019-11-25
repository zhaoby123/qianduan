import React from 'react';
import { Link, Route } from 'react-router-dom';
import { Button, Icon } from 'antd';
import Caogao from './caogao/caogao'
import Yifa from './yifa/yifa';
import Shezhi from './shezhi/shezhi';
var Writing2Css = require('./writing2.css')
export default class Writing2 extends React.Component {
    render() {
        return (
            <div className={Writing2Css.kuang}>
                <div className={Writing2Css.tou}>
                    <Link to="/writing">
                        <span>作品管理</span>
                    </Link>

                    <em></em>
                    <span>取名要头炸</span>
                </div>
                <Route path="/writing/writing2" exact component={Caogao}></Route>
                <Route path="/writing/writing2/yifa" component={Yifa}></Route>
                <Route path="/writing/writing2/shezhi" component={Shezhi}></Route>
            </div>
        )
    }
}