/*let a=10;
let b=9;
function add(){
    let c;
    c=a+b;
    return c;;
}
 let d =add();
 console.log(d);

 */
function add(a,b){
    let c=a+b;
    console.log(c);
}
add(100,200);

/*
function add(){}  this is a function declaration
let add = function(a,b){} this is a function expression


arrow function == no function keyword
let add =(a,b) =>{
    }
    an arrow function starts with the paranthesis
    and it is stored in a variable
    console.log(add(a,b)

    another way of writing an arrow function is 
    let add =(a,b)=>a+b;

    IIFE
*/
(function(){
    console.log("i run immediatley");
})();

// another imp thing about functions is that they are very similar to objects and are considered as first class citizens

function subtract(a,b){
    console.log(Math.abs(a-b));
}

// a function has two properties , one is its name and the other is its length.

console.log(subtract.name);  //subtract
console.log(subtract.length); //2  

//functions can be passed as an argument to other functions.

function exmp(fun){   // the function to which another function is passed as a parameter is the higher order function.
    fun(100,200);
}
function add(a,b){  // this is called call back function.
    console.log(a+b);
}
exmp(add);

