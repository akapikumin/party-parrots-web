'use strict'

var config = JSON.parse(localStorage.getItem("config"));

console.log(config)

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

    document.getElementById("changed_message").textContent = '時刻が新しく設定されました';
};
