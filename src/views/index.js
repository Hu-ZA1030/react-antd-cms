// 动态加载
import loadable from "@loadable/component"

const Home = loadable(() => import("./home/Home"))
const Good = loadable(() => import("./good/Good"))
const Todo = loadable(() => import("./todo/Todo"))
const GoodAdd = loadable(() => import("./good/GoodAdd"))

export default [
   {
      id: 1,
      title: "统计概况",
      children: [
         {
            id: 101,
            path: "/",
            component: Home,
            text: "首页统计",
         },
         {
            id: 102,
            path: "/stat/good",
            component: Good,
            text: "商品统计",
         }
      ]
   },
   {
      id: 2,
      title: "测试管理",
      bool: true,
      children: [
         {
            id: 201,
            path: "/todo",
            component: Todo,
            text: "todoList",
         }
      ]
   },
   {
      id: 3,
      title: "商品管理",
      bool: true,
      children: [
         {
            id: 301,
            path: "/good",
            component: Good,
            text: "商品列表",
            children: [
               {
                  id: 30101,
                  path: "/good/add",
                  component: GoodAdd,
                  text: "添加商品",
               }
            ]
         }
      ]
   }
]