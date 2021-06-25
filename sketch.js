var boy,boy1,boy2,boy3,boy4,boy5,boy6,boy7,boy8
var snow,snow1,snow2,snow3,snow4

function preload() {
snow=loadImage("snow1.jpg")
snow1=loadImage("snow2.jpg")
snow2=loadImage("snow3.jpg")
snow3=loadImage("snow4.webp")
snow4=loadImage("snow5.webp")

}

function setup() {
  createCanvas(800,400);
  
}

function draw() {
  background(snow1);  
   snowfallImage()
  drawSprites();
}
function snowfallImage() {
  if(frameCount%25===0){

  
  snowfall=createSprite(random(0,800),10,20,20,20)
  
  snowfall.addImage(snow3)
  snowfall.scale=0.2
  snowfall.velocityY=3

  
}}