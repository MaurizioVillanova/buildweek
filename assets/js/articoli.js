window.addEventListener('DOMContentLoaded', dettaglio(), accesso(), addProd());
var dettaglioarticoli = localStorage.key['titolo'];
var descrizione = localStorage.key['descrizione']
var prezzo = localStorage.key['prezzo']
var utente = localStorage.key['nome'];
var idArticolo = localStorage.key['idArticolo']
var carrello = [];

function dettaglio() {// dal local storage all'html funzione di stampa
  if (localStorage.getItem("titolo")) {
    document.getElementById('sguardo').innerHTML += ` ${localStorage.getItem("titolo")}`;
  };
  if (localStorage.getItem("descrizione")) {
    document.getElementById('descrizione').innerHTML += ` ${localStorage.getItem("descrizione")}`;
  }
  if (localStorage.getItem("prezzo")) {
    document.getElementById('prezzo').innerHTML += ` ${localStorage.getItem("prezzo")}`;
  }
  if (localStorage.getItem("immagine")) {
    document.getElementById('immagine').innerHTML += `<img src="${localStorage.getItem("immagine")}" class="img-fluid rounded-start"> `;
  }

}

function accesso(){//funzione del log out
  if (localStorage.getItem('nome')) {
    document.getElementById('loginNav').innerText = 'Logout';

    document.getElementById('benvenuto').innerHTML = `<a href =#  class="text-decoration-none  text-dark" > Benvenuto/a ${localStorage.getItem("nome")}</a>`;
    document.getElementById('loginNav').addEventListener('click', function () {
      localStorage.clear();
      location.href = 'log.html'
    });
  }
}


function addProd() {//funzione per caricare gli elemnti del carrello nel localstorage quando si carica la pagina 
  var idUser = localStorage.getItem("nome");

  fetch("http://localhost:3000/carrello?idUtente=" + idUser) //recupera i dati dal JSON dell'utente
    .then((response) => {
      return response.json();
    })
    .then((res) => {
      localStorage.setItem('idCarrello', res[0].id);
      localStorage.setItem('carrello', JSON.stringify(res[0].arrayArticoli));//passa i valori del carrello al local storage
    })
}


function aggiungiCarrello() {//legge i valori dell'array nel local storage
  console.log(carrello, articoloCarrello);
  var carrello = JSON.parse(localStorage.getItem('carrello'));

 
  var articoloCarrello = localStorage.getItem("IdArticolo");
    
  
  carrello.push(articoloCarrello);//push articolo dentro l'array
  console.log(carrello, articoloCarrello);
  localStorage.setItem('carrello', JSON.stringify(carrello));//li mette nel local storage
  updateCarrello(carrello);//parametro al carrello
  alert("L'articolo è stato aggiunto al carrello");
}


function updateCarrello(carrello) {//dal localstorage gli passa al json
var id = localStorage.getItem('idCarrello');
let bbc =   {//abbiamo richiamato le proprietà da attribuire all'oggetto nel put quello che vogliamo leggere nell'array del carrello
  idUtente: localStorage.getItem('nome'),
  arrayArticoli: carrello ,
}


  fetch("http://localhost:3000/carrello/" + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(bbc)
  });
}