function divider(input)
{
    const spacer = `=`.repeat(20);
    console.log(`\n` + spacer, input, spacer, `\n`);
}

divider("IF/ELSE")

const today = `Montag`;
if(today === `Montag` || today === `Diesntag`)
{
    console.log(`ich brauche mehr Kaffee`);
}
else
{
    console.log(`Bald ist Wochonende!`)
}

divider("IF/ELSE IF");

if(today === `Montag`)
{
    console.log(`ich brauche mehr Kaffee`);
}
else if(today === `Dientag`)
{
    console.log(`Mein Kaffee ist alle!`);
}
else
{
    console.log(`Schlafen!!`);
}

divider("If / Else Beispiele")

const firstname = `Sabriye`;
const age = 37;
const isStudent = false;
const school = `university`;

if(firstname === `Sabriye`)
{
    console.log(`Hello Sabriye`);
}

if(age === 37)
{
    console.log(`you are 37!!`);
}

if(isStudent === true)
{
    console.log(`hi!!`);
}
else
{
    console.log(`how are you`);
}

if(age>=18){
    if((school == `university`) || (school == `high school`)){
    console.log(`you can drive!!`);}
    else {
        console.log(`we have enough education!!!`);
    }
}

else
{
    console.log(`you can not drive!!!`);
}

if ( age > 0 && age < 12){
    console.log(`${firstname} is a child!`);
}
else if (age >=13 && age <=19){
    console.log(`${firstname} is a teenager`);
}
else {
    console.log(`${firstname} is an adult!!`);
}




