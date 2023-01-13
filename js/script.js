/* Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().

Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma. */

/*
- Creo una funzione che genera 5 numeri casuali.
- Inserisco i numeri casuali in pagina.
- Creo una funzione che genera un timer di 30 secondi.
- Allo scadere dei 30 secondi faccio sparire i numeri e chiedo all'utente tramite il prompt di inserire i numeri precedentementi visualizzati, uno ad uno.
- Comunico il risultato all'utente.
*/

const randomNumbers = document.getElementById('random-numbers');
const timer = document.getElementById('timer');
let num = RandomCreate(1, 100);
const newTimer = document.createElement('span');
const invisible = document.getElementById('invisible');
let firstQuest;
let points = 0;
console.log('points', points)
for (let i = 1; i < 6; i++) {
    
    num += i;
    const newNumber = document.createElement('span');
    newNumber.innerHTML = num;
    randomNumbers.append(newNumber);
    if (i[0] == firstQuest) {
        firstAnswer = true;
    }
    else {
        firstAnswer = false;
    }
}

let countDown = 3;

const clock = setInterval(function () {

    if (countDown == 0) {

    clearInterval(clock);
    invisible.classList.add('d-none');

    setTimeout (function () {
        alert('Tempo Scaduto! Inserisci in sequenza i numeri che ti ricordi.');
    }, 100);

    setTimeout (function () {
        firstQuest =  prompt('Inserisci il primo numero:');
    }, 100);

    setTimeout (function () {
       if (firstanswer = true) {
        points =+ 1;
        console.log('points', points)
        // const secondQuest =  prompt('Inserisci il secondo numero:');
       }
    }, 100);





    }
    else {
        
        newTimer.innerHTML = countDown;
        timer.append(newTimer);
        countDown--;
    }

}, 1000)

// prompt('Primo numero?')
// function SetTimer() {
//     const newTimer = document.createElement('div');
//     newTimer.innerHTML
// }

// setTimeout ()



// setTimeout ();
// function () {
//     alert();
// }


