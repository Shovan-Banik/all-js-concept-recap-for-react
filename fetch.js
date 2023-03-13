/* MUST KNOW
1.JSON
    *JSON.stringify()
    *JSON.parse()
2.fetch
3.object (key,values array)
4. forEach and map for loop
5. for of loop use for array like object
6. when use loop on an object using for in loop
7. filter

*/
const person={
    name: ['shovan','aziz','asif','mehedi','tpu','hridoy'],
    age: 27,
    maritalStatus: ['unmarried','married'],
    relation:'friend'
}
const personJSON=JSON.stringify(person);
// console.log(personJSON);
const personObject=JSON.parse(personJSON);
// console.log(personObject);

/*
// fetch
fetch('url')
.then(res=>res.json())
.then(data=>console.log(data)); 
*/

// key,values
const keys=Object.keys(person);
// console.log(keys);
const values=Object.values(person);
// console.log(values);

// for
const numbers=[90,80,70,60,65];
// numbers.forEach(number=>console.log(number*2));
const tripple=numbers.map(n=>n*3);
// console.log(tripple);

// add or remove from an array 

const products=[
    {name:'leptop', price:500, brand:'lenevo'},
    {name:'mouse', price:100, brand:'A4tech'},
    {name:'keyboard', price:150, brand:'macroMax'},
    {name:'phone', price:400, brand:'samsung'},
    {name:'watch', price:200, brand:'olives'},
]
const newProduct={name:'earphone',price:130,brand:'uiisii'};
// copy products array first then add newProduct
const allProducts=[...products,newProduct];
// console.log(allProducts);
// console.log(products);


// create a new array without one specific item
// remove phone from products array and create new array where all values included without phone
const remaining=products.filter(p=>p.name!=='phone');
console.log(remaining);


