package com.project.webapp.sportmanager.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.project.webapp.sportmanager.utils.ClubType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import java.time.LocalDate;
import java.util.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "clubs")
public class Club implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Email
    @Column(nullable = false, unique = true)
    private String email;

    @NotNull
    @Pattern(regexp = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\\S+$).{8,}$")
    private String password;

    @Column(length = 200, nullable = false)
    private String name;

    @Column(length = 13, nullable = false)
    private String nipNumber;

    @Enumerated(EnumType.STRING)
    private ClubType clubType;

    private LocalDate creationDate;

    private String address;

    @Pattern(regexp = "^[1-9]d{2}-d{3}-d{3}$")
    private String phoneNumber;

    @NotNull
    private LocalDate registrationDate = LocalDate.now();

    @OneToMany
    @JsonIgnoreProperties(value = "club")
    private List<Trainer> trainers = new ArrayList<>();

    @OneToMany
    @JsonIgnoreProperties(value = "club")
    private List<Athlete> athletes = new ArrayList<>();

    @OneToMany
    @JsonIgnoreProperties(value = "club")
    private List<TrainingGroup> trainingGroups = new ArrayList<>();

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return Collections.singletonList(
                new SimpleGrantedAuthority("ROLE_CLUB"));
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

}
