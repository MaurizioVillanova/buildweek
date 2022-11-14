window.addEventListener('DOMContentLoaded', getData());
var articoli = [];

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