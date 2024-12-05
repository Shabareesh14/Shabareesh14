function hours(){
var a=Number(document.getElementById("hrs").value);

if(a<=60) alert("0 HR :"+ a + "Mins");
else{
var b,c;
b=Math.floor(a/60);
c=a%60;
alert(b + "Hrs" + c + "Mins");
}
}