function preload() {}

let w, h, b1, b2, b3, tt, tt2, tt3;
let letterColor;
let color1, color2;
var myColors = ['Orange', 'Red', 'Tomato', '#538be0', '#8f7ceb'];
w = 50;
h = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);


  letterColor = color(255);
  color1 = color('Teal');
  color2 = color('LightSeaGreen');

  stroke(color1);
  for (x = 0; x < width; x += w) {
    for (y = 0; y < height; y += h) {
      fill(color2);
      rect(x, y, w, h);
      fill(color1);
      rect(x, y, w / 1.5, h / 1.5);
      fill(color2);
      rect(x, y, w / 2.5, h / 2.5);
    }
  }
  noStroke();
  comandi();
}

function draw() {

  //BOTTONE 1
  b1 = createButton('TEXTURE 1 + random');
  b1.position((width - 370), (height - 130));
  b1.size(150);
  b1.style('background-color', color1);
  b1.style('font-size', '15px');
  b1.style('font-weight', 'bold');
  b1.style('letter-spacing', '2px');
  b1.style('color', letterColor);
  b1.style('padding', '15px');
  b1.style('border-style', 'solid');
  b1.style('border-width', '5px');
  b1.style('border-color', color2);
  b1.style('border-radius', '2px');
  b1.mousePressed(modOne);

  //BOTTONE 2
  b2 = createButton('TEXTURE 2 + random');
  b2.position((width - 200), (height - 130));
  b2.size(150);
  b2.style('background-color', color1);
  b2.style('font-size', '15px');
  b2.style('font-weight', 'bold');
  b2.style('letter-spacing', '2px');
  b2.style('color', letterColor);
  b2.style('padding', '15px');
  b2.style('border-style', 'solid');
  b2.style('border-width', '5px');
  b2.style('border-color', color2);
  b2.style('border-radius', '2px');

  b2.mousePressed(modTwe);


}

//DETTAGLI COMANDI
function comandi() {
  push();
  noStroke();
  fill(0, 95);
  rect(30, height - 200, 300, 150); //rect(x,y,w,h,[tl],[tr],[br],[bl])

  fill(letterColor);
  textFont('Helvetica');


  push();
  noStroke();
  textSize(50);
  tt = 'KEYS';
  text(tt, 45, height - 175);
  pop();
  textSize(12);

  tt2 = 'S -  save png       1 - ? ';
  text(tt2, 50, height - 145);

  tt3 = '2 -  color green    3 -  color violet ';
  text(tt3, 50, height - 120);

  pop();
}

function modOne() {
  stroke(color1);
  for (x = 0; x < width; x += w) {
    for (y = 0; y < height; y += h) {
      fill(color2);
      rect(x, y, w, h);
      fill(color1);
      rect(x, y, w / 1.5*random(0.5, 1), h / 1.5*random(0.5, 1));
      fill(color2);
      rect(x, y, w / 2.5*noise(random(1, 2)), h / 2.5*noise(random(1, 2)));
    }
  }
  comandi();
}


function modTwe() {

  background(color1);
  comandi();
  stroke(color1);
  for (var x = 0; x < width; x += 100) {
    for (var y = 0; y < height; y += 100) {

      var index = floor(random());
      if (random() < 0.5) {
        fill(color1);
      } else {
        fill(color2);
      }
      triangle(x, y, x, y + 100, x + 50, y + 50);

      var index = floor(random());
      if (random() < 0.5) {
        fill(color2);
      } else {
        fill(color1);
      }
      triangle(x, y, x + 100, y, x + 50, y + 50);

      var index = floor(random());
      if (random() < 0.5) {
        fill(color1);
      } else {
        fill(color2);
      }
      triangle(x + 100, y, x + 100, y + 100, x + 50, y + 50);

      var index = floor(random());
      if (random() < 0.5) {
        fill(color2);
      } else {
        fill(color1);
      }
      triangle(x, y + 100, x + 100, y + 100, x + 50, y + 50);
    }
  }

  comandi();
}



function keyReleased() {
  if (key == 's' || key == 'S') {
    save('Texture.png');
  }

  if (key == '1') {

    for (var x = 25; x < width; x += 50) {
      for (var y = 25; y < height; y += 50) {
        var r = random(0, myColors.length - 1);
        frameRate(5);
        r = Math.round(r);
        noFill();
        stroke(myColors[r]);
        strokeWeight(0.3);
        rect(x, y, 50, 50);
      }
    }
  }

  if (key == '2') {
    color1 = color('Teal');
    color2 = color('LightSeaGreen');
    background(color1);
    comandi();
  }

  if (key == '3') {
    color1 = color('PaleVioletRed');
    color2 = color('Pink');
    background(color1);
    comandi();
  }

}



//
// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }
