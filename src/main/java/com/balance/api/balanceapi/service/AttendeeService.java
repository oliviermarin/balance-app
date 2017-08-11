package com.balance.api.balanceapi.service;

import java.util.List;
import com.balance.api.balanceapi.domain.Attendee;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

@Service
public class AttendeeService implements IAttendeeService {
	
	@Autowired
	private JdbcTemplate jtm;

	@Override
  public List<Attendee> findAll() {

  String sql = "SELECT * FROM attendees";

  List<Attendee> attendees = jtm.query(sql, new BeanPropertyRowMapper(Attendee.class));
		return attendees;
	}

}
