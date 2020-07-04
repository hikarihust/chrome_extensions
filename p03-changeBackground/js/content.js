chrome.runtime.onMessage.addListener(getMessage);

function getMessage( message,  sender,  sendResponse) {
    if(message.task == "changeBackgroundColor"){
        $("body").css("background-color", message.valueColor);
    }

    if(message.task == "changeTextColor"){
        $("a").css("color", message.valueColor);
    }
}