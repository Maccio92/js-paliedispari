/* Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
(prima senza funzione e poi con funzione) */

// Chiedo all'utente di inserire una parola
let string = prompt('Inserisci una parola');

// Creo un array con le lettere
let spelling = string.split('');
console.log(spelling);

// Faccio il reverse delle lettere
let spellingReverse = spelling.reverse();

// Riunisco le lettere
let reverseString = spelling.join('');
console.log(reverseString);

// Controllo se la parola è palindroma
if (string == reverseString){
    console.log('La parola inserita è palindroma');
} else {
    console.log('La parola inserita non è palindroma');
}
// var carattere;
// var parolaInversa = '';

// var i = parola.length - 1;

// while (i >= 0) {
//   carattere = parola[i];
//   parolaInversa += carattere;
//   console.log(carattere);
//   i--;
// }

// console.log(parolaInversa);

// if(parola == parolaInversa){
//     console.log('la parola è palindroma');
//   } else {
//     console.log('la parola non è palindroma');
//   }