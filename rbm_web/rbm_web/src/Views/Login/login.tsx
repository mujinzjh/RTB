import React from 'react';
import { Form, Input, Button, FormInstance } from 'antd';
import Constants from '../../Constants';
import history from '../../Utils/history';
import { loginAPI } from '../../Services/serviceApis';
import { connect } from 'react-redux';
import { setToken } from '../../Redux/action';


const loginSubmit = async () => {
  const { account, password } = formRef.current && formRef.current.getFieldsValue(true);
  loginAPI({
    account, password
  }).then((result: any) => {
    const { code } = result;
    if (code == Constants.HTTP_SUCCESS_CODE) {
      const { user, token } = result.result;
      sessionStorage.setItem('userInfo', JSON.stringify(user));
      sessionStorage.setItem('token', token);
      setToken(token);
      history.push('/Home/main');
    }

  }).catch((err: any) => {
    console.log(err);

  });
}

const formRef: React.RefObject<FormInstance<any>> = React.createRef();
const goRegis = () => {
  history.push('/regis');
}
const Login = (props: any) => {
  return (
    <div className="login-content">
      <div className='from-container'>
        <h2> 登录 </h2>
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


          <span className='regis-user' onClick={goRegis}>注册用户</span>


          <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>

    </div>
  );
}

const mapStateToPropss = (state: any) => {
  return {
    token: state.token
  }
}

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    setToken(data: any) {
      dispatch(setToken(data))
    }
  }
}

export default connect(mapStateToPropss, mapDispatchToProps)(Login);
