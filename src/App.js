import React, {Component} from "react";
// import { message, Button } from 'antd';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import Login from "./pages/login/login";
import Admin from "./pages/admin/admin";
import axios from 'axios'
axios.defaults.baseURL = 'https://www.liulongbin.top:8888/api/private/v1/'

// axios.defaults.baseURL = 'http://layer-vue.cn/reactapi/'
axios.interceptors.request.use(config => {
    config.headers.Authorization = window.sessionStorage.getItem('token')
    return config
})
export default class App extends Component{

    render () {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/' component={Admin}></Route>
                    <Redirect path='/login'/>

                </Switch>

            </BrowserRouter>
        )
    }
}