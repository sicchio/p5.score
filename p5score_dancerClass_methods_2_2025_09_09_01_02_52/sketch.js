let dancer = [];

function setup() {
  createCanvas(800, 800);
  dancer = new Dancer(100, 100); //create your dancer and starting position
  dancer.moves();

  dancer2 = new Dancer2(width / 2, height / 2);
  dancer2.moves();
}

function draw() {
  background(0);
  grid();

  dancer.show(); //showtime!
  dancer2.show();
}

// Dancer 1
class Dancer {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.dur = [1000, 800, 800, 1200, 10000, 400]; //how long is each movement
  }

  show() {
    stroke("magenta");
    noFill();
    ellipseMode(CORNER);
    ellipse(400, 400, this.x, this.y);
  }

  moves() {
    let move = [150, 150, 250, 100, 100, 300, 300, 200, 200, 100]; // x,y positions

    this.inTween = p5.tween.manager.addTween(this);

    for (let i = 0; i < move.length; i += 2) {
      let duration = this.dur[Math.floor(i / 2)] || 1000;
      this.inTween.addMotions(
        [
          { key: "x", target: move[i] },
          { key: "y", target: move[i + 1] },
        ],
        duration
      );
    }

    this.inTween.startLoop();
  }
}

class Dancer2 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.dur = [1000, 1800, 800, 1200, 10000]; // example durations
  }

  show() {
    stroke("cyan");
    noFill();
    ellipseMode(CORNER);
    ellipse(this.x, this.y, 50, 50);
  }

  moves() {
    let move = [150, 150, 250, 100, 100, 300, 300, 200, 200, 100]; // example positions

    this.inTween = p5.tween.manager.addTween(this);

    for (let i = 0; i < move.length; i += 2) {
      let duration = this.dur[Math.floor(i / 2)] || 1000;
      this.inTween.addMotions(
        [
          { key: "x", target: move[i] },
          { key: "y", target: move[i + 1] },
        ],
        duration
      );
    }

    this.inTween.startLoop();
  }
}

////

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
