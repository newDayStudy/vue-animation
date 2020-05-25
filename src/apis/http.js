import axios from 'axios'

//创建axios的一个实例 
var instance = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 6000
})

//------------------- 一、请求拦截器 忽略
instance.interceptors.request.use(function(config) {
    return config;
},function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

//----------------- 二、响应拦截器 忽略
instance.interceptors.response.use(function(response) {
    return response.data;
}, function(error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});


export default function(method, url, data = null){
    method = method.toLowerCase();
    var req;
    switch(method){
        case 'post':
            req = instance.post(url, data);
            break;
        case 'get':
            req = instance.get(url, { params: data });
            break;
        case 'delete':
            req = instance.delete(url, { params: data });
            break;
        default:
            console.error('未知的method'+ method)
            req = false
            break;
    }
    return req;
}