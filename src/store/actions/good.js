import {getCates,getgoodList} from "@/utils/api"

import {GET_CATES,GET_GOOD_LIST} from "../actionTypes"




// 获取所有的的品类
export function getAllCates(params){
    return function(dispatch){
        getCates(params).then(res=>{
            dispatch({
                type:GET_CATES,
                payload:res
            })
        })  
    }
}

// 获取所有的商品列表
export function getGood(params){
    return function(dispatch){
        getgoodList(params).then(res=>{
            console.log("actions-res",res)
            dispatch({
                type:GET_GOOD_LIST,
                payload:res
            })
        })
    }
}