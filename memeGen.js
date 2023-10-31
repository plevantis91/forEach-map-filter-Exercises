document.addEventListener("DOMContentLoaded",()=>{
const memeForm = document.querySelector("#meme-form");
const urlImg = document.querySelector(".meme-img");
const topTextInput = document.querySelector(".meme-top");
const bottomTextInput = document.querySelector(".meme-bottom")
const memeUL = document.querySelector(".meme-list")



memeForm.addEventListener("submit", (e)=>{
    e.preventDefault();
  
    const memeLi = document.createElement("li");
    memeLi.classList.add("new-meme");

    src = urlImg.value
    img = document.createElement("img");
    img.src = src

    const topText = document.createElement("div");
    topText.classList.add("top", "text");
    topText.innerText = topTextInput.value;

    const bottomText = document.createElement("div");
    bottomText.classList.add("bottom", "text");
    bottomText.innerText = bottomTextInput.value;

    const removeImg = document.createElement("button");
    removeImg.classList.add("remove");
    removeImg.innerHTML = "X";

    
    memeUL.append(memeLi);
    memeLi.append(img);
    memeLi.append(topText);
    memeLi.append(bottomText);
    memeLi.append(removeImg);

    memeForm.reset();
   
});


memeUL.addEventListener("click",(e)=>{
    if(e.target.tagName === "BUTTON"){
        e.target.parentElement.remove();
    }
});

});


