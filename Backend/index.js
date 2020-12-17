const express = require('express');
const app = express(); 
const port = 8000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})

const base = require('./routes/base.js');
const auth = require('./routes/auth.js');
app.use('/base', base);
app.use('/auth', auth);