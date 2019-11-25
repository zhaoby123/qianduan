import React from 'react';
import { Link, Route } from 'react-router-dom';
import { Button } from 'antd';

export default class Bs extends React.Component {
    render() {
        console.log(this.props.product)
        return (
            <tr>
                <th>
                    <input type="checkbox"></input>
                </th>
                <th>
                    <span>
                        <Link>【{this.props.product.fl}】</Link>
                        <Link>{this.props.product.tm}</Link>
                    </span>
                </th>
                <th>{this.props.product.zz}</th>
                <th>
                    <Button type="primary">开始阅读</Button>
                    <Button type="danger">删除</Button>
                </th>
            </tr>
        )
    }
}