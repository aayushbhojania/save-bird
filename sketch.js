const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint



var PLAY = 1;
var END = 0;
var gameState = PLAY;

var parrotFlying
var ground, invisibleGround, groundImage;

var birdsGroup;
var obstaclesGroup, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;

var score=0;

var gameOver, restart;

var tree


function preload(){
 parrotFlying = loadAnimation("parrot2)1.png","parrot2)2.png","parrot2)3.png","parrot2)4.png","parrot2)5.png","parrot2)6.png","parrot2)7.png","parrot2)8.png","parrot2)9.png")
 treeImage = loadImage("tree.png")
}

function setup() {
 createCanvas(displayWidth,displayHeight);
 engine = Engine.create()
 world  = engine.world

 grape1 = new Grape(1100,300,30);
console.log(grape1.depth)
 //tree = createSprite(displayWidth/1.2,displayHeight/2,20,20);
 //tree.addImage(treeImage);
 //console.log(tree.depth)


 birdsGroup = new Group();
 
}

function draw() {
 background(255);
 
 spawnBird();
 grape1.display();
 drawSprites();
}

function spawnBird() {
 //write code here to spawn the clouds
 if (frameCount % 60 === 0) {
 var bird = createSprite(displayWidth,displayHeight/4,40,10);
 bird.y = Math.round(random(displayHeight/4,displayHeight/2));
 bird.addAnimation("flying",parrotFlying);
 bird.scale = 0.8;
 bird.velocityX = -3;
 
 //assign lifetime to the variable
 bird.lifetime = 500;
 
 //adjust the depth
 //cloud.depth = trex.depth;
// trex.depth = trex.depth + 1;
 
 //add each cloud to the group
 birdsGroup.add(bird);
 }
 
}

function spawnObstacles() {
 if(frameCount % 60 === 0) {
 var obstacle = createSprite(camera.position.x,camera.position.y+60,10,40);
 obstacle.velocityX = -(6 + 3*score/100);
 
 //generate random obstacles
 var rand = Math.round(random(1,6));
 switch(rand) {
 case 1: obstacle.addImage(obstacle1);
 break;
 case 2: obstacle.addImage(obstacle2);
 break;
 case 3: obstacle.addImage(obstacle3);
 break;
 case 4: obstacle.addImage(obstacle4);
 break;
 case 5: obstacle.addImage(obstacle5);
 break;
 case 6: obstacle.addImage(obstacle6);
 break;
 default: break;
 }
 
 //assign scale and lifetime to the obstacle 
 obstacle.scale = 0.5;
 obstacle.lifetime = 300;
 //add each obstacle to the group
 obstaclesGroup.add(obstacle);
 }
}

function reset(){
 gameState = PLAY;
 ground.velocityX = -(6 + 3*score/100);
 gameOver.visible = false;
 restart.visible = false;
 
 obstaclesGroup.destroyEach();
 cloudsGroup.destroyEach();
 
 trex.changeAnimation("running",trex_running);
 
 score = 0;
 
}


