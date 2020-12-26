var frect,mrect;
function setup() {
  createCanvas(800,400);
  frect = createSprite(400, 200, 50, 50);
  mrect = createSprite(200,100,10,60);
  frect.shapeColor="red";
  mrect.shapeColor="red";
}

function draw() {
  background(255,255,255); 
  mrect.x=World.mouseX;
   mrect.y=World.mouseY;
   if(mrect.x-frect.x<frect.width/2+mrect.width/2 && 
    frect.x-mrect.x<frect.width/2+mrect.width/2)
    { frect.shapeColor="red"
     mrect.shapeColor="red" }
     else{ frect.shapeColor="blue"
      mrect.shapeColor="blue" }





  drawSprites();

}