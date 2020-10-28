var express = require('express')
var parseurl = require('parseurl')
var session = require('express-session')

var app = express()

let PORT=8900;

app.use(session({
    secret: 'sessionsecret',
    resave: false,
    saveUninitialized: true,
}))

app.use(function (req, res, next){
    if(!req.session.views){
        req.session.views={};
    }
    var pathname=parseurl(req).pathname;

    req.session.views[pathname]=(req.session.views[pathname] || 0)+1;
    
    next();
})

app.get('/test1', function (req, res, next){
    res.send('This page views '+req.session.views['/test1']+' times');
})

app.get('/test2', function (req, res, next){
    res.send('This page views '+req.session.views['/test2']+' times');
})

app.listen(PORT, () => {
    console.log(`server listen on ${PORT}`);
  });