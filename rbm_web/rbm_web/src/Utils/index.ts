/*
 * @Author: mujin
 * @Date: 2022-02-20 13:01:59
 * @LastEditTime: 2022-02-25 10:19:15
 * @Description: 
 */

const Utils: Object = {
  checkLogin: (permits: any): boolean => {
    return permits
  }
}

export const checkLogin = (token: any): boolean => {
  let result: boolean = false;
  if (token) {
    result = true;
  }
  return result;
}

export default Utils;
