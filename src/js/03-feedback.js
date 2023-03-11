import throttle from 'lodash.throttle';

const TIME_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
console.log(form);

form.addEventListener('input', throttle(inputForm, 500));
form.addEventListener('submit', submitForm);

let formData = JSON.parse(localStorage.getItem(TIME_KEY)) || {};
console.log(formData);
const { email, message } = form.elements;
reloadPage();

function inputForm(event) {
  formData = { email: email.value, message: message.value };
  localStorage.setItem(TIME_KEY, JSON.stringify(formData));
}

function submitForm(event) {
  event.preventDefault();
  console.log({ email: email.value, message: message.value });
  localStorage.removeItem(TIME_KEY);
  event.currentTarget.reset();
}

function reloadPage() {
  if (formData) {
    email.value = formData.email || '';
    message.value = formData.message || '';
  }
}
