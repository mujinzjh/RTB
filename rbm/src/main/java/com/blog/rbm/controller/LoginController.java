package com.blog.rbm.controller;

import com.alibaba.fastjson.JSON;
import com.blog.rbm.common.Constants;
import com.blog.rbm.common.redis.RedisService;
import com.blog.rbm.common.result.R;
import com.blog.rbm.common.utils.TokenUtils;
import com.blog.rbm.entity.SysUser;
import com.blog.rbm.entity.param.LoginParam;
import com.blog.rbm.entity.param.UserParam;
import com.blog.rbm.exception.ExceptionCode;
import com.blog.rbm.exception.ServiceException;
import com.blog.rbm.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.security.PublicKey;
import java.util.HashMap;
import java.util.Map;


@RestController
public class LoginController {

    private static String token;

    @Autowired
    private UserService userService;

    @Autowired
    private RedisService redisService;

    @PostMapping(value = "/login")
    public R login(@RequestBody LoginParam loginParam, HttpServletRequest request){
        SysUser user = userService.findByName(loginParam.getAccount());
        if (user == null || !loginParam.getPassword().equalsIgnoreCase(user.getPassword())){
            throw new ServiceException(ExceptionCode.ACCOUNT_OR_PASSWORD_ERROR);
        }
        token = TokenUtils.createToken(user);
        String userStr = JSON.toJSONString(user);
        redisService.set(token,userStr, Constants.USER_TOKEN_EXPIRE);
        Map<String,Object> resultMap = new HashMap<>();
        resultMap.put("user",user);
        resultMap.put("token",token);
        return R.ok().data(resultMap);
    }

    @PostMapping(value = "/regis")
    public R regis(@RequestBody UserParam userParamaram,HttpServletRequest request){
        return userService.createUser(userParamaram);
    }

}
