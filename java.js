let fruits= ["apple", "banana", "orange", "mango"]; 
console.log(fruits[0]); 
fruits.push("grapes");
console.log(fruits);
fruits.pop();
let person ={
    firstName: "John",
    lastName: "Doe",
    age: 30,
    hobbies: ["reading", "traveling"],
    adress: {
        street:"123 main st",
        city:"anytown",
        country: "usa"
    }
}
person.age = 31;
person.hobbies.push("cooking");
console.log(person.firstName);
console.log(person.adress.city);

for (let i = 0; i<5; i++) {
    console.log(i);
}
for (let i= 3 ; i>-1; i--) {
    console.log(fruits[i]);
}
let x= 2
if(x>5) {
console.log("hello");
} else{
console.log("i love you");
}

let age = 25;
if(age>= 18) {
    if (age<21) {
        console.log( "you are an adult but not allowed to drink yet");
    } else { 
        console.log("you are an adult and allowed to drink");
    }
} else {
    console.log("you are a minor");
}

let sena = document.getElementById('me');
console.log(sena);

let mixer = document.getElementsByClassName('rakkas-regular-2');
console.log(mixer); 

sena.innerHTML = '<p> New content added with innerHTML! </p>'; 
function changeImageSource() {
let resim = document.getElementById('ins');
let newImageSource = 'images/sulu boya.jpg';

resim.setAttribute('src', newImageSource);
}

function addItalic() {
    let meme = document.getElementById('ayh');
    meme.classList.add('italic');
}

let childElement = document.getElementById('ins');
let parentElement = childElement.parentNode;
console.log(parentElement); 

function createNewDiv() {
    let newDiv = document.createElement('div');
    newDiv.classList.add('newDiv');
    newDiv.textContent = 'this is a dynamically created div!';
    document.body.appendChild(newDiv);
}