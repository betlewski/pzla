package com.project.webapp.sportmanager.controller;

import com.project.webapp.sportmanager.model.Club;
import com.project.webapp.sportmanager.service.ClubService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/rest/club")
public class ClubController {

    private ClubService clubService;

    @Autowired
    public ClubController(ClubService clubService) {
        this.clubService = clubService;
    }

    @PostMapping("/request")
    public ResponseEntity<Void> requestClubRegistration(@RequestBody Club club) {
        return clubService.sendRegistrationMail(club);
    }

    @GetMapping("/byEmail")
    @ResponseBody
    public Club getClubByEmail(@RequestParam("email") String email) {
        return clubService.getClubByEmail(email);
    }

    @GetMapping("/byMember")
    @ResponseBody
    public Club getClubByMemberEmail(@RequestParam("member") String memberEmail) {
        return clubService.getClubByMemberEmail(memberEmail);
    }

    @PutMapping("/edit")
    public ResponseEntity<Club> editClub(@RequestParam("email") String email,
                                         @RequestBody Club newClub) {
        return clubService.editClub(email, newClub);
    }

    @PutMapping("/edit/password")
    public ResponseEntity<Club> changePassword(@RequestParam("email") String email,
                                               @RequestParam("old") String oldPassword,
                                               @RequestBody String newPassword) {
        return clubService.changePassword(email, oldPassword, newPassword);
    }

}
