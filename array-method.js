/* MUST KNOW
1. map(loop chalay sob gulu elements a abong array return kore)

2. forEach(loop chalay sob gulu elements a kinto return kore na)

3.filter(condition onojayi loop caliye sob condition fullfil korle sob gula ke return kore)
    *filter with includes(includes diye check kore kono akta particular jinish ace kina oitar vitor thakle sob gula return kore ARRAY akare)

4.find(condition check kore ...condition jgula fulfil kore oigular modde sudhu matro prothom ta k returnkore OBJECT akare)
    *find with includes

*/
const products=[
    {name:'leptop', price:500, brand:'lenevo'},
    {name:'mouse', price:100, brand:'A4tech'},
    {name:'keyboard', price:150, brand:'macroMax'},
    {name:'phone', price:400, brand:'samsung'},
    {name:'watch', price:200, brand:'olives'},
]
// map
const brandArray=products.map(product=>product.brand);
console.log(brandArray);
const priceArray=products.map(product=>product.price+1);
console.log(priceArray);
// forEach
products.forEach(product=>console.log(product));
products.forEach(product=>{
    console.log(product.name);
});

// filter
const cheap=products.filter(product=>product.price<400);
console.log(cheap);
const specificName=products.filter(product=>product.name.includes('t'));
console.log(specificName);

// find
const specificNameFind=products.find(product=>product.name.includes('t'));
console.log(specificNameFind);
