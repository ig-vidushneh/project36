var dog, sadDog, happyDog, database;
var foodS, foodStock;
var fedTime, lastFed;
var feed, addFood;
var foodObj;

function preload() {
  sadDog = loadImage("Images/Dog.png");
  happyDog = loadImage("Images/happy dog.png");
}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);
  dog = createSprite(250, 300, 150, 150);
  dog.addImage(dogImg);
  dog.scale = 0.15;
  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
  textSize(20);
}
function draw(){
  background(46,139,87)
  if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
  dog.addImage(dogImg1)
  }
  drawSprites();
  fill("white");
  text("food remaining" + foodS, 170,200);
  textSize(13);
  text("press up arrow key to feed the dog", 130,10,300,20)
}

function readStock(data){
   foodS=data.val(); 
  }

  function writeStock(x) {
    if (x <= 0) {
      x = 0;
    } else {
      x = x - 1;
    }
    database.ref('/').update({
      Food: x
    })
  }