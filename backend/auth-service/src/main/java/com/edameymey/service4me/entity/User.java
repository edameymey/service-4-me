package com.edameymey.service4me.entity;

import java.time.Instant;
import java.util.UUID;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "users")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(unique = true, nullable = false)
    private String email;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String fullName;

    @Column
    private String location;

    @Column(unique = true, nullable = false)
    private String phoneNumber;

    @Column
    private String skills;

    @Column
    private String lookingFor;

    @Column(nullable = false)
    private Instant joinDate;

    @Column
    private String description;
}