package com.project.webapp.sportmanager.controller;

import com.project.webapp.sportmanager.model.Training;
import com.project.webapp.sportmanager.service.TrainingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/rest/training")
public class TrainingController {

    private TrainingService trainingService;

    @Autowired
    public TrainingController(TrainingService trainingService) {
        this.trainingService = trainingService;
    }

    @GetMapping("/all/byAthlete")
    @ResponseBody
    public List<Training> getAllTrainingsForAthlete(@RequestParam("athlete") String athleteEmail) {
        return trainingService.getAllTrainingsForAthlete(athleteEmail);
    }

    @PostMapping("/add")
    public ResponseEntity<Training> addTraining(@RequestBody Training training,
                                                @RequestParam("athlete") String athleteEmail) {
        return trainingService.addTraining(training, athleteEmail);
    }

    @PostMapping("/add/all")
    public ResponseEntity<Boolean> addTrainingToAll(@RequestBody Training training,
                                                    @RequestParam("athletes") String[] athleteEmails) {
        return trainingService.addTrainingToAll(training, athleteEmails);
    }

}
