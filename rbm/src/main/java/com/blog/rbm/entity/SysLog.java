package com.blog.rbm.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

import java.io.Serializable;

@Data
@TableName(value = "blog_sys_log")
public class SysLog implements Serializable {
    @TableId(type = IdType.AUTO)

    private Long id;

    private String username;

    private String operation;

    private long status;

    private String result;

    @TableField(value = "operation_time")
    private Long operationTime;
}