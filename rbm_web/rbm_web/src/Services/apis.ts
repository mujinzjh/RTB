/*
 * @Author: mujin
 * @Date: 2022-03-02 11:53:39
 * @LastEditTime: 2022-03-02 15:01:34
 * @Description:
 */

import { apiInterface, apiParamsInterface } from "../Interface"


// export const login = (data: apiParamsInterface): apiInterface => {
//   return {
//     url: '/rbm/login',
//     method: 'POST',
//     body: data
//   }
// }

export const login = (): apiInterface => {
  return {
    url: '/rbm/login',
    method: 'POST',
  }
}
