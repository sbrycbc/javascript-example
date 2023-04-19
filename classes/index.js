/* class Person {
    constructor(name, surname,age){
      this.name = name;
      this.surname = surname;
      this.age = age;  
      this.friends = ["Ela", "Ale"];
    }
    fullName(){
        return this.name + " " + this.surname;
    }

    static showName = "Person";
    static staMetod() {
        console.log(`static method funktionieren!!!`)
    }
}

const mahir = new Person("Mahir", "Cbc", 11);
const ulas = new Person("Ulas", "Cbc", 9); */

/* console.log(mahir);
console.log(mahir.fullName());
console.log(ulas.fullName());
console.log(mahir.friends);
ulas.friends.push("Gölge");
console.log(ulas.friends);
console.log(`${mahir.name} has two fridens. This are ${mahir.friends}`)
console.log(mahir.showName);
console.log(Person.showName);
console.log(Person.staMetod());
 */

/* class Engineer extends Person {};

const sbry = new Engineer ("Sbry", "Cbci", 37);
console.log(sbry); */

/* class Engineer extends Person {
    constructor(name, surname, age, job){
        super(name, surname,age);
        this.job = job;
    }

    getMoney(){
        console.log("Verdint Geld:)))")
    }
}

const sbry = new Engineer("Sbry", "Cbci", 37, "engineer");
console.log(sbry);
console.log(sbry.getMoney()); */



/* class Person {
    constructor(name, surname,age){
      this.name = name;
      this.surname = surname;
      this.age = age;  
      this.friends = ["Ela", "Ale"];
    }
    fullName(){
        return this.name + " " + this.surname;
    }

    static showName = "Person";
    static staMetod() {
        console.log(`static method funktionieren!!!`)
    }
}

class Engineer extends Person {
    constructor(name, surname, age, job){
      super(name, surname,age);
      /* this.name = name;
      this.surname = surname;
      this.age = age; */  
      /* this.job = job; */
    /* } */
    //Subclass olustururken super clastan  degerleri aldigi icin tekrar yazmamiza gerek yok. eger yazar isek hata kodu aliriz. Bunun yerine super methodunu kullanmaliyiz....

    /* getMoney(){
        console.log("Verdint Geld:)))")
    }
}

const sbry = new Engineer("Sbry", "Cbci", 37, "engineer");
console.log(sbry);

 */ 

class ExtendedArray extends Array {
    shuffle(){
        this.sort(() => Math.random() - 0.5);
    }
}

let myArray = new ExtendedArray(1,2,3,4,5);
console.log(myArray);
myArray.shuffle();
console.log(myArray);