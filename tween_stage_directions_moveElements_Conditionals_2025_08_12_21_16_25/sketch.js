//CONDITIONALS

//this one asks choreographers to set parameters for each move, including x, y and duration

const move1 = {
  x: 50, //stage right/left
  y: 50, //upstage/downstage
  dur: 1000, //how long to move there
};

const move2 = {
  x: 700, //center stage = 200,200
  y: 500,
  dur: 10000,
};

const move3 = {
  x: 1200,
  y: 600,
  dur: 500,
};

const move4 = {
  x: 200,
  y: 350,
  dur: 1000,
};

const move5 = {
  x: 200,
  y: 350,
  dur: 1000,
};

const move6 = {
  x: 400,
  y: 700,
  dur: 10000,
};

function setup() {
  createCanvas(1400, 1000);
}

function draw() {
  background(0);

  let num = [50, 100, 150, 200, 300, 350];
  //let r = random(num);
  let r = noise(10, 1000);
  print(r);

  grid();
 //stageNames();

  strokeWeight(4);

  //group via for loop
    // for (let i = 0; i <= 100; i += 50) {
    //   stroke('yellow');
    //   noFill();
    //   ellipse(dancer.x * r , dancer.y  + i, 50, 50);
    // }

  //dancer 2 - using a different set of moves called dancer2 
  fill(255, 40, 200, 200);
  if (dancer.x < 100){
  ellipse(dancer2.x , dancer2.y, 50, 50);
  }else{
    ellipse(200 , 200, 50, 50);
  }
  
  print(dancer.x);
  print(dancer2.y);

  //dancer 3
  stroke("magenta");
  noFill();
  if (dancer2.y > dancer.x){
  rect(dancer.x % r, dancer.y + r, 50, 50);
  }else{
    rect(dancer.x, dancer.y, 50, 50);
  }

  //dancer 4
  stroke("cyan");
  noFill();
  rect(dancer.x - r * 50, dancer.y - 100, 50, 50);

}
