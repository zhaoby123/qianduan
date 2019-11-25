import React from 'react';
import { Link } from 'react-router-dom';
var TubiaoCss = require('./tubiao.css')





export default class Tubiao extends React.Component {

    render() {
        console.log(this.props.product)
        return (

            <dd>
                <Link to={{
                pathname: this.props.product.lj
            }}>
                    <div className={TubiaoCss.liebiao1}>
                        <div>
                            <div></div>
                            <img src={this.props.product.img}></img>
                        </div>
                        <span>{this.props.product.name}</span>

                    </div>
                </Link>
            </dd>
        )
    }
}