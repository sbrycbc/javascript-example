/* function divider(input)
{
    const spacer = `=`.repeat(20);
    console.log(`\n` + spacer, input, spacer, `\n`);
}

divider("For - loop")

for(let i=1; i<=10; i++){
    if(i==3){
        console.log(`meinlieblings Zahl :` +i);
        continue;
    }
    if(i==6){
        console.log(`meinlieblings Zahl nicht :` +i);
        break;
    }

    console.log(i);
}

divider("while - loop")

for(let i=0; i<=10; i++){
    console.log(i);
}

let i=0;
while (i<10){
    console.log(i);
    i++;
}

divider("do - while  loop")

let i=0;
do{
    console.log(i);
    i++;
}while(i<10)

divider("do - while  loop - beispiel")
 */
/* let summ=1;
for(let i=10; i>0; i--){
    if(i%2==1){
        summ*=i;
    }
}
console.log(summ); */

//divider("do - while  loop - beispiel - 2")
let val=`\n`;
for(let i=0; i<5;i++){
    for(let j=0; j<8;j++){
        val +=`* `;
    }
    val+=`\n`;
}
console.log(val);