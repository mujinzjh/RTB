package com.blog.rbm.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.blog.rbm.entity.SysUser;

public interface UserMapper extends BaseMapper<SysUser> {
    void updateUser(long id, String avatar, String des, String email, String username, long currentTimeMillis);
}
