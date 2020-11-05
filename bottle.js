class Bottle {
    constructor() {
        this.y = 0;
        this.width = 50;
        this.height = 50;
        this.x = random(width, 0);
    }

    draw() {
        image(bottle, this.x, this.y, this.width, this.height);
        this.y += 8;

    }
}