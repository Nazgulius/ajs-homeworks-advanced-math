import Character from "../Character.js";
import AttackModification from "./AttackModification.js";

export default class Daemon extends Character {
  #stoned = false;
  constructor(name, type = 'Daemon', distance = 1) {
    super(name, type);
    this._attack = 100;
    this.defence = 40;
    this.distance = distance;
  }

  get attack() { 
    return AttackModification.modAttackDistance(this._attack, this.distance, this.#stoned);
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