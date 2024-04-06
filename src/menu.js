import {makeDiv, makeImage} from "./makeElements";
import pastaImage from "./burning_pasta.png";

const writeMenuContent = (parentDiv) => {
    parentDiv.replaceChildren();
    makeImage(parentDiv, pastaImage, "small");
    makeDiv(parentDiv, "All our dishes roasted over good fire!");
    makeDiv(parentDiv, "- Oven cooked sashimi -");
    makeDiv(parentDiv, "- Burning pineapple pizza (authentic hawaiian volcano heat) -");
    makeDiv(parentDiv, "- Roasted ice cream sundae -");
    makeDiv(parentDiv, "- Refridgerator curry -");
}

export default writeMenuContent;