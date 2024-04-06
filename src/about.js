import { makeDiv } from "./makeElements";

const writeAboutContent = (parentDiv) => {
    parentDiv.replaceChildren();
    makeDiv(parentDiv, "The super cookery kitchen");
    makeDiv(parentDiv, "Join us and we let you cook!");
    makeDiv(parentDiv, "~");
    makeDiv(parentDiv, "Not all people are born chefs, but all people are born arsonists");
}

export default writeAboutContent;