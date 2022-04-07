package com.blog.rbm.entity.param;

import lombok.Data;

@Data
public class UserParam {
    private Long id;

    private String username;

    private String password;

    private String avatar;

    private String email;

    private String des;
}
