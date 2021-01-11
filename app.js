let button = document.getElementById('btn');
let textbox = document.getElementById('txtbox');
let ul = document.getElementById('todo-ul');
let todoCounterText = document.getElementById('todo-counter');

let todos = [];

createElement = () => {
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(textbox.value));
    ul.appendChild(li);

    //Add delete button for each item
    var deleteButton = document.createElement('button');
    deleteButton.appendChild(document.createTextNode('x'));
    li.appendChild(deleteButton);
    deleteButton.addEventListener('click', () => {
        li.classList.add('remove');
        if(todos.length > 0)
        todos.pop();
    });
}

todoCounter = todos => {
    if(todos.length == 0)
        todoCounterText.innerText = "Extremely close to empty";
    else if (todos.length >=2 && todos.length <=3)
        todoCounterText.innerText = "Close to empty";
    else if (todos.length >=10)
        todoCounterText.innerText = "Too items are here!";
    else
        todoCounterText.innerText = "Not Valid!";
}

addToDo = () => {
    if(textbox.value !== '') {
        createElement();
        todos.push(textbox.value.trim());
        textbox.value = '';
        todoCounter(todos);
        console.log(todos);
    }
}



