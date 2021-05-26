
// lista variabili richieste


var nome, cognome, colore, annoCorrente;



// richiesta nome
var nome = prompt ("Inserisci il tuo nome");
console.log ( nome );

// restituzione nome in minuscolo
var lowNome = nome.toLowerCase();

// richiesta cognome
var cognome = prompt ("Inserisci il tuo cognome");
console.log ( cognome );

// restituzione cognome in minuscolo
var lowCognome = cognome.toLowerCase();

// richiesta colore preferito
var colore = prompt ("Inserisci il tuo colore preferito");
console.log ( colore );

// restituzione colore in minuscolo
var lowColore = colore.toLowerCase();

// richiesta ultime due cifre dell'anno in corso
var annoCorrente = parseInt (prompt ("Inserisci le ultime due cifre dell'anno in corso"));
console.log ( annoCorrente );

// restituzione dei dati inseriti sulla pagina
document.getElementById("password").innerHTML = "Questa è la tua password: " + lowNome + lowCognome + lowColore + annoCorrente;





