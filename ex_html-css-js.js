// Validación del formulario antes de enviar.
document.getElementById ("form").onsubmit = function (event) {
    if (document.getElementById("nombre").value.trim()===""){
        alert ("Revisa el formulario: algunos campos son incorrectos o están incompletos.");
    } else if (document.getElementById("direccion").value.length < 15){
        alert ("Revisa el formulario: algunos campos son incorrectos o están incompletos.");
    } else if (document.getElementById("telefono").value.length != 9){
        alert ("Revisa el formulario: algunos campos son incorrectos o están incompletos.");
    } else if (!document.getElementById("email").value.includes ("@")){
        alert ("Revisa el formulario: algunos campos son incorrectos o están incompletos.");
    }
};

// Confirmación antes de enviar más mensaje agradecimiento.
document.getElementById ("form").onsubmit = function (event){
    let resultado = confirm ("¿Quieres confirmar y enviar el pedido?");
    if (resultado){
        alert ("Se ha confirmado y enviado el pedido.");
        alert ("¡Gracias por tu pedido "+document.getElementById("nombre").value.trim()+"!")
    } else {
        event.defaultPrevented();
        alert ("Se ha cancelado el pedido.");
    }
};

// Cálculo precio total del pedido.
document.getElementById ("form").addEventListener("change",function() {
let total = 0;
const tipo = {
    clasica : 5,
    bbq : 7,
    especial : 8
};

if (document.getElementById("clasica").checked) {
    total += tipo.clasica;
} else if (document.getElementById("bbq").checked) {
    total += tipo.bbq;
} else if (document.getElementById("especial").checked) {
    total += tipo.especial;
}

if (document.getElementById("ingrediente1").checked) {
    total += 1;
} if (document.getElementById("ingrediente2").checked) {
    total += 1;
} if (document.getElementById("ingrediente3").checked) {
    total += 1;
} if (document.getElementById("ingrediente4").checked) {
    total += 1;
}

total *= document.getElementById ("cantidad").value;
document.getElementById ("mensajePrecio").textContent = "Precio total del pedido: "+total+"€";
});

// Contador caracteres Instrucciones adicionales.
document.getElementById ("instruccionesAdicionales").oninput = function (){
    document.getElementById("contador").textContent = document.getElementById ("instruccionesAdicionales").value.length;
};
    // Limitado en el código HTML.

// Extra Modo claro/oscuro.
document.getElementById ("cambiarModo").onclick = function () {
    document.getElementById ("enviarPedido").textContent = "Modo claro";
    document.body.classList.toggle ("cambiarModo");
};

// Efecto visual en botón Enviar Pedido.
document.getElementById ("enviarPedido").addEventListener("mouseover", function(){
    document.getElementById ("enviarPedido").style.backgroundColor = "white";
    document.getElementById ("enviarPedido").style.color = "#a4161a";
});

document.getElementById ("enviarPedido").addEventListener("mouseout", function(){
    document.getElementById ("enviarPedido").style.backgroundColor = "#a4161a";
    document.getElementById ("enviarPedido").style.color = "white";
});