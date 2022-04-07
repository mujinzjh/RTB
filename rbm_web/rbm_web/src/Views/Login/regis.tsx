import React from 'react';
import { Form, Input, Button, FormInstance } from 'antd';
import Constants from '../../Constants';
import history from '../../Utils/history';


const loginSubmit = async () => {

}

const formRef: React.RefObject<FormInstance<any>> = React.createRef();
const Regis = (props: any) => {
  return (
    <div className="login-content">
      <div className='from-container'>
        <h2> 注册 </h2>
        <Form
          name="basic"
          className='from-content'
          ref={formRef}
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
          initialValues={{ remember: true }}
          onFinish={loginSubmit}
          autoComplete="off"
        >
          <Form.Item
            label="账号"
            name="account"
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
              注册
            </Button>
          </Form.Item>
        </Form>
      </div>

    </div>
  );
}


export default Regis;
