let gif;

function preload ()

function setup() {
  createCanvas(windowWidth, windowHeight); 
  strokeWeight(8);

  fill('green');  
}
  
function draw() {

  var num = 2
  
  var sideLen = windowWidth

  var sideLen = windowWidth/num;
  
  
    for (var y = 0; y < windowHeight; y = y + sideLen) {
    
    
    for (var x = 0; x < windowWidth; x = x + sideLen) {
 image (gif , x, y, sideLen, sideLen); 
  }
    }

}
function windowResized(){
  resizeCanvas (windowWidth, windowHeight);
}