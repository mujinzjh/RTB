/*
 * @Author: mujin
 * @Date: 2022-03-22 15:11:20
 * @LastEditTime: 2022-03-29 14:50:00
 * @Description: 
 */
import { Layout } from 'antd';

import CustomHead from '../Header/Header';
import CustomSwiper from '../../../Components/Swiper'
import './home.scss'
import RouteConfig from "../../../Route/index";
import { includes } from 'lodash';
const { Content, Footer } = Layout;

const Home = (props: any) => {
  let { children } = props;
  let flag = props.location.pathname.includes('main');
  console.log(flag);

  return (
    < Layout className="layout home-layout" >
      <CustomHead routers={children}></CustomHead>
      <Content style={{ padding: '0 50px' }}>
        {
          flag ? <CustomSwiper></CustomSwiper> : <></>
        }
        <div className="all-layout-content">
          <RouteConfig routers={children} />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>© {new Date().getFullYear()} BJY 版权所有</Footer>
    </ Layout >
  )
}

export default Home;

