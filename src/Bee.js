class Bee extends Grub { //inherit from other object
  // TODO..
  constructor(){
  	super()
  	this.age = 5;
  	this.color = "yellow"
  	this.job = "Keep on growing"
  }
};


/*
Grub

Create a Grub class, in ES6 style, with:
an age property that is set to 0
a color property that is setto pink
a food property that is set to jelly
an eat method that returns 'Mmmmmmmmm jelly'
Bee

Create a Bee class, in ES6 style, with:
the Grub superclass
an age property that is set to 5
a color property that is set to yellow
a food property that is inherited from grub
an eat method that is inherited from grub
a job property that is set to Keep on growing
HoneyMakerBee

Create a HoneyMakerBee class, in ES6 style, with:
the Bee superclass
an age property that is set to 10
a job property that is set to make honey
a color property inherited from bee that is set to yellow
a food property that is inherited from grub
an eat method that is inherited from grub
a honeyPot property that is set to 0
a makeHoney method that adds 1 to that honeyBee's honeyPot
a giveHoney method that subtracts 1 from that honeyBee's honeyPot
ForagerBee

Create a ForagerBee class, in ES6 style, with:
the Bee superclass
an age property that is set to 10
a job property that is set to find pollen
a color property inherited from bee that is set to yellow
a food property that is inherited from grub
an eat method that is inherited from grub
a canFly property that is set true
a treasureChest property that is set to an empty array []
a forage method that allows the bee to add a treasure to the treasureChest
RetiredForagerBee

Create a RetiredForagerBee class, in ES6 style, with:
the ForagerBee superclass
an age property that is set to 40
a job property that is set to gamble
a canFly property that is set to false
a color property that is set to grey
a forage method that returns I am too old, let me play cards instead
a food property that is inherited from grub
an eat method that is inherited from grub
a treasureChest property inherited from ForagerBee that is set to an empty array []
an always winning gamble method that allows the bee to add a treasure to the treasureChest
*/