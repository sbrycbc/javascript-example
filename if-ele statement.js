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


