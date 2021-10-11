package com.project.webapp.sportmanager.repository;

import com.project.webapp.sportmanager.model.Athlete;
import com.project.webapp.sportmanager.model.Training;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TrainingRepository extends JpaRepository<Training, Long> {

    List<Training> findAllByAthlete(Athlete athlete);

}
