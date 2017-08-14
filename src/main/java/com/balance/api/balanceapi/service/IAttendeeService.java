package com.balance.api.balanceapi.service;

import java.util.List;
import com.balance.api.balanceapi.domain.Attendee;

public interface IAttendeeService {
  public List<Attendee> findAll();
  public Attendee findById(Long id);
  
}
