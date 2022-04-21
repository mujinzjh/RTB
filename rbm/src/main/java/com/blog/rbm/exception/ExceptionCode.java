package com.blog.rbm.exception;

import com.blog.rbm.common.result.BaseR;
import lombok.AllArgsConstructor;
import lombok.Getter;

/*
 *
 * http返回Code码
 * */
@Getter
@AllArgsConstructor
public enum ExceptionCode implements BaseR {

    TOKEN_IS_INVALID("10004", "no token", ""),
    PARAMTER_ERROR("10006", "param error", ""),
    ROLE_NOT_EXIST("10007","not exist","角色不存在"),
    ACCOUNT_OR_PASSWORD_ERROR("10005", "pwd error", "用户名或密码错误"),
    FILE_UPLOAD_ERR("10009","","文件上传失败"),
    USER_EXIST("10008","user exist","用户已存在");


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
