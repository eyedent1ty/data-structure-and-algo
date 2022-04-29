'use strict';

class Player {
  constructor(name, type) {
    console.log(this);
    this.name = name;
    this.type = type;
    // Fields
  }
  introduce() {
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    // calling the constructor of the parent class
    // the this keyword from the parent class will become this = Wizard
    // the properties/fields that Player class has will be inherits by the Wizard class
    super(name, type);
  }
  play() {
    console.log(`WEEEE I'm a ${this.type}`);
  }
}

const wizard1 = new Wizard('Shelly', 'Healer');
wizard1.introduce();
wizard1.play();