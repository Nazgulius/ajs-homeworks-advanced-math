import Character from "../CharacterNew";

export default class Zombie extends CharacterNew {
  constructor(name, type = 'Zombie') {
    super(name, type);
    this.attack = 40;
    this.defence = 10;
  }
}