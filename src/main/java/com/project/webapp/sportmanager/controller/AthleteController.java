package com.project.webapp.sportmanager.controller;

import com.project.webapp.sportmanager.model.Athlete;
import com.project.webapp.sportmanager.service.AthleteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/rest/athlete")
public class AthleteController {

    private AthleteService athleteService;

    @Autowired
    public AthleteController(AthleteService athleteService) {
        this.athleteService = athleteService;
    }

    @GetMapping("/byEmail")
    @ResponseBody
    public Athlete getAthleteByEmail(@RequestParam("email") String email) {
        return athleteService.getAthleteByEmail(email);
    }

    @GetMapping("/all/byClub")
    @ResponseBody
    public List<Athlete> getAllAthletesFromClub(@RequestParam("clubEmail") String clubEmail) {
        return athleteService.getAllAthletesFromClub(clubEmail);
    }

    @GetMapping("/free/byClub")
    @ResponseBody
    public List<Athlete> getFreeAthletesFromClub(@RequestParam("clubEmail") String clubEmail) {
        return athleteService.getFreeAthletesFromClub(clubEmail);
    }

    @PostMapping("/add")
    public ResponseEntity<Athlete> addAthlete(@RequestBody Athlete athlete,
                                              @RequestParam("club") String clubEmail) {
        return athleteService.addAthlete(athlete, clubEmail);
    }

    @PutMapping("/edit")
    public ResponseEntity<Athlete> editAthlete(@RequestParam("email") String email,
                                               @RequestBody Athlete newAthlete) {
        return athleteService.editAthlete(email, newAthlete);
    }

    @PutMapping("/edit/password")
    public ResponseEntity<Athlete> changePassword(@RequestParam("email") String email,
                                                  @RequestParam("old") String oldPassword,
                                                  @RequestBody String newPassword) {
        return athleteService.changePassword(email, oldPassword, newPassword);
    }

}
