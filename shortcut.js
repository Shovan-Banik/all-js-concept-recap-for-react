/* MUST KNOW
1. truthy('something',5,true,{},[])
2.falsy('',0,false,null,null,undefined)
3.ternary operator



*/
let money=200;
if(money){
    money=money-40;
}else{
    money='not enough'
}
// console.log(money);
// check negitive
let taka=20;
if(!taka){
     taka=taka*2;
}else{
    taka=0;
}
// console.log(taka);

const poysa=220;
let food;
if(poysa>500){
    food='biriyani';
}else{
    food='roti r dal-vaji'
}
// console.log(food);

let foodItem=poysa>100 ? 'gold-leaf':'royal';
// console.log(foodItem);

let drinksItem=(poysa>100 && money>100) ? 'lacci':'filter pani';
// console.log(drinksItem);


// number to string conversion [kono number ar sathe empty string jog korle number ti string a convert hye jay]
const num1=10;
const num2=num1+'';
console.log(num1,num2);

// string to number conversion 
const num='69';
const newNum=+num;
console.log(newNum);


// shortcut function call using ternary operator
let isCalled=true;
const callUser=()=>console.log('callUser');
const rejectUser=()=>console.log('rejectUser');
isCalled ? callUser() : rejectUser();
// use && if the left side is true then the right will be executed
isCalled && rejectUser();
// use || if the left side is false then right side will be executed
isCalled || callUser();

// toggle boolean
isCalled = !isCalled;
console.log(isCalled);






