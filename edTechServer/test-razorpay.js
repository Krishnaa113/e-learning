require('dotenv').config();
const Razorpay = require('razorpay');

console.log('RAZORPAY_KEY_ID:', process.env.RAZORPAY_KEY_ID);

const instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET
});

console.log("Razorpay instance created successfully");
