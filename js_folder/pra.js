//卵の音を出す関数
function kakapo_play1(){
  // 対象となるID名
  var id = 'kakapo_sounds1';
  // 初回以外だったら音声ファイルを巻き戻す
  if( typeof( document.getElementById(id).currentTime ) != 'undefined' )
  {
    document.getElementById(id).currentTime = 0;
  }
  // [ID:sound-file]の音声ファイルを再生[play()]する
  document.getElementById(id).play() ;
}

function kakapo_play2(){
  // 対象となるID名
  var id = 'kakapo_sounds2';
  // 初回以外だったら音声ファイルを巻き戻す
  if( typeof( document.getElementById(id).currentTime ) != 'undefined' )
  {
    document.getElementById(id).currentTime = 0;
  }
  // [ID:sound-file]の音声ファイルを再生[play()]する
  document.getElementById(id).play() ;
}

function kakapo_play3(){
  // 対象となるID名
  var id = 'kakapo_sounds3';
  // 初回以外だったら音声ファイルを巻き戻す
  if( typeof( document.getElementById(id).currentTime ) != 'undefined' )
  {
    document.getElementById(id).currentTime = 0;
  }
  // [ID:sound-file]の音声ファイルを再生[play()]する
  document.getElementById(id).play() ;
}

function kakapo_play4(){
  // 対象となるID名
  var id = 'kakapo_sounds4';
  // 初回以外だったら音声ファイルを巻き戻す
  if( typeof( document.getElementById(id).currentTime ) != 'undefined' )
  {
    document.getElementById(id).currentTime = 0;
  }
  // [ID:sound-file]の音声ファイルを再生[play()]する
  document.getElementById(id).play() ;
}

function kakapo_play_special(){
  // 対象となるID名
  var id = 'kakapo_sounds_special';
  // 初回以外だったら音声ファイルを巻き戻す
  if( typeof( document.getElementById(id).currentTime ) != 'undefined' )
  {
    document.getElementById(id).currentTime = 0;
  }
  // [ID:sound-file]の音声ファイルを再生[play()]する
  document.getElementById(id).play() ; 
}


  //ユーザーステータスを取得
  var user_status = JSON.parse(localStorage.getItem("user_status"));
  console.log(user_status.grew_kakapo);

  //育てたカカポの数を取得（初期値 0）
  var kakapo_number = user_status.grew_kakapo - 1;
  for(var i = 0; i <= kakapo_number; i++){
    if(i == 0){
      //カカポはまだ生まれていないため表示なし  
    }
    else if(i == 1){
      // カカポを表示
      document.getElementById("kakapo_pic_space").innerHTML = '<img src="image_folder/kakapo_1.gif" class="kakapo1" onClick = "kakapo_play1()">';
    }
    else if(i == 2){
      // カカポを表示
      document.getElementById("kakapo_pic_space").innerHTML = '<img src="image_folder/kakapo_1.gif" class="kakapo1" onClick = "kakapo_play1()"><img src="image_folder/kakapo_2.gif" class="kakapo2" onClick = "kakapo_play2()">';
    }
    else if(i == 3){
      // カカポを表示
      document.getElementById("kakapo_pic_space").innerHTML = '<img src="image_folder/kakapo_1.gif" class="kakapo1" onClick = "kakapo_play1()"><img src="image_folder/kakapo_2.gif" class="kakapo2" onClick = "kakapo_play2()"><img src="image_folder/kakapo_3.gif" class="kakapo3" onClick = "kakapo_play3()">';
    }
    else if(i == 4){
      // カカポを表示
      document.getElementById("kakapo_pic_space").innerHTML = '<img src="image_folder/kakapo_1.gif" class="kakapo1" onClick = "kakapo_play1()"><img src="image_folder/kakapo_2.gif" class="kakapo2" onClick = "kakapo_play2()"><img src="image_folder/kakapo_3.gif" class="kakapo3" onClick = "kakapo_play3()"><img src="image_folder/kakapo_4.gif" class="kakapo4" onClick = "kakapo_play4()">';
    }
    else if(i == 5){
      // カカポを表示
      document.getElementById("kakapo_pic_space").innerHTML = '<img src="image_folder/kakapo_1.gif" class="kakapo1" onClick = "kakapo_play1()"><img src="image_folder/kakapo_2.gif" class="kakapo2" onClick = "kakapo_play2()"><img src="image_folder/kakapo_3.gif" class="kakapo3" onClick = "kakapo_play3()"><img src="image_folder/kakapo_4.gif" class="kakapo4" onClick = "kakapo_play4()"><img src="image_folder/kakapo_5.gif" class="kakapo5" onClick = "kakapo_play1()">';
    }
    else if(i == 6){
      // カカポを表示
      document.getElementById("kakapo_pic_space").innerHTML = '<img src="image_folder/kakapo_1.gif" class="kakapo1" onClick = "kakapo_play1()"><img src="image_folder/kakapo_2.gif" class="kakapo2" onClick = "kakapo_play2()"><img src="image_folder/kakapo_3.gif" class="kakapo3" onClick = "kakapo_play3()"><img src="image_folder/kakapo_4.gif" class="kakapo4" onClick = "kakapo_play4()"><img src="image_folder/kakapo_5.gif" class="kakapo5" onClick = "kakapo_play1()"><img src="image_folder/kakapo_6.gif" class="kakapo6" onClick = "kakapo_play2()">';
    }
    else if(i == 7){
      // カカポを表示
      document.getElementById("kakapo_pic_space").innerHTML = '<img src="image_folder/kakapo_1.gif" class="kakapo1" onClick = "kakapo_play1()"><img src="image_folder/kakapo_2.gif" class="kakapo2" onClick = "kakapo_play2()"><img src="image_folder/kakapo_3.gif" class="kakapo3" onClick = "kakapo_play3()"><img src="image_folder/kakapo_4.gif" class="kakapo4" onClick = "kakapo_play4()"><img src="image_folder/kakapo_5.gif" class="kakapo5" onClick = "kakapo_play1()"><img src="image_folder/kakapo_6.gif" class="kakapo6" onClick = "kakapo_play2()"><img src="image_folder/kakapo_7.gif" class="kakapo7" onClick = "kakapo_play3()">';
    }
    else if(i == 8){
      // カカポを表示
      document.getElementById("kakapo_pic_space").innerHTML = '<img src="image_folder/kakapo_1.gif" class="kakapo1" onClick = "kakapo_play1()"><img src="image_folder/kakapo_2.gif" class="kakapo2" onClick = "kakapo_play2()"><img src="image_folder/kakapo_3.gif" class="kakapo3" onClick = "kakapo_play3()"><img src="image_folder/kakapo_4.gif" class="kakapo4" onClick = "kakapo_play4()"><img src="image_folder/kakapo_5.gif" class="kakapo5" onClick = "kakapo_play1()"><img src="image_folder/kakapo_6.gif" class="kakapo6" onClick = "kakapo_play2()"><img src="image_folder/kakapo_7.gif" class="kakapo7" onClick = "kakapo_play3()"><img src="image_folder/kakapo_8.gif" class="kakapo8" onClick = "kakapo_play4()">';
    }
    else if(i == 9){
      // カカポを表示
      document.getElementById("kakapo_pic_space").innerHTML = '<img src="image_folder/kakapo_1.gif" class="kakapo1" onClick = "kakapo_play1()"><img src="image_folder/kakapo_2.gif" class="kakapo2" onClick = "kakapo_play2()"><img src="image_folder/kakapo_3.gif" class="kakapo3" onClick = "kakapo_play3()"><img src="image_folder/kakapo_4.gif" class="kakapo4" onClick = "kakapo_play4()"><img src="image_folder/kakapo_5.gif" class="kakapo5" onClick = "kakapo_play1()"><img src="image_folder/kakapo_6.gif" class="kakapo6" onClick = "kakapo_play2()"><img src="image_folder/kakapo_7.gif" class="kakapo7" onClick = "kakapo_play3()"><img src="image_folder/kakapo_8.gif" class="kakapo8" onClick = "kakapo_play4()"><img src="image_folder/kakapo_9.gif" class="kakapo9" onClick = "kakapo_play1()">';
    }
    else if(i == 10){
      // カカポを表示
      document.getElementById("kakapo_pic_space").innerHTML = '<img src="image_folder/kakapo_1.gif" class="kakapo1" onClick = "kakapo_play1()"><img src="image_folder/kakapo_2.gif" class="kakapo2" onClick = "kakapo_play2()"><img src="image_folder/kakapo_3.gif" class="kakapo3" onClick = "kakapo_play3()"><img src="image_folder/kakapo_4.gif" class="kakapo4" onClick = "kakapo_play4()"><img src="image_folder/kakapo_5.gif" class="kakapo5" onClick = "kakapo_play1()"><img src="image_folder/kakapo_6.gif" class="kakapo6" onClick = "kakapo_play2()"><img src="image_folder/kakapo_7.gif" class="kakapo7" onClick = "kakapo_play3()"><img src="image_folder/kakapo_8.gif" class="kakapo8" onClick = "kakapo_play4()"><img src="image_folder/kakapo_9.gif" class="kakapo9" onClick = "kakapo_play1()"><img src="image_folder/kakapo_10.gif" class="kakapo10" onClick = "kakapo_play2()">';
    }
    else if(i == 11){
      // カカポを表示
      document.getElementById("kakapo_pic_space").innerHTML = '<img src="image_folder/kakapo_1.gif" class="kakapo1" onClick = "kakapo_play1()"><img src="image_folder/kakapo_2.gif" class="kakapo2" onClick = "kakapo_play2()"><img src="image_folder/kakapo_3.gif" class="kakapo3" onClick = "kakapo_play3()"><img src="image_folder/kakapo_4.gif" class="kakapo4" onClick = "kakapo_play4()"><img src="image_folder/kakapo_5.gif" class="kakapo5" onClick = "kakapo_play1()"><img src="image_folder/kakapo_6.gif" class="kakapo6" onClick = "kakapo_play2()"><img src="image_folder/kakapo_7.gif" class="kakapo7" onClick = "kakapo_play3()"><img src="image_folder/kakapo_8.gif" class="kakapo8" onClick = "kakapo_play4()"><img src="image_folder/kakapo_9.gif" class="kakapo9" onClick = "kakapo_play1()"><img src="image_folder/kakapo_10.gif" class="kakapo10" onClick = "kakapo_play2()"><img src="image_folder/kakapo_11.gif" class="kakapo11" onClick = "kakapo_play_special()">';
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
  document.getElementById('schedule_time').textContent = schedule_text;
