// npm install node
// node simpleserver.js to start this server

const http = require('http');

const PORT = 9999;

const ip = 'localhost';

const server = http.createServer((request, response) => {

  if (request.method === 'POST') {
    if (request.url === '/msg') {
      let data = '';
      request.on('data', chunk => {
        data += chunk;
      });
      request.on('end', () => {
        response.writeHead(201, defaultCorsHeader);
        console.log(
          `http request method is ${request.method}, url is ${request.url} well done!`
        );
        response.end(JSON.stringify(data));
      });
    } 
     else {
      response.writeHead(404, defaultCorsHeader);
      response.end();
    }
  }
  if (request.method === 'OPTIONS') {
    response.writeHead(200, defaultCorsHeader);
    response.end();
  }
});

server.listen(PORT, ip, () => {
  console.log(`http server is listening on ${ip}:${PORT}`);
});

const defaultCorsHeader = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10
};
