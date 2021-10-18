const hamburger = document.querySelector('#hamburger');
const inputField = document.querySelectorAll('input');
const submitButton = document.getElementById('send');
const textArea = document.querySelectorAll('.text');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
});

for(const input of inputField){
    input.addEventListener('focus', () => {
        input.style.borderBottomColor = '#fff';
    });
    input.addEventListener('blur', () => {
        input.style.borderBottomColor = '#646468';
    });
    input.addEventListener('input', () => {
        input.style.backgroundColor = '#0a0a0a';
    });
};

let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

let firstName = id('firstName'),
    lastName = id('lastName'),
    email = id('email'),
    textarea = id('message')
    errorMsg = classes('error'),
    successIcon = classes('success-icon'),
    failureIcon = classes('failure-icon');



// clear value after submit button is clicked
    submitButton.addEventListener('click', (e) =>{
        let engine = (id, serial, message) => {
            id.value.trim() === ''
            ? (errorMsg[serial].innerHTML = message, errorMsg[serial].style.marginBottom = '0.2em', id.style.borderBottom = '2px solid red', failureIcon[serial].style.opacity = '1', successIcon[serial].style.opacity = '0', e.returnValue = false)
            : (errorMsg[serial].innerHTML = '', id.style.borderBottom = '2px solid green', failureIcon[serial].style.opacity = '0', successIcon[serial].style.opacity = '1', e.returnValue = true)
        };
        engine(firstName, 0, 'First name can\'t be blank');
        engine(lastName, 1, 'Last name can\'t be blank');
        engine(email, 2, 'Email can\'t be blank');
        engine(textarea, 3, 'message can\'t be blank');
        

        

        // text.value = '';
    });