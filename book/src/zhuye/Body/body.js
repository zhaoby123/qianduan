import React from 'react';
import Body1 from '../Body1/body1';
import Body2 from '../Body2/body2';
import Body3 from '../Body3/body3';
import Body4 from '../Body4/body4';



export default class Body extends React.Component {
    render(){
        return(
            <div>
                <Body1/>
                <Body2/>
                <Body3/>
                <Body4/>
            </div>
        )
    }
}