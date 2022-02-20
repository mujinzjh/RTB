package com.blog.rbm.common.result;

public interface BaseR {
    String getCode();

    String getMsg();

    String getDesc();

    default Object getResult() {
        return null;
    }
}
