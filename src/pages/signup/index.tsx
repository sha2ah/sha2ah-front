import React from 'react'
import { Navbar, Footer } from '../../components/layout'
import { useLogin } from '@pankod/refine-core'
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
  const [form] = Form.useForm<ILoginForm>()

  const { mutate: login } = useLogin<ILoginForm>()

  const CardTitle = (
    <Title level={1} className="title">
      Sign Up
    </Title>
  )

  return (
    <>
      <Navbar />
      <AntdLayout className="layout" id="login">
        <Row justify="center" align="middle">
          <Col xs={22}>
            <div className="container">
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
                    name="email"
                    label="Email"
                    rules={[{ required: true }]}
                  >
                    <Input size="large" placeholder="Email" type="email" />
                  </Form.Item>
                  <Form.Item
                    name="phone"
                    label="Phone"
                    rules={[{ required: true }]}
                  >
                    <Input size="large" placeholder="Phone" />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    label="Password"
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
                    <a href="#">Forgot password?</a>
                  </div>
                  <Button size="large" htmlType="submit" block>
                    Sign up
                  </Button>
                </Form>
                <div style={{ marginTop: 8 }}>
                  <Text style={{ fontSize: 12 }}>
                    Don’t have an account?{' '}
                    <Link to="/login" style={{ fontWeight: 'bold' }}>
                      Login
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
