const inputField = document.querySelectorAll('input');
const submitButton = document.getElementById('send');

for(const input of inputField){
    input.addEventListener('click', () => {
        input.style.borderBottomColor = '#fff';
    })
}