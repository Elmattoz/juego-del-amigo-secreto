Resumen del Código de Sorteo de Amigo Secreto
Descripción: Este proyecto permite a los usuarios ingresar nombres de amigos en una lista y realizar un sorteo para seleccionar un amigo al azar. El resultado del sorteo se muestra en la página.

Componentes Principales:

HTML Estructura:

Un campo de entrada para ingresar nombres.
Un botón para añadir nombres a la lista.
Una lista no ordenada (<ul>) para mostrar los nombres de los amigos.
Un botón para realizar el sorteo y mostrar el nombre del amigo seleccionado.
JavaScript:

Variables:

let amigos = []: Array que almacena los nombres de los amigos.
Funciones:

agregarAmigo():
Obtiene el valor del input, verifica si no está vacío y lo agrega al array amigos.
Luego, llama a mostrarAmigosEnpantalla() para actualizar la lista en el HTML.
mostrarAmigosEnpantalla():
Limpia la lista actual y agrega cada nombre de amigo como un nuevo elemento de lista (<li>).
sortearAmigo():
Verifica si hay amigos en la lista. Si la lista está vacía, muestra un mensaje.
Si hay amigos, selecciona uno al azar utilizando Math.random() y muestra el resultado en la página.
