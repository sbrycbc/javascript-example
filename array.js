/* const artikel1 = 8.99;
const artikel2 = 5.99;
const artikel3 = 25;
const result = artikel1 + artikel2 + artikel3;
 */

/* const autos = ["Porsche", "Audi", "Tesla"];
console.table(autos);
console.log(autos[2]); */

/* const autos = ["Porsche", "Audi", "Tesla","BMW","BMW"];
const result = autos.indexOf("BMW", 4)
console.log(result); */

const autos = ["Porsche", "Audi", "Tesla","BMW","BMW"];
const result = autos.indexOf("BMW", autos.indexOf("BMW") +1)
const result2 = autos.indexOf("Ferrari");
