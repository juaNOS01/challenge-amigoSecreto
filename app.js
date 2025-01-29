
let listaNombresAmigos = [];

function agregarAmigo(){
    let nombreIngesado = document.getElementById("amigo").value;
    if (nombreIngesado == ""){
        alert("ingresa un nombre válido");
    }else{
        listaNombresAmigos.push(nombreIngesado);
        alert("nombre ingresado correctamente");
        document.getElementById("amigo").value = "";
        actualizarLista();

    }
    //console.log(nombreIngesado);
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    listaNombresAmigos.forEach(function (nombreIngesado){
        let li = document.createElement("li");
        li.textContent = nombreIngesado;
        lista.appendChild(li);
        
    });
        
}
function sortearAmigo() {
    let listaAleatoria = Math.floor(Math.random()* listaNombresAmigos.length);
    let amigoAleatorio = listaNombresAmigos[listaAleatoria];
document.getElementById("resultado").innerHTML = "el amigo secreto es:" + amigoAleatorio;

}
