
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Ground1=new Ground(400,680,2000,50)
	Boy=new Child(300,630,150,150)
	Ammo=new Stone(200,650,70,70)
	Mango1=new Mango(1400,200,50,50)
	Mango2=new Mango(1300,300,50,50)
	Mango3=new Mango(1300,100,75,75)
	Tree1=new Tree(1200,350,700,700)
	slingshot = new Launcher(Ammo.body,{x:200, y:50});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  drawSprites();
  Ground1.display()
  Boy.display()
  Ammo.display()
  Tree1.display()
  Mango1.display()
  Mango2.display()
  Mango3.display()
  slingshot.display()
 
}



