import React from 'react';
import { Link, Route } from 'react-router-dom';
import { Button, Icon } from 'antd';
import { Select } from 'antd';
var XinjianCss = require('./xinjian.css');


const { Option } = Select;

const children = [];
// for (let i = 10; i < 36; i++) {
//     children.push(<Option key="a11">a11</Option>);
// }
children.push(<Option key="玄幻">玄幻</Option>)
children.push(<Option key="仙侠">仙侠</Option>)
children.push(<Option key="都市">都市</Option>)
children.push(<Option key="奇幻">奇幻</Option>)
children.push(<Option key="奇幻">历史</Option>)
children.push(<Option key="悬疑灵异">悬疑灵异</Option>)
function handleChange(value) {
    console.log(`selected ${value}`);
}

export default class Xinjian extends React.Component {
    render() {
        return (
            <div className={XinjianCss.kuang}>
                <div className={XinjianCss.tou}>
                    <Link to="/writing">
                    <span>作品管理</span>
                    </Link>
                    
                </div>
                <div className={XinjianCss.shezhi}>
                    <div>
                        <img src="/img/小说1/21.png"></img>
                        <span>上传新封面</span>
                    </div>
                    <div className={XinjianCss.shezhi1}>
                        <ul>
                            <li className={XinjianCss.shezhi2}>
                                <em>作品名称：</em>
                                <input></input>
                            </li>
                            <li className={XinjianCss.shezhi2}>
                                <em>作品类型：</em>
                                <Select
                                    mode="multiple"
                                    style={{ width: '100%' }}
                                    placeholder="Please select"
                                    defaultValue={['']}
                                    onChange={handleChange}
                                >
                                    {children}
                                </Select>,
                            </li>
                            <li className={XinjianCss.shezhi2}>
                                <em>作品介绍：</em>
                                <textarea placeholder="20~500个字，修改后1个工作日内审核完毕，审核完毕后7天内不得再次修改

注意：严禁上传任何情色、低俗、涉政等违法违规内容。一旦查实，视情节严重程度全书屏蔽整改起步，直至报警处理。"></textarea>
                            </li>
                        </ul>
                    </div>
                    <div className={XinjianCss.shezhi3}>
                        <Link to="/writing">
                            <Button type="primary">
                                保存
                            </Button>
                        </Link>

                    </div>
                </div>

            </div>
        )
    }
}