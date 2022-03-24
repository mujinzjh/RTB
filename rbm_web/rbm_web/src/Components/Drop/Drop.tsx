import { Dropdown, Menu } from "antd";
import { DownOutlined } from '@ant-design/icons';
import history from "../../Utils/history";

import './Drop.scss';
const onDropClick = (props: any) => {
  if (props.key == 3) {
    history.push('/Home/main');
  } else {
    console.log(props);
    history.push(props.key)
  }

}

const menu = (
  <Menu onClick={onDropClick} className="drop-menu-content">
    <Menu.Item key="/Home/mine">
      <div className="icon-content">
        <i className={['iconfont', 'icon-common', 'icon-gerenzhongxin'].join(" ")}></i>
        <span>个人中心</span>
      </div>
    </Menu.Item>
    <Menu.Item key="/Home/content">
      <div className="icon-content">
        <i className={['iconfont', 'icon-common', 'icon-neirongguanli'].join(" ")}></i>
        <span>内容管理</span>
      </div>
    </Menu.Item>
    <Menu.Item key="3">
      <div className="icon-content">
        <i className={['iconfont', 'icon-common', 'icon-tuichu'].join(" ")}></i>
        <span>退出</span>
      </div>
    </Menu.Item>
  </Menu>
);

const Drop = (props: any) => {
  return (
    <Dropdown overlay={menu} trigger={['click']} className="drop-content">
      <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
        Click me <DownOutlined />
      </a>
    </Dropdown>
  );
}

export default Drop;
