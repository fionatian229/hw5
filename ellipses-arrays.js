let bubbles = [];

function setup() {
	createCanvas(400, 400);
	//colorMode(HSB);
	for (let i = 0; i < 50; i++) {
		let x = random(0, 400);
		let y = 200;
		let d = random(5, 20);
		bubbles[i] = new Bubble(x, y, d);

	}

}


function draw() {

	background(247, 252, 50);

	for (let i = 0; i < bubbles.length; i++) {
		bubbles[i].move();

		bubbles[i].show();

	}

}
class Bubble {
	constructor(x, y, d) {
		this.x = x;
		this.y = y;
		this.d = d;
	}

	move() {
		this.x = this.x + random(1, 2);

		this.y = this.y + random(-1, 1);
		if (this.x > width) {
			this.x = random(0, 400);
		}

	}


	show() {
		noStroke();
		fill(random(1, 255), random(1, 255), random(2, 255));
		ellipse(this.x, this.y, this.d);
	}
}