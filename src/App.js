import React from 'react';
import '@/assets/style/common.scss'
import {getCnodeList} from "./utils/api"

// 路由
import {HashRouter,Route,Switch,Redirect} from "react-router-dom"
// 将我们抛出的路由数组引入
import routes from "@/views"

export default class App extends React.Component{
    constructor(props){
      super(props)
      this.state={
        list:[]
      }
    }
    // 生命周期函数，调用接口
    componentDidMount(){
      let params ={
        tab:"",
        page:1,
        limit:5
      }
      getCnodeList(params).then(res=>{
        console.log("res",res)
      })
    }
    // 生成视图容器
    createRoutes(){ 
      let res = []
      routes.map(ele=>{
        res.push(
          <Route
            exact
            path={ele.path}
            component={ele.component}
            key={ele.id}>
          </Route>
        )
        if(ele.children){
          ele.children(ele=>{
            res.push(
              <Route
                exact
                path={ele.path}
                component={ele.component}
                key={ele.id}>
              </Route>
            )
          })
        }
      })
    }
    render(){
      return(
        <HashRouter>
            <div className="app">
                <Switch>
                  
                </Switch>
            </div>
        </HashRouter>
      )
    }
}


