const express = require('express');
const mongoose = require('mongoose');

const app = express();


// DB Connection
mongoose.connect('connection string', () => {
     console.log('DB connected');
})

// Middleware
app.use('/payment', () => {
     console.log('Validate Payment')
})


// Routes
app.get('/',(req, res) => {
     res.send('Payment gateway');
});

app.get('/payment',(req, res) => {
     res.send('Payment Done');
});



app.listen(3000);