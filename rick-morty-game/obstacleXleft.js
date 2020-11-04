class ObstacleXleft {
    constructor() {
        this.x = 0;
        this.width = 90;
        this.height = 120;
        this.y = 0;
        this.floor = 500;
    }

    draw() {
        image(meeseek, this.x, this.y, this.width, this.height);
        this.x += 5;
        this.y = this.floor;
    }
}