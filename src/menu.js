const writeMenuContent = (parentDiv) => {
    parentDiv.replaceChildren();
    const div1 = document.createElement("div");
    div1.textContent = "menu menu";
    parentDiv.appendChild(div1);

    const div2 = document.createElement("div");
    div2.textContent = "mama mia pizza";
    parentDiv.appendChild(div2);
}

export default writeMenuContent;