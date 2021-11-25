var canvas;
var block1;
var ball, edges;
var music;

function preload()
{
    // load sound here
    music = loadSound("Imindian.mp3");
    image = loadImage("ind.jpg");
}
function setup()
{
    canvas = createCanvas(850,600);
    //create blocks
    block1 = createSprite(360,590,3600,10);
    block1.shapeColor = "blue";

    ball = createSprite(425,100,50,50);
    ball.shapeColor = ("orange")
}
function draw() 
{
    background(image)
    edges=createEdgeSprites();

    stroke("blue");
    fill("white");
    textSize(50);
    text("I LOVE MY INDIA",220,50);

    stroke("blue");
    fill("white");
    textSize(30);
    text("Editor Shivani",30,570);
    
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
      ball.shapeColor = "blue";
        music.play()      
    }

    if (keyDown(DOWN_ARROW)) {
  ball.velocityX =0;
  ball.velocityY =4;
}
    drawSprites();
}
