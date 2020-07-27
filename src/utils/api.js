import axios from "./axios"

export function getCnodeList(params){
    return axios({
        url:"/api/v1/topics",
        method:"GET",
        params,
    })
}

// 登入
export function login(data){
    return axios({
        url:"/users/login",
        method:"POST",
        data
    })
}

// 获取所有品类
export function getCates(params){
    return axios({
        url:"/cate/getAllCates/",
        method:"GET",
        params
    })
}

// 获取商品列表
export function getgoodList(params){
    return axios({
        url:"/good/list",
        method:"GET",
        params
    })
}

// 添加或修改商品列表
export function goodListAdd(data){
    return axios({
        url:"/good/add",
        method:"POST",
        data
    })
}

// 删除商品列表
export function delGoodlist(params){
   return axios({
    url:"/good/del",
    method:"GET",
    params
   })
}