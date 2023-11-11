const todoList = [];

function addToDo() {
    const inputElement = document.querySelector('.js-input-name');
    
    // this function takes the data inputed in the input element with the js-input-name class

    const name = inputElement.value;

    todoList.push(name);

    console.log(todoList);

    inputElement.value='';

    // take array and display value on page - using arrays and loops

    
}