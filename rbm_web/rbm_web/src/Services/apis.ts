/*
 * @Author: mujin
 * @Date: 2022-03-02 11:53:39
 * @LastEditTime: 2022-03-22 14:59:46
 * @Description:
 */

import { apiInterface } from "../Interface"

export const login = (): apiInterface => {
  return {
    url: '/rbm/login',
    method: 'POST',
  }
}
