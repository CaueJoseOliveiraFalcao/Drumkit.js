'use strict'

const container = document.querySelector('#container');

const sons = {
    'A' : 'boom.nav',
    'S' : 'clap.nav',
    'D' : 'hihat.nav',
    'F' : 'kick.nav',
    'G' : 'openhat.nav',
    'H' : 'ride.nav',
    'J' : 'snare.nav',
    'K' : 'tink.nav',
    'L' : 'tom.nav',
}
const criarDiv = (texto) => {
    const div = document.createElement('div');
    div.classList.add('key');
    div.textContent = texto;
    div.id = texto
    container.appendChild(div);
}

const exibir = (sons) =>{
    Object.keys(sons).forEach(criarDiv)
}

exibir(sons)