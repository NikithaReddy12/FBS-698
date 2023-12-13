package com.checkinservice;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CheckinRepository extends MongoRepository<Checkin, Integer> {

}
