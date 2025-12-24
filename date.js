//JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).
let mydate= new Date()
console.log(mydate); // difficult to understand 
//to simplify the date we use :-
console.log(mydate.toDateString()); /// specifies only date
console.log(mydate.toString())  // specifies date and time
console.log(mydate.toLocaleString());
console.log(mydate.toLocaleDateString());
console.log(typeof mydate);  // object

// string specifies date and time while datestring specifies only date
// localstring specifies in numberic format while datestring specific in word

// we can create our own date.
//format is (year,month,date)
let mycreateddate= new Date(2023,0,3);  //in js months start from 0;
console.log(mycreateddate.toString());
let dates = new Date(2023,12,4);
console.log(dates.toString()); //if month is greater than 11 then it will increase the year by 1 and  month will begin from 0.
// 4 jan 2024
// we can take time as an input with date.
let date1= new Date(2024,4,9,5,4)
console.log(date1.toString());

// further we can specify the date format we want 
//like mm-dd-yyyy or yyyy-mm-dd 
//but when we specify the format of date then in that case months begin from 1
let date2= new Date("2023-01-14")
console.log(date2.toLocaleDateString());
let date3= new Date("01-17-2024");
console.log(date3.toLocaleDateString());
