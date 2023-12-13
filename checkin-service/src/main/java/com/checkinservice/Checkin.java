package com.checkinservice;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Booking")
public class Checkin {
	
	@Id
	private int  _id;
	public String firstname;
	public String lastname;
	public String gender;
	public String seat_type;
	public String seat_no;
	private String quantity;
	public String flight_id;

	public Checkin() {
		
	}

	public Checkin(int _id, String firstname, String lastname, String gender, String seat_type, String seat_no,
			String quantity, String flight_id) {
		super();
		this._id = _id;
		this.firstname = firstname;
		this.lastname = lastname;
		this.gender = gender;
		this.seat_type = seat_type;
		this.seat_no = seat_no;
		this.quantity = quantity;
		this.flight_id = flight_id;
	}

	public int get_id() {
		return _id;
	}

	public void set_id(int _id) {
		this._id = _id;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getSeat_type() {
		return seat_type;
	}

	public void setSeat_type(String seat_type) {
		this.seat_type = seat_type;
	}

	public String getSeat_no() {
		return seat_no;
	}

	public void setSeat_no(String seat_no) {
		this.seat_no = seat_no;
	}

	public String getQuantity() {
		return quantity;
	}

	public void setQuantity(String quantity) {
		this.quantity = quantity;
	}

	public String getFlight_id() {
		return flight_id;
	}

	public void setFlight_id(String flight_id) {
		this.flight_id = flight_id;
	}
	
		
}