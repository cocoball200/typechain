interface Human {
    name: string;
    age: number;
    gender: string
}

const person = {
    name: "Mia",
    age: 100,
    gender: "female"
};

const sayHi = (person: Human) => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!`;
};

console.log(sayHi(person));
export { };