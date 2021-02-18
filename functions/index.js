const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51ILw4XFJlu55LaubhvfhDi1NM89zRuILW7wimc14gBtvJ8W0dyFPt0ApwXzKmXdHUmn5SV6mTJ6fC16Tl0EBtuYt00DbO6Fujp')

// API

// -App Config
const app = express();

// - Middleware configuration

app.use(cors());
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post('/payment/create', async(request, response) => {
    const total = request.query.total;

    console.log("Payment Request Recieved Succesfully for this amount", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    })
    //OK status
    response.status(201).send({
        clientSecret : paymentIntent.client_secret,
    });
    
});

// - listen command
exports.api = functions.https.onRequest(app);
// example endpoint
// http://localhost:5001/challenge-d8456/us-central1/api