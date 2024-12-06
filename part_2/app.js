 



/*Now array destructuring */
const salads = ['cocombar', 'coconut', 'strobarry', 'mango'];
const cocombar = salads[0]
console.log(cocombar);
const mango = salads[3];
console.log(mango);



/*How to Assign a Default value to a variable*/
const salad = ['tomato', 'badam', 'carrot'];
const [tomato, badam, carrot] = ['tomato', 'badam', 'carrot'];
console.log('result->',tomato,badam,carrot);

// use default_value in array //
let [carrots] = ['carrot']
console.log(carrot);
let [another_carrots, mashroom = 'default_value_mashroom'] = ['carrot'];
console.log(another_carrots);
console.log(mashroom);
console.log(another_carrots,mashroom);


/*How to skip a value in an array */
const saalad = ['tomato', 'carrot', 'cocombar', 'maushroom', 'baddam'];
const [tomatos, carrotss, , maushroom, baddam] = ['tomatos', 'carrot', 'cocombar', 'maushroom', 'baddam'];
console.log(tomatos);
console.log(carrotss);
console.log('result->',baddam);
console.log(maushroom)


/*Nested Array Destructuring in Js*/
const fruits = ['mango', 'apple', 'bannana', 'naspati', ['potato', 'mulla', 'shak']];

const vagetable = fruits[4];
console.log(vagetable);
const shak = vagetable[2];
console.log(shak);

console.log(fruits[4][1]);

const [mangos, apples, bannanas, naspatis, veg] = fruits
console.log(veg);

const [mangoss, appless, bannanass, naspatiss, [potatos, mullas, shaks]] = fruits;

console.log(shaks);
console.log(mullas);
console.log(potatos);

console.log(mangos);
console.log(mangoss);

console.log(apples);
console.log(appless);



/*How to use the Rest parameter in Js(...)*/
let fruit = ['pinaple', 'strobary', 'jackfruit', 'atafol', 'licho', 'bangi', 'jolpai', 'orbori', 'chalta', 'tetol'];
 
let [pinaple] = fruit;
console.log(pinaple);
let [pinaples, strobary, jackfruit, atafol, ...rest] = fruit;
console.log(pinaples);
console.log(strobary);
console.log(rest);
console.log(rest.length);



/*How to use the Spread Operator In Js(...)*/
const book = ['bangla', 'english', 'math', 'socialscience', 'chemistry'];
const anotherBooks = [...book];
console.log(anotherBooks.length);
console.log(anotherBooks);


/*Destructuring use case in javascript */
/*1.How to Swap Values with Destructuring ?*/
/*2.How to How to Merge Arrays?*/

// swap
let sad = 'i am sad man always';
let happy = 'i am happy man always';

// console.log([sad, happy])
[happy, sad] = [sad, happy];
console.log(happy);
console.log(sad);
console.log([happy, sad]);

// Array Marge
let names = ['kuddus', 'akbor', 'karim', 'chanmia'];
let pesha = ['workder', 'plumber', 'teacher', 'designer'];
// [names, pesha] = [names, pesha];
// console.log(names,pesha);
let names_pesha = [names, pesha];
console.log(names_pesha);
let namesPesha = [...names, ...pesha];
console.log(namesPesha);

// use shallow coppy
const profession = ['doctor', 'enginner', 'housewife', 'teacher'];
const classes = ['classOne', 'classTwo', 'classThree', ['classFour', 'classFive']];
// const professionOfClasses = [profession, classes];
// console.log(professionOfClasses);
const professionOfClasses = [...profession, ...classes];
console.log(professionOfClasses);


/*Array Length*//*the length property*/
const numbers = [1, 2, 3, 4, 5,6];
const singleNumbers =new Array (5)
console.log(numbers);
console.log(singleNumbers);
console.log(numbers.length)
console.log(singleNumbers.length);
singleNumbers.length = 2 ** 32 - 1
console.log(singleNumbers.length);

 /*Increment the Array Length and Decrement the Array length*/
const list = ['karim', 'chanmia', 'kuddus'];
console.log(list.length);
list.length = 6
console.log(list);
list[2] = 'akkasmia';
console.log(list);
list[4] = 'babulmia'
console.log(list);
list.length = 4;
console.log(list);
list.length = 3
console.log(list);
list.length = 0;
console.log(list);


/*Mdifyed to Array Lenght or control to array length*/
// That means length property jate kew update korte na pare
// use use strict for this line of code 
"use strict"
const cash = [12, 13, 14, 15];
Object.defineProperty(cash, "lenght", { writable: false });
cash.length=0
// console.log(cash);not working this method


  





 

 
   








 
  







