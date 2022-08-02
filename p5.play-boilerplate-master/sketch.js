var bg;
var dog1, dog2;
var dog1Img, dog1imgl,dog2Img, dog2imgl;
var edges;
var ob1,ob2,ob3,ob4,ob5,ob6,ob7,ob8;
var dog1stand, dog2stand;
var dog1jump, dog1jumpL, dog2jump, dog2jumpL;
var obGrp;
var plever,dlever,glever,treat,base, bases, treat2;
var t1, t2, t3, t4, t5, t6, t7, t8;
var dog1Trt, dog2trt;
var bar1, bar2;
var startbg;
var gameState = 0;
var play, playimage;
var score1=0, score2=0;
//var gravity1, gravity2;


function preload(){

bg = loadImage("./assets/bg.jpeg");
dog1Img = loadAnimation("./assets/1wistle.png", "./assets/1still.png");
dog1stand = loadAnimation("./assets/1standing.png");
dog1imgl = loadAnimation("./assets/1wistleL.png", "./assets/1stillL.png");
dog1jumpL= loadAnimation("./assets/1angryL.png");
dog1jump= loadAnimation("./assets/1angry.png");

dog2Img = loadAnimation("./assets/2wistle.png", "./assets/2still.png");
dog2stand = loadAnimation("./assets/2standing.png");
dog2imgl = loadAnimation("./assets/2wistleL.png", "./assets/2stillL.png");
dog2jumpL= loadAnimation("./assets/2angryL.png");
dog2jump= loadAnimation("./assets/2angry.png");
startbg = loadImage('./assets/start.jpg');


plever = loadImage("./assets/purplel.jpg");
glever = loadImage("./assets/greenl.jpg");
base = loadImage("./assets/base.jpg");
treat = loadImage("./assets/treat.png");
treat2 = loadImage("./assets/treat2.png");

}

function setup() {
  createCanvas(windowWidth,windowHeight);

  dog1 = createSprite(140,564, 20, 20);
  dog1.addAnimation("dog1stand", dog1stand);
  dog1.addAnimation("dog1running", dog1Img);
  dog1.addAnimation("dog1left", dog1imgl);
  dog1.addAnimation("1jumpL", dog1jumpL);
  dog1.addAnimation("1jump", dog1jump);

  dog1.scale = 0.3;
  dog1.setCollider("rectangle",0,0,250,250);
  dog1.debug = false;
 
  dog2 = createSprite(62,564,20,20);
  
  dog2.addAnimation("dog2stand", dog2stand);
  dog2.addAnimation("dog2running", dog2Img);
  dog2.addAnimation("dog2left", dog2imgl);
  dog2.addAnimation("2jumpL", dog2jumpL);
  dog2.addAnimation("2jump", dog2jump);

  dog2.scale = 0.3;



// play = createSprite(windowWidth/2,windowHeight/2,50,50)
// play.addImage(playimage)
//gravity1 = createSprite(dog1.x, dog1.y+6, 40,10)
//gravity1.visible = true


  obGrp = new Group();
  
  ob1 = createSprite(1045,595,600,20);
  ob2 = createSprite(247,481,640,20);
  ob3 = createSprite(1128,425,450,20);
  ob4 = createSprite(1015,327,190,20);
  ob5 = createSprite(749,278,180,20);
  ob6 = createSprite(425,270,170,20);
  ob7 = createSprite(151,228,370,20);
  ob8 = createSprite(1132,97,370,20);

  obGrp.add(ob1);
  obGrp.add(ob2);
  obGrp.add(ob3);
  obGrp.add(ob4);
  obGrp.add(ob5);
  obGrp.add(ob6);
  obGrp.add(ob7);
  obGrp.add(ob8);

  obGrp.setVisibleEach(false);

  console.log(obGrp);

  

dog1Trt = new Group(); 
dog2Trt = new Group();












  
t1 = createSprite(968,579,40,20);
t1.addImage(treat)
t1.scale = 0.18

t2 = createSprite(370,461,40,20);
t2.addImage(treat2)
t2.scale = 0.18

t3 = createSprite(1191,408,40,20);
t3.addImage(treat)
t3.scale = 0.18

t4 = createSprite(945,311,40,20);
t4.addImage(treat2)
t4.scale = 0.18

t5 = createSprite(736,258,40,20);
t5.addImage(treat)
t5.scale = 0.18

t6 = createSprite(376,253,40,20);
t6.addImage(treat2)
t6.scale = 0.18

t7 = createSprite(50,210,40,20);
t7.addImage(treat)
t7.scale = 0.18

t8 = createSprite(1126,77,40,20);
t8.addImage(treat2)
t8.scale = 0.18


dog1Trt.add(t1);

dog1Trt.add(t3);

dog1Trt.add(t5);

dog1Trt.add(t7);



dog2Trt.add(t2);

dog2Trt.add(t4);

dog2Trt.add(t6);

dog2Trt.add(t8);





 
  edges = createEdgeSprites()
}

function draw() {
  background(bg);  


  dog1.changeAnimation("dog1stand");

  if(keyDown(RIGHT_ARROW)){
  dog1.x += 6;
  dog1.changeAnimation("dog1running");
  }

  if(keyDown(LEFT_ARROW)){
    dog1.x -= 6
    dog1.changeAnimation("dog1left")
  }

  if(keyDown(DOWN_ARROW)){
    dog1.y += 6
  }

    console.log(dog1.y);
  if(keyWentDown(UP_ARROW)){
     // dog1.y -= 9
    dog1.velocityY -= 10;
   
  }
    dog1.velocityY +=0.8  
 // dog1.y+=0.2;



if(dog1.collide(t1)){
t1.destroy();
score1 +=3;
}

if(dog1.collide(t3)){
  t3.destroy();
  score1 +=3;
  }
  
  if(dog1.collide(t5)){
    t5.destroy();
    score1 +=3;
    }

    if(dog1.collide(t7)){
      t7.destroy();
      score1 +=3;
      }
      

      if(dog2.collide(t2)){
        t2.destroy();
        score2+=3;
        }
        if(dog2.collide(t4)){
          t4.destroy();
          score2+=3;
          }
          if(dog2.collide(t6)){
            t6.destroy();
            score2+=3;
            }
            if(dog2.collide(t8)){
              t8.destroy();
              score2+=3;
              }

              if(score1 == 12 && score2 == 12 ){


                textSize(40);
                text("You won",windowWidth/2,windowHeight/2);

              };







              textSize(25);
              text("Score: " + score1 ,300,50);
              text("Score: "+score2,300, 100);









/*if(dog2.collide(dog2Trt)){




}*/

dog2.changeAnimation("dog2stand");

  if(keyDown("d")){
    dog2.x += 6
    dog2.changeAnimation("dog2running")
    }
  
    if(keyDown("a")){
      dog2.x -= 6
      dog2.changeAnimation("dog2left")
    }
    
    if(keyWentDown("w")){
      // dog1.y -= 6
     dog2.velocityY -= 10;
    
   }
     dog2.velocityY +=0.5   
    
    if(keyDown("s")){
      dog2.y += 6
    }
dog2.collide(obGrp);
dog1.collide(obGrp);
dog1.collide(edges);
dog2.collide(edges);

  drawSprites();

  textSize(20);
  text(mouseX + "," + mouseY,mouseX,mouseY);
}
 


