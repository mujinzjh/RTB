/*
 * @Author: mujin
 * @Date: 2022-02-25 15:00:37
 * @LastEditTime: 2022-02-25 16:30:00
 * @Description: action的文件
 */

export const setToken = (data: any) => {
  return (dispatch: any, getState: any) => {
    console.log(dispatch);

    dispatch({ type: "ADD", data })
  }
}

