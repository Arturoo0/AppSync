
const express = require('express');
const router = express.Router(); 
const resGen = require('../utils/responseGenerator.js');

router.get('/', (req, res) => {
    res.json(resGen.generate200('The server is running.'));
});

module.exports = router; 