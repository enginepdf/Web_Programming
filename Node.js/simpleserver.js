// Reference : https://nodejs.org/ko/docs/guides/anatomy-of-an-http-transaction/

// response.write('<html>');
// response.write('<body>');
// response.write('<h1>Hello, World!</h1>');
// response.write('</body>');
// response.write('</html>');
// response.end();     // response.end('<html><body><h1>Hello, World!</h1></body></html>');


const http = require('http');

http.createServer((request, response) => {
 // var endURL = url.parse(request.url, true).pathname;  // after basic URL like localhost:3000/path -> /path
 // var query = endURL.replace(/^\//, "");  // path
  
  const { headers, method, url } = request;
  let body = [];
  request.on('error', (err) => {
    console.error(err);
  }).on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body).toString();

    response.on('error', (err) => {
      console.error(err);
    });

    response.statusCode = 200; // success
    response.setHeader('Content-Type', 'application/json'); // response.writeHead(200, {'Content-Type': 'application/json'})

    const responseBody = { headers, method, url, body };

    response.write(JSON.stringify(responseBody));
    response.end();    // response.end(JSON.stringify(responseBody))

  });
}).listen(PORT);


///// echo server

// const http = require('http');

// http.createServer((request, response) => {
//  let body = [];
//  request.on('data', (chunk) => {
//    body.push(chunk);
//  }).on('end', () => {
//    body = Buffer.concat(body).toString();
//    response.end(body);
//  });
// }).listen(PORT);


///// using pipe, request data goes to response

// const http = require('http');
// http.createServer((request, response) => {            
//  if (request.method === 'POST' && request.url === '/echo') {
//    request.pipe(response);
//   } else {
//    response.statusCode = "error code here";
//    response.end();
//  }
//  }).listen(PORT);
