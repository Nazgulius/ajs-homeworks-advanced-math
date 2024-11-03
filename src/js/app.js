// TODO: write your code here
import Magician from './class/Magician.js';

console.log('Работает');

let charA = new Magician('Mage');

console.log(charA);
console.log(charA.attack);
charA.attack = 2;
console.log(charA.attack);
charA.stoned = 2;
console.log(charA.attack);



