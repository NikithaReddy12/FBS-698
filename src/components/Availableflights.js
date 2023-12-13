import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './search.css';

function Availableflights() {
    const location = useLocation();
    const navigate = useNavigate();

    // Change this.state.flight to use useState
    const [flights, setFlights] = useState(location.state.flight || []);

    // BookTicket function
    const bookTicket = (flight) => {
        navigate('/bookingtickets', { state: { flight } });
        console.log(flight);
    }

    // Render component
    return(
        <div>
            <h1 className="text-center">Available Flights</h1>
            <table className="table table-striped table-bordered" style={{ marginTop: 20 }}>              
                <thead className="afstyle">
                    <tr>
                        <td>FlightId</td>
                        <td>Flight name</td>
                        <td>Flight Departure</td>
                        <td>Source</td>
                        <td>Destination</td>
                        <td>Departure time</td>
                        <td>Arrival time</td>
                        <td>Flight seats</td>
                        <td>Flight Fare</td>
                        <td>Booking</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        flights.map(flight =>
                            <tr key={flight.flight_id}>
                                <td>{flight.flight_id}</td>
                                <td>{flight.flight_name}</td>
                                <td>{flight.departure_date}</td>
                                <td>{flight.source}</td>
                                <td>{flight.destination}</td>
                                <td>{flight.depart_time}</td>
                                <td>{flight.time_arrival}</td>
                                <td>{flight.seats}</td>
                                <td>{flight.fare}</td>
                                <td>
                                    <button className="btn btn-primary" onClick={() => bookTicket(flight)}>
                                        Book
                                    </button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Availableflights;