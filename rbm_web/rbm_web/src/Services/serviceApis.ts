/*
 * @Author: mujin
 * @Date: 2022-03-02 11:52:07
 * @LastEditTime: 2022-03-02 11:58:24
 * @Description: 
 */

import fetchUtilHttp from "./request"
import { test } from './apis'
export const test1 = () => {
  return fetchUtilHttp(test())
}
