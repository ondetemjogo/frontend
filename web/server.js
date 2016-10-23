var connect = require('connect');
var serveStatic = require('serve-static');
var env = process.env;
var bind = (env.BIND || 'localhost');
var port = (env.PORT || 8000);

console.log("Starting Server");
console.log("Listening to Port", port);
console.log("Listening to Address", bind);

connect().use(serveStatic(__dirname+'/app')).listen(port);

console.log("Server Started");

