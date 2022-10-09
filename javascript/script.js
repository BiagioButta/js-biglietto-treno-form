const costKm = 0.21;

const nome = document.getElementById('nome');
const cognome = document.getElementById('cognome');
const stazionePartenza = document.getElementById('partenza');
const stazioneArrivo = document.getElementById('arrivo');

let x = Math.floor((Math.random() * 412) + 115);
document.getElementById("KM").innerHTML = x;





// let quantiKm = parseInt(prompt('Quanti Km desideri percorrere?'));
// console.log(quantiKm);

// document.getElementById('quantiKm').innerHTML = quantiKm;

// let anni = parseInt(prompt('Quanti anni hai ?'));
// console.log(anni);

// document.getElementById('anni').innerHTML = anni;

// isNaN(quantiKm);
// isNaN(anni);


// if(anni <= 18){
//     prezzo = (quantiKm * costKm) - (quantiKm * costKm * 0.2);
// } else if(anni >= 65){
//     prezzo = (quantiKm * costKm) - (quantiKm * costKm * 0.4);
// } else if(isNaN(quantiKm) || isNaN(anni)) {
//     alert('dati errati');
// } else {
//     prezzo = (quantiKm * costKm);
// }

// document.getElementById('prezzo').innerHTML = prezzo.toFixed(2);

// console.log(prezzo.toFixed(2));