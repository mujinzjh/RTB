/*
 * @Author: mujin
 * @Date: 2022-02-25 14:55:00
 * @LastEditTime: 2022-03-01 15:58:13
 * @Description: 用于定义接口
 */
export interface actionInterface {
  type: string,
  data: any,
}


export interface requestInterface {
  url: object,
  data?: object,
}

export interface constantsInterface {
  [index: string]: number | string | object
}

export interface requestOptionsInterface {
  [index: string]: any
}
