package com.blog.rbm.common.utils;

import java.util.UUID;
import cn.hutool.core.date.DateUtil;

// 七牛云方法
public class QiniuUtils {
    /**
     * @Description: 生成唯一图片名称
     * @Param: fileName
     * @return: 云服务器fileName
     */
    public static  String getRandomImgName(String fileName) {
        int index = fileName.lastIndexOf(".");
        if ((fileName == null || fileName.isEmpty()) || index == -1) {
            throw new IllegalArgumentException();
        }
        //获取文件后缀
        String suffix = fileName.substring(index);
        //生成UUID
        String uuid = UUID.randomUUID().toString().replaceAll("-","");
        String path = "code/duck/" + DateUtil.today() + "-" + uuid + suffix;

        return path;
    }
}
