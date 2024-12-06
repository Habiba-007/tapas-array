console.log('Hello Array')

const salad = ['tomato', 'carrot', 'chillit', 'corn']
console.log(salad);

const newSalad = new Array('tomato', 'carrot', 'chillit', 'corn')
console.log(newSalad);

console.log(salad===newSalad);

const ele1 = new Array(1, 2)
console.log(ele1);
const ele2 = new Array(2)
console.log(ele2);
const ele3 = new Array(1)
console.log(ele3);

// Q.How to get elements from an array in js 
const sallad = ['tomato', 'carrot', 'chilli', 'corn', 'mango', 'potato', 'mashroom','brokly'];
console.log('length->', sallad.length);

console.log('position->', sallad[3])
console.log('position->', sallad[5]);
let len = sallad[7 - 1];
console.log('len',len);

let len1 = sallad[7 - 3];
console.log(len1);

// use for loop 
for (let counter = 0; counter < sallad.length; counter++){
   console.log(`Element at the index ${counter} is ${sallad[counter]}`)
}
 
/*How to add Element to an array in js*/
/*push-method and unshift-method was mutable-method*/

// let adding_item = sallad.push('Badam')
// console.log(sallad);
// console.log('items',adding_item);

const sallads = ['tomato', 'carrot', 'chilli', 'corn', 'mango', 'potato', 'mashroom','brokly'];

let first_adding_item = sallads.unshift('baddam');
console.log('items', first_adding_item);
console.log(sallads);



/*How to Remove Elements Form an Array in js */
 
const new_salad = ['baddam', 'tomato', 'carrot', 'chilli', 'corn', 'mango', 'brukly'];
console.log(new_salad.length);

let romve_last = new_salad.pop();
console.log(new_salad);

let remove_first = new_salad.shift();
console.log(new_salad);




/*How to Copy and Clone an Array in js*/
const book = ['bangla', 'english', 'science', 'social_science', 'arts', 'math'];
console.log(book.length);
console.log(book[1]);
// for-copy-use-slice()method 
const book_copy = book.slice();
console.log('copying->',book_copy);
console.log('copying->',book_copy.length);

console.log(book === book_copy);


/*Now how to determind if a value is an array in js?*/
const arr = []
console.log(Array.isArray(arr));
const obj = {};
console.log(Array.isArray(obj));
const name = 'kuddus';
console.log(Array.isArray(name));

console.log(Array.isArray(book));
console.log(Array.isArray(book_copy));
console.log(Array.isArray(salad));

console.log(Array.isArray(1))



 

