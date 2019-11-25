import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../z-header/z-header'
import ZHeader from '../z-header/z-header';


export default class HomePage extends React.Component {
    render() {
        return (
            <div>
                <ZHeader />
                
            </div>
        )
    }
}