import Board from "./Board.js";
import BulletController from "./BulletController.js";
import Player from "./Player.js";
import EnemyController from "./EnemyController.js";

let boardheight = 700;
let boardwidth = 700;
const mainboard = new Board(boardheight,boardwidth);
const player1 = new Player(0,0,1,10);
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
    const enemiesarray = enemycontroller.getEnemies();
    enemiesarray.forEach((enemi) => {
        const enemidiv = enemi.getDiv();
        mainboarddiv.appendChild(enemidiv);
    })


    //checkcolide enimes
    enemiesarray.forEach((enemi) => {
        bulletsarray.forEach((bullet) => {
            enemi.colideWith(bullet);
        })
       
    })
}
function enemySpawn(){
    enemycontroller.addEnemy();
}

setInterval(drawDivs, 50);
setInterval(enemySpawn, 5000);


