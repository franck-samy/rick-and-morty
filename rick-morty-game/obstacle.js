class Obstacle {
    constructor() {
        this.y = 0;
        this.width = 150;
        this.height = 170;
        this.x = random(width, 0);
    }

    draw() {
        image(badSphere, this.x, this.y, this.width, this.height);
        this.y += 3;
    }
}