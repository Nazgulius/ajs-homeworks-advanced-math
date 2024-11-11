// TODO: write your code here
import Magician from './class/Magician.js';
import Daemon from './class/Daemon.js';

console.log('Работает');

let charA = new Daemon('Daemon');

console.log(charA);
console.log('базовая атака ' + charA.attack);

charA.attack = 2;
console.log('атака расстояние 2 ' + charA.attack);
charA.attack = 3;
console.log('атака расстояние 3 ' + charA.attack);
charA.attack = 4;
console.log('атака расстояние 4 ' + charA.attack);
charA.attack = 5;
console.log('атака расстояние 5 ' + charA.attack);

charA.stoned = true;
console.log('атака ' + charA.attack);
console.log('stoned ' + charA.stoned);

charA.attack = 2;
console.log('атака расстояние 2 ' + charA.attack);
charA.attack = 3;
console.log('атака расстояние 3 ' + charA.attack);
charA.attack = 4;
console.log('атака расстояние 4 ' + charA.attack);
charA.attack = 5;
console.log('атака расстояние 5 ' + charA.attack);