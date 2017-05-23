function doGet() {
  var t = HtmlService.createTemplateFromFile('Index');
HtmlService.createTemplateFromFile('Index');
 ss = SpreadsheetApp
      .openById('1Yi4txfn330tpoWmGTrPLycV3-zqmkKjHMtO59IHsnjk');
 t.HVD = 
      ss.getSheetByName("HVD")
      .getDataRange()
      .getValues();
  t.HEF =
      ss.getSheetByName("HVD")
      .getDataRange()
      .getValues();
  t.HMA = 
      ss.getSheetByName("HMA")
      .getDataRange()
      .getValues();

  return t.evaluate();
}
// setRowsData fills in one row of data per object defined in the formObject Array.
// For every Column, it checks if data formObject define a value for it.
// Arguments:
//   - sheet: the Sheet Object where the data will be written
//   - formObject: an Array of formObject, each of which contains data for a row
//   - optHeadersRange: a Range of cells where the column headers are defined. This
//     defaults to the entire first row in sheet.
//   - optFirstDataRowIndex: index of the first row where data should be written. This
//     defaults to the row immediately below the headers.
 
 var sheet = SpreadsheetApp   
    .openById('1Yi4txfn330tpoWmGTrPLycV3-zqmkKjHMtO59IHsnjk')
    .getSheetByName("Orders");

function setRowsData(sheet, formObject, optHeadersRange, optFirstDataRowIndex){

  var headersRange = optHeadersRange || sheet.getRange(1, 1, 1, sheet.getMaxColumns());
  var firstDataRowIndex = optFirstDataRowIndex || headersRange.getRowIndex() + 1;
  var headers = normalizeHeaders(headersRange.getValues()[0]);

  var data = [];
  for (var i = 0; i < formObject.length; ++i) {
    var values = []
    for (j = 0; j < headers.length; ++j) {
      var header = headers[j];
      values.push(header.length > 0 && formObject[i][header] ? formObject[i][header] : "");
    }
    data.push(values);
  }
  var destinationRange = sheet.getRange(firstDataRowIndex, headersRange.getColumnIndex(), 
                                        formObject.length, headers.length);
  destinationRange.setValues(data);
}

