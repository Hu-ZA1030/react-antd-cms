// 用于学习的test actions模块
// 封装action，是为了代码复用

import { CHANGE_MSG, CNODE_LIST } from '../actionTypes'
import {getCnodeList} from "@/utils/api"


export function changeMsg(payload) {
  // 返回一个action
  return {
    type: CHANGE_MSG,
    payload
  }
}

// 异步行为解决方案
export function cnode(params){
  return function(dispatch){
    getCnodeList(params).then(res=>{
      console.log("成功res",res)
        // 这是成功的action
        dispatch({
          type: CNODE_LIST,
          payload:res
          })
        }).catch(err=>{
        // 第三个失败的action
          console.log("失败了",err)
          dispatch({
            type: CNODE_LIST,
            payload:""
          })
        })
  }
}