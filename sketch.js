var ball,img,paddle,paddleImg;

function preload() 
{
  img = loadImage("ball.png");
  paddleImg = loadImage("paddle.png");
}

function setup() 
{
  createCanvas(400,400);
  
  ball = createSprite(100,200,20,20);
  ball.addAnimation("ball",img)
  ball.scale = 0.7;
  ball.velocityX = 5;
  
  paddle = createSprite(380,200,10,70);
  paddle.addAnimation("paddle",paddleImg);
  paddle.scale = 0.9;
}

function draw()
{
  background(205,153)
   
  edges = createEdgeSprites();
  
  if(ball.isTouching(paddle))
  {
    randomVelocity();
  }
  
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  ball.bounceOff(paddle); 
  
  if(keyDown(UP_ARROW))
  {
    paddle.y = paddle.y - 10;
  }
  
  if(keyDown(DOWN_ARROW))
  { 
    paddle.y = paddle.y + 10;
  }
  
  //paddle.debug = true;
  paddle.setCollider("rectangle",0,0,10,70);
  
  
  drawSprites(); 
}

function randomVelocity()
{
  ball.velocityY = random(-5,5);
}