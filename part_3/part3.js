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

