var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendfile('index.html');
});

app.use("/css",express.static(__dirname + "/css"));
app.use("/js",express.static(__dirname + "/js"));
app.use("/lib",express.static(__dirname + "/lib"));
app.use("/unity",express.static(__dirname + "/unity"));
app.use("/node_modules",express.static(__dirname + "/node_modules"));
var userCounter = 0;
io.on('connection', function(socket){
    console.log('a user connected');
    userCounter++;
    if (userCounter < 4) {
        socket.broadcast.emit('msg', "Waiting for 4 people sign in."+userCounter)
    } else {
        socket.broadcast.emit('gameStart', "FIXME"+userCounter);
    }
    socket.on('post', function(m) {
        console.log(m);
        socket.broadcast.emit('msg', m);
    });
    socket.on('disconnect', function () {
        console.log("user disconnect" + userCounter);
        userCounter--;
    });
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});
/*
var fs = require('fs');
var app = require('http').createServer(function(req, res) {
    fs.readFile('index.html', function(err, data) {
        if(err) {
            res.writeHead(500);
            return res.end('Error reading default window.framesex.');
        } else {
            res.writeHead(200);
            res.end(data);
        }
    });
});
var userCounter = 0;
var io = require('socket.io').listen(app);
io.sockets.on('connection', function(socket) {
    userCounter++;
    if (userCounter < 4) {
        socket.broadcast.emit('msg', "Waiting for 4 people sign in.")
    } else {
        socket.broadcast.emit('gameStart', "FIXME");
    }
    socket.on('post', function(m) {
        console.log(m);
        socket.broadcast.emit('msg', m);
    });
    socket.on('disconnect', function () {
        console.log("user disconnect" + userCounter);
        userCounter--;
    });
});

app.listen(80);
*/
