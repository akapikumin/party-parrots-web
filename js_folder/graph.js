var i;
var j;

window.onload = function() {
    var graph_label = [0, 0, 0, 0, 0, 0, 0];        //グラフのラベル
    var sleep_data  = [0, 0, 0, 0, 0, 0, 0];        //就寝時刻
    var getup_data  = [0, 0, 0, 0, 0, 0, 0];        //起床時刻
    var sleep_data2 = [0, 0, 0, 0, 0, 0, 0];        //就寝時間
    var c           = [44, 44, 44, 44, 44, 44, 44]; //全要素44
    var sleep_record = JSON.parse(localStorage.getItem("sleep_record"));   //ストレージから就寝時刻を取得
    var getup_record = JSON.parse(localStorage.getItem("getup_record"));   //ストレージから起床時刻を取得
    var kakapo_status = JSON.parse(localStorage.getItem("kakapo_status")); //ストレージからカカポのステータスを取得
    var target_sleep = Number(schedule_data.sleep_hour) + (Number(schedule_data.sleep_min) / 60);   //目標就寝時刻
    if (target_sleep == 0) {
        target_sleep = 24;
    }
    var target_getup = Number(schedule_data.wakeup_hour) + (Number(schedule_data.wakeup_min) / 60) + 24; //目標起床時刻
    var N = Number(kakapo_status["growth_date"]); //データ数
    var data;
    var h_m = [];

    //データラベルを作成
    for (i = 0; ((i < 7) || (i < N)); i++) {
        graph_label[i] = i + 1 + "日目";
    }

    //就寝時刻のデータセットを作成
    for (i = 0; i < N; i++) {
        data = sleep_record[String(i)];
        if (data == '0') {
            sleep_data[i] = 0;
            continue;
        }
        for (j = 0; j < 2; j++) {
            h_m = data.split(":");
        }
        sleep_data[i] = Number(h_m[0]) + (Number(h_m[1]) / 60);
        if (sleep_data[i] < 12) {
            sleep_data[i] += 24;
        }
    }

    //起床時刻のデータセットを作成
    for (i = 0; i < N; i++) {
        data = getup_record[String(i)];
        if (data == '0') {
            getup_data[i] = 0;
            continue;
        }
        for (j = 0; j < 2; j++) {
            h_m = data.split(":");
        }
        getup_data[i] = Number(h_m[0]) + (Number(h_m[1]) / 60) + 24;
    }

    //就寝時間のデータセットを作成
    for (i = 0; i < N; i++) {
        sleep_data2[i] = getup_data[i] - sleep_data[i];
    }

    for (i = 0; i < N; i++) {
        c[i] = 44;
    }

    //成功判定と, それに伴う色の変更
    var colors = [''];
    for (i = 0; i < N; i++) {
        if (sleep_data[i] <= target_sleep && getup_data[i] <= target_getup) {
            colors[i] = 'rgba(255, 160, 0, 0.8)'
        }
        else {
            colors[i] = 'rgba(0, 0, 140, 0.8)'
        }
    }

    var n = 7;
    if (N > 7) {
        n = N;
    }

    //ラベルのフォントカラーとフォントサイズ
    Chart.defaults.global.defaultFontColor = "black";
    Chart.defaults.global.defaultFontSize = 40;

    var ctx = document.getElementById("graph").getContext("2d");
    var myChart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: graph_label,
            datasets: [{
                    label: "就寝時刻",
                    data: sleep_data,
                    backgroundColor: "rgba(8, 8, 8, 0.5)"
                }, {
                    label: "就寝時間",
                    data: sleep_data2,
                    backgroundColor: colors
                }, {
                    label: "それ以降",
                    data: c,
                    backgroundColor: "rgba(8, 8, 8, 0.5)"
                }
            ]
        },
        options: {
            responsive: false,
            scales: {
                xAxes: [{
                    stacked: true,
                    barPercentage: 7 / (1.1 * n),
                }],
                yAxes: [{
                    stacked: true,
                    ticks: {
                        stepSize: 1,
                        min: 12,
                        max: 36,
                        callback: function(label) {
                            if (label > 24) {
                                label -= 24;
                            }
                            return label;
                        }
                    }
                }],
            },
            legend: {
                display: false
            }
        }
    });
}