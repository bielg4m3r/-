
var meteoro, meteoroImg, grupoMeteoro;
var nave, naveImg;
var gameState = "jogar";
var espaco, espacoImg;
var pontos;



function preload(){

naveImg = loadImage("nave.png");
espacoImg = loadImage("espaco2.jpg");
meteoroImg = loadImage("meteoro.png");



}

function setup() {
 createCanvas(600, 800);

espaco = createSprite(300, 400);
espaco.addImage("espaco", espacoImg);
espaco.scale = 1
espaco.velocityY += 4;

nave = createSprite(270, 700);
nave.addImage("nave", naveImg)
nave.scale = 0.2;


}

function draw() {
 
backgroud("black")
nave.setCollider("circle", 0, 0, 50);

    



 if (espaco.y > height){
    espaco.y = height / 2;
 }                        




if (keyDown("right")){

    nave.x += 3;

}
if (keyDown("left")){

    nave.x -= 3;

}
if (keyDown("up")){

    nave.y -= 3;

}
if (keyDown("down")){

    nave.y += 3;

}

if (nave.isTouching(grupoMeteoro)){

    nave.destroy();
    gameState = fim;
    grupoMeteoro.destroyEach();
}













criarMeteoro();
drawSprites();
}









function criarMeteoro(){
if (frameCount % 30 === 0) {

    meteoro = createSprite(300, -50);
    meteoro.x = Math.round(random(100, 400));
    meteoro.addImage("meteoroImg",meteoroImg);
    meteoro.velocityY -= 3;
    console.log("criarMeteoro");
    meteoro.lifeTime = 300;
    meteoro.scale = 2;

   }
   
}

