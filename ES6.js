/* MUST KNOW*****
1. template string
2. Arrow function
3.spread operator

*/
const luckyNumbers=[3,7,23,17,9];
const person={
    name: ['shovan','aziz','asif','mehedi','tpu','hridoy'],
    age: 27,
    maritalStatus: ['unmarried','married'],
    relation:'friend'
}
const personAbout=`My name is ${person.name[0]} and my age is ${person.age}. Still now i am ${person.maritalStatus[0]}. I think my lucky number is ${luckyNumbers[2]}. One of my good friend name is ${person.name[5]}`
console.log(personAbout);

const giveANumber=()=>2023;
const getJobAfter=year=>2020+year;
const lossYear=(afterClg,afterVersity)=>afterClg+afterVersity;
const jibonDaiLoss=(firstFail,secondFail,thirdFail)=>{
    firstFail=2014;
    secondFail=2015;
    thirdFail=2020;
    return firstFail+secondFail+thirdFail;
}

const firstArr=[1,2,3,4,5];
const secondArr=[...firstArr];
firstArr.push(6);
secondArr.pop(5);
const thirdArr=[...secondArr,7]
console.log(firstArr);
console.log(secondArr);
console.log(thirdArr);