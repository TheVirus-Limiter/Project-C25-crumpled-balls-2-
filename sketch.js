
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var world,engine;
var paperObject, dustbinObject, groundObject,paperSprite,paperImage,dustbinSprite,dustbinImage;



function preload(){

dustbinImage = loadImage("dustbingreen.png")

paperImage = loadImage("paper.png")

}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperObject  = new Paper(200,450,40);
	dustbinObject = new Dustbin(1200, 650);
	groundObject = new Ground(width/2, 670, width, 20);
	
	
//paperObject.addImage("https://projectsassets.s3.us-east-2.amazonaws.com/paper.png");
	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);

  rectMode(CENTER);
  background(0);
paperSprite.x = paperObject.position.x
paperSprite.y = paperObject.position.y
dustbinSprite.x = dustbinObject.position.x
dustbinSprite.y = dustbinObject.position.y


  paperObject.display();
  dustbinObject.display();
  groundObject.display();

  drawSprites();
 
}


function keyPressed() {
	if (keyCode === UP_ARROW){
		Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}
}
