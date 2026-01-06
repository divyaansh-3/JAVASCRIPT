// a function is treaeted as a first class citizen in js.
// a function return a nested function as well.


//note:- objects are created in the heap and the memory is allocated to a object as long as something is pointing to that object.
// once all the references to that object is deleted, then the object itself is treated as a garbage value and deallocated, same in js, python or c++.


function fun1(){
    console.log("inside fun1()");
    function fun2(){
        console.log("inside fun2()");
    }
    return fun2;
}
exmp=fun1();
exmp();


// in this program fun1 is returning fun2, so when we are calling fun1() we need to variable to store what is being returned.
//but fun2 is itself a function, so basically it is containing the address which is pointing to the fun2 object.
//the same address is stored in exmp, so now exmp is also a reference to fun2();
//hence we can call exmp();



//"lexical scope":- it is such a scope/or a part in the memory which will continue to exist in teh memory even if the function finishes execution.

function outerFunction(){
    console.log("outer function started execution");
    let outerVar= 10;
    
    function innerFunction(){
        console.log("inner function started execution");
        console.log("outer variable is: ",outerVar);
        console.log("inner funtion finished execution");
    }
    console.log("outer function finished execution");
    return innerFunction;
}
exam= outerFunction();
exam();

// so in this case the execution of the outerfunction is completed first and hence its execution context is deleted which will result in the deletion of the variable of outervar
//but a inner function has accessibility to its outer function,and hence the inner function forms a cloure around the outer function variables and itself;
//so even if the outer function is executed and returned, the variables of the outer function present in the lexical scope doesnot get deleted;



//some real life uses of closures are:-
// : data encapsulation
// : memoization
// :event handling(dom)