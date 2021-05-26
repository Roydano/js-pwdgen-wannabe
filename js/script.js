
// lista variabili richieste
var nome, cognome, colore, annoCorrente;


// richiesta nome
var nome = prompt ("Inserisci il tuo nome");
console.log ( nome );

// richiesta cognome
var cognome = prompt ("Inserisci il tuo cognome");
console.log ( cognome );

// richiesta colore preferito
var colore = prompt ("Inserisci il tuo colore preferito");
console.log ( colore );

// richiesta ultime due cifre dell'anno in corso
var annoCorrente = parseInt (prompt ("Inserisci le ultime due cifre dell'anno in corso"));
console.log ( annoCorrente );

var password = document.getElementById("password").innerHTML = "Questa è la tua password: " + nome + cognome + colore + annoCorrente;


