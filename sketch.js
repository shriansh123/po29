const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var ground;
var wall,wall2;
var bridge;
var jointPoint;
var jointLink;


function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);


  ground = new Base(1000,930,5000,20);
  wall = new Base(350,1000,900,1000); 
  wall2 = new Base(1580,1000,900,1000);
  bridge = new Bridge(11,{x:800,y:500});
  jointPoint = new Base(1135,500,10,10);


}

function draw() {
  background(51);
  Engine.update(engine);
ground.show();
wall.show();
wall2.show();
bridge.show();
jointPoint.show();
jointLink.show();
Matter.Composite.add(bridge.Body,jointPoint);
jointLink = new Link(bridge,jointPoint)


}
