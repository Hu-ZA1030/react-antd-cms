import axios from "axios"

let baseURL = "http://localhost:8888/" // 开发环境
// let baseURL = "http://XXXXXXXX:9898"  // 测试环境
// let baseUrl = "http://yyyyyyyy:7777"  // 生产环境

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
    //根据后端返回的状态，我们打印不同的结果
    const code = response.data.err
    const message = response.data.message
    console.log("code",code)
    // 数据处理
    if(code ===  0 ){
      // console.log("响应",response.data.data)
      return response.data.data
    } else if(code ===  1){
      message.error("缺少必填参数")
    } else if(code === -1){
      message.error("token 无效")
    }else if( code === 2){
      message.error(response.data.message)
    } else if(response && response.data.success){
      return response.data.data
    }else{
      console.log("");
    }

  },(error)=> {
    //   请求失败
    return Promise.reject(error);
  });



//   抛出fetch
export default fetch