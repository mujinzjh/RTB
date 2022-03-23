/*
 * @Author: mujin
 * @Date: 2022-02-24 15:10:37
 * @LastEditTime: 2022-03-22 17:36:00
 * @Description: 
 */

export interface baseMenu {
  key: string,
  title: string,
  icon?: string,
  component?: string,
  login?: boolean,
  name: string,
}

export interface menu extends baseMenu {
  children?: menu[]
}


const menus: {
  menus: menu[],
  others?: menu[] | [],
  [index: string]: any;
} = {
  menus: [
    {
      key: '/Home/page1',
      title: '测试',
      name: 'page1',
      component: "Page1",
    },
    {
      key: '/Home/page2',
      title: 'test',
      name: 'page2',
      component: "Page2"
    },
  ],
  others: []
}

export default menus;

