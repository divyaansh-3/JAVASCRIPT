/* object orientation:- it is the perspective of looking the world around us as a collection of objects.
ways to create an object:-
1.) OBJECT LITERAL NOTATION (IMP)
2.)CLASSES(ES6+) (IMP)
3.)NEW OBJECT CONSTRUCTOR
4.)CONSTRUCTOR FUNCTION. (OLD WAY)

OBJECTS ARE BASICALLY KEY-VALUE PAIRS.
SYNTAX IS:- let a={};
key value pair is written inside the paranthesis and they are separated by commas.
even functions can be created inside the objects


*/
let car={
    name: "BMW",
    cost: 75.6,
    mileage:"10 kmpl",
    start : function(){
        console.log("car is starting");
    },
    stop : function(){
        console.log("car is stopping");
    },
    accelerate: function(){
        console.log("car is accelerating");
    }
};
console.log(car);
//here the object name variable stores the address which points to the object in the heap.(reference variable)
// all the non primitive data types are allocated memeory in the heap.
console.table([car.name,car.cost,car.mileage]);
car.start();
car.stop();
car.accelerate();
let a= car;
//here a is not another object it is just another reference to the original object to which car is pointing.

a.name ="innova";
console.log(a.name);
console.log(car.name);  
// objects can be passed as an argument to a function

let c1={
    name: "divyaansh",
    class: 12,
    roll_num : 58
};
function exmp(c){
    console.log(c);
}
exmp(c1);