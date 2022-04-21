package com.blog.rbm.service.impl;

import com.blog.rbm.Interceptor.TokenInterceptor;
import com.blog.rbm.common.config.CloudStorageConfig;
import com.blog.rbm.entity.SysUser;
import com.blog.rbm.exception.ExceptionCode;
import com.blog.rbm.exception.ServiceException;
import com.blog.rbm.service.UploadImageService;
import com.google.gson.Gson;
import com.qiniu.common.QiniuException;
import com.qiniu.common.Zone;
import com.qiniu.http.Response;
import com.qiniu.storage.Configuration;
import com.qiniu.storage.UploadManager;
import com.qiniu.storage.model.DefaultPutRet;
import com.qiniu.util.Auth;

import org.springframework.stereotype.Service;

import java.io.FileInputStream;
import java.io.InputStream;


@Service
public class UploadImageServiceImpl extends UploadImageService {

    private UploadManager uploadManager;//七牛云文件上传管理器
    private String token;

    private Auth auth;//七牛云认证管理

    public UploadImageServiceImpl(CloudStorageConfig config) {
        this.config = config;
        init();
    }

    private void  init(){
        uploadManager = new UploadManager(new Configuration(Zone.zone1()));
        auth  = Auth.create(config.getQiniuAccessKey(),config.getQiniuSecretKey());
        token = auth.uploadToken(config.getQiniubucketName());
    }

    @Override
    public String uploadQNImg(byte[] file, String key) {
        
        try {
            Response res = uploadManager.put(file,key,token);
            if (!res.isOK()) {
                throw new ServiceException(ExceptionCode.FILE_UPLOAD_ERR);
            }

            DefaultPutRet putRet = new Gson().fromJson(res.bodyString(), DefaultPutRet.class);
            String path = config.getQiniuDomin() + "/" + putRet.key;
            return path;
        }
        catch (QiniuException e){
            e.printStackTrace();
        }
        return "";

    }
}
