import Character from './Character.js';

export default class CharacterNew extends Character {
  
  getStoned() {
    
  }

  setStoned() {
    if(type === 'Magician' || type === 'Daemon') {
      this.attack = attack - Math.log2(this.x) * 5;    
    }
  }

  getAttack() { 

  }

  setAttack(x) {
    if(type === 'Magician' || type === 'Daemon') {      
      this.attack -= x * 10 * (attack / 100);
    }
  }
}