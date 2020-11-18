const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies; 

var engine, world;
var ball, ground;
var box1;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  box1 = new Box(100, 100, 10, 20);
}

function draw() {
  background("cyan");  
  Engine.update(engine);
 
  box1.display();
}
