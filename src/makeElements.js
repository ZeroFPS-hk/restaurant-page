function makeDiv(parentDiv, content){
    const div = document.createElement("div");
    div.textContent = content;
    parentDiv.appendChild(div);
}

function makeImage(parentDiv, imageSource, imageClass=""){
    const image = new Image();
    image.src = imageSource;
    if(imageClass) image.classList.add(imageClass);
    parentDiv.appendChild(image);
}

export {makeDiv, makeImage};