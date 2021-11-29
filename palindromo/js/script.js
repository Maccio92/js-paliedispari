/* Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
(prima senza funzione e poi con funzione) */

// Chiedo all'utente di inserire una parola
let string = prompt('Inserisci una parola');

// // Creo un array con le lettere
// let spelling = string.split('');
// console.log(spelling);

// // Faccio il reverse delle lettere
// let spellingReverse = spelling.reverse('');

// // Riunisco le lettere
// let reverseString = spellingReverse.join('');
// console.log(reverseString);

// // Controllo se la parola è palindroma
// if (string == reverseString){
//     console.log('La parola inserita è palindroma');
// } else {
//     console.log('La parola inserita non è palindroma');
// }

// // Funzione

function reverseStr(string) {
    // let reverseString = "";
    let spelling = string.split('');
    console.log(spelling);
    let spellingReverse = spelling.reverse('');
    console.log(spellingReverse);
    let reverseString = spellingReverse.join('');
    console.log(spellingReverse);
    return reverseString;
}

if (string == reverseStr(string)){
    console.log('La parola inserita è palindroma');
} else {
    console.log('La parola inserita non è palindroma'); 
}