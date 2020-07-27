import React from "react"
import { Menu } from 'antd'

// 路由
import {NavLink} from "react-router-dom"
// 将我们抛出的路由数组引入
import routes from "@/views"


const { SubMenu } = Menu
export default class QFSider extends React.Component{
    constructor(props){
        super(props)
        this.state={}
    }
    // 便利循环二级导航栏
    createChild(children){
        // console.log("children1",children)
        return children.map(ele=>(
            <Menu.Item key={ele.id}>
                <NavLink to={ele.path}>
                    {ele.text}
                </NavLink>
            </Menu.Item>
        ))
    }

    // 遍历菜单栏
    createLink(){
        return routes.map(ele=>(
            <SubMenu key={ele.id}  title={ele.title}>
                {this.createChild(ele.children)}
            </SubMenu>
        ))
    }
    render(){
        return(
        <div className="qf-Sider">
            <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark">
                {this.createLink()}
            </Menu>
        </div>
        )
    }
}