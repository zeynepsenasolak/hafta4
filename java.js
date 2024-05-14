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