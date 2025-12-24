/* DATA TYPES IN JS
on the basis of how data is stored in the memory and the way it is accessed, data is divided into two types:
  1: primitive data type 2: non primitive(reference)
  types of primitve data types:-
  called using value

1.)number => 2 to power 53
bigint
2.)string=>""
3.)boolean=> true/false
4.)null =>standalone value
null is an object..
5.)undefined => value not assigned
6.)symbol=>unique

types of non primitive data types(called by reference):
array
function
object
TO STORE A NUMBER AS BIG INT WE SHOULD ADD A SUFFIX " n " at the end of the numeber .

*/ 
let age = 18
let isLoggedIn= false
let state =null
let score =33
let no = "33"
let mark= "33abc"
const id = Symbol('123')
const anotherID=Symbol('123')
console.log(id==anotherID); //false
console.log(typeof undefined);   //undefined
console.log(typeof(null));     //object
console.log(typeof score); // number
console.log(typeof no);   //string

//data type conversion

let valueinNumber = Boolean(no);
let value = Number(mark); //this is also be converted to number data type..
//conversion of a string to a number 
let abc = "100abc";
let bcd=Number(abc);
console.log(bcd); // NaN
let def = parseInt(abc);
console.log(def); //123


// while using parseint if at any place an alphabet is encountered, it will exit.
//it will continue to look forward if numeric is encountered.
//space at starting can be ignored
//but if space is encountered between numeric values it cannot be ignored, it will exit the program.

// conversion of numbers to boolean
// if the number is 0, NULL, Nan , then only it is false
//all non zero it is true.
console.log(typeof valueinNumber);
console.log( valueinNumber); //33

console.log( value); //Nan=> (not a number)
// "33"=>33
//"33abc"=>NaN
//true=1; false=0;
//1=>true
//"wkgwi"=>NaN
//converesion of string to boolean:-
// if string is empty ("") :-fasle
// a empty string with a space only is also true.
//if string is full ("hkfg") :-true 
// numbers can also be converted into strings. 
// ************operations************
// a+b,a-b,a*b,a/b,a%b
//string operations:- string concatenation
                   //str3= str1+ str2
console.log(1+2);  //3
console.log(1+"2");  //12
console.log("1"+ "2");    //12
console.log("1"+2);  //12
console.log("1"+2+2);   //122
console.log(1+2+"2");  //32
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}` );
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;


console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
//comparison should be done between two variables of same data type 
console.log(null>0); //null is converted to a number before comparing.
console.log(null==0);//equality check does not convert null to a number.
console.log(null>=0);
console.log(undefined==0);
console.log(undefined>0);
console.log(undefined<0);
console.log(null==undefined); // null is only equal to undefiend.
  // conclusion:- null is converted to 0 when these relational operators are present
  // (< , > ,>= , <= )
  //when == is used null is not converted to 0
  // in equality checks (==) , null follows special rules and only equals "undefined";



  // strict check ( ===)
  // it checks both value and also its data type

  console.log("2" == 2);  // true
  console.log("2"===2);    //false because first one is string and second is number
  