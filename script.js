const text = document.getElementById("text");
const addButton = document.getElementById("add-btn");
const clearButton = document.getElementById("clear-btn");
const uList = document.getElementById("u-list");
const arr = [];

function createListItem(inputVal) {
    const listItemElement = document.createElement("li");
    listItemElement.classList.add("li-style");
    
    const itemText = createTextElement(inputVal);
    const buttonContainer = createButtonContainer();
    
    listItemElement.appendChild(itemText);
    listItemElement.appendChild(buttonContainer);
    
    return listItemElement;
}

function createTextElement(inputVal) {
    const itemText = document.createElement("div");
    itemText.classList.add("text");
    itemText.innerText = inputVal;
    return itemText;
}

function createButtonContainer() {
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("btn-container");

    const buttonElement = createButton("✔", "btn-hecho");
    const deleteButtonElement = createButton("🗑", "btn-x");

    buttonContainer.appendChild(buttonElement);
    buttonContainer.appendChild(deleteButtonElement);

    return buttonContainer;
}

function createButton(text, className) {
    const buttonElement = document.createElement("button");
    buttonElement.innerText = text;
    buttonElement.classList.add(className);
    return buttonElement;
}

function addListEvents(listItemElement, itemText) {
    const buttonElement = listItemElement.querySelector(".btn-hecho");
    const deleteButtonElement = listItemElement.querySelector(".btn-x");

    buttonElement.addEventListener("click", () => {
        itemText.classList.toggle("strike");
    });

    deleteButtonElement.addEventListener("click", () => {
        listItemElement.remove();
    });
}

function toDoList() {
    const inputVal = text.value;

    if (inputVal.length) {
        const listItemElement = createListItem(inputVal);
        const itemText = listItemElement.querySelector(".text");

        addListEvents(listItemElement, itemText);

        uList.appendChild(listItemElement);
        text.value = "";
        arr.push(listItemElement);
    } else {
        return false;
    }
}

addButton.addEventListener("click", function (e) {
    toDoList();
    text.focus();
});

text.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        toDoList();
    }
});

clearButton.addEventListener("click", () => {
    uList.replaceChildren();
    text.focus();
    text.value = "";
});