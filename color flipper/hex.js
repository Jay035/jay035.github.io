const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');


function getRandomValue() {
    return hex[Math.floor(Math.random() * hex.length)]
}

console.log(getRandomValue());

function getRandom() {
    let arr = [];
    arr.push(getRandomValue());
    return arr[Math.floor(Math.random() * arr.length)]
}

btn.addEventListener('click', () => {
    let hex = '#'
    for(let i = 0;i < 6; i++){
        hex += getRandom()
    }
    document.body.style.backgroundColor = hex;
    color.textContent = hex;
})