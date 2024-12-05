function printMultiplication() {
    number = document.getElementById("number").value;
    range = document.getElementById("range").value;

    for (i = 1; i <= range; i++) {
        multiplication = i * number;

        table = (`${number} * ${i} = ${multiplication} <br> `);
        document.getElementById("display").innerHTML += table;

    }
}