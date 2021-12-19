
import throttle from 'lodash.throttle';

const storageKey = "feedback-form-state";
let formData = {};
const savedMessage = localStorage.getItem(storageKey);

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('.feedback-form  input'),
    textarea: document.querySelector('.feedback-form  textarea'),
};

fillFormLabels();
refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

function fillFormLabels() {
    if (savedMessage) {   
        refs.input.value = JSON.parse(savedMessage).email || "";
        refs.textarea.value = JSON.parse(savedMessage).message || "";
    }
}

function onFormSubmit(evt) {
    evt.preventDefault();
    console.log(formData);
    console.log(JSON.parse(savedMessage));
    evt.currentTarget.reset();
    localStorage.removeItem(storageKey);
};

function onFormInput(evt) {
    formData[evt.target.name] = evt.target.value;
    console.log(formData);
    localStorage.setItem(storageKey, JSON.stringify(formData));
}