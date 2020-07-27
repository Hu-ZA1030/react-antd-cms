import React from 'react';
import '@/assets/style/common.scss'
import zhCN from 'antd/es/locale/zh_CN'
import {ConfigProvider} from "antd"

// antd的样式
import 'antd/dist/antd.css'
import {Layout,Login} from "@/components"

// 路由
import {HashRouter} from "react-router-dom"



// 状态管理
import {Provider } from "react-redux"
import store from "@/store"

// 无状态组件
export default class App extends React.Component{
    constructor(props){
      super(props)
      this.state={
        // 页面渲染成功，先获取token
        token:localStorage.getItem("token")
      }
    }
  
    loginHandle(){
      this.setState({
        token:localStorage.getItem("token")
      })
    }

    render(){
      let {token} = this.state
      return(
        <HashRouter>
          <ConfigProvider locale={zhCN}>
            <Provider store={store}>
                <div className="app">
                  {/*通过判断token来切换组件，若不存在token就显示Login组件，有就是首页*/}
                  {
                    token ? <Layout/> : <Login onLogin={this.loginHandle.bind(this)}/>
                  }
                </div>
            </Provider>
          </ConfigProvider>
        </HashRouter>
      )
    }
}


