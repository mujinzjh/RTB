/*
 * @Author: mujin
 * @Date: 2022-02-24 15:10:37
 * @LastEditTime: 2022-03-24 14:15:02
 * @Description: 
 */

export interface baseMenu {
  key: string,
  title: string,
  icon?: string,
  component?: string,
  login?: boolean,
  name: string,
  redirect?: string,
  hiddenMenu?: boolean
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
      redirect: '/Home/main'
    },
    {
      key: '/Home',
      title: '',
      name: 'home',
      component: "Home",
      children: [
        {
          key: '/Home/main',
          title: '首页',
          name: 'main',
          icon: 'home',
          component: "Main",
        },
        {
          key: '/Home/blog',
          title: '博客',
          name: 'blog',
          icon: 'boke',
          component: "Blog"
        },
        {
          key: '/Home/mine',
          title: '个人中心',
          name: 'mine',
          hiddenMenu: true,
          icon: 'gerenzhongxin',
          component: "Mine",
        },
        {
          key: '/Home/content',
          title: '内容管理',
          name: 'content',
          hiddenMenu: true,
          icon: 'neirongguanli',
          component: "Content",
        }
      ]
    },
    {
      key: '/login',
      title: '登录',
      name: 'login',
      component: "Login",
      children: []
    },
    {
      key: '/regis',
      title: '注册',
      name: 'regis',
      component: "Login",
      children: []
    },

  ],
}

export default routes;

