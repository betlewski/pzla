package com.project.webapp.sportmanager.security.service;

import com.project.webapp.sportmanager.model.Athlete;
import com.project.webapp.sportmanager.model.Club;
import com.project.webapp.sportmanager.model.Trainer;
import com.project.webapp.sportmanager.repository.AthleteRepository;
import com.project.webapp.sportmanager.repository.ClubRepository;
import com.project.webapp.sportmanager.repository.TrainerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class JwtUserDetailsService implements UserDetailsService {

    private AthleteRepository athleteRepository;
    private TrainerRepository trainerRepository;
    private ClubRepository clubRepository;

    @Autowired
    public JwtUserDetailsService(AthleteRepository athleteRepository,
                                 TrainerRepository trainerRepository,
                                 ClubRepository clubRepository) {
        this.athleteRepository = athleteRepository;
        this.trainerRepository = trainerRepository;
        this.clubRepository = clubRepository;
    }

    /**
     * Pobranie użytkownika na podstawie jego nazwy (adresu email)
     *
     * @param username adres email użytkownika
     * @return znaleziony użytkownik
     * @throws UsernameNotFoundException w przypadku braku użytkownika
     */
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Athlete athlete = athleteRepository.findByEmail(username).orElse(null);
        if (athlete != null) {
            return athlete;
        } else {
            Trainer trainer = trainerRepository.findByEmail(username).orElse(null);
            if (trainer != null) {
                return trainer;
            } else {
                Club club = clubRepository.findByEmail(username).orElse(null);
                if (club != null) {
                    return club;
                } else {
                    throw new UsernameNotFoundException("User with email: " + username + " not found");
                }
            }
        }
    }

}
