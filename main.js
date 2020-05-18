const heading = document.querySelector(".main-header__my-name--js");
heading.innerHTML = 'Konrad Podolak Frontend Developer';

const nala = document.querySelector(".about-nala--js");
nala.innerHTML = 'Nala i my cat and she is so cute';

function calculate(myNumber) {
    return myNumber*7;
}

const myResult = calculate(9);
console.log(myResult);

const greet = (firtsName, age) => {
    console.log(`Hej Ty nazywam się ${firtsName} i mam ${age} lat :D.`);
}
greet('Konrad', 26);

function createContent(querySelectorContent, content) {
    const element = document.querySelector(querySelectorContent);
    element.innerHTML = content;
}

createContent('.for-fun__java--header--js','Nagłówek został zmieniony w JS');

const newCreateContent = (piece, content) => {
    const element = document.querySelector(piece);
    element.innerHTML = content;
}
newCreateContent('.for-fun__java--aside--js', 'Autorem testu są zmiany w JS');