package com.project.webapp.sportmanager.service;

import com.project.webapp.sportmanager.model.Athlete;
import com.project.webapp.sportmanager.model.Club;
import com.project.webapp.sportmanager.model.Trainer;
import com.project.webapp.sportmanager.model.TrainingGroup;
import com.project.webapp.sportmanager.repository.AthleteRepository;
import com.project.webapp.sportmanager.repository.ClubRepository;
import com.project.webapp.sportmanager.repository.TrainerRepository;
import com.project.webapp.sportmanager.utils.DataUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.util.Optional;

@Service
public class ClubService {

    private ClubRepository clubRepository;
    private TrainerRepository trainerRepository;
    private AthleteRepository athleteRepository;
    private PasswordEncoder passwordEncoder;
    private JavaMailSender javaMailSender;

    @Autowired
    public ClubService(ClubRepository clubRepository,
                       TrainerRepository trainerRepository,
                       AthleteRepository athleteRepository,
                       PasswordEncoder passwordEncoder,
                       JavaMailSender javaMailSender) {
        this.clubRepository = clubRepository;
        this.trainerRepository = trainerRepository;
        this.athleteRepository = athleteRepository;
        this.passwordEncoder = passwordEncoder;
        this.javaMailSender = javaMailSender;
    }

    public ResponseEntity<Void> sendRegistrationMail(Club club) {
        try {
            MimeMessage mail = javaMailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(mail, true);
            helper.setTo("trenujemy.pzla@gmail.com");
            helper.setSubject("Rejestracja nowego klubu LA");
            String text = "Nowy klub LA pragnie dołączyć do naszego zespołu!<br><br>"
                    + "<b>Nazwa klubu:</b> " + club.getName() + "<br>"
                    + "<b>Numer NIP:</b> " + club.getNipNumber() + "<br>"
                    + "<b>Adres email:</b> " + club.getEmail() + "<br><br>"
                    + "Nie zwlekaj z odpowiedzią...<br>"
                    + "<i>Zespół trenujeMY</i>";
            helper.setText(text, true);
            javaMailSender.send(mail);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (MessagingException e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public Club getClubByEmail(String email) {
        Optional<Club> club = clubRepository.findByEmail(email);
        return club.orElse(null);
    }

    public Club getClubByMemberEmail(String memberEmail) {
        Optional<Trainer> trainer = trainerRepository.findByEmail(memberEmail);
        if (trainer.isPresent()) {
            Optional<Club> club = clubRepository.findByTrainersContaining(trainer.get());
            return club.orElse(null);
        } else {
            Optional<Athlete> athlete = athleteRepository.findByEmail(memberEmail);
            Optional<Club> club = clubRepository.findByAthletesContaining(athlete.orElse(null));
            return club.orElse(null);
        }
    }

    public void addTrainerToClub(Trainer trainer, String clubEmail) {
        Club club = getClubByEmail(clubEmail);
        if (club != null) {
            club.getTrainers().add(trainer);
            clubRepository.save(club);
        }
    }

    public void addAthleteToClub(Athlete athlete, String clubEmail) {
        Club club = getClubByEmail(clubEmail);
        if (club != null) {
            club.getAthletes().add(athlete);
            clubRepository.save(club);
        }
    }

    public void addTrainingGroupToClub(TrainingGroup trainingGroup, String clubEmail) {
        Club club = getClubByEmail(clubEmail);
        if (club != null) {
            club.getTrainingGroups().add(trainingGroup);
            clubRepository.save(club);
        }
    }

    public ResponseEntity<Club> editClub(String email, Club newClub) {
        Optional<Club> oldClub = clubRepository.findByEmail(email);
        if (oldClub.isPresent()) {
            Club club = oldClub.get();
            try {
                club.setName(newClub.getName());
                club.setNipNumber(newClub.getNipNumber());
                club.setAddress(newClub.getAddress());
                club.setPhoneNumber(newClub.getPhoneNumber());
                club.setCreationDate(newClub.getCreationDate());
                club.setClubType(newClub.getClubType());
                club = clubRepository.save(club);
            } catch (Exception e) {
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }
            return new ResponseEntity<>(club, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    public ResponseEntity<Club> changePassword(String email, String oldPassword, String newPassword) {
        if (DataUtils.isPasswordCorrect(newPassword)) {
            Club club = clubRepository.findByEmail(email).orElse(null);
            if (club != null && passwordEncoder.matches(oldPassword, club.getPassword())) {
                try {
                    club.setPassword(passwordEncoder.encode(newPassword));
                    club = clubRepository.save(club);
                } catch (Exception e) {
                    return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
                }
                return new ResponseEntity<>(club, HttpStatus.OK);
            }
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

}
