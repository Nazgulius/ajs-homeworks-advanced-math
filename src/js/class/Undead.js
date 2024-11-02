import Character from "../CharacterNew";

export default class Undead extends CharacterNew {
  constructor(name, type = 'Undead') {
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  }
}