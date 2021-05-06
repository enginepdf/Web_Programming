// Reference 

    // https://create-react-app.dev/docs/deployment/#github-pages-https-pagesgithubcom


// Static Server

    // npm install -g serve
    // serve -s build  
        // serve -s build -l 5000   // --listen


// Integrated into an existing Server side app

    // const express = require('express');
    // const path = require('path');
    // const app = express();

    // app.use(express.static(path.join(__dirname, 'build')));

    // app.get('/', function (req, res) {
    //   res.sendFile(path.join(__dirname, 'build', 'index.html'));
    // });

    // app.listen(9000);