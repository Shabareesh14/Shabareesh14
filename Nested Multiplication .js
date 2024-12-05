function multiTable(){
    var a=Number(document.getElementById("num1").value);
    document.getElementById("out").innerText ="";
    
    for(let j=1; j<=a; j++){
        let row = "";
    for(let i=1; i<=10; i++) {
            row += i + "*" + j + "=" + (i*j) + " \n ";
        }
        document.getElementById("out").innerText += row + "\n";
    } 
}