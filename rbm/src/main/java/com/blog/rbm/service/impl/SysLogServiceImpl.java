package com.blog.rbm.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.blog.rbm.entity.SysLog;
import com.blog.rbm.mapper.SysLogMapper;
import com.blog.rbm.service.SysLogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SysLogServiceImpl extends ServiceImpl<SysLogMapper,SysLog> implements SysLogService {

    @Autowired
    private SysLogMapper sysLogMapper;

    /**
     * @method 保存日志信息
     * @param sysLog 日志信息实例
     * @return  */
    @Override
    public int saveLog(SysLog sysLog) {
        try {
            return sysLogMapper.insert(sysLog);
        }
        catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }
}
