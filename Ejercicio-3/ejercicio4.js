const os = require('node:os');

console.log('Memoria Libre antes de almacenar 1000000 enteros: ' + os.freemem() + ' bytes')

const vector = []

for (let i = 0; i < 1000000; i++) {
  vector.push(i)
}

console.log('Memoria Libre despues de almacenar 1000000 enteros: ' + os.freemem() + ' bytes')