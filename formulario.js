

let boton = document.getElementById("registrar");
boton.addEventListener("click", evento=>{
    registrarPelicula();
})

const registrarPelicula = async ()=> {

    let campos = {};

    campos.titulo = document.getElementById("titulo").value;
    campos.director = document.getElementById("director").value;
    campos.genero = document.getElementById("genero").value;

    const peticion = await fetch("http://localhost:8080/api/peliculas",
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(campos)
        });
}