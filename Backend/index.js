const express = require('express');
const app = express(); 
const cors = require('cors');
const port = 8000;

app.use(cors());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})

const base = require('./routes/base.js');
const auth = require('./routes/auth.js');
app.use('/base', base);
app.use('/auth', auth);