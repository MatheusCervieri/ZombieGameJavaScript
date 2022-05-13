import Enemy from "./Enemy.js";
export default class EnemyController
{
    enemies = [];
    constructor(boardheight, boardwidth)
    {
        this.boardheight = boardheight;
        this.boardwidth = boardwidth;
        this.damege = 1;
        this.life = 10;
        this.speed = 7;
        this.size = 25;
    }
    addEnemy()
    {
        this.enemies.push(new Enemy(Math.random() * this.boardwidth, Math.random() * this.boardheight, this.damege, this.life, this.speed, this.size
            ));
    }
    getEnemies(){
        return this.enemies;
    }

}