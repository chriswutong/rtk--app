import axios from 'axios'
const isDev = process.env.NODE_ENV === 'development' 

// 自定义axios
const ins = axios.create({
  baseURL: isDev ? 'http://121.89.205.189:3001/api' : 'http://121.89.205.189:3001/api', 
  timeout: 6000
})

// 定义拦截器
ins.interceptors.request.use(config => {
  return config
}, (error) => {
  console.log(error)
})
ins.interceptors.response.use(response => {
 
  return response
}, (error) => {
  console.log(error)
})

export default ins
