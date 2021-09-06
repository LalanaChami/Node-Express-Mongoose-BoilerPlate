const mongoose = require ('mongoose');

const paymentSchema = mongoose.Schema({
     paymentAmount: { type : Number , required: true},
     paymentCurrency: { type : String , required: true},
     paymentMode: { type : String , required: true},
     date: { type : Date , default: Date.now}
})

module.exports = mongoose.model('Payment_Schema', paymentSchema);