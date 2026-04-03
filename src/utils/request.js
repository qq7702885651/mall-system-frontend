// src/utils/request.js
import axios from 'axios'
import { ElMessage } from 'element-plus'

// 1. 创建实例
const service = axios.create({
    //baseURL: import.meta.env.VITE_APP_BASE_API || '/', // 基础路径，可以配置在 .env 文件中
    baseURL: 'http://localhost:8080',
    timeout: 5000 // 请求超时时间
})

// 2. 请求拦截器
service.interceptors.request.use(
    config => {
        // 在这里可以统一添加 Token
        const token = localStorage.getItem('token')
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

// 3. 响应拦截器
service.interceptors.response.use(
    response => {
        const res = response.data
        // 根据后端约定的状态码处理（假设 200 为成功）
        if (res.code !== 200) {
            ElMessage.error(res.message || '系统错误')
            return Promise.reject(new Error(res.message || 'Error'))
        } else {
            return res.data // 直接返回数据部分
        }
    },
    error => {
        // 统一处理 HTTP 错误状态（401, 404, 500等）
        ElMessage.error(error.message || '网络连接异常')
        return Promise.reject(error)
    }
)

export default service