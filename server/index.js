const socket = require('socket.io');

var app = require('./app.js'); //En esta constante se almacena toda la configuración del servidor.

var puerto = 2900;

var server = app.listen(puerto, function() {
    console.log(`Servidor levantado correctamente en el puerto ${puerto}`);
});

var actualizacionServidor = socket(server);

actualizacionServidor.on("connection", function(socket) {
    console.log("Usuario conectado: ", socket.id);

    socket.on("enviar-mensaje", function(datos) {
        actualizacionServidor.emit("recibir-mensaje", datos);
    });
});

