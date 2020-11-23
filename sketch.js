
var monkey , monkey_running ;
var banana ,bananaImage, obstacle, obstacleImage ;
var foodGroup, obstacleGroup ;
var score ;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400);
  
 monkey = createSprite (70,330,20,20);
 monkey.addAnimation("running",monkey_running);
 monkey.scale = 0.1; 
  
  ground = createSprite (300,360,600,12);
  ground.velocityX = -4 ;
  ground.x = ground.width/2 ;
 
  obstacleGroup = createGroup();
  foodGroup = createGroup ();
  
  var survivalTime = 0;
}


function draw() {
background(250);
  
 if(keyDown("space")){
  monkey.velocityY = -12; 
 }
   //add Gravity
  monkey.velocityY = monkey.velocityY + 0.7;
  
  ground.x = ground.width/2 ;
  
  monkey.collide (ground);
  
  
  
  
  
  
  survivalTime =Math.ceil(frameCount/frameRate());
  text("survivalTime:"+survivalTime,500,50);
  
  
  spawnObstacles();
  spawnBanana();
  
drawSprites();
  
}

  function spawnBanana (){
  if(frameCount%80===0){
  var banana = createSprite (600,150,10,10);
   banana.y = Math.round(random(120,200))
    banana.addImage (bananaImage)
    banana.scale= 0.1 ;
    banana.velocityX = -5 ;
    banana.lifetime = 130 ;
    foodGroup.add(banana);
  }  
  }

    
 function spawnObstacles(){
  if(frameCount%300===0){
  var obstacle = createSprite (620,300,20,20);
  obstacle.addImage (obstacleImage);
  obstacle.scale = 0.3; 
   obstacle.velocityX = -8; 
    obstacle.lifetime = 90 ;
    obstacleGroup .add(obstacle);
    
  }
   
   
   
 }


 