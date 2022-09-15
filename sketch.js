var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var PLAY= 1;
var END = 0;
var gameState = PLAY;


var CloundImage;
var obstaclesGroup, obstacle1,obstacle2,obstacle3,obstacle4,obstacle5,obstacle6;


var score;


function preload(){
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png");



  
  
 
  

}

function setup() {

  createCanvas(600,200)
  
  //crie um sprite de trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //crie um sprite ground (solo)
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  gameOver = createSprite(300,100)
  //crie um solo invisível
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  //gerar números aleatórios
  var rand =  Math.round(random(1,100))
  console.log(rand)

}

function draw() {
  //definir cor de fundo
  background(180);

  Text("Pontuação: " + score, 500,50);
  
  if(gameState === PLAY)
    // mover o solo
    ground.velocityX = -4;
    // pontuação 
    score = score + Math.round(frameCount/60);

    if(ground.x < 0) {
      ground.x = ground.width/2;
    }
    
    if(gameState === PLAY) {
      gameOver.visible = false
      Restart.visible = false

      
    }
    


  console.log(trex.y)
  
  
  
  // pular quando tecla espaço for pressionada
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //impedir que o trex caia
  trex.collide(invisibleGround);
  
  //gerar as nuvens
  spawnClouds()
  
  drawSprites();
}

//função para gerar as nuvens
function spawnClouds(){
 // escreva seu código aqui
 if (frameCount% 600  0) {
 cloud=createSprite(600,100,40,10);
 cloud.velocityX=-3;
}

var obstaclesGroup , obstacle1,obstacle2,obstacle3,obstacle4, obstacle5, obstacle6

var score;

function preload () {
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");

  groundImage = loadImagem("ground2.png");

  CloundImage = loadImage("clound.png");

  obstacle1 = loadImage("obstacle1.png");
  obstacle2 = loadImage("obstacle2.png");
  obstacle3 = loadImage("obstacle3.png");
  obstacle4 = loadImage("obstacle4.png");
  obstacle5 = loadImage("obstacle5.png");
  obstacle6 = loadImage("obstacle6.png");

  restartIng = loadImage("gameOver.png");
  gameOverIng = loadImage("game.png");

  jumpSound = loadSound("jump.mp3");
  dieSound = loadSound("die.mp3");
  checkPointSound("checkPoint.mp3");

  
}


var obstacle = createSprite (400,165,10,40);
obstacle.velocityX = -6;

var rand = Math.round