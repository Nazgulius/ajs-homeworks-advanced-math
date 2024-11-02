import Character from "../CharacterNew";

export default class Magician extends CharacterNew {
  constructor(name, type = 'Magician') {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}