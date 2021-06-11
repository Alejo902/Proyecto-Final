let bill, cinta, fuegoazul, fuegorosa, gnomo, portal, rosa, tienda, tiostan;

function preload(){

bill=loadImage("/assets/0bill0.png");
cinta=loadImage("/assets/0cinta0.png");
fuegoazul=loadImage("/assets/0fuegoazul0.png");
fuegorosa=loadImage("/assets/0fuegorosa0.png");
gnomo=loadImage("/assets/0gnomo0.png");
portal=loadImage("/assets/0portal0.png");
rosa=loadImage("/assets/0rosa0.png");
tienda=loadImage("/assets/0tienda0.png");
tiostan=loadImage("/assets/0tiostan0.png");

}


function setup() {
  createCanvas(400, 400);
}


function draw() {
  background(220);
  ellipse(100,100,50,50);

  fill(255,0,0);
  ellipse(150,150,50,50);

  fill(0,255,0);
  ellipse(150,150,150,150);


}


