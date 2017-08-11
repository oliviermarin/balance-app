package com.balance.api.balanceapi.domain;

public class Attendee {

	private Long id;
	private String name;

	public Attendee () {}

	public Long getId(){
		return this.id;
	}

	public void setId(Long id){
		this.id = id;
	}

	public String getName(){
		return this.name;
	}

	public void setName(String name){
		this.name = name;
	}

	@Override
	public String toString() {
  	return "Attendee{" + "id=" + id + ", name=" + name + '}';
	}
}
