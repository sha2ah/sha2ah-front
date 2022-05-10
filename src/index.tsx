import React from 'react'
import ReactDOM from 'react-dom'
import { Auth0Provider } from '@auth0/auth0-react'

import reportWebVitals from './reportWebVitals'
import App from './App'
import './i18n'

import axios from 'axios'
import getCookie from './utils/getCookie'

const token = sessionStorage.getItem('token') || getCookie('token')
axios.defaults.headers.common = {
  Authorization: `Bearer ${token}`,
}
ReactDOM.render(
  <React.StrictMode>
    <React.Suspense fallback="loading">
      <App />
    </React.Suspense>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
