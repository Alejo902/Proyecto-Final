
function preload(){
  winner=loadImage("/assets/winner.png");
  raton=loadImage("/assets/raton.png");
  pag_grande=loadImage("/assets/pag_grande.png");
  muercie=loadImage("/assets/muercie.png");
  mabel=loadImage("/assets/mabel.png");
  hacha=loadImage("/assets/hacha.png");
  gameO=loadImage("/assets/gameO.png");
  dipper=loadImage("/assets/dipper.png");
  diario_gran=loadImage("/assets/diario_gran.png");
  alfombra=loadImage("/assets/alfombra.png");
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


