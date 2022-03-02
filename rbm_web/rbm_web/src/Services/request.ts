/*
 * @Author: mujin
 * @Date: 2022-03-01 15:26:55
 * @LastEditTime: 2022-03-02 13:51:39
 * @Description: 
 */

import { requestOptionsInterface } from "../Interface";
import Constants from "../Constants";
import qs from 'qs';


const defaultConfig: any = {
  credentials: "include",
  headers: {
  }
}

const handleOptions = (option: requestOptionsInterface, _option = {}) => {
  return Object.assign(defaultConfig, option);
}

const handleParams = (option: requestOptionsInterface) => {
  let params, method = option.method.toLocaleUpperCase();
  if (method == "GET") {
    if (option.hasOwnProperty('param')) {

    } else {
      params = '';
    }
  } else {
    params = option;
  }
  return params;
}


const fetchUtilHttp = (options: requestOptionsInterface): any => {
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

  return fetch(url, _options).then(res => {
    console.log(res, '11');
    return res.json();
  }).catch(err => {
    return Promise.reject(err);
  })

};

export default fetchUtilHttp;