// TODO: write your code here
import Magician from './class/Magician.js';

console.log('Работает');

let charA = new Magician('Mage');

console.log(charA);
console.log('базовая атака ' + charA.attack);
console.log('базовая stoned ' + charA.stoned);

charA.attack = 2;
console.log('атака расстояние 2 ' + charA.attack);
console.log('stoned 2 ' + charA.stoned);

charA.stoned = true;
console.log('атака ' + charA.attack);
console.log('stoned ' + charA.stoned);

