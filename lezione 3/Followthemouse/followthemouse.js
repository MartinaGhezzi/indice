//scope globale, le variabili hanno visibilità su entra,be le funzioni//
let canvasXMas=400;
let canvasYMas=400;

function setup() {
  createCanvas(canvasXMas, canvasYMas);
  background (220);
}

function draw() {
  textSize(15);
  let string_toprint="Contenuto mouseX" +mouseX ;
  //  text(string_toprint, 20, 20);
  ",y=" +mouseY;
  strokeWeight(1);
  line (0, mouseX, canvasXMas, mouseY);
  //feedback tasto mouse sinistro
  //cambiare colore della line se schiacciamo il mouse
  //p5 --> true, se il mouse è schiacciato
  //altrimenti, è false
  if(mouseIsPressed == true) {
    if(mouseButton == RIGHT) {
      background(220);
    }
      //coloriamo di giallo
      stroke("yellow");
  } else {
    //altrimenti nero
    stroke("black");
  }
  mouseIsPressed;
}