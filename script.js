const text = document.getElementById("text");

const addButton = document.getElementById("add-btn");

const clearButton = document.getElementById("clear-btn");

const uList = document.getElementById("u-list")

const arr = []

function toDoList() {
    const inputVal = text.value

    if (inputVal.length) {
        
        const listItemElement = document.createElement("li");
        listItemElement.classList.add("li-style")
        uList.appendChild(listItemElement);

        const buttonContainer = document.createElement("div")
        buttonContainer.classList.add("btn-container")
        const buttonElement = document.createElement("button");        
        const deleteButtonElement = document.createElement("button"); 

        const itemText = document.createElement("div")
        itemText.classList.add("text")        
        listItemElement.appendChild(itemText);
        itemText.innerText = inputVal;
        


        buttonElement.innerText = "hecho" 
        buttonElement.classList.add("btn-hecho")       
        deleteButtonElement.innerText = "X"
        deleteButtonElement.classList.add("btn-x")     

        
        listItemElement.appendChild(buttonContainer);
        
        buttonContainer.appendChild(buttonElement);

        buttonContainer.appendChild(deleteButtonElement);
        
        text.value = "";
        
        buttonElement.addEventListener("click", () => {
            itemText.classList.toggle("strike");
        })
        
        deleteButtonElement.addEventListener("click", () => {
            listItemElement.remove();

        })
        arr.push(listItemElement)

    }
    else {
        return false;
    }


}

addButton.addEventListener("click", function (e) {
    toDoList()
    text.focus()
})


text.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        toDoList();
    }
});

clearButton.addEventListener("click", () => {
    uList.replaceChildren()
    text.focus()
    text.value = "";
});


