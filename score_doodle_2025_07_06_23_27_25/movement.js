let stageDirection = {
  x: 1,
  y: -1,
  xspeed: 1,
  yspeed: 1,
  sustain: 0.15
};


function dancer(x, y) {
  stroke(0, 255, 250);
  strokeWeight(4);
  noFill();
  ellipse(stageDirection.x, y, 50, 50);
}

function dancer2(x, y) {
  stroke(255, 0, 250);
  strokeWeight(4);
  noFill();
  ellipse(stageDirection.x, y, 50, 50);
}

function move() {
  line(10,50,150,50);
  if (stageDirection.x < 150){
  stageDirection.x = stageDirection.x + stageDirection.xspeed;
  }
}

function sustain() {  
  for (x = 10;  x < 150; x = x+ 10){ line(x,150,x,150);
                                   }  
  if (stageDirection.x < 250){
  stageDirection.x = stageDirection.x + stageDirection.sustain;
  }
}
