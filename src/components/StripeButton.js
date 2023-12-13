import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeButton = ({ price, newBooking }) => {
  const publishableKey = "pk_test_51OA0UAEzS4Ms5E7W0EbXmcCAFnTTgucHb8GE6ZWtj04E16RaaKZr6NSsI8mS3LqeZsVhXG3o7C1AHoXZzp7A0Gk100mT2Se5yM";

  const onToken = (token) => {
    const stripePrice = price * 100;

    console.log(token);
    console.log(newBooking);

    axios
      .post("http://localhost:8083/payment", {
        amount: stripePrice,
        token,
      })
      .then((response) => {
        console.log(response);
        alert("payment success");
      })
      .catch((error) => {
        console.log(error);
        alert("Payment failed");
        axios.post('http://localhost:8090/book/bookticket', newBooking)
          .then(response => response)
          .catch(error => console.log(error))
      });
  };

  return (
    <StripeCheckout
      amount={price}  // Assuming price is already in USD
      label="Pay Now"
      name="Wolf Elite"
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is ${price}`}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
      currency="USD"
    />
  );
};

export default StripeButton;
