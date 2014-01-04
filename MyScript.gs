// 対象を選択して、処理をする

function setData() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  var range = sheet.getRange("A1");
  
  range.setValue(100);
}