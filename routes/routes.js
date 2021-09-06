const express = require('express');
const paymentSchema = require('../models/paymentModel');
const router = express.Router();


router.get('/',(req, res) => {
     res.send('Payment gateway');
});

router.post('/makePayment',(req, res) => {
     console.log(req.body)
     const payment = new paymentSchema({
          paymentAmount: req.body.paymentAmount,
          paymentCurrency: req.body.paymentCurrency,
          paymentMode: req.body.paymentMode,
     });
     payment.save().then(data => {
          res.json(data);
     })
     .catch(err => {
          res.json("Invalid Response")
     })
});

module.exports = router;