const dancer = {
  x: 0,
  y: 0,
};

const dancer2 = {
  x: 350,
  y: 350,
};


p5.tween.manager
  .addTween(dancer)
  .addMotions(
    [
      { key: "x", target: move1.x },
      { key: "y", target: move1.y },
    ],
    move1.dur
  )
  .addMotions(
    [
      { key: "x", target: move2.x },
      { key: "y", target: move2.y },
    ],
    move2.dur
  )
  .addMotions(
    [
      { key: "x", target: move3.x },
      { key: "y", target: move3.y },
    ],
    move3.dur
  )

  .addMotions(
    [
      { key: "x", target: move4.x},
      { key: "y", target: move4.y},
    ],
    move4.dur
  )
.addMotions(
    [
      { key: "x", target: move5.x},
      { key: "y", target: move5.y},
    ],
    move5.dur
  )
.addMotions(
    [
      { key: "x", target: move6.x},
      { key: "y", target: move6.y},
    ],
    move6.dur
  )
// .addMotions(
//     [
//       { key: "x", target: move7.x},
//       { key: "y", target: move7.y},
//     ],
//     dur
//   )
// .addMotions(
//     [
//       { key: "x", target: move8.x},
//       { key: "y", target: move8.y},
//     ],
//     dur
//   )
// .addMotions(
//     [
//       { key: "x", target: move9.x},
//       { key: "y", target: move9.y},
//     ],
//     dur
//   )
// .addMotions(
//     [
//       { key: "x", target: move10.x},
//       { key: "y", target: move10.y},
//     ],
//     dur
//   )
// .addMotions(
//     [
//       { key: "x", target: move11.x},
//       { key: "y", target: move11.y},
//     ],
//     dur
//   )
// .addMotions(
//     [
//       { key: "x", target: move12.x},
//       { key: "y", target: move12.y},
//     ],
//     dur
//   )
  .startLoop();


p5.tween.manager
  .addTween(dancer2)
  .addMotions(
    [
      { key: "x", target: move6.x },
      { key: "y", target: move6.y },
    ],
    move1.dur
  )
  .addMotions(
    [
      { key: "x", target: move5.x },
      { key: "y", target: move5.y },
    ],
    move2.dur
  )
  .addMotions(
    [
      { key: "x", target: move4.x },
      { key: "y", target: move4.y },
    ],
    move3.dur
  )

  .addMotions(
    [
      { key: "x", target: move3.x},
      { key: "y", target: move3.y},
    ],
    move4.dur
  )
.addMotions(
    [
      { key: "x", target: move2.x},
      { key: "y", target: move2.y},
    ],
    move5.dur
  )
.addMotions(
    [
      { key: "x", target: move1.x},
      { key: "y", target: move1.y},
    ],
    move6.dur
  )
.startLoop();

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
