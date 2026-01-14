let ar = [
    [25,30,22],
    [23,51,90],
    [78,98,66]
];

/* so basically when an array inside an array is created then 
the outer array is divided into the number of arrays inside the array
then separate block of memory is allocated to each inner array and the corresponding addresses to those arrays is stored in the partitions.
*/
for ( i=0;i<ar.length;i++){
    for(j=0;j<ar[i].length;j++){
        console.log(ar[i][j]);
    }
}
let arr = [
    [
        [10,20],[20,30]
    ],
    [
        [30,40],[50,60]
    ]
];

for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[i].length;j++){
        for(let k=0;k<arr[i][j].length;k++){
            console.log(arr[i][j][k]);
        }
    }
}

// so what happens here is, since it is a three dimensional array, the first iterator i cretaes two blocks
// and store a reference of the jth elements, then the jth is still divided into two and they store the refernce to the kth elements.
