/* function sum(a,b){
    const c =a+b;
    return c;
}

console.log(sum(10,20)); */

const sum = function(a,b){

    if(typeof a === `undefined`)
{
    a=0;
}

if(typeof b === `undefined`)
{
    b=0;
}
    let c =a+b;
    return c;
}

console.log(sum(10));



function args(){
    console.log(arguments)
}

args(10,20,30)


function sumAll(){
    let total = 0;
    for(let i=0; i<arguments.length; i++){
        total+=arguments[i];
    }
    return total;
}

console.log(sumAll(10,20,30,40,50,60,70))