let dancer = [];
let col = "lavender";

function setup() {
  createCanvas(800, 800);
 
  let centerStage = center();
  let upRight = ur();
  let upCenter = uc();
  let upLeft = ul();
  let centerLeft = cl();
  let centerRight = cr();
  let downRight = dr();
  let downCenter = dc();
  let downLeft = dl();


   
  let x = centerStage.x;
  let y = centerStage.y;
  
  let pos = [upRight.x, upRight.y, upLeft.x, upLeft.y];
  let dur = [3000, 3000, 3000];
  
  
  dancer = new Dancer(x, y, dur, pos, col); //create your dancer 
  dancer.moves();
  
  print(dancer);
}

function draw() { 
  background(0);
  
  grid();
  stageNames();

  dancer.show(); //showtime!
  
  
  
}

