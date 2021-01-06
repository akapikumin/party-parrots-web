'use strict'

var config = JSON.parse(localStorage.getItem("config"));

console.log(config)

var is = document.getElementById("input_sleep_time");
var iw = document.getElementById("input_wakeup_time");
is.setAttribute("value", ('00' + config.sleep_hour).slice(-2) + ':' + ('00' + config.sleep_min).slice(-2));
iw.setAttribute("value", ('00' + config.wakeup_hour).slice(-2) + ':' + ('00' + config.wakeup_min).slice(-2));