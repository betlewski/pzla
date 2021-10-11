package com.project.webapp.sportmanager.model;

import com.project.webapp.sportmanager.utils.SessionType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "trainings")
public class Training {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    private LocalDateTime startTime;

    @NotNull
    private LocalDateTime endTime;

    @NotNull
    @Enumerated(EnumType.STRING)
    private SessionType sessionType;

    @ManyToOne
    private Athlete athlete;

    @Column(length = 500, nullable = false)
    private String description;

    private Boolean athletePresence;
    private Boolean completing;

    @Column(length = 200)
    private String athleteFeelings;

}
