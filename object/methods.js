const zielObject = {a:1, b:2};
const andereObject = {c:3 , d:4};
console.log(zielObject);
const newObject = Object.assign(zielObject,andereObject);
console.log('neue Object:', zielObject);

//Object entries

const objectEntries = Object.entries(zielObject);
console.log(objectEntries);

objectEntries.forEach(([key, value]) => {
    console.log(key,value)
});

const testArray = [

    ["a", true],
    ["b",{test:5}]
]
console.log("testArray:", testArray);

const newObjectFromEntries = Object.fromEntries(testArray);
console.log("newObjectFromEntries:", newObjectFromEntries);

const sealObject = {
    firstName:"Max",
    lastName:"Mannn"
};
console.log(sealObject);

sealObject.age = 25;
console.log(sealObject);

Object.seal(sealObject);

sealObject.country = "Germany";
console.log();

delete sealObject.age;
console.log()

sealObject.age = 18;
console.log();


