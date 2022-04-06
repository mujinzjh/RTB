import React, { Component } from 'react'
import { loginAPI } from '../../Services/serviceApis';
import './index.scss';
import { Form, Input, Button } from 'antd';
import history from '../../Utils/history';
class Login extends Component {
  constructor(props: any) {
    super(props);
    this.loginSubmit = this.loginSubmit.bind(this);
  }
  loginSubmit() {
    loginAPI().then((result: any) => {
      const { code } = result;
      if (code == 200) {
        history.push('/Home/main');
      }

    }).catch((err: any) => {
      console.log(err);

    });
  }
  render() {
    return (
      <div className="login-content">
        <div className='from-container'>
          <h2> 登录 </h2>
          <Form
            name="basic"
            className='from-content'
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 18 }}
            initialValues={{ remember: true }}
            onFinish={this.loginSubmit}
            autoComplete="off"
          >
            <Form.Item
              label="账号"
              name="username"
              rules={[{ required: true, message: '请输入用户名!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="密码"
              name="password"
              rules={[{ required: true, message: '请输入密码!' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>

      </div>
    )
  }
}

export default Login;