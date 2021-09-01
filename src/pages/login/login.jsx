import React,{Component} from "react";
// import { Form, Input, Button, Select } from 'antd';
import {Form, Input, Button, message} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';


import './login.css'
import axios from "axios";
export default class Login extends Component {
    onFinish = (values) => {
        axios.post('/login',values).then(res => {
            res = res.data
            if(res.meta.status === 200){
                message.success('登录成功')
                //跳转
                window.sessionStorage.setItem('token', res.data.token)
                this.props.history.replace('/', )
            }else {
                message.error('登录失败，请检查用户名和密码')
            }
            console.log(res);
        })
    };
    render() {
        return(
            <div className="login">
            <header className="login-header">后台管理系统</header>
            <section className="login-content">
                <h2>登录</h2>
                <div>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={this.onFinish}
                    >
                        <Form.Item
                            name="username"
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="密码"
                            />
                        </Form.Item>


                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>

                        </Form.Item>
                    </Form>
                </div>
            </section>
            </div>
        )
    }
}