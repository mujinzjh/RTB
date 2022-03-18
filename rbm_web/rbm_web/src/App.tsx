/*
 * @Author: mujin
 * @Date: 2022-03-01 11:17:13
 * @LastEditTime: 2022-03-02 16:55:22
 * @Description: 
 */

import './App.css';
import axios from "axios";
import RouteConfig from "./Route/index";
import { Component } from 'react'
import { loginAPI } from './Services/serviceApis';
import store from './Redux';

export default class App extends Component {
  constructor(props: any) {
    super(props);
    this.state = { date: new Date() }
  };
  componentDidMount() {
    this.getData();
  }
  getData() {
    loginAPI().then((res: any) => {
      console.log(res);

    })
    // axios.post('/api/rbm/login').then(res=>{
    //   console.log(res);

    // }).catch(err=>{
    //   console.log(err);
    // })
  }
  render() {
    return (
      <>
        <RouteConfig />
      </>
    )
  }
}

