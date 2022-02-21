package com.blog.rbm.controller;

import com.blog.rbm.common.result.R;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.security.PublicKey;

@RestController
public class LoginController {

    @PostMapping(value = "/login")
    public R login(){
        return R.ok();
    }
}
