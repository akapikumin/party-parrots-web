  //参考サイト
  //https://syncer.jp/javascript-reference/canvas-getcontext


  //ユーザーステータスを取得
  var user_status = JSON.parse(localStorage.getItem("user_status"));
  console.log(user_status.grew_kakapo);

  //育てたカカポの数を取得（初期値 0）
  var kakapo_number = user_status.grew_kakapo - 1;
  //var kakapo_number = 9;
  for(var i = 0; i <= kakapo_number; i++){
      if(i == 0){
        //カカポはまだ生まれていないため表示なし  
      }
      if(i == 1){
        // カカポを表示
        　document.getElementById("kakapo_pic_space").innerHTML = '<img src="image_folder/kakapo_1.gif" class="kakapo1">';
      }
      if(i == 2){
          // カカポを表示
        　document.getElementById("kakapo_pic_space").innerHTML = '<img src="image_folder/kakapo_1.gif" class="kakapo1"><img src="image_folder/kakapo_2.gif" class="kakapo2">';
      }
      if(i == 3){
          // カカポを表示
        　document.getElementById("kakapo_pic_space").innerHTML = '<img src="image_folder/kakapo_1.gif" class="kakapo1"><img src="image_folder/kakapo_2.gif" class="kakapo2"><img src="image_folder/kakapo_3.gif" class="kakapo3">';
      }
      if(i == 4){
          // カカポを表示
        　document.getElementById("kakapo_pic_space").innerHTML = '<img src="image_folder/kakapo_1.gif" class="kakapo1"><img src="image_folder/kakapo_2.gif" class="kakapo2"><img src="image_folder/kakapo_3.gif" class="kakapo3"><img src="image_folder/kakapo_4.gif" class="kakapo4">';
      }
      if(i == 5){
          // カカポを表示
        　document.getElementById("kakapo_pic_space").innerHTML = '<img src="image_folder/kakapo_1.gif" class="kakapo1"><img src="image_folder/kakapo_2.gif" class="kakapo2"><img src="image_folder/kakapo_3.gif" class="kakapo3"><img src="image_folder/kakapo_4.gif" class="kakapo4"><img src="image_folder/kakapo_5.gif" class="kakapo5">';
      }
      if(i == 6){
        // カカポを表示
      　document.getElementById("kakapo_pic_space").innerHTML = '<img src="image_folder/kakapo_1.gif" class="kakapo1"><img src="image_folder/kakapo_2.gif" class="kakapo2"><img src="image_folder/kakapo_3.gif" class="kakapo3"><img src="image_folder/kakapo_4.gif" class="kakapo4"><img src="image_folder/kakapo_5.gif" class="kakapo5"><img src="image_folder/kakapo_6.gif" class="kakapo6">';
    }
    if(i == 7){
        // カカポを表示
      　document.getElementById("kakapo_pic_space").innerHTML = '<img src="image_folder/kakapo_1.gif" class="kakapo1"><img src="image_folder/kakapo_2.gif" class="kakapo2"><img src="image_folder/kakapo_3.gif" class="kakapo3"><img src="image_folder/kakapo_4.gif" class="kakapo4"><img src="image_folder/kakapo_5.gif" class="kakapo5"><img src="image_folder/kakapo_6.gif" class="kakapo6"><img src="image_folder/kakapo_7.gif" class="kakapo7">';
    }
    if(i == 8){
        // カカポを表示
      　document.getElementById("kakapo_pic_space").innerHTML = '<img src="image_folder/kakapo_1.gif" class="kakapo1"><img src="image_folder/kakapo_2.gif" class="kakapo2"><img src="image_folder/kakapo_3.gif" class="kakapo3"><img src="image_folder/kakapo_4.gif" class="kakapo4"><img src="image_folder/kakapo_5.gif" class="kakapo5"><img src="image_folder/kakapo_6.gif" class="kakapo6"><img src="image_folder/kakapo_7.gif" class="kakapo7"><img src="image_folder/kakapo_8.gif" class="kakapo8">';
    }
    if(i == 9){
        // カカポを表示
      　document.getElementById("kakapo_pic_space").innerHTML = '<img src="image_folder/kakapo_1.gif" class="kakapo1"><img src="image_folder/kakapo_2.gif" class="kakapo2"><img src="image_folder/kakapo_3.gif" class="kakapo3"><img src="image_folder/kakapo_4.gif" class="kakapo4"><img src="image_folder/kakapo_5.gif" class="kakapo5"><img src="image_folder/kakapo_6.gif" class="kakapo6"><img src="image_folder/kakapo_7.gif" class="kakapo7"><img src="image_folder/kakapo_8.gif" class="kakapo8"<img src="image_folder/kakapo_9.gif" class="kakapo9">';
    }
    if(i == 10){
        // カカポを表示
      　document.getElementById("kakapo_pic_space").innerHTML = '<img src="image_folder/kakapo_1.gif" class="kakapo1"><img src="image_folder/kakapo_2.gif" class="kakapo2"><img src="image_folder/kakapo_3.gif" class="kakapo3"><img src="image_folder/kakapo_4.gif" class="kakapo4"><img src="image_folder/kakapo_5.gif" class="kakapo5"><img src="image_folder/kakapo_6.gif" class="kakapo6"><img src="image_folder/kakapo_7.gif" class="kakapo7"><img src="image_folder/kakapo_8.gif" class="kakapo8"<img src="image_folder/kakapo_9.gif" class="kakapo9"><img src="image_folder/kakapo_10.gif" class="kakapo10">';
    }
    if(i == 11){
        // カカポを表示
      　document.getElementById("kakapo_pic_space").innerHTML = '<img src="image_folder/kakapo_1.gif" class="kakapo1"><img src="image_folder/kakapo_2.gif" class="kakapo2"><img src="image_folder/kakapo_3.gif" class="kakapo3"><img src="image_folder/kakapo_4.gif" class="kakapo4"><img src="image_folder/kakapo_5.gif" class="kakapo5"><img src="image_folder/kakapo_6.gif" class="kakapo6"><img src="image_folder/kakapo_7.gif" class="kakapo7"><img src="image_folder/kakapo_8.gif" class="kakapo8"<img src="image_folder/kakapo_9.gif" class="kakapo9"><img src="image_folder/kakapo_10.gif" class="kakapo10"><img src="image_folder/kakapo_11.gif" class="kakapo11">';
    }
    if(i == 12){
        // カカポを表示
      　document.getElementById("kakapo_pic_space").innerHTML = '<img src="image_folder/kakapo_1.gif" class="kakapo1"><img src="image_folder/kakapo_2.gif" class="kakapo2"><img src="image_folder/kakapo_3.gif" class="kakapo3"><img src="image_folder/kakapo_4.gif" class="kakapo4"><img src="image_folder/kakapo_5.gif" class="kakapo5"><img src="image_folder/kakapo_6.gif" class="kakapo6"><img src="image_folder/kakapo_7.gif" class="kakapo7"><img src="image_folder/kakapo_8.gif" class="kakapo8"<img src="image_folder/kakapo_9.gif" class="kakapo9"><img src="image_folder/kakapo_10.gif" class="kakapo10"><img src="image_folder/kakapo_11.gif" class="kakapo11"><img src="image_folder/kakapo_12.gif" class="kakapo12">';
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
