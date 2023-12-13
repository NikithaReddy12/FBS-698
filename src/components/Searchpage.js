import React, { useState } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import './search.css';

function Searchpage() {
  const navigate = useNavigate();

  const [state, setState] = useState({
    source: "",
    destination: "",
    departure_date: "",
    flight: []
  });
  

  const changeHandler1 = (e) => {
    setState({
      ...state,
      source: e.target.value
    });
  }

  const changeHandler2 = (e) => {
    setState({
      ...state,
      destination: e.target.value
    });
  }

  const dateHandler = (e) => {
    setState({
      ...state,
      departure_date: e.target.value
    });
  }

  const submitHandler = (e) => {
    e.preventDefault();
    axios.get("http://localhost:8080/search/details/" + state.source + "/" + state.destination + "/" + state.departure_date)
      .then(response => {
        setState({ ...state,flight: response.data });
        console.log(response.data);
       // setState({ ...state, flight: response.data });
        navigate('/availableflights', { state: { flight: response.data } });
    })
      .catch(error =>
        console.log(error)
      );
  }

  return (
    <div className="container">
      <div className="row">
        <div className="card col-md-4 offset-md-4 offset-md-4" style={{ background: "black", borderRadius: "50px" }}>
          <center>
            <form className="style" onSubmit={submitHandler} action="/">
              <h1>Flight Search</h1>
              <label> Travelling from:
                <input type="text" required pattern="[a-zA-Z]+" onInvalid={(e) => e.setCustomValidity('Please enter alphabets only. ')} name="source" value={state.source} onChange={changeHandler1} />
              </label> <br /><br />
              <label> Going to:
                <input type="text" style={{ marginLeft: "40px" }} required pattern="[a-zA-Z]+" onInvalid={(e) => e.setCustomValidity('Please enter on alphabets only. ')} name="destination" value={state.destination} onChange={changeHandler2} />
              </label>
              <br /><br />
              <label> Planning on:
                <input type="text" style={{ marginLeft: "10px" }} required pattern="^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$"
                  name="departure_date" onInvalid={(e) => e.setCustomValidity('Please enter numbers only. ')}
                  placeholder="dd-mm-yyyy" value={state.departure_date} onChange={dateHandler} />
              </label><br /><br />
              <button className="btn btn-success" type="submit"> Submit </button>
            </form>
          </center>
        </div>
      </div>
    </div>
  );
}

export default Searchpage;
