var cnv;
var bi=[];
let scnv;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function preload() {
const div = document.getElementById('data');
    bi[1]= loadImage('https://66.media.tumblr.com/7a47e4474903a8d8e344599883586150/e5adb9470fe9e4a8-2e/s1280x1920/10ebf45e9c5f343ffe18ec90f3309a9b8b673494.jpg');
    bi[2]= loadImage('https://66.media.tumblr.com/7a47e4474903a8d8e344599883586150/e5adb9470fe9e4a8-2e/s1280x1920/10ebf45e9c5f343ffe18ec90f3309a9b8b673494.jpg');
    bi[0]= loadImage('https://66.media.tumblr.com/7a47e4474903a8d8e344599883586150/e5adb9470fe9e4a8-2e/s1280x1920/10ebf45e9c5f343ffe18ec90f3309a9b8b673494.jpg');

}

function setup() {
  cnv = createCanvas(windowHeight, windowHeight,0,0);
  //centerCanvas();
    noStroke();imageMode(CORNER);  
  // imageMode(CORNER);  background(bi[2]);tint(255, 127);
  // image(bi[1], 0, 0); image(bi[0], 0, 0);
for (var i=0; i<100; i++){
  pixels.push(new pixel());
}
}

function draw() {
for (var i=0; i<pixels.length; i++){
  pixels[i].update();
}
}

function pixel(){
  this.x = random(width); //random initial position
  this.y = random(height);


  this.update = function(){
    dx = random(-5, 5); //random ?x
    dy = random(-5, 5); //random ?y
    this.x += dx;
    this.x= constrain(this.x,0,width);
    this.y += dy;
    this.y = constrain(this.y,0,height);
var r = floor(random(0,3)); //selecting the image from witch to pull pxels
    var color = bi[r].get(this.x, this.y); // color of pixel in image
    fill(color);

    ellipse(this.x, this.y, 3, 3);
  }
}
function mousePressed() {
saveCanvas('myCanvas', 'jpg');
  }
// function windowResized() {
//   centerCanvas();
// }
// if (mouseIsPressed) {
//   fill(0);
// } else {
//   fill(255);
// }
// ellipse(mouseX, mouseY, 80, 80);
