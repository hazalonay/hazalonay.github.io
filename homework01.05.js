var http = require('http');
var events = require('events');
var eventEmitter = new events.EventEmitter();
var ringBell = function ringBell()
{
  console.log('ring ring ring');
}
setTimeout(function(request,response) {
  console.log('alooo');
}, 3000);
setTimeout(function(){
  console.log('kimsin?');
},5000);
eventEmitter.on('doorOpen', ringBell);


eventEmitter.emit('doorOpen');
http.createServer(function(request, response) {
    response.writeHead(200);
    response.write(JSON.stringify(request.headers));
    // request.pipe(response);
    response.end();
}).listen(8080)