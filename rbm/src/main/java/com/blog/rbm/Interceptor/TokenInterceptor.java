package com.blog.rbm.Interceptor;

import com.alibaba.fastjson.JSON;
import com.blog.rbm.common.redis.RedisService;
import com.blog.rbm.entity.SysUser;
import com.blog.rbm.exception.ResultHttpCode;
import com.blog.rbm.exception.ServiceException;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class TokenInterceptor implements HandlerInterceptor {

    public static final ThreadLocal<SysUser> THREAD_LOCAL = new ThreadLocal<>();

    //引入redis服务
    @Autowired
    private RedisService redisService;

    //重写预处理的方法
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        String token = request.getHeader("authorize");
        String userStr = redisService.get("token");
        if (StringUtils.isBlank(token) || StringUtils.isBlank(userStr)) {
            throw new ServiceException(ResultHttpCode.TOKEN_INVAILD);
        }
        SysUser user = JSON.parseObject(userStr,SysUser.class);
        THREAD_LOCAL.set(user);
        return true;
    }

    //编译后方法
    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
        THREAD_LOCAL.remove();
    }
}
