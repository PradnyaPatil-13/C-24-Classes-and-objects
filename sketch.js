//namespacing or alias
const Engine = Matter.Engine; //Universe
const World = Matter.World; //World/Earth
const Bodies = Matter.Bodies; //living or non living objects that live inside the world and follow laws of physics

var engine, world;
var box1,box2;

function setup(){
    var canvas = createCanvas(1200,400);

    //create your own engine/universe
    engine = Engine.create();

    //create your own world
    world = engine.world;

    //create a box object using Box class
   box1 = new Box(700,320,70,70);
   box2 = new Box(920,320,70,70);  
   pig1 = new Pig(810,350)  
   log1 = new Log(810,260,300,PI/2) 

   box3 = new Box(700,240,70,70);
   box4 = new Box(920,240,70,70);  
   pig2 = new Pig(810,220)  
   log2 = new Log(810,180,300,PI/2) 

   box5 = new Box(810,160,70,70)
   log3 = new Log(760,120,150,PI/7)
   log4 = new Log(870,120,150,-PI/7)

   bird = new Bird(100,100);

    //create ground
   ground = new Ground(600,height,1200,20);
    
   

}

function draw(){
    background("skyblue");
    Engine.update(engine);

    //the object box is calling the function display from the Class Box.js
    ground.display(); 

    box1.display();
    box2.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig2.display();
    log2.display();

    box5.display();
    log3.display();
    log4.display();

    bird.display();
}
