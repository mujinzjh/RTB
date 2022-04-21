/*
 * @Author: mujin
 * @Date: 2022-03-24 09:57:53
 * @LastEditTime: 2022-03-24 09:58:29
 * @Description: 
 * 
 */
import { Upload } from 'antd'
import React, { Component } from 'react'
import axios from 'axios';
let imgSrc = '';
const UploadFile = (file: any) => {
  // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
  var formData = new FormData();
  formData.append('file', file);
  axios.post('/api/rbm/upload', formData).then((res: any) => {
    imgSrc = res.data.result.filpath;
  })
}
const beforeUpload = (file: Object) => {
  UploadFile(file);
  return false;
}
const home = () => {

  return (
    <div>
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="/api/rbm/upload"
        beforeUpload={beforeUpload}
      >
      </Upload>
      <img src="http://r9yvz6sq4.hb-bkt.clouddn.com/code/duck/2022-04-12-7236d8210fd0481e9f274f6f0475f1c4.jpeg" alt="" />
    </div>
  )
}

export default home;