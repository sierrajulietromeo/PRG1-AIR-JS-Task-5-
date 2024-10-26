const fs = require('fs');

function readCsv(filename, delimiter = ',') {
  try {
    const fileContent = fs.readFileSync(filename, { encoding: 'utf-8' });
    return fileContent
      .split('\n')
      .slice(1) // Skip header row
      .filter(row => row.trim()) // Remove empty rows
      .map(row => row.trim().split(delimiter));
  } catch (err) {
    console.error("Error reading file:", err.message);
    return null;
  }
}

// Usage example
const airportsData = readCsv('airports.csv');
if (airportsData) {
  airportsData.forEach(row => {
    console.log(row);
  });
}
