import Bullet from "./Bullet.js"

export default class BulletController{
    bullets = [];
    constructor(boardheight, boardwidth)
    {
        this.boardheight = boardheight;
        this.boardwidth = boardwidth;
    }
    shoot(x,y,speed,damage, direction)
    {
        this.bullets.push(new Bullet(x,y,damage,speed, direction));
    }
    removeBullets(){
        this.bullets.forEach((bullet) => {
            if(bullet.getX() <= 0)
            {
                this.bullets.splice(this.bullets.indexOf(bullet), 1);
            }
            if(bullet.getX() >= this.boardwidth)
            {
                this.bullets.splice(this.bullets.indexOf(bullet), 1);
            }
            if(bullet.getY() <= 0)
            {
                this.bullets.splice(this.bullets.indexOf(bullet), 1);
            }
            if(bullet.getY() >= this.boardheight)
            {
                this.bullets.splice(this.bullets.indexOf(bullet), 1);
            }
         })
    }
    getBullets(){
        this.removeBullets();
        return this.bullets;
    }
}