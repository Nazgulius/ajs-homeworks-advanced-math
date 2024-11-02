import Character from "../CharacterNew";

export default class Bowerman extends CharacterNew {
  constructor(name, type = 'Bowerman') {
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  }
}