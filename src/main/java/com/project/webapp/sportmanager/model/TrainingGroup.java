package com.project.webapp.sportmanager.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.project.webapp.sportmanager.utils.GroupType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "training_groups")
public class TrainingGroup {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 50, nullable = false, unique = true)
    private String name;

    @NotNull
    @Enumerated(EnumType.STRING)
    private GroupType groupType;

    @NotNull
    private LocalDate creationDate = LocalDate.now();

    @ManyToOne
    @JsonIgnoreProperties(value = "trainingGroups")
    private Trainer headTrainer;

    @ManyToOne
    @JsonIgnoreProperties(value = "trainingGroups")
    private Trainer assistantTrainer;

    @OneToMany
    @JsonIgnoreProperties(value = "trainingGroup")
    private List<Athlete> athletes = new ArrayList<>();

    @OneToMany
    @JsonIgnoreProperties(value = "trainingGroup")
    private List<Training> trainings = new ArrayList<>();

}
