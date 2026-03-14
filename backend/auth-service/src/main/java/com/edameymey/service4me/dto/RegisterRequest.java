package com.edameymey.service4me.dto;

import java.time.Instant;

public record RegisterRequest(
        String email,
        String password,
        String fullName,
        String phoneNumber,
        Instant joinDate) {
}
