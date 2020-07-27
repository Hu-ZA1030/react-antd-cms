import React from "react"
// 路由
import {Route,Switch,Redirect} from "react-router-dom"
// 将我们抛出的路由数组引入
import routes from "@/views"

export default class QFContent extends React.Component{
    constructor(props){
        super(props)
        this.state={}
    }
    // 生成视图容器
    createRoutes() {
        let res = []
        // 递归函数
        function create(arr){
          arr.map(ele=>{
            res.push(
              <Route
              exact
              path={ele.path}
              component={ele.component}
              key={ele.id}>
              </Route>
            )
            // 递归一定要有条件结束
            if(ele.children){
              create(ele.children)
            }
            return false
          })
        }
        // 调用递归函数
        routes.map(ele=>{
          create(ele.children)
          return false
        })
        return res
      }

    render(){
        return(
        <div className="qf-Content">
        <Switch>
            {this.createRoutes()}
            <Redirect from="/*" to="/home"></Redirect>
        </Switch>
        </div>
        )
    }
}