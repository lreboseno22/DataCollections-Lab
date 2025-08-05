// Expanding Functionality

// Declare a variable that stores the number of columns in each row of data within the CSV.
// Instead of hard-coding four columns per row, expand your code to accept any number of columns. 
// This should be calculated dynamically based on the first row of data.


// const csvString = "ID,Name,Occupation,Age\\n42,Bruce,Knight,41\\n57,Bob,Fry Cook,19\\n63,Blaine,Quiz Master,58\\n98,Bill,Doctor’s Assistant,26";

// let numOfColumn = 4;
// let table = [];
// let row = [];
// let cell = "";

// for (let i = 0; i < csvString.length; i++) {
//   let char = csvString[i];
//   let nextChar = csvString[i + 1]

//   if (char === "\\" && nextChar === "n") {
//     row.push(cell);
//     table.push(row);
//     row = [];
//     cell = "" 
//     i++; 
//   } 
//   else if (char === ",") {
//     row.push(cell);
//     cell = "";
//   } 
//   else {
//     cell += char;
//   }
// }

// console.log(table);


// Transforming Data

// For each row of data in the result array produced, create an object where the key of each value is the heading for that values column.

// Convert these keys to all lowercase letters for consistency
// Store these objects in array, in the order that they were originally listed.


const csvString = "ID,Name,Occupation,Age\\n42,Bruce,Knight,41\\n57,Bob,Fry Cook,19\\n63,Blaine,Quiz Master,58\\n98,Bill,Doctor’s Assistant,26"

let csvTable = [];
let csvCell = "";
let csvRow = [];

for (let i = 0; i < csvString.length; i++){
    let char = csvString[i];
    let nextChar = csvString[i + 1]

    if(char === `\\` && nextChar === "n"){
        csvRow.push(csvCell);
        csvTable.push(csvRow);
        csvCell = "";
        csvRow = [];
        i++
    } else if (char === ","){
        csvRow.push(csvCell);
        csvCell = "";
    } else {
        csvCell += char;
    }
}

let headers = [];

// Index 0 is the header row
for (let i = 0; i < csvTable[0].length; i++){
    headers.push(csvTable[0][i].toLowerCase());
}

let result = [];

// First loop over each row, starting from index 1 because index 0 is the header row
for (let i = 1; i < csvTable.length; i++){
    let row = csvTable[i];
    let csvObj = {};
    // Loop over each column index to match headers to row values
    for (let j = 0; j < headers.length; j++){
        csvObj[headers[j]] = row[j];
    }
    result.push(csvObj);
}

console.log(result);

// Sorting and Manipulating Data

// Remove the last element from the sorted array
let remove = result.pop();

// Insert object at index 1
let insert = result.splice(1, 0, {id: "48", name: "Barry", occupation: "Runner", age: "25" });

// Add object to the end of an array
let addToEnd = result.push({id: "7", name: "Bilbo", occupation:"None", age: "111"});


// Find average age in group
let totalAge = 0;

for (let i = 0; i < result.length; i++){
    totalAge += Number(result[i].age); // grab age key
}

let avgAge = totalAge / result.length;
console.log(avgAge);


// Full circle

let csvFormatResult = "";

for(let i = 0; i < headers.length; i++){
    csvFormatResult += headers[i] + ",";
}

csvFormatResult = csvFormatResult.slice(0, -1); // Remove last comma
csvFormatResult += "\n";

// loop through each object in result array
for(let i = 0; i < result.length; i++){
    let row = "";
    // loop through each header to access values
    for (let j = 0; j < headers.length; j++){
        row += result[i][headers[j]] + ",";
    }
    row = row.slice(0, -1);
    csvFormatResult += row + "\n";
}

console.log(csvFormatResult);