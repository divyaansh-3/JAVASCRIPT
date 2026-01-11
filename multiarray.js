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
//fsbje