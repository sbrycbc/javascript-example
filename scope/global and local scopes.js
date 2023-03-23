let name = `Mahir`;
let age = 25;

function logName(){
    let name  = `Tarik`;
    let age = `12`
    console.log(`function scope`,name,age);
}
//console.log(age);

if(true){
    let age = 30;
    console.log(`block scope`, name, age);
}

console.log(age);

logName()
console.log(name);


console.log(`**********************************************`)

if(true){
    var model = `Opel`;
    let year = 2016;
    const color = `white`;
    console.log(`block scope`, model,year,color);
}

//console.log(`block scope`, model,year,color);
console.log(year);

const i = 1;

for(let i=0; i<10;i++){
    console.log(`i`,i)
}

console.log(i);

