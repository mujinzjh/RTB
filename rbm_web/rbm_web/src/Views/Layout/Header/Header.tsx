/*
 * @Author: mujin
 * @Date: 2022-03-22 15:27:44
 * @LastEditTime: 2022-03-24 10:44:25
 * @Description: 
 */
import { Menu } from 'antd';
import { withRouter, Link } from 'react-router-dom';
import { MenuClickEventHandler } from '_antd@4.19.2@antd/node_modules/rc-menu/lib/interface';
import { menu } from '../../../Route/route';
import history from '../../../Utils/history';
import './header.scss';


const { SubMenu } = Menu;
const onMenuClick: MenuClickEventHandler = ({ item, key, keyPath, domEvent }) => {
  console.log(key);

  history.push(key);
};
const Header = (props: any) => {
  const { routers } = props;
  const path = props.location.pathname;
  // console.log(props.location.pathname);

  return (
    <div className="header-layout">
      <div className="logo">
      </div>
      <div className='menu-content'>
        <Menu mode="horizontal" onClick={onMenuClick} selectedKeys={[path]}>
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
        </Menu>
      </div>
      <div className='user-info'>

      </div>
    </div>
  )
}
export default withRouter(Header);