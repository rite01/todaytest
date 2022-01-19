// console.log("sum of array")

/* ------------------------------------------------1st------------------------------------------

Write a program to display the sum of n natural numbers.
arr = [1,2,3,4,5,6,7,8,9,10]
output : 55

*/

// var arr = [10,20,30,40,50,55,210];
// var sum = 0;

// for(let i=0; i<arr.length; i++){
//     sum += arr[i];
// }
// console.log(sum);  


/* ------------------------------------------------2nd-----------------------------------------

Add 9,10 at the end.	
que : array = [1, 2, 3, 4, 5, 6, 7, 8]
output = [1, 2, 3, 4, 5, 6, 7, 8,9, 10]

*/


// const arr = [1,2,3,4,5,6,7,8];
// arr.push(9,10);
// console.log(arr)





/*-------------------------------------------------3rd--------------------------------------------------

Add 1,2,3 at the start.
que : array = [4, 5, 6, 7, 8];
output : [1, 2, 3, 4, 5, 6, 7, 8]


*/


// let arr = [4,5,6,7,8,9];
// arr.unshift(1,2,3);
// console.log(add)


/*----------------------------------------------------4th-----------------------------------------------------

Delete specific item from an array
delete 4 from an array.
que : array = [1, 2, 3, 4, 5];
output [1, 2, 3, 5]
	    

*/


// let arr = [4,5,6,7,8,9];
// arr.remove(3);
// console.log(arr)



// const array = [1,2,3,4,5,6];
// const index = array.indexOf(5);

// if (index > -1) {
//   array.splice(4,1);
// }
// console.log(array); 


/*--------------------------------------------------------------------5th---------------------------------------------

Find index of specific value.
find index of 3
que : array = [1, 2, 3, 4, 5];
output : 2

*/

// const array = [1,2,3,4,5,6];
// const index = array.indexOf(4);
// console.log(index); 



/*--------------------------------------------------------------------6th-----------------------------------------------

Filter out values from an array which is greater than 4  
que : array = [1, 2, 3, 4, 5, 6, 7, 8];
output : [5,6,7,8]

*/


// const num1 = [1,2,3,4,5,6,7,8,9,10];
// const result = num1.filter(x => x >= 5);
// const result = num1.map(x => x*x);

// function checkNum(num){
//     return num >= 5
// }
// console.log(result)



/*--------------------------------------------------------------------7th-----------------------------------------------

Filter out values from an array is greater than 3 and less than 8.
que : [1, 2, 3, 4, 5, 6, 7, 8,9, 10];
output : [4,5,6,7]

*/


// const num2 = [1,2,3,4,5,6,7,8,9,10];
// const result = num2.filter(x => x < 5);
// const result = num2.filter(lessThen);

// function lessThen(num){
//     return num < 5;
// }

// console.log(result)


/*--------------------------------------------------------------8th

Find a value which exist in array or not.
if value in present in array then return "TRUE" otherwise return "FALSE";   
if find 5 than return "TRUE";
if find 12 than return "FALSE";
que : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

*/


// const num3 = [1,2,3,4,5,6,7,8,9];
// const result = num3.includes(50) using inbuild function
// console.log(result)


// var fruits_arr = [1,2,3,4,5,6,7,8,9,10];
// function checkValue(value, arr) {
//     var status = 'False';
//     for (var i = 0; i < arr.length; i++) {
//         var name = arr[i];
//         if (name == value) {
//             status = 'True';
//             break;
//         }
//     }
//     return status;
// }

// console.log('status : ' + checkValue(1, fruits_arr));


/*
Merger two arrays.
arr1 = [1,2,3,4,5];
arr2 = [6,7,8,9];
output [1,2,3,4,5,6,7,8,9]
*/

// let arr1 = [1,2,3]
// let arr2 = [4,5,6]

// let result = arr1.concat(arr2)

// console.log(arr1)
// console.log(result)

//------------------------------------------------------------COMPLETE------------------------------------------------------------


