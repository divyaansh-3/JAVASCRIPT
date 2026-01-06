/* scope is the region in the code where a variable is accessible.
there are various scopes:-
global scope:- a variable declared on the top of the program outside any loops and conditonal statements 
and outside any function are accessible anywhere in the code. SAME RESULT FOR BOTH VAR AND LET.
*/
let a=100;
console.log(a);
function fun(){
console.log(a);
}
fun();
/*
after hoisting the program will look  like this: -
let a;
function fun(){
console.log(a);
}
a=100;
console.log(a);
fun();

the conclusion is since a is declared on the top it is accessible by anyone inside the code.



2.)function scope:- a variable declared  inside a function is accessible only inside the function.SAME RESULT FOR BOTH VAR AND LET.
*/
function fun1(){
    let b=100;
    console.log(b);

}
fun1();
//console.log(b);  // error  reference error


/* 3.) BLOCK SCOPE:-
A BLOCK IS THE REGION BETWEEN THE PARANTHESIS OF A CONDITIONAL STATEMENT OR A LOOP OR A FUNCTION.
A VARIABLE DECLARED INSIDE A BLOCK IS ACCESSIBLE ONLY WITHIN THE BLOCK NOT OUTSIDE OF IT.
THE RESULT FOR THIS CASE IS DIFFERENT FOR VAR AND LET.
IF LET IS USED INISIDE A BLOCK FOR VARIABLE DECLARATION THEN ITS SCOPE IS ONLY WITHIN THE BLOCK;
BUT IF VAR IS USED IT BREACHES ITS BLOCK AND HOISTING TAKES IT TO THE TOP OF THE GLOBAL SCOPE.
*/
let temp=30;
if(temp>25){
    var coolingtemp= temp-25;
    console.log(coolingtemp);
}
else{
    var heatingtemp = 25- temp;
    console.log(heatingtemp);
}
console.log(coolingtemp);  //5
console.log(heatingtemp);  //undefined

//points to remeber:-
//the concept of scope is same for var and let in the case of global and function scope.
//but in the case of block scope, let follows the ides of scope but var breaches the block scope and becomes a part of the NEXT AVAILABLE OUTER scope.
//THAT IS IF A BLOCK IS A PART OF A FUNCTION THEN A VARIABLE DECLARED INSIDE THE BLOCK USING VAR KEYWORD WILL BREACH THE BLOCK SCOPE AND MOVE TO THE FUNCTION SCOPE NOT GLOBAL SCOPE.


