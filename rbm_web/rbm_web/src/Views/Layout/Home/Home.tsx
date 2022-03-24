/*
 * @Author: mujin
 * @Date: 2022-03-22 15:11:20
 * @LastEditTime: 2022-03-23 17:13:00
 * @Description: 
 */
import { Layout } from 'antd';

import CustomHead from '../Header/Header';
import './home.scss'
import RouteConfig from "../../../Route/index";
import { Redirect } from 'react-router-dom';
const { Header, Content, Footer } = Layout;

const Home = (props: any) => {
  let { children } = props;

  return (
    < Layout className="layout home-layout" >
      <Header>
        <CustomHead></CustomHead>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div className="all-layout-content">
          <RouteConfig routers={children} />
          {/* <Redirect to={children[0].key} exact></Redirect> */}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>© {new Date().getFullYear()} BJY 版权所有</Footer>
    </ Layout >
  )
}

export default Home;

