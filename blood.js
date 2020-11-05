class Blood {
    constructor() {
        this.y = 0;
        this.width = 100;
        this.height = 100;
        this.x = random(width, 0);
        this.floor = 500;
    }

    draw() {

        if (this.y >= this.floor) {
            this.y = this.floor;
            image(blood, this.x, 630, this.width, 30);

        }

    }


}