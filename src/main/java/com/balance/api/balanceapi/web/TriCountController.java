package com.balance.api.balanceapi.web;

import java.util.List;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.beans.factory.annotation.Autowired;

import com.balance.api.balanceapi.domain.Attendee;
import com.balance.api.balanceapi.domain.TriCount;
import com.balance.api.balanceapi.service.ITriCountService;
import com.balance.api.balanceapi.service.IAttendeeService;

@RestController
public class TriCountController {

    @Autowired
    private IAttendeeService attendeeService;

    @Autowired
    private ITriCountService triCountService;

    @GetMapping("/tricounts")
    public @ResponseBody List<TriCount> getAllTricounts () {
        return this.triCountService.findAll();
    }

    @PutMapping("/add/tricount")
    public ResponseEntity<String> addTricount(@RequestBody String title, @RequestBody String currency, @RequestBody String description, @RequestBody Long attendeeId) {            
        
        Attendee owner = this.attendeeService.findById(attendeeId);
        TriCount triCount = new TriCount(title, currency, description);
        triCount.setOwner(owner);
        
        if ( triCount.getOwner() != null && this.triCountService.saveTriCount(triCount)) {
            return new ResponseEntity<String>("The new tricount has been created!", HttpStatus.CREATED);
        } else {
            return new ResponseEntity<String>("The tricount could not be created!", HttpStatus.PRECONDITION_FAILED);
        }
    }

}