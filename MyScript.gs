// form用のメソッド - トリガーをフォーム送信時にする
function sendReport(e) {
  var rs = '';
  
  var name = e.namedValue['お名前'];
  var email = e.namedValue['メールアドレス'];
  var attend = e.namedValues['参加？'];
  
  rs = "name: " + name + "\nemail: " + email + "\nattend: " + attend;
  
  MailApp.sendEmail("someone@gmail.com", "回答がありました", rs); // メールアドレスを入力
}

function sendReport() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var n = 0;
  for (var i = 1; i <= sheet.getLastRow(); i++) {
    if (sheet.getRange(i, 2).getValue() >= 70) { n++; }
  }
  
  MailApp.sendEmail(
    "someone@gmail.com", // ここにメールアドレスを入力
    "合格者の数",
    n + "名合格しました！"
  );
}

function onEdit(e) {
  e.range.setComment("Edited by: " + e.user);
}

function onOpen() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var menu = [
    {name: "初期化", functionName: "initSheet"},
    {name: "判定", functionName: "getResults"},
  ];
  ss.addMenu("処理メニュー", menu);
}

function initSheet() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var names = ["sensei", "phone", "droid"];
  
  sheet.clear(); // シートの初期化
  for (var i = 1; i <= 20; i++) {
    sheet.getRange(i, 1).setValue(names[Math.floor(Math.random() * names.length)]);
    sheet.getRange(i, 2).setValue(Math.floor(Math.random() * 101));
    sheet.getRange(i, 3).setValue(i);
  }
}

function getResults() {
  var sheet = SpreadsheetApp.getActiveSheet();
  for (var i = 1; i <= sheet.getLastRow(); i++) {
    if (sheet.getRange(i, 2).getValue() >= 70) {
      sheet.getRange(i, 3).setValue("OK").setBackground("green");
    } else {
      sheet.getRange(i, 3).setValue("NG").setBackground("red");
    }
  }
}