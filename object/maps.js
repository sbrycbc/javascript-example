//Maps

let val;

const numbers = new Map();
numbers.set(1, `one`);
numbers.set(`2`,`two`);
numbers.set(3, `three`);
numbers.set(`four`, `four`);

val = numbers;
val = numbers.get(`2`);
val = numbers.size;
val = numbers.has(1);
val = numbers.delete(`four`);
val = numbers.has(`four`);



console.log(val);

console.log(`****************`);
console.log();

for ( let [key,value] of numbers){
    console.log(key + ` = `+ value);
}

for ( let [key,value] of numbers.entries()){
    console.log(key + ` = `+ value);
}

for ( let key of numbers.keys()){
    console.log(key);
};

for ( let value of numbers.values()){
    console.log(value);
};

numbers.forEach(function(key,value){
    console.log(key + ` - ` + value);

});

console.log(`****************`);
console.log();


let first = new Map([
    [1, `one`],
    [2, `two`],
    [3, `three`],
]);

let second = new Map([
    [4, `four`],
    [5, `five`],

]);

const merged = ([...first,...second]);
console.log(merged);




