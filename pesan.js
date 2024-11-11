function doPost(e) {
    var sheet = SpreadsheetApp.openById('https://docs.google.com/spreadsheets/d/1vJvIpOe6Bkzuee5U9VO_67rk5TqkjRw8o5e7ct18U3w/edit?usp=sharing').getActiveSheet();
    var rowData = [];
    rowData.push(new Date()); // Timestamp
    rowData.push(e.parameter.name);
    rowData.push(e.parameter.email);
    rowData.push(e.parameter.message);
    sheet.appendRow(rowData);
    return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
  }
  