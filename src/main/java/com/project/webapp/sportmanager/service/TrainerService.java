package com.project.webapp.sportmanager.service;

import com.project.webapp.sportmanager.model.Club;
import com.project.webapp.sportmanager.model.Trainer;
import com.project.webapp.sportmanager.repository.ClubRepository;
import com.project.webapp.sportmanager.repository.TrainerRepository;
import com.project.webapp.sportmanager.utils.DataUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class TrainerService {

    private TrainerRepository trainerRepository;
    private ClubRepository clubRepository;
    private ClubService clubService;
    private PasswordEncoder passwordEncoder;

    @Autowired
    public TrainerService(TrainerRepository trainerRepository,
                          ClubService clubService,
                          ClubRepository clubRepository,
                          PasswordEncoder passwordEncoder) {
        this.trainerRepository = trainerRepository;
        this.clubRepository = clubRepository;
        this.clubService = clubService;
        this.passwordEncoder = passwordEncoder;
    }

    public Trainer getTrainerByEmail(String email) {
        Optional<Trainer> trainer = trainerRepository.findByEmail(email);
        return trainer.orElse(null);
    }

    public List<Trainer> getAllTrainersFromClub(String clubEmail) {
        Optional<Club> club = clubRepository.findByEmail(clubEmail);
        if (club.isPresent()) {
            return club.get().getTrainers();
        } else {
            return new ArrayList<>();
        }
    }

    public Boolean emailExisting(String email) {
        return trainerRepository.findByEmail(email).isPresent();
    }

    public ResponseEntity<Trainer> addTrainer(Trainer trainer, String clubEmail) {
        if (emailExisting(trainer.getEmail())) {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        } else if (DataUtils.isPasswordCorrect(trainer.getPassword())) {
            Trainer newTrainer = new Trainer();
            try {
                newTrainer.setFullName(trainer.getFullName());
                newTrainer.setEmail(trainer.getEmail());
                newTrainer.setPassword(passwordEncoder.encode(trainer.getPassword()));
                newTrainer.setBirthDate(trainer.getBirthDate());
                newTrainer.setGender(trainer.getGender());
                newTrainer.setLicenseType(trainer.getLicenseType());
                newTrainer.setAddress(trainer.getAddress());
                newTrainer.setPhoneNumber(trainer.getPhoneNumber());
                newTrainer = trainerRepository.save(newTrainer);
                clubService.addTrainerToClub(newTrainer, clubEmail);
            } catch (Exception e) {
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }
            return new ResponseEntity<>(newTrainer, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    public ResponseEntity<Trainer> editTrainer(String email, Trainer newTrainer) {
        Optional<Trainer> oldTrainer = trainerRepository.findByEmail(email);
        if (oldTrainer.isPresent()) {
            Trainer trainer = oldTrainer.get();
            try {
                trainer.setFullName(newTrainer.getFullName());
                trainer.setBirthDate(newTrainer.getBirthDate());
                trainer.setGender(newTrainer.getGender());
                trainer.setLicenseType(newTrainer.getLicenseType());
                trainer.setAddress(newTrainer.getAddress());
                trainer.setPhoneNumber(newTrainer.getPhoneNumber());
                trainer = trainerRepository.save(trainer);
            } catch (Exception e) {
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }
            return new ResponseEntity<>(trainer, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    public ResponseEntity<Trainer> changePassword(String email, String oldPassword, String newPassword) {
        if (DataUtils.isPasswordCorrect(newPassword)) {
            Trainer trainer = trainerRepository.findByEmail(email).orElse(null);
            if (trainer != null && passwordEncoder.matches(oldPassword, trainer.getPassword())) {
                try {
                    trainer.setPassword(passwordEncoder.encode(newPassword));
                    trainer = trainerRepository.save(trainer);
                } catch (Exception e) {
                    return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
                }
                return new ResponseEntity<>(trainer, HttpStatus.OK);
            }
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

}
