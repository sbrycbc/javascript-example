class User{
    #firstName;
    #lastName;
    fullName;

    constructor(firstName, lastName){
        this.#firstName = firstName;
        this.#lastName = lastName;
    }
    get firstName(){
        return this.#firstName;
    }

    getFirstName(){
        return this.#firstName;
    }

    set firstName(input){
        this.#firstName = input;
    }

    setFirstName(input){
        this.#firstName = input;
    }
}

const testUser = new User("Max", "Musterman");
console.log(testUser);

console.log(testUser.firstName);
console.log(testUser.getFirstName());

testUser.firstName = "Katrin";
console.log(testUser.firstName);