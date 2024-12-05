//                                             //SecondLargest Value in array
// const intArray = [1,2,8,9,4];
// const largestValue = (arr) =>{
//     firstLargestValue = Math.max(...arr)
//     index=arr.indexOf(firstLargestValue)
//     // return(firstLargestValue)
//     arr.splice(index,1)
//     secondLargestValue = Math.max(...arr)
//     return(secondLargestValue)
// }
// console.log(largestValue(intArray));

//                                             //Missing Element in a Array

// let arr = [1,2,5,10];
// Count = 10;
// Output=[];

// for(let i = 0; i <= Count; i++){
//     arr.includes(i)?Output.push(i):"";
// }
// console.log(arr);

// let arr = [1, 2, 5, 6];
// let Count = 10;
// let Output = [];

// for (let i = 1; i <= Count; i++) {
//     let flag = false;

//     for (let j = 0; j < arr.length; j++) {
//         if (arr[j] === i) {
//             flag = true;
//             break;
//         }
//     }
//     if (!flag) {
//         Output.push(i);
//     }
// }
// console.log(Output);

// let a = 15;
// let b = 25;

// a = a + b;
// b = a - b;
// a = a - b;

// console.log("A is :",a);
// console.log("B is :",b);

// let int = 153;
// let sum = 0;
// let temp = int;

// while(temp > 0){
//     let digit = temp%10;
//     sum += digit * digit * digit;
//     temp = Math.floor(temp/10);
// }
// if(sum == int){
//     console.log("ArmStrong");    
// }
// else{
//     console.log("Not ArmStrong");
// }

let arr = [2,1,10];
let first,second,third,sum,diff;

for(let i = 0; i < arr.length; i++){
    first = arr[i] 
    second = arr[i-1];

    
}