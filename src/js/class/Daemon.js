import Character from "../CharacterNew";

export default class Daemon extends CharacterNew {
  constructor(name, type = 'Daemon') {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}