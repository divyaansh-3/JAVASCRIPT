/*
types of loop in js:-
for loop
while loop
do while loop
for..in loop
for..of loop
*/
/*let i;
let j;

let k;
    for(k=0;k<5;k++){
        i="";
    for(j=0;j<5;j++ ){
        
        i= i+"*"
    }
    console.log(i);
}
    
let i;
let j;

for(i=0;i<5;i++){
    let row="";
    for(j=0;j<5;j++){
        if(i==0 || i==4 || j==0 || j==4){
            row=row+"*";
        }
        else{
            row=row+" ";
        }
    }
    console.log(row);
}
    */
   //next pattern is:-
   
   let i;
   let j;
   let n=20;
   
   for(i=0;i<n;i++){
        let row="";
        for(j=0;j<n;j++){
            if(i==0 || j==0 || i== n-1 ||j==n-1 || j==Math.floor(n/2) || i==Math.floor(n/2) || i==j || i+j == n-1 || i+j == Math.floor(n/2) || Math.abs(i-j) == Math.floor(n/2) || i+j == (n-1)+Math.floor(n/2)){
                row =row +"*";
            }
            else{
                row=row+" ";
            }
        }
        console.log(row);
        

   }
