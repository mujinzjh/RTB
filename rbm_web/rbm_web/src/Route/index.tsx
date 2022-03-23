/*
 * @Author: mujin
 * @Date: 2022-02-24 11:05:43
 * @LastEditTime: 2022-03-23 14:33:20
 * @Description: 
 */

import { Router, Route, Switch, Redirect } from "react-router-dom";

import routerConfig, { baseMenu, menu } from './route'

import AllComponents from "../Views/index"
import RouterWrapper from "./RouterWrapper";
import React from "react";
import { checkLogin } from '../Utils'


const getToken = (): any | null => {
  return '' || null;
}

const menuList = ['login']

const authLogin = (wrapper: React.ReactElement, route: baseMenu) => {
  const token = getToken();
  if (!checkLogin(token)) {
    return (<Redirect to={'/login'} />)
  }
  return requireAuth(wrapper, route);
};


const requireAuth = (component: React.ReactElement, route: menu) => {
  const auth = getAuth(route);
  if (!auth) {
    return (<Redirect to={'/page2'} />)
  }
  return component;
}

const getAuth = (route: menu): boolean => {
  return menuList.includes(route.name);
}

const createMenu = (r: menu) => {
  const route = (r: menu) => {
    const Component = r.component && AllComponents[r.component];
    return (
      <Route
        key={r.key}
        path={r.key}
        render={props => {
          const wrapper = (<RouterWrapper {...{ ...props, Comp: Component, route: r }} />)
          return r.login ? authLogin(wrapper, r) : wrapper;
        }}
      />
    );
  };

  const redirectRoute = (r: menu) => {
    return (<Redirect path={r.key} key={r.key} exact to={{ pathname: r.redirect }} />)
  }
  return r.redirect ? redirectRoute(r) : route(r);

}

const routes = (props: any) => {
  let { routers } = props;
  return (
    <Switch>
      {routers.map((key: menu) => { return createMenu(key) })}
    </Switch>
  );
}

export default routes;