package com.project.webapp.sportmanager.repository;

import com.project.webapp.sportmanager.model.Athlete;
import com.project.webapp.sportmanager.model.Club;
import com.project.webapp.sportmanager.model.Trainer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ClubRepository extends JpaRepository<Club, Long> {

    Optional<Club> findByEmail(String email);

    Optional<Club> findByTrainersContaining(Trainer trainer);

    Optional<Club> findByAthletesContaining(Athlete athlete);

}
