/**
 * Created by qiangxl on 2017/5/23.
 */
import axios from 'axios'
import globals from './config'
import qs from 'qs'
// axios 配置
// axios.defaults.timeout = 10000
axios.defaults.withCredentials = true

// http request 拦截器
axios.interceptors.request.use(
  config => {
    if (config.data) {
      config.headers['Authorization'] = globals.authorization
      config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
      config.withCredentials = false
      config.data = qs.stringify(config.data)
    }
    return config
  },
  err => {
    return Promise.reject(err)
  })

// http response 拦截器
axios.interceptors.response.use(
  response => {
    if (response.data) {
      if (parseInt(response.data.code) === 2) {
        globals.loginCall('/')
      }
    } else {
    }
    return response
  },
  error => {
    console.log('error', error)
    return Promise.reject(error)
  })

export default axios
