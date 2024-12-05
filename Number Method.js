// //----------------------------------------------------NUMBERS METHODS-------------------------------------------------//

// //------------------------Number To String()--------------------------//

// let a1 = 123;
// let x = a1.toString();  
// console.log(a1, x);

// //--------------------------Exponential()----------------------------//

// let a=9.656;
// let x1=a.toExponential(2);
// let x2=a.toExponential(4);
// let x3=a.toExponential(6);
// console.log(a,x1,x2,x3);

// //-------------------------Fixed()---------------------------//

// let b=6.311;
// let b1=b.toFixed(0);
// let b2=b.toFixed(2);
// let b3=b.toFixed(4);
// let b4=b.toFixed(6);
// console.log(b,b1,b2,b3,b4);

// //------------------------Precision()--------------------------//

// let c=8.674;
// let c1=c.toPrecision();
// let c2=c.toPrecision(2);

 
// let c3=c.toPrecision(4);
// let c4=c.toPrecision(6);
// console.log(c,c1,c2,c3,c4);

// //------------------------ValueOf()--------------------------//

// let d=123;
// let d1=d.valueOf();
// let d2=(51*2).valueOf();
// console.log(d,d1,d2);

// //------------------------------------------VARIABLES TO  NUMBERS--------------------------------------------------//

// //------------------------Numbers()--------------------------//

// let A=Number(true)+","+
// Number(false)+","+
// Number(10)+","+
// Number(10.33)+","+
// Number("Kalai")+","+
// Number(  10)+","+
// Number(10  );
// console.log(A);

// //--------------------ParseInt()-------------------------//

// let B=parseInt("10")+","+
// parseInt(-10.33)+","+
// parseInt("12 10 20")+","+
// parseInt("years 30");
// console.log(B);

// //---------------------ParseFloat()----------------------//

// let C=parseFloat(10)+","+
// parseFloat(-10.33)+","+
// parseFloat("12 10 20")+","+
// parseFloat("years 30")+","+
// parseFloat("60 years");
// console.log(C);

// //---------------------------------------------OBJECT METHODS----------------------------------------------//

// //------------------------Number_isInteger()----------------------//

// let int=Number.isInteger(10)+","+
// Number.isInteger(10.33);
// console.log(int);

// //------------------Number_isSafeInteger()----------------------//

// let sInt=Number.isSafeInteger(15)+","+
// Number.isSafeInteger(12345678901234567890);
// console.log(sInt);

// //------------------------Number.parseFloat()--------------------------//

// let pf=Number.parseFloat(10)+","+
// Number.parseFloat(-10.33)+","+
// Number.parseFloat("12 10 20")+","+
// Number.parseFloat("years 30")+","+
// Number.parseFloat("60 years");
// console.log(pf); 

// //-------------------------Number.parseInt()-----------------------//

// let pI=Number.parseInt("10")+","+
// Number.parseInt(-10.33)+","+
// Number.parseInt("12 10 20")+","+
// Number.parseInt("years 30");
// console.log(pI);

// var a = "Tubi";
// var b="";

// for(let i = a.length-1; i >= 0; i--){
//     b += a[i];
// }
//     if(a.toLowerCase()=== b.toLowerCase()){
//         console.log("Palindrome")
//     }
//     else{
//         console.log("Not a Palindrome")
//     }
//     console.log(b)

// var char = "Shabareesh";
// var str = "e";
// var count = 0;

// for(let i = 0; i < char.length; i++){
//     if(char[i] == str){
//         count++;
//     }
// }
// console.log(count);

// var arr = [1,2,3,4,5]

// console.log(arr.reverse());

var arr = [1,0,2,1,0,2]

var a=0,b=0,c=0;

for(let i = 0; i < arr.length; i++){
    if(arr[i] == 0) return 0;
    else if(arr[i] == 1) return 0;
    else return 1;
}

let j = 0;
while(a<j){
    if()
}