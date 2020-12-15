
const express = require('express');
const router = express.Router();

const base = require('./base.js');

router.use('/base', base);

module.exports = router;