import React from 'react'
import { Link, Route } from 'react-router-dom'
import MenulistPage from './Menulist/menulist';
import { Layout, Menu, Icon } from 'antd';
import Tuijianlist from './Tuijianlist/tuijianlist';
import Xiaoshuo from './Xiaoshuo/xiaoshuo';
import Tuijianlist1 from './Tuijianlist/tuijianlist1';
import Tuijianlist2 from './Tuijianlist/tuijianlist2';
import Tuijianlist3 from './Tuijianlist/tuijianlist3';
import Tuijianlist4 from './Tuijianlist/tuijianlist4';
import Tuijianlist5 from './Tuijianlist/tuijianlist5';
import Tuijianlist6 from './Tuijianlist/tuijianlist6';
import Tuijianlist7 from './Tuijianlist/tuijianlist7';
import Tuijianlist8 from './Tuijianlist/tuijianlist8';
import Tuijianlist9 from './Tuijianlist/tuijianlist9';

var MenuCSS = require('./menu.css')
let m = 5;
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
export default class MenuPage extends React.Component {
  state = {
    collapsed: false,
    n: 0,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  login = e => {
    m = 1;
    // console.log(m)
  }
  logout() {
    this.setState({
      n: 0
    })
  }
  render() {
    let userProfile = null;
    if (m == 1) {
      userProfile = <div>
        <Menu.Item key="" className={MenuCSS.liebiao}><Link to="/menu/area">地区</Link></Menu.Item>
        {userProfile}
      </div>
      // console.log(m)
      m = 0
    } else {
      console.log(m)
    }
    return (
      <div className={MenuCSS.menu}>

        <div className={MenuCSS.Layout}>
          <Layout style={{ minHeight: '100vh' }} >
            <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
              <div className="logo" />
              <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" width="500px">
                <Menu.Item key="1">
                  <Link to="/menu">
                    <Icon type="pie-chart" />
                    <span>小书库</span></Link>
                </Menu.Item>

                <SubMenu
                  key="sub1"
                  title={
                    <span>
                      <Icon type="user" />
                      <span>推荐榜单</span>
                    </span>
                  }
                >
                  <Menu.Item key=""><Link to="/menu/tuijianlist">轮播图</Link></Menu.Item>
                  <Menu.Item key=""><Link to="/menu/tuijianlist1">大神专区</Link></Menu.Item>
                  <Menu.Item key=""><Link to="/menu/tuijianlist2">精品小说人气榜</Link></Menu.Item>
                  <Menu.Item key=""><Link to="/menu/tuijianlist3">男生专区</Link></Menu.Item>
                  <Menu.Item key=""><Link to="/menu/tuijianlist4">男生专区大图</Link></Menu.Item>
                  <Menu.Item key=""><Link to="/menu/tuijianlist5">男频榜</Link></Menu.Item>
                  <Menu.Item key=""><Link to="/menu/tuijianlist6">女生专区</Link></Menu.Item>
                  <Menu.Item key=""><Link to="/menu/tuijianlist7">女频榜</Link></Menu.Item>
                  <Menu.Item key=""><Link to="/menu/tuijianlist8">本周强推</Link></Menu.Item>
                  <Menu.Item key=""><Link to="/menu/tuijianlist9">完本</Link></Menu.Item>
                </SubMenu>


                <Menu.Item key="10"><Link to="/menu/xiaoshuo">
                  <Icon type="file" />
                  <span>小说</span></Link>
                </Menu.Item>
                <Menu.Item key="13">
                  <Link to="/homepage"><Icon type="file" />
                    <span>退出登录</span></Link>
                </Menu.Item>
              </Menu>

            </Sider>

          </Layout>
        </div>
        <div className={MenuCSS.menu1}>
          <Route path="/menu/tuijianlist" component={Tuijianlist}></Route>
          <Route path="/menu/tuijianlist1" component={Tuijianlist1}></Route>
          <Route path="/menu/tuijianlist2" component={Tuijianlist2}></Route>
          <Route path="/menu/tuijianlist3" component={Tuijianlist3}></Route>
          <Route path="/menu/tuijianlist4" component={Tuijianlist4}></Route>
          <Route path="/menu/tuijianlist5" component={Tuijianlist5}></Route>
          <Route path="/menu/tuijianlist6" component={Tuijianlist6}></Route>
          <Route path="/menu/tuijianlist7" component={Tuijianlist7}></Route>
          <Route path="/menu/tuijianlist8" component={Tuijianlist8}></Route>
          <Route path="/menu/tuijianlist9" component={Tuijianlist9}></Route>
          <Route path="/menu/xiaoshuo" component={Xiaoshuo}></Route>
          <Route path="/menu" exact component={MenulistPage}></Route>
        </div>
      </div>
    )
  }
}