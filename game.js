class Game {
    constructor() {
        this.player = new Character();
        this.background = new Background();
        this.obstacles = [];
        this.bonuses = [];
        this.meeseeksLeft = [];
        this.meeseeksRight = [];
        this.score = 0;
        this.lives = 5;
        this.bottles = [];
        this.power = 0;



    }

    setup() {
        this.background.setup();

    }

    draw() {
        this.background.draw();
        this.player.draw();
        image(mortyLife, 500, 25, 60, 60);
        text(this.score, 550, 65);
        image(rickLife, 600, 25, 55, 55);
        text(this.lives, 650, 65);
        image(bottle, 700, 25, 50, 50);
        text(this.power, 750, 65);

        //LIFE UP

        if (this.power === 3) {
            this.lives += 1;
            this.power -= 3;
            wudu.play();

        }

        //LIVES  --> Game Over screen
        if (this.lives === 0) {
            text("Disqualified!!!", 250, 220);
            let end = setTimeout(gameOver.play(), 2000);
            noLoop();
        }

        //WIN --> Win screen

        if (this.score >= 10) {
            text("Goooood jooob!!!", 250, 220);
            setTimeout(win.play(), 2000);
            noLoop();
        }

        // SPHERE OBSTACLE

        if (frameCount % 120 === 0) {
            this.obstacles.push(new Obstacle());
        }

        this.obstacles.forEach((obstacle, index) => {
            obstacle.draw();
            if (obstacle.x + obstacle.width <= 0) {
                this.obstacles.splice(index, 1);
            }

            if (this.colisionCheck(obstacle, this.player)) {
                console.log("OOOOOH");
                this.lives -= 1;
                console.log(this.lives);
                this.obstacles.splice(index, 1);
                goddamn.play();

            }
        });

        // MEESEEKS FROM RIGHT - OBSTACLES

        if (frameCount % 370 === 0) {
            this.meeseeksRight.push(new ObstacleXright());
        }
        this.meeseeksRight.forEach((obstacleXright, index) => {
            obstacleXright.draw();
            if (obstacleXright.x + obstacleXright.width <= 0) {
                this.meeseeksRight.splice(index, 1);
            }

            if (this.colisionCheck(obstacleXright, this.player)) {
                console.log("oh noooo");
                this.lives -= 1;
                console.log(this.lives);
                this.meeseeksRight.splice(index, 1);
                goddamn.play();



            }
        });

        // MEESEEKS FROM LEFT - OBSTACLES

        if (frameCount % 260 === 0) {
            this.meeseeksLeft.push(new ObstacleXleft());
        }
        this.meeseeksLeft.forEach((obstacleXleft, index) => {
            obstacleXleft.draw();
            if (obstacleXleft.x + obstacleXleft.width <= 0) {
                this.meeseeksLeft.splice(index, 1);
            }

            if (this.colisionCheck(obstacleXleft, this.player)) {

                console.log("oh noooo");
                this.lives -= 1;
                console.log(this.lives);
                this.meeseeksLeft.splice(index, 1);
                goddamn.play();


            }
        });

        // MORTY BONUS

        if (frameCount % 60 === 0) {
            this.bonuses.push(new Bonus());
        }

        this.bonuses.forEach((bonus, index) => {
            bonus.draw();
            if (bonus.x + bonus.width <= 0) {
                this.bonuses.splice(index, 1);
            }


            if (this.colisionCheck(bonus, this.player)) {
                console.log("YEAHH");
                this.score += 1;
                console.log(this.score);
                this.bonuses.splice(index, 1);
                owe.play();

            }
        });


        // BOTTLE BONUS

        if (frameCount % 200 === 0) {
            this.bottles.push(new Bottle());
        }


        this.bottles.forEach((bottle, index) => {
            bottle.draw();
            if (bottle.x + bottle.width <= 0) {
                this.bottles.splice(index, 1);
            }

            if (this.colisionCheck(bottle, this.player)) {
                console.log("that's goood");
                this.power += 1;
                console.log(this.score);
                this.bottles.splice(index, 1);
                burp.play();
            }

        });



    }



    colisionCheck(obstacle, player) {

        //   player.left + player.width (players.rightSide)
        //  if player's right side is to the left of the obstacle's left
        if (player.x + player.width < obstacle.x) {
            return false;
        }

        //  obstacle's left and obstacle width (obstacle.rightSide)
        // if obstacle's right side is to the left of player's left
        if (obstacle.x + obstacle.width < player.x) {
            return false;
        }

        // player.topSide > obstacle.TopSide + obstacle.height (obstacle.Bottom)
        // player top side is below obstacle's bottom side
        if (player.y > obstacle.y + obstacle.height) {
            return false;
        }

        //  obstacle.topSide > player.topSide + player.height (player.bottomSide)
        //  obstacle top side is below the player's bottom side
        if (obstacle.y > player.y + player.height) {
            return false;
        }
        return true;
    }

    //    colisionCheck(obstacleXleft, player) {
    //        //   player.left + player.width (players.rightSide)
    //        //  if player's right side is to the left of the obstacle's left
    //        if (player.x + player.width < obstacleXleft.x) {
    //            return false;
    //        }//

    //        //  obstacle's left and obstacle width (obstacle.rightSide)
    //        // if obstacle's right side is to the left of player's left
    //        if (obstacleXleft.x + obstacleXleft.width < player.x) {
    //            return false;
    //        }//

    //        // player.topSide > obstacle.TopSide + obstacle.height (obstacle.Bottom)
    //        // player top side is below obstacle's bottom side
    //        if (player.y > obstacleXleft.y + obstacleXleft.height) {
    //            return false;
    //        }//

    //        //  obstacle.topSide > player.topSide + player.height (player.bottomSide)
    //        //  obstacle top side is below the player's bottom side
    //        if (obstacleXleft.y > player.y + player.height) {
    //            return false;
    //        }
    //        return true;
    //    }//

    //    colisionCheck(obstacleXright, player) {
    //        //   player.left + player.width (players.rightSide)
    //        //  if player's right side is to the left of the obstacle's left
    //        if (player.x + player.width < obstacleXright.x) {
    //            return false;
    //        }//

    //        //  obstacle's left and obstacle width (obstacle.rightSide)
    //        // if obstacle's right side is to the left of player's left
    //        if (obstacleXright.x + obstacleXright.width < player.x) {
    //            return false;
    //        }//

    //        // player.topSide > obstacle.TopSide + obstacle.height (obstacle.Bottom)
    //        // player top side is below obstacle's bottom side
    //        if (player.y > obstacleXright.y + obstacleXright.height) {
    //            return false;
    //        }//

    //        //  obstacle.topSide > player.topSide + player.height (player.bottomSide)
    //        //  obstacle top side is below the player's bottom side
    //        if (obstacleXright.y > player.y + player.height) {
    //            return false;
    //        }
    //        return true;
    //    }//

    //    colisionCheck(bonus, player) {//
    //

    //        //   player.left + player.width (players.rightSide)
    //        //  if player's right side is to the left of the obstacle's left
    //        if (player.x + player.width < bonus.x) {
    //            return false;
    //        }//

    //        //  obstacle's left and obstacle width (obstacle.rightSide)
    //        // if obstacle's right side is to the left of player's left
    //        if (bonus.x + bonus.width < player.x) {
    //            return false;
    //        }//

    //        // player.topSide > obstacle.TopSide + obstacle.height (obstacle.Bottom)
    //        // player top side is below obstacle's bottom side
    //        if (player.y > bonus.y + bonus.height) {
    //            return false;
    //        }//

    //        //  obstacle.topSide > player.topSide + player.height (player.bottomSide)
    //        //  obstacle top side is below the player's bottom side
    //        if (bonus.y > player.y + player.height) {
    //            return false;
    //        }
    //        return true;
    //    }





}
