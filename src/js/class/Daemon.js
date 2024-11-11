import CharacterModif from "./CharacterModif.js";

export default class Daemon extends CharacterModif {
  constructor(name, type = 'Daemon', distance = 1, stoned = false) {
    super(name, type);
    this._attack = 100;
    this.defence = 40;
    this.distance = distance;
    this.stoned = stoned;
  }
}