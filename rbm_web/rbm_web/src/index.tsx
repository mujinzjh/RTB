/*
 * @Author: mujin
 * @Date: 2022-02-20 16:21:18
 * @LastEditTime: 2022-03-22 16:34:57
 * @Description: 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Styles/common.scss';
import App from './App';
import { Provider } from 'react-redux';
import store from "./Redux";
import 'antd/dist/antd.css';

import reportWebVitals from './reportWebVitals';
import { message } from 'antd';

message.config({
  top: 100,
  duration: 1,
  maxCount: 1,
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
