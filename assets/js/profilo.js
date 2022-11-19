window.addEventListener('DOMContentLoaded', stampaCarrello());
var utente = localStorage.key['nome'];
//se utente loggato modifica registra e login in nav bar inserendo saluto e logout
if(localStorage.getItem('nome')){
    document.getElementById('loginNav').innerText = 'Logout';

    document.getElementById('benvenuto').innerHTML =` <a href ="#"  class="text-decoration-none  text-dark" > Benvenuto/a ${localStorage.getItem("nome")}</a>`;
    document.getElementById('loginNav').addEventListener('click', function (){
        localStorage.clear();
    location.href = 'log.html'
    });
}
function stampaCarrello(){
var valore =  JSON.parse(localStorage.getItem('carrello')); //  in modo da avere i valorei dell-array, mi serviranno i valori per compararli con l-id.Articolo.
valore.forEach(valcar); //  mi servono tutti gli oggetti dell'articolo carrello. Se non lo faccio lui funziona solo se l'array ha un solo valore. Chiamo la funzione fuk 
function valcar(valore) { //faccio partire la funzione valcar alla quale come parametro ho passato il l-array carrello
    fetch("http://localhost:3000/articoli") //recupera i dati dal JSON
        .then((response) => {
            return response.json();
        })
        .then((art) => {
            art.forEach((element) => {
                if (element.idArticolo ==valore) { // la comparazione di tutti i valori dell/array carrello con tutti gli id.Articolo presenti nel JSON e se coincidono faccio stampare una lista con il titolo e il presso dell'articolo.
                    document.getElementById('cart').innerHTML += `<li  class="list-unstyled"><button type="button" class="btn btn-danger m-2" onClick="elimina(${valore})"><i class="bi bi-trash"></i></button>${element.nome}: ${element.prezzo}€</li>`;
                    
                }
            }); 
        });
}
}
function elimina(valore) {
if (confirm('Sei sicuro?')) {
        canc(valore)
    }
}
async function canc(valore) {
let response = await fetch('http://localhost:3000/carrello?arraArticoli=' + id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        }
    });
}