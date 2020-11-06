function preload() {
    console.log("PRELOAD");
    bgImage = loadImage("./Images/rmbackground.jpg");
    character = loadImage("./Images/ricky.gif");
    badSphere = loadImage("./Images/potatoe.gif");
    morty = loadImage("./Images/morty.png");
    meeseek = loadImage("./Images/meeseeks.gif");
    blood = loadImage("./Images/blood.png");
    bottle = loadImage("./Images/bottle.png");
    rickLife = loadImage("./Images/rick_life.png");
    mortyLife = loadImage("./Images/morty.gif");
    logo = loadImage("./Images/logo.png");
    burp = loadSound("./sounds/burp.mp3");
    owe = loadSound("./sounds/oooweee.mp3");
    wudu = loadSound("./sounds/wudu.mp3");
    goddamn = loadSound("./sounds/hurt.mp3");
    gameOver = loadSound("./sounds/disqualified.mp3");
    win = loadSound("./sounds/good_job.mp3");

}

const game = new Game();


function setup() {
    mode = 0;
    home = loadImage("./images/rickmorty-home.jpeg");
    createCanvas(800, 450);
    game.setup();
    textSize(45);

    //let button = createButton('Restart');
    //    button.mousePressed(resetGame);

}
//function resetGame() {
//    mode = 0;
//}

function draw() {
    clear();


    if (mode === 0) {
        background(home);
        if (frameCount % 60 < 30) {
            text('Press Enter to start', 200, 250);
            textSize(40);
            fill(250, 0, 0);
            stroke(10);
        }

    }
    if (mode === 1) {

        game.draw();



        if (keyIsDown(37)) {
            return game.player.moveLeft(2);
        }

        if (keyIsDown(39)) {
            return game.player.moveRight(2);

        }

        if (keyIsDown(38)) {
            return game.player.jump(2);

        }
    }


}

function keyPressed() {
    if (keyCode === 32) {
        return game.player.jump(10);
    }
}

function keyPressed() {
    if (keyCode === ENTER) {
        mode = 1;
    }
}








