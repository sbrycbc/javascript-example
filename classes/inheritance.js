console.clear();

class Animal{
    name;
    species;

    constructor(name, species){
        this.name = name;
        this.species = species;
    }

}
    
console.log();
console.log(`============================================`)

class Car{
    name;
    color;
    horsePower;
    doors;
    hasTurbo;

    constructor(name, color, horsePower, doors, hasTurbo = false){
        this.name = name;
        this.color = color;
        this.horsePower = horsePower;
        this.doors = doors;
        this.hasTurbo = hasTurbo;
    }
    open() //neue methode
    {
        return `our ${this.color } ${ this.name } is opening its ${ this.doors } doors`
    }
}

const mustang = new Car(`Mustang`, `TomatenRed`, 280, 2, true);
console.log(mustang);
console.log(mustang.open());

console.log();
console.log(`============================================`)

class Bicycle extends Vehicle{
    

}