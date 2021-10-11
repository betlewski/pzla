package com.project.webapp.sportmanager.controller;

import com.project.webapp.sportmanager.model.Trainer;
import com.project.webapp.sportmanager.service.TrainerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/rest/trainer")
public class TrainerController {

    private TrainerService trainerService;

    @Autowired
    public TrainerController(TrainerService trainerService) {
        this.trainerService = trainerService;
    }

    @GetMapping("/byEmail")
    @ResponseBody
    public Trainer getTrainerByEmail(@RequestParam("email") String email) {
        return trainerService.getTrainerByEmail(email);
    }

    @GetMapping("/all/byClub")
    @ResponseBody
    public List<Trainer> getAllTrainersFromClub(@RequestParam("clubEmail") String clubEmail) {
        return trainerService.getAllTrainersFromClub(clubEmail);
    }

    @PostMapping("/add")
    public ResponseEntity<Trainer> addTrainer(@RequestBody Trainer trainer,
                                              @RequestParam("club") String clubEmail) {
        return trainerService.addTrainer(trainer, clubEmail);
    }

    @PutMapping("/edit")
    public ResponseEntity<Trainer> editTrainer(@RequestParam("email") String email,
                                               @RequestBody Trainer newTrainer) {
        return trainerService.editTrainer(email, newTrainer);
    }

    @PutMapping("/edit/password")
    public ResponseEntity<Trainer> changePassword(@RequestParam("email") String email,
                                                  @RequestParam("old") String oldPassword,
                                                  @RequestBody String newPassword) {
        return trainerService.changePassword(email, oldPassword, newPassword);
    }

}
