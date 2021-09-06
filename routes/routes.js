const express = require('express');
const router = express.Router();


router.get('/',(req, res) => {
     res.send('Payment gateway');
});

router.get('/payment',(req, res) => {
     res.send('Payment Done');
});

module.exports = router;