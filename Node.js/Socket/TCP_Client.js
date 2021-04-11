// reference
//    https://www.knowledgehut.com/tutorials/node-js/socket-services

let net = require('net');

let ip = '127.0.0.1';
let port = 3000;

let msg;
if(!process.argv[2]) msg='hi'
else {  
    msg=process.argv[2] 
};

let socket = new net.Socket();

socket.connect({ host:ip, port:port }, ()=> {
    console.log(`Connected to a server on ${ip}:${port}`);

    socket.write(`A message from Client : ${msg}`);

    socket.on('data', (chunk)=> {
        console.log('From the server : ',
        chunk.toString());        
    });

    socket.write('OK. server');
    // socket.end();

    socket.on('end', ()=> {
        console.log('Disconnected to the server');
    });

    socket.on('error', (err)=>{
        console.log('error : ', err);
    });
});