package com.blog.rbm.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.blog.rbm.entity.SysUser;
import com.blog.rbm.mapper.UserMapper;
import com.blog.rbm.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class UserServiceImpl extends ServiceImpl<UserMapper,SysUser> implements UserService {

    @Autowired
   private UserMapper userMapper;

    /**
    * @method 根据账号查找用户信息
    * @params username 用户账号
    */
    @Override
    public SysUser findByName(String username) {
        LambdaQueryWrapper<SysUser> queryWrapper = new LambdaQueryWrapper<>();
        queryWrapper.eq(SysUser::getUsername,username);
        List<SysUser> list = userMapper.selectList(queryWrapper);
        return list.size()>0 ? list.get(0) : null;
    }
}
