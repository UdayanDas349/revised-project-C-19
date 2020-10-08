var bananaImage;
var obstacleImage, obstaclegroup;
var background;
var score;
var player
  
function preload(){
  background = loadImage("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  
  player = loadAnimation("monkey_1.png","monkey_2.png","monkey_3.png","monkey_4.png","monkey_5.png","monkey_6.png","monkey_7.png","monkey_8.png","monkey_9.png","monkey_10.png");
  bananaImage = loadImage("Banana.png");
  obstacleImage = loadImage("stone.png");
 
}

function setup() {
  createCanvas(600, 200);
  
  player = createSprite(50,180,20,50);
  player.addAnimation("running", player);
  player.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  background = createSprite(400,400,1600,1600);
  
  
  obstaclesGroup = new Group();
  var score = 0;
  
}

function draw() {
  background(180);
  
  text("Score: "+score,500,50);
  if(keyDown("space")) {
    player.velocityY = -10;
  }
  
  player.velocityY = player.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  if (obstacleGroup.isTouching(player)){
    player.scale = 0.2;
  }
  
  player.collide(invisibleGround);
   
   spawnObstacles();
  drawSprites();
  
  


  
}
function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,165,10,40);
    obstacle.velocityX = -6;
    
    //generate random obstacles
    var rand = Math.round(random(1,6));
    switch(rand){
      case 10: player.scale=0.12;
              break;
      case 20: player.scale=0.14;
              break;
      case 30: player.scale=0.16;
              break;
      case 40: player.scale=0.18;
              break;
      default: break;
    }
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
    obstaclesGroup.add(obstacle);
  }
}
