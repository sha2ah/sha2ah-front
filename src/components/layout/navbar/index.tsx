import {
  useGetLocale,
  useSetLocale,
  useGetIdentity,
  useTranslate,
} from '@pankod/refine-core'
import {
  AntdLayout,
  Space,
  Menu,
  Button,
  Icons,
  Dropdown,
  Avatar,
  Typography,
} from '@pankod/refine-antd'
import { MenuOutlined } from '@ant-design/icons'
import routerProvider from '@pankod/refine-react-router'
import { useTranslation } from 'react-i18next'

const { Link } = routerProvider

const { DownOutlined } = Icons
const { Text } = Typography

export const Navbar = () => {
  const { i18n } = useTranslation()
  const locale = useGetLocale()
  const changeLanguage = useSetLocale()
  const { data: user } = useGetIdentity()

  const currentLocale = locale()

  const t = useTranslate()

  const menu = (
    <Menu selectedKeys={[currentLocale]}>
      {[...(i18n.languages || [])].sort().map((lang: string) => (
        <Menu.Item
          key={lang}
          onClick={() => changeLanguage(lang)}
          icon={
            <span style={{ marginRight: 8 }}>
              <Avatar size={16} src={`/images/flags/${lang}.svg`} />
            </span>
          }
        >
          {lang === 'en' ? 'English' : 'عربي'}
        </Menu.Item>
      ))}
    </Menu>
  )
  return (
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center justify-content-between">
        <h1 className="logo">
          <a href="https://www.sha2ah.com">
            <img
              src="/EASY RENT logo.png"
              alt="EasyRent"
              width="80"
              height="60"
            />
          </a>
        </h1>

        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <Dropdown overlay={menu} trigger={['click']}>
                <Button type="link">
                  <Space>
                    <Avatar
                      size={16}
                      src={`/images/flags/${currentLocale}.svg`}
                    />
                    {currentLocale === 'en' ? 'English' : 'عربي'}
                    <DownOutlined />
                  </Space>
                </Button>
              </Dropdown>
            </li>

            <li>
              <a href="https://www.sha2ah.com/signup" className="getstarted">
                {t('pages.login.signup')}
              </a>
            </li>
          </ul>
          <div className="mobile-nav-toggle">
            <Dropdown overlay={menu} trigger={['click']}>
              <Button type="link">
                <Space>
                  <Avatar
                    size={16}
                    src={`/images/flags/${currentLocale}.svg`}
                  />
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>

            <a
              href="https://www.sha2ah.com/signup"
              className="getstarted mobile-nav-toggle"
            >
              {t('pages.login.signup')}
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
