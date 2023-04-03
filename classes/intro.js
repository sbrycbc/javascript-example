const car1 = {
    brand : "Ford",
    model:"Kuga",
    color:"RubyRed",
    horsePower:283
}

const car2 = {
    brand : "Ford",
    model:"Mustan",
    color:"Black",
    horsePower:280
}

console.log('Object:1 ', car1);
console.log('Object:2', car2);

class Car {
    brand;
    model;
    color;
    horsePower;

    constructor(brand, model, color,ps=25){

    this.brand = brand;
    this.model = model;
    this.color = color;
    this.horsePower = ps;
    }
}

const car3 = new Car("Bentyley", "Continental GT", "White", 680);

console.log(car3);
car3.horsePower = 12;
console.log(car3);
