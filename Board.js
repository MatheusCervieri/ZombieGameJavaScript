export default class Board{
    constructor(height, width)
    {
        this.height = height;
        this.width = width;
    }
    getBoardDiv()
    {
        const boarddiv = document.createElement("div");
        boarddiv.style.height = this.height + "px";
        boarddiv.style.width = this.width + "px";
        boarddiv.className = "Board";
        return boarddiv;
    }
}