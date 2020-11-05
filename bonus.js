class Bonus {
    constructor() {
        this.y = 0;
        this.width = 100;
        this.height = 100;
        this.x = random(width, 0);
        this.floor = 500;
        this.score = game.score;
    }

    draw() {
        if (this.y < this.floor) {
            image(morty, this.x, this.y, this.width, this.height);
            this.y += 10;

        }


    }


}