// 动态加载
import loadable from "@loadable/component"

const Home = loadable(()=>import("./home/Home"))
const Detail = loadable(()=>import("./home/Detail"))



export default [
   {
    id:1,
    path:"./home",
    component:Home,
    text:"首页管理",
    children:[
       {
         id:101,
         path:"./detail",
         component:Detail,
         text:"商品详情",
       }
    ]
   } 
]