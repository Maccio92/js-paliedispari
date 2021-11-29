/* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari
Dichiariamo chi ha vinto
(corrispondenza tra scelta pari e dispari e somma pari o dispari)
In un secondo momento creiamo delle funzioni per i numeri random e per il check pari dispari
*/

// Chiediamo all'utente se sceglie pari o dispari
// let userChoice = prompt('Scegli pari o dispari');
// console.log (userChoice);
// let userChoice;
let userChoice;
do{
    userChoice = prompt('Scegli pari o dispari');
} while ( userChoice != 'pari' && userChoice != 'dispari')
console.log (userChoice);

// Chiediamo all'utente di scegliere un numero da 1 a 5
// let userNumber =  parseInt(prompt('Inserisci un numero da 1 a 5'));
// console.log (userNumber);
let userNumber;
do {
    userNumber =  parseInt(prompt('Inserisci un numero da 1 a 5'));
} while (!(userNumber > 0 && userNumber < 5 && !(isNaN(userNumber))))
console.log (userNumber);

// Genero un numero random

// let randNumber = parseInt(Math.floor(Math.random() * 6));
// console.log (randNumber);

// Funzione numero random
function randomFive() {
    return parseInt(Math.floor(Math.random() * 6));
}

// // Faccio la somma
// let sum = userNumber + randNumber;
// console.log(sum);
// let result = '';

// Funzione somma
function sum() {
    return userNumber + pcNumber;
}

// Numero prodotto dal PC
let pcNumber = randomFive();
console.log (pcNumber);

// Somma
let result = sum();
console.log(result);

// Verifico se il risultato è pari o dipari
let compare= '';
if (result % 2 == 0){
compare = 'pari'
    console.log('La somma è pari');
} else{
    compare = 'dispari'
    console.log('La somma è dispari');
}
// Confronto il risultato con la scelta dell'utente
if (compare == userChoice){
    console.log('Complimenti hai vinto');
} else{
    console.log('Peccato hai perso');
}
