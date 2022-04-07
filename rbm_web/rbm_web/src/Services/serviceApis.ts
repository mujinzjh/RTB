/*
 * @Author: mujin
 * @Date: 2022-03-02 11:52:07
 * @LastEditTime: 2022-03-02 15:10:12
 * @Description: 
 */

import fetchUtilHttp from "./request"
import { login, regis } from './apis'

/**
 * @method:  登录
 * @param {*}
 * @return {*}
 */
export const loginAPI = (data: Object
): Promise<number> => {
  return fetchUtilHttp(login(data))
}

export const regisAPI = (data: Object): Promise<number> => {
  return fetchUtilHttp(regis(data))
}