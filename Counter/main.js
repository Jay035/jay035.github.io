const decreaseValue = document.getElementById('decrease')
const resetValue = document.getElementById('reset')
const increaseValue = document.getElementById('increase')
const value = document.querySelector('h1')
const btns = document.querySelectorAll('button');
let counter = 0;

decreaseValue.addEventListener('click', () => {
    counter--;
    value.innerHTML = counter;
});

resetValue.addEventListener('click', () => {
    counter = 0;
    value.innerHTML = counter;
});

increaseValue.addEventListener('click', () => {
    counter++;
    value.innerHTML = counter;
})

// btns.forEach(button => 
//     button.addEventListener('mouseover', () => {
//     button.style.backgroundColor = '#131f2b';
//     button.style.color = '#fff';
//     }))

