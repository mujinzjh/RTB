/*
 * @Author: mujin
 * @Date: 2022-02-25 15:04:42
 * @LastEditTime: 2022-02-25 15:09:05
 * @Description: 
 */
import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk"

import reducers from './reducer';

let store = createStore(
  reducers,
  applyMiddleware(thunk)
)

export default store;