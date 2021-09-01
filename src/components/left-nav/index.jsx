import React, {Component} from "react";
import {Link} from 'react-router-dom'
import { Menu } from 'antd';
import {
    PieChartOutlined,
    DesktopOutlined,
} from '@ant-design/icons';
import './left-nav.css'
const { SubMenu } = Menu;
export default class LeftNav extends Component{

    render() {
        return(
            <div className='left-nav'>
                <div className='left-nav-header'>
                    后台管理
                </div>
                <div className='left-nav-menu'>
                    <Menu
                        // defaultSelectedKeys={['1']}
                        // defaultOpenKeys={['sub1']}
                        mode="inline"
                        theme="dark"
                        // inlineCollapsed={this.state.collapsed}
                    >
                        <Menu.Item key="1" icon={<PieChartOutlined />} >
                                <Link to='/home'>首页</Link>
                        </Menu.Item>
                        <SubMenu key="sub1" icon={<DesktopOutlined />} title="商品">
                            <Menu.Item key="2"> <Link to='/category'>品类管理</Link> </Menu.Item>
                            <Menu.Item key="3"> <Link to='/product'>商品管理</Link> </Menu.Item>
                        </SubMenu>
                        <Menu.Item key="4" icon={<PieChartOutlined />}>
                            <Link to='/user'>用户管理</Link>
                        </Menu.Item>
                        <Menu.Item key="5" icon={<PieChartOutlined />}>
                             <Link to='/role'>角色管理</Link>
                        </Menu.Item>
                        <SubMenu key="sub2" icon={<DesktopOutlined />} title="角色管理">
                            <Menu.Item key="6">柱形图</Menu.Item>
                            <Menu.Item key="7">折线图</Menu.Item>
                            <Menu.Item key="8">饼图</Menu.Item>
                        </SubMenu>

                    </Menu>
                </div>

            </div>
        )
    }
}