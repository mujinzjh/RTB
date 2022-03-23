/*
 * @Author: mujin
 * @Date: 2022-03-01 11:17:13
 * @LastEditTime: 2022-03-23 14:35:28
 * @Description: 
 */

import './App.css';
import { Component } from 'react'
import { Router } from 'react-router-dom';
import history from './Utils/history';
import routes from './Route/route';
import RouteConfig from "./Route/index";

export default class App extends Component {
  render() {
    return (
      <Router history={history}>
        <RouteConfig routers={routes.menus} />
      </Router >
    )
  }
}

