 //creating sprites
var path,boy,cash,diamonds,jwellery,sword;
var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,swordImg;
var treasureCollection = 0;
var cashG,diamondsG,jwelleryG,swordGroup;
var PLAY=1;
var END=0;
var gameState=1;
var endImg;
var gameOver;

function preload(){
  //preloading th animations
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("runner1.png","runner2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jwelleryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
  endImg =loadAnimation("gameOver.png");
}

function setup(){
  
  createCanvas(700,600);
  // Moving background
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;


  //creating boy running
  boy = createSprite(70,330,20,20);
  boy.addAnimation("SahilRunning",boyImg);
  boy.scale=0.08;
  //creating gameOver sprite
  gameOver=createSprite(350,250,50,50);
  gameOver.addAnimation("gameOver",endImg);
  gameOver.scale=0.6;
  gameOver.visible=false;

  //creating Groups
  cashG=new Group();
  diamondsG=new Group();
  jwelleryG=new Group();
  swordGroup=new Group();



}

function draw() {

  background(0);
  //adding code to PLAY state
if(gameState==PLAY)
 { 
   edges= createEdgeSprites();
   boy.collide(edges);
  
 //code to reset the background
  if(path.y > 400 )
  {
   path.y = height/2;
  }

 //display the functions
    createCash();
    createDiamonds();
    createJwellery();
    createSword();

 //making boy moving with mouse
  boy.x = World.mouseX;

  if (cashG.isTouching(boy)) 
    {
      cashG.destroyEach();
      treasureCollection=treasureCollection+50;
    }
    else if (diamondsG.isTouching(boy)) 
    {
      diamondsG.destroyEach();
      treasureCollection=treasureCollection+150;
    }else 
        if(jwelleryG.isTouching(boy)) 
    {
      jwelleryG.destroyEach();
      treasureCollection=treasureCollection+100;
    }
    if(swordGroup.isTouching(boy))
    {
     gameState=0;
    }
    }else
 //adding code to END state
      if(gameState==0)
  {
  gameOver.visible=true;
  
  path.velocityY=0;
  
  boy.destroy();
    
    
  diamondsG.destroyEach();
  cashG.destroyEach();
  jwelleryG.destroyEach();
  swordGroup.destroyEach();

  diamondsG.setVelocityYEach(0);
  cashG.setVelocityYEach(0);
  jwelleryG.setVelocityYEach(0);
  swordGroup.setVelocityYEach(0);
 }
  drawSprites();
 //showing the text treasureCollection 
  textSize(20);
  fill(255);
  text("Treasure: "+ treasureCollection,150,30);

}
 //creating functions
function createCash() 
 {
  if (World.frameCount % 50 == 0) 
  {
  var cash = createSprite(Math.round(random(400, 350),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY = 3;
  cash.lifetime = 150;
  cashG.add(cash);
  }
 }

function createDiamonds() 
 {
  if (World.frameCount % 80 == 0) 
  {
  var diamonds = createSprite(Math.round(random(50, 200),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.03;
  diamonds.velocityY = 3;
  diamonds.lifetime = 150;
  diamondsG.add(diamonds);
 }
 }

function createJwellery() 
 {
  if (World.frameCount % 80 == 0) 
  {
  var jwellery = createSprite(Math.round(random(280, 500),40, 10, 10));
  jwellery.addImage(jwelleryImg);
  jwellery.scale=0.13;
  jwellery.velocityY = 3;
  jwellery.lifetime = 150;
  jwelleryG.add(jwellery);
  }
 }

function createSword()
 {
  if (World.frameCount % 150 == 0) 
  {
  var sword = createSprite(Math.round(random(520, 100),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY = 3;
  sword.lifetime = 150;
  swordGroup.add(sword);

  }
 }