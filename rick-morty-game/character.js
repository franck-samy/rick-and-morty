class Character {
    constructor(x, y) {
        this.x = 600;
        this.y = 0;

        this.width = 150;
        this.height = 150;
        this.gravity = 0.3;

        this.velocity = 0;
        this.floor = 450;

        this.jumpCounts = 0;


    }



    jump() {
        //  if (this.y <= 0 || this.jumpCounts === 2) { // removed the this.y becasue if the user wants to jump twice that high it should be allowed. just wont have to power to move away from an obstacle
        //   if the character has already jumped twice, we stop the player from jumping
        if (this.jumpCounts === 2) {
            return;
        }

        this.jumpCounts++;
        this.y -= 7;
        this.velocity -= 6;
    }

    moveLeft() {
        if (this.x <= 0) {
            return;
        }
        this.x -= 7;
    }

    moveRight() {
        if (this.x >= WIDTH - this.width) {
            return;
        }
        this.x += 7;
    }


    draw() {
        this.velocity += this.gravity;
        this.y += this.velocity;

        //  WE ARE ON THE FLOOR
        if (this.y > this.floor) {
            this.y = this.floor;
            this.jumpCounts = 0;
            this.velocity = 0;
        }
        image(character, this.x, this.y, this.width, this.height);
    }


}