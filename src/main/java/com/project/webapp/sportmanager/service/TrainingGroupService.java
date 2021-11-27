package com.project.webapp.sportmanager.service;

import com.project.webapp.sportmanager.model.Athlete;
import com.project.webapp.sportmanager.model.Club;
import com.project.webapp.sportmanager.model.Trainer;
import com.project.webapp.sportmanager.model.TrainingGroup;
import com.project.webapp.sportmanager.repository.AthleteRepository;
import com.project.webapp.sportmanager.repository.ClubRepository;
import com.project.webapp.sportmanager.repository.TrainerRepository;
import com.project.webapp.sportmanager.repository.TrainingGroupRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class TrainingGroupService {

    private TrainingGroupRepository trainingGroupRepository;
    private ClubRepository clubRepository;
    private TrainerRepository trainerRepository;
    private AthleteRepository athleteRepository;
    private ClubService clubService;

    @Autowired
    public TrainingGroupService(TrainingGroupRepository trainingGroupRepository,
                                ClubRepository clubRepository,
                                TrainerRepository trainerRepository,
                                AthleteRepository athleteRepository,
                                ClubService clubService) {
        this.trainingGroupRepository = trainingGroupRepository;
        this.clubRepository = clubRepository;
        this.trainerRepository = trainerRepository;
        this.athleteRepository = athleteRepository;
        this.clubService = clubService;
    }

    public TrainingGroup getTrainingGroupByName(String name) {
        return trainingGroupRepository.findByName(name).orElse(null);
    }

    public List<TrainingGroup> getAllTrainingGroupsFromClub(String clubEmail) {
        Optional<Club> club = clubRepository.findByEmail(clubEmail);
        if (club.isPresent()) {
            return club.get().getTrainingGroups();
        } else {
            return new ArrayList<>();
        }
    }

    public List<TrainingGroup> getAllTrainingGroupsForTrainer(String trainerEmail) {
        Optional<Trainer> trainer = trainerRepository.findByEmail(trainerEmail);
        if (trainer.isPresent()) {
            return trainingGroupRepository.findAllByAssistantTrainerEqualsOrHeadTrainerEquals(trainer.get(), trainer.get());
        } else {
            return new ArrayList<>();
        }
    }

    public List<TrainingGroup> getAllTrainingGroupsForAthlete(String athleteEmail) {
        Optional<Athlete> athlete = athleteRepository.findByEmail(athleteEmail);
        if (athlete.isPresent()) {
            return trainingGroupRepository.findAllByAthletesContaining(athlete.get());
        } else {
            return new ArrayList<>();
        }
    }

    public ResponseEntity<TrainingGroup> addTrainingGroup(TrainingGroup trainingGroup, String clubEmail,
                                                          String headTrainerEmail, String assistantTrainerEmail) {
        if (getTrainingGroupByName(trainingGroup.getName()) != null) {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        } else {
            TrainingGroup newTrainingGroup = new TrainingGroup();
            try {
                newTrainingGroup.setName(trainingGroup.getName());
                newTrainingGroup.setGroupType(trainingGroup.getGroupType());
                trainerRepository.findByEmail(headTrainerEmail).ifPresent(newTrainingGroup::setHeadTrainer);
                trainerRepository.findByEmail(assistantTrainerEmail).ifPresent(newTrainingGroup::setAssistantTrainer);
                newTrainingGroup = trainingGroupRepository.save(newTrainingGroup);
                clubService.addTrainingGroupToClub(newTrainingGroup, clubEmail);
            } catch (Exception e) {
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }
            return new ResponseEntity<>(newTrainingGroup, HttpStatus.OK);
        }
    }

    public ResponseEntity<TrainingGroup> editAthleteInTrainingGroup(String name, Boolean present, String athleteEmail) {
        TrainingGroup group = getTrainingGroupByName(name);
        Optional<Athlete> optionalAthlete = athleteRepository.findByEmail(athleteEmail);
        if (group == null || optionalAthlete.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } else {
            try {
                if (present) {
                    group.getAthletes().add(optionalAthlete.get());
                } else {
                    group.getAthletes().remove(optionalAthlete.get());
                }
                group = trainingGroupRepository.save(group);
            } catch (Exception e) {
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }
            return new ResponseEntity<>(group, HttpStatus.OK);
        }
    }

}
