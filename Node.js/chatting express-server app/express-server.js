/* eslint-disable no-console */
const express = require("express");
const app = express();
const PORT = 9999;  // process.env.NODE_ENV === "production" ? 3001 : 3002;
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require('fs');

let id=0;

let messages = {results: []};





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

app.get("/messages", (req, res) => {
  // res.status(200).send(JSON.stringify(messages));
  fs.readFile('store.txt', 'utf-8', (err, data)=>{
    if(err) throw err;
    res.status(200).send(JSON.stringify(data));
  })
});

app.get('/', (req, res) => res.send('This is localhost:9999'))

app.post("/messages", (req, res) => {

  let stored=fs.readFileSync('store.txt', 'utf-8')
  if(stored){
  stored=JSON.parse(stored)
  id=stored.results[stored.results.length-1].id
  messages.results=stored.results;
  }
  
  id++;
  req.body.id=id;
  req.body.date=new Date();
  messages.results.push(req.body);
  fs.writeFile('store.txt', JSON.stringify(messages), 'utf-8', (err)=>{
    if(err) throw err;
  })
  res.status(201).send(JSON.stringify(messages));
});



app.use(function(req, res) {
  res.status(404).send("404 Error");
});

app.listen(PORT, () => {
  console.log(`server listen on ${PORT}`);
});