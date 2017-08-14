package com.balance.api.balanceapi.domain;

public class Attendee {

	private Long id;
	private String name;
	private String email;

	public Attendee () {}

	public Attendee (String name, String email) {
		this.name = name;
		this.email = email;
	}

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

	public String getEmail(){
		return this.email;
	}

	public void setEmail(String email){
		this.email = email;
	}


	@Override
	public String toString() {
  	return "Attendee{" + "id=" + this.id + ", name=" + this.name + ", email=" + this.email + '}';
	}
}
