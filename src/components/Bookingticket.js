import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './search.css';
import axios from 'axios';
import authService from '../services/auth.service';

function Bookingticket() {
  const location = useLocation();
  const navigate = useNavigate();
  const flights = location.state.flights;

  const [state, setState] = useState({
    currentUser: authService.getCurrentUser(),
    firstname: '',
    lastname: '',
    gender: '',
    seat_type: '',
    seat_no: '',
    quantity: '',
    isFlightCreated: false,
    isFieldsRequired: false, // Add a state for required fields
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const confirmHandler = (event) => {
    event.preventDefault();

    const { firstname, lastname, gender, quantity } = state;

    if (!firstname || !lastname || !gender || !quantity) {
      // Check if any of the fields are empty
      setState((prevState) => ({
        ...prevState,
        isFieldsRequired: true, // Set the flag to show the message
      }));
      return; // Exit the function without making the API call
    }

    const newBooking = {
      firstname: state.firstname,
      lastname: state.lastname,
      gender: state.gender,
      seat_no: state.seat_no,
      quantity: state.quantity,
      flight_id:location.state.flight_id
     // flight_id: location.state.flights.flight_id
    };

    axios
      .post('http://localhost:8090/book/bookticket', newBooking)
      .then((response) => {
        console.log(response);
        window.alert('Flight is confirmed.');
        setState((prevState) => ({
          ...prevState,
          firstname: '',
          lastname: '',
          gender: '',
          seat_type: '',
          seat_no: '',
          quantity: '',
          isFlightCreated: true,
        }));
        navigate('/payment', {
          state: { flight: newBooking, flights: flights, fromCheckIn: false },
        });
      })
      .catch((error) => console.log(error));
  };

  if (state.isFlightCreated) {
    navigate('/availablleflights');
  }

  return (
    <div className="container">
      <div className="row">
        <div className="card col-md-4 offset-md-4 offset-md-4" style={{ background: "black", borderRadius: "50px" }}>
          <h1 className="text-center" style={{ color: "white" }}>Booking</h1>
          <h1 className="text-center" style={{ color: "white" }}>{flights ? flights.flight_name : 'Loading...'}</h1>

          {state.isFieldsRequired && (
            <p style={{ color: 'red' }}>Fields are required</p>
          )}

          <div className="card-body">
            <form className="bookingstyle">
              <div className="forms">
                <label className="text-center"> First Name*:
                  <input
                    type="text"
                    required
                    pattern="[a-zA-Z]+"
                    onInvalid="setCustomValidity('Please enter alphabets only. ')"
                    name="firstname"
                    id="firstname"
                    value={state.firstname}
                    onChange={handleChange}
                  ></input>
                </label><br /><br />

                <label> Last Name*:
                  <input
                    type="text"
                    required
                    pattern="[a-zA-Z]+"
                    onInvalid="setCustomValidity('Please enter alphabets only. ')"
                    name="lastname"
                    id="lastname"
                    value={state.lastname}
                    onChange={handleChange}
                  ></input>
                </label><br /><br />

                <label name="gender" style={{ marginRight: "30px" }}>Gender*:</label>
                <select
                  name="gender"
                  id="gender"
                  style={{ marginRight: "110px" }}
                  value={state.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select...</option>
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                  <option value="Other">Other</option>
                </select><br /><br />

                <label name="seat_no" style={{ marginRight: "30px" }}>SeatNo:</label>
                <select
                  name="seat_no"
                  id="seat_no"
                  style={{ marginRight: "130px" }}
                  value={state.seat_no}
                  onChange={handleChange}
                >
                  <option value="1a">1a</option>
                  <option value="1b">1b</option>
                  <option value="10a">10a</option>
                  <option value="34b">34b</option>
                  <option value="53c">53c</option>
                  <option value="16a">16a</option>
                  <option value="6b">6b</option>
                  <option value="4a">4a</option>
                </select><br /><br />

                <label style={{ marginLeft: "1px" }}> Quantity*:
                  <input
                    type="text"
                    required
                    pattern="[0-9]+" // Updated to accept only numbers
                    name="quantity"
                    id="quantity"
                    value={state.quantity}
                    onChange={handleChange}
                    style={{ marginLeft: "15px" }}
                  ></input>
                </label><br /><br />

                <button className="btn btn-info" type="submit" onClick={confirmHandler}>
                  Pay
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bookingticket;
