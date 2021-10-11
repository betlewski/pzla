package com.project.webapp.sportmanager.model;

import com.project.webapp.sportmanager.utils.AthleteType;
import com.project.webapp.sportmanager.utils.Gender;
import com.project.webapp.sportmanager.utils.MedicalStatus;
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
@Entity(name = "athletes")
public class Athlete implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Email
    @Column(nullable = false, unique = true)
    private String email;

    @NotNull
    @Pattern(regexp = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\\S+$).{8,}$")
    private String password;

    @Column(length = 50, nullable = false)
    private String fullName;

    @NotNull
    private LocalDate birthDate;

    @NotNull
    @Enumerated(EnumType.STRING)
    private Gender gender;

    private Integer weight;
    private Integer height;

    @NotNull
    @Enumerated(EnumType.STRING)
    private MedicalStatus medicalStatus;

    @NotNull
    @Enumerated(EnumType.STRING)
    private AthleteType athleteType;

    private Boolean nationalTeamMember;

    private String address;

    @Pattern(regexp = "^[1-9]d{2}-d{3}-d{3}$")
    private String personalPhoneNumber;

    @Pattern(regexp = "^[1-9]d{2}-d{3}-d{3}$")
    private String alarmPhoneNumber;

    @NotNull
    private LocalDate registrationDate = LocalDate.now();

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return Collections.singletonList(
                new SimpleGrantedAuthority("ROLE_ATHLETE"));
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
