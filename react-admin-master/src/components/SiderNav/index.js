import React from 'react'
import CustomMenu from "../CustomMenu/index";

const menus = [
  {
    title: '小书库◆管理端',
    icon: 'home',
    key: '/home'
  },
  {
    title: '用户管理',
    icon: 'user',
    key: '/home/general',
    subs: [
      { key: '/home/general/button', title: '普通用户', icon: '', },
      { key: '/home/general/icon', title: '黑名单用户', icon: '', },
    ]
  },
  {
    title: '图书管理',
    icon: 'book',
    key: '/home/navigation',
    subs: [
      { key: '/home/navigation/dropdown', title: 'TOP6热书&轮播图', icon: '' },
      { key: '/home/navigation/menu', title: '已上架书籍', icon: '' },
      { key: '/home/navigation/steps', title: '未上架书籍', icon: '' },
    ]
  },
  {
    title: '评论管理',
    icon: 'message',
    key: '/home/entry',
    subs: [
      { key: '/home/entry/form/basic-form', title: '所有评论', icon: '' },
      { key: '/home/entry/form/step-form', title: '被举报的评论', icon: '' },
    ]
  },
  {
    title: '写书管理',
    icon: 'edit',
    key: '/home/display',
    subs: [
      { key: '/home/display/carousel', title: '待审核的图书', icon: '' },
    ]
  },
  {
    title: '娱乐',
    icon: 'bulb',
    key: '/home/other',
    subs: [
      { key: '/home/other/springText', title: '娱乐大师', icon: '' },
    ]
  },
  {
    title: '关于',
    icon: 'info-circle-o',
    key: '/home/about'
  }
]


class SiderNav extends React.Component {
  render() {

    return (
      <div style={{ height: '100vh', overflowY: 'scroll' }}>
        <div style={styles.logo}></div>
        <CustomMenu menus={menus} />
      </div>
    )
  }
}

const styles = {
  logo: {
    height: '32px',
    background: 'rgba(255, 255, 255, .2)',
    margin: '16px'
  }
}

export default SiderNav