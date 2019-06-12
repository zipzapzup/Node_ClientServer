var net = require('net');

// Defining the Client NAME as a Variable
// In here we use the First Argument to define the AlphaClient Name.
var NAME = process.argv[2]
var HOST = 'localhost'
var PORT = 22;
// Saying Hello world on the first argument
console.log("Hello AlphaClient ", NAME)


var Alphaclient = new net.Socket();
Alphaclient.connect(PORT, HOST, function() {
    console.log('Connected to Server ' + HOST + "At port " + PORT);
    Alphaclient.write("AlphaClient " + NAME,'UTF-8');
});



Alphaclient.on('data',function(data) {
    console.log('Received: ' + data);
    Alphaclient.setTimeout(3000);
});

Alphaclient.on('close', function() {
    console.log('Connection closed');
});