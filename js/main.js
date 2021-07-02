import Game from "./Game.js"
import GameView from"./GameView.js"
let game=new Game();
let gameView=new GameView();


let tiles=document.querySelector(".board-tile")
tiles.forEach((tile)=>{
   tile.addEventListener("click",()=>{
       console.log(tile.dataset.index);
   })
})


function onTileClick(i){

}