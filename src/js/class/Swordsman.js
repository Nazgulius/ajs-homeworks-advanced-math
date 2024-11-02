import Character from "../CharacterNew";

export default class Swordsman extends CharacterNew {
  constructor(name, type = 'Swordsman') {
    super(name, type);
    this.attack = 40;
    this.defence = 10;
  }
}