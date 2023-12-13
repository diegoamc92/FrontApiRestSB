window.onload = function (){
    listarPeliculas();
}

let listarPeliculas = async ()=>{
    const peticion = await fetch("http://localhost:8080/api/peliculas",
    {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        });

    const peliculas = await peticion.json();

    let contenidoTabla = "";

    for (let pelicula of peliculas){
        let contenidoFila = `<tr>
        <td>${pelicula.id}</td>
        <td>${pelicula.titulo}</td>
        <td>${pelicula.director}</td>
        <td>${pelicula.genero}</td>
        <td>
            <i class="material-icons button edit">edit</i>
            <i onClick="borrarPelicula(${pelicula.id})" class="material-icons button delete">delete</i>
        </td>
        </tr>`
        contenidoTabla += contenidoFila;
    }
    document.querySelector("#tabla tbody").outerHTML = contenidoTabla;
}

let borrarPelicula = async (id)=>{
    const peticion = await fetch("http://localhost:8080/api/peliculas/"+id,
    {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        });
        listarPeliculas();
    }