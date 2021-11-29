/* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari
Dichiariamo chi ha vinto
(corrispondenza tra scelta pari e dispari e somma pari o dispari)
In un secondo momento creiamo delle funzioni per i numeri random e per il check pari dispari
*/

// Chiediamo all'utente se sceglie pari o dispari
let userChoice = prompt('Scegli pari o dispari');
console.log (userChoice);

// Chiediamo all'utente di scegliere un numero da 1 a 5
let userNumber =  parseInt(prompt('Inserisci un numero da 1 a 5'));
console.log (userNumber);

// Genero un numero random
let randNumber = parseInt(Math.floor(Math.random() * 6));
console.log (randNumber);

// Faccio la somma
let sum = userNumber + randNumber;
console.log(sum);
let result = '';
// Verifico se il risultato è pario dipari
if (sum % 2 == 0){
    result = 'pari';
    console.log('La somma è pari');
} else{
    result = 'pari';
    console.log('La somma è dispari');
}
// Confronto il risultato con la scelta dell'utente
if (result == userChoice){
    console.log('Complimenti hai vinto');
} else{
    console.log('Peccato hai perso');
}