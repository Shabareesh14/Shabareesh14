// //--------------------------String Literals---------------------------------//

// let first_name = "Shabareesh";
// let age = "21";
// let city = "Tirunelveli";
// let Role = "CEO";

// let output = "";
// output = "<table border='1'><tr><th>Name</th><td>" + first_name + "</td></tr><tr><th>Age</th><td>" + age + "</td></tr><tr><th>Role</th><td>" + Role + "</td></tr><tr><th>City</th><td>" + city + "</td></tr></table>";

// output += "<hr><table border='1'>" +
//     "<tr><th>Name</th><td>" + first_name + "</td></tr>" +
//     "<tr><th>Age</th><td>" + age + "</td></tr>" +
//     "<tr><th>Role</th><td>" + Role + "</td></tr>" +
//     "<tr><th>City</th><td>" + city + "</td></tr>" +
//     "</table>";

// output += `<hr>
// <table border='1'>
// <tr><th>Name</th><td>${first_name}</td></tr>
// <tr><th>Age</th><td>${age}</td></tr>
// <tr><th>Role</th><td>${Role}</td></tr>
// <tr><th>City</th><td>${city}</td></tr>
// </table>;`
// document.body.innerHTML = output;

// //------------------------------------ARRAY----------------------------------------//

// let arr = [10, 20, 30, 40, 50]
// console.log(arr);
// console.table(arr);

// let b = new Array("Sabari", 21, true, { m1: 100, m2: 78, m3: 65 });
// console.table(b);

// //--------------------------------------ARRAY FOR-EACH------------------------------------------//
// const number=[1,2,3,4,5,6,7,8,9,10];

// number.forEach((value)=>{
//     console.log(value);
// });

// //--------------------------------------ARRAY MAP------------------------------------------//
// const num=[1,2,3,4,5,6,7,8,9,10]

// let sqrt=num.map((value)=>{

//     return Math.sqrt(value).toFixed(2);
// });
// console.table(sqrt);

// //--------------------------------------ARRAY SLICE------------------------------------------//

// const n=[1,2,3,4,5,6,7,8,9,10]

// console.log(n);
// console.log("Slice:"+n.slice(3,6));


// // var a=Number(prompt("Enter a Value:"));
// // var markList=[];

// // for(i=0;i<a;i++){
// //     markList[i]=Number(prompt("Enter a Mark:"+(i+1)+":"))
// // }
// // console.log(markList);

// // var array = [3, 5, 7, 2, 800,70,40,30];
// // console.table(array);
// //     let max = array[0];
// //     let min = array[0];
// //     for (let i = 1; i < array.length; i++) {
// //         if (array[i] > max) {
// //             max = array[i]; 
// //         }
// //         else if(array[i]<min){
// //             min = array[i];
// //         }
// //     }

// // console.log(max);
// // console.log(min);

// // var a=Number(prompt("Enter a value:"));
// // var markList=[];

// // for(i=0;i<a;i++){
// //     markList[i]=Number(prompt("Enter a Mark "+(i+1)+":"));
// // }
// // console.log(markList);

// let max = markList[0];
// let min = markList[0];
// for(i=1;i<markList.length;i++){
//     if(markList[i]>max){
//         max = markList[i]  
//     }
//     else if(markList[i]<min){
//         min = markList[i]
//     }
// }
// console.log("Max Mark",max);
// console.log("Min Mark",min);

// //-------------------------------------------------ARRAY SPLICE-------------------------------------------//

// const n1=[1,2,3,4,5,6,7,8,9,10]

// console.log(n1);
// let removed_Element=n1.splice(2);
// console.log(removed_Element);
// console.log(n1);

// const n2=[1,2,3,4,5,6,7,8,9,10]
// console.log(n2);
// let remove_Element=n2.splice(2,2);
// console.log(remove_Element);
// console.log(n2);

// //-------------------------------------------------ARRAY SORT-------------------------------------------//

// const names=["Ravi","Kumar","Krish","Mahesh","Arun"];
// console.log(names);
// names.sort();
// console.log(names);

// const numbers=[1,10,100,70,90,2,3,40,560]
// console.log(numbers);
// numbers.sort();
// console.log(numbers);
// numbers.sort((a,b)=>{
//     return b-a;
// })
// console.log(numbers);

//-------------------------------------------------ARRAY FILL-------------------------------------------//

const a=[1,2,3,4,5,6]
console.log(a);
a.fill(20,3,4)
console.log(a);

//-------------------------------------------------ARRAY INCLUDES-------------------------------------------//

const products=["Pen","Pencil","Sharpner","Eraser","Box","Scale"]
console.log(products);
let result=products.includes("Pen");
console.log(result);
result=products.includes("Scale");
console.log(result);
result=products.includes(3,"Pen");
console.log(result);

//-------------------------------------------------ARRAY JOIN(SEPARATOR)-------------------------------------------//

const product=["Pen","Scale","Code","Eraser"]
console.log(product.join(" "));


//---------------------------------------------------ARRAY REVERSE------------------------------------------------//

const rev=[1,2,3,4,5]
console.log(rev);
rev.reverse()
console.log(rev);

//---------------------------Recall Using ARRAY LENGTH--------------------------//

const re={0:10,1:20,2:34,3:56,4:54,length:5}
console.log(re);

Array.prototype.reverse.call(re);
console.log(re);

//-----------------------------------------------------ARRAY PUSH---------------------------------------------------//

let n=[1,2,3,4,5]
console.log(n);

n.push(60);
console.log(n);

let user1=["Sam","Aari","Sanjay"]
let user2=["Rajesh","Mani","Kavi"]

user1.push(...user2);
console.log(user1);

user1.sort();
console.log(user1);
//-----------------------------------------------------ARRAY POP---------------------------------------------------//

const users=["Ravi","Sam","Muthu","Mugesh","Navani"]
console.log(users);
console.log(users.pop())
console.log(users);
console.log(users.pop())
console.log(users)

//-----------------------------------------------------ARRAY SHIFT---------------------------------------------------//

const userr=["kumar","michale","Moses","Sakthi"]
console.log(userr);
deletedElement=userr.shift();
console.log(deletedElement);
console.log(userr);


//-----------------------------------------------------ARRAY UNSHIFT---------------------------------------------------//

var user=["Madhan","Magesh","Varun","Arun"]
console.log(user);
user.unshift("Ajay");
console.log(user);


//-----------------------------------------------------ARRAY INDEXOF---------------------------------------------------//

let students=["Ajay","Madhan","Kasi","Mani","Kani"]
console.log(students);
let i = students.indexOf("Mani")
console.log("Index:",i);

