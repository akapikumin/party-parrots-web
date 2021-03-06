//---データ名の説明---//
//last_load…サイトが読み込まれた時の各種データ
//config…就寝時刻などの各種設定データ

//メッセージを出す関数
function message(text){
    document.getElementById('mes_txt').textContent = text;
}


//localstorageに初回アクセス済みのデータを書き込み
var access_record = {
    first_access: "done"
}
localStorage.setItem("access_record", JSON.stringify(access_record));

//アクセス記録を取得
var access_status = JSON.parse(localStorage.getItem("access_record"));

console.log(access_status.first_access);

//2回目以降の処理
if (access_status.first_access == "done") {
    //カカポのステータスを取得
    var kakapo_status = JSON.parse(localStorage.getItem("kakapo_status"));
    //成長度に応じた画像を表示
    if (kakapo_status.growth_rate < 4){
        //卵の表示(ここに卵の画像を追加。今まで育てたカカポの種類数を取得し、if文で分岐させる予定)
        document.getElementById('kakapo_pic_space').innerHTML = '<img src="image_folder/egg/egg1.png" class="kakapo">';
        //メッセージ
        message('まだ卵の状態だ');
    }
    if (4 <= kakapo_status.growth_rate && kakapo_status.growth_rate <= 6){
        //卵の表示(ここに卵(ヒビ入り)の画像を追加。今まで育てたカカポの種類数を取得し、if文で分岐させる予定)
        document.getElementById('kakapo_pic_space').innerHTML = '<img src="image_folder/egg/egg1_clack.png" class="kakapo">';
        //メッセージ
        message('ヒビが入ってきた…。 もうすぐ生まれそうだ!');
    }
    if (kakapo_status.growth_rate >= 7){
        //誕生メッセージ
        message('こんにちは！カカポだよ！');
        //カカポの表示(ここにカカポのgifを追加。今まで育てたカカポの種類数を取得し、if文で分岐させる予定)
        document.getElementById('kakapo_pic_space').innerHTML = '<img src="image_folder/parrot.gif" class="kakapo">';
        
        //user_statusの取得
        var user_data = JSON.parse(localStorage.getItem("user_status"));
        
        //新しい場所にこれまでの睡眠時間データを保存
        //これまでの起床時間データを保存
        //これまでのデータ
        var getup_data = JSON.parse(localStorage.getItem("getup_record"));
        //保存先
        var getup_data_all = JSON.parse(localStorage.getItem("getup_record_all"));
        //これまでのデータを保存先に書き込み
        for(let i = 0; i < 20; i++){
            getup_data_all[String(user_data['grew_kakapo'])] = getup_data_all[String(user_data['grew_kakapo'])] + ',' + getup_data[String(i)];
        }
        localStorage.setItem("getup_record_all", JSON.stringify(getup_data_all));
        
        //これまでの就寝時間データを保存
        var sleep_data = JSON.parse(localStorage.getItem("sleep_record"));
        //保存先
        var sleep_data_all = JSON.parse(localStorage.getItem("sleep_record_all"));
        //これまでのデータを保存先に書き込み
        for(let i = 0; i < 20; i++){
            sleep_data_all[String(user_data['grew_kakapo'])] = sleep_data_all[String(user_data['grew_kakapo'])] + ',' + sleep_data[String(i)];
        }
        localStorage.setItem("sleep_record_all", JSON.stringify(sleep_data_all));
        
        
        //今育てている卵とカカポの番号,これまでに育てたカカポの種類数を更新
        user_data['now_egg_num']++;
        user_data['now_kakapo_num']++;
        user_data['grew_kakapo']++;
        localStorage.setItem("user_status", JSON.stringify(user_data));
        
        //カカポのステータスをリセット
        var kakapo_data = JSON.parse(localStorage.getItem("kakapo_status"));
        kakapo_data['growth_date'] = 0;
        kakapo_data['growth_rate'] = 0;
        localStorage.setItem("kakapo_status", JSON.stringify(kakapo_data));
        
        //起床時間のデータリセット
        var getup_record = {
            1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, 11: 0,
            12: 0, 13: 0, 14: 0, 15: 0, 16: 0, 17: 0, 18: 0, 19: 0, 20: 0
        }
        localStorage.setItem("getup_record", JSON.stringify(getup_record));
        
        //就寝時間のデータをリセット
        var sleep_record = {
            1: 0,2: 0,3: 0,4: 0,5: 0,6: 0,7: 0,8: 0,9: 0,10: 0,11: 0,12: 0,
            13: 0,14: 0,15: 0,16: 0,17: 0,18: 0,19: 0,20: 0
        }
        localStorage.setItem("sleep_record", JSON.stringify(sleep_record));
        
        //「次のカカポを育てよう！」のようなボタンを押したら再読み込み
        
        //5秒後に再読み込み(仮)
        setTimeout("location.reload(true)", 5000);
    }
    
    
}
else{
    //初回アクセス時の処理
    
    //初回アクセス時のメッセージ
    alert("カカポの寝室にアクセスしていただきありがとうございます！\nまずは起床時刻と就寝時刻の設定をしましょう！");
    
    //起床時刻の設定
    //正しい値を入力しないと無限ループ
    do {
        var getup_time = prompt('目標起床時刻は何時ですか？(半角入力) 入力可能範囲:00:00~23:59\n記入例 6時30分→ 6:30 7時5分→ 7:05');
        var getup_time_str = String(getup_time);
        var getup_array = getup_time_str.split(':');
        //受け取った時間の「時」部分
        var getup_hour_calc = Number(getup_array[0]);
        //受け取った時間の「分」部分
        var getup_min_calc = Number(getup_array[1]);
    } while ((0 > getup_hour_calc || 24 <= getup_hour_calc) || (0 > getup_min_calc || 60 <= getup_min_calc) || (isNaN(Number(getup_hour_calc)) || isNaN(Number(getup_min_calc))))
    
    //就寝時刻の設定
    //正しい値を入力しないと無限ループ
    do {
        var sleep_time = prompt('目標就寝時刻は何時ですか？(半角入力) 入力可能範囲:00:00~23:59\n記入例→ 23時00分→ 23:00 22時5分→ 22:05');
        var sleep_time_str = String(sleep_time);
        var sleep_array = sleep_time_str.split(':');
        //受け取った時間の「時」部分
        var sleep_hour_calc = Number(sleep_array[0]);
        //受け取った時間の「分」部分
        var sleep_min_calc = Number(sleep_array[1]);
    } while ((0 > sleep_hour_calc || 24 <= sleep_hour_calc) || (0 > sleep_min_calc || 60 <= sleep_min_calc) || (isNaN(Number(sleep_hour_calc)) || isNaN(Number(sleep_min_calc))))
    
    
    
    //最後に起床・就寝時刻を登録した日時を初期化
    var last_save = {
        year: 0,
        month: 0,
        date: 0,
        hour: 0,
        min: 0,
        sec: 0
    }
    localStorage.setItem("last_save", JSON.stringify(last_save));
    
    //設定項目を書き込み
    var config = {
        //就寝時間
        sleep_hour: sleep_hour_calc,
        sleep_min: sleep_min_calc,
        //起床時間
        wakeup_hour: getup_hour_calc,
        wakeup_min: getup_min_calc
    }
    localStorage.setItem("config", JSON.stringify(config));
    
    
    //ユーザーのステータスを初期化
    var user_status = {
        //累計アクセス回数
        total_access: 1,
        //継続日数
        running_days: 1,
        //現在育てているカカポ
        now_kakapo_num: 1,
        //現在育てている卵
        now_egg_num: 1,
        //これまでに育てたカカポの種類数
        grew_kakapo: 1,
        //現在設定している部屋の背景
        back_image: 0
    }
    localStorage.setItem("user_status", JSON.stringify(user_status));
    
    //現在育てているカカポのステータスを初期化
    var kakapo_status = {
        //カカポの成長度
        growth_rate: 0,
        //育ち始めてからの日数
        growth_date: 0
    }
    localStorage.setItem("kakapo_status", JSON.stringify(kakapo_status));
    
    
    //現在のカカポを育てている期間の就寝時間データを初期化
    var sleep_record = {
        1: 0,2: 0,3: 0,4: 0,5: 0,6: 0,7: 0,8: 0,9: 0,10: 0,11: 0,12: 0,
        13: 0,14: 0,15: 0,16: 0,17: 0,18: 0,19: 0,20: 0
    }
    localStorage.setItem("sleep_record", JSON.stringify(sleep_record));
    
    //現在のカカポを育てている期間の起床時間データを初期化
    var getup_record = {
        1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, 11: 0,
        12: 0, 13: 0, 14: 0, 15: 0, 16: 0, 17: 0, 18: 0, 19: 0, 20: 0
    }
    localStorage.setItem("getup_record", JSON.stringify(getup_record));
    
    //これまでの記録をまとめて保存する場所を初期化
    var getup_record_all = {
        1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, 11: 0,
        12: 0, 13: 0, 14: 0, 15: 0, 16: 0, 17: 0, 18: 0, 19: 0, 20: 0
    }
    localStorage.setItem("getup_record_all", JSON.stringify(getup_record_all));
    var sleep_record_all = {
        1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, 11: 0,
        12: 0, 13: 0, 14: 0, 15: 0, 16: 0, 17: 0, 18: 0, 19: 0, 20: 0
    }
    localStorage.setItem("sleep_record_all", JSON.stringify(sleep_record_all));
    
    
    //クッキーの書き込み
    Cookies.set('first_access', 'done');
    
    //access_recordをdoneに書き換え
    //アクセス記録を取得
    var access_status = JSON.parse(localStorage.getItem("access_record"));
    access_status['first_access'] = "done";
    localStorage.setItem("access_record", JSON.stringify(access_status));
    
    
    //卵の表示
    document.getElementById('kakapo_pic_space').innerHTML = '<img src="image_folder/egg/egg1.png" class="kakapo">';
    
    //再読み込み
    location.reload(true);
}


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

//記録画面が押されたら実行
/*
document.getElementById("rec_button").onclick = function(){
    
}
*/


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

        //5秒後に再読み込み(仮)
        //setTimeout("location.reload(true)", 5000);

        //ページを再読み込み
        location.reload(true);
        
        modal.classList.add('hidden');
        mask.classList.add('hidden');
    }
    
    
  });
  mask.addEventListener('click', function () {
    modal.classList.add('hidden');
    mask.classList.add('hidden');
  });
}



//ハンバーガーメニュー
