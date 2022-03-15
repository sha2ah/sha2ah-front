import { Refine, AuthProvider } from '@pankod/refine-core'
import { notificationProvider } from '@pankod/refine-antd'
import routerProvider from '@pankod/refine-react-router'
import 'styles/antd.less'
import dataProvider from '@pankod/refine-simple-rest'
import axios from 'axios'
import { useAuth0 } from '@auth0/auth0-react'
import { Home } from './pages/home.server'
import { NotFound } from './pages/notfound'
import { Login } from 'pages/login'
import { PostList, PostCreate, PostEdit, PostShow } from 'pages/posts'
import { RenterList, RenterCreate, RenterEdit, RenterShow } from 'pages/renters'
import { EstateList, EstateCreate, EstateEdit, EstateShow } from 'pages/estates'
import { UnitList, UnitCreate, UnitEdit, UnitShow } from 'pages/units'
import React, { useState } from 'react'

import {
  ContractList,
  ContractCreate,
  ContractEdit,
  ContractShow,
} from 'pages/contracts'
import {
  InvoiceList,
  InvoiceCreate,
  InvoiceEdit,
  InvoiceShow,
} from 'pages/invoices'
import {
  RepairRequestList,
  RepairRequestCreate,
  RepairRequestEdit,
  RepairRequestShow,
} from 'pages/repairRequests'
import {
  Title,
  Header,
  Sider,
  Footer,
  Layout,
  OffLayoutArea,
} from 'components/layout'
import { useTranslation } from 'react-i18next'
const { RouterComponent } = routerProvider

function App() {
  const { t, i18n } = useTranslation()

  const authProvider: AuthProvider = {
    login: async ({ username, password, remember }) => {
      const token =await axios
        .post('https://guarded-scrubland-74784.herokuapp.com/api/token/', {
          username: username,
          password: password,
        })
        .then((response) => {
          sessionStorage.setItem('token', response.data.access)
          return Promise.resolve("/estates")
        })
        .catch(() => Promise.reject())
        .finally(() => {})
        return token
     
    },

    logout: () => {
      sessionStorage.removeItem('token')
      return Promise.resolve()
    },
    checkError: () => Promise.resolve(),
    checkAuth: () =>
      sessionStorage.getItem('token')
        ? Promise.resolve()
        : Promise.reject({ redirectPath: '/login' }),

    getPermissions: () => Promise.resolve(['consumer']),
  }

  axios.defaults.headers.common = {
    Authorization: `Bearer ${sessionStorage.getItem('token')}`,
  }
  const i18nProvider = {
    translate: (key: string, params: object) => t(key, params),
    changeLocale: (lang: string) => i18n.changeLanguage(lang),
    getLocale: () => i18n.language,
  }
  
  const CustomRouterComponent = () => <RouterComponent basename="/admin" />
  return (
    <Refine
      routerProvider={{
        ...routerProvider,
        routes: [
          {
            exact: true,
            component: Home,
            path: '/',
          },
          {
            component: NotFound,
            path: 'x',
          },
        ],
      }}
      notificationProvider={notificationProvider}
      dataProvider={dataProvider(
        'https://guarded-scrubland-74784.herokuapp.com',
        axios
      )}
      authProvider={authProvider}
      LoginPage={Login}
      resources={[
        {
          name: 'renters',
          list: RenterList,
          create: RenterCreate,
          edit: RenterEdit,
          show: RenterShow,
        },
        {
          name: 'estates',
          list: EstateList,
          create: EstateCreate,
          edit: EstateEdit,
          show: EstateShow,
        },
        {
          name: 'units',
          list: UnitList,
          create: UnitCreate,
          edit: UnitEdit,
          show: UnitShow,
        },
        {
          name: 'contracts',
          list: ContractList,
          create: ContractCreate,
          edit: ContractEdit,
          show: ContractShow,
        },
        {
          name: 'invoices',
          list: InvoiceList,
          create: InvoiceCreate,
          edit: InvoiceEdit,
          show: InvoiceShow,
        },
        {
          name: 'repair-request',
          list: RepairRequestList,
          create: RepairRequestCreate,
          edit: RepairRequestEdit,
          show: RepairRequestShow,
        },
      ]}
      Title={Title}
      Header={Header}
      Sider={Sider}
      Footer={Footer}
      Layout={Layout}
      OffLayoutArea={OffLayoutArea}
      i18nProvider={i18nProvider}
    />
  )
}

export default App
