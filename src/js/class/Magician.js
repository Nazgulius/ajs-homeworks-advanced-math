import Character from "../Character.js";

export default class Magician extends Character {
  #stoned = false
  constructor(name, type = 'Magician', stoned, distance = 1) {
    super(name, type);
    this._attack = 100;
    this.defence = 40;    
    this.distance = distance;
  }

  get attack() { 
    const basicAttack = 100 - ((this.distance - 1) * (10 * (100 / 100)));

    if (!this.#stoned) {
      return basicAttack;
    }

    return basicAttack - Math.log2(this.distance) * 5; 
  }

  set attack(x) {    
    this.distance = x;    
  }

  get stoned() {
    return this.#stoned;
  }

  set stoned(x) {
    this.#stoned = x;
  }
}