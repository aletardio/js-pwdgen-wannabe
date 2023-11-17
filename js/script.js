let name = prompt('Inserisci il tuo nome');

let surname = prompt('Inserisci il tuo cognome');

let color = prompt('Inserisci il tuo colore preferito');

let demo = `${name}${surname}${color}23`;

document.getElementById('subtitle').innerHTML = demo;

console.log(demo);