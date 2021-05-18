var hr,mn,sc
var hrangle,scangle,mnangle



function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
}

function draw() {
  background(0);  
  hr = hour();
  mn = minute();
  sc = second();
  //showing the time
fill("white")
textSize(20);
text("Time is : "+hr+":"+mn+":"+sc,400,150);
//calculating angle
scangle =  map(sc,0,60,0,360)
mnangle = map(mn,0,60,0,360)
hrangle = map(hr%12,0,12,0,360)
translate(200,200)
rotate(-90)
//creating a second hand
push()
rotate(scangle)
stroke("red")
strokeWeight(7)
line(0,0,100,0)
pop()
//creating a minute hand
push()
rotate(mnangle)
stroke("green")
strokeWeight(7)
line(0,0,80,0)
pop()
//creating a hour hand
push()
rotate(hrangle)
stroke("blue")
strokeWeight(7)
line(0,0,50,0)
pop()
//creating a second arc
noFill()
strokeWeight(7)
stroke("red")
arc(0,0,300,300,0,scangle)
stroke("green")
arc(0,0,280,280,0,mnangle)
stroke("blue")
arc(0,0,260,260,0,hrangle)
}