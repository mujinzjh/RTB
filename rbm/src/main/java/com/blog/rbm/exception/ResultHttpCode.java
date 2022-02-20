package com.blog.rbm.exception;


import com.blog.rbm.common.result.BaseR;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum ResultHttpCode implements BaseR {

    SUCCESS("200", "OK", ""),

    NOT_FOUND("404", "not found", ""),

    BUSINESS_FAILURE("450", "fail", "业务错误"),

    TOKEN_INVAILD("401", "token invaild", "token失效");

    private final String code;
    private final String msg;
    private final String desc;

    @Override
    public String getCode() {
        return code;
    }

    @Override
    public String getMsg() {
        return msg;
    }

    @Override
    public String getDesc() {
        return desc;
    }
}
