package com.balance.api.balanceapi.web;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.GetMapping;

import com.balance.api.balanceapi.service.IAttendeeService;
import com.balance.api.balanceapi.domain.Attendee;

import java.util.List;

@RestController
public class AttendeeController {
	
	@Autowired
  	private IAttendeeService attendeeService;

	@RequestMapping("/")
	public String helloWorld() {        
  	return "Balance API";
	}

	@GetMapping("/attendee/{id}")
	public @ResponseBody Attendee findAttendeeById(@PathVariable Long id) {
    	return this.attendeeService.findById(id);
	}

	@GetMapping("/attendees")
	public @ResponseBody List<Attendee> getAllAttendees() {
		return this.attendeeService.findAll();
	}
}
