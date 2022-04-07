/*
 * @Author: mujin
 * @Date: 2022-03-22 15:27:44
 * @LastEditTime: 2022-03-24 15:07:58
 * @Description: 
 */
import { Menu, Button } from 'antd';
import { withRouter } from 'react-router-dom';
import { MenuClickEventHandler } from '_antd@4.19.2@antd/node_modules/rc-menu/lib/interface';
import { menu } from '../../../Route/route';
import history from '../../../Utils/history';
import './header.scss';
import CustomDrop from '../../../Components/Drop/Drop';
import _ from 'lodash';
import store from '../../../Redux';


// const { SubMenu } = Menu;
const onMenuClick: MenuClickEventHandler = ({ item, key, keyPath, domEvent }) => {
  history.push(key);
};
const isExistMenuRoute = (_routers: string | any[], path: any) => {
  let result = false;
  for (let i = 0; i < _routers.length; i++) {
    if (path == _routers[i].key) {
      result = true;
      break;
    }
  }
  return result;
}
const Header = (props: any) => {
  const { routers } = props;
  const path = props.location.pathname;
  const _routers = routers.filter((item: menu) => {
    return !item.hiddenMenu;
  });

  let { token } = store.getState();

  token = token || sessionStorage.getItem('token');


  return (
    <div className="header-layout">
      <div className="logo" onClick={()=>{onHandleClick('/home/main')}}>
      </div>
      <div className='menu-content'>
        {
          createNavMenu(_routers, path)
        }
      </div>
      <div className='user-info'>
        {
          !token ? <div><Button className='button-group' onClick={() => { onHandleClick('/login') }}>登录</Button>
            <Button className='button-group' onClick={() => { onHandleClick('/regis') }}>注册</Button></div> : <CustomDrop></CustomDrop>
        }
      </div>
    </div>
  )
}

const onHandleClick = (name: string) => {
  history.push(name);
}

const createNavMenu = (routers: Array<menu>, path: string) => {
  const flag = isExistMenuRoute(routers, path);
  console.log(flag);
  if (!flag) {
    return (<div className='product-center'>创作中心</div>)
  }
  return (<Menu mode="horizontal" onClick={onMenuClick} selectedKeys={[path]}>
    {
      routers.map((item: menu) => {
        return (<Menu.Item key={item.key}>
          <div className='content'>
            <i className={['iconfont', item.icon ? 'icon-' + item.icon : '', 'icon-common'].join(' ')} />
            <span>{item.title}</span>
          </div>
        </Menu.Item>)
      })
    }
  </Menu>)
}

export default withRouter(Header);