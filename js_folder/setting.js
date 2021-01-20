// ミリ秒間待機する
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


'use strict'

var config = JSON.parse(localStorage.getItem("config"));

console.log(config);

var is = document.getElementById("input_sleep_time");
var iw = document.getElementById("input_wakeup_time");
is.setAttribute("value", ('00' + config.sleep_hour).slice(-2) + ':' + ('00' + config.sleep_min).slice(-2));
iw.setAttribute("value", ('00' + config.wakeup_hour).slice(-2) + ':' + ('00' + config.wakeup_min).slice(-2));

function confSetItem(){
    config.sleep_hour = Number(is.value.slice(0, 2));
    config.sleep_min = Number(is.value.slice(3, 5));
    config.wakeup_hour = Number(iw.value.slice(0, 2));
    config.wakeup_min = Number(iw.value.slice(3, 5));

    localStorage.setItem("config", JSON.stringify(config));

    document.getElementById("changed_message").textContent = '時刻が新しく設定されました。データを更新します…';
    console.log(config);
    
    //ページの再読み込み
    setTimeout("location.reload(true)", 3000);
    
};

//ページ遷移
function home(){
    window.location.href = "index.html";
}

function LS_clear(){
    var clear_button1 = confirm("これまでの睡眠記録を削除しますか？");
    if (clear_button1 == true){
        var clear_button2 = confirm("本当に削除しますか？");
        if(clear_button2 == true){
            //LocalStorageのデータを削除
            localStorage.clear();
            //ホームのページに遷移
            //5秒後に再読み込み(仮)
            setTimeout("home()", 5000);
            document.getElementById("changed_message").textContent = '睡眠データが削除されました。トップページに戻ります。';
        }
    }
}



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