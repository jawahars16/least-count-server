const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const game = require('./game')(io);

app.get('/', function (req, res) {
    res.send('<h1>Hello world</h1>');
});

io.on('connection', game.newClient);

// io.on('connection', function (client) {
//     game.newClient(client);
    // client.on('join', game.onUserJoined);
    //
    //
    // client.on('message', function (msg) {
    //     io.emit('message1', msg);
    // });
    // client.on('disconnect', function () {
    //     console.log('user disconnected');
    // });
// });

http.listen(3000, function () {
    console.log('listening on *:3000');
});