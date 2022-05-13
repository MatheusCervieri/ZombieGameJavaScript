export default class Bullet{
    constructor(x,y,speed,damage, direction)
    {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.damage = damage;
        this.direction = direction;
        this.destroy = "no";

        this.height = 5;
        this.width = 5;
    }
    getX(){
        return this.x;
    }
    getY(){
        return this.y; 
    }
    getWidth(){
        return this.width;
    }
    getHeight(){
        return this.height;
    }
    move(){
        
        if(this.direction == "up")
        {
            this.y = this.y - this.speed;
        }
        if(this.direction == "down")
        {
            this.y = this.y + this.speed;
        }
        if(this.direction == "right")
        {
            this.x = this.x + this.speed;
        }
        if(this.direction == "left")
        {
            this.x = this.x - this.speed;
        }
    }
    getDiv(){
        const bulletdiv = document.createElement("div");
        bulletdiv.style.height = this.height + "px";
        bulletdiv.style.width = this.width + "px";
        bulletdiv.style.top = this.y + "px";
        bulletdiv.style.left = this.x + "px";
        bulletdiv.className = "Bullet";
        return bulletdiv;
    }
}