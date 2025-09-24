var p5;!function(t){!function(t){t.EASINGS={linear:t=>t,easeInQuad:t=>t*t,easeOutQuad:t=>t*(2-t),easeInOutQuad:t=>t<.5?2*t*t:(4-2*t)*t-1,easeInCubic:t=>t*t*t,easeOutCubic:t=>--t*t*t+1,easeInOutCubic:t=>t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1,easeInQuart:t=>t*t*t*t,easeOutQuart:t=>1- --t*t*t*t,easeInOutQuart:t=>t<.5?8*t*t*t*t:1-8*--t*t*t*t,easeInQuint:t=>t*t*t*t*t,easeOutQuint:t=>1+--t*t*t*t*t,easeInOutQuint:t=>t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t}}(t.tween||(t.tween={}))}(p5||(p5={})),function(t){!function(t){t.Tween=class{constructor(t){this.motions=[],this.keyChanges=[],this.active=!1,this.isLoop=!1,this.currentMotionIndex=0,this.obj=t}resetToStart(){for(let t in this.start)this.obj[t]=this.start[t];this.motionStart=this.createStartObject(this.start)}createStartObject(t){const e={};return this.keyChanges.forEach(n=>e[n]=t[n]),e}addToKeyChangeList(t){this.keyChanges.includes(t)||this.keyChanges.push(t)}interpolation(e,n,i,s="linear"){return(s in t.EASINGS?t.EASINGS[s]:t.EASINGS.linear)(i)*(n-e)+e}addMotion(t,e,n,i="linear"){return this.addToKeyChangeList(t),this.motions.push({actions:[{key:t,target:e}],duration:n,leftTime:0,easing:i}),this}addMotions(t,e,n="linear"){return t.flatMap(t=>t.key).forEach(t=>this.addToKeyChangeList(t)),this.motions.push({actions:t,duration:e,leftTime:0,easing:n}),this}resetMotions(){this.motions=[]}startLoop(){return this.isLoop=!0,this.startTween(),this}startTween(){return this.start=this.createStartObject(this.obj),this.motionStart=this.createStartObject(this.obj),this.currentMotionIndex=0,this.active=!0,this}update(t){if(!this.active)return;const e=this.motions[this.currentMotionIndex];if(e.leftTime>=e.duration&&(e.leftTime=0,this.motionStart=this.createStartObject(this.obj),this.currentMotionIndex+=1,this.currentMotionIndex>=this.motions.length&&(this.isLoop?(this.resetToStart(),this.currentMotionIndex=0):this.active=!1)),e.leftTime+=t,e.actions)for(let t of e.actions)if(t.key&&t.target){const n=Math.min(e.leftTime/e.duration,1);this.obj[t.key]=this.interpolation(this.motionStart[t.key],t.target,n,e.easing)}}}}(t.tween||(t.tween={}))}(p5||(p5={})),function(t){!function(t){t.GeometricObjectTween=class extends t.Tween{addMotionTo(t,e,n="linear"){let i=[];t.x&&i.push({key:"x",target:t.x}),t.y&&i.push({key:"y",target:t.y}),t.width&&i.push({key:"width",target:t.width}),t.height&&i.push({key:"height",target:t.height}),t.w&&i.push({key:"w",target:t.w}),t.h&&i.push({key:"h",target:t.h}),t.angle&&i.push({key:"angle",target:t.angle}),t.rotation&&i.push({key:"rotation",target:t.rotation}),super.addMotions(i,e,n)}}}(t.tween||(t.tween={}))}(p5||(p5={})),function(t){!function(e){e.manager=new class{constructor(){this.tweens=[]}getTween(t){return this.tweens.find(e=>e.name===t).tween}addTween(t,n){const i=n||"tween"+this.tweens.length,s=new e.Tween(t);return this.tweens.push({name:i,tween:s}),s}update(t){for(let e of this.tweens)e.tween.update(t)}},t.prototype.registerMethod("pre",()=>e.manager.update(window.deltaTime))}(t.tween||(t.tween={}))}(p5||(p5={}));


class Dancer {
  constructor(x, y, dur, pos, col, shape) {
    this.x = x;
    this.y = y;
    this.dur = dur; //how long is each movement
    this.pos = pos;
    this.col = col;
    this.shape = shape;
  }

  show() {
    stroke(this.col);
    fill(this.col);
  
    circle(this.x, this.y, this.shape);
  }

  moves() {
    
    this.inTween = p5.tween.manager.addTween(this);

    for (let i = 0; i < this.pos.length; i += 2) { 
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
    x: width - width/6  ,
    y: height/6 ,
  };
  return upLeft;
}

function cl() {
  let centerLeft = {
    x: width -width/6,
    y: height/ 2 ,
  };
  return centerLeft;
}

function cr() {
  let centerRight = {
    x: width / 6,
    y: height / 2,
  };
  return centerRight;
}

function dl() {
  let downLeft = {
    x: width -width/6,
    y: height - height/6,
  };
  return downLeft;
}

function dc() {
  let downCenter = {
    x: width/2,
    y: height - height/6,
  };
  return downCenter;
}

function dr() {
  let downRight = {
    x: width/6,
    y: height - height/6,
  };
  return downRight;
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


