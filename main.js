function preload() {
    console.log("PRELOAD");
    bgImage = loadImage("./images/rmbackground.jpg");
    character = loadImage("./images/ricky.gif");
    badSphere = loadImage("./images/potatoe.gif");
    morty = loadImage("./images/morty.png");
    meeseek = loadImage("./images/meeseeks.gif");
    blood = loadImage("./images/blood.png");
    bottle = loadImage("./images/bottle.png");
    burp = loadSound("/sounds/burp.mp3");
}

const game = new Game();

function setup() {

    createCanvas(1200, 700);
    game.setup();
    textSize(50);
}

function draw() {
    clear();
    background("cyan");
    game.draw();



    if (keyIsDown(37)) {
        return game.player.moveLeft(2);
    }

    if (keyIsDown(39)) {
        return game.player.moveRight(2);

    }


}

function keyPressed() {
    if (keyCode === 32) {
        return game.player.jump(10);
    }
}









