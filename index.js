const XLSX = require('xlsx');
const data = require('./data');

// Sample data array

// Function to create Excel file
function createExcel(data) {
  // Map data to desired format
  const formattedData = data.map(company => ({
    Name: company.name,
    Website: company.website,
    Description: company.long_description,
    Locations: company.all_locations,
    Tags: company.tags.join(', '),
    Industries: company.industries.join(', ')
  }));

  // Create worksheet
  const worksheet = XLSX.utils.json_to_sheet(formattedData);

  // Create workbook and append worksheet
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Companies');

  // Write to Excel file
  XLSX.writeFile(workbook, 'companies.xlsx');
}

// Create Excel from company data
createExcel(data);
