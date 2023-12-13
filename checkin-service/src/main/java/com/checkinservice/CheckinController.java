package com.checkinservice;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/checkin")
public class CheckinController {
	
	@Autowired
	private CheckinRepository checkinrepo;
	
	
	@RequestMapping(value="/checkindetails/{_id}",method = RequestMethod.GET)
	public Optional<Checkin> getbooking(@PathVariable int _id){
		return checkinrepo.findById(_id);
	}
	
		
		@RequestMapping(value="/delete/{_id}",method=RequestMethod.DELETE)
		public void deleteFlight(@PathVariable int _id) {	
			checkinrepo.deleteById(_id);		
		}

}
