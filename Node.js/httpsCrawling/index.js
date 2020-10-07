const express = require('express');
const bodyParser = require('body-parser');

const processRoute = require('./routes/process');

const app = express();

// app.use(express.json());
// app.use(express.urlencoded({extended:true}));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api/process', processRoute);

app.listen(8000, () => {
      console.log('Listening on port 8000');
  });

