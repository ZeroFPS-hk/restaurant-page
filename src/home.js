import kitchenImage from './burning_kitchen.png';
const writeHomeContent = (parentDiv) => {
    parentDiv.replaceChildren();
    const centerImage = new Image();
    centerImage.src = kitchenImage;
    parentDiv.appendChild(centerImage);

    const div1 = document.createElement("div");
    div1.textContent = "LET HIM COOK";
    parentDiv.appendChild(div1);

    const div2 = document.createElement("div");
    div2.textContent = "So much cooking the kitchen is on fire!";
    parentDiv.appendChild(div2);
}

export default writeHomeContent;