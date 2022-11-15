window.addEventListener('DOMContentLoaded', getData());
var articoli = [];
var utente = localStorage.key(0);
function getData() {
    fetch('http://localhost:3000/articoli').then((response) => {
        return response.json();
        //il json che ritorna viene scritto in data come rappresentazione che sarà poi riportato nell'array elenco 
    }).then((data) => {
        articoli = data;
        articoli.map(function (element) {
            var card = document.getElementById('card');
            card.innerHTML += 
            `<div class="col">
                <div class="card h-100" onclick="myFunction()">
                    <img src="${element.location}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title" >${element.nome}</h5>
                    </div>
                </div>
            </div>`
        })
    })
}
if(localStorage.getItem('nome')){
    document.getElementById('loginNav').innerText = 'Logout';
   
    document.getElementById('benvenuto').innerHTML = `<a href =#  class="text-decoration-none  text-dark" > Benvenuto/a ${localStorage.getItem("nome", utente.nome)}</a>`;
    document.getElementById('loginNav').addEventListener('click', function (){
        localStorage.clear();
    location.href = 'log.html'
    });
}
 /*function esci(){
    localStorage.clear();
    location.href = 'log.html'
}*/
