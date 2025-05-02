import elliot from "./imgs/elliot.jpg";
import neo from "./imgs/neo.jpg";
import mark from "./imgs/mark.jpeg";

export function pageLoad() {
    const content = document.querySelector("#content");
    const title = document.createElement("h2");
    title.id = "title";
    title.textContent = "Every byte counts!";
    content.appendChild(title);
    const grid = document.createElement("div");
    const praise1 = document.createElement("div");
    const pic = document.createElement("img");
    const praiseText = document.createElement("p");
    praise1.appendChild(pic);
    praise1.appendChild(praiseText);
    const praise2 = praise1.cloneNode(true);
    const praise3 = praise1.cloneNode(true);
    praise1.children[0].src = elliot;
    praise2.children[0].src = neo;
    praise3.children[0].src = mark;
    praise1.children[1].textContent = "Love this place. Need to compile more of that food into my mouth.";
    praise2.children[1].textContent = "This was totally worth breaking out of the matrix for or something.";
    praise3.children[1].textContent = "Went here and stole fries from my friends. 10/10 would go again.";
    grid.appendChild(praise1);
    grid.appendChild(praise2);
    grid.appendChild(praise3);
    content.appendChild(grid);
}