// reference 
//     https://www.knowledgehut.com/tutorials/node-js/socket-services

let net = require('net');

let port = 3000;

let server = net.createServer((socket)=> {
    console.log(`Client : ${socket.remoteAddress}:${socket.remotePort} connected`);
    socket.write('First message from server');

    socket.on('data', (chunk)=> {
        console.log('From the client : ',
        chunk.toString());
    });

    socket.on('end', ()=> {
        console.log('The client disconnected');
    });

    socket.setTimeout(6000, ()=> {
        socket.end('Timeout')
    });
});

server.on('listening', ()=> {
    console.log(`Server is listening on ${port}`);
});

server.on('close', ()=> {
    console.log('Server closed');
});

server.on('error', (err)=>  {
    console.log('error : ', err)
});


server.listen(port);