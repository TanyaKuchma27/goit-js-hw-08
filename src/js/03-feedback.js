import throttle from 'lodash.throttle';

const storageKey = "feedback-form-state";
let formData = {};
const savedMessage = JSON.parse(localStorage.getItem(storageKey));

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
        refs.input.value = savedMessage.email || "";
        refs.textarea.value = savedMessage.message || "";
        formData.email = refs.input.value;
        formData.message = refs.textarea.value;
    }
};

function onFormSubmit(evt) {
    evt.preventDefault();
    console.log(formData);
    evt.currentTarget.reset();
    localStorage.removeItem(storageKey);
    formData = {};
};

function onFormInput(evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(storageKey, JSON.stringify(formData));
}
