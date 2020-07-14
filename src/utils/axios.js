import axios from "axios"

let baseURL = "http://localhost:8888/api/v1" //本地服务器

const fetch = axios.create({
    baseURL: baseURL,
    timeout: 7000,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8' 
    }
  })

// 封装请求拦截器
fetch.interceptors.request.use((config)=> {
    //在这里做一些检测或者包装等处理

    //鉴权 token添加
    config.headers.Authorization = localStorage.getItem("token")
    return config
  });


// 封装响应拦截器
fetch.interceptors.response.use((response)=> {
    // 请求成功
    console.log("响应拦截",response)

    // 对数据进行过滤，根据后端返回标识符来进行判断请求成功
    if(response.data && response.data.success){
        //将数据返回出去
        return response.data.data
    }else{
        console.log("网络开小差，请稍后再试")
    }
  },(error)=> {
    //   请求失败
    return Promise.reject(error);
  });



//   抛出fetch
export default fetch