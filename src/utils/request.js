import axios from "axios";

const service = axios.create({
    baseURL: import.meta.env.VITE_BASE_API,
    timeout: 5000
})

service.interceptors.response.use(
    (res) => {
      // console.log(res.data)
      const { success, code, message, data } = res.data
      if (success && code === 200) {
        return data
      } else {
        return Promise.reject(new Error(message))
      }
    },
    (err) => {
      // 处理token超时
      if (err.response && err.response.data && err.response.data.code === 401) {
        const userStore = useUserStore()
        userStore.$reset()
        location.reload()
        message('error', err.response.data.message)
      }
      return Promise.reject(err)
    }
  )

export default service; 