const todoList = [''];

renderTodoList();

function renderTodoList() {

    let todoListHTML = '';

    for (let i = 0; i < todoList.length; i++) {
        const todo = todoList[i];
        const html = `<p>${todo}</p>`;
        todoListHTML += html;
        // the technique above is called generating HTML in JavaScript rather than typing it all in HTML 
    }

    console.log(todoListHTML);

    document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
}

function addToDo() {
    const inputElement = document.querySelector('.js-name-input');
    
    // this function takes the data inputed in the input element with the js-input-name class

    const name = inputElement.value;

    todoList.push(name);

    console.log(todoList);

    inputElement.value='';

    // take array and display value on page - using arrays and loops
    
    renderTodoList();
}
