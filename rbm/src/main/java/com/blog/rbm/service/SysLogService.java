package com.blog.rbm.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.blog.rbm.entity.SysLog;
import org.springframework.stereotype.Service;


public interface SysLogService extends IService<SysLog> {
    int saveLog(SysLog sysLog);
}
