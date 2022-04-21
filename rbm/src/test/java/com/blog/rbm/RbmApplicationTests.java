package com.blog.rbm;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class RbmApplicationTests {

    @Test
    void contextLoads() {
        String os = System.getProperty("os.name").toLowerCase();
        System.out.println(os);
    }

}
