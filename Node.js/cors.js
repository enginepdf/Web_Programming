// Reference 

//     https://www.npmjs.com/package/cors

const express = require('express');
const app = express();
const cors = require('cors');

let whitelist = ['http://example1.com', 'http://example2.com'];
let corsOptions = {
    origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1 || !origin) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    },
    // optionsSuccessStatus: 200,
    methods : ['GET', 'PUT', 'POST']  // 'GET,PUT,POST'
  }

// app.use(cors(corsOptions))

// app.get('/products/:id', cors(corsOptions), function (req, res, next) {
//   res.json({msg: 'This is CORS-enabled for a whitelisted domain.'})
// })