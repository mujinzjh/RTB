/*
 * @Author: mujin
 * @Date: 2022-02-24 15:10:37
 * @LastEditTime: 2022-03-23 17:14:17
 * @Description: 
 */

export interface baseMenu {
  key: string,
  title: string,
  icon?: string,
  component?: string,
  login?: boolean,
  name: string,
  redirect?: string
}

export interface menu extends baseMenu {
  children?: menu[]
}


const routes: {
  menus: menu[],
  others?: menu[] | [],
  [index: string]: any;
} = {
  menus: [
    {
      key: '/',
      title: '',
      name: '',
      redirect: '/Home/page1'
    },
    {
      key: '/Home',
      title: '首页',
      name: 'home',
      component: "Home",
      children: [
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
        }
      ]
    },

  ],
}

export default routes;

