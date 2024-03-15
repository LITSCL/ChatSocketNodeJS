let socket = io.connect("http://localhost:2900");

var input_mensaje = document.getElementById("mensaje");
var button_enviar = document.getElementById("enviar");
var input_usuario = document.getElementById("usuario");
var div_mensajeEnviado = document.getElementById("mensajeEnviado");

button_enviar.addEventListener("click", function() {
    socket.emit("enviar-mensaje", {
        mensaje: input_mensaje.value,
        usuario: input_usuario.value
    });
});

socket.on("recibir-mensaje", function(datos) {
    div_mensajeEnviado.innerHTML+="<p><strong>" + datos.usuario + ": </strong>" + datos.mensaje + "</p>";
});
