import React from 'react';
import { Form, Input, Button, FormInstance, message } from 'antd';
import Constants from '../../Constants';
import history from '../../Utils/history';
import { regisAPI } from '../../Services/serviceApis';

const regisUser = async () => {
  const { account, password } = formRef.current && formRef.current.getFieldsValue(true);
  regisAPI({
    username: account, password
  }).then((res: any) => {
    const { code } = res;
    if (code == Constants.HTTP_SUCCESS_CODE) {
      message.success('注册成功，请登录！');
      history.push('/login');
    } else {
      const { desc } = res;
      message.error(desc);
    }
  }).catch(err => {
    console.log(err);

  })
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
          onFinish={regisUser}
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
