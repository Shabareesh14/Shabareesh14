//-------------------guessing code-------------------
var secretNo = Math.floor(Math.random() * 100);
var count = 1;
var message = '';
function guessNumber() {
    var userData = Number(document.getElementById("number").value);
    for (; secretNo != userData;) {
        if (secretNo > userData) {
            message = "Guess is Low";
        }
        else {
            message = "Guess is High";
        }
        document.getElementById("result").innerHTML = message;
        document.getElementById("cresult").innerHTML = count++;

        // userData = Number("Again Enter the guess");
        // document.getElementById("number").innerHTML = "message";
        return;
    }
    document.getElementById("result").innerHTML = " Yes,You Won the Game";
    document.getElementById("cresult").innerHTML = count + "Attempts";
}

//-----------------Natural Number--------------------
// var n = 5, sum = 0;

// for (i = 1; i <= n; i++) {
//     sum = sum + i;
//     console.log(i);
// }
// console.log("The sum of the digit is : " + sum);


// //-----------------Factorial Number------------------
// var n = 11, sum = 1;

// for (i = 1; i <= n; i++) {
//     sum = sum * i;
//     console.log(i);
// }
// console.log("The sum of the digit is : " + sum);

// //----------vowels and constents-----------------------
// const count = (str) => {
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     let vowelsNum = 0;
//     let consonantNum = 0;
//     str.split('').forEach((c) => {
//         if (vowels.includes(c)) {
//             vowelsNum += 1
//         }
//         else {
//             consonantNum += 1
//         }
//     })
//     return { vowelsNum, consonantNum }
// }
// console.log(count('shabareesh'))













// var secretNo=Math.floor(Math.random()*100);
// var userData=prompt("Enter the Guess:");
// var count = 1;

// for(;userData!=secretNo;){
//     if(userData>secretNo){
//         console.log("Guess is high");
//     }
//     else{
//         console.log("Guess is low");
//     }
//     console.log(count++);
//     userData=prompt("Again Enter the Guess:");
// }
// console.log("Yes,you won the Game");