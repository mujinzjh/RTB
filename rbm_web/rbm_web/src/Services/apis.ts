/*
 * @Author: mujin
 * @Date: 2022-03-02 11:53:39
 * @LastEditTime: 2022-03-22 14:59:46
 * @Description:
 */

import { apiInterface } from "../Interface"

export const login = (data: any): apiInterface => {
  return {
    url: '/rbm/login',
    method: 'POST',
    body: data
  }
}

export const regis = (data: any): apiInterface => {
  return {
    url: '/rbm/regis',
    method: 'POST',
    body: data
  }
}
