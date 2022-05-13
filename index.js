import Board from "./Board.js";
import BulletController from "./BulletController.js";
import Player from "./Player.js";
import EnemyController from "./EnemyController.js";

let boardheight = 700;
let boardwidth = 700;
const mainboard = new Board(boardheight,boardwidth);
const player1 = new Player(Math.random() * boardwidth,Math.random() * boardheight,1,10,3);
const bulletcontroller = new BulletController(boardheight, boardwidth);
const enemycontroller = new EnemyController(boardheight,boardwidth);
enemycontroller.addEnemy();

const mainboarddiv = mainboard.getBoardDiv();
console.log(mainboarddiv);
document.body.appendChild(mainboarddiv);
player1.move(parseInt(mainboarddiv.style.height),parseInt(mainboarddiv.style.width), bulletcontroller);

function drawDivs()
{
   //clean everthing inside board;
    mainboarddiv.innerHTML = '';
    //draw player
    const player1div = player1.getPlayerDiv();
    //draw mainboard
    mainboarddiv.appendChild(player1div);
    //draw bullets.
    const bulletsarray = bulletcontroller.getBullets();
    bulletsarray.forEach((bullet) => {
        bullet.move();
        const bulletdiv = bullet.getDiv();
        mainboarddiv.appendChild(bulletdiv);
    })
    //draw enemies. 
    enemycontroller.removeEnemies();
    const enemiesarray = enemycontroller.getEnemies();
    enemiesarray.forEach((enemi) => {
        const enemidiv = enemi.getDiv();
        mainboarddiv.appendChild(enemidiv);
    })


    //checkcolide enimes
    enemiesarray.forEach((enemi) => {

        //enemi colide with bullets
        bulletsarray.forEach((bullet) => {
            if(enemi.colideWith(bullet) == true){
                bullet.setShouldbedestroy();
                enemi.setEnemylife(player1.getDamage());
            };
        })
        //enemi colide with players;
        if (enemi.colideWith(player1)){
           player1.receiveDamage(enemi.getDamage());
           if(player1.getLife() <= 0)
           {
               alert("GAME OVER - PRESS F5 TO REPLAY");
           }
           player1.setX(Math.random() * boardwidth - 50);
           player1.setY(Math.random() * boardheight - 50);
        }
    })

    //moveenimes
    enemiesarray.forEach((enemi) => {
        enemi.move(player1);
    })
}
function enemySpawn(){
    enemycontroller.addEnemy();
}

setInterval(drawDivs, 50);
setInterval(enemySpawn, 5000);


