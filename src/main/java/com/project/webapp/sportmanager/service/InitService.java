package com.project.webapp.sportmanager.service;

import com.project.webapp.sportmanager.model.*;
import com.project.webapp.sportmanager.repository.*;
import com.project.webapp.sportmanager.utils.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Arrays;

@Service
public class InitService {

    private AthleteRepository athleteRepository;
    private ClubRepository clubRepository;
    private TrainerRepository trainerRepository;
    private TrainingRepository trainingRepository;
    private TrainingGroupRepository trainingGroupRepository;
    private PasswordEncoder passwordEncoder;

    @Autowired
    public InitService(AthleteRepository athleteRepository,
                       ClubRepository clubRepository,
                       TrainerRepository trainerRepository,
                       TrainingRepository trainingRepository,
                       TrainingGroupRepository trainingGroupRepository,
                       PasswordEncoder passwordEncoder) {
        this.athleteRepository = athleteRepository;
        this.clubRepository = clubRepository;
        this.trainerRepository = trainerRepository;
        this.trainingRepository = trainingRepository;
        this.trainingGroupRepository = trainingGroupRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @PostConstruct
    public void initialize() {
//        TrainingGroup group1 = new TrainingGroup();
//        TrainingGroup group2 = new TrainingGroup();
//        TrainingGroup group3 = new TrainingGroup();
//        TrainingGroup group4 = new TrainingGroup();
//
//        group1.setName("Grupa 1");
//        group1.setGroupType(GroupType.JUMPING);
//
//        group2.setName("Grupa 2");
//        group2.setGroupType(GroupType.RUNNING);
//
//        group3.setName("Grupa 3");
//        group3.setGroupType(GroupType.TECHNICAL);
//
//        group4.setName("Grupa 4");
//        group4.setGroupType(GroupType.RUNNING);
//
//        group1 = trainingGroupRepository.save(group1);
//        group2 = trainingGroupRepository.save(group2);
//        group3 = trainingGroupRepository.save(group3);
//        group4 = trainingGroupRepository.save(group4);
//
//        Athlete athlete1 = new Athlete();
//        athlete1.setFullName("Szymon Betlewski");
//        athlete1.setEmail("athlete1@pbs.edu.pl");
//        athlete1.setPassword(passwordEncoder.encode("Qwerty.1"));
//        athlete1.setPersonalPhoneNumber("730-358-777");
//        athlete1.setMedicalStatus(MedicalStatus.HEALTHY);
//        athlete1.setWeight(62);
//        athlete1.setHeight(175);
//        athlete1.setAthleteType(AthleteType.HURDLER);
//        athlete1.setNationalTeamMember(Boolean.FALSE);
//        athlete1.setAddress("Pruszcz ul. Bydgoska 18, 86-120");
//        athlete1.setGender(Gender.MALE);
//        athlete1.setBirthDate(LocalDate.of(1998, 8, 3));
//        athlete1 = athleteRepository.save(athlete1);
//
//        Athlete athlete2 = new Athlete();
//        athlete2.setFullName("Anna Kowalska");
//        athlete2.setEmail("athlete2@pbs.edu.pl");
//        athlete2.setPassword(passwordEncoder.encode("Qwerty.1"));
//        athlete2.setPersonalPhoneNumber("123-456-789");
//        athlete2.setMedicalStatus(MedicalStatus.INJURED);
//        athlete2.setWeight(62);
//        athlete2.setHeight(175);
//        athlete2.setAthleteType(AthleteType.MIDDLE_DISTANCE_RUNNER);
//        athlete2.setNationalTeamMember(Boolean.TRUE);
//        athlete2.setAddress("Bydgoszcz");
//        athlete2.setGender(Gender.FEMALE);
//        athlete2.setBirthDate(LocalDate.of(2001, 8, 15));
//        athlete2 = athleteRepository.save(athlete2);
//
//        Trainer trainer1 = new Trainer();
//        trainer1.setFullName("Szymon Betlewski");
//        trainer1.setEmail("trainer1@pbs.edu.pl");
//        trainer1.setPhoneNumber("730-358-777");
//        trainer1.setLicenseType(LicenseType.FIRST);
//        trainer1.setAddress("Pruszcz ul. Bydgoska 18, 86-120");
//        trainer1.setGender(Gender.MALE);
//        trainer1.setPassword(passwordEncoder.encode("Qwerty.1"));
//        trainer1.setBirthDate(LocalDate.of(1998, 8, 3));
//        trainer1 = trainerRepository.save(trainer1);
//
//        Trainer trainer2 = new Trainer();
//        trainer2.setFullName("Bartosz Krauze");
//        trainer2.setEmail("trainer2@pbs.edu.pl");
//        trainer2.setPhoneNumber("123-456-789");
//        trainer2.setPassword(passwordEncoder.encode("Qwerty.1"));
//        trainer2.setLicenseType(LicenseType.MASTER);
//        trainer2 = trainerRepository.save(trainer2);
//
//        group1.setHeadTrainer(trainer1);
//        group1.setAssistantTrainer(trainer2);
//
//        group2.setHeadTrainer(trainer2);
//        group2.setAssistantTrainer(trainer1);
//
//        group3.setHeadTrainer(trainer2);
//        group3.setAssistantTrainer(trainer2);
//
//        group4.setHeadTrainer(trainer2);
//        group4.setAssistantTrainer(trainer1);
//        group4.setAthletes(Arrays.asList(athlete1, athlete2));
//
//        trainingGroupRepository.saveAll(Arrays.asList(group1, group2, group3, group4));
//
//        Club club = new Club();
//        club.setName("KU AZS Politechnika Bydgoska");
//        club.setNipNumber("554-031-31-07");
//        club.setClubType(ClubType.ACADEMIC);
//        club.setAddress("Al. prof. S. Kaliskiego 7, 85-796 Bydgoszcz");
//        club.setPhoneNumber("(52) 374-94-11");
//        club.setCreationDate(LocalDate.of(1992, 10, 1));
//        club.setEmail("club1@pbs.edu.pl");
//        club.setPassword(passwordEncoder.encode("Qwerty.1"));
//        club.setTrainers(Arrays.asList(trainer1, trainer2));
//        club.setAthletes(Arrays.asList(athlete1, athlete2));
//        club.setTrainingGroups(Arrays.asList(group1, group2, group3, group4));
//        clubRepository.save(club);
//
//        Training training = new Training();
//        training.setDescription("Wybieganie przedtreningowe");
//        training.setSessionType(SessionType.RESILIENCE);
//        training.setStartTime(LocalDateTime.of(2021, 10, 4, 10, 0));
//        training.setEndTime(LocalDateTime.of(2021, 10, 4, 12, 0));
//        training.setAthletePresence(true);
//        training.setAthlete(athlete1);
//        training.setCompleting(true);
//        training.setAthleteFeelings("Średnie tempo biegu - 4:30/km");
//        training = trainingRepository.save(training);
//
//        Training training2 = new Training();
//        training2.setDescription("Przebieżki 5x300m w czasie poniżej 60s każda");
//        training2.setSessionType(SessionType.SPEED);
//        training2.setStartTime(LocalDateTime.of(2021, 10, 4, 14, 0));
//        training2.setEndTime(LocalDateTime.of(2021, 10, 4, 15, 0));
//        training2.setAthlete(athlete1);
//        training2 = trainingRepository.save(training2);
//
//        group4.setTrainings(Arrays.asList(training, training2));
//        trainingGroupRepository.save(group4);
    }

}
