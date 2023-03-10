//for schleife

// const myArr=[1,2,3,4,5];
// let sumArr = 0;

// for (let i=0;i<myArr.length;i++) {
 
//     sumArr += myArr[i];

// }

// console.log(sumArr);

//while schleife

// const myArr=[1,2,3,4,5];
// let sumArr = 0;
// let i = 0;

// while (i<myArr.length) {
//     sumArr += myArr[i];
//     i++;
// }
// console.log(sumArr);

//do while schleife

const myArr=[1,2,3,4,5];
let sumArr = 0;
let i = 0;

do {
    sumArr += myArr[i];
    i++;
}

while (i<myArr.length);

console.log(sumArr);

// if else
const age = 75;

if ((age>=18 || age<=65) && age>=100) {
    console.log("You can buy a drink")
} else {
    console.log("You must be at least 18..")
}

let day = "Monday";

switch (day) {
    case "Monday":
        console.log("Arbeitstag");
        break;
    case "Tuesday":
        console.log("Arbeitstag");
        break;
    case "Saturday":
        console.log("Wochenende");
        break;
    case "Sunday":
        console.log("Wochenende"); 
        break;
    default:
        console.log("No value found")       
}



