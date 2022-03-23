/*
 * @Author: mujin
 * @Date: 2022-02-24 11:05:43
 * @LastEditTime: 2022-03-23 10:17:46
 * @Description: 
 */

import { Router, Route, Switch, Redirect } from "react-router-dom";

import routerConfig, { baseMenu, menu } from './route'

import AllComponents from "../Views/index"
import RouterWrapper from "./RouterWrapper";
import React from "react";
import { checkLogin } from '../Utils'

import history from "../Utils/history"

const getToken = (): any | null => {
  return '' || null;
}

const menuList = ['login']

const authLogin = (wrapper: React.ReactElement, route: baseMenu) => {
  const token = getToken();
  if (!checkLogin(token)) {
    return (<Redirect to={'/page2'} />)
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
  const route = (r: baseMenu) => {
    const Component = r.component && AllComponents[r.component];
    return (
      <Route
        key={r.key}
        exact
        path={r.key}
        render={(props) => {
          const wrapper = (<RouterWrapper {...{ ...props, Comp: Component, route: r }} />)
          return r.login ? authLogin(wrapper, r) : wrapper;
        }}
      />
    );
  };

  const subRoute = (r: menu) => {
    r.children && r.children.map((subR: menu) => { subR.children ? subRoute(subR) : route(subR) })
  }
  return r.component ? route(r) : subRoute(r);
}

const createRoute = (key: string) => {
  return routerConfig[key] && routerConfig[key].length && routerConfig[key].map(createMenu);

}

const route1 = () => {
  return (
    <Switch>
      {Object.keys(routerConfig).map((key) => { return createRoute(key) })}
      <Route path="/Home" render={() =>
        <Redirect to="/Home/page1" />
      } >
      </Route>
    </Switch>
  );
}

export default route1;