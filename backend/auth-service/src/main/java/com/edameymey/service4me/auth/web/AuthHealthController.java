package com.edameymey.service4me.auth.web;

import java.time.Instant;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class AuthHealthController {

    @GetMapping("/health")
    public Map<String, Object> health() {
        return Map.of(
                "service", "auth-service",
                "status", "UP",
                "timestamp", Instant.now().toString());
    }
}
