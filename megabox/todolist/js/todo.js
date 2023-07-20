const toDoform = document.querySelector('.js_todoForm');
const toDoInput = toDoform.querySelector('input');
const toDoList = document.querySelector('.js_toDoList');
const TODOS_LS = 'toDos';
let toDos = [];

//delete버튼 클릭
function deleteTodo(event) {
  const li = event.target.parentNode.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToLocal();
}

function paintToDo(text) {
  const newId = toDos.length + 1;
  const li = document.createElement('li');
  li.id = newId;

  const delBtn = document.createElement('button');
  delBtn.innerHTML = '<i class="far fa-minus-square"></i>';
  const span = document.createElement('span');
  span.innerText = `✔ ${text}`;

  li.appendChild(span);
  li.appendChild(delBtn);
  toDoList.appendChild(li);

  const todoObj = {
    text: text,
    id: newId,
  };
  toDos.push(todoObj);

  delBtn.addEventListener('click', deleteTodo);
}

function loadToDos() {
  const loadedtoDos = localStorage.getItem(TODOS_LS);
  if (loadedtoDos !== null) {
    const parsedTodo = JSON.parse(loadedtoDos); //문자열 -> 배열
    parsedTodo.forEach(function (toDo) {
      paintToDo(toDo.text);
    });
  }
}

function saveToLocal() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function handleSubmit(event) {
  event.preventDefault();
  const TodoValue = toDoInput.value;
  paintToDo(TodoValue);
  toDoInput.value = '';
  saveToLocal();
}
function init() {
  toDoform.addEventListener('submit', handleSubmit);
  loadToDos();
}

init();
