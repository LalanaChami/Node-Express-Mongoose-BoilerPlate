const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// DB Connection
const connectionString = "mongodb+srv://TestNodeServerlet:lalana1011@cluster0.kdc6q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true } ,() => {
     console.log('DB connected');
})

// API Routes
const paymentRoutes = require('./routes/routes');


// Middleware
app.use(bodyParser.json());
app.use('/payment', paymentRoutes );



app.listen(3000);

