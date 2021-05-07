// Templates String
const nombre = 'Lola';
const apellido = 'lolita';

const nombreCompleto = nombre + apellido;
console.log('nombreCompleto', nombreCompleto)

const fullName = `nombre: ${nombre}\n${apellido}`;
console.log('fullName', fullName)

function getBestRegards(name, surname) {
    return `hola ${name} ${surname}`;
}

console.log(`ejemplo: ${getBestRegards(nombre, apellido)}`)


