
particles = [];
var n=100;

function setup() {
    createCanvas(400, 400);
	
}

function draw() {
    background(255);
    fill(0,0,25);
    rect(205, 400, 30, -100);
//for (let i = 0; i < 5; i++) {
        let p = new Particle();
        particles.push(p);
  //  }
	
	if(particles.length>n){
		particles.splice(n,1);
	}
    
    for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        particles[i].show();
       if (particles[i].finished()) {
            //remove this particle
       particles.splice(i, 1);
        }
    }
}

class Particle {

    constructor() {
        this.x = 210;
        this.y = 290;
        this.r = 0;
        this.vx = random(-1, 1);
        this.vy = random(-2, -8);
		    
        this.vr = random(-0.05,0.05);
        this.alpha = 255;
    }

    finished() {
        return this.alpha < 0;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= 5;
			  //translate=(this.x,this.y)
        this.r += this.vr;
    }

    show() {
        noStroke();
        fill(0, this.alpha);
        angleMode(DEGREES);
        rotate(this.r);
        rect(this.x, this.y, 20, 20);
        
    }

}