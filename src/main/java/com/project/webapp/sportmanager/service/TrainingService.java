package com.project.webapp.sportmanager.service;

import com.project.webapp.sportmanager.model.Athlete;
import com.project.webapp.sportmanager.model.Training;
import com.project.webapp.sportmanager.repository.AthleteRepository;
import com.project.webapp.sportmanager.repository.TrainingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class TrainingService {

    private TrainingRepository trainingRepository;
    private AthleteRepository athleteRepository;

    @Autowired
    public TrainingService(TrainingRepository trainingRepository,
                           AthleteRepository athleteRepository) {
        this.trainingRepository = trainingRepository;
        this.athleteRepository = athleteRepository;
    }

    public List<Training> getAllTrainingsForAthlete(String athleteEmail) {
        Optional<Athlete> athlete = athleteRepository.findByEmail(athleteEmail);
        if (athlete.isPresent()) {
            return trainingRepository.findAllByAthlete(athlete.get());
        } else {
            return new ArrayList<>();
        }
    }

    public ResponseEntity<Training> addTraining(Training training, String athleteEmail) {
        Optional<Athlete> athlete = athleteRepository.findByEmail(athleteEmail);
        if (athlete.isPresent()) {
            Training newTraining = new Training();
            try {
                newTraining.setDescription(training.getDescription());
                newTraining.setStartTime(training.getStartTime());
                newTraining.setEndTime(training.getEndTime());
                newTraining.setSessionType(training.getSessionType());
                newTraining.setAthlete(athlete.get());
                newTraining = trainingRepository.save(newTraining);
            } catch (Exception e) {
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }
            return new ResponseEntity<>(newTraining, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    public ResponseEntity<Boolean> addTrainingToAll(Training training, String[] athleteEmails) {
        for (String email : athleteEmails) {
            this.addTraining(training, email);
        }
        return new ResponseEntity<>(true, HttpStatus.OK);
    }

}
