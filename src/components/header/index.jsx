import React, {Component} from "react";
import { Button,Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons'
import {withRouter} from 'react-router-dom'
import './header.css'


class Header extends Component{
    out =() =>{
        Modal.confirm({
            icon: <ExclamationCircleOutlined />,
            content: '确认退出吗',
            onOk:() =>{
                console.log('OK',this.props);
                this.props.history.replace('/login')
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }

    render() {
        return(
            <div className="header">
                <div className='header-top'>
                    <div className='header-top-right'>
                        <Button type="primary" onClick={this.out}>退出</Button>
                    </div>
                </div>
                <div className='header-bottom'>
                    <div className='header-bottom-left'>
                       

                    </div>
                    <div className='header-bottom-right'>
                        <span>2021/8/31 12.29</span>
                        <span>晴</span>

                    </div>

                </div>

            </div>
        )
    }
}
export default withRouter(Header)