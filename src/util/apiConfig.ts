import axios, { AxiosInstance, AxiosResponse } from 'axios'

const token: string = ''
const auth: string = `Bearer ${token}`

const apiHandler = (table: string) => {
  return axios.create({
    baseURL: `https://www.sha2ah.com/${table}`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: auth,
    },
  })
}

export default apiHandler
