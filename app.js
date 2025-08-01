document.addEventListener("DOMContentLoaded", function () {
    console.log("El script se ha cargado correctamente.");

    const inputAmigo = document.getElementById("amigo");
    const listaAmigos = document.getElementById("listaAmigos");
    const resultado = document.getElementById("resultado");
    const btnAgregar = document.querySelector(".button-add");
    const btnSortear = document.querySelector(".button-draw");

    let amigos = [];

    // Agregar nombre a la lista con validación
    function agregarAmigo() {
        let nombre = inputAmigo.value.trim();

        if (nombre === "") {
            alert("El nombre no puede estar vacío.");
            return;
        }
        if (amigos.includes(nombre)) {
            alert("Este nombre ya fue agregado.");
            return;
        }

        amigos.push(nombre);
        console.log("Lista de amigos actualizada:", amigos);
        actualizarLista();
        inputAmigo.value = "";
    }

    // Actualizar la lista en pantalla
    function actualizarLista() {
        listaAmigos.innerHTML = "";
        amigos.forEach((nombre) => {
            let li = document.createElement("li");
            li.textContent = nombre;
            listaAmigos.appendChild(li);
        });
    }

    // Sortear un amigo secreto y ocultar la lista
    function sortearAmigo() {
        if (amigos.length < 2) {
            alert("Debes agregar al menos 2 nombres para sortear.");
            return;
        }

        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let nombreSorteado = amigos[indiceAleatorio];

        // Ocultar la lista y mostrar solo el mensaje del ganador
        listaAmigos.innerHTML = ""; 
        resultado.innerHTML = `<p>🎉 El amigo secreto sorteado es: <strong>${nombreSorteado}</strong> 🎁</p>`;

        console.log("Amigo secreto sorteado:", nombreSorteado);
    }

    // Asignar eventos a los botones
    btnAgregar.addEventListener("click", agregarAmigo);
    btnSortear.addEventListener("click", sortearAmigo);
});
