class ObstacleXright {
    constructor() {
        this.x = width;
        this.width = 65;
        this.height = 90;
        this.y = 0;
        this.floor = 300;
    }

    draw() {
        image(meeseek, this.x, this.y, this.width, this.height);
        this.x -= 5;
        this.y = this.floor;
    }
}