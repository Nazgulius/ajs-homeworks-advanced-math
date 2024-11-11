import Character from "../Character";

export default class CharacterModif extends Character {
  constructor(name, type, _attack, defence) {
    super(name, type, _attack, defence);
    this._attack = _attack;
    this.distance = 1;
    this._stoned = false;
  }

  get attack() { 
    const basicAttack = this._attack - ((this.distance - 1) * (0.1 * this._attack));
      
      if (!this.stoned) {
          return basicAttack;
      }
      
      return basicAttack - Math.log2(this.distance) * 5; 
  }

  set attack(x) {
    this.distance = x;
  }

  get stoned() {
    return this._stoned;
  }

  set stoned(x) {
    this._stoned = x;
  }
}