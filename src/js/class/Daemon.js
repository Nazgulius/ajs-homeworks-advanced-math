import Character from "../Character.js";

export default class Daemon extends Character {
  constructor(name, type = 'Daemon') {
    super(name, type);
    this._attack = 100;
    this.defence = 40;
  }

  get attack() { 
    return this._attack;
  }

  set attack(x) {
    let attack = 100;
    this._attack = attack - ((x - 1) * 10 * (attack / 100));
  }

  get stoned() {
    return this._attack;
  }

  set stoned(x) {
    let attack = 100 - ((x - 1) * 10 * (100 / 100));
    this._attack = attack - Math.log2(x) * 5; 
  }
}