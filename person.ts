interface Person {
    firstName: string;
    lastName: string;
    age?: number;   //? denotes optional
}

const person: Person = {
    firstName: "Ada",
    lastName: "Lovelace"
}
person.age = 36;
console.log(`Hi, ${person.fristName}`);

function showFullName (person: Person) {
    console.log(`${person.firstName} ${person.lastName}`);
}

function makePerson(name: string, surname: string) : Person {
    const result = {
        firstName: name,
        lastName: surname
    }
    //if the object fulfills the "rules" of the interface, the object can be considered to be a value of that Person type
    return result;
}

const babbage = makePerson("Charles", "Babbage");
showFullName(babbage);