import fries from "./imgs/fries.jpg";
import popcorn from "./imgs/popcorn.jpg";
import fishAndChips from "./imgs/fish&chips.jpg";

import ramen from "./imgs/ramen.jpg";
import spaghetti from "./imgs/spaghetti.jpg";
import hamburger from "./imgs/hamburger.jpg";

import pizookie from "./imgs/pizookie.jpg";
import blueberryPie from "./imgs/blueberrypie.jpg";
import coffee from "./imgs/coffee.jpg";

export function menu() {
    const content = document.querySelector("#content");
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
    const appetizersTitle = document.createElement("h2");
    appetizersTitle.id = "title";
    appetizersTitle.textContent = "Boot up your \"app\"-etite";
    content.appendChild(appetizersTitle);
    const appetizers = document.createElement("div");
    const appetizer1 = document.createElement("div");
    const pic = document.createElement("img");
    const appetizerText1 = document.createElement("h3");
    appetizer1.appendChild(pic);
    appetizer1.appendChild(appetizerText1);
    const appetizer2 = appetizer1.cloneNode(true);
    const appetizer3 = appetizer1.cloneNode(true);
    appetizer1.children[0].src = fries;
    appetizer2.children[0].src = popcorn;
    appetizer3.children[0].src = fishAndChips;
    appetizer1.children[1].textContent = "Fried Circuits";
    appetizer2.children[1].textContent = "Kernel Poppers";
    appetizer3.children[1].textContent = "Phish and Chips";
    appetizers.appendChild(appetizer1);
    appetizers.appendChild(appetizer2);
    appetizers.appendChild(appetizer3);
    content.appendChild(appetizers);
    const entreesTitle = appetizersTitle.cloneNode(true);
    entreesTitle.textContent = "Mainframe Mains";
    content.appendChild(entreesTitle);
    const entrees = appetizers.cloneNode(true);
    entrees.children[0].children[0].src = ramen;
    entrees.children[0].children[1].textContent = "RAMen";
    entrees.children[1].children[0].src = spaghetti;
    entrees.children[1].children[1].textContent = "Spaghetti Code";
    entrees.children[2].children[0].src = hamburger;
    entrees.children[2].children[1].textContent = "Ctrl+Alt+Meat";
    content.appendChild(entrees);
    const dessertTitle = appetizersTitle.cloneNode(true);
    dessertTitle.textContent = "404 Hunger Not Found";
    content.appendChild(dessertTitle);
    const desserts = appetizers.cloneNode(true);
    desserts.children[0].children[0].src = pizookie;
    desserts.children[0].children[1].textContent = "Cookie Overflow";
    desserts.children[1].children[0].src = blueberryPie;
    desserts.children[1].children[1].textContent = "Blue Screen Berry Pie";
    desserts.children[2].children[0].src = coffee;
    desserts.children[2].children[1].textContent = "Java Chip Stack";
    content.appendChild(desserts);
}