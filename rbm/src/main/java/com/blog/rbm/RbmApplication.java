package com.blog.rbm;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.blog.rbm.mapper")
public class RbmApplication {

    public static void main(String[] args) {
        SpringApplication.run(RbmApplication.class, args);
    }

}
