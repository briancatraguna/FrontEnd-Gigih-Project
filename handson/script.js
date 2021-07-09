const students = [
    { name: "Alice", age: 20},
    { name: "Bob", age: 21},
    { name: "John", age: 20},
    { name: "Jane", age: 20}
];

let myTable = document.getElementById("myTable");

var row = myTable.insertRow(0);
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
cell1.innerHTML = "NEW CELL1";
cell2.innerHTML = "NEW CELL2";