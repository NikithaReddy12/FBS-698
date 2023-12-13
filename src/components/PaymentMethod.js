import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import StripeButton from './StripeButton';
import jsPDF from "jspdf";

function PaymentMethod() {
  const location = useLocation();
  const navigate = useNavigate();

  // Correctly initialize total as a number
  const [total, setTotal] = useState(0);

  const flight = location.state.flight || [];
  const flights = location.state.flights || [];
  const fromCheckIn = location.state.fromCheckIn || [];

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('Submitting form'); // Log to check if the function is being called
    console.log('Total:', total);
    console.log('Flights:', flights);
    navigate(`/stripe`, { total, flights });
  }
  

  const generatePDF = () => {
    var doc = new jsPDF("p", "pt", "a4");
    doc.html(document.querySelector("#content"), {
      callback: function (pdf) {
        var pageCount = doc.internal.getNumberOfPages();
        pdf.deletePage(pageCount);
        pdf.save("mypdf.pdf");
      }
    });
  };

  return (
    <div className="content">
      <div className="container">
        <div className="text-container">
          <h1 className="text-payment" style={{ color: 'black' }}>Payment Confirmation</h1>
          <p className="label-group">First Name: {flight.firstname}</p>
          <p className="label-group">Last Name: {flight.lastname}</p>
          <p className="label-group">Number of seats: {flight.quantity}</p>
          {/* Use the total state here */}
          <p className="label-group">Total: {total}</p>
          <StripeButton className="label-group" price={total} newBooking={flight} />
          <button onClick={generatePDF} type="primary">Generate pdf</button>
        </div>
      </div>
    </div>
  );
}

export default PaymentMethod;
