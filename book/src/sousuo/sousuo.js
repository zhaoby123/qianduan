import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { Icon } from 'antd';
import JHeader from '../j-header/j-header';
import Sousuo1 from './sousuo1/sousuo1';


var SousuoCss = require('./sousuo.css');




export default class Sousuo extends React.Component {
    render() {
        return (
            <div>
                <div className={SousuoCss.body}>
                    <Link to='/'><div>
                        <div className={SousuoCss.img}></div>
                        <div>小书库</div>
                    </div></Link>
                    <div>
                        <input type="text" placeholder="灵剑山" className={SousuoCss.sousuo1}></input>
                        <Link to="/homepage/sousuo1">
                            <button className={SousuoCss.sousuo}>
                                <Icon type="search" />
                            </button>
                        </Link>

                    </div>

                </div>
                <JHeader />


            </div>
        )
    }
}