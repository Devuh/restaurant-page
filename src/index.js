import "./styles.css";
import { pageLoad } from "./pageload.js";
import { menu } from "./menu.js";
import { about } from "./about.js";

const nav = document.querySelector("nav");

nav.addEventListener("click", (event) => {
    if(event.target.textContent == "./home") {
        pageLoad();
    }

    if(event.target.textContent == "./menu") {
        menu();
    }

    if(event.target.textContent == "./about") {
        about();
    }
});

pageLoad();