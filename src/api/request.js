//axios实例封装
import Vue from "vue";

import axios from "axios";
//引入elementul的弹框提醒组件后面要用来报错
import { Message } from 'element-ui';
const service = axios.create({
    //基础路径URL配置
    baseURL: "http://oa.s.sn.cn/api/",
    //五秒未响应提示
    timeout: 5000,
})

// 请求拦截器
service.interceptors.request.use(config => {
    // 这里可以进行请求加密等操作。如添加token,cookie，修改数据传输格式等。
    config.headers['token'] = localStorage.getItem('token') // 请求头带上token，一般后端的请求都要带上token才能成功的，没有token会被判断未登录，这里根据个人不同改获取token的方式。不需要的直接删掉这行代码就行，其他不动
    config.headers['Content-type'] = 'application/json';
    return config;
})

//响应拦截器
service.interceptors.response.use((response) => {
    //只返回config内的data的数据，其他的不展示
    const res = response.data

    if(res.code != 1) {
        Message.error(res.msg)
        return {}
    }

    return res
}, (error) => {
    //如果请求出错会有弹框提示
    Message({
        type: "error",
        message: error.message
    })
    return Promise.reject(error)
})


/* eslint-disable */
export const $post = async (path, data = {}) => await service.post(path, data);

/* eslint-disable */
export const $get = async (path, params) => await service.get(path, {params});


export const $put = async (path, params) => await service.put(path, params);



export default service
