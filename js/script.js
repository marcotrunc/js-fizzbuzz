console.log('JS OK!')
/*
Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi Fizz al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

BONUS:
Provare a stampare la lista in pagina invece che in console.
*/
// 1- Recuperare elemento in pagina
// 2- Dichiarare una variabile di appoggio
// 3- Ciclo for
// 4- Primo if per determinare i numeri che sono divisibili per 3
// 5- Secondo if per determinare i numeri che sono divisibili per 5
// 6- Stampare la varibile in base alle condizioni 

//** Recupero elemento in pagina
const listElement = document.getElementById('list-element');

//** Dichiaro una variabile di appoggio
let listNumber = '';

//** Ciclo for
for(let i = 1; i <= 100; i++){
    //** Ciclo if per vedere se il numero è divisibile per 3
    if(i % 3 === 0){
        listNumber += `fizz `;
    
     //** Ciclo if per vedere se il numero è divisibile per 3
    }else if (i % 5 === 0){
        listNumber += `fizzBuzz `;
        
    }else{
        listNumber += `${i} `;
    }
}

//** Stampo l'elemento in console
console.log(listNumber);

//** Stampo l'elemento in pagina
listElement.innerHTML = listNumber;