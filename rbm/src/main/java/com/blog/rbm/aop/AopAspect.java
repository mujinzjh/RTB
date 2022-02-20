package com.blog.rbm.aop;


import com.blog.rbm.Interceptor.TokenInterceptor;
import com.blog.rbm.common.Constants;
import com.blog.rbm.common.result.R;
import com.blog.rbm.entity.SysLog;
import com.blog.rbm.entity.SysUser;
import com.blog.rbm.entity.param.LoginParam;
import com.blog.rbm.service.SysLogService;
import com.blog.rbm.service.UserService;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.aspectj.lang.reflect.MethodSignature;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.lang.reflect.Method;

@Aspect
@Component
public class AopAspect {

    //引入日志服务
    @Autowired
    private SysLogService sysLogService;

    //引入用户服务
    @Autowired
    private UserService userService;


    @Pointcut("@annotation(com.blog.rbm.aop.Log)")
    public void logPointCut() {

    }

    @Around("logPointCut()")
    public Object around(ProceedingJoinPoint point) throws Throwable {
        String result = null;
        try {
            Object obj = point.proceed();

            if (obj != null) {
                R objR = (R) obj;
                String statusCode = objR.getCode();
                if (statusCode.equalsIgnoreCase(Constants.SUCCESS_CODE)) {
                    result = "成功";
                } else {
                    result = "失败";
                }
            }
            return obj;
        } catch (Exception e) {
            e.printStackTrace();
            result = e.getMessage();
            throw e;
        } finally {
            saveSysLog(point, result);
        }
    }

    private void saveSysLog(ProceedingJoinPoint point, String result) {
        System.out.println("切面开始。。。。。");

        //保存日志
        SysLog sysLog = new SysLog();

        //从切面织入点处通过反射机制获取织入点处的方法
        MethodSignature signature = (MethodSignature) point.getSignature();
        //获取切入点所在的方法
        Method method = signature.getMethod();

        String methodName = signature.getName();
        //获取连接点参数
        Object[] args = point.getArgs();

        SysUser user;

        //获取用户信息
        if (methodName.equalsIgnoreCase("login")) {
            LoginParam loginParam = (LoginParam) args[0];
            user = userService.findByName(loginParam.getAccount());
        } else {
            user = TokenInterceptor.THREAD_LOCAL.get();
        }
        sysLog.setUsername(user.getUsername());

        //获取操作
        Log log = method.getAnnotation(Log.class);
        if (log != null) {
            String value = log.value();
            String type = log.type();
            sysLog.setOperation(value);
            sysLog.setResult(result);
            sysLog.setStatus(Long.parseLong(type));
        }

        // 设置日志生成时间
        sysLog.setOperationTime(System.currentTimeMillis());

        //存入库内
        sysLogService.saveLog(sysLog);

    }

}
