jQuery(function($) {
    const url = 'http://raspberrypi/cgi-bin/Test.py';
    $.getJSON(url)
    .done(function (data,textStatus,jqXHR) {
        // 通信が成功した時
        //let message = `通信が成功しました\njqXHR.status:${jqXHR.status}\ntextStatus:${textStatus}`;
        //alert(message);
        $('#VideoData').empty()
        // データを表示
        let list = $(data).get(0);
        let dataline = `<tr><td>${list}</td><td><video id="video" src="${list}" controls width="640" height="360"></video></td></tr>`;
        $('#VideoData').append(dataline);
        //$(data).each(function () {
        //    let dataline = `<tr><td>${this}</td><td><video id="video" src="${this}" controls width="640" height="360"></video></td></tr>`;
        // 新規1行追加
        //    $('#VideoData').append(dataline);
        //})
    }).fail(function (jqXHR, textStatus, errorThrown) {
        // 通信が失敗した時
        let message = `通信が失敗しました\njqXHR.status:${jqXHR.status}\ntextStatus:${textStatus}\nerrorThrown:${errorThrown}`;
        alert(message);
    }).always(function() {
        alert('完了しました');
    });
    // 「読込」ボタンが押されたとき
    //$('#btn1').click(function () {});
});
