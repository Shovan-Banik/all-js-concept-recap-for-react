const police={
    dress: 'blue',
    character: 'soytan',
    salary : '35000',
    ghosh: '500000',
    43: '20000000 koti takar malik'/* aita k dot notation diye acces kra jbe na..obossoi bracket notation lagbe */
}
// dot notation
const beton=police.salary;
console.log(beton);

// bracket notation
const corruption=police['ghosh'];/* key ar value bracket a ''ar vitor rakhte hbe jdi string hoy */
console.log(corruption);

// bracket notation using variable declare
const choritro='character';
const characterestic=police[choritro];
console.log(characterestic);

const totalMoney=police[43];/* number thakle '' ar vitor rakha lage na */
console.log(totalMoney);