
const express = require('express');
const router = express.Router();
const resGen = require('../Utils/responseGenerator.js'); 
const bodyParser = require('body-parser');

const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })

router.post('/login', jsonParser, (req, res) => {
    console.log(req.body);
    res.send(resGen.generate200({authRouteType : 'login'}));
});

router.post('/signup', jsonParser, (req, res) => {
    console.log(req.body);
    res.send(resGen.generate200({authRouteType : 'signup'}));
});

module.exports = router;