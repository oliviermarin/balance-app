package com.balance.api.balanceapi.web;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.balance.api.balanceapi.service.IAttendeeService;
import com.balance.api.balanceapi.domain.Attendee;

import java.util.List;

@RestController
public class AttendeeController {
	
	@Autowired
  private IAttendeeService attendeeService;

	@RequestMapping("/")
	public String helloWorld() {        
  	return "Hello, world !";
	}

	@RequestMapping(name = "/attendees", method = RequestMethod.GET)
	public List<Attendee> getAllAttendees() {
    List<Attendee> attendees = attendeeService.findAll();
    return attendees;
	}
}
