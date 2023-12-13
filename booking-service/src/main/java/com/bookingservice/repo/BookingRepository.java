package com.bookingservice.repo;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.bookingservice.entity.Booking;

@Repository
public interface BookingRepository extends MongoRepository<Booking, Integer> {

}
