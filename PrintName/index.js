let title = document.querySelector('h1');

let nameString = (name) => {
    return "Hi." + ' ' + 'My name is' + ' ' + name;
}
let name = nameString("Chibuike Ukandu");

title.textContent = name;
