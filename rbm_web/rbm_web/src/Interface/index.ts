/*
 * @Author: mujin
 * @Date: 2022-02-25 14:55:00
 * @LastEditTime: 2022-03-02 15:01:00
 * @Description: 用于定义接口
 */

export interface baseObjInterface {
  [index: string]: any | undefined
}

export interface actionInterface {
  type: string,
  data: any,
}


export interface requestInterface {
  url: object,
  data?: object,
}

export interface constantsInterface extends baseObjInterface {
  [index: string]: number | string | object
}

export interface requestOptionsInterface extends baseObjInterface {
  [index: string]: any
}
//API接口类型
export interface apiInterface {
  url: string,
  method: string,
  params?: object,
  body?: object
}

//API参数接口类型
export interface apiParamsInterface extends baseObjInterface {

}
