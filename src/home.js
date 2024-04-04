const writeHomeContent = (parentDiv) => {
    parentDiv.replaceChildren();
    const div1 = document.createElement("div");
    div1.textContent = "LET HIM COOK";
    parentDiv.appendChild(div1);

    const div2 = document.createElement("div");
    div2.textContent = "So much cooking the kitchen is on fire!";
    parentDiv.appendChild(div2);
}

export default writeHomeContent;