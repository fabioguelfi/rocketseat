import axios from 'axios'

const api = axios.create({
  baseURL: '192.168.0.16:3000',
})

export default api
