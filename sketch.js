var carRimg, carLimg, carUimg, carDimg;
var car1;
var track;
var timer=4;
var sec = 0;
var gameState= "start"
var gamestart,gamestartimg
var recta, song;
var distance = 0;
var lap=0;

function preload(){
    carRimg = loadImage("carright.png");
    carLimg = loadImage("carleft.png");
    carUimg = loadImage("carup.png");
    carDimg = loadImage("cardown.png");
    track = loadImage("track.png");
    gamestartimg = loadImage("gamestart.png");
    song=loadSound("sound.mp3");
}

function setup(){
    createCanvas(displayWidth,displayHeight);
    car1 = createSprite(990,300,50,30);
    gamestart = createSprite(585,100,10,10)
    car1.addImage(carUimg);
  
    recta = createSprite(590,-1020,500,10)
    
    car1.scale = 0.7
}

function draw(){
    background("white");
    image(track,0,(-displayHeight*4)+2500,displayWidth-750,(displayHeight*5)-1500);
    //gamstate start
    if(gameState==='start'&&car1.x===990&&car1.y===300){
        gamestart.addImage(gamestartimg);
        timer = 4;
        sec = 60;
        if(mouseIsPressed===true){
            gameState= "play";
        }

    }
    //gamestate play
    if(gameState==='play'){
        keycontrols();
        timing();
        laps();
        //song.play();
        gamestart.visible=false;
        
        //right side
        if(car1.x<=925&&car1.y>-870&&car1.x>=445&&car1.y<1120){
            car1.x=925
        }
        if(car1.x>=1085){
            car1.x=1080
        }
    }
    //left side
    if(car1.x>=245&&car1.y>-870&&car1.x<=445&&car1.y<1120){
        car1.x=245
    }
    if(car1.x<=70){
        car1.x=70
    }
    //top curve
    if(car1.y<=-1720){
        car1.y=-1720;
    }
   if(car1.y>=-1370&&car1.x<655&&car1.x>=525&&car1.y<=-1000){
       car1.y=-1370;
   }
//top right curve
  // if(car1.x<870&&car1.x>700&&car1.y<-870&&car1.y>-1370){
    //   car1.x=785;
    
  // }




  console.log(distance);
    
    

   camera.position.x = displayWidth/2; 
   camera.position.y = car1.y
    drawSprites();
    textSize(30)
    fill("white");
    text(timer+':'+sec,565,200);
}
function keycontrols(){
    if(keyDown('a')){
        car1.x = car1.x - 5;
        car1.addImage(carLimg);
    }
    if(keyDown('d')){
        car1.x = car1.x + 5;
        car1.addImage(carRimg);
    }
    if(keyDown('w')&&car1.x>590){
        car1.y = car1.y - 10;
        car1.addImage(carUimg);
    }
    if(keyDown('s')&&car1.x<590){
        car1.y = car1.y + 10;
        car1.addImage(carDimg);
}
}
function timing(){
    if (frameCount % 3600 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
        timer --;
      }
      if (timer == 0) {
        text("GAME OVER", width/2, height*0.7);
      }
      if (frameCount % 60 == 0 && sec > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
        sec --;
      }
      if (sec == 0) {
          sec = 59
        if (frameCount % 60 == 0 && sec > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
            sec --;
          }
      }
}
function laps(){
    if (keyDown('w')&&car1.y>=-880&&car1.y<=1140&&car1.x>590){
        distance = distance + 1;
    }
    if (keyDown('s')&&car1.y>=-880&&car1.y<=1140&&car1.x<590){
        distance = distance + 1;
    }
   if(distance%410==0&&distance>0){
      lap=lap+1
      console.log('lap'+lap+'completed')
   }
}
