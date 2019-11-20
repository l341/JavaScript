/**
 * Created by Laura Carreras on 20/11/2019.
 */

// Página presentación Internet

// Usa la funcion querySelector() para referirse al titulo y la almacena
// en miTitulo
var miTitulo = document.querySelector('h1');
miTitulo.innerHTML = 'Hello world!';

var miImage = document.querySelector('img');

/*
src:
Este atributo especifica la URI del script externo; este puede ser usado
como alternativa a scripts embebidos directamente en el documento. Si el
script tiene el atributo src, no debería tener código dentro de la etiqueta.
*/

// Ca,bio de imagen al hacer click
miImage.onclick = function () {
    var miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/firefox-icon.png') {
      miImage.setAttribute('src','images/mundo.png');
    } else {
      miImage.setAttribute('src', 'images/firefox-icon.png');
    }
}

// Mensaje personalizado de bienvenida

var miBoton = document.querySelector('button');
var miTitulo = document.querySelector( 'h1');

// prompr -> crea un cuadro de diálogo y le pide al usuario un dato
function estableceNombreUsuario() {
    var miNombre = prompt('Por favor, ingresa tu nombre.');
    // Crea y almacena un dato en el elemento llamado 'nombre' en la variable
    // miNombre
    localStorage.setItem('nombre', miNombre);
    miTitulo.textContent = 'Mozilla es fresco,' + miNombre;
}

// Código de inicialización

// Si el nombre no existe utiliza la función de arriba y sino lo toma de memoria
if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    var nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Mozilla es fresco,' + nombreAlmacenado;
}

miBoton.onclick = function() {
    estableceNombreUsuario();
}
