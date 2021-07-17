var canvas, backgroundImage;
var car1, car2;

function preload(){
  car1Img = loadImage("images/car1.png");
  car2Img = loadImage("images/car2.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  car1 = createSprite(100,200);
    car1.addImage("car1",car1Img);
    car2 = createSprite(300,200);
    car2.addImage("car2",car2Img);

}

function draw(){
    
    drawSprites();
}