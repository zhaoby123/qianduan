import React from 'react';
import { Link } from 'react-router-dom';
var LunboCss = require('./lunbo.css')





export default class Lunbo extends React.Component {

    render() {
        console.log(this.props.product)
        return (
            <Link to={{
                pathname: "/homepage/xiaoshuo", state: {
                    tm: this.props.product.tm,
                    img: this.props.product.img,
                    zz: this.props.product.zz,
                    js: this.props.product.js,
                    fl:this.props.product.fl
                }
            }}>
                <img src={this.props.product.img1} className={LunboCss.tu}></img>
            </Link>

        )
    }
}