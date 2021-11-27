package com.project.webapp.sportmanager.repository;

import com.project.webapp.sportmanager.model.Athlete;
import com.project.webapp.sportmanager.model.Trainer;
import com.project.webapp.sportmanager.model.TrainingGroup;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TrainingGroupRepository extends JpaRepository<TrainingGroup, Long> {

    Optional<TrainingGroup> findByName(String name);

    List<TrainingGroup> findAllByAssistantTrainerEqualsOrHeadTrainerEquals(Trainer assistantTrainer, Trainer headTrainer);

    List<TrainingGroup> findAllByAthletesContaining(Athlete athlete);

}
