function initSheet() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var names = ["sensei", "phone", "droid"];
  
  sheet.clear(); // シートの初期化
  for (var i = 1; i <= 20; i++) {
    sheet.getRange(i, 1).setValue(names[Math.floor(Math.random() * names.length)]);
    sheet.getRange(i, 2).setValue(Math.floor(Math.random() * 101));
  }
}