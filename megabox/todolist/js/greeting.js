const form = document.querySelector('.js_form');
const input = form.querySelector('.name_input');
const greeting = document.querySelector('.js_greetings');
const USER_LS = 'currentUser';
const SHOWING_CN = 'showing';

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener('submit', handleSubmit);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveNameToLocal(currentValue);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello👋 ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function saveNameToLocal(text) {
  localStorage.setItem(USER_LS, text);
}

function init() {
  loadName();
}
init();
