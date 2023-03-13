/* 
1. array destructuring[serial main korte hoy]
2.object destructuring[serial maintain krte hoy na...object ar modde thakley destructure kore dey]
*/
const numbers=[10,20,30];
// first method of destructuring
const first=numbers[0];
const second=numbers[1];
const third=numbers[2];
console.log(first,second,third);
// second method of destructuring
const integers=[5,10,15,20];
const[one,two,three,four]=[5,10,15,20];
console.log(one,two,three,four);
// third method of destructuring
const array=[1,2,3,4];
const[w,x,y,z]=array;
console.log(w,x,y,z);

// function for create array for destructuring
function createArray(num1,num2,num3){
    const arr=[num1,num2,num3];
    return arr;
}
const [a,b,c]=createArray(12,24,36);
console.log(a,b,c);

// array of an object destructuring
const person={
    name: ['shovan','aziz','asif','mehedi','tpu','hridoy'],
    age: 27,
    maritalStatus: ['unmarried','married'],
    relation:'friend'
}
const [p,q,r,s,...t]=person.name;
console.log(p,q,r,s,t[1]);

/* object destructuring */
const{name,biya}={name:'mofiz',vara:30,khay:'mori',biya:'buri'};
console.log(name,biya);

// create new object for destructure
const pagol={
    nam: 'kathu',
    age: 55,
    eat:['biri','ganja','kagoj','vat'],
    work:{
        sokale: 'bangla gali',
        dopore: 'english gali',
        bikele:{
            exercise:'ganja khaiya',
            dress:['3 ta genji','2 ta shirt','2 ta soyetar']
        },
        rate: 'hindi gali'

    },
    sovab:'moitta sobai re citiye dey'
}
const {nam,sovab}=pagol;
const {sokale,dopore}=pagol.work;
const [prothome,ditiye,tithiye]=pagol.work.bikele.dress;
const [five,saradin,halfKilo,olpo]=pagol.eat;
console.log(nam,sovab);
console.log(sokale,dopore);
console.log(prothome,ditiye,tithiye);
console.log(five,saradin,halfKilo,olpo);






