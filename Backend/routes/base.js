
const router = require('express').Router;
const resGen = require('../utils/responseGenerator.js');

router.get('/', (req, res) => {
    res.json(resGen.generate200());
});