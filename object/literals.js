// Object Literals

let val;
/* let person ={
    firstName : `Chicken`,
    lastName: `Java`,
    age : 33,
    hobbies : [ `music`, `game`],
    address: { city : `Kocaeli`,
               country : `Turkei`
    },
    getBirthYear : function(){
        return 2008 -this.age;
    }
};

val = person.firstName;
val = person.lastName;
val = person[`firstName`];
val = person.hobbies[1];
val = person.getBirthYear();


console.log(person);
console.log(typeof person);
console.log(val);
 */

let people = [
    {firstName : `Mahir`, lastName : `Cebeci` },
    {firstName : `Tarik Ulas`, lastName : `Cebeci` },
    {firstName : `Gölge`, lastName : `Cebeci` }

];

val = people[2];
val = people[2].firstName;

for (let i=0; i<people.length; i++){
    console.log(people[i].firstName);
}


console.log(val);
console.log(typeof people);