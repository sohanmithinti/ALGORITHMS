var fixedRect, movingRect, ball1, ball2, ball3, ball4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
ball1 = createSprite(200,200,50,60)
ball1. shapeColor = "blue";
ball2 = createSprite(600,200,50,60)
ball2. shapeColor = "red";
ball3 = createSprite(300,300,50,60)
ball3. shapeColor = "orange";
ball4 = createSprite(300,700,50,60)
ball4. shapeColor = "yellow";

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  ball1. velocityX = +5;
  ball2. velocityX = -5;
  ball3. velocityY = +5;
  ball4. velocityY = -5;
}

function draw() {
  background(0,0,0);  

  bounceoff(movingRect , fixedRect);
  bounceoff(ball1 , ball2);
  bounceoff(ball3 , ball4);
 
  drawSprites();
}

