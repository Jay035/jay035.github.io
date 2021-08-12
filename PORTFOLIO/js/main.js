const hamburger = document.querySelector('#hamburger');
const inputField = document.querySelectorAll('input');
const submitButton = document.getElementById('send');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
});

for(const input of inputField){
    input.addEventListener('click', () => {
        input.style.borderBottomColor = '#fff';
    });
};

// console.log(nameTitle.length)