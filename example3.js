//MASHING

var http = require("http");

setInterval(function () {

    http.get({host: "google.com"}, function (res) {
        console.log("GET to google.com")
    });

}, 2000);

var server = http.createServer(function (req, res) {

    res.writeHead(200, {"content-type": "text/plain"});

    res.end("Hello world\n");

});

server.listen(8000);