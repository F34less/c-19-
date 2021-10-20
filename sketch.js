var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}




function setup() {
  createCanvas(600, 600);
  spookySound.loop()
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  
  ghost = createSprite(200, 200, 50, 50)
  ghost.addImage("ghost", ghostImg)
  ghost.scale = 0.3
  climbersGroup = new Group()
  doorsGroup = new Group()
  invisibleBlockGroup = new Group()

  


  
}

function draw() {
  background(200);

  if (gameState ==="play" ){



  
  
  
  if(tower.y > 400){
      tower.y = 300
    }
    if (keyDown("space")){
ghost.velocityY = -5
    }

    ghost.velocityY = ghost.velocityY+0.8 
     
    
    if(keyDown("left_arrow")){
ghost.x = ghost.x-3

    }

    if(keyDown("right_arrow")){
      ghost.x = ghost.x+3

    }

    if (ghost.isTouching(climbersGroup)){
      ghost.velocityY = 0



    }

    spawndoor()

    if (invisibleBlockGroup.isTouching(ghost )|| ghost.y > 600){
      gameState = "end"
      ghost.destroy()

    
    }
  
drawSprites()
if (gameState === "end" ){
stroke("yellow")
fill("green")
textSize(30)
text("Game Over", 230, 250)
}
  }

}
function spawndoor(){
  if (frameCount%240 === 0 )
  {
    door = createSprite(200, -50)
    door.addImage("door", doorImg)
    door.velocityY = 1
    door.x = Math.round(random (120,400) )
    doorsGroup.add(door)
    door.lifetime = 700
    ghost.depth = door.depth ;
    ghost.depth+=1

    climber = createSprite(200, 10)
    climber.addImage("climber", climberImg)
    climber.x = door.x
    climber.lifetime = 700
    climber.velocityY = 1
    climbersGroup.add(climber)


    invisibleBlock = createSprite(200, 15, 10, 10)
    invisibleBlock.velocityY = 1
    invisibleBlock.debug = true;
    invisibleBlock.lifetime = 700
     invisibleBlock.x = climber.x
     invisibleBlock.width = climber.width
     invisibleBlockGroup.add(invisibleBlock)
   

  }
  
}

