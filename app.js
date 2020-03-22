const app = require('express')();
const cors = require('cors')
const http = require('http').createServer(app);
const socketio = require('socket.io');

const server = app.listen(process.env.APP_PORT);
const io = socketio().listen(server);
const game = require('./game')(io);

io.set('origins', process.env.CLIENT_ORIGIN);
io.on('connection', game.newClient);

app.get('/', function (req, res) {
    res.send('<h1>Server ready</h1>');
});
