package com.searchservice;

import java.util.List;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/search")
public class FlightController {
	
	@Autowired
	private FlightRepo flightRepo;
	
	@RequestMapping(value="/create",method=RequestMethod.POST)
	public void createflight(@RequestBody Flight flight) {	
		flightRepo.insert(flight);		
	}
	
	@RequestMapping(value="/list", method=RequestMethod.GET)
	public List<Flight> listflight() {
		return flightRepo.findAll();
	}
	
	@RequestMapping(value="/list/{flight_id}", method=RequestMethod.GET)
	public Optional<Flight> listflight(@PathVariable String flight_id) {
		return flightRepo.findById(flight_id);
	}
	
	@RequestMapping(value="/delete/{flight_id}",method=RequestMethod.DELETE)
	public void deleteFlight(@PathVariable String flight_id) {	
		flightRepo.deleteById(flight_id);		
	}
	
	@RequestMapping(value="/list/{flight_id}",method=RequestMethod.PUT)
	public void editflight(@PathVariable String flight_id, @RequestBody Flight flight){
		 flightRepo.insert(flight);
	}
	
	@RequestMapping(value="/details/{source}/{destination}/{departure_date}", method=RequestMethod.GET)
	public List<Flight> getdetails(@PathVariable("source") String source, @PathVariable("destination") String destination, 
			@PathVariable("departure_date") String departure_date){
		return flightRepo.findByLocation(source,destination,departure_date);
	}
	

}
