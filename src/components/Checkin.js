import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

function CheckIn() {
  const location = useLocation();
  const navigate = useNavigate();

  const [state, setState] = useState({
    booking_id: '',
    checkin: {},
    flight: {},
  });

  const idHandler = (event) => {
    setState({
      ...state,
      booking_id: event.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .get(`http://localhost:8091/checkin/checkindetails/${state.booking_id}`)
      .then((response) => {
        setState({
          ...state,
          checkin: response.data,
        });
      })
      .catch((err) => console.log(err));
  };

  const deleteHandler = (e) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:8091/checkin/delete/${state.booking_id}`)
      .then((response) => {
        setState({
          ...state,
          checkin: response.data,
        });
      })
      .catch((err) => console.log(err));
  };

  const flightHandler = (e) => {
    e.preventDefault();
    axios
      .get(`http://localhost:8080/search/list/${state.checkin.flight_id}`)
      .then((response) => {
        setState({
          ...state,
          flight: response.data,
        });
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    // Use useEffect to fetch flight details when state.checkin is updated
    if (state.checkin && state.checkin.flight_id) {
      axios
        .get(`http://localhost:8080/search/list/${state.checkin.flight_id}`)
        .then((response) => {
          setState({
            ...state,
            flight: response.data,
          });
        })
        .catch((err) => console.log(err));
    }
  }, [state.checkin]); // Run this effect when state.checkin changes

  const payHandler = (e) => {
    e.preventDefault();
    navigate('/payment', {
      state: { flight: state.checkin, flights: state.flight, fromCheckIn: true },
    });
  };

  return (
    <div>
      <h1 className="text-center">CheckIn Details</h1>
      <label>
        Booking Id: <input type="number" name="booking_id" id="booking_id" value={state.booking_id} onChange={idHandler}></input>
      </label>
      &nbsp;&nbsp;&nbsp;
      <button className="btn btn-primary" onClick={submitHandler}>
        Booking Details
      </button>
      <button className="btn btn-primary" onClick={deleteHandler} style={{ marginLeft: '10px' }}>
        Delete Booking
      </button>
      {state.checkin && Object.keys(state.checkin).length > 0 ? (
  //Check if state.checkin exists and is not null before using Object.keys()
  <table className="table table-striped table-bordered" style={{ marginTop: 20 }}>
    <thead className="checkinstyle">
      <tr>
        <td>Booking id</td>
        <td>First Name</td>
        <td>Last Name</td>
        <td>Gender</td>
        <td>Seat No</td>
        <td>Quantity</td>
        <td>Flight Details</td>
      </tr>
    </thead>
    <tbody>
      <tr key={state.checkin.booking_id}>
        <td>{state.checkin.booking_id}</td>
        <td>{state.checkin.firstname}</td>
        <td>{state.checkin.lastname}</td>
        <td>{state.checkin.gender}</td>
        <td>{state.checkin.seat_no}</td>
        <td>{state.checkin.quantity}</td>
        <td>
          <button className="btn btn-primary" onClick={flightHandler}>
            Flight Details
          </button>
        </td>
      </tr>
    </tbody>
  </table>
) : (
  <div></div>
)}

{state.flight && Object.keys(state.flight).length > 0 ? (
  // Check if state.flight exists and is not null before using Object.keys()
  <table className="table table-striped table-bordered" style={{ marginTop: 20 }}>
    <thead className="checkinstyle">
      <tr>
        <td>Flight Id</td>
        <td>Flight Name</td>
        <td>Date of Departure</td>
        <td>Starting City</td>
        <td>Destination City</td>
        <td>Departure Time</td>
        <td>Arrival Time</td>
        <td>Fare</td>
      </tr>
    </thead>
    <tbody>
      <tr key={state.flight.flight_id}>
        <td>{state.flight.flight_id}</td>
        <td>{state.flight.flight_name}</td>
        <td>{state.flight.departure_date}</td>
        <td>{state.flight.source}</td>
        <td>{state.flight.destination}</td>
        <td>{state.flight.depart_time}</td>
        <td>{state.flight.time_arrival}</td>
        <td>{state.flight.fare}</td>
      </tr>
    </tbody>
  </table>
) : (
  <div></div>
)}
      <button className="btn btn-primary" onClick={payHandler} style={{ marginLeft: '10px' }}>
        Pay
      </button>
    </div>
  );
}

export default CheckIn;
