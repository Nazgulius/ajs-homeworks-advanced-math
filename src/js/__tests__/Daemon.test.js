import Daemon from '../class/Daemon.js';

const charecter = new Daemon('Daemon');

test('create Daemon', () => {
  const currect = {
    name: 'Daemon',
    type: 'Daemon',
    health: 100,
    level: 1,
    _attack: 100,
    defence: 40,
  }

  expect(charecter).toEqual(currect);
});

test('атака', () => { 
  expect(charecter.attack).toBe(100);
});

test('атака на расстоянии', () => {  
  charecter.attack = 2;

  expect(charecter.attack).toBe(90);
});

test('атака на расстоянии c дурманом', () => {  
  charecter.stoned = 2;

  expect(charecter.attack).toBe(85);
});

test('дурман', () => {  
  charecter.stoned = 2;

  expect(charecter.stoned).toBe(85);
});