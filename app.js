const shapearea = require('./shape-area.js');

const lado = process.argv[3];
const raio = process.argv[3];


const areaC = shapearea.circleArea(raio);
const areaS = shapearea.squareArea(lado);

console.log(`A área do círculo é ${areaC}`);
console.log(`A área do quadrado é ${areaS}`);