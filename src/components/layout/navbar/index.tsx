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
import { useTranslation } from 'react-i18next'

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
          {lang === 'en' ? 'English' : 'German'}
        </Menu.Item>
      ))}
    </Menu>
  )
  return (
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center justify-content-between">
        <h1 className="logo">
          <a href="index.html">EasyRent</a>
        </h1>

        <nav id="navbar" className="navbar">
          <ul>
            <li>
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
            {/* <li>
              <a className="nav-link scrollto" href="#team">
                Team
              </a>
            </li> */}
            {/* <li>
              <a className="nav-link scrollto" href="#pricing">
                Pricing
              </a>
            </li> */}
            <li>
              <a className="nav-link scrollto" href="#contact">
                Contact
              </a>
            </li>
            {/* <li>
              <a className="nav-link scrollto" href="#">
                عربي
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
                    {currentLocale === 'en' ? 'English' : 'German'}
                    <DownOutlined />
                  </Space>
                </Button>
              </Dropdown>
            </li>
            <li>
              <a className="getstarted scrollto" href="#about">
                SIGN UP
              </a>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  )
}
