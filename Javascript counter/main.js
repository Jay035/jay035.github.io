
let value = document.querySelector('h1');
let counter = 0;

function increaseValue(){
    counter++;
    value.innerHTML = counter;

    if(counter > 50){
        value.innerHTML = '50';
    }
};
function decreaseValue(){
    counter--;
    value.innerHTML = counter;

    if(counter < 0){
        value.innerHTML = '0';
    }
};