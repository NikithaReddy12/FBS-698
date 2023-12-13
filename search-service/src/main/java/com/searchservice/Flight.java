package com.searchservice;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection= "search" )
public class Flight {
	
	@Id
	public String flight_id;
	public String flight_name;
	public String departure_date;
	public String source;
	public String destination;
	public String depart_time;
	public String time_arrival;
	public int seats;
	public double fare;
	
	public Flight()
	{
		
	}
	
	public Flight(String flight_id, String flight_name, String departure_date, String source, String destination,
			String depart_time, String time_arrival, int seats, double fare) {
		super();
		this.flight_id = flight_id;
		this.flight_name = flight_name;
		this.departure_date = departure_date;
		this.source = source;
		this.destination = destination;
		this.depart_time = depart_time;
		this.time_arrival = time_arrival;
		this.seats = seats;
		this.fare = fare;
	}
	public String getFlight_id() {
		return flight_id;
	}
	public void setFlight_id(String flight_id) {
		this.flight_id = flight_id;
	}
	public String getFlight_name() {
		return flight_name;
	}
	public void setFlight_name(String flight_name) {
		this.flight_name = flight_name;
	}
	public String getDeparture_date() {
		return departure_date;
	}
	public void setDeparture_date(String departure_date) {
		this.departure_date = departure_date;
	}
	public String getSource() {
		return source;
	}
	public void setSource(String source) {
		this.source = source;
	}
	public String getDestination() {
		return destination;
	}
	public void setDestination(String destination) {
		this.destination = destination;
	}
	public String getDepart_time() {
		return depart_time;
	}
	public void setDepart_time(String depart_time) {
		this.depart_time = depart_time;
	}
	public String getTime_arrival() {
		return time_arrival;
	}
	public void setTime_arrival(String time_arrival) {
		this.time_arrival = time_arrival;
	}
	public int getSeats() {
		return seats;
	}
	public void setSeats(int seats) {
		this.seats = seats;
	}
	public double getFare() {
		return fare;
	}
	public void setFare(double fare) {
		this.fare = fare;
	}

	@Override
	public String toString() {
		return "Flight [flight_id=" + flight_id + ", flight_name=" + flight_name + ", departure_date=" + departure_date
				+ ", source=" + source + ", destination=" + destination + ", depart_time=" + depart_time
				+ ", time_arrival=" + time_arrival + ", seats=" + seats + ", fare=" + fare + "]";
	}	

	

}
