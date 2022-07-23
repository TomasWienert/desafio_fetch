/* Filtro */

let botonBuscar = document.getElementById("botonBuscar")

let mostrarPokemon = document.getElementById("mostrarPokemon")

botonBuscar.onclick = () => {
    busquedaUsuario()

}

function busquedaUsuario() {

    /* borro los productos que mostraba inicialmente */

    mostrarPokemon.innerHTML = `` 

    /* traigo valor */

    let busqueda = document.getElementById("busqueda").value.toLowerCase();

    console.log(busqueda);

    /* silencio evento de reinicio de pagina */
    const form = document.getElementById("eventoFormulario")

    form.addEventListener("submit", function (evento) {
        evento.preventDefault();
    })

    fetch(`https://pokeapi.co/api/v2/pokemon/${busqueda}/`)
        .then(res => res.json())
        .then(data => crearPokemon(data))
    
    
}

function crearPokemon(pokemon) {

        const card = document.createElement("div");

        const contieneImagen = document.createElement("div");

        const imagen = document.createElement("img");
        imagen.src = pokemon.sprites.front_default
        contieneImagen.appendChild(imagen)

        const nombrePokemon = document.createElement("p");
        nombrePokemon.textContent = `${pokemon.name}`;

        card.append(contieneImagen)
        card.append(nombrePokemon)

        mostrarPokemon.append(card)

} 



