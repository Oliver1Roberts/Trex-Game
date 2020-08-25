var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloud, obstacle1, obstacle2, obstacle3, obstacle4,obstacle5,obstacle6;
var obstacleGroup, cloudGroup;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png")

  cloud = loadImage("cloud.png");

  obstacle1= loadImage("obstacle1.png")
  obstacle2= loadImage("obstacle2.png")
  obstacle3= loadImage("obstacle3.png")
  obstacle4= loadImage("obstacle4.png")
  obstacle5= loadImage("obstacle5.png")
  obstacle6= loadImage("obstacle6.png")
}

function setup() {
  createCanvas(400, 400);
  
  trex = createSprite(50,380,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,380,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  invisibleGround = createSprite(200,390,400,10);
  invisibleGround.visible = false;

  obstacleGroup=new Group();
  cloudGroup=new Group();
}

function draw() {
  background("black");
  
  if(keyDown("space")) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);

  spawnObstacles();
  spawnClouds();

  drawSprites();
}

 function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(400,365,10,40);
    obstacle.velocityX = -6;
    
    //generate random obstacles
    var rand = Math.round (random(1,6));
    switch (rand) {
      case 1: obstacle.addImage (obstacle1);
      break
      case 2: obstacle.addImage (obstacle2);
      break
      case 3: obstacle.addImage (obstacle3);
      break
      case 4: obstacle.addImage (obstacle4);
      break
      case 5: obstacle.addImage (obstacle5);
      break
      case 6: obstacle.addImage (obstacle6);
      break
    }
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 70;
  }
  }
function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var clouds = createSprite(400,320,40,10);
    clouds.y = Math.round (random(280,320));
    
    clouds.scale = 0.5;
    clouds.velocityX = -3;
    clouds.addImage(cloud);
     //assign lifetime to the variable
    clouds.lifetime = 134;
    
    //adjust the depth
    clouds.depth = trex.depth;
    trex.depth = trex.depth + 1;
  }
 }
  