/* MUST KNOW ----------
1. how to declare variable using let and const.
2. how to use condition
     {if...else,if...else if,if....else if....else}
     compare operator:[===,!==,<=,>=,>,<]
     multi-conditional operator:[&&,||]
3. array declare
    index,length,push,pop

4. loop
    for loop(must kow),while loop,do while(good to know)
5. function
    function call,pass parameter,return from function
6.object
    3 ways of access property
        1.direct by property
        2.access via property name string
        3.access via property name in a variable
*/

const myName='shovan';
let age=27;
if(myName==='Shovan' && age===27){
    console.log('thank you for your correct information');
}else if(myName==='shovan'|| age===28){
    console.log('your age is not matching',myName);
}else{
    console.log('you are a fraud');
}

const numbers=[5,6,2,3,4];
numbers[0]=1;
console.log(numbers);

for(let i=0;i<numbers.length;i++){
    console.log(numbers[i]);
}

function multiply(num1,num2){
    return num1*num2;
}
console.log(multiply(5,8));

const nayok={
    name: 'jolonto jolil',
    age: 32,
    movie: ['din the day','khuj the search','ore abal'],
    wife: 'dongi marani otisom borsha'
}
const nayokAge='age';

console.log(nayok.wife);
console.log(nayok['name']);
console.log(nayok[nayokAge]);