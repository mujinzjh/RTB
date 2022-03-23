/*
 * @Author: mujin
 * @Date: 2022-03-22 15:11:20
 * @LastEditTime: 2022-03-23 10:13:44
 * @Description: 
 */
import { Layout, Breadcrumb } from 'antd';

import CustomHead from '../Header/Header';
import './home.scss'
import RouteConfig from "../../../Route/index";
const { Header, Content, Footer } = Layout;
const Home = (props: any) => {
  console.log(props.children);
  return (
    < Layout className="layout home-layout" >
      <Header>
        <CustomHead></CustomHead>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div className="all-layout-content">
          <RouteConfig />
          content
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>© {new Date().getFullYear()} BJY 版权所有</Footer>
    </ Layout>
  )
}

export default Home;

