// Callback Function

function MultipleByTwo(a,b,c,callback){
    let arr = [];
    for(let i= 0; i<3; i++){
        arr[i] = callback (arguments [i]*2);
    }
    return arr;
}

function addOne(a){
    return a + 1;
}

function addTwo(a){
    return a + 2;
}

function addThere(a){
    return a + 3;
}

console.log(MultipleByTwo(5,10,20,addTwo));
console.log();
console.log("-".repeat(30) + "/".repeat(10) + "-".repeat(30));
console.log();

setTimeout(()=> {
    console.log("in zwei Sekunde anfangen!!")
},2000);


const fruits =["apple", "pear", "grapes","kivi","banana"];
const fruit = fruits.filter((fruit)=>{
    return fruit.length === 4;
});

console.log(fruit);

console.log();
console.log("-".repeat(30) + "/".repeat(10) + "-".repeat(30));
console.log();


function a(x,y){
    console.log(x);
    y();
}

function b(){
    console.log(2);
}

function c(){
    console.log(3);
}

a(5,b);
a(2,c);

console.log();
console.log("-".repeat(30) + "/".repeat(10) + "-".repeat(30));
console.log();


