import axios from 'axios'

const token: String = sessionStorage.getItem('token') || ''
const auth: String = `Bearer ${token}`

export const api = (table: String) => {
  return axios.create({
    baseURL: `https://guarded-scrubland-74784.herokuapp.com/${table}`,
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: auth,
    },
  })
}

export const config = {
  headers: {
    'Content-Type': 'multipart/form-data',
  },
}
