import { useGetLocale, useSetLocale, useGetIdentity } from '@pankod/refine-core'
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
          <Link to="/">EasyRent</Link>
        </h1>

        <nav id="navbar" className="navbar">
          <ul>
            {/* <li>
              <a className="nav-link scrollto" href="#hero">
                Home
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#services">
                Services
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#contact">
                Contact
              </a>
            </li> */}
            <li>
              <Dropdown overlay={menu}>
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
              <Link to="/signup" className="getstarted">
                Get Started
              </Link>
            </li>
          </ul>
          <Link to="/signup" className="getstarted mobile-nav-toggle">
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  )
}
