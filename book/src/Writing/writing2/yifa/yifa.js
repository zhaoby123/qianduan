import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { Button, Icon } from 'antd';
import LEdit from 'wangeditor';
var YifaoCss = require('./yifa.css')
export default class Yifa extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editorContent: ''
        };
        this.textAreaValue = this.textAreaValue.bind(this);
    }
    componentDidMount() {
        const elemMenu = this.refs.editorElemMenu;
        const elemBody = this.refs.editorElemBody;
        const editor = new LEdit(elemMenu, elemBody)
        editor.customConfig.onchange = html => {
            this.setState({
                editorContent: editor.txt.html()
            })
        }
        editor.customConfig.menus = [
            'head',  
            'bold',  
            'fontSize',  
            'fontName',  
            'italic',  
            'underline', 
            'strikeThrough', 
            'foreColor',  
            'backColor',  
            'link',  
            'list',  
            'justify',  
            'quote',  
            'emoticon',  
            'image',  
            'table',  
            'video',  
            'code',  
            'undo',  
            'redo'  
        ]
        editor.customConfig.uploadImgShowBase64 = true
        editor.create()
    };
    textAreaValue() {
        console.log('编辑器data：', this.state.editorContent)
    }

    render() {
        return (
            <div className={YifaoCss.kuang}>
                <div className={YifaoCss.zhuan}>
                    <div className={YifaoCss.zhuan1}>
                        <span>
                            <Link to="/writing/writing2/shezhi">
                                作品设置
                            </Link>
                        </span>
                        <span>
                            <Link to="/writing/writing2">
                                草稿箱
                            </Link>
                        </span>
                        <span>
                            <Link to="/writing/writing2/yifa">
                                已发布章节
                            </Link>
                        </span>
                    </div>
                    <div className={YifaoCss.zhuan2}>
                        <Link to="/writing/writing2">
                            <Button type="primary">
                                <Icon type="plus" />
                                <span>新建章节</span>
                            </Button>
                        </Link>
                    </div>

                </div>
                <div>
                    <div className={YifaoCss.xie1}>
                        <div>
                            <p>
                                共0章
                            </p>
                        </div>
                        <div>

                        </div>
                    </div>
                    <div className={YifaoCss.xie2}>
                        <div>
                            <Button type="primary">修改</Button>
                            <Button>删除</Button>

                        </div>
                        <div>
                            <input placeholder="此处输入章节号与章节名。示例：“第十章 天降奇缘”" />
                            <div className="shop">
                                <div className="text-area" >
                                    <div ref="editorElemMenu"
                                        style={{ backgroundColor: '#f1f1f1', border: "1px solid #ccc" }}
                                        className="editorElem-menu">
                                    </div>
                                    <div
                                        style={{
                                            padding: "0 10px",
                                            overflowY: "scroll",
                                            height: 300,
                                            border: "1px solid #ccc",
                                            borderTop: "none"
                                        }}
                                        ref="editorElemBody" className="editorElem-body">

                                    </div>
                                </div>
                                <div onClick={this.textAreaValue}>点击我获取值啊</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}