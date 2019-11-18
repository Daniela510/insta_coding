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
for(let i = 0; i < 50; i++) {
    bi[i]= loadImage(instagram_output.graphql.hashtag.edge_hashtag_to_media.edges[i].node.display_url);
}
}

function setup() {
  cnv = createCanvas(windowHeight, windowHeight,0,0);
  //centerCanvas();
    noStroke();
    //randomize
    var one = floor(random(0,50));var two = floor(random(0,50));var thr = floor(random(0,50));

  imageMode(CORNER);  background(bi[two]);tint(255, 127);
  image(bi[thr], 0, 0); image(bi[one], 0, 0);
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
    let variables = [one, two, thr];
var r = (random(variables)); //selecting the image from witch to pull pxels
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
