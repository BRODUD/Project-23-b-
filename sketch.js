var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,bottomSprite,leftSprite,rightSprite;
var bottomBody;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
   var options={
   isStatic:false,
   restitution:0
	}
	
	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6


	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	bottomSprite = createSprite(400,height-50,200,20);
	bottomSprite.shapeColor = "red";

	leftSprite = createSprite(300,610,20,100);
	leftSprite.shapeColor = "red";

	rightSprite = createSprite(500,610,20,100);
	rightSprite.shapeColor = "red";

	

	console.log(packageSprite);

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	 
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 bottomBody = Bodies.rectangle(width/2, 630, width, 10 , {isStatic:true} );
 	World.add(world, bottomBody);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
  keyPressed();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
   
	Matter.Body.setStatic(packageBody,false);
	
  }
}



