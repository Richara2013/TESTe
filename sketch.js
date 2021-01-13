const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
var engine, world;
var block1,ground1,ground2;
var platform,polygon;
function preload(){
   polygon_image= loadImage("polygon.png")
}
function setup(){
    var canvas = createCanvas(1200,770);
    engine = Engine.create();
    world = engine.world;
    platform= new Ground(150, 305, 300, 170);
    ground1= new Ground(390,235,151,20);
    ground2= new Ground(540,235,151,20);
    block1= new Box(330,235,30,40);
    block2= new Box(360,235,30,40);
    block3=new Box(390,235,30,40);
    block4=new Box(420,235,30,40);
    block5=new Box(450,235,30,40);
    // level three
    block6=new Box(360,195,30,40);
    block7=new Box(390,195,30,40);
    block8=new Box(420,195,30,40);
    //top
    block9=new Box(390,155,30,40);

    block10= new Box(480,235,30,40);
    block11= new Box(510,235,30,40);
    block12=new Box(540,235,30,40);
    block13=new Box(570,235,30,40);
    block14=new Box(600,235,30,40);
    // level three
    block15=new Box(510,195,30,40);
    block16=new Box(540,195,30,40);
    block17=new Box(570,195,30,40);
    //top
    block18=new Box(540,155,30,40);
    slingshot= new Slingshot(bird.body,{x:200, y:50});
    polygon= Bodies.circle(50,200,20);
    World.add(world,polygon);
    slingshot= new Slingshot(this.polygon,{x:100, y:200});
    ImageBitmapRenderingContext(CENTER)
    Image(polygon_image,polygon.position.x,polygon.position.y,40,40);

}
function draw(){
    Engine.update(engine);  
    ground1.display();
    ground2.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    polygon.display();
    platform.display();
    slingshot.display();
}
function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX, y:mouseY});
}

function mouseReleased(){
    slingshot.fly();
}