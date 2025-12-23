//string concatenation can be done using + sign but it is not advisable in today's time.
//rather use ` `sign , as it provides placeholders whose valuees can be filled at the specified positions.
const name = "divyaansh"
const repocount=35;
console.log(`my name is ${name} and my repocount is ${repocount}`);
//another way of declaring a string is :-
const gamename= new String('parmar')
//this method of declaration provides many operations and methods to be used on a string
//also through this method , string is stored in index form, 
console.log(gamename[0]);//p
console.log("parmar"[2]);//r
console.log(gamename.length) //6
console.log(gamename.toUpperCase()); //PARMAR
console.log(gamename.charAt(5)); // this method is used to print the character at a particular index
console.log(gamename.indexOf('t'));// this method will tell us what character is present at a given index.
// if character is not present index returned will be -1.


const newstring= gamename.substring(0,4); // the characters from index start to end-1 will be stored as a subarray in the variable
console.log(newstring);  //parm

//another method is slicing
//in slicing we can use negative satrt value but not in substring method

//in slice if negative index is given that does not mean it print the string in reverse direction
//instead it will first convert the index into posiitve
// (-5,3) => the starting index willl be length-index i.e, 6-5=1
//so index become(1,3);
//if the starting index is greater than the lenght of the string , then the output will be an empty string "";
const nstring = gamename.slice(-5,3);
console.log(nstring);


const newstringone="    hitesh  ";
console.log(newstringone);
console.log(newstringone.trim()); // this will remove all the extra spaces


const url ="https://hitesh.com/hitesh%20choudary"
console.log(url.replace("%20","-")); //used for replacing certain elements of the string

console.log(url.includes('hitesh')); //returns true or false if the entered element is present in the string


const name2= new String("divyaansh-parmar-com");
console.log(name2.split('-')); //this will split the string into an array .
console.log(name2.split(',')); //if we split with something which is not available in the string then the string will be converted to an array of the whole string as a single element.