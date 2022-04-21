package com.blog.rbm.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.blog.rbm.common.result.R;
import com.blog.rbm.entity.SysUser;
import com.blog.rbm.entity.param.UserParam;

public interface UserService extends IService<SysUser> {
    SysUser findByName(String username);

    R createUser(UserParam userParam);

    R updateUser(SysUser user);
}
