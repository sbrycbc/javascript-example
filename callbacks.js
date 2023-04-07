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

