var cnv;
var bi=[];

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}
function preload() {
const div = document.getElementById('data');

for(let i = 0; i < 3; i++) {

    bi[i]= loadImage(instagram_output.graphql.hashtag.edge_hashtag_to_media.edges[i].node.display_url);
}
}
function setup() {
  cnv = createCanvas(700, 700);
  centerCanvas();
    noStroke();
  imageMode(CORNER);
for (var i=0; i<100; i++){
  pixels.push(new pixel());
}

}

function draw() {
// image(i1, 0, 0,500,500);
// image(i2, 0, 0,500,500);


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
var r = floor(random(1,bi.length));
    var color = bi[r].get(this.x, this.y); // color of pixel in image
    fill(color);

    ellipse(this.x, this.y, 3, 3);
  }
}
function windowResized() {
  centerCanvas();
}
// if (mouseIsPressed) {
//   fill(0);
// } else {
//   fill(255);
// }
// ellipse(mouseX, mouseY, 80, 80);
