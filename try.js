var cnv;
var bi=[];
var biDraw = [];
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
    // instagram_output.graphql.hashtag.edge_hashtag_to_media.edges[i].node.edge_media_to_caption.edges[0].node.text
}
}

function setup() {
  cnv = createCanvas(windowHeight, windowHeight,0,0);
  //centerCanvas();
    noStroke();
    //randomize
    biDraw[0] = floor(random(0,50));
    biDraw[1] = floor(random(0,50));
    biDraw[2] = floor(random(0,50));
  imageMode(CORNER);
//  background(bi[two]);tint(255, 127); image(bi[thr], 0, 0); image(bi[one], 0, 0);
 //background(bi[2]);tint(255, 127); image(bi[1], 0, 0); image(bi[0], 0, 0);
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
    // let variables = [one, two, thr]; var r = floor(random(variables));
var r = floor(random(0,3)); //selecting the image from witch to pull pxels
    var color = bi[biDraw[r]].get(this.x, this.y); // color of pixel in image
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
