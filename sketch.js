var bullet,wall;
var speed,weight,thickness;


function setup() {
  createCanvas(1600,400);
  
  bullet = createSprite(50, 200, 40, 10);
  bullet.shapeColor=color("blue")
  thickness=random(20,74);
  speed = random(50,60);
  weight = random(30,52);
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color("yellow");
  
}
 

function draw() {
  background("black");
  bullet.velocityX = speed;
 if(collide(bullet,wall)){
  bullet.velocityX=0;
  var damage = 0.5*weight*speed/(thickness*thickness*thickness);
  if(damage>10){
    bullet.shapeColor= color("red");
   }
   if(damage<10){
    bullet.shapeColor=color("green");
   }
}
 
  

  drawSprites();
}

function collide(Abullet,Bwall){
 bulletRightEdge = Abullet.x + Abullet.width;
 WallLeftEdge = Bwall.x;

 if(bulletRightEdge>=WallLeftEdge){
  return true
 }
 return false;
}
