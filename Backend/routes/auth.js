
const express = require('express');
const router = express.Router();
const resGen = require('../Utils/responseGenerator.js'); 

router.post('/login', (req, res) => {
    console.log(req);
    res.send(resGen.generate200({authRouteType : 'login'}));
});

router.post('/signup', (req, res) => {
    console.log(req);
    res.send(resGen.generate200({authRouteType : 'signup'}));
});

module.exports = router;