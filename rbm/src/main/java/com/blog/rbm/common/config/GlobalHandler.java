package com.blog.rbm.common.config;

import com.blog.rbm.common.result.BaseR;
import com.blog.rbm.common.result.R;
import com.blog.rbm.exception.BaseException;
import com.blog.rbm.exception.ResultHttpCode;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
@Slf4j
public class GlobalHandler {
    @ExceptionHandler(value = Exception.class)
    public R handlerException(Exception e){
        if (e instanceof BaseException){
            BaseR baseR = ((BaseException) e).getR();
            return new R(baseR);
        } else {
            return new R(ResultHttpCode.BUSINESS_FAILURE);
        }
    }
}
