/*
 * @Author: mujin
 * @Date: 2022-03-18 16:21:39
 * @LastEditTime: 2022-03-18 17:00:39
 * @Description: 
 */
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import history from '../Utils/history';
class component extends Component {
  constructor(props) {
    super(props);
  }
  handleClick() {
    console.log(history);
    history.push('/page2');
  }
  render() {
    return (
      <div>
        23123131231
        <button onClick={() => { this.handleClick() }}>测试</button>
      </div>
    )
  }
}
export default withRouter(component);