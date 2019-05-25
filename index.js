
let express = require('express');
let path = require('path');

let server = express();

server.use(express.static(path.join(__dirname,'./')));

server.get('/', function(req,res){
    res.sendFile('/index.html', {root: __dirname })
});

server.listen(9000,function(){
    console.log('Server listening on Port 9000');
});

