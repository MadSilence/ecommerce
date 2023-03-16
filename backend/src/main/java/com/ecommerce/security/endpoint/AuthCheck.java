package com.ecommerce.security.endpoint;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/authenticate")
public class AuthCheck {

  @GetMapping
  public ResponseEntity<String> sayHello() {
    return ResponseEntity.ok("authenticated");
  }
}
