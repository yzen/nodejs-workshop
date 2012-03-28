// NODE JS is an asynchronous serverside framework.

// NODE is good at ideling (because it is asynchronous it runs through execution without blocking, although you can block if you wanted to).

// WEB SERVER EXAMPLE

var http = require("http");

var callback1 = function (req, res) {

    debugger;

    res.writeHead(200, {"content-type": "text/plain"});

    res.end("Hello world\n");

};

var callback2 = function (req, res) {

    // Transfer-Encoding: chunked

    res.writeHead(200, {"content-type": "text/plain"});

    res.write("Hello\n");

    setTimeout(function () {
        res.end("world\n");
    }, 1000);

};

var server = http.createServer(callback1);

server.listen(8000);