/*
//カカポのステータスを取得
var kakapo_status = JSON.parse(localStorage.getItem("kakapo_status"));

//読み込み時の各種データを書き込み
var now = new Date();
var last_load = {
    //現在時刻
    now_year: now.getFullYear(),
    now_month: now.getMonth() + 1,
    now_date: now.getDate(),
    now_hour: now.getHours(),
    now_min: now.getMinutes(),
    now_sec: now.getSeconds()
}
localStorage.setItem("last_load", JSON.stringify(last_load));

//現在時刻の表示
var nowtime = function() {
    var now = new Date();
    if(now.getMinutes() < 10){
        var nowdate_text = "現在時刻" + now.getHours() + ":0" + now.getMinutes();
    }
    else{
        var nowdate_text = "現在時刻" + now.getHours() + ":" + now.getMinutes();
    }
    document.getElementById('now_date').textContent = nowdate_text;
    refresh();
}
var refresh = function() {
    setTimeout(nowtime, 1000);
}
nowtime();
*/

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
document.getElementById('schedule_time').textContent = schedule_text;

/*
//ポップアップの処理
'use strict';
{
    const open = document.getElementById('open');
    const close = document.getElementById('close');
    const submit = document.getElementById('submit_btn');
    const modal = document.getElementById('modal');
    const mask = document.getElementById('mask');

    open.addEventListener('click', function () {
        modal.classList.remove('hidden');
        mask.classList.remove('hidden');
    });
    close.addEventListener('click', function () {
        modal.classList.add('hidden');
        mask.classList.add('hidden');
    });
    submit.addEventListener('click', function () {
        //-------ここに登録ボタンが押された時の処理を書く-----------
        //カカポの成長度を参照
        var kakapo_status = JSON.parse(localStorage.getItem("kakapo_status"));

        //入力されたデータを取得
        var getup_time = document.getElementById('getup_rec').value; //入力された起床時刻データ
        var sleep_time = document.getElementById('sleep_rec').value; //入力された就寝時刻データ
    
        //正しく入力されたか判定
        var getup_array = getup_time.split(':');
        var getup_min = Number(getup_array[1]); //入力された起床時刻データの「分」
        var sleep_array = sleep_time.split(':');
        var sleep_min = Number(sleep_array[1]); //入力された就寝時刻データの「分」
    
        //入力値がnullではないか判定
        if(isNaN(getup_min) || isNaN(sleep_min)){
            //警告メッセージを出力
            document.getElementById('alert_mes').textContent = '正しく値が入力されていません';
        }
        else{
            //localstorageの起床・就寝時刻データを取得
            var getup_data = JSON.parse(localStorage.getItem("getup_record"));  //localstorageの起床時刻データ
            var sleep_data = JSON.parse(localStorage.getItem("sleep_record"));  //localstorageの就寝時刻データ

            getup_data[String(kakapo_status.growth_date)] = getup_time; //何日目か指定し、起床時刻を代入
            sleep_data[String(kakapo_status.growth_date)] = sleep_time; //何日目か指定し、就寝時刻を代入

            localStorage.setItem("getup_record", JSON.stringify(getup_data));//localstorageを入力された起床時刻データで更新
            localStorage.setItem("sleep_record", JSON.stringify(sleep_data));//localstorageを入力された就寝時刻データで更新

            //カカポを育て始めてからの日数を更新
            kakapo_status["growth_date"]++;
            //カカポの成長度を更新(ここを睡眠時間などで判定して、成長度を変える)
            kakapo_status["growth_rate"]++;
            //データを書き込み
            localStorage.setItem("kakapo_status", JSON.stringify(kakapo_status));

            //書き込んだ日時を記録
            var save_time = JSON.parse(localStorage.getItem("last_save"));
            var now = new Date();
            //現在の時刻を取得
            save_time['year'] = now.getFullYear();
            save_time['month'] = now.getMonth() + 1;
            save_time['date'] = now.getDate();
            save_time['hour'] = now.getHours();
            save_time['min'] = now.getMinutes();
            save_time['sec'] = now.getSeconds()
            //書き込んだ時刻を上書き
            localStorage.setItem("last_save", JSON.stringify(save_time));

            //ページを再読み込み
            location.reload(true);
        
            modal.classList.add('hidden');
            mask.classList.add('hidden');
        }}
    );
    mask.addEventListener('click', function () {
        modal.classList.add('hidden');
        mask.classList.add('hidden');
    })
}
*/