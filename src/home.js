import { makeDiv, makeImage } from './makeElements';
import kitchenImage from './burning_kitchen.png';

const writeHomeContent = (parentDiv) => {
    parentDiv.replaceChildren();
    makeImage(parentDiv, kitchenImage, "wide");
    makeDiv(parentDiv, "LET HIM COOK");
    makeDiv(parentDiv, "So much cooking the kitchen is on fire!");
}

export default writeHomeContent;