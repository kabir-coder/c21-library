var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  g1 = createSprite(800, 100, 50, 80);
  g1.shapeColor = "green";
  g1.debug = true;
 g2 = createSprite(800, 800,80,30);
 g2.shapeColor = "green";
 g2.debug = true;

 g2.velocityY = -5;
  g1.velocityY = +5;
}

function draw() {
  background(0,0,0);
  
  bounceoff(fixedRect,movingRect);
  bounceoff(g1,g2);

  drawSprites();
}
