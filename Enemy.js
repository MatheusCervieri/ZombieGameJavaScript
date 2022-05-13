export default class Enemy{
    constructor(x,y,damage,life, speed,size)
    {
        this.x = x;
        this.y = y;
        this.damage = damage;
        this.life = life;
        this.speed = speed;
        this.size = size;
    }
    getDamage(){
        return this.damage;
    }
    getDiv(){
        const enemydiv = document.createElement("div");
        enemydiv.style.height = this.size + "px";
        enemydiv.style.width = this.size + "px";
        enemydiv.style.top = this.y + "px";
        enemydiv.style.left = this.x + "px";
        enemydiv.className = "Enemy";
        enemydiv.textContent = this.life;
        return enemydiv;
    }
    getShouldbedestroy(){
        if(this.life <= 0)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    setEnemylife(damage){
        this.life = this.life - damage;
    }
    move(target){
        if(target.getX() > this.x){
            this.x = this.x + this.speed;
        }
        if(target.getX() < this.x){
            this.x = this.x - this.speed;
        }
        if(target.getY() < this.y){
            this.y = this.y - this.speed;
        }
        if(target.getY() > this.y){
            this.y = this.y + this.speed;
        }
    }
    colideWith(colideobject){
        if (this.x < colideobject.getX() + colideobject.getWidth() &&
            this.x + this.size > colideobject.getX() &&
            this.y < colideobject.getY() + colideobject.getHeight() &&
            this.y + this.size > colideobject.getY()) {
                console.log("COLIDIUUUUU");
             return true;
         }
    }
}