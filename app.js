const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const game = require('./game')(io);

app.get('/', function (req, res) {
    res.send('<h1>Server ready</h1>');
});

io.on('connection', game.newClient);

http.listen(3000, function () {
    console.log('listening on *:3000');
});