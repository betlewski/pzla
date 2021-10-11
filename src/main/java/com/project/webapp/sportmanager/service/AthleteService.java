package com.project.webapp.sportmanager.service;

import com.project.webapp.sportmanager.model.Athlete;
import com.project.webapp.sportmanager.model.Club;
import com.project.webapp.sportmanager.repository.AthleteRepository;
import com.project.webapp.sportmanager.repository.ClubRepository;
import com.project.webapp.sportmanager.utils.DataUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class AthleteService {

    private AthleteRepository athleteRepository;
    private ClubRepository clubRepository;
    private ClubService clubService;
    private PasswordEncoder passwordEncoder;

    @Autowired
    public AthleteService(AthleteRepository athleteRepository,
                          ClubService clubService,
                          ClubRepository clubRepository,
                          PasswordEncoder passwordEncoder) {
        this.athleteRepository = athleteRepository;
        this.clubRepository = clubRepository;
        this.clubService = clubService;
        this.passwordEncoder = passwordEncoder;
    }

    public Athlete getAthleteByEmail(String email) {
        Optional<Athlete> athlete = athleteRepository.findByEmail(email);
        return athlete.orElse(null);
    }

    public List<Athlete> getAllAthletesFromClub(String clubEmail) {
        Optional<Club> club = clubRepository.findByEmail(clubEmail);
        if (club.isPresent()) {
            return club.get().getAthletes();
        } else {
            return new ArrayList<>();
        }
    }

    public List<Athlete> getFreeAthletesFromClub(String clubEmail) {
        Optional<Club> club = clubRepository.findByEmail(clubEmail);
        if (club.isPresent()) {
            List<Athlete> hiredAthletes = club.get().getTrainingGroups().stream()
                    .flatMap(group -> group.getAthletes().stream())
                    .collect(Collectors.toList());
            return club.get().getAthletes().stream()
                    .filter(athlete -> !hiredAthletes.contains(athlete))
                    .collect(Collectors.toList());
        } else {
            return new ArrayList<>();
        }
    }

    public Boolean emailExisting(String email) {
        return athleteRepository.findByEmail(email).isPresent();
    }

    public ResponseEntity<Athlete> addAthlete(Athlete athlete, String clubEmail) {
        if (emailExisting(athlete.getEmail())) {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        } else if (DataUtils.isPasswordCorrect(athlete.getPassword())) {
            Athlete newAthlete = new Athlete();
            try {
                newAthlete.setFullName(athlete.getFullName());
                newAthlete.setEmail(athlete.getEmail());
                newAthlete.setPassword(passwordEncoder.encode(athlete.getPassword()));
                newAthlete.setBirthDate(athlete.getBirthDate());
                newAthlete.setGender(athlete.getGender());
                newAthlete.setWeight(athlete.getWeight());
                newAthlete.setHeight(athlete.getHeight());
                newAthlete.setNationalTeamMember(athlete.getNationalTeamMember());
                newAthlete.setMedicalStatus(athlete.getMedicalStatus());
                newAthlete.setAthleteType(athlete.getAthleteType());
                newAthlete.setAddress(athlete.getAddress());
                newAthlete.setPersonalPhoneNumber(athlete.getPersonalPhoneNumber());
                newAthlete.setAlarmPhoneNumber(athlete.getAlarmPhoneNumber());
                newAthlete = athleteRepository.save(newAthlete);
                clubService.addAthleteToClub(newAthlete, clubEmail);
            } catch (Exception e) {
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }
            return new ResponseEntity<>(newAthlete, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    public ResponseEntity<Athlete> editAthlete(String email, Athlete newAthlete) {
        Optional<Athlete> oldAthlete = athleteRepository.findByEmail(email);
        if (oldAthlete.isPresent()) {
            Athlete athlete = oldAthlete.get();
            try {
                athlete.setFullName(newAthlete.getFullName());
                athlete.setBirthDate(newAthlete.getBirthDate());
                athlete.setGender(newAthlete.getGender());
                athlete.setWeight(newAthlete.getWeight());
                athlete.setHeight(newAthlete.getHeight());
                athlete.setNationalTeamMember(newAthlete.getNationalTeamMember());
                athlete.setMedicalStatus(newAthlete.getMedicalStatus());
                athlete.setAthleteType(newAthlete.getAthleteType());
                athlete.setAddress(newAthlete.getAddress());
                athlete.setPersonalPhoneNumber(newAthlete.getPersonalPhoneNumber());
                athlete.setAlarmPhoneNumber(newAthlete.getAlarmPhoneNumber());
                athlete = athleteRepository.save(athlete);
            } catch (Exception e) {
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }
            return new ResponseEntity<>(athlete, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    public ResponseEntity<Athlete> changePassword(String email, String oldPassword, String newPassword) {
        if (DataUtils.isPasswordCorrect(newPassword)) {
            Athlete athlete = athleteRepository.findByEmail(email).orElse(null);
            if (athlete != null && passwordEncoder.matches(oldPassword, athlete.getPassword())) {
                try {
                    athlete.setPassword(passwordEncoder.encode(newPassword));
                    athlete = athleteRepository.save(athlete);
                } catch (Exception e) {
                    return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
                }
                return new ResponseEntity<>(athlete, HttpStatus.OK);
            }
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

}
