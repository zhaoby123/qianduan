import React,{Component} from 'react';
class PostItem extends Component{
    render() {
        const { authorname,bookname,introduce,type} = this.props;
        return (
            <div>
                <div>
                    作者名字：{authorname}
                </div>
                <div>
                    书名：{bookname}
                </div>
                <div>
                    简介：{introduce}
                </div>
                <div>
                    分类：{type}
                </div>
            </div>
        );
    }
}
export default PostItem;
