const xlsx = require("xlsx");
const fs = require("fs");
const path = require("path");

const sheetName = process.argv[2];

if (!sheetName) {
  console.error("Please provide a sheet name.");
  console.error("Example: node scripts/xlsx-to-json.js position-type");
  process.exit(1);
}

const excelFilePath = path.join(
  "cypress",
  "fixtures",
  "excel",
  "position-type.xlsx",
);

if (!fs.existsSync(excelFilePath)) {
  console.error(`Excel file not found: ${excelFilePath}`);
  process.exit(1);
}

const workbook = xlsx.readFile(excelFilePath);

if (!workbook.SheetNames.includes(sheetName)) {
  console.error(`Sheet "${sheetName}" not found in workbook.`);
  console.error(`Available sheets: ${workbook.SheetNames.join(", ")}`);
  process.exit(1);
}

const sheetData = workbook.Sheets[sheetName];
const jsonData = xlsx.utils.sheet_to_json(sheetData);

const outputDir = path.join("cypress", "fixtures");
const outputFilePath = path.join(outputDir, `${sheetName}.json`);

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.writeFileSync(outputFilePath, JSON.stringify(jsonData, null, 2));

console.log(`${sheetName}.json file created at ${outputFilePath}`);
