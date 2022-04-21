package com.blog.rbm.common.config;


import lombok.Data;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;


/**
 * @description 七牛云配置类
 *
 * */
@Data
@Configuration
public class CloudStorageConfig {
    // 域名
    @Value("${qiniu.domain}")
    private String qiniuDomin;


    // accessKey
    @Value("${qiniu.accessKey}")
    private String qiniuAccessKey;

    // secretKey
    @Value("${qiniu.secretKey}")
    private String qiniuSecretKey;

    // 域名
    @Value("${qiniu.bucketName}")
    private String qiniubucketName;

}
