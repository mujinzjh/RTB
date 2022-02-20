package com.blog.rbm.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.blog.rbm.entity.SysUser;

public interface UserService extends IService<SysUser> {
    SysUser findByName(String username);
}
