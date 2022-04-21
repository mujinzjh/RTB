package com.blog.rbm.service;

import com.blog.rbm.common.config.CloudStorageConfig;

import java.io.FileInputStream;
import java.io.InputStream;


public abstract class UploadImageService  {
    protected CloudStorageConfig config;

    public abstract String uploadQNImg(byte[] file, String path);

}
