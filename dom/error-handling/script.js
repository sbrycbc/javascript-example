/* console.log("Hej....");

try {
    const x = 0;
    x = 7;
    console.log(x);
}catch (error) {
    console.log(error)
}

console.log("the new result");

function multi(a,b) {
    return a * b
}

console.log((multi(2,3)));
 */


console.log("the new result");

function multi(a,b) {
    if (typeof a !== "number"){
        throw new Error("Sorryy!!!");
    }
    if (typeof b == "boolean") {
        throw new Error("Sorryy newww!!!");
    }
    return a * b;
}
try {
    console.log(multi("Hi!",true))
} catch (error) {
    console.log(error);
}