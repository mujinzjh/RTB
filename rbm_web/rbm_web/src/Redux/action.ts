/*
 * @Author: mujin
 * @Date: 2022-02-25 15:00:37
 * @LastEditTime: 2022-03-02 16:37:35
 * @Description: action的文件
 */

export const setToken = (data: any) => {
  return (dispatch: any, getState: any) => {
    dispatch({ type: "ADD", data })
  }
}

export const setPath = (path: string) => {
  return (dispatch: (arg0: {}) => void, getState: any) => {
    dispatch({ type: 'PATH', data: path })
  }
}
