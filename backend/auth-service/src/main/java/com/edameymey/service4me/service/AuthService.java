package com.edameymey.service4me.service;

import com.edameymey.service4me.dto.AuthResponse;
import com.edameymey.service4me.dto.LoginRequest;
import com.edameymey.service4me.dto.RegisterRequest;
import com.edameymey.service4me.entity.User;
import com.edameymey.service4me.exception.EmailAlreadyExistsException;
import com.edameymey.service4me.exception.InvalidCredentialsException;
import com.edameymey.service4me.exception.PhoneNumberAlreadyExistsException;
import com.edameymey.service4me.repository.UserRepository;
import com.edameymey.service4me.security.JwtService;

import lombok.RequiredArgsConstructor;

import java.time.Instant;
import java.util.Locale;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;
    private final PasswordEncoder passwordEncoder;

    public AuthResponse login(LoginRequest request) {
        String normalizedEmail = normalizeEmail(request.email());

        org.springframework.security.core.Authentication authentication;
        try {
            authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(normalizedEmail, request.password()));
        } catch (BadCredentialsException ex) {
            throw new InvalidCredentialsException("Invalid email or password");
        }

        String token = jwtService.generateToken(authentication.getName());

        return new AuthResponse(token);
    }

    public AuthResponse register(RegisterRequest request) {
        String normalizedEmail = normalizeEmail(request.email());

        if (userRepository.findByEmail(normalizedEmail).isPresent()) {
            throw new EmailAlreadyExistsException("Email is already registered");
        }
        if (userRepository.findByPhoneNumber(request.phoneNumber()).isPresent()) {
            throw new PhoneNumberAlreadyExistsException("Phone number is already registered");
        }

        User userEntity = new User();

        userEntity.setEmail(normalizedEmail);
        userEntity.setPassword(passwordEncoder.encode(request.password()));
        userEntity.setFullName(request.fullName());
        userEntity.setPhoneNumber(request.phoneNumber());
        userEntity.setJoinDate(Instant.now());

        userRepository.save(userEntity);

        String token = jwtService.generateToken(normalizedEmail);

        return new AuthResponse(token);
    }

    private String normalizeEmail(String email) {
        if (email == null || email.isBlank()) {
            throw new IllegalArgumentException("Email is required");
        }
        return email.trim().toLowerCase(Locale.ROOT);
    }
}