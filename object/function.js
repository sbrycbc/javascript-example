
/* function Person(name,yearOfBirth,job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.calculateAge = function(){
        return 2018 -this.yearOfBirth;

    }

   // console.log(this);

} */


const Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.calculateAge = function(){
        return 2018 -this.yearOfBirth;

    }

}


const yigit = new Person(`Mahir`, 2011, `student`);
const tarik = new Person (`Tarik`, 2014, `student`);

console.log(yigit.name);
console.log(yigit.yearOfBirth);
console.log(yigit.job);
console.log(yigit.calculateAge());
console.log(`********************`);