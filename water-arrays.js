var drops = [];

function setup() {
    createCanvas(400, 400);

    colorMode(HSB);

    for (var i = 0; i < 6; i++) {
        drops[i] = {
            x: random(230,250),
            y: 200,
            display: function() {
                stroke(255);

                ellipse(this.x, this.y, random(6,10));
            },
            move: function() {
              this.x = this.x + random(-1,2);  
							this.y = this.y + random(1,9);
							
                if (this.y > height * 2) {
									  this.x = random(230,250);					
                    this.y = 220;
                }
            }

        }
    }
}

function draw() {
    background(0);
    noStroke();
    fill(250);
    rect(0, 200, 230, 20);

    for (var i = 0; i < drops.length; i++) {
        drops[i].move();
        drops[i].display();
    }
   
}