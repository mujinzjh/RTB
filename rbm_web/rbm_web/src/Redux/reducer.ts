/*
 * @Author: mujin
 * @Date: 2022-02-25 14:49:32
 * @LastEditTime: 2022-02-25 16:16:47
 * @Description: reducer文件
 */

import { combineReducers } from 'redux';

import initState from './store';//引入store
import { actionInterface } from '../Interface'

const token = (state = initState.token, action: actionInterface) => {
  console.log(action.data);
  switch (action.type) {
    case 'ADD':
      console.log(action.data);
      return action.data;
    default:
      return state
  }
}

export default combineReducers({ token })//导出所有的reducer
