const express = require('express');
const app = express();

const middleware = (req, res, next) => { 
    if (!req.body) {
      return res.status(401).send('Unauthorized');
    }
      return next();
  };

app.get('/process', middleware, (req, res) => { process(req, res)});

app.listen(3000, ()=> {
    console.log('Express server on port 3000');
  });