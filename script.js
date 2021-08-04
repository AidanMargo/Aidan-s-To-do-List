//Selectors
const todoInput = document.querySelector('.todo-input');
const submitButton = document.querySelector('.submit-button');
const todoList = document.querySelector('.todo-list');

//Event Listeners
    submitButton.addEventListener('click', addTodo);
    todoList.addEventListener('click', deleteCheck);
//Functions

function addTodo(e) {
    e.preventDefault();
    //Create each todoDiv
    const todoDiv= document.createElement('div');
    todoDiv.classList.add('todo');
    //Create LI Element
    const todoItem = document.createElement('li');
    todoItem.innerText= todoInput.value;
    todoItem.classList.add('todo-item');
    todoDiv.appendChild(todoItem);
    //Create Check button
     const checkButton = document.createElement('button');
     checkButton.classList.add('check-button');
     checkButton.innerHTML = '<i class="fas fa-check"></i>';
     todoDiv.appendChild(checkButton);
    //Create Delete button
    const trashButton = document.createElement('button');
    trashButton.classList.add('trash-button');
    trashButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
    todoDiv.appendChild(trashButton);
    //Append to list
    todoList.appendChild(todoDiv);
    //Clear Input Value
    todoInput.value= '';
}

function deleteCheck(e) {
    const selection = e.target;
    if(selection.classList[0] === 'trash-button') {
        const todo = selection.parentElement;
        todo.classList.add('delete-animation');
        todo.addEventListener('transitionend' , function (){
            todo.remove();
        })
        
    }

    if(selection.classList[0] === 'check-button') {
        const todo = selection.parentElement;
        todo.classList.toggle('complete');
    }
}