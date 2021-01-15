import axios from 'axios'

const api = axios.create({
  baseURL: process.env.BACKEND_URL
})

export default api
