/*
 * @Author: mujin
 * @Date: 2022-02-24 11:05:43
 * @LastEditTime: 2022-03-13 22:07:37
 * @Description: 
 */

import { Router, Route, Switch, Redirect, withRouter } from "react-router-dom";

import routerConfig, { baseMenu, menu } from './route'

import AllComponents from "../Components"
import RouterWrapper from "./RouterWrapper";
import React from "react";
import { checkLogin } from '../Utils'
import Page1 from '../Components/component';
import Page2 from '../Components/component1';

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
    <Router history={history}>
      <Switch>
        {Object.keys(routerConfig).map((key) => { return createRoute(key) })}
        {/* <Route path="/page1" component={Page1} exact />
        <Route path="/page2" component={Page2} /> */}
        <Route path="/" render={() =>
          <Redirect to="/page1" push />
        } >
        </Route>
      </Switch>
    </Router >
  );
}

export default route1;