/* eslint-disable no-console */

// Reference : https://expressjs.com/ko/starter/static-files.html

// app.use('/static', express.static(__dirname + '/public'));   // absolute path

const express = require("express");
const app = express();
const PORT = 9999;  // process.env.NODE_ENV === "production" ? 3001 : 3002;
const cors = require("cors");
const bodyParser = require("body-parser");


app.use(bodyParser.json());
app.use(cors());

app.use((req, res, next) => {
  res.header("access-control-allow-origin", "*");
  res.header("access-control-allow-methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("access-control-allow-headers", "content-type, accept");
  res.header("access-control-max-age", 10) 
  if(req.method === 'OPTIONS'){
    res.status(200).send();
  }
  next();
});


app.get('/', (req, res) => res.send('This is localhost:9999'))

app.use(express.static('public')); // http://localhost:9999/smile.jpg

app.use('/static', express.static('public'));  // http://localhost:9999/static/smile.jpg

app.use(function(req, res) {
  res.status(404).send("404 Error");
});

app.listen(PORT, () => {
  console.log(`server listen on ${PORT}`);
});