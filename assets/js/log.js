var elenco = [];

class Utente {
    constructor(_nome, _cognome, _email, _password) {
        this.nome = _nome;
        this.cognome = _cognome;
        this.email = _email;
        this.password = _password;
    }
}

window.addEventListener('DOMContentLoaded', init());

function init() {
    registra(); //al click della registrazione
    logIn(); //al click del login                
}

// REGISTRAZIONE

function registra() {
    var btnAdd = document.getElementById('registra'); //btn per il form registrazione
    btnAdd.addEventListener('click', function (e) {
        e.preventDefault();
        nomeReg = document.getElementById('nomeReg');
        cognomeReg = document.getElementById('cognomeReg');
        emailReg = document.getElementById('emailReg');
        passReg = document.getElementById('passReg');
        var dato = new Utente(nomeReg, cognomeReg, emailReg, passReg);
        var dati = {
            nome: nomeReg.value,
            cognome: cognomeReg.value,
            email: emailReg.value,
            password: passReg.value
        }
        if (/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(emailReg.value)) { //validazione RegEx
            addUsers(dati);
        } else {
            alert("Inserisci una email valida")
        }
    }
    )
}

async function addUsers(dati) { //aggiunge i dati prima definiti al JSON
    let response = await fetch('http://localhost:3000/utenti', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(dati),
    });
    clearForm();
}

function clearForm() { //svuota i valori form registrazione
    nomeReg.value = '';
    cognomeReg.value = '';
    emailReg.value = '';
    passReg.value = '';
}

// LOGIN

function logIn() {
    var btnEnter = document.getElementById('entra'); //btn per il form login
    btnEnter.addEventListener('click', function (e) {
        e.preventDefault(); {
            fetch('http://localhost:3000/utenti') //recupera i dati dal JSON
                .then((response) => {
                    return response.json();
                })
                .then((users) => {
                    elenco = users;
                    email = document.getElementById('email').value;
                    password = document.getElementById('password').value;
                    var utente = new Utente('', '', email, password)
                    var utenti = users.find((utente) => {
                        if (dato.email === email && dato.password === password) {
                            entra(utente);
                        }
                        else {
                            alert('I tuoi dati non sono inseriti correttamente')
                        }
                    })

                })
        }
    });
}

function entra(utente) { //funzione che parte se il login ha successo
    utenteLog = {
        nome: utente.nome,
        cognome: utente.cognome,
        email: utente.email
    };
    if (!localStorage.getItem(utente.nome)) {
        localStorage.setItem(utente.nome, '');
    }
    location.href = 'home.html';
    console.log(utente);
}






