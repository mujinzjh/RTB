/*
 * @Author: mujin
 * @Date: 2022-03-01 11:17:13
 * @LastEditTime: 2022-03-23 10:17:27
 * @Description: 
 */

import './App.css';
import { Component, lazy } from 'react'
import Home from './Views/Layout/Home/Home';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import history from './Utils/history';

export default class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/Home" component={Home}>
          </Route>
          <Redirect path='/' exact to='/Home' />
        </Switch>
      </Router >
    )
  }
}

