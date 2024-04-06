const writeAboutContent = (parentDiv) => {
    parentDiv.replaceChildren();
    const div1 = document.createElement("div");
    div1.textContent = "the super cookery kitchen";
    parentDiv.appendChild(div1);

    const div2 = document.createElement("div");
    div2.textContent = "join us and cook";
    parentDiv.appendChild(div2);
}

export default writeAboutContent;