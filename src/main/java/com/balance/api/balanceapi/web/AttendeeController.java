package com.balance.api.balanceapi.web;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
public class AttendeeController {

	@RequestMapping("/")
	public String helloWorld() {        
  	return "Hello, world !";
	}

}
