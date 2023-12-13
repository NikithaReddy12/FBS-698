package com.bookingservice.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "Booking")

public class Booking {
	
	@Transient
	public static final String SEQUENCE_NAME="user_sequenece";
	
	@Id
	private int booking_id;
	public String firstname;
	public String lastname;
	public String gender;
	public String seat_no;
	private String quantity;
	public String flight_id;

	public Booking() {
		
	}

	public Booking(int booking_id, String firstname, String lastname, String gender,
			String quantity, String seat_no, String flight_id) {
		super();
		this.booking_id = booking_id;
		this.firstname = firstname;
		this.lastname = lastname;
		this.gender = gender;
		this.quantity = quantity;
		this.seat_no = seat_no;
		this.flight_id = flight_id;
	}

	public int getBooking_id() {
		return booking_id;
	}

	public void setBooking_id(int booking_id) {
		this.booking_id = booking_id;
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

	public String getQuantity() {
		return quantity;
	}

	public void setQunatity(String qunatity) {
		this.quantity = qunatity;
	}

	public String getSeat_no() {
		return seat_no;
	}

	public void setSeat_no(String seat_no) {
		this.seat_no = seat_no;
	}

	public String getFlight_id() {
		return flight_id;
	}

	public void setFlight_id(String flight_id) {
		this.flight_id = flight_id;
	}
}