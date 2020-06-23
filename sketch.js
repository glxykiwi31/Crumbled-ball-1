const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1600,400);
    engine = Engine.create();
    world = engine.world;

    paper = new Paper(200,200);
    ground = new Ground(800,height,1600,20);
    dustbin = new Dustbin(1100,380,200,20);
}
function draw(){
    background(0);
    Engine.update(engine);
    text("x:y "+mouseX+" "+mouseY,mouseX,mouseY);
    
    ground.display();
    paper.display();
    dustbin.display();
}

function keyPressed(){
    if(keyCode === UP_ARROW){
    console.log("kaveesh")
Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});

    }
}