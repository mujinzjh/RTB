package com.blog.rbm.controller;

import com.blog.rbm.Interceptor.TokenInterceptor;
import com.blog.rbm.common.result.R;
import com.blog.rbm.common.utils.QiniuUtils;
import com.blog.rbm.entity.SysUser;
import com.blog.rbm.exception.ExceptionCode;
import com.blog.rbm.exception.ServiceException;
import com.blog.rbm.service.UploadImageService;
import com.blog.rbm.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.Resource;
import java.io.ByteArrayOutputStream;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.rmi.ServerException;
import java.util.HashMap;
import java.util.Map;

@Slf4j
@RestController
public class FileUploadController {
    @Resource
     UploadImageService uploadImageService;

    @Autowired
    private UserService userService;

    @PostMapping(value = "/upload")
    private R upLoadImage(@RequestParam("file") MultipartFile file) throws IOException {
        String fileName = file.getOriginalFilename();

        String imgName = QiniuUtils.getRandomImgName(fileName);

        if (file.isEmpty()) {
            throw new ServiceException(ExceptionCode.FILE_UPLOAD_ERR);
        }
        InputStream inputStream = null;
        ByteArrayOutputStream bos = null;
        byte[] uploadByte = null;
        try {
            inputStream = file.getInputStream();
            bos = new ByteArrayOutputStream();
            byte[] b = new byte[1024];
            int len = -1;
            while ((len=inputStream.read(b))!=-1) {
                bos.write(b,0,len);
            }
            uploadByte = bos.toByteArray();
        } catch (Exception e) {
            e.printStackTrace();
        }

        String path = uploadImageService.uploadQNImg(uploadByte,imgName);
        if (StringUtils.isBlank(path)) {
            throw new ServiceException(ExceptionCode.FILE_UPLOAD_ERR);
        }

        Map<String,String> result = new HashMap<>();
        result.put("filePath",path);
        System.out.println(path);
        SysUser user = TokenInterceptor.THREAD_LOCAL.get();
        user.setAvatar(path);
        userService.updateUser(user);
        return R.ok().data(result);
    }
}
