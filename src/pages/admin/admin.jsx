import React,{Component} from "react";
import { Layout } from 'antd';
import {Switch, Route} from 'react-router-dom'
import Header from "../../components/header";
import LeftNav from "../../components/left-nav";
import Home from "../home/home";
import Product from "../product/product";
import Category from "../category/category";
import Charts from "../charts/charts";
import User from "../user/user";
import Role from "../role/role";
const { Footer, Sider, Content } = Layout;
export default class Admin extends Component {
    render() {
        return(


                <Layout style={{height: '100%'}}>
                    <Sider><LeftNav/></Sider>
                    <Layout>
                        <Header></Header>
                        <Content style={{ margin: 20, backgroundColor: "white" }}>
                            <Switch>
                                <Route path='/home' component={Home}></Route>
                                <Route path='/user' component={User}></Route>
                                <Route path='/role' component={Role}></Route>
                                <Route path='/charts' component={Charts}></Route>
                                <Route path='/category' component={Category}></Route>
                                <Route path='/product' component={Product}></Route>
                            </Switch>
                        </Content>
                        <Footer style={{ textAlign: "center" }}>
                            推荐使用谷歌浏览器，来获得更佳操作体验
                        </Footer>
                    </Layout>
                </Layout>




        )
    }
}