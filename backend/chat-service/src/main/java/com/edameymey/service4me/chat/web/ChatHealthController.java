package com.edameymey.service4me.chat.web;

import java.time.Instant;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/chat")
public class ChatHealthController {

    @GetMapping("/health")
    public Map<String, Object> health() {
        return Map.of(
                "service", "chat-service",
                "status", "UP",
                "timestamp", Instant.now().toString());
    }
}
