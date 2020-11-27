var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, stick1, stick2, stick3

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(1200, 700);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;
	stick1 = new Stick(500, 600, 20, 120);
	stick2 = new Stick(700, 600, 20, 120);
	stick3 = new Stick(600, 660, 220, 20);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-20, width,10);
	strokeWeight(5);
	stroke("black");
	fill("white");
	

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.7, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);

	 
}


function draw() {
  rectMode(CENTER);
  background("darkblue");
  Engine.update(engine);

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
  stick3.depth = packageBody.depth;
  stick3.depth=+3;

  stick1.display();
  stick2.display();
  stick3.display();

   drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody, isStatic=false);    
	Matter.Body.setStatic(Stick, isStatic=true);
  }
}
