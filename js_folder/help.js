//---データ名の説明---//
//last_load…サイトが読み込まれた時の各種データ
//config…就寝時刻などの各種設定データ




//就寝・起床時刻の表示
var schedule_data = JSON.parse(localStorage.getItem("config"));
if (schedule_data.sleep_min < 10){
    var schedule_text = "目標就寝時刻" + schedule_data.sleep_hour + ":0" + schedule_data.sleep_min;
}
else{
    var schedule_text = "目標就寝時刻" + schedule_data.sleep_hour + ":" + schedule_data.sleep_min;
}
if (schedule_data.wakeup_min < 10){
    schedule_text = schedule_text + "  目標起床時刻" + schedule_data.wakeup_hour + ":0" + schedule_data.wakeup_min;
}
else{
    schedule_text = schedule_text + "  目標起床時刻" + schedule_data.wakeup_hour + ":" + schedule_data.wakeup_min;
}
console.log(schedule_text);
document.getElementById('schedule_time').textContent = schedule_text;

