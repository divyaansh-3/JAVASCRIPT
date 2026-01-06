// as we know a function can be passed as an argument to another function:-
// so one function is the one which is passed while the other is the one to which the function is passed:-
// function fun1(){}   function fun2(fun1){}
// so in this case fun1 is passed as a parameter to fun2, so fun2 is called the higher priority function
// while fun1 is called the call back function.

// real life uses of callback function is:-
// array operations, event handling, asynchronous programming and http requests
function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function mul(a,b){
    return a*b;
}
function div(a,b){
    return a*b;
}
function calci(a,b,callback){
    return callback(a,b);
}
console.log(calci(10,20,mul));
console.log(calci(10,20,add));
console.log(calci(10,20,sub));
console.log(calci(10,20,div));