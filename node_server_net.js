var net = require('net');
var fs = require('fs');

var login = {};
class NodeLogin {
  constructor(NodeName, loginattempt){
    this.NodeName = NodeName;
    this.loginattempt = loginattempt;
  }
}

// Created Var login Database, JavaScript Object
// Login Database is structured to contain 2 entries:
// - NodeName = String;
// - LoginAttempt = int;



var server = net.createServer(function(obj) {
  // 'connection' listener
  obj.setEncoding('utf-8');
  obj.setTimeout(5000);

  console.log('client connected');
  
  obj.on('data', function(data) {
    console.log('client name is: ' + data);
    var temp = data;

  })

  obj.on('end', () => {
    console.log('client disconnected');
  });
  obj.write('hello there, you are connected to ALPHA Server\r\n');
  obj.pipe(obj);
});

server.on('data', function(data) {
    console.log("Server Received client" + data);

})
// Java Script publishes Console events every 10 seconds


server.on('error', (err) => {
  if (err == "EADDRINUSE") {
    console.log("EADDR IN USE, please check and ensure port 22 is ready for listening")
  }
  console.log(err);
});


server.listen(22, () => {
  console.log('Starting ALPHAserver: server bound');
});
