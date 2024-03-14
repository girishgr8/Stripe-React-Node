import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import axios from "axios";
import PaymentForm from "./PaymentForm";

const stripe = loadStripe(process.env.REACT_APP_STRIPE_API_KEY);

const BACKEND_URL =
  process.env.REACT_APP_BACKEND_URL || "http://localhost:4000";

const StripePayment = () => {
  const [clientSecret, setClientSecret] = useState(null);

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    axios
      .post(`${BACKEND_URL}/create-payment-intent`, {
        items: [{ id: 1, name: "momos", amount: 40.0 }],
      })
      .then((resp) => setClientSecret(resp.data.clientSecret));
  }, []);

  const options = {
    clientSecret,
    theme: "stripe",
  };

  return (
    clientSecret && (
      <Elements stripe={stripe} options={options}>
        <PaymentForm></PaymentForm>
      </Elements>
    )
  );
};

export default StripePayment;
