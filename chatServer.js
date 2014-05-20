var fs = require('fs');
var app = require('http').createServer(function(req, res) {
    fs.readFile('chatClient.html', function(err, data) {
        if(err) {
            res.writeHead(500);
            return res.end('Error reading default window.framesex.');
        } else {
            res.writeHead(200);
            res.end(data);
        }
    });
});
var nickname = {};
var io = require('socket.io').listen(app);
io.sockets.on('connection', function(socket) {
    socket.on('setnickname', function(m) {
        if(typeof nickname[m] === 'undefined') {
            nickname[m] = {count: 0};
            socket.emit('nicknamesuccess', m);
        } else {
            nickname[m].count++;
            var t = m + 'io' + nickname[m].count;
            socket.emit('nicknamefail', t);
        }
    });
    socket.on('post', function(m) {
        console.log(m);
        socket.broadcast.emit('msg', m);
    })
});

app.listen(1338);

