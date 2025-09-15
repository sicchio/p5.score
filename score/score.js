class Dancer {
  constructor(x, y, dur, pos, col) {
    this.x = x;
    this.y = y;
    this.dur = dur; //how long is each movement
    this.pos = pos;
    this.col = col;
  }

  show() {
    stroke(this.col);
    fill(this.col);
    //noFill();
    ellipseMode(CORNER);
    ellipse(this.x, this.y, 100, 100);
  }

  moves() {
    
    this.inTween = p5.tween.manager.addTween(this);

    for (let i = 0; i < this.pos.length; i++) { 
      let duration = this.dur[i] || 1000;
      this.inTween.addMotions(
        [
          { key: "x", target: this.pos[i] },
          { key: "y", target: this.pos[i + 1] },
        ],
        duration
      );   
    }
    this.inTween.startLoop();
  }
  
  
} 
  

///////STAGE DIRECTIONS///////




function center() {
  let center = {
    x: width / 2,
    y: height / 2,
  };
  return center;
}

function ur() {
  let upRight = {
    x: width / 6,
    y: height / 6,
  };
  return upRight;
}

function uc() {
  let upCenter = {
    x: width/2,
    y: height/6,
  };
  return upCenter;
}

function ul() {
  let upLeft = {
    x: width / 2 - width / 3,
    y: height / 2 - height / 3,
  };
  return upLeft;
}

function cl() {
  let centerLeft = {
    x: width / 2 - width / 3,
    y: height/ 2 ,
  };
  return centerLeft;
}

function cr() {
  let centerRight = {
    x: width - width / 6,
    y: height / 2,
  };
  return centerRight;
}

function dr() {
  let downRight = {
    x: width -width/6,
    y: height - height/6,
  };
  return downRight;
}

function dc() {
  let downCenter = {
    x: width/2,
    y: height - height/6,
  };
  return downCenter;
}

function dl() {
  let downLeft = {
    x: width/6,
    y: height - height/6,
  };
  return downLeft;
}

//

function grid() {
  for (let x = 0; x <= width; x += width / 3) {
    stroke(200);
    strokeWeight(2);
    line(x, 0, x, height);
  }

  for (let i = 0; i <= height; i += height / 3) {
    stroke(200);
    strokeWeight(2);
    line(0, i, width, i);
  }
}

function stageNames() {
  textSize(14);
  fill(255);
  stroke(0);
  strokeWeight(4);
  text("Upstage Right", 10, 50);
  text("Upstage", width / 3 + 10, 50);
  text("Upstage Left", width - width / 3 + 10, 50);

  text("Center Right", 0 + 10, height / 3 + 50);
  text("Center Stage", width / 3 + 10, height / 3 + 50);
  text("Center Left", width - width / 3 + 10, height / 3 + 50);

  text("Downstage Right", 0 + 10, height - height / 3 + 50);
  text("Downstage", width / 3 + 10, height - height / 3 + 50);
  text("Downstage Left", width - width / 3 + 10, height - height / 3 + 50);

  text("Audience", width / 3 + 50, height);
}

