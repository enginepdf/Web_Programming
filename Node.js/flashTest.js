var express = require('express')
var session = require('express-session')
var bodyParser=require('body-parser');
var flash=require('connect-flash');

var app = express();

let PORT=8900;

app.use(bodyParser.urlencoded({extended:false}));

app.use(session({
    secret: 'sessionsecret',
    resave: false,
    saveUninitialized: true,
}))

app.use(flash());

app.get('/flash', function (req, res){
    req.flash('item', 'trasfer')
    res.send('done')
})

app.get('/check', function (req, res, next){
    res.send({messages:req.flash('item')});
})

app.listen(PORT, () => {
    console.log(`server listen on ${PORT}`);
  });