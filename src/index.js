import './styles.css';
import writeHomeContent from './home';
import writeMenuContent from './menu';
import writeAboutContent from './about';

const content = document.querySelector("#content");
const homeButton = document.querySelector(".home");
const menuButton = document.querySelector(".menu");
const aboutButton = document.querySelector(".about");

homeButton.addEventListener("click", ()=>writeHomeContent(content));
menuButton.addEventListener("click", ()=>writeMenuContent(content));
aboutButton.addEventListener("click", ()=>writeAboutContent(content));

writeHomeContent(content);