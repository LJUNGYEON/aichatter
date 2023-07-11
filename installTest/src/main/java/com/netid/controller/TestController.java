package com.netid.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {
    @GetMapping("/")
    public void test1() {

    }

    @GetMapping("/api/hello")
    public String test() {
        return "Hello, world!";
    }
}
