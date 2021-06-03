var space,spaceImg
var rocket,rocketImg
var star,starImg,starGp
var astroid,astroidImg,astroidGp
var score=0
var gameState="play"
function preload(){
  spaceImg = loadImage("space.jpg")
  rocketImg = loadImage("rocket.png")
  starImg = loadImage("star.png")
  astroidImg = loadImage("astroid.png")
  
  starGp = new Group()
  astroidGp = new Group()
}

function setup() {
 createCanvas(600,600)
  space = createSprite(300,300)
  space.addImage(spaceImg)
  space.velocityY = 1
  
  rocket = createSprite(200,200,50,50)
  rocket.addImage(rocketImg)
}

function draw() {
 background("white")
  if(gameState==="play"){
  if(keyDown("left_arrow")){
    rocket.x = rocket.x = -4
    
  }
  
    if(keyDown("right_arrow")){
    rocket.x = rocket.x = 4
    
  }
  
    if(keyDown("space")){
    rocket.VelocityY =-3
  }
  rocket.velocityY = rocket.velocityY+0.8
  
  spawnstars()
  spawnAstroids()
  
  if(starGp.isTouching(rocket)){
      starGp.destroyEach();
      score=score+2
     }
  
  
  if(astroidGp.isTouching(rocket)||rocket.y>600){
    rocket.destroy()
    astroidGp.destroyEach()
    gameState="end"
  }
  }
  
    if(space.y > 400){
    space.y = 300
  }
    drawSprites()

  if(gameState==="end"){
    textSize(24)
    text("GAME OVER",300,300)
  }
}

function spawnstars(){
  if(frameCount % 240===0){
  var star = createSprite(200,-50)
  star.addImage(starImg)
  
  star.x = Math.round(random(200,400))
  star.velocityX = 2
  starGp.add(star)
  } 
}

function spawnAstroids(){
  if(frameCount % 240===0){
  var astroid = createSprite(200,-50)
  astroid.addImage(astroidImg)
  
  astroid.x = Math.round(random(200,400))
  astroid.velocityX = 2
  astroidGp.add(astroid)
  }
}