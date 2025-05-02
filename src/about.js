export function about() {
    const content = document.querySelector("#content");
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
    const title = document.createElement("h2");
    title.textContent = "Contact Us!";
    content.appendChild(title);
    const labelName = document.createElement("label");
    labelName.textContent = "Name: ";
    const inputName = document.createElement("input");
    content.appendChild(labelName);
    content.appendChild(document.createElement("br"));
    content.appendChild(inputName);
    const labelMessage = document.createElement("label");
    labelMessage.textContent = "Message: ";
    const inputMessage = document.createElement("textarea");
    content.appendChild(document.createElement("br"));
    content.appendChild(labelMessage);
    content.appendChild(document.createElement("br"));
    content.appendChild(inputMessage);
    const submit = document.createElement("button");
    submit.textContent = "Send";
    content.appendChild(document.createElement("br"));
    submit.id = "submit";
    content.appendChild(submit);
}