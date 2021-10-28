import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};
refs.form.addEventListener('submit', onFormSubmit);
refs.input.addEventListener('input', throttle(onInputTextarea, 500));
refs.textarea.addEventListener('input', throttle(onInputTextarea, 500));
const STORAGE_INPUTS_KEY = 'feedback-form-state';
const formData = {};
populateTextarea();
function onInputTextarea(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_INPUTS_KEY, JSON.stringify(formData));
  console.log(formData);
}
function populateTextarea() {
  const saveMessage = JSON.parse(localStorage.getItem(STORAGE_INPUTS_KEY));
  if (saveMessage) {
    console.log(saveMessage);
    refs.input.value = saveMessage.email;
    refs.textarea.value = saveMessage.message;
  }
}
function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_INPUTS_KEY);
}

// const refs = {
//   form: document.querySelector('.feedback-form'),
//   textarea: document.querySelector('.feedback-form textarea'),
//   input: document.querySelector('.feedback-form input'),
// };

// refs.form.addEventListener('submit', onFormSubmit);
// refs.textarea.addEventListener('input', throttle(onTextAreaInput, 500));
// refs.input.addEventListener('input', throttle(onTextAreaInput, 500));

// const STORAGE_INPUTS_KEY = 'feedback-form-state';

// messageOutput();

// const formData = {};

// function onFormSubmit(event) {
//   event.preventDefault();
//   event.target.reset();
//   localStorage.removeItem(STORAGE_INPUTS_KEY);
// }

// function onTextAreaInput(event) {
//   formData[event.target.name] = event.target.value;
//   localStorage.setItem(STORAGE_INPUTS_KEY, JSON.stringify(formData));
//   console.log(formData);
// }

// function messageOutput() {
//   const saveMessage = JSON.parse(localStorage.getItem(STORAGE_INPUTS_KEY));
//   if (saveMessage) {
//     console.log(saveMessage);
//     refs.input.value = saveMessage.email;
//     refs.textarea.value = saveMessage.message;
//   }
// }
