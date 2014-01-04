// 対象を選択して、処理をする

function setData() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  var range = sheet.getRange(1, 2);
  
  range.setValue(100);
  range.setBackground("#ff0000");
}