//arrays are also objects and first class citizens.
// things to keep in mind:-
// in js array can store different data types under one name which is not possible in c
//and we can print the whole array in a horizontal table format by just writing the array name.
// arrays in js are dynamic arrays, there size is variable.


/*JavaScript arrays are NOT real arrays.
They are:

Objects

Backed by dynamic data structures internally

Implemented by the JS engine (V8, SpiderMonkey, etc.)
So when you say:

“JS arrays are dynamic”

What actually happens is:

The engine resizes internally

Reallocates memory

Copies elements when needed

👉 Same cost exists, but hidden from you
*/ 
let arr = ["rohit",56.3,true,"shilipa","soms","divya"];
console.log(arr);
console.table(arr);

//another way of array declaration

let a = new Array(5);
a[0]=10;
a[1]="uwdyjcg";
a[2]=56.6;
a[3]="ehkc";
 
//then indiviually initialise the index of array
console.log(a);

//there are different types of methods for array manipulation and operation
// push(),pop(),shift(),unshift(),map(),filter(),reduce().

a.push(100);// add elements in the array at the end.


a.unshift(5);// add element at the starting.
let x= a.pop();//removes last element and returns the element which is removed.
let y= a.shift();//removes element from the front and returns it.
console.log(a);

// conclusion:- push( )used to add element in the array at the end.
//unshift():- add elements at beginning
//pop(): removes element from end and returns it
//shift():removes element from begin and returns it 
// to remove or add an element from a random index or to delete or add multiple elements from a starting point 
// we have a special method called splice(startindex, deletecount, items)
//startingindex from where we have to start deleting elements
//deletecount no of elements to be deleted starting from startindex
//it also returns the values deleted
//item i used to add the given value to the array at the given position.
let remove = a.splice(2,2);
console.log(a);
console.log(remove);
a.splice(2,0,98);
console.log(a);
// we can also delete the element at a given index and add a new element at its position simultaneously
a.splice(2,2,80,90);//replace elements starting from 2nd index by 80 and 90 respectively
console.log(a);

//another method is indexof(element):- returns the index where the element is present
//if not present returns -1;
//if the element has a duplicate indexof gives only the index of its first occurance
// for getting the last occurance we have another method:- lastindexof();

//includes():- returns true or false if the element is present inside the array which is passed as a parameter.

/*Function

A function is a block of code that performs a task and is not associated with any object or class instance.

🔹 Method

A method is a function that is associated with a class or object and typically operates on its data. */

// there are some special in built methods of array which use callback functions:-
// sort,map,filter,findindex,reduce,some,every,find

//map

let numbers =[1,4,9,16];
let result = numbers.map(x=> Math.sqrt(x));//using arrow functions.
/*can also be written as:-
function mapping(x){
return Math.sqrt(x);
}
let result = numbers.map(mapping);
 */
console.log(numbers);
console.log(result);  

//filter method returns a new by filtering the previous array

let age=[23,4,5,67,89];
let res= age.filter(x=> (x>18)?true:false);
console.log(age);
console.log(res);

//reduce method wont return a new array rather reduce the whole array into a single value and return it as output
let num=[];

let ans= num.length==0?0:num.reduce((total,x)=> total*x ,1)//total contains the sum and o is initial value of total;
console.log(ans);

//some method returns true or false 
let score=[85,72,90,67];
let hasgradeA= score.some((x)=>x>85);//even if one of the elements in score i gretaer than 85 it will return true;
console.log(hasgradeA);

let hasGradeA=score.every((x)=>x>85);//returns true if all the elements are greater than 85 in the array.
console.log(hasGradeA);

//find and findindex

let res1= score.find((x)=> x>85);// returns the first element which satisfies the condition
console.log(res1);
let res2 =score.findIndex((x)=>x>85);// returns the index of the first element which satisfies the condition.
console.log(res2);
// sort
 let fruits= ["banana","apple","guava","pear"];
 console.log(fruits);
 console.log(fruits.sort());
