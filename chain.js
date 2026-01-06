let username= " sarah";
let userRole ="user";
(function(){
    let access= false;
    if(userRole=="admin"){
        let welcomemsg = `hello ${username}! you have admin privileges `;
        access=true;
        console.log(welcomemsg);
    }
    else{
        console.log(`HAS ACCESS: ${access}`);
    }


})();
// so in the stack whenever a program is executed, a global scope chain is created. 
//all the variables outside any function or block are initialised in the global scope chain including the functions
// there are two more scope chains that are function scope chain and block scope chain.
//a global scope chain is acessible to all the functions and block in the program.
//but a block or funtion scope chain is not accessible outside that function or block.
