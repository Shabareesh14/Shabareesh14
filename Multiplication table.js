var number, range, i;
function printMultiplication() {
    number = document.getElementById("number").value;
    range = document.getElementById("range").value;

    var multiplication,table;
    for (i = 1; i <= range; i++) {
        multiplication = i * number;

        table = (`${number} X ${i} = ${multiplication} <br>`);
        // table = number + "X" + i + "=" + multiplication + "\n";
        document.getElementById("display").innerHTML += table;

    }
}