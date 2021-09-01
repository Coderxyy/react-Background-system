import React, {Component} from "react";
import {Button, Card, Table} from 'antd';
import axios from "axios";


const dataSource = [
    {
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
    },
    {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
    },
];

export default class Category extends Component{
    state = {
        category: [],
    }
    getcolumns = () =>{
        this.columns = [
            {
                title: "分类名称",
                dataIndex: "name",
                key: "name",
            },
            {
                title: "操作",
                width: 300,
                key: "action",
                dataIndex: "",
                render: () => (
                    <span>
                <Button type="link">修改分类</Button>
                <Button type="link">查看子分类</Button>
            </span>
                ),
            },
        ];
    }
    getcategory =() =>{
        axios.get('menus',).then(res => {
            console.log(res);
        })
    }

    componentWillMount() {
        this.getcolumns()
    }
    componentDidMount() {
        this.getcategory()
    }

    render() {
        const {category} = this.state
        const extra = (
            <Button type='primary'>
                添加
            </Button>
        )

        return (
            <Card title="一级分类列表" extra={extra} >
                <Table
                    dataSource={category}
                    columns={this.columns}
                    bordered
                />;
            </Card>
        )
    }
}