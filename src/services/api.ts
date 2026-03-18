import axios, { AxiosResponse } from 'axios'

const api = axios.create({
    baseURL: 'https://api.github.com',
})

export type { AxiosResponse }
export default api
