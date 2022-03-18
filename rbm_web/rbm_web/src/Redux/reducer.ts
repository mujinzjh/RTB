/*
 * @Author: mujin
 * @Date: 2022-02-25 14:49:32
 * @LastEditTime: 2022-03-02 16:38:17
 * @Description: reducer文件
 */

import { combineReducers } from 'redux';

import initState from './store';//引入store
import { actionInterface } from '../Interface'

const token = (state = initState.token, action: actionInterface) => {
  switch (action.type) {
    case 'ADD':
      return action.data;
    default:
      return state
  }
}

const path = (state = initState.path, action: actionInterface) => {
  switch (action.type) {
    case 'PATH':
      return action.data;
    default:
      return state
  }
}

export default combineReducers({ token, path })//导出所有的reducer
