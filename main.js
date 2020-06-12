/*const heading = document.querySelector(".main-header__my-name--js");
heading.innerHTML = "Konrad Podolak Frontend Developer";
*/

function calculate(myNumber) {
  return myNumber * 7;
}

const myResult = calculate(9);
console.log(myResult);

const greet = (firtsName, age) => {
  console.log(`Hej Ty nazywam się ${firtsName} i mam ${age} lat :D.`);
};
greet("Konrad", 26);

function createContent(querySelectorContent, content) {
  const element = document.querySelector(querySelectorContent);
  element.innerHTML = content;
}

createContent(".for-fun__java--header--js", "Nagłówek został zmieniony w JS");

const newCreateContent = (piece, content) => {
  const element = document.querySelector(piece);
  element.innerHTML = content;
};
newCreateContent(".for-fun__java--aside--js", "Autorem testu są zmiany w JS");

/* tworzenie obiektów*/
const deathStar = {
  diameter: 120000,
  fire: (target) => {
    console.log(`${target} destroyed buuum`);
  },
  isOperating: true,
  levels: 357,
  name: "Death Star",
  population: 10000,
  comander: {
    name: "Darth Vader",
    age: 44,
  },
};

console.log(deathStar);

const daria = {
  height: 169,
  age: 24,
  address: {
    street: "Nasypowa",
    city: "Gdynia",
  },
};

if(daria.age <= 24)  {
    console.log('Daria to młoda sztunia');
}else  {
    console.log('ale stara baba');
};

const messi = {
    nationality: 'argentina',
    height: 172,
    age: 32,
}
console.log(messi);

