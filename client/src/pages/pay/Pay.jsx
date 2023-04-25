
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from 'react';
import newRequest from '../../utils/newRequest';
import { useParams } from "react-router-dom";
import "./Pay.scss"
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";

const stripePromise = loadStripe("pk_test_51MjN6xJdJSVqqB9CucumvN50x5mdwxQTUJOi4p4XhhRaV3mbAi6funcycrUE11bzypiBFCzJzEeEgpmmDTYPOFhS00UAOD1RCa ");

const Pay = () => { 
    const [clientSecret, setClientSecret] = useState("");
    const { id } = useParams();
    
    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await newRequest.post(`/orders/create-payment-intent/${id}`);
                setClientSecret(res.data.clientSecret);
            } catch (error) {
                console.log(error);
            }
        };
        makeRequest();
    },[]);

    const appearance = {
        theme: 'stripe',
      };
      const options = {
        clientSecret,
        appearance,
      };

  return (
    <div className="pay-page">
         {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
        
    </div>
  )
}

export default Pay