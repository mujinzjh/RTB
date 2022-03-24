/*
 * @Author: mujin
 * @Date: 2022-03-22 15:27:44
 * @LastEditTime: 2022-03-23 17:03:03
 * @Description: 
 */
import { Menu } from 'antd';
import { MenuClickEventHandler } from '_antd@4.19.2@antd/node_modules/rc-menu/lib/interface';
import history from '../../../Utils/history';
import './header.scss';


const { SubMenu } = Menu;
const onMenuClick: MenuClickEventHandler = ({ item, key, keyPath, domEvent }) => {
  console.log(key);

  history.push(key);
};
const Header = (props: any) => {
  return (
    <div className="header-layout">
      <div className="logo">
      </div>
      <div className='menu-content'>
        <Menu mode="horizontal" onClick={onMenuClick}>
          <Menu.Item key="mail">
            Navigation One
          </Menu.Item>
          <Menu.Item key="/Home/page2">
            设置
          </Menu.Item>
          <Menu.Item key="alipay">
            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
              Navigation Four - Link
            </a>
          </Menu.Item>
        </Menu>
      </div>
    </div>
  )
}
export default Header;