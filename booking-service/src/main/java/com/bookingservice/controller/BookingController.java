package com.bookingservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.bookingservice.SequenceGeneratorService;
import com.bookingservice.entity.Booking;
import com.bookingservice.repo.BookingRepository;


@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/book")

public class BookingController {
	
	@Autowired
	private BookingRepository bookingrepo;
	
	@Autowired
	private SequenceGeneratorService service;
	
	
	@RequestMapping(value="/bookticket", method = RequestMethod.POST)
	public void createbooking(@RequestBody Booking booking ) {
		
		booking.setBooking_id(service.getSequenceNumber(Booking.SEQUENCE_NAME));
		bookingrepo.insert(booking);
	}
	
	@RequestMapping(value="/findbooking",method = RequestMethod.GET)
	public List<Booking> getbooking(){
		return bookingrepo.findAll();
	}
	
		@RequestMapping(value="/findbooking/{booking_id}", method = RequestMethod.PUT)
		public void insertbooking(@PathVariable int booking_id,@RequestBody Booking booking ) {
			bookingrepo.insert(booking);	
	}	
		
		@RequestMapping(value="/delete/{booking_id}",method=RequestMethod.DELETE)
		public void deleteFlight(@PathVariable int booking_id) {	
			bookingrepo.deleteById(booking_id);		
		}

}
