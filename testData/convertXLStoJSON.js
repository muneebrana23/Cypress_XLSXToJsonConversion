var fs = require('fs');
var xlsx = require("xlsx")
var dataPathExcel = "testData/DataFile1.xlsx"
var wb = xlsx.readFile(dataPathExcel);
var sheetName = wb.SheetNames[0]
var sheetValue = wb.Sheets[sheetName];
var data = xlsx.utils.sheet_to_json(sheetValue);

console.log(data);
fs.writeFile ("cypress/fixtures/testData.json", JSON.stringify(data), function(err) {
    if (err) throw err;
    console.log('complete');
    }
);