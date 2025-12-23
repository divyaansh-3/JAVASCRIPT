//there are three types of non primitive or reference data types
// array, objects, functions
//the typeof all these data types is function and the datatype of function in object function



const heroes=["shaktiman","naagraj","doga"]; //array
let obj={
    name: "divyaansh",           //object declared inside curly brackets and elements separated by comma
    age: 21,

}
console.log(obj)
const myfunction= function(){          //function declaration and it can be stored in a variable.
    console.log("hello world"); 
}
myfunction();
console.log(heroes)
console.log(typeof heroes);
console.log(typeof obj);
console.log(typeof myfunction);



//-----------------------------------------

//stack(primitive)  heap(non-primitive)


let myname = "divyaansh"
let anothername = myname  // a copy of the value stored inside the variable myname will be shared to anothername, not the reference to it
                           // so a change in anothername will not cause a change in the original variable
anothername="parmar"
console.log(anothername)
console.log(myname);  


let userone={
    email: "vjfwg@gmail.com",
    upiid: "4342@ybl"
}
let usertwo =userone  // obejcts are non primitive data types , so there are allocated a memeory in the heap and a direct reference of the variable is given to usertwo.
                   // so a change in usertwo will cause a change in userone as well because both have the reference to the same location.
usertwo.email= "sjfgiwe@yahho.com";
console.log(userone.email)
console.log(usertwo.email)