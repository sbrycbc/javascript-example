function divider(input)
{
    const spacer = `=`.repeat(20);
    console.log(`\n` + spacer, input, spacer, `\n`);
}

divider("Loops in Array & Objects!!")

let cars =[`Bmw`, `Mercedes`, `Toyoto`];
let people = [
    {firstName:`Ada`,lastName:`Bilgi`},
    {firstName:`Cinar`,lastName:`Bilgi`},
    {firstName:`Yigit`,lastName:`Turan`}
];

for(let i=0; i<cars.length; i++){
    console.log(cars[i]);
}

for(let i=0; i<people.length; i++){
    console.log(people[i].firstName);
}

// for -in

for(let i  in cars){
    console.log(`index : ${i} value : ${cars[i]}`)
} 

for(let i in people){
    console.log(`index : ${i} value : ${people[i].firstName}`);
}


// foreach

cars.forEach(function(item){
    console.log(item)
});

people.forEach(function(item){
    console.log(item.lastName);
});


//map : returns an array

let val = people.map(function(item){
    return item.firstName + ' ' + item.lastName
});
console.log(val);

let numbers = [1, 5, 6, 8, 10];
let num = numbers.map(function(n){
    return n*n
});
console.log(num);