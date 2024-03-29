function divider(input)
{
    const spacer = `=`.repeat(20);
    console.log(`\n` + spacer, input, spacer, `\n`);
}

divider("SWITCH-STATEMENTS")
const position = 0;
switch (position) {
    case 0:
        console.log(`Ausgeschaltet`);
        break;

    case 1:
        console.log(`Eingeschaltet`);
        break;
}

divider("SWITCH - BEISPIELE!!!!!!")
//-1
let category = `tv`;
switch(category){
    case `telephone`:
        console.log(`category telephone!!`);
        break;
    case `laptop`:
        console.log(`category laptop!!`);
        break;
    default:
        console.log(`not!!`);
}

//-2
let day;
switch(new Date().getDay()+1){
    case 0:
    case 6:
        day = `Wochenende!!!`;
        break;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        day = `Arbeitstage!!`;
        break;    
}
console.log(`heute is ${day}`);


//-3
const age = 29;
const firstname = `Sabriye`;

switch (true){
    case (age >= 0 && age < 12):
        console.log(`${firstname} is a child!`);
    break;
    case (age >=13 && age <=19):
        console.log(`${firstname} is a teenager`);
    break;
    default:
        console.log(`${firstname} is an adult!!`);
}

// -4
const statusCode = 600;
switch (statusCode){
    case 200:
        console.log(`status code: success`);
        break;
    case 400:
        console.log(`status code: success400`);
        break;
    case 404:
        console.log(`status code: success404`);
        break;
    case 500:
        console.log(`status code: success500`);
        break;
    default:
        console.log(`default`);
}

if(statusCode === 200){
    console.log(`status code: success`);
}
else if (statusCode === 400){
    console.log(`status code: success400`);
}
else if (statusCode === 404){
    console.log(`status code: success404`);
}
else if (statusCode === 500){
    console.log(`status code: success500`);
}
else{
    console.log(`default`)
}