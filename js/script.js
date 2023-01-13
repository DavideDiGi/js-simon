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
let firstAnswer;
let secondQuest;
let secondAnswer;
let thirdQuest;
let thirdAnswer;
let fourthQuest;
let fourthAnswer;
let fifthQuest;
let fifthAnswer;
let points = 0;
console.log('points', points)
for (let i = 1; i < 6; i++) {
    
    num += i;
    const newNumber = document.createElement('span');
    newNumber.innerHTML = num;
    randomNumbers.append(newNumber);
    
    if (i[0] === firstQuest) {
        firstAnswer = true;
    }
    else {
        firstAnswer = false;
    }
    if (i[1] === secondQuest) {
        secondAnswer = true;
    }
    else {
        secondAnswer = false;
    }
    if (i[2] === thirdQuest) {
        thirdAnswer = true;
    }
    else {
        thirdAnswer = false;
    }
    if (i[3] === fourthQuest) {
        fourthAnswer = true;
    }
    else {
        fourthAnswer = false;
    }
    if (i[4] === fifthQuest) {
        fifthAnswer = true;
    }
    else {
        fifthAnswer = false;
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
        firstQuest = parseInt(prompt('Inserisci il primo numero:'));
    }, 100);

    setTimeout (function () {
       if (firstAnswer == true) {
        points =+ 1;
        console.log('points', points)
        secondQuest =  prompt('Inserisci il secondo numero:');
       }
        else if (firstAnswer == false) {
        points = points;
       }
    }, 100);
    setTimeout (function () {
       if (secondAnswer == true) {
        points ++;
        console.log('points', points)
        thirdQuest =  prompt('Inserisci il terzo numero:');
       }
        else if (secondAnswer == false) {
        points = points;
       }
    }, 100);

    setTimeout (function () {
       if (thirdAnswer == true) {
        points ++;
        console.log('points', points)
        fourthQuest =  prompt('Inserisci il quarto numero:');
       }
        else if (thirdAnswer == false) {
        points = points;
       }
    }, 100);

    setTimeout (function () {
       if (fourthAnswer == true) {
        points ++;
        console.log('points', points)
        fifthQuest =  prompt('Inserisci il quinto numero:');
       }
        else if (fourthAnswer == false) {
        points = points;
       }
    }, 100);
    setTimeout (function () {
       if (fifthAnswer == true) {
        points ++;
        console.log('points', points)
        prompt('Mi dispiace, hai una pessima memoria. Hai perso.');
       }
        else if (fifthAnswer == false) {
        points = points;
       }
    }, 100);

    }
    else {
        
        newTimer.innerHTML = countDown;
        timer.append(newTimer);
        countDown--;
    }

}, 1000)
