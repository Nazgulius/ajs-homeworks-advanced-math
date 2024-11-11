import CharacterModif from "./CharacterModif.js";

export default class Magician extends CharacterModif {
  constructor(name, type = 'Magician', distance = 1, stoned = false) {
    super(name, type);
    this._attack = 100;
    this.defence = 40;
    this.distance = distance;
    this.stoned = stoned;
  }
}