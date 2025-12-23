const val=400 // js automatically considers it as a number.
console.log(val);
const score= new Number(100) // explicitly defining the value to be a number
console.log(score);
console.log(typeof score);// object



console.log(score.toString().length); // three characters in 100.. ( 1, 0 ,0 )
console.log(typeof score)  //  still a number object.
console.log(score.toFixed(2)); //this metthod is used often . it will round off the number to the entered decimal places.
//output will be 100.00 
const other = 29.7889;
console.log(other.toPrecision(3));//29.8
//returns a string 
//while using it keep in mind that priority is given to the digits before precision
console.log(other.toPrecision(4));//29.79
const hundreds =163438427
//reading the number of zeroes is difficult
//so to simplify this a method is used 
//tolocalstring
console.log(hundreds.toLocaleString());
//this provides comma to the number which makes it readable
//but it gives comma in us format
//to convert it into indian standard give parameter as " en- IN"
console.log(hundreds.toLocaleString('en-IN'));



//--------------------maths-----------------//

//maths is a library which is inbuilt with js.


console.log(Math); // object [MATH]{}
console.log(Math.abs(-7)); //absolute value -> 7
console.log(Math.round(4.7));// 5
console.log(Math.ceil(4.1)); // if just greater than n then n+1;
console.log(Math.floor(4.9)); // no mtter how much gretaer than n it less than n+1 then n;
console.log(Math.max(4,6,6.4,8,9.4,9.6));
console.log(Math.min(5,9,0,-1));
console.log(Math.random()); //it gives a random value between 0 to 1.
// it is oftenly used 
//if we want our values to be between a certain range then we need to do some manipulatioms
 console.log(Math.random()*10); // but the number can be 0.0___ something then in that case the random no will still be in 0
 //to avoid that case we should add 1 
 console.log((Math.random()*10)+1);


 //to get the value in a certain range , we should define max and min
 const max =20
 const min=10
  /// to get a int value we can use math.floor
  // range is max-min and add 1 to avoid that 0 case.  and add min to get the number greater than min.
  console.log(Math.floor((Math.random()*(max-min+1))+min));