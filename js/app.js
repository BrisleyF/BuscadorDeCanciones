import * as UI from './interfaz.js';
import API from './api.js';

UI.formularioBuscar.addEventListener("submit", buscarCancion);

function buscarCancion(e) {
    e.preventDefault();

    // obtener datos del formulario 
    const artista = document.querySelector("#artista").value;
    const cancion = document.querySelector("#cancion").value;

    if(artista === '' || cancion === '') {
        // el usuario dejo al menos un campo vacio, mostrar error
        UI.divMensaje.innerHTML = "Error, todos los campos son obligatorios";
        UI.divMensaje.classList.add('error');

        setTimeout(() => {
            UI.divMensaje.innerHTML = '';
            UI.divMensaje.classList.remove('error');
        }, 3000);

        return;
    }

    // consultar nuestra API
    const busqueda = new API(artista, cancion);

    busqueda.consultarAPI();

}