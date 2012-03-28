var net = require("net");

var sockets = [];

var server = net.Server(function (socket) {

    sockets.push(socket);

    socket.on("data", function (data) {
        var i;
        for (i = 0; i < sockets.length; ++i) {
            if (sockets[i] === socket) {
                continue;
            }
            sockets[i].write(data);
        }
    });

    socket.on("end", function () {
        var i = sockets.indexOf(socket);
        sockets.splice(i, 1);
    });

});

server.listen(8000);

// telnet localhost 8000