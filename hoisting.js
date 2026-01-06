console.log(a);
var a=100;
// this will give output as undefined

console.log(b);
let b=20;
// this will show error with name reference error.
//that means a variable cannot be accessed before initialisation.

// concept of hoisting is applicable:-
//hoisting is the process of looking for all the declarations of variables as well as of functions and moving it to the top.
//if declaration and initialisation is done at the same time, then js divides it into two different steps of first declaration and then initialisation.

// example:- console.log(a);
// var a=100;
// console.log(a);

// in this case the variable a is initialised and declared at the same line.
// so the interpreter inside the stack in the creation phase will take the variable declaration only to the top
// so our code looks like:-
/*
 creation phase :- var a;
 execution phase:- console.log(a); a=100; console.log(a);
 next important thing is that if var is used then at the time of declaration if the value to it is
 not initialised then an undefined value is assigned to it.
 

 now if let keyword is used instead of var then js wont initialise any undefined value to it. that is the key difference between the uses of var and let.


  another fancy term is "TDZ" :- TEMPORAL DEAD ZONE
it is the region between the declaration of the variable to its initialisation.

when var keyword is used, there is no TDZ.
but in case of let keyword, there is a TDZ.
*/
greet();
function greet(){
    console.log("hello!");
}
// in other languages which dont support hoisting this statement causes an error
//but in js due to hoisting the function declaration is moved to the top of the program.