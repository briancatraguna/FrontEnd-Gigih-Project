const students = [
    { name: "Alice", age: 20},
    { name: "Bob", age: 21},
    { name: "John", age: 20},
    { name: "Jane", age: 20},
];

let table = document.getElementById("myTable");
let totalAge = 0

students.forEach((item,index)=>{
    let newRow = table.insertRow(-1);
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);

    cell1.innerHTML = item.name;
    cell2.innerHTML = item.age;
    totalAge+=item.age;
})

function calcAverage(){
    let averageText = document.getElementById("aveResult");
    let result = totalAge/students.length
    averageText.innerHTML = result
    console.log(result);
}