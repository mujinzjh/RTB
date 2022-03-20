/*
 * @Author: mujin
 * @Date: 2022-03-01 15:26:55
 * @LastEditTime: 2022-03-20 21:30:09
 * @Description: 
 */

import { requestOptionsInterface } from "../Interface";
import Constants from "../Constants";
import qs from 'qs';
import history from "../Utils/history"


import { message } from 'antd'

const defaultConfig: any = {
  credentials: "include",
  headers: {
  }
}

const handleOptions = (option: requestOptionsInterface, _option = {}) => {
  return Object.assign(defaultConfig, option);
}

const fetchUtilHttp = (options: requestOptionsInterface): Promise<number> => {
  let url: string = Constants.BASE_URL + options.url;

  if (options.hasOwnProperty('params')) {
    if (/^(GET|DELETE)$/i.test(options.method.toLocaleUpperCase())) {
      const ask = url.includes('?') ? '&' : '?';
      url += `${ask}${qs.stringify(options.params)}`
    }
    delete options.params;
  }

  let _options = handleOptions(options);
  _options.headers.Accept = 'application/json';

  const token = sessionStorage.getItem('token');

  token && (_options.headers.Authorization = token);

  if (/^(POST|PUT)$/i.test(_options.method.toLocaleUpperCase())) {
    _options.type = _options.type || 'json';

    if (_options.type == 'urlencoded') {
      _options.headers["Content-Type"] = "application/x-www-form-urlencoded";
      _options.body = qs.stringify(_options.body);
    }
    if (_options.type == 'json') {
      _options.headers["Content-Type"] = "application/json";
      _options.body = _options.body && JSON.stringify(_options.body);
    }
  }

  return new Promise((resolve, reject) => {
    fetch(url, _options).then(res => {
      const { status, statusText } = res;
      if (status == Constants.HTTP_SUCCESS_CODE) {
        return res.json().then(data => {
          if (data.code == '10004') {
            logOut();
          }
          resolve(data);
        }).catch(err => {
          reject(err);
        })
      }
      if (status == Constants.TOKEN_ISVAILD) {
        logOut();
      }
      if (String(status).includes('5')) {
        services();
      }
    }).catch(err => {
      reject(err);
    })
  });


};

const logOut = () => {
  history.push('/login');
  message.error('登录超时！请重新登录');
}

const services = () => {
  message.error("网络或服务异常");
}

export default fetchUtilHttp;