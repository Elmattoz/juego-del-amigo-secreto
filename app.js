// El principal objetivo de este desafío es fortalecer 
// tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

//los nombres deben estar en un array (lista )i

///ngresar nombre de sus amigos 

//realizar un sorteo con esos nombre para saber quien es el amigo secreto

//la app debe permitir que se agreguen los nombres atraves de un campo de testo y de un boton aagregar

//validacion de nombre (si un usuaruio ingresa un nombre vacion debe aparecer una alerta )

//cuandom se clicle en sorteo  debe aparecer el nombre del amigo secreto

let amigos = [];

function agregarAmigo() {
    let nuevoAmigo = document.getElementById('amigo').value;

    if (nuevoAmigo.trim() !== "") { // Cambié " " a "" para evitar el error
        amigos.push(nuevoAmigo);
        document.getElementById('amigo').value = '';
        console.log(amigos);
        mostrarAmigosEnpantalla();
    } else {
        alert("Ingrese un nombre válido");
    }
}

function mostrarAmigosEnpantalla() {
    let listaAmigos = document.getElementById('listaAmigos');
    
    listaAmigos.innerHTML = '';
    amigos.forEach(function(amigo) {
        let elementoLista = document.createElement('li');
        elementoLista.textContent = amigo;
        listaAmigos.appendChild(elementoLista);
    });
}

function sortearAmigo() {
    let resultado = document.getElementById('resultado'); // Cambié 'sorteo' a 'resultado'
    resultado.innerHTML = ''; // Limpiar contenido anterior

    if (amigos.length === 0) {
        resultado.innerHTML = 'No hay amigos para sortear';
    } else {
        let indiceGanador = Math.floor(Math.random() * amigos.length);
        let amigoGanador = amigos[indiceGanador]; // Cambié amigoganador a amigoGanador

        resultado.innerHTML = `El amigo seleccionado es: <strong>${amigoGanador}</strong>`;
    }
}


