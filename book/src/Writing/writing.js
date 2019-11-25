import React from 'react';
import ZHeader from '../z-header/z-header';
import Writing1 from './writing1/writing1';
import Writing2 from './writing2/writing2';
import { Link, Route, Switch } from 'react-router-dom';
import Xinjian from './xinjian/xinjian';
var WritingCss = require('./writing.css')
export default class Writing extends React.Component {
    render() {
        return (
            <div>
                <ZHeader />
                <div className={WritingCss.kuang}>
                    <div className={WritingCss.header1}>
                        <span>阅读</span>
                        <span>·</span>
                        <span>作家专区</span>
                    </div>
                    <Switch>
                        <Route path="/writing" exact component={Writing1}></Route>
                        <Route path="/writing/writing2" component={Writing2}></Route>
                        <Route path="/writing/xinjian"  component={Xinjian}></Route>
                    </Switch>

                </div>
            </div>
        )
    }
}