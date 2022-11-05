const character = document.querySelector(".character");
const cactus = document.querySelector(".cactus");
const over = document.querySelector(".game-over");
const plan = document.querySelector(".plan");
const counter = document.querySelector(".counter");
let counterId = 0;

function jump(){
    character.classList.add("animation-character")
    setTimeout(() => {
        character.classList.remove("animation-character")
    }, 500)
};

function obstacle(){
    cactus.classList.add("animation-cactus")
}; 


setInterval(() => {
    const cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"))
    const characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"))
    if(cactusLeft<188){
        over.classList.add("game-over")
        over.innerHTML = "Game Over";
        plan.appendChild(over)
        block.classList.remove("animation-cactus")
        counterId = -1;
    }
    if(blockLeft<120){
        counterId++
        counter.innerHTML = counterId;
    }

},10)




document.addEventListener("keydown", (e) => {
    if((e.keyCode === 32)||(e.keyCode === 38)){
        over.innerHTML = " "
        jump()
        obstacle()
    }
});
   
 