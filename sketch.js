const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var snow2;
var snowflake1;
var snowflake2;
var snowflake3;
var snowflake4;
var snowflake1;
var snowflake5;
var snowflake6;
var snowflake7;
var snowflake8;
var snowflake9;
var snowflake10;


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;
    snowflake1 = new snow4(400,200)
    

   
}

function preload(){
  bg = loadImage("snow3.jpg")
} 

function draw() {
  background(bg);
  Engine.update(engine); 
  
  drawSprites();
  snowflake1.display();
}