package com.blog.rbm.service.impl;

import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.blog.rbm.common.result.R;
import com.blog.rbm.entity.SysUser;
import com.blog.rbm.entity.param.UserParam;
import com.blog.rbm.exception.ExceptionCode;
import com.blog.rbm.exception.ServiceException;
import com.blog.rbm.mapper.UserMapper;
import com.blog.rbm.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
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

    @Override
    public R createUser(UserParam userParam) {
        if (userParam == null) {
            throw new ServiceException(ExceptionCode.PARAMTER_ERROR);
        } else {
            SysUser exitUser = findByName(userParam.getUsername());
            if (null != exitUser){
                throw new ServiceException(ExceptionCode.USER_EXIST);
            } else {
                if (userParam.getId() == null) {
                    SysUser user = new SysUser();
                    user.setUsername(userParam.getUsername());
                    user.setPassword(userParam.getPassword());
                    user.setCreateTime(System.currentTimeMillis());
                    try {
                        userMapper.insert(user);
                    } catch ( Exception e) {
                        e.printStackTrace();
                    }
                } else {
                    try {
                        userMapper.updateUser(userParam.getId(),userParam.getAvatar(),userParam.getDes(),userParam.getEmail(),userParam.getUsername(),System.currentTimeMillis());
                    } catch ( Exception e) {
                        e.printStackTrace();
                    }
                }
            }

        }

        return R.ok();
    }

    @Override
    public R updateUser(SysUser user) {
        userMapper.updateUser(user.getId(),user.getAvatar(),user.getDes(),user.getEmail(),user.getUsername(),System.currentTimeMillis());
        return null;
    }
}
