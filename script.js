const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

// Event Listeners...
  // When todo-btn is clicked, create a new ToDo Element...
  todoButton.addEventListener('click', addTodo);
  todoList.addEventListener('click', deleteTodo);
  filterOption.addEventListener('click', filterTodo);

// Functions...
function addTodo(event) {
  // Prevent the form from submitting...
  event.preventDefault();


  // Create To DO Div...
  const todoDiv = document.createElement('div');
  // add a class of "todo"...this "todo" div will hold the todo <li> element.
  todoDiv.classList.add('todo');
  // create the todo <li>...
  const newTodo = document.createElement('li');
  // the todo-input value will be the text of the new todo we create.
  newTodo.innerText = todoInput.value;
  // Add a class of 'todo-list' to the newTodo <li>
  newTodo.classList.add('todo-item');
  // Append the newly created 'todoDiv' to the 
  // new todoDiv...
  todoDiv.appendChild(newTodo);


  // Create a Check Button...
  const completeButton = document.createElement('button');
  // Add a check mark to the innerHTML of the button...
  completeButton.innerHTML = '<i class="fas fa-check"></i>';
  completeButton.classList.add('complete-btn');
  // add the completeButton to the todoDiv...
  todoDiv.appendChild(completeButton);


  // Create a trashButton...
  const trashButton = document.createElement('button');
  // add the trash icon to the innerHTML...
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  // add a class of 'trash-btn'...
  trashButton.classList.add('trash-btn');
  // add the trashButton to the new todoDiv...
  todoDiv.appendChild(trashButton);
  // append the todoDiv to the const = todoList..
  todoList.appendChild(todoDiv);
  // Clear todoInput value after creating a todo 'li' element...
  todoInput.value = '';
}


// ---------------------------------------------------
// Delete TODO Function...
function deleteTodo(e) {
  // item will be the element that gets clicked...
  const item = e.target;
  // if the first class of the item being clicked is the trash-btn...
  if(item.classList[0] === 'trash-btn') {
    // the parentElement of the item(parent element of item is todoDiv)
    const todoRemove = item.parentElement;
    // Fall away animation...
    todoRemove.classList.add('fall');
    todoRemove.addEventListener('transitionend', function() {
      todoRemove.remove();
    });
  }
  // add '.completed' class to todoDiv when the check button is clicked...
  if(item.classList[0] === 'complete-btn') {
    const todo2 = item.parentElement;
    console.log(todo2);
    todo2.classList.toggle("completed");
  }
}
// ---------------------------------------------------
// Filter TODO Function
function filterTodo(e) {
  // Select the childNodes of the todoList in a const...
  const todos = todoList.childNodes;
  todos.forEach(function(todo) {
    console.log(todo);
    if(todo.nodeType === Node.ELEMENT_NODE) {
      switch(e.target.value) {
        case 'all':
          todo.style.display = 'flex';
          break;
        case 'completed':
          if(todo.classList.contains('completed')) {
            todo.style.display = 'flex';
          } else {
            todo.style.display = 'none';
          } break;
        case 'uncompleted':
          if(!todo.classList.contains('completed')) {
            todo.style.display = 'flex';
          } else {
            todo.style.display = 'none';
          } break;
    }}
  });
}

// Save todos in localStorage...

