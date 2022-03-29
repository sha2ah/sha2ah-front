import React from 'react'
import { Navbar, Footer } from '../../components/layout'
import { useLogin, useTranslate } from '@pankod/refine-core'
import {
  Row,
  Col,
  AntdLayout,
  Card,
  Typography,
  Form,
  Input,
  Button,
  Checkbox,
} from '@pankod/refine-antd'

import routerProvider from '@pankod/refine-react-router'
const { Link } = routerProvider

const { Text, Title } = Typography

export interface ILoginForm {
  username: string
  password: string
  remember: boolean
}

export const Login: React.FC = () => {
  const t = useTranslate()
  const [form] = Form.useForm<ILoginForm>()

  const { mutate: login } = useLogin<ILoginForm>()

  const CardTitle = (
    <Title level={1} className="title">
      {t('pages.login.title')}
    </Title>
  )

  return (
    <>
      <Navbar />
      <AntdLayout className="layout" id="auth">
        <Row justify="center" align="middle">
          <Col xs={22}>
            <div className="container">
              {/* <div className="imageContainer d-flex justify-content-center">
                <img
                  src="./EASY RENT logo.png"
                  alt="EasyRent Logo"
                  width="200px"
                />
              </div> */}
              <Card title={CardTitle} headStyle={{ borderBottom: 0 }}>
                <Form<ILoginForm>
                  layout="vertical"
                  form={form}
                  onFinish={(values) => {
                    login(values)
                  }}
                  requiredMark={false}
                  initialValues={{
                    remember: false,
                  }}
                >
                  <Form.Item
                    name="username"
                    label={t('pages.login.username')}
                    rules={[{ required: true }]}
                  >
                    <Input
                      size="large"
                      placeholder={t('pages.login.username')}
                    />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    label={t('pages.login.password')}
                    rules={[{ required: true }]}
                    style={{ marginBottom: '12px' }}
                  >
                    <Input
                      type="password"
                      placeholder="●●●●●●●●"
                      size="large"
                    />
                  </Form.Item>
                  <div className="text-left">
                    <a href="#">{t('pages.login.forgotPassword')}</a>
                  </div>
                  <Button size="large" htmlType="submit" block>
                    {t('pages.login.signin')}
                  </Button>
                </Form>
                <div style={{ marginTop: 8 }}>
                  <Text style={{ fontSize: 12 }}>
                    {t('pages.login.noAccount')}{' '}
                    <Link to="/signup" style={{ fontWeight: 'bold' }}>
                      {t('pages.login.signup')}
                    </Link>
                  </Text>
                </div>
              </Card>
            </div>
          </Col>
        </Row>
      </AntdLayout>
      <Footer />
    </>
  )
}
