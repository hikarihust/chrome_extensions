let bgPage = chrome.extension.getBackgroundPage();
let courseStr = bgPage.courseStr;

let url = "http://share.zendvn.com/api/findCourse.php?word_find=" + courseStr;
$.get(url, function(data, status){
    let dataObj = JSON.parse(data);
    let result  = "Không có kết quả tìm kiếm";

    if(dataObj.state == "success"){
        result = dataObj.result; 
    }

    $("b#show-content").html(result); 
});