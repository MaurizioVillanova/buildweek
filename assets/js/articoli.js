window.addEventListener('DOMContentLoaded', dettaglio(), accesso());
var dettaglioarticoli = localStorage.key['titolo'];
 var descrizione = localStorage.key ['descrizione']
 var prezzo = localStorage.key ['prezzo']
 var utente = localStorage.key['nome'];
 var carrello = [];

function dettaglio(){
    if(localStorage.getItem("titolo")){//con questo if viene applicato il logout dopo aver effettuato l'accesso
        document.getElementById('sguardo').innerHTML += ` ${localStorage.getItem("titolo", dettaglioarticoli)}`;
    };
    if(localStorage.getItem("descrizione")){//con questo if viene applicato il logout dopo aver effettuato l'accesso
            document.getElementById('descrizione').innerHTML += ` ${localStorage.getItem("descrizione",descrizione)}`;
    }
    if(localStorage.getItem("prezzo")){//con questo if viene applicato il logout dopo aver effettuato l'accesso
        document.getElementById('prezzo').innerHTML += ` ${localStorage.getItem("prezzo", prezzo)}`;
}
if(localStorage.getItem("immagine")){//con questo if viene applicato il logout dopo aver effettuato l'accesso
    document.getElementById('immagine').innerHTML += `<img src="${localStorage.getItem("immagine", immagine)}" class="img-fluid rounded-start"> `;
}

}
function accesso(){
   
    if(localStorage.getItem('nome')){//con questo if viene applicato il logout dopo aver effettuato l'accesso
        document.getElementById('loginNav').innerText = 'Logout';
       
        document.getElementById('benvenuto').innerHTML = `<a href =#  class="text-decoration-none  text-dark" > Benvenuto/a ${localStorage.getItem("nome", utente)}</a>`;
        document.getElementById('loginNav').addEventListener('click', function (){
            localStorage.clear();
        location.href = 'log.html'
        });
    }
    }
   

    class Carrello {
        constructor(_idUtente, _arrayArticoli = []) {
            this.idUtente = _idUtente;
            this.arrayArticoli = _arrayArticoli;
        }
    }
    
    function aggiungiCarrello() {
        var arrayCarrello = [];
        var articoloCarrello = {
            location: localStorage.getItem("immagine", immagine),
            nome: localStorage.getItem("titolo", dettaglioarticoli),
            prezzo: localStorage.getItem("prezzo", prezzo)
        }
        arrayCarrello.push(articoloCarrello);
        var carrelloUtente = new Carrello(localStorage.getItem("nome", utente), arrayCarrello);
    
        newCarrello(carrelloUtente);
    }
    
    
    async function newCarrello(carrelloUtente) {
        let response = await fetch("http://localhost:3000/carrello", {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(carrelloUtente),
        });
      }
    