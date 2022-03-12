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
  // const {
  //   getIdTokenClaims,
  //   isLoading,
  //   loginWithRedirect,
  //   isAuthenticated,
  //   user,
  //   logout,
  // } = useAuth0();
  const { t, i18n } = useTranslation()

  // const authProvider: AuthProvider = {
  //   login: () => {
  //     loginWithRedirect();
  //     return Promise.resolve();
  //   },
  //   logout: () => {
  //     logout({ returnTo: window.location.origin });
  //     return Promise.resolve("/");
  //   },
  //   checkError: () => Promise.resolve(),
  //   checkAuth: () => {
  //     if (isAuthenticated) {
  //       return Promise.resolve();
  //     }

  //     return Promise.reject();
  //   },
  //   getPermissions: () => Promise.resolve(),
  //   getUserIdentity: async () => {
  //     if (user) {
  //       return Promise.resolve({
  //         ...user,
  //         avatar: user.picture,
  //       });
  //     }
  //     return Promise.reject();
  //   },
  // };

  // getIdTokenClaims().then((token) => {
  //   if (token) {
  //     axios.defaults.headers.common = {
  //       Authorization: `Bearer ${token.__raw}`,
  //     };
  //   }
  // });

  // if (isLoading) {
  //   return <span>Loading...</span>;
  // }

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
        'https://guarded-scrubland-74784.herokuapp.com'
      )}
      // authProvider={authProvider}
      // LoginPage={Login}

      resources={[
        {
          name: 'posts',
          list: PostList,
          create: PostCreate,
          edit: PostEdit,
          show: PostShow,
        },
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
