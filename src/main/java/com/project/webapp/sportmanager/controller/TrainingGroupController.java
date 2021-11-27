package com.project.webapp.sportmanager.controller;

import com.project.webapp.sportmanager.model.TrainingGroup;
import com.project.webapp.sportmanager.service.TrainingGroupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/rest/training-group")
public class TrainingGroupController {

    private TrainingGroupService trainingGroupService;

    @Autowired
    public TrainingGroupController(TrainingGroupService trainingGroupService) {
        this.trainingGroupService = trainingGroupService;
    }

    @GetMapping("/byName")
    @ResponseBody
    public TrainingGroup getTrainingGroupByName(@RequestParam("name") String name) {
        return trainingGroupService.getTrainingGroupByName(name);
    }

    @GetMapping("/all/byClub")
    @ResponseBody
    public List<TrainingGroup> getAllTrainingGroupsFromClub(@RequestParam("clubEmail") String clubEmail) {
        return trainingGroupService.getAllTrainingGroupsFromClub(clubEmail);
    }

    @GetMapping("/all/byTrainer")
    @ResponseBody
    public List<TrainingGroup> getAllTrainingGroupsForTrainer(@RequestParam("trainer") String trainerEmail) {
        return trainingGroupService.getAllTrainingGroupsForTrainer(trainerEmail);
    }

    @GetMapping("/all/byAthlete")
    @ResponseBody
    public List<TrainingGroup> getAllTrainingGroupsForAthlete(@RequestParam("athlete") String athleteEmail) {
        return trainingGroupService.getAllTrainingGroupsForAthlete(athleteEmail);
    }

    @PostMapping("/add")
    public ResponseEntity<TrainingGroup> addTrainingGroup(@RequestBody TrainingGroup trainingGroup,
                                                          @RequestParam("club") String clubEmail,
                                                          @RequestParam("head") String headTrainerEmail,
                                                          @RequestParam("assistant") String assistantTrainerEmail) {
        return trainingGroupService.addTrainingGroup(trainingGroup, clubEmail, headTrainerEmail, assistantTrainerEmail);
    }

    @PutMapping("/edit/athletes")
    public ResponseEntity<TrainingGroup> editAthleteInTrainingGroup(@RequestParam("groupName") String groupName,
                                                                    @RequestParam("present") Boolean present,
                                                                    @RequestBody String athleteEmail) {
        return trainingGroupService.editAthleteInTrainingGroup(groupName, present, athleteEmail);
    }

}
