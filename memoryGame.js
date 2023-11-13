const tilesContainer = document.querySelector(".tiles")
const colors = ["blue", "blueviolet", "green", "lime", "fuchsia", "gold", "darkmagenta", "crimson"]
const colorsList = [...colors,...colors];
const tilesCount = colorsList.length;

//Game state
let revealedCount = 0;
let activeTile = null;
let awaitingEndofMove = false;

function buildTile(color){
    const element = document.createElement("div");
    element.classList.add('tile');
    element.setAttribute("data-color", color);
    element.setAttribute("data-revealed", "false");

    element.addEventListener("click",()=>{
        const revealed = element.getAttribute("data-revealed")
        if(
            awaitingEndofMove
            || revealed === "true"
            || element === activeTile
            ){
            return;
        }
        element.style.backgroundColor = color;

        if(!activeTile){
          activeTile = element;  
            
            return;
        }

        const colorToMatch = activeTile.getAttribute("data-color");

        if(colorToMatch === color){
            element.setAttribute("data-revealed", "true")
            activeTile.setAttribute("data-revealed", "true")

            awaitingEndofMove = false;
            activeTile = null;
            revealedCount += 2

            if(revealedCount === tilesCount){
                alert("You win! Refresh to play again.");
            }
            return;
            
        }
       awaitingEndofMove = true;

       setTimeout(() => {
        element.style.backgroundColor = null;
        activeTile.style.backgroundColor = null;
        awaitingEndofMove = false;
        activeTile = null;
       }, 800);
    });
    return element;
}

//Build up tiles
for (let i = 0; i < tilesCount; i++){
const randomIdx = Math.floor(Math.random() * colorsList.length);
const color = colorsList[randomIdx]
const tile = buildTile(color)

colorsList.splice(randomIdx, 1);
tilesContainer.appendChild(tile);
}


function randomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`
  }
  
  // This changes the entire h1 all at once:
  // const h1 = document.querySelector('h1');
  // setInterval(function () {
  //   h1.style.color = randomRGB();
  // }, 500);
  
  
  // To change each letter independently
  const letters = document.querySelectorAll('.letter');
  const intervalId = setInterval(function () {
    for (let letter of letters) {
      letter.style.color = randomRGB();
    }
  }, 1000);
