function preload(){

}
function setup(){
canva = createCanvas(640,480);
canva.position(110,250);
camera = createCapture(VIDEO);
camera.hide();
color = "";
}
function draw(){
image(camera,0,0,640,480);
circle(70,60,100);
fill("red");
circle(70,410,100);
fill("red");
circle(570,60,100);
fill("red");
circle(570,410,100);
fill("red");
tint(color);
}
function filter_img(){
color = document.getElementById("color").value;
}
function snap(){
    save("your.png");
}