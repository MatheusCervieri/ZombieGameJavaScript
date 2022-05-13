export default class Player{
    constructor(x,y,damage,speed)
    {
        this.x = x;
        this.y = y;
        this.damage = damage;
        this.speed = speed;
        this.height = 25;
        this.width = 25; 
        this.direction = "down"
    }
    getPlayerDiv(){
        const playerddiv = document.createElement("div");
        playerddiv.style.height = this.height + "px";
        playerddiv.style.width = this.width + "px";
        playerddiv.style.top = this.y + "px";
        playerddiv.style.left = this.x + "px";
        playerddiv.className = "Player";
        return playerddiv;
    }
    getDirection(){
        return this.direction;
    }
    move(boardheight, boardwidth, bulletcontroller){
        document.body.addEventListener("keydown", (key) =>{
            if(key.key == "r")
            {
                bulletcontroller.shoot(this.x, this.y, 1000, 12, this.direction);
            }
            if(key.key == "w")
            {
                this.direction = "up";
                if(this.y <= 0)
                {

                }
                else{
                this.y = this.y - this.speed;
                }
            }
            if(key.key == "s")
            {
                this.direction = "down";
                if(this.y >= boardheight - this.height - 5)
                {

                }
                else{
                this.y = this.y + this.speed;
                }
            }
            if(key.key == "d")
            {
                this.direction = "right";
                if(this.x >= boardwidth - this.width - 5)
                {

                }
                else
                {
                this.x = this.x + this.speed;
                }
            }
            if(key.key == "a")
            {
                this.direction = "left";
                if(this.x <= 0)
                {

                }
                else{
                this.x = this.x - this.speed;
                }
            }
        } )
    }
}