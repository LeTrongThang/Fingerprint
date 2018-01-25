'use strict';
// init nodejs server
var http = require('http');
var server = http.createServer(function(request, response){
    response.writeHead(200, {
        "Context-type" : "text/plain"
    });
     
    // Show thông tin
    response.write('Your URL is ' + request.url);
     
    // Kết thúc
    response.end();
});

server.listen(80, function(){
    console.log("Start nodejs Server");
    
});