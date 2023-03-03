const artikel1 = 8.99;
const artikel2 = 5.99;
const artikel3 = 25;
const result = artikel1 + artikel2 + artikel3;


const autos = ["Porsche", "Audi", "Tesla"];
console.table(autos);
console.log(autos[2]);

const autos = ["Porsche", "Audi", "Tesla","BMW","BMW"];
const result = autos.indexOf("BMW", 4)
console.log(result); 

const autos = ["Porsche", "Audi", "Tesla", "BMW", "BMW"];
const result = autos.indexOf("BMW", autos.indexOf("BMW") + 1)
const result2 = autos.indexOf("Ferrari");


//.copyWithin() method: 
const MeowArray = ["Coding", "with", "Meow", "is", "fun!", "Cutie", "Kittycat!", "Cat!"]
MeowArray.copyWithin(5,1)
console.log(MeowArray)

//.splice method:
const MeowArray = ["Coding", "with", "Meow", "is", "fun!", "Cutie", "Kittycat!", "Cat!"]
MeowArray.splice(3,1)
console.log(MeowArray)

//.fill method:
const MeowArray = ["Coding", "with", "Meow", "is", "fun!", "Cutie", "Kittycat!", "Cat!"]
MeowArray.fill("hey",1,4)
console.log(MeowArray)

//.pop() method:
const MeowArray = [`Learning`, `is`, `fun`];
MeowArray.pop();
console.log(MeowArray);

//.push() method:
const MeowArray = [`Learning`, `is`, `fun`]
MeowArray.push(`Meow!`);
console.log(MeowArray);

//.reverse() method:
const MeowArray = [`Learning`, `is`, `fun`];
console.log(MeowArray.reverse());


//.sort() method:
const MeowArray = [`Learninin`, `is`, `fun`];
console.log(MeowArray.sort());


//.shift() method
const MeowArray = [`Learinin`, `is`, `fun`];
MeowArray.shift();
console.log(MeowArray);

//.unshift() method
const MeowArray = [`Learinin`, `is`, `fun`];
MeowArray.unshift(`Wow!`);
console.log(MeowArray);