var aColor = "#629FE6";

var freqA = 523.25;
var freqB = 333.3;
var freqS = 196;
var freqD = 493.88;
var freqF = 254;


var oscA, oscB, oscS, oscD, oscF;
var cnv;

var playingA, playingB, playingS, playingD, playingF;

function setup() {


    playingA = false;
    playingB = false;
    playingS = false;
    playingD = false;
    playingF = false;

    cnv = createCanvas(400, 400);
    cnv.mousePressed(soundOn);
    cnv.mouseReleased(soundOff);

    oscA = new p5.Oscillator();
    oscA.setType('sin');
    oscA.freq(freqA);
    oscA.amp(0);
    oscA.start();

    oscB = new p5.Oscillator();
    oscB.setType('sin');
    oscB.freq(freqB);
    oscB.amp(0);
    oscB.start();

    oscS = new p5.Oscillator();
    oscS.setType('triangle');
    oscS.freq(freqS);
    oscS.amp(0);
    oscS.start();

    oscD = new p5.Oscillator();
    oscD.setType('triangle');
    oscD.freq(freqD);
    oscD.amp(0);
    oscD.start();

    oscF = new p5.Oscillator();
    oscF.setType('triangle');
    oscF.freq(freqF);
    oscF.amp(0);
    oscF.start();

    filter = new p5.BandPass();

    noise = new p5.Noise();
    // disconnect unfiltered noise,
    // and connect to filter
    noise.disconnect();
    noise.connect(filter);
    noise.start();

    fft = new p5.FFT();


    drawClickArea();

    //colorMode(HSB);
}


function drawClickArea() {
    background(0);
    stroke(255);
    noFill();
    ellipse(200, 200, 350, 350);
    fill(aColor);
    ellipse(75, 75, 36, 36);
    noFill();
    ellipse(200, 200, 278, 278);
    fill(212, 127, 127);
    ellipse(70, 225, 40, 40);
    noFill();
    ellipse(200, 200, 211, 211);
    fill(255, 240, 47);
    ellipse(200, 200, 57, 57);
    fill(239, 203, 143);
    ellipse(215, 375, 20, 20);
    fill(41, 145, 152);
    ellipse(221, 60, 25, 25);
    fill(100, 75, 75);
    ellipse(315, 280, 42, 42);
}

function soundOn() {

    if (!playingA && mouseX > 55 && mouseX < 110 && mouseY < 245 && mouseY > 205) {
        oscA.amp(0.5, 0.1);
        playingA = true;

    } else if (!playingB && mouseX > 65 && mouseX < 100 && mouseY < 100 && mouseY > 65) {
        playingB = true;
        oscB.amp(0.5, 0.1);
    } else if (!playingS && mouseX > 200 && mouseX < 246 && mouseY < 70 && mouseY > 35) {
        playingS = true;
        oscS.amp(0.5, 0.1);
    } else if (!playingD && mouseX > 200 && mouseX < 225 && mouseY < 385 && mouseY > 365) {
        playingD = true;
        oscD.amp(0.5, 0.1);
    } else if (!playingF && mouseX > 300 && mouseX < 340 && mouseY < 300 && mouseY > 260) {
        playingF = true;
        oscF.amp(0.5, 0.1);
    }
}

function soundOff() {
    playingA = false;
    playingB = false;
    playingS = false;
    playingD = false;
    playingF = false;
    oscA.amp(0, 0.5);
    oscB.amp(0, 0.5);
    oscS.amp(0, 0.5);
    oscD.amp(0, 0.5);
    oscF.amp(0, 0.5);
}




function draw() {
    // set the BandPass frequency based on mouseX
    var freq = map(mouseX, 50, width, 900, 10000);

    filter.freq(freq);
    filter.res(100);
    isMouseOverCanvas();
    var mX = mouseX,
        mY = mouseY;

    if (mX > 85 && mX < 350 && mY < 300 && mY > 85) {
        noise.amp(0.9, 0.2);
    } else {
        noise.amp(0, 0.2);
    }
}





function isMouseOverCanvas() {
    var mX = mouseX,
        mY = mouseY;
    if (mX > 75 && mX < 90 && mY < 90 && mY > 75) {
        noise.amp(0.5, 0.2);
    } else {
        noise.amp(0, 0.2);
    }

}