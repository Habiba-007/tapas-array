console.log('welcome to array method part-3')

// There are many Array methods
/*But mainly we can devide into three groups*/

/*The element in the array seigula k kivabe(create,update,remove,access)korte chan */

/*Static Method or some static methods*/

/*   Array iterator Methods (some array itearator methods)*/

/*Array immutability (and kon kon methods gular array immutable)kotha bolbo*/

/*
push() - Insert an element at the end of the Array
unShift() - Insert an element at the beginning of the array 
pop() - Remove an element from the end of the array 
shift() - Remove an element from the beginning of the array 
slice() - Create a shallow copy of an array 
Array.isArray() - Determine if a value is an array 
length- Determine the size of an array

*/




// 1st method=concat()method=this concat array is used to- join or marge two or more arrays together//
let first = [1, 2, 3, 4];
let second = [5, 6, 7, 8];
let marge = second.concat(first)
console.log(marge)
let firstName = ['ami', 'karim', 'abdullah'];
let secondName = ['tumi', 'chanMia', 'boroLooks'];
let bothName = secondName.concat(firstName);
console.log(bothName);
let thirdName = ['apni', 'kothakar', 'bongerLat', 'kuddusMia?'];
let bothNameAgain = firstName.concat(secondName, thirdName);
console.log(bothNameAgain);







/* 2ND JOIN() METHOD -HE IS A IMUTABLE METHOD CAUSE HE IS NOT CHANGE MAIN ARRAY */
// ITS RETURN A STRING ALWAYS 
const nameing_array = ['jabbar', 'karim', 'kuddusMia', 'atahar', 'mutaleb'];
const joined = nameing_array.join();
console.log(joined)
const joinedAgain = nameing_array.join('->');
console.log(joinedAgain)

const empty_separator = [];
const separator_joined = empty_separator.join();
console.log(separator_joined);
const separator_joined_again = empty_separator.join('=')
console.log(separator_joined_again);





/*Array Another Method-> fill()method */
const colors = ['red', 'blue', 'green', 'yellow'];
const makeover = colors.fill('pink');
console.log(makeover)
const moreColors = ['skyblue', 'yellowGreen', 'syan', 'white', 'gray'];
/*fill(replace=that means value , source=that means start Point , target=that means end )*/
// fill(value='pink',start=0->its indexe , end=4 that means length)
const colorMakeover = moreColors.fill('blank', 2, 4);
console.log(colorMakeover)
const newElement = (colors, pink, red, oil) => {
   return (colors, pink, red, oil);
}
 

/*ARRAY-METHOD- INCLUDES()METHOD=THAT MEANS EKTA PARTICULAR VALUE ARRAY ER MODDE INCLUDE ASA KINA SHETA CHECK KORAR JONNO*/
let names = ['kuddusMia', 'chanmia', 'shoponMia', 'rahimMia', 'idrisMia'];
let attends = names.includes('shoponMia');
console.log(attends)
let attendAgain = names.includes('chanMia');
console.log(attendAgain)
let present = names.includes('toss');
console.log(present)

 
/*Array Another Method =indexof ()*/
// eita moloto array er modde protita element er index number findout kore
// supose 2ta element jodi same thake tahole indexof aways 1st element k show korbe 
let sameElement = ['karim', 'chanMia', 'chanMia', 'kuddusMia'];
let findOut = sameElement.indexOf('chanMia')
console.log(findOut);

let moreElement = ['abdur', 'abdullah', 'karim', 'chanMia'];
let finding = moreElement.indexOf('abdullah');
console.log(finding);

let anotherFinding = moreElement.indexOf('chanMia')
console.log(anotherFinding);



/*Another Method was=last-indexof()*/
// supose 2ta element jodi same thake tahole ei method always 2nd element k show kore 
let lotsElement = ['korimon', 'rohimon', 'chanBanu', 'chanBanu', 'kodBanu'];
let findHim = lotsElement.lastIndexOf('chanBanu');
console.log(findHim);
let moreFindHim = lotsElement.lastIndexOf('korimon');
console.log(moreFindHim);
let moreFindHims = lotsElement.lastIndexOf('kodBanu');
console.log(moreFindHims);



/*Array Another Method= reverse()method=its meutable method*/
// ei method array somosto element k reverse kore fele mane last element theke samner dike chole ase 
const reverseElement = ['tom', 'jon', 'bruce', 'sina', 'mina', 'denver'];
const reverse = reverseElement.reverse();
console.log(reverse)
 
 

/*Another Most importent method was= sort()Method and its mutable method */
const allNames = [
   'farukMia',
   'chanMia',
   'dolaMia',
   'abdulMia',
   'basarMia',
   'ekramMia'
];
 
const sortingName = allNames.sort();
console.log(sortingName)
console.log(sortingName === allNames)

// use comparator function for example of sorting 
// let a = 10;
// let b = 5;
function sortingNames(a=10,b=5) {
   if (a > b) {
      return -1;
   }
   if (a<b) {
      return 1;
   } else {
      return 0
   }
}
console.log(sortingNames());

let smallNumber = 10;
let bigNumber = 20;
function numbers() {
   return smallNumber === bigNumber ? 0 : smallNumber > bigNumber ? -1 : 1;
}
console.log(numbers())

let c = 100;
let d = 200;
function done(c,d) {
   if (c>d) {  
      return -1;
   }
   if (c<d) {
      return 1;
   }
   return 0
}
console.log(done(c, d))
// now this function use to sort()method 
const decending = allNames.sort(function sortingNames(a = 10, b = 5) {
   if (a > b) {
      return -1;
   }
   if (a < b) {
      return 1;
   } else {
      return 0
   }
});
console.log(decending)

function subject(bangla=100,english=200) {
   return bangla === english ? 0 : bangla > english ? -1 : 1;
}
console.log(subject())
const anotherDecending = allNames.sort(function subject(bangla = 100, english = 200) {
   return bangla === english ? 0 : bangla > english ? -1 : 1;
});
console.log(anotherDecending)

// array-number sorting 
let ages = [2, 1000, 10, 3, 23, 12, 30, 21];
let ageResult = ages.sort();
console.log(ageResult)
function menAge() {
   return k === m ? 0 : k > m ? -1 : 1;
}
let ageFind=ages.sort(function menAge(k,m) {
   return k === m ? 0 : k > m ? -1 : 1;
})
console.log(ageFind)
function allAges() {
   return n === o ? 0 : n > o ? 1 : -1;
}
let ageFinding=ages.sort(function allAges(n,o) {
   return n === o ? 0 : n > o ? 1 : -1;
})
console.log(ageFinding)
let otherAge=ages.sort(function (a,b) {
   return a - b;
})
console.log(otherAge)
let otherAges=ages.sort(function  (a,b) { 
   return b - a;
})
console.log(otherAges);



/*♟️👉🏽Now we talk Array complex Method= Array.splice()*/
// splice ekta array er element k delete kore abar new element insert korte pare and abar delete na korew new element insert korte pare 
const spliceing = ['alex', 'bob', 'kery'];
let elementsDeleted = spliceing.splice(0)
console.log(elementsDeleted)
console.log(spliceing);
let anotherSplice = [1, 2, 3, 4, 5];
let deleted = anotherSplice.splice(0);
console.log(anotherSplice);
console.log(deleted)

let fruits = ['apple', 'bannana', 'orange', 'pinapple'];
let adding = fruits.splice(4, 0, 'kukumbora');
console.log(adding);
console.log(fruits);



/*♟️✔️ Another Array Method- Array.at()method-eta array-er element gulak toola ana */
let junkFood = ['poori', 'singara', 'sandwich', 'somocha', 'belpoori', 'misti', 'chotpoti'];
let pickUp = junkFood.at(4);
console.log(pickUp);
console.log(junkFood);
let anotherPickup = junkFood.at(-3);
console.log(anotherPickup);
let anohterPickUps = junkFood.at(-7);
console.log(anohterPickUps);













 