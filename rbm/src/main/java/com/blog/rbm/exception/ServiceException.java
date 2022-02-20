package com.blog.rbm.exception;

public class ServiceException extends BaseException {
    private static final Long serialVersionUID = -491802239069018358L;

    public ServiceException() {
        super();
    }

    public ServiceException(ResultHttpCode r) {
        super(r, r.getDesc());
    }

    public ServiceException(ResultHttpCode r, Object obj) {
        super(r, obj);
    }

    public ServiceException(ExceptionCode r) {
        super(r, r.getDesc());
    }

    public ServiceException(ExceptionCode r, Object obj) {
        super(r, obj);
    }

    public ServiceException(String msg) {
        super(msg);
    }
}
