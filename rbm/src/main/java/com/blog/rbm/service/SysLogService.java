package com.blog.rbm.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.blog.rbm.entity.SysLog;

public interface SysLogService extends IService<SysLog> {
    int saveLog(SysLog sysLog);
}
