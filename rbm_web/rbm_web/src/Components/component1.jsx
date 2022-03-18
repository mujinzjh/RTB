/*
 * @Author: mujin
 * @Date: 2022-03-18 16:21:39
 * @LastEditTime: 2022-03-18 17:19:22
 * @Description: 
 */
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import history from '../Utils/history'

class component1 extends Component {
  goBack() {
    history.goBack()
  }
  render() {
    return (
      <div>
        werwerwerwer
        <button onClick={() => { this.goBack() }}>返回</button>
      </div>
    )
  }
}
export default withRouter(component1);