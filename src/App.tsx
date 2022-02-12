import { Refine, AuthProvider } from "@pankod/refine-core";
import { notificationProvider } from "@pankod/refine-antd";
import routerProvider from "@pankod/refine-react-router";
import "styles/antd.less";
import dataProvider from "@pankod/refine-simple-rest";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

import { Login } from "pages/login";
import { PostList, PostCreate, PostEdit, PostShow } from "pages/posts";
import {
  Title,
  Header,
  Sider,
  Footer,
  Layout,
  OffLayoutArea,
} from "components/layout";
import { useTranslation } from "react-i18next";

function App() {
  const {
    getIdTokenClaims,
    isLoading,
    loginWithRedirect,
    isAuthenticated,
    user,
    logout,
  } = useAuth0();
  const { t, i18n } = useTranslation();

  const authProvider: AuthProvider = {
    login: () => {
      loginWithRedirect();
      return Promise.resolve();
    },
    logout: () => {
      logout({ returnTo: window.location.origin });
      return Promise.resolve("/");
    },
    checkError: () => Promise.resolve(),
    checkAuth: () => {
      if (isAuthenticated) {
        return Promise.resolve();
      }

      return Promise.reject();
    },
    getPermissions: () => Promise.resolve(),
    getUserIdentity: async () => {
      if (user) {
        return Promise.resolve({
          ...user,
          avatar: user.picture,
        });
      }
      return Promise.reject();
    },
  };

  getIdTokenClaims().then((token) => {
    if (token) {
      axios.defaults.headers.common = {
        Authorization: `Bearer ${token.__raw}`,
      };
    }
  });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  const i18nProvider = {
    translate: (key: string, params: object) => t(key, params),
    changeLocale: (lang: string) => i18n.changeLanguage(lang),
    getLocale: () => i18n.language,
  };

  return (
    <Refine
      routerProvider={routerProvider}
      notificationProvider={notificationProvider}
      dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
      authProvider={authProvider}
      LoginPage={Login}
      resources={[
        {
          name: "posts",
          list: PostList,
          create: PostCreate,
          edit: PostEdit,
          show: PostShow,
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
  );
}

export default App;
