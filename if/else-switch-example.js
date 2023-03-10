function divider(input)
{
    const spacer = `=`.repeat(20);
    console.log(`\n` + spacer, input, spacer, `\n`);
}
 
divider("example-1")
 
 const trafigeCikis = new Date(`04/20/2021`);
 trafigeCikis.setHours(0,0,0,0);
 const trafiktekeMs = Date.now() -trafigeCikis.getTime();
 const trafiktekiGün = Math.floor(trafiktekeMs/(1000*60*60*24));

 if(trafiktekiGün<=365){
     console.log(`1.servis bakim süreniz gelmistir!!`);
 }
 else if(trafiktekiGün>365 && trafiktekiGün<=365*2){
     console.log(`2.servis bakim süreniz gelmistir!!`)
 }
 else if (trafiktekiGün>365*2 && trafiktekiGün<=365*3){
     console.log(`3.servis bakim süreniz gelmistir!!`)
 }
 else{
     console.log(`bilinmeyen bir süre!!`)
 }
console.log(trafiktekiGün); 


divider("example-2")

const result = prompt("who`s there?");

if(result == `cancel`){
    console.log(`cancelled`);
}
else if(result == `Admin`){
    console.log(`welcome Admin`);
}
else{
    console.log(`I dont know you!!`)
}





