//shallow copy vs deep copy
//spread operator[... nameof array]this is a syntax to make a copy of the existing array

let ar1 =[10,20,30,40];
let ar2 =[... ar1]; // this is the way of creating a shallow copy of the existing array.
console.log(ar2);
//SO ar2 will have a separate address, changes in either of the arrays is independent of each other.

ar1.push(33);
console.log(ar1);
console.log(ar2);

//another way of creating a copy is using the slice method.
ar3=[5,7,8,9,10];
ar4 = ar3.slice();
console.log(ar4);

ar3.push(99);
console.log(ar3);
//the slice method also creates a shallow copy

let ar5= [ [40,50],[50,70]];
let ar6= ar5.slice();
ar5[1].push(99); //so basically it adds 99 in the second array 
console.log(ar5);
console.log(ar6);//ar6 also gets updated becoz both have the same reference to the arrays.